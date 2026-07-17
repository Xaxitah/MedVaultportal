// Constrói um mapa basename(lowercase) -> Drive fileId a partir do sqlite do DriveFS
// e dos drive-file-map JSONs já existentes. Saída: tools/image-map.json
import { DatabaseSync } from "node:sqlite";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const vaultRoot = join(repoRoot, "..", "MED-Vault-2.0");
const DB = process.env.MV_DRIVEDB
  || "C:/Users/Xaxitah/AppData/Local/Google/DriveFS/111848808878853282094/metadata_sqlite_db";

const IMG_EXT = /\.(png|jpe?g|gif|webp|svg)$/i;
const map = {}; // basename lower -> id

// 1) Mapas JSON já gerados (cobertura garantida p/ disciplinas processadas)
const outDir = join(vaultRoot, "00-Meta", "Automacao", "Output");
if (existsSync(outDir)) {
  for (const f of readdirSync(outDir)) {
    if (!/^drive-file-map.*\.json$/i.test(f)) continue;
    try {
      const j = JSON.parse(readFileSync(join(outDir, f), "utf8"));
      const files = j.files || j;
      for (const [name, v] of Object.entries(files)) {
        const id = typeof v === "string" ? v : (v.id || (v.url || "").match(/[-\w]{25,}/)?.[0]);
        if (id && IMG_EXT.test(name)) map[name.toLowerCase()] = id;
      }
    } catch {}
  }
}
const fromJson = Object.keys(map).length;
console.log(`[img-map] de JSONs: ${fromJson}`);

// 2) sqlite do DriveFS — cobertura total
try {
  const db = new DatabaseSync(DB, { readOnly: true });
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(t => t.name);
  console.log(`[img-map] tabelas: ${tables.join(", ")}`);

  // schema da tabela items
  const cols = db.prepare("PRAGMA table_info(items)").all().map(c => c.name);
  console.log(`[img-map] colunas items: ${cols.join(", ")}`);
  const nameCol = cols.find(c => /local_title|title|name/i.test(c));
  // O ID de recurso do Drive (usado nas URLs) é a coluna 'id', não 'stable_id'.
  const idCol = cols.includes("id") ? "id" : cols.find(c => /item_id|cloud_id|resource/i.test(c));
  console.log(`[img-map] usando nome='${nameCol}' id='${idCol}'`);

  if (nameCol && idCol) {
    const rows = db.prepare(`SELECT ${nameCol} AS nm, ${idCol} AS id FROM items`).all();
    let added = 0;
    for (const r of rows) {
      if (!r.nm || !r.id) continue;
      const nm = String(r.nm);
      if (!IMG_EXT.test(nm)) continue;
      const key = nm.toLowerCase();
      if (!map[key]) { map[key] = String(r.id); added++; }
    }
    console.log(`[img-map] do sqlite: +${added}`);
    // amostra de uma linha de imagem p/ conferir formato do id
    const s = rows.find(r => r.nm && IMG_EXT.test(String(r.nm)));
    if (s) console.log(`[img-map] amostra: ${s.nm} -> ${s.id}`);
  }
  db.close();
} catch (e) {
  console.log(`[img-map] sqlite falhou: ${e.message}`);
}

// 3) PRIVACIDADE: filtrar só as imagens realmente referenciadas pelo conteúdo do site
//    (senão o mapa vazaria os IDs do Drive inteiro ao ser commitado).
const referenced = new Set();
function collectRefs(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "imagens") collectRefs(p); continue; }
    if (!e.name.endsWith(".md")) continue;
    const md = readFileSync(p, "utf8");
    for (const m of md.matchAll(/!\[\[([^\]|#]+?)(?:[#|][^\]]*)?\]\]/g)) referenced.add(basename(m[1].trim()).toLowerCase());
    for (const m of md.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) referenced.add(basename(m[1].split(/[?#]/)[0].trim()).toLowerCase());
  }
}
const contentDir = join(repoRoot, "content");
if (existsSync(contentDir)) collectRefs(contentDir);
const filtered = {};
for (const k of Object.keys(map)) if (referenced.has(k)) filtered[k] = map[k];
console.log(`[img-map] referenciadas pelo conteúdo: ${referenced.size} · resolvidas: ${Object.keys(filtered).length}`);

writeFileSync(join(__dirname, "image-map.json"), JSON.stringify(filtered, null, 0), "utf8");
console.log(`[img-map] TOTAL commitável: ${Object.keys(filtered).length} imagens -> tools/image-map.json (só do vault)`);
