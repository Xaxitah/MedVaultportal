// ============================================================
// MedVault — Página de Artefato (genérica): Quiz / Flashcards /
// Podcast / Infográfico. Agrupada por disciplina.
// ============================================================
(function () {
  const { THEME, Icon, PageHead } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const at = (id) => window.MV.artifactTypes.find((x) => x.id === id);
  const disc = (id) => window.MV.disciplines.find((x) => x.id === id);

  function ItemCard({ tema, a, d }) {
    const [h, setH] = React.useState(false);
    return (
      <button onClick={() => window.open(window.MV.driveUrl, "_blank", "noopener")}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ textAlign: "left", cursor: "pointer", fontFamily: T.font, background: T.surface,
          border: `1.5px solid ${h ? a.line : T.line}`, borderRadius: 16, padding: 16,
          display: "flex", alignItems: "center", gap: 14, transition: "border-color .15s" }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: a.tint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name={a.icon} size={20} color={a.line} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: T.faint }}>{tema.n}</div>
          <div style={{ fontSize: 14.5, fontWeight: 800, color: T.ink, letterSpacing: -0.2, lineHeight: 1.25 }}>{tema.t}</div>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 800, color: a.line, flexShrink: 0 }}>
          {a.id === "podcast" ? <Icon name="play" size={16} color={a.line} /> : null}
          Abrir <Icon name="arrowRight" size={14} color={a.line} />
        </div>
      </button>
    );
  }

  function Artefato({ art }) {
    const a = at(art);
    const groups = window.MV.disciplines
      .map((d) => ({ d, items: (window.MV.temas[d.id] || []).filter((t) => t.arts.includes(art)) }))
      .filter((g) => g.items.length > 0);
    const total = groups.reduce((s, g) => s + g.items.length, 0);

    return (
      <div style={{ padding: "30px 38px 48px" }}>
        <PageHead
          title={a.label}
          subtitle={`${total} ${total === 1 ? "item" : "itens"} do grupo · organizados por disciplina`}
          right={
            <div style={{ width: 52, height: 52, borderRadius: 15, background: a.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={a.icon} size={26} color={a.line} />
            </div>
          } />

        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {groups.map(({ d, items }) => (
            <section key={d.id}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ width: 11, height: 11, borderRadius: 6, background: d.line }} />
                <h2 style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3, margin: 0, color: T.ink }}>{d.name}</h2>
                <span style={{ flex: 1, height: 1, background: T.line }} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: T.faint }}>{items.length}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {items.map((tm) => <ItemCard key={d.id + tm.n} tema={tm} a={a} d={d} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }

  window.MVPages.Artefato = Artefato;
})();
