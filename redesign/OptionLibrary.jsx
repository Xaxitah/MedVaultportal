// Model C — "Central de Materiais": a search-first library to find and open
// any resumo/artefato fast. Disciplina + tipo filters, recent strip, grid of
// material cards showing which artifacts each tema has.
(function () {
  const Icon = window.Icon;
  const INK = "#1b2336", MUTE = "#6b7280", FAINT = "#aeb2bd", LINE = "#ecedf1", BG = "#f6f7f9", NAVY = "#13203a";
  const D = () => window.MV_RD.disciplines;
  const disc = (id) => D().find((x) => x.id === id);
  const AT = () => window.MV_RD.artifactTypes;
  const at = (id) => AT().find((x) => x.id === id);

  function Chip({ children, active, dot }) {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700,
        padding: "8px 14px", borderRadius: 999, whiteSpace: "nowrap",
        color: active ? "#fff" : INK, background: active ? NAVY : "#fff",
        border: `1px solid ${active ? NAVY : LINE}`,
      }}>
        {dot ? <span style={{ width: 7, height: 7, borderRadius: 4, background: dot }} /> : null}
        {children}
      </span>
    );
  }

  function ArtBadge({ id, on }) {
    const a = at(id);
    return (
      <span title={a.label} style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5,
        width: 30, height: 30, borderRadius: 9,
        background: on ? a.color + "15" : "#f3f4f6",
        color: on ? a.color : "#c8ccd4",
        border: `1px solid ${on ? a.color + "30" : "transparent"}`,
      }}>
        <Icon name={a.icon} size={15} color={on ? a.color : "#c8ccd4"} />
      </span>
    );
  }

  function MaterialCard({ m }) {
    const d = disc(m.disc);
    return (
      <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 16, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 11.5, fontWeight: 800, letterSpacing: 0.3, color: d.accent }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: d.accent }} /> {d.name}
          </span>
          <span style={{ fontSize: 11.5, color: FAINT, fontWeight: 600 }}>{m.when}</span>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: FAINT }}>{m.tema}</div>
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3, marginTop: 2 }}>{m.title}</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {AT().map((a) => <ArtBadge key={a.id} id={a.id} on={m.arts.includes(a.id)} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${LINE}`, paddingTop: 12, marginTop: 2 }}>
          <span style={{ fontSize: 12.5, color: MUTE, fontWeight: 600 }}>{m.files} arquivos · {m.arts.length} tipos</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 800, color: NAVY }}>
            Abrir <Icon name="arrowRight" size={15} color={NAVY} />
          </span>
        </div>
      </div>
    );
  }

  function OptionLibrary() {
    const M = window.MV_RD.materials;
    return (
      <div style={{ background: BG, fontFamily: "'Manrope', system-ui, sans-serif", color: INK, minHeight: 1180 }}>
        {/* top bar */}
        <div style={{ background: "#fff", borderBottom: `1px solid ${LINE}`, padding: "18px 36px", display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>M</div>
            <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.3 }}>MedVault</span>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, background: BG, border: `1px solid ${LINE}`, borderRadius: 12, padding: "12px 16px", color: MUTE, fontSize: 14 }}>
            <Icon name="search" size={18} /> Buscar tema, resumo, fármaco, sinal clínico…
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {window.MV_RD.members.slice(0, 4).map((mem, i) => (
              <div key={mem.name} style={{ width: 32, height: 32, borderRadius: 16, background: mem.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12.5, border: "2px solid #fff", marginLeft: i ? -9 : 0 }}>{mem.initials}</div>
            ))}
            <span style={{ fontSize: 12.5, color: MUTE, fontWeight: 700, marginLeft: 8 }}>+19</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: NAVY, color: "#fff", borderRadius: 11, padding: "11px 16px", fontWeight: 700, fontSize: 13.5 }}>
            <Icon name="sparkle" size={16} color="#fff" /> Adicionar
          </div>
        </div>

        <div style={{ padding: "26px 36px 40px" }}>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Central de Materiais</div>
          <div style={{ fontSize: 14, color: MUTE, marginTop: 4 }}>Tudo do grupo de estudos, organizado por disciplina e tema.</div>

          {/* filters */}
          <div style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap", alignItems: "center" }}>
            <Chip active>Todas</Chip>
            {D().map((d) => <Chip key={d.id} dot={d.accent}>{d.name}</Chip>)}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 1, color: FAINT, textTransform: "uppercase", marginRight: 4 }}>Tipo</span>
            {AT().map((a) => (
              <span key={a.id} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 700, padding: "7px 12px", borderRadius: 999, background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                <Icon name={a.icon} size={14} color={a.color} /> {a.label}
              </span>
            ))}
          </div>

          {/* grid */}
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", margin: "30px 0 14px" }}>
            <span style={{ fontSize: 16, fontWeight: 800 }}>Materiais <span style={{ color: FAINT }}>· {M.length} temas</span></span>
            <span style={{ fontSize: 12.5, color: MUTE, fontWeight: 600 }}>Mais recentes</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {M.map((m) => <MaterialCard key={m.disc + m.tema} m={m} />)}
          </div>
        </div>
      </div>
    );
  }

  window.OptionLibrary = OptionLibrary;
})();
