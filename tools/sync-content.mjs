// ============================================================
// Sync content from Obsidian vault into portal repo.
// - Reads .md from MED-Vault-2.0/
// - Filters by frontmatter `tipo` (skips aulas/raw)
// - Copies referenced images from MED-Imagens/ (by basename)
// - Output: content/ folder ready to be parsed by build.mjs
// ============================================================
import matter from "gray-matter";
import { readFile, writeFile, mkdir, cp, readdir, stat, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, basename, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const VAULT = "K:/Work/Obsidian Claud/Med Test/MED-Vault-2.0";
const IMAGES_BANK = "C:/Users/Xaxitah/OneDrive/MED-Imagens";
const CONTENT_OUT = join(repoRoot, "content");
const IMAGES_OUT = join(CONTENT_OUT, "imagens");

const WITH_IMAGES = process.argv.includes("--with-images");

const INCLUDED_TYPES = new Set([
  "resumo",
  "livro-capitulo",
  "livro-extraido",
  "mapa-mental",
  "revisao-para-prova",
  "questao",
  "flashcard",
]);

// Disciplines we care about (lowercase keys)
const DISCIPLINE_MAP = {
  "farmacologia": "farmacologia",
  "semiologia-medica": "semiologia-medica",
  "semiologia-quirurgica": "semiologia-quirurgica",
  "semiologia-cirurgica": "semiologia-quirurgica",
  "urologia": "urologia",
  "etica-medica": "etica-medica",
  "pratica-semiologia-medica": "pratica-semiologia-medica",
  "pratica-semiologia-quirurgica": "pratica-semiologia-quirurgica",
  "tecnicas-quirurgicas": "tecnicas-quirurgicas",
};

const IMG_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]);

const stats = {
  scanned: 0,
  copiedMd: 0,
  skippedNoFm: 0,
  skippedType: 0,
  imagesNeeded: new Set(),
  imagesCopied: 0,
  imagesMissing: new Set(),
};

// Recursive walk that returns all matching files
async function walk(dir, filter, out = []) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith(".") || e.name === "node_modules") continue;
      await walk(full, filter, out);
    } else if (filter(e.name)) {
      out.push(full);
    }
  }
  return out;
}

// Build an index of every image in MED-Imagens, keyed by basename (lowercase)
let imageIndex = null;
async function buildImageIndex() {
  console.log("[sync] indexing MED-Imagens...");
  imageIndex = new Map();
  const files = await walk(IMAGES_BANK, (n) => IMG_EXTS.has(extname(n).toLowerCase()));
  for (const f of files) {
    const key = basename(f).toLowerCase();
    if (!imageIndex.has(key)) imageIndex.set(key, f);
  }
  console.log(`[sync]   ${imageIndex.size} unique image basenames indexed`);
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9-_/.]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Decide output relative path based on metadata
function asStr(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

// Shorten verbose chapter filenames: keep only book + cap number + first meaningful word
function shortChapterSlug(name) {
  const lower = name.toLowerCase();
  // Try to extract "<book>-cap<NN>" pattern
  const capMatch = lower.match(/(florez|goodman|argente|llanio|leoncio|smith|tanagho|vanuno|propedeutica)?[-]?cap[-]?(\d+)/i);
  if (capMatch) {
    const book = capMatch[1] || "cap";
    return `${book}-cap${capMatch[2].padStart(2, "0")}`;
  }
  // Otherwise truncate hard
  return slugify(name).slice(0, 60);
}

function classify(fmData, srcRel) {
  const tipo = asStr(fmData.tipo);
  const disc = DISCIPLINE_MAP[asStr(fmData.disciplina).toLowerCase()] || "outros";
  const prova = asStr(fmData.prova).toLowerCase().replace(/[^a-z0-9]/g, "");

  if (tipo === "livro-capitulo" || tipo === "livro-extraido") {
    let livroPart = null;
    let m;
    if (m = srcRel.match(/01-Livros\/([^/]+)\//i)) { livroPart = m[1]; }
    else if (m = srcRel.match(/02-Capitulos-Extraidos\/[^/]+\/([^/]+)\//i)) { livroPart = m[1]; }
    else if (m = srcRel.match(/03-Biblioteca-md\/([^/]+)\//i)) { livroPart = m[1]; }
    if (livroPart) {
      const livro = livroPart.toLowerCase();
      // Normalize known book names to short keys
      const bookSlug = livro
        .replace(/farmacologia-livro-goodman-gilman-12-edicao-artmed/, "goodman-gilman")
        .replace(/farmacologia-humana-jesus-florez-6-ed/, "florez")
        .replace(/florez-6ed-pdf|florez-6ed/, "florez")
        .replace(/argente-semiologia-medica/, "argente")
        .replace(/llanio-propedeutica-clinica-tomo-i/, "llanio")
        .replace(/manual-basico-de-patologias-leoncio/, "leoncio")
        .replace(/smith-tanagho-urologia-geral/, "smith-tanagho")
        .replace(/propedeutica-clinica-semiologia-medica-tomo-i/, "propedeutica-tomo1");
      const chapter = basename(srcRel, ".md");
      return `livros/${disc}/${slugify(bookSlug)}/${shortChapterSlug(chapter)}.md`;
    }
    return `livros/${disc}/outros/${shortChapterSlug(basename(srcRel, ".md"))}.md`;
  }

  if (tipo === "resumo") {
    return `resumos/${disc}/${prova || "geral"}/${slugify(basename(srcRel, ".md"))}.md`;
  }

  if (tipo === "mapa-mental") {
    return `mapas-mentais/${disc}/${prova || "geral"}/${slugify(basename(srcRel, ".md"))}.md`;
  }

  if (tipo === "revisao-para-prova") {
    return `revisao-vespera/${disc}/${prova || "geral"}/${slugify(basename(srcRel, ".md"))}.md`;
  }

  if (tipo === "questao") {
    return `questoes/${disc}/${prova || "geral"}/${slugify(basename(srcRel, ".md"))}.md`;
  }

  if (tipo === "flashcard") {
    return `flashcards/${disc}/${prova || "geral"}/${slugify(basename(srcRel, ".md"))}.md`;
  }

  return null;
}

function extractImageRefs(md) {
  const refs = new Set();
  const obsidian = md.matchAll(/!\[\[([^\]|#]+?)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g);
  for (const m of obsidian) {
    const name = m[1].trim();
    if (IMG_EXTS.has(extname(name).toLowerCase())) {
      refs.add(basename(name));
    }
  }
  const mdImgs = md.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g);
  for (const m of mdImgs) {
    const path = m[1].trim();
    if (IMG_EXTS.has(extname(path).toLowerCase())) {
      refs.add(basename(path.split(/[?#]/)[0]));
    }
  }
  return [...refs];
}

async function processFile(srcAbs) {
  stats.scanned++;
  let raw;
  try { raw = await readFile(srcAbs, "utf8"); } catch { return; }

  let parsed;
  try { parsed = matter(raw); } catch { stats.skippedNoFm++; return; }

  const fmData = parsed.data || {};
  if (!fmData.tipo) { stats.skippedNoFm++; return; }
  if (!INCLUDED_TYPES.has(fmData.tipo)) { stats.skippedType++; return; }

  const srcRel = relative(VAULT, srcAbs).split("\\").join("/");
  const outRel = classify(fmData, srcRel);
  if (!outRel) return;

  // Augment frontmatter with source path for traceability
  const augmented = matter.stringify(parsed.content, {
    ...fmData,
    _source: srcRel,
  });

  const dest = join(CONTENT_OUT, outRel);
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, augmented, "utf8");
  stats.copiedMd++;

  for (const ref of extractImageRefs(parsed.content)) {
    stats.imagesNeeded.add(ref);
  }
}

async function copyImages() {
  if (!imageIndex) await buildImageIndex();
  await mkdir(IMAGES_OUT, { recursive: true });
  for (const ref of stats.imagesNeeded) {
    const key = ref.toLowerCase();
    const src = imageIndex.get(key);
    if (!src) { stats.imagesMissing.add(ref); continue; }
    const dest = join(IMAGES_OUT, ref);
    try {
      await cp(src, dest);
      stats.imagesCopied++;
    } catch (e) {
      stats.imagesMissing.add(ref);
    }
  }
}

async function main() {
  console.log("[sync] cleaning content/... (preserving content/imagens/ if present)");
  // Keep imagens folder if user already has it — only clean .md
  const subdirs = ["resumos", "livros", "mapas-mentais", "revisao-vespera", "questoes", "flashcards"];
  for (const d of subdirs) await rm(join(CONTENT_OUT, d), { recursive: true, force: true });
  await mkdir(CONTENT_OUT, { recursive: true });

  console.log("[sync] scanning vault for .md files...");
  const roots = [
    join(VAULT, "03-Disciplinas"),
    join(VAULT, "07-Biblioteca-Geral", "01-Livros"),
    join(VAULT, "07-Biblioteca-Geral", "02-Capitulos-Extraidos"),
  ];
  for (const root of roots) {
    if (!existsSync(root)) continue;
    const files = await walk(root, (n) => n.toLowerCase().endsWith(".md"));
    for (const f of files) await processFile(f);
  }

  if (WITH_IMAGES) {
    console.log("[sync] copying referenced images (--with-images)...");
    await copyImages();
  } else {
    console.log("[sync] skipping images (use --with-images to copy ~3GB into content/imagens/)");
  }

  console.log("");
  console.log("[sync] === SUMMARY ===");
  console.log(`  scanned:        ${stats.scanned} .md`);
  console.log(`  copied:         ${stats.copiedMd} .md`);
  console.log(`  skipped (no fm): ${stats.skippedNoFm}`);
  console.log(`  skipped (type):  ${stats.skippedType}`);
  console.log(`  images needed:   ${stats.imagesNeeded.size}`);
  console.log(`  images copied:   ${stats.imagesCopied}`);
  console.log(`  images missing:  ${stats.imagesMissing.size}`);
  if (stats.imagesMissing.size > 0 && stats.imagesMissing.size <= 20) {
    console.log("  missing:", [...stats.imagesMissing].slice(0, 20).join(", "));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
