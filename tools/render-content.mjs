// ============================================================
// Render markdown content from content/ into HTML pages with v2 design.
// Also emits content-manifest.json with all artifact metadata.
// ============================================================
import matter from "gray-matter";
import { Marked } from "marked";
import { readFile, writeFile, mkdir, readdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, basename, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const CONTENT_DIR = join(repoRoot, "content");
const DIST_DIR = join(repoRoot, "dist");
const CONTENT_OUT = join(DIST_DIR, "content");
const IMAGES_OUT = join(DIST_DIR, "imagens");

const DISC_LABEL = {
  "farmacologia": "Farmacologia",
  "semiologia-medica": "Semiologia Médica",
  "semiologia-quirurgica": "Semiologia Quirúrgica",
  "urologia": "Urologia",
  "etica-medica": "Ética Médica",
  "pratica-semiologia-medica": "Prática Semiologia Médica",
  "pratica-semiologia-quirurgica": "Prática Semiologia Quirúrgica",
  "tecnicas-quirurgicas": "Técnicas Quirúrgicas",
  "outros": "Outros",
};

const DISC_COLOR = {
  "farmacologia": "var(--mv-farm)",
  "semiologia-medica": "var(--mv-semi)",
  "semiologia-quirurgica": "var(--mv-semiq)",
  "urologia": "var(--mv-urol)",
  "etica-medica": "var(--mv-etica)",
  "pratica-semiologia-medica": "var(--mv-semi)",
  "pratica-semiologia-quirurgica": "var(--mv-semiq)",
  "tecnicas-quirurgicas": "var(--mv-semiq)",
  "outros": "#666",
};

const TIPO_LABEL = {
  "resumo": "Resumo",
  "livro-capitulo": "Capítulo de Livro",
  "livro-extraido": "Capítulo Extraído",
  "mapa-mental": "Mapa Mental",
  "revisao-para-prova": "Revisão Véspera",
  "questao": "Questões",
  "flashcard": "Flashcards",
};

const TIPO_DIR = {
  "resumos": "resumo",
  "livros": "livro-capitulo",
  "mapas-mentais": "mapa-mental",
  "revisao-vespera": "revisao-para-prova",
  "questoes": "questao",
  "flashcards": "flashcard",
};

function asStr(v) { return (v === null || v === undefined) ? "" : String(v); }

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const CALLOUT_ICONS = {
  info: "ℹ", note: "✎", tip: "💡", warning: "⚠", danger: "🚨",
  important: "★", example: "▤", quote: "“", success: "✓",
  question: "?", abstract: "▦", todo: "□", failure: "✕", bug: "⚠",
};

// Convert Obsidian callout block (> [!type] Title \n > body) into a styled <div>.
// Run before passing to marked.
function preprocessCallouts(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^>\s*\[!(\w+)\][+-]?\s*(.*)$/i);
    if (m) {
      const type = m[1].toLowerCase();
      const title = m[2].trim();
      const body = [];
      i++;
      while (i < lines.length && /^>/.test(lines[i])) {
        body.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const icon = CALLOUT_ICONS[type] || "•";
      out.push(`<div class="callout callout-${type}">`);
      if (title) out.push(`  <div class="callout-title"><span class="callout-icon">${icon}</span> ${escapeHtml(title)}</div>`);
      out.push(`  <div class="callout-body">`);
      out.push("");
      out.push(body.join("\n"));
      out.push("");
      out.push(`  </div>`);
      out.push(`</div>`);
    } else {
      out.push(lines[i]);
      i++;
    }
  }
  return out.join("\n");
}

// Convert Obsidian image embeds ![[name.jpg]] to standard markdown
function preprocessImageEmbeds(md, depth) {
  return md.replace(/!\[\[([^\]|#]+?)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/g, (full, name, alias) => {
    const file = basename(name.trim());
    const isImg = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file);
    if (!isImg) return full;
    const alt = (alias || file).trim();
    const imgPath = `${"../".repeat(depth)}imagens/${file}`;
    return `<figure class="md-image"><img src="${imgPath}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.parentElement.classList.add('img-missing'); this.style.display='none';"><figcaption class="md-image-fallback">📷 <strong>${escapeHtml(alt)}</strong><br><span class="img-note">imagem disponível offline em MED-Imagens · ainda não publicada (Phase 2)</span></figcaption></figure>`;
  });
}

// Convert simple wikilinks [[X]] to plain text (we won't link yet — manifest is needed)
function preprocessWikilinks(md) {
  return md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alias) => {
    const txt = (alias || target).trim();
    return `<span class="wikilink">${escapeHtml(txt)}</span>`;
  });
}

function newMarked() {
  const m = new Marked({
    gfm: true,
    breaks: false,
  });
  return m;
}

async function walk(dir, filter, out = []) {
  if (!existsSync(dir)) return out;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) await walk(full, filter, out);
    else if (filter(e.name)) out.push(full);
  }
  return out;
}

function htmlTemplate({ title, disciplina, discLabel, discColor, prova, tipo, tipoLabel, fonte, status, sourcePath, body, slug, depth }) {
  const up = "../".repeat(depth);
  const pendingBanner = (tipo === "livro-extraido")
    ? `<div class="banner banner-pending">📌 PENDENTE RESUMO — esta página contém apenas a transcrição do capítulo. Resumo curado ainda não foi produzido.</div>`
    : "";
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)} — MedVault Portal</title>
<link rel="stylesheet" href="${up}tokens/colors.css">
<link rel="stylesheet" href="${up}tokens/typography.css">
<link rel="stylesheet" href="${up}tokens/spacing.css">
<link rel="stylesheet" href="${up}tokens/elevation.css">
<link rel="stylesheet" href="${up}assets/content.css">
<style>
  :root { --doc-accent: ${discColor}; }
</style>
</head>
<body class="doc-page">
<header class="doc-header" style="--accent: ${discColor};">
  <div class="doc-header-inner">
    <a href="${up}index.html" class="doc-back">← Portal</a>
    <div class="doc-crumbs">
      <span class="doc-disc">${escapeHtml(discLabel)}</span>
      ${prova ? `<span class="doc-prova prova-${prova.toLowerCase()}">${escapeHtml(prova)}</span>` : ""}
      <span class="doc-tipo">${escapeHtml(tipoLabel)}</span>
    </div>
  </div>
</header>
<main class="doc-main">
  <article class="doc-article">
    ${pendingBanner}
    <h1 class="doc-title">${escapeHtml(title)}</h1>
    ${fonte ? `<div class="doc-fonte"><strong>Fonte:</strong> ${escapeHtml(fonte)}</div>` : ""}
    <div class="doc-body">
${body}
    </div>
  </article>
</main>
<footer class="doc-footer">
  <span>MedVault Portal · ${escapeHtml(discLabel)} · ${prova ? escapeHtml(prova) + " · " : ""}${escapeHtml(tipoLabel)}</span>
  <a href="${up}index.html">Voltar ao portal</a>
</footer>
</body>
</html>
`;
}

function readSlug(path) {
  return basename(path, ".md");
}

function topFolder(relPath) {
  return relPath.split(/[\\/]/)[0];
}

export async function renderAll() {
  const files = await walk(CONTENT_DIR, (n) => n.toLowerCase().endsWith(".md"));
  const manifest = [];

  for (const abs of files) {
    const relPath = relative(CONTENT_DIR, abs).split("\\").join("/");
    const segments = relPath.split("/");
    const top = segments[0];
    if (top === "imagens") continue;

    let raw;
    try { raw = await readFile(abs, "utf8"); } catch { continue; }
    let parsed;
    try { parsed = matter(raw); } catch { continue; }

    const fm = parsed.data || {};
    const tipo = asStr(fm.tipo) || TIPO_DIR[top] || "resumo";
    const disciplinaRaw = asStr(fm.disciplina).toLowerCase() || segments[1] || "outros";
    const disciplina = DISC_LABEL[disciplinaRaw] ? disciplinaRaw : (DISC_LABEL[segments[1]] ? segments[1] : "outros");
    const discLabel = DISC_LABEL[disciplina] || disciplina;
    const discColor = DISC_COLOR[disciplina] || "#444";
    const prova = asStr(fm.prova).toUpperCase();
    const title = asStr(fm.title) || asStr(fm.tema) || readSlug(relPath);
    const fonte = asStr(fm.fonte);
    const status = asStr(fm.status);
    const tipoLabel = TIPO_LABEL[tipo] || tipo;
    const depth = segments.length - 1;
    const slug = readSlug(relPath);

    // Process content
    const stage1 = preprocessCallouts(parsed.content);
    const stage2 = preprocessImageEmbeds(stage1, depth);
    const stage3 = preprocessWikilinks(stage2);
    const marked = newMarked();
    const bodyHtml = marked.parse(stage3);

    const html = htmlTemplate({
      title, disciplina, discLabel, discColor, prova, tipo, tipoLabel, fonte, status,
      sourcePath: fm._source || "", body: bodyHtml, slug, depth,
    });

    const outPath = join(CONTENT_OUT, relPath.replace(/\.md$/, ".html"));
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");

    // Build a friendly URL relative to dist root
    const urlPath = "content/" + relPath.replace(/\.md$/, ".html");

    // For livros, capture book name from path: livros/<disc>/<livro>/...
    let livro = null;
    if (top === "livros") {
      livro = segments[2] || null;
    }

    manifest.push({
      slug,
      title,
      disciplina,
      discLabel,
      tipo,
      tipoLabel,
      prova,
      status,
      fonte,
      livro,
      pending: tipo === "livro-extraido",
      url: urlPath,
      path: relPath,
    });
  }

  // Copy images bank into dist
  const imgSrc = join(CONTENT_DIR, "imagens");
  if (existsSync(imgSrc)) {
    await cp(imgSrc, IMAGES_OUT, { recursive: true });
  }

  // Write manifest
  manifest.sort((a, b) => {
    if (a.disciplina !== b.disciplina) return a.disciplina.localeCompare(b.disciplina);
    if (a.tipo !== b.tipo) return a.tipo.localeCompare(b.tipo);
    if (a.prova !== b.prova) return a.prova.localeCompare(b.prova);
    return a.title.localeCompare(b.title);
  });
  await writeFile(join(DIST_DIR, "content-manifest.json"), JSON.stringify(manifest, null, 2), "utf8");

  console.log(`[content] rendered ${manifest.length} pages -> dist/content/`);
  console.log(`[content] manifest -> dist/content-manifest.json`);
  // Listings are now rendered by the React Shell Pages (PageMateriais, PageBiblioteca)
  // consuming /content-manifest.json — no static listing HTMLs needed.
  return manifest;
}

// ============================================================
// Listing pages (homepage portal + materiais + biblioteca)
// ============================================================

function listingTemplate({ title, accent, breadcrumbs, body, depth }) {
  const up = "../".repeat(depth);
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)} — MedVault Portal</title>
<link rel="stylesheet" href="${up}tokens/colors.css">
<link rel="stylesheet" href="${up}tokens/typography.css">
<link rel="stylesheet" href="${up}tokens/spacing.css">
<link rel="stylesheet" href="${up}tokens/elevation.css">
<link rel="stylesheet" href="${up}assets/content.css">
<link rel="stylesheet" href="${up}assets/portal.css">
<style>:root { --doc-accent: ${accent || "var(--mv-navy-700)"}; }</style>
</head>
<body class="portal-page">
<header class="doc-header" style="--accent: ${accent || "var(--mv-navy-700)"};">
  <div class="doc-header-inner">
    <a href="${up}index.html" class="doc-back">🏠 MedVault</a>
    <div class="doc-crumbs">${breadcrumbs}</div>
  </div>
</header>
<main class="portal-main">
${body}
</main>
<footer class="doc-footer">
  <span>MedVault Portal · Segundo Cérebro</span>
  <a href="${up}index.html">Voltar ao início</a>
</footer>
</body>
</html>
`;
}

function disciplineCardsHtml(byDiscipline, basePath, depth) {
  const cards = [];
  for (const disc of Object.keys(byDiscipline).sort()) {
    const items = byDiscipline[disc];
    const label = DISC_LABEL[disc] || disc;
    const color = DISC_COLOR[disc] || "#666";
    const up = "../".repeat(depth);
    cards.push(`
  <a class="disc-card" href="${up}${basePath}/${disc}.html" style="--accent: ${color};">
    <div class="disc-card-bar"></div>
    <div class="disc-card-body">
      <h3 class="disc-card-title">${escapeHtml(label)}</h3>
      <p class="disc-card-count">${items.length} ${items.length === 1 ? "item" : "itens"}</p>
    </div>
  </a>`);
  }
  return `<div class="disc-grid">${cards.join("")}</div>`;
}

function groupBy(arr, key) {
  return arr.reduce((acc, x) => {
    const k = typeof key === "function" ? key(x) : x[key];
    (acc[k] = acc[k] || []).push(x);
    return acc;
  }, {});
}

function topicCardsHtml(items, depth) {
  const up = "../".repeat(depth);
  return items.map(it => {
    const provaPill = it.prova ? `<span class="topic-prova prova-${it.prova.toLowerCase()}">${escapeHtml(it.prova)}</span>` : "";
    const pendingTag = it.pending ? `<span class="topic-pending">📌 PENDENTE RESUMO</span>` : "";
    const statusTag = it.status && it.status !== "finalizado" ? `<span class="topic-status status-${it.status}">${escapeHtml(it.status)}</span>` : "";
    return `
  <a class="topic-card" href="${up}${it.url}">
    <div class="topic-card-head">
      ${provaPill}
      <span class="topic-tipo">${escapeHtml(it.tipoLabel)}</span>
    </div>
    <h4 class="topic-card-title">${escapeHtml(it.title)}</h4>
    <div class="topic-card-foot">
      ${pendingTag}
      ${statusTag}
    </div>
  </a>`;
  }).join("");
}

async function renderListings(manifest) {
  const TIPO_GROUP = {
    "Materiais": ["resumo", "mapa-mental", "revisao-para-prova", "questao", "flashcard"],
    "Biblioteca": ["livro-capitulo", "livro-extraido"],
  };

  // ----- Homepage (portal index) -----
  // Replaces the React Shell-based index.html with a content-driven landing.
  const allMateriais = manifest.filter(x => TIPO_GROUP["Materiais"].includes(x.tipo));
  const allLivros = manifest.filter(x => TIPO_GROUP["Biblioteca"].includes(x.tipo));

  const matCounts = groupBy(allMateriais, "disciplina");
  const livCounts = groupBy(allLivros, "disciplina");
  const allDiscs = new Set([...Object.keys(matCounts), ...Object.keys(livCounts)]);

  const homeBody = `
  <section class="portal-hero">
    <h1>MedVault Portal</h1>
    <p>Segundo cérebro de estudos médicos — resumos, livros, mapas mentais e revisões de véspera.</p>
  </section>
  <section class="portal-section">
    <h2>📚 Disciplinas</h2>
    <div class="disc-grid">
${[...allDiscs].sort().map(disc => {
  const label = DISC_LABEL[disc] || disc;
  const color = DISC_COLOR[disc] || "#666";
  const mat = (matCounts[disc] || []).length;
  const liv = (livCounts[disc] || []).length;
  return `
  <a class="disc-card" href="materiais/${disc}.html" style="--accent: ${color};">
    <div class="disc-card-bar"></div>
    <div class="disc-card-body">
      <h3 class="disc-card-title">${escapeHtml(label)}</h3>
      <p class="disc-card-count">${mat} materiais · ${liv} capítulos de livro</p>
    </div>
  </a>`;
}).join("")}
    </div>
  </section>
  <section class="portal-section">
    <h2>📖 Acesso rápido</h2>
    <div class="quick-grid">
      <a class="quick-card" href="materiais/index.html"><span class="quick-icon">📘</span><span class="quick-label">Todos os materiais</span><span class="quick-count">${allMateriais.length}</span></a>
      <a class="quick-card" href="biblioteca/index.html"><span class="quick-icon">📚</span><span class="quick-label">Biblioteca de livros</span><span class="quick-count">${allLivros.length}</span></a>
      <a class="quick-card" href="app.html"><span class="quick-icon">🧪</span><span class="quick-label">App experimental v2</span><span class="quick-count">React</span></a>
    </div>
  </section>
  `;

  await writeFile(join(DIST_DIR, "index.html"), listingTemplate({
    title: "Portal",
    accent: "var(--mv-navy-700)",
    breadcrumbs: `<span class="doc-disc">Portal</span>`,
    body: homeBody,
    depth: 0,
  }), "utf8");

  // ----- Materiais index -----
  await mkdir(join(DIST_DIR, "materiais"), { recursive: true });
  const matIndexBody = `
  <section class="portal-hero">
    <h1>Materiais de Estudo</h1>
    <p>${allMateriais.length} artefatos: resumos, mapas mentais, revisões de véspera, questões e flashcards.</p>
  </section>
  <section class="portal-section">
    <h2>Por disciplina</h2>
    ${disciplineCardsHtml(matCounts, "materiais", 1)}
  </section>
  `;
  await writeFile(join(DIST_DIR, "materiais", "index.html"), listingTemplate({
    title: "Materiais",
    accent: "var(--mv-navy-700)",
    breadcrumbs: `<a href="../index.html" class="doc-crumb-link">Portal</a> <span class="doc-crumb-sep">›</span> <span class="doc-disc">Materiais</span>`,
    body: matIndexBody,
    depth: 1,
  }), "utf8");

  // ----- Materiais per discipline -----
  for (const disc of Object.keys(matCounts)) {
    const items = matCounts[disc];
    const label = DISC_LABEL[disc] || disc;
    const color = DISC_COLOR[disc] || "#666";
    const byTipo = groupBy(items, "tipo");

    let body = `
  <section class="portal-hero" style="border-left: 6px solid ${color};">
    <h1>${escapeHtml(label)}</h1>
    <p>${items.length} materiais de estudo.</p>
  </section>`;

    for (const tipoKey of ["resumo", "mapa-mental", "revisao-para-prova", "questao", "flashcard"]) {
      if (!byTipo[tipoKey]) continue;
      const tipoItems = byTipo[tipoKey];
      const byProva = groupBy(tipoItems, x => x.prova || "—");
      body += `
  <section class="portal-section">
    <h2>${escapeHtml(TIPO_LABEL[tipoKey])} <span class="section-count">${tipoItems.length}</span></h2>`;
      for (const prova of Object.keys(byProva).sort()) {
        const provaItems = byProva[prova];
        body += `
    <div class="topic-group">
      <h3 class="topic-group-title">${escapeHtml(prova === "—" ? "Geral" : prova)}</h3>
      <div class="topic-grid">${topicCardsHtml(provaItems, 1)}</div>
    </div>`;
      }
      body += `</section>`;
    }

    await writeFile(join(DIST_DIR, "materiais", `${disc}.html`), listingTemplate({
      title: label + " — Materiais",
      accent: color,
      breadcrumbs: `<a href="../index.html" class="doc-crumb-link">Portal</a> <span class="doc-crumb-sep">›</span> <a href="index.html" class="doc-crumb-link">Materiais</a> <span class="doc-crumb-sep">›</span> <span class="doc-disc">${escapeHtml(label)}</span>`,
      body,
      depth: 1,
    }), "utf8");
  }

  // ----- Biblioteca index -----
  await mkdir(join(DIST_DIR, "biblioteca"), { recursive: true });
  const livIndexBody = `
  <section class="portal-hero">
    <h1>Biblioteca</h1>
    <p>${allLivros.length} capítulos de livros médicos. Capítulos sem resumo curado aparecem marcados como <strong>📌 PENDENTE RESUMO</strong>.</p>
  </section>
  <section class="portal-section">
    <h2>Por disciplina</h2>
    ${disciplineCardsHtml(livCounts, "biblioteca", 1)}
  </section>
  `;
  await writeFile(join(DIST_DIR, "biblioteca", "index.html"), listingTemplate({
    title: "Biblioteca",
    accent: "var(--mv-navy-700)",
    breadcrumbs: `<a href="../index.html" class="doc-crumb-link">Portal</a> <span class="doc-crumb-sep">›</span> <span class="doc-disc">Biblioteca</span>`,
    body: livIndexBody,
    depth: 1,
  }), "utf8");

  // ----- Biblioteca per discipline -----
  for (const disc of Object.keys(livCounts)) {
    const items = livCounts[disc];
    const label = DISC_LABEL[disc] || disc;
    const color = DISC_COLOR[disc] || "#666";
    const byLivro = groupBy(items, x => x.livro || "outros");

    let body = `
  <section class="portal-hero" style="border-left: 6px solid ${color};">
    <h1>${escapeHtml(label)} — Biblioteca</h1>
    <p>${items.length} capítulos em ${Object.keys(byLivro).length} ${Object.keys(byLivro).length === 1 ? "livro" : "livros"}.</p>
  </section>`;

    for (const livro of Object.keys(byLivro).sort()) {
      const livroItems = byLivro[livro].sort((a, b) => a.title.localeCompare(b.title));
      const livroLabel = livro.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      const completed = livroItems.filter(x => !x.pending).length;
      const pending = livroItems.filter(x => x.pending).length;
      body += `
  <section class="portal-section">
    <h2>📕 ${escapeHtml(livroLabel)}</h2>
    <p class="section-meta">${livroItems.length} capítulos · ${completed} com resumo · ${pending} pendentes</p>
    <div class="topic-grid">${topicCardsHtml(livroItems, 1)}</div>
  </section>`;
    }

    await writeFile(join(DIST_DIR, "biblioteca", `${disc}.html`), listingTemplate({
      title: label + " — Biblioteca",
      accent: color,
      breadcrumbs: `<a href="../index.html" class="doc-crumb-link">Portal</a> <span class="doc-crumb-sep">›</span> <a href="index.html" class="doc-crumb-link">Biblioteca</a> <span class="doc-crumb-sep">›</span> <span class="doc-disc">${escapeHtml(label)}</span>`,
      body,
      depth: 1,
    }), "utf8");
  }

  console.log(`[content] listings rendered: home + materiais + biblioteca`);
}
