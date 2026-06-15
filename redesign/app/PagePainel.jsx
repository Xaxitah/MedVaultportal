// ============================================================
// MedVault — Página: Painel (Início). Modelo A enxuto:
// cards de disciplina (line-art pastel) + prévia da agenda editável.
// ============================================================
(function () {
  const { THEME, Icon, Emblem, PageHead, Topbar, useAgenda } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  function DisciplineCard({ d, onOpen }) {
    const [h, setH] = React.useState(false);
    return (
      <button onClick={onOpen} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          textAlign: "left", cursor: "pointer", fontFamily: T.font,
          background: T.surface, border: `1.5px solid ${h ? d.line : T.line}`, borderRadius: 20,
          padding: 20, display: "flex", flexDirection: "column", gap: 16,
          transition: "border-color .15s ease, transform .15s ease",
          transform: h ? "translateY(-3px)" : "none",
        }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, background: d.tint,
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Emblem name={d.emblem} size={42} color={d.line} stroke={1.7} />
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: T.ink }}>{d.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: d.ink, background: d.tint, borderRadius: 999, padding: "4px 11px" }}>{d.prova} · {d.dias}d</span>
            <span style={{ fontSize: 12.5, color: T.mute, fontWeight: 600 }}>{d.temas} temas</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: d.line, marginTop: "auto" }}>
          Abrir materiais <Icon name="arrowRight" size={15} color={d.line} />
        </div>
      </button>
    );
  }

  function AgendaPreview({ nav }) {
    const store = useAgenda();
    const items = store.get().slice(0, 4);
    const disc = (id) => window.MV.disciplines.find((x) => x.id === id) || { line: T.accent, tint: T.accentBg, name: "Geral" };
    const fmt = (d) => { const [y, m, day] = d.split("-"); return `${day}/${m}`; };
    return (
      <div style={{ background: T.surface, border: `1.5px solid ${T.line}`, borderRadius: 20, padding: 22, position: "sticky", top: 22 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <Icon name="calendar" size={19} color={T.accentInk} />
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.3 }}>Agenda do grupo</span>
          </div>
          <button onClick={() => nav("agenda")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12.5, fontWeight: 700, color: T.mute, display: "inline-flex", alignItems: "center", gap: 4, fontFamily: T.font }}>
            Editar <Icon name="edit" size={14} color={T.mute} />
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {items.map((it) => {
            const d = disc(it.disc);
            return (
              <div key={it.id} style={{ display: "flex", gap: 12, padding: "11px 0", borderTop: `1px solid ${T.lineSoft}` }}>
                <div style={{ width: 44, textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: T.ink }}>{fmt(it.date)}</div>
                  <div style={{ fontSize: 11, color: T.mute, fontWeight: 600 }}>{it.time}</div>
                </div>
                <div style={{ borderLeft: `2.5px solid ${d.line}`, paddingLeft: 12 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink, lineHeight: 1.3 }}>{it.title}</div>
                  <div style={{ fontSize: 11.5, color: T.mute, fontWeight: 600, marginTop: 2 }}>{d.name}</div>
                </div>
              </div>
            );
          })}
          {items.length === 0 ? <div style={{ fontSize: 13, color: T.mute, padding: "10px 0" }}>Nada agendado ainda.</div> : null}
        </div>
        <button onClick={() => nav("agenda")} style={{
          marginTop: 14, width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7,
          background: T.accentBg, border: "none", borderRadius: 12, padding: "11px", fontWeight: 700, fontSize: 13, color: T.accentInk, cursor: "pointer", fontFamily: T.font,
        }}>
          <Icon name="plus" size={16} color={T.accentInk} /> Adicionar à agenda
        </button>
      </div>
    );
  }

  function Painel({ nav }) {
    const [add, setAdd] = React.useState(false);
    const AddModal = window.MVAddModal;
    return (
      <div style={{ padding: "30px 38px 48px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
          <Topbar onAdd={() => setAdd(true)} />
        </div>
        <PageHead title={`Bom dia, ${window.MV.student}.`} subtitle="Repositório do grupo de estudos — escolha uma disciplina para abrir os materiais." />

        {/* faixa próxima prova, calma e line-art */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, background: T.accentBg, border: `1.5px solid ${T.accentBorder}`, borderRadius: 18, padding: "18px 22px", marginBottom: 30 }}>
          <div style={{ width: 46, height: 46, borderRadius: 14, background: T.surface, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="calendar" size={22} color={T.accentInk} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: 0.5, color: T.accentInk, textTransform: "uppercase" }}>Próxima prova</div>
            <div style={{ fontSize: 15.5, fontWeight: 700, color: T.ink, marginTop: 2 }}>P1 — 4 disciplinas · faltam <b>5 dias</b></div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 26, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 0.6, color: T.mute, textTransform: "uppercase", marginBottom: 14 }}>Disciplinas</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
              {window.MV.disciplines.map((d) => <DisciplineCard key={d.id} d={d} onOpen={() => nav("materiais")} />)}
            </div>
          </div>
          <AgendaPreview nav={nav} />
        </div>

        <AddModal open={add} onClose={() => setAdd(false)} />
      </div>
    );
  }

  window.MVPages.Painel = Painel;
})();
