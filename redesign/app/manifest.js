// ============================================================
// MedVault — Manifest loader. Fetches /content-manifest.json once
// and exposes it via window.MV_MANIFEST for Pages to consume.
// ============================================================
(function () {
  window.MV_MANIFEST = null;
  window._mv_manifest_promise = null;

  window.MV_MANIFEST_LOAD = function () {
    if (window.MV_MANIFEST) return Promise.resolve(window.MV_MANIFEST);
    if (window._mv_manifest_promise) return window._mv_manifest_promise;
    window._mv_manifest_promise = fetch("content-manifest.json")
      .then((r) => r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)))
      .then((d) => {
        window.MV_MANIFEST = d;
        window.dispatchEvent(new Event("mv-manifest-loaded"));
        return d;
      })
      .catch((e) => { console.error("[manifest] load failed:", e); return []; });
    return window._mv_manifest_promise;
  };

  // Kick off immediate load so React Pages can read it sooner.
  window.MV_MANIFEST_LOAD();

  // Map disciplina slug -> book/discipline color & label (matches dist/content tokens)
  window.MV_DISC_LABEL = {
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

  window.MV_DISC_HEX = {
    "farmacologia": { ink: "#0f3460", line: "#0f3460", tint: "#dbe7f5" },
    "semiologia-medica": { ink: "#1b5e20", line: "#1b5e20", tint: "#d5e9d8" },
    "semiologia-quirurgica": { ink: "#006064", line: "#006064", tint: "#cfe6e7" },
    "urologia": { ink: "#4a148c", line: "#4a148c", tint: "#e3d3f2" },
    "etica-medica": { ink: "#bf360c", line: "#bf360c", tint: "#fadcd0" },
    "pratica-semiologia-medica": { ink: "#1b5e20", line: "#1b5e20", tint: "#d5e9d8" },
    "pratica-semiologia-quirurgica": { ink: "#006064", line: "#006064", tint: "#cfe6e7" },
    "tecnicas-quirurgicas": { ink: "#006064", line: "#006064", tint: "#cfe6e7" },
    "outros": { ink: "#555", line: "#777", tint: "#eee" },
  };

  // Friendly book label from slug
  window.MV_BOOK_LABEL = function (slug) {
    if (!slug) return "Outros";
    const map = {
      "goodman-gilman": "Goodman & Gilman — Farmacologia (12ª ed.)",
      "florez": "Flórez — Farmacología Humana (6ª ed.)",
      "argente": "Argente — Semiología Médica",
      "llanio": "LLANIO — Propedéutica Clínica",
      "leoncio": "Manual Básico de Patologías — Leoncio",
      "smith-tanagho": "Smith & Tanagho — Urología General",
      "propedeutica-tomo1": "Propedêutica Clínica — Tomo I",
      "transcricoes": "Transcrições de aula",
    };
    return map[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // Useful tipo label
  window.MV_TIPO_LABEL = {
    "resumo": "Resumo",
    "livro-capitulo": "Capítulo de Livro",
    "livro-extraido": "Capítulo Extraído",
    "mapa-mental": "Mapa Mental",
    "revisao-para-prova": "Revisão Véspera",
    "questao": "Questões",
    "flashcard": "Flashcards",
  };
})();
