// ============================================================
// MedVault — Página: Biblioteca
// Resumos comentados, capítulo a capítulo, por livro/área.
// ============================================================
(function () {
  const { THEME, Icon, Avatar, PageHead, MVPill } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const member = (name) => window.MV.members.find((m) => m.name === name) || { name, initials: (name || "?")[0], color: T.accent };

  function Chapter({ c, book }) {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ border: `1.5px solid ${T.line}`, borderRadius: 14, overflow: "hidden", background: T.surface }}>
        <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "13px 15px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: T.font }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: book.ink, background: book.tint, borderRadius: 8, padding: "5px 9px", whiteSpace: "nowrap", flexShrink: 0 }}>{c.n}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontSize: 14.5, fontWeight: 800, color: T.ink, letterSpacing: -0.2 }}>{c.t}</span>
            <span style={{ display: "block", fontSize: 12, color: T.mute, fontWeight: 600, marginTop: 2 }}>p. {c.pag}</span>
          </span>
          {c.prova ? <span style={{ fontSize: 11, fontWeight: 800, color: "#8a4f31", background: "#fceee7", borderRadius: 999, padding: "3px 10px", whiteSpace: "nowrap" }}>cai na P1</span> : null}
          <Icon name={open ? "chevronDown" : "chevronRight"} size={18} color={T.faint} />
        </button>
        {open ? (
          <div style={{ padding: "4px 17px 19px", borderTop: `1px solid ${T.lineSoft}` }}>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: T.ink, margin: "15px 0 14px" }}>{c.resumo}</p>
            <div style={{ display: "grid", gap: 8, marginBottom: 16 }}>
              {c.pontos.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 10, fontSize: 13.5, color: T.ink, lineHeight: 1.5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: book.line, marginTop: 7, flexShrink: 0 }}></span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, background: T.fieldBg, border: `1px solid ${T.line}`, borderRadius: 12, padding: "14px 16px" }}>
              <Icon name="quote" size={20} color={book.line} style={{ flexShrink: 0, marginTop: 2 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: T.mute, marginBottom: 6 }}>Comentário do grupo</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: T.ink, margin: 0, fontStyle: "italic" }}>“{c.comentario}”</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                  <Avatar m={member(c.por)} size={24} />
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: T.ink }}>{c.por}</span>
                </div>
              </div>
            </div>
            {c.tags && c.tags.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                {c.tags.map((t) => <span key={t} style={{ fontSize: 12, fontWeight: 700, color: T.mute, background: T.hoverBg, borderRadius: 999, padding: "4px 11px" }}>#{t}</span>)}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  function BookCard({ book, q }) {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => { if (q) setOpen(true); }, [q]);
    const caps = q ? book.capitulos.filter((c) => (c.t + " " + c.resumo + " " + (c.tags || []).join(" ")).toLowerCase().includes(q)) : book.capitulos;
    if (q && caps.length === 0) return null;
    return (
      <div style={{ border: `1.5px solid ${T.line}`, borderRadius: 18, background: T.surface, overflow: "hidden" }}>
        <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, padding: 18, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: T.font }}>
          <span style={{ width: 46, height: 60, borderRadius: "4px 9px 9px 4px", background: book.tint, borderLeft: `4px solid ${book.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: book.ink, flexShrink: 0 }}>
            <Icon name="book" size={24} color={book.ink} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: book.ink, background: book.tint, borderRadius: 999, padding: "3px 10px" }}>{book.area}</span>
            <span style={{ display: "block", fontSize: 17, fontWeight: 800, color: T.ink, letterSpacing: -0.3, marginTop: 8 }}>{book.titulo}</span>
            <span style={{ display: "block", fontSize: 13, color: T.mute, fontWeight: 600, marginTop: 3 }}>{book.autor} · {book.edicao} · {book.capitulos.length} capítulos resumidos</span>
          </span>
          <Icon name={open ? "chevronDown" : "chevronRight"} size={20} color={T.faint} />
        </button>
        {open ? (
          <div style={{ padding: "0 18px 18px", display: "grid", gap: 10 }}>
            {caps.map((c) => <Chapter key={c.n} c={c} book={book} />)}
          </div>
        ) : null}
      </div>
    );
  }

  function Biblioteca() {
    const livros = window.MV.biblioteca || [];
    const areas = ["Todas"].concat(Array.from(new Set(livros.map((l) => l.area))));
    const [area, setArea] = React.useState("Todas");
    const [q, setQ] = React.useState("");
    const ql = q.trim().toLowerCase();
    const shown = livros.filter((l) => area === "Todas" || l.area === area);
    const totalCaps = livros.reduce((s, l) => s + l.capitulos.length, 0);
    return (
      <div style={{ padding: "30px 38px 48px", maxWidth: 880 }}>
        <PageHead title="Biblioteca" subtitle={`Resumos comentados, capítulo a capítulo — ${livros.length} livros · ${totalCaps} capítulos.`} />
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 22 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {areas.map((a) => <MVPill key={a} active={area === a} onClick={() => setArea(a)}>{a}</MVPill>)}
          </div>
          <div style={{ flex: 1, minWidth: 12 }}></div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 12, padding: "9px 13px", minWidth: 230 }}>
            <Icon name="search" size={17} color={T.faint} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar capítulo, tema, tag…"
              style={{ border: "none", outline: "none", background: "transparent", fontSize: 13.5, fontFamily: T.font, color: T.ink, width: "100%" }} />
          </div>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {shown.map((l) => <BookCard key={l.id} book={l} q={ql} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, fontSize: 12, color: T.faint }}>
          <Icon name="bookmark" size={14} color={T.faint} /> Cada capítulo guarda o resumo e o comentário de quem leu — contribua com o do grupo.
        </div>
      </div>
    );
  }

  window.MVPages.Biblioteca = Biblioteca;
})();
