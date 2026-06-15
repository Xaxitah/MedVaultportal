// ============================================================
// MedVault — Página: Materiais (Central). Busca + filtros +
// grade de temas mostrando os artefatos de cada um. Botão Adicionar.
// ============================================================
(function () {
  const { THEME, Icon, PageHead, Topbar, MVPill, Avatar } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  const disc = (id) => window.MV.disciplines.find((x) => x.id === id);
  const at = (id) => window.MV.artifactTypes.find((x) => x.id === id);

  function ArtBadge({ id, on }) {
    const a = at(id); if (!a) return null;
    return (
      <span title={a.single} style={{
        width: 30, height: 30, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
        background: on ? a.tint : "#f4f2ec", border: `1px solid ${on ? "transparent" : "transparent"}`,
      }}>
        <Icon name={a.icon} size={15} color={on ? a.line : "#cfccc4"} />
      </span>
    );
  }

  function MaterialCard({ m, onOpen }) {
    const d = disc(m.disc);
    const [h, setH] = React.useState(false);
    return (
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ background: T.surface, border: `1.5px solid ${h ? d.line : T.line}`, borderRadius: 18, padding: 18, display: "flex", flexDirection: "column", gap: 13, transition: "border-color .15s" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11.5, fontWeight: 800, color: d.ink }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: d.line }} /> {d.name}
          </span>
          <span style={{ fontSize: 11, fontWeight: 800, color: T.faint }}>{m.n}</span>
        </div>
        <div style={{ fontSize: 16.5, fontWeight: 800, letterSpacing: -0.3, color: T.ink }}>{m.t}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {window.MV.artifactTypes.map((a) => <ArtBadge key={a.id} id={a.id} on={m.arts.includes(a.id)} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${T.lineSoft}`, paddingTop: 12 }}>
          <span style={{ fontSize: 12, color: T.mute, fontWeight: 600 }}>{m.arts.length} tipos disponíveis</span>
          <button onClick={onOpen} style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 800, color: d.line, fontFamily: T.font }}>
            Abrir <Icon name="arrowRight" size={15} color={d.line} />
          </button>
        </div>
      </div>
    );
  }

  function Materiais() {
    const [add, setAdd] = React.useState(false);
    const [fd, setFd] = React.useState("all");
    const [ft, setFt] = React.useState("all");
    const AddModal = window.MVAddModal;

    const all = [];
    Object.keys(window.MV.temas).forEach((dId) => window.MV.temas[dId].forEach((tm) => all.push({ ...tm, disc: dId })));
    const list = all.filter((m) => (fd === "all" || m.disc === fd) && (ft === "all" || m.arts.includes(ft)));

    return (
      <div style={{ padding: "30px 38px 48px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}><Topbar onAdd={() => setAdd(true)} /></div>
        <PageHead title="Materiais" subtitle="Tudo do grupo, organizado por disciplina e tema." />

        {/* busca */}
        <div style={{ display: "flex", alignItems: "center", gap: 11, background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 14, padding: "13px 16px", color: T.mute, fontSize: 14, marginBottom: 18, maxWidth: 520 }}>
          <Icon name="search" size={18} color={T.faint} /> Buscar tema, resumo, fármaco, sinal clínico…
        </div>

        {/* filtros disciplina */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <MVPill active={fd === "all"} onClick={() => setFd("all")}>Todas</MVPill>
          {window.MV.disciplines.map((d) => <MVPill key={d.id} active={fd === d.id} dot={d.line} onClick={() => setFd(d.id)}>{d.name}</MVPill>)}
        </div>
        {/* filtros tipo */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 26 }}>
          <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 1, color: T.faint, textTransform: "uppercase", marginRight: 4 }}>Tipo</span>
          <MVPill active={ft === "all"} onClick={() => setFt("all")}>Todos</MVPill>
          {window.MV.artifactTypes.map((a) => (
            <button key={a.id} onClick={() => setFt(a.id)} style={{
              display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 700, padding: "8px 13px",
              borderRadius: 999, cursor: "pointer", fontFamily: T.font,
              background: ft === a.id ? a.tint : T.surface, border: `1.4px solid ${ft === a.id ? a.line : T.line}`, color: ft === a.id ? a.line : T.ink,
            }}><Icon name={a.icon} size={14} color={a.line} /> {a.single}</button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 15, fontWeight: 800 }}>{list.length} temas</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
          {list.map((m) => <MaterialCard key={m.disc + m.n} m={m} onOpen={() => window.open(window.MV.driveUrl, "_blank", "noopener")} />)}
        </div>

        <AddModal open={add} onClose={() => setAdd(false)} presetDisc={fd === "all" ? null : fd} />
      </div>
    );
  }

  window.MVPages.Materiais = Materiais;
})();
