// ============================================================
// MedVault — Página: Ferramentas (hub de artefatos interativos)
// ============================================================
(function () {
  const { THEME, Icon, PageHead } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const at = (id) => window.MV.artifactTypes.find((x) => x.id === id);

  // conta itens de um tipo entre todas as disciplinas
  function countArt(artId) {
    let n = 0;
    Object.values(window.MV.temas).forEach((arr) => arr.forEach((t) => { if (t.arts.includes(artId)) n++; }));
    return n;
  }

  function ToolCard({ artId, route, nav, desc }) {
    const a = at(artId);
    const [h, setH] = React.useState(false);
    return (
      <button onClick={() => nav(route)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ textAlign: "left", cursor: "pointer", fontFamily: T.font, background: T.surface,
          border: `1.5px solid ${h ? a.line : T.line}`, borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 16,
          transition: "border-color .15s, transform .15s", transform: h ? "translateY(-3px)" : "none" }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, background: a.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={a.icon} size={28} color={a.line} stroke={1.7} />
        </div>
        <div>
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.3, color: T.ink }}>{a.label}</div>
          <div style={{ fontSize: 13, color: T.mute, marginTop: 5, lineHeight: 1.5 }}>{desc}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: a.line, background: a.tint, borderRadius: 999, padding: "4px 11px" }}>{countArt(artId)} disponíveis</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 800, color: T.ink }}>Abrir <Icon name="arrowRight" size={15} color={T.ink} /></span>
        </div>
      </button>
    );
  }

  function Ferramentas({ nav }) {
    const cards = [
      { artId: "quiz", route: "quiz", desc: "Questões de múltipla escolha com gabarito comentado." },
      { artId: "flashcards", route: "flashcards", desc: "Cartas de revisão ativa para fixar conceitos." },
      { artId: "podcast", route: "podcast", desc: "Áudios e resumos para ouvir no deslocamento." },
      { artId: "infografico", route: "infografico", desc: "Esquemas visuais e mapas de um olhar só." },
    ];
    return (
      <div style={{ padding: "30px 38px 48px" }}>
        <PageHead title="Ferramentas" subtitle="Estudo ativo do grupo — escolha um formato para praticar." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
          {cards.map((c) => <ToolCard key={c.artId} {...c} nav={nav} />)}
        </div>
      </div>
    );
  }

  window.MVPages.Ferramentas = Ferramentas;
})();
