// ============================================================
// MedVault — Página: Biblioteca. Capítulos de livros médicos
// (Goodman-Gilman, Florez, Argente, LLANIO, Leoncio, Vanuno,
// Smith-Tanagho, Propedeutica) carregados de content-manifest.json.
// Capítulos sem resumo curado (livro-extraido) mostram badge PENDENTE.
// ============================================================
(function () {
  const { THEME, Icon, PageHead, MVPill } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const BIBLIO_TIPOS = ["livro-capitulo", "livro-extraido"];

  function Chapter({ c, disc }) {
    const [h, setH] = React.useState(false);
    const dHex = window.MV_DISC_HEX[disc] || window.MV_DISC_HEX["outros"];
    return (
      <a href={c.url} target="_blank" rel="noopener"
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          display: "flex", alignItems: "center", gap: 14, padding: "12px 15px",
          border: `1.5px solid ${h ? dHex.line : T.line}`, borderRadius: 12, background: T.surface,
          textDecoration: "none", color: "inherit", cursor: "pointer",
          transition: "border-color .14s ease, transform .14s ease",
          transform: h ? "translateX(2px)" : "none",
        }}>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: "block", fontSize: 14.5, fontWeight: 700, color: T.ink, letterSpacing: -0.2,
            lineHeight: 1.35 }}>{c.title}</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginTop: 5 }}>
            {c.pending ? (
              <span style={{ fontSize: 10.5, fontWeight: 800, color: "#7a4f00", background: "#fff7e6",
                border: "1px solid #f5c97a", padding: "2px 8px", borderRadius: 6 }}>📌 PENDENTE RESUMO</span>
            ) : (
              <span style={{ fontSize: 10.5, fontWeight: 800, color: "#065f46", background: "#d1fae5",
                padding: "2px 8px", borderRadius: 6 }}>✓ RESUMIDO</span>
            )}
            {c.fonte ? (
              <span style={{ fontSize: 11, color: T.mute, fontWeight: 600 }}>{c.fonte.slice(0, 60)}{c.fonte.length > 60 ? "…" : ""}</span>
            ) : null}
          </div>
        </span>
        <Icon name="arrowRight" size={16} color={dHex.line} />
      </a>
    );
  }

  function BookCard({ disc, livro, items, q }) {
    const [open, setOpen] = React.useState(false);
    const dHex = window.MV_DISC_HEX[disc] || window.MV_DISC_HEX["outros"];
    const discLabel = window.MV_DISC_LABEL[disc] || disc;
    const bookLabel = window.MV_BOOK_LABEL(livro);
    React.useEffect(() => { if (q) setOpen(true); }, [q]);

    const ql = (q || "").trim().toLowerCase();
    const caps = ql ? items.filter((c) => c.title.toLowerCase().includes(ql) || (c.fonte || "").toLowerCase().includes(ql)) : items;
    if (ql && caps.length === 0) return null;

    const completed = items.filter((x) => !x.pending).length;
    const pending = items.length - completed;

    return (
      <div style={{ border: `1.5px solid ${T.line}`, borderRadius: 18, background: T.surface, overflow: "hidden" }}>
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", display: "flex", alignItems: "center", gap: 16, padding: 18,
          background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: T.font,
        }}>
          <span style={{ width: 46, height: 60, borderRadius: "4px 9px 9px 4px", background: dHex.tint,
            borderLeft: `4px solid ${dHex.line}`, display: "flex", alignItems: "center", justifyContent: "center",
            color: dHex.ink, flexShrink: 0 }}>
            <Icon name="book" size={24} color={dHex.ink} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: dHex.ink, background: dHex.tint, borderRadius: 999,
              padding: "3px 10px" }}>{discLabel}</span>
            <span style={{ display: "block", fontSize: 16, fontWeight: 800, color: T.ink, letterSpacing: -0.3,
              marginTop: 8 }}>{bookLabel}</span>
            <span style={{ display: "block", fontSize: 12.5, color: T.mute, fontWeight: 600, marginTop: 3 }}>
              {items.length} capítulos · {completed} resumidos · {pending} pendentes
            </span>
          </span>
          <Icon name={open ? "chevronDown" : "chevronRight"} size={20} color={T.faint} />
        </button>
        {open ? (
          <div style={{ padding: "0 18px 18px", display: "grid", gap: 8 }}>
            {caps.map((c) => <Chapter key={c.url} c={c} disc={disc} />)}
          </div>
        ) : null}
      </div>
    );
  }

  function Biblioteca() {
    const [manifest, setManifest] = React.useState(window.MV_MANIFEST);
    const [area, setArea] = React.useState("Todas");
    const [q, setQ] = React.useState("");

    React.useEffect(() => {
      if (!manifest) window.MV_MANIFEST_LOAD().then(setManifest);
    }, []);

    if (!manifest) {
      return (
        <div style={{ padding: "60px 38px", textAlign: "center", color: T.mute, fontFamily: T.font }}>
          <div style={{ fontSize: 14 }}>Carregando biblioteca…</div>
        </div>
      );
    }

    const all = manifest.filter((x) => BIBLIO_TIPOS.includes(x.tipo));

    // Group by (disciplina, livro)
    const grouped = {};
    for (const item of all) {
      const key = (item.disciplina || "outros") + "::" + (item.livro || "outros");
      (grouped[key] = grouped[key] || []).push(item);
    }
    const groups = Object.keys(grouped).map((k) => {
      const [disc, livro] = k.split("::");
      return { disc, livro, items: grouped[k] };
    });

    const discs = ["Todas"].concat(Array.from(new Set(groups.map((g) => g.disc))).sort());
    const shown = groups.filter((g) => area === "Todas" || g.disc === area);
    const totalCaps = all.length;

    return (
      <div style={{ padding: "30px 38px 48px", maxWidth: 920 }}>
        <PageHead title="Biblioteca" subtitle={`Capítulos de livros médicos — ${all.length} capítulos de ${Array.from(new Set(all.map((x) => x.livro))).filter(Boolean).length} livros. Os marcados como PENDENTE ainda não têm resumo curado.`} />
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 22 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {discs.map((a) => (
              <MVPill key={a} active={area === a} onClick={() => setArea(a)}>
                {a === "Todas" ? "Todas" : (window.MV_DISC_LABEL[a] || a)}
              </MVPill>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 12 }}></div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: T.surface, border: `1.5px solid ${T.line}`,
            borderRadius: 12, padding: "9px 13px", minWidth: 230 }}>
            <Icon name="search" size={17} color={T.faint} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar capítulo, fonte…"
              style={{ border: "none", outline: "none", background: "transparent", fontSize: 13.5, fontFamily: T.font,
                color: T.ink, width: "100%" }} />
          </div>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {shown.map((g) => <BookCard key={g.disc + "::" + g.livro} disc={g.disc} livro={g.livro} items={g.items} q={q} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, fontSize: 12, color: T.faint }}>
          <Icon name="bookmark" size={14} color={T.faint} /> Capítulos clicáveis abrem em nova aba com design v2 nativo.
        </div>
      </div>
    );
  }

  window.MVPages.Biblioteca = Biblioteca;
})();
