import * as esbuild from "esbuild";
import { cp, mkdir, rm, readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { renderAll } from "./tools/render-content.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const outdir = join(root, "dist");
const watch = process.argv.includes("--watch");
const serve = process.argv.includes("--serve");

const JSX_DIRS = ["redesign/app", "ui_kits/portal", "ui_kits/study", "redesign"];
const COPY_FILES = [
  "_ds_bundle.js",
  "_ds_manifest.json",
  "styles.css",
  "app.html",
  "MedVault.html",
  "MedVault-Home-Redesenho.html",
  "Logo-Variacoes-Serpente.html",
  "README.md",
];
const COPY_DIRS = ["tokens", "assets", "guidelines", "components", "uploads"];

async function collectJsxFiles() {
  const files = [];
  for (const dir of JSX_DIRS) {
    const full = join(root, dir);
    if (!existsSync(full)) continue;
    const entries = await readdir(full, { withFileTypes: true });
    for (const e of entries) {
      if (e.isFile() && (e.name.endsWith(".jsx") || e.name.endsWith(".js"))) {
        files.push(join(full, e.name));
      }
    }
  }
  return files;
}

async function cleanDist() {
  await rm(outdir, { recursive: true, force: true });
  await mkdir(outdir, { recursive: true });
}

async function copyStaticFiles() {
  for (const file of COPY_FILES) {
    const src = join(root, file);
    if (!existsSync(src)) continue;
    await cp(src, join(outdir, file));
  }
  for (const dir of COPY_DIRS) {
    const src = join(root, dir);
    if (!existsSync(src)) continue;
    await cp(src, join(outdir, dir), {
      recursive: true,
      filter: (s) => !s.endsWith(".jsx"),
    });
  }
  for (const html of ["ui_kits/portal/index.html", "ui_kits/study/index.html"]) {
    const src = join(root, html);
    if (existsSync(src)) {
      await mkdir(dirname(join(outdir, html)), { recursive: true });
      await cp(src, join(outdir, html));
    }
  }
}

async function buildJsx() {
  const entryPoints = await collectJsxFiles();
  const ctx = await esbuild.context({
    entryPoints,
    outdir,
    outbase: root,
    loader: { ".jsx": "jsx", ".js": "js" },
    bundle: false,
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    target: ["es2019"],
    minify: !watch,
    sourcemap: watch ? "inline" : false,
    logLevel: "info",
    outExtension: { ".js": ".js" },
  });
  if (watch) {
    await ctx.watch();
    console.log("[build] watching for changes...");
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
}

function patchHtmlJsxToJs(html) {
  let out = html
    .replace(/<script\b[^>]*babel\/standalone[^>]*><\/script>\s*/gi, "")
    .replace(/(src=["'][^"']+)\.jsx(["'])/g, "$1.js$2")
    .replace(/type=["']text\/babel["']\s*/gi, "");

  out = out.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (match, attrs, body) => {
      if (/\bsrc=/.test(attrs)) return match;
      if (!/<[A-Z][A-Za-z0-9]*\s*\/?>/.test(body)) return match;
      const compiled = body.replace(
        /<([A-Z][A-Za-z0-9]*)\s*\/>/g,
        "React.createElement($1)"
      );
      return `<script${attrs}>${compiled}</script>`;
    }
  );

  return out;
}

async function patchHtmlsInDist() {
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (e.name.endsWith(".html")) {
        const content = await readFile(full, "utf8");
        const patched = patchHtmlJsxToJs(content);
        if (patched !== content) {
          await writeFile(full, patched, "utf8");
        }
      }
    }
  }
  await walk(outdir);
}

async function fullBuild() {
  console.log("[build] cleaning dist/...");
  await cleanDist();
  console.log("[build] copying static files...");
  await copyStaticFiles();
  console.log("[build] compiling JSX...");
  await buildJsx();
  console.log("[build] patching HTML references (.jsx -> .js, removing Babel CDN)...");
  await patchHtmlsInDist();
  console.log("[build] rendering markdown content...");
  await renderAll();
  console.log("[build] done -> dist/");
}

await fullBuild();

if (serve) {
  const port = 5173;
  const { default: srv } = await import("node:http").then(() => ({ default: null }));
  const fs = await import("node:fs/promises");
  const mime = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
  };
  createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      const file = join(outdir, p);
      const data = await fs.readFile(file);
      const ext = file.slice(file.lastIndexOf("."));
      res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("not found");
    }
  }).listen(port);
  console.log(`[serve] http://localhost:${port}/`);
}
