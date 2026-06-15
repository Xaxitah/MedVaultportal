// Model D — "Mural do Grupo": a collaborative study-group feed. Shows what
// was just added, who shared it, pinned destaques, discipline filters and the
// véspera reminder. Warm but clean.
(function () {
  const Icon = window.Icon;
  const INK = "#1b2336", MUTE = "#6b7280", FAINT = "#aeb2bd", LINE = "#ecedf1", BG = "#f6f7f9", NAVY = "#13203a";
  const disc = (id) => window.MV_RD.disciplines.find((x) => x.id === id);
  const at = (id) => window.MV_RD.artifactTypes.find((x) => x.id === id);
  const member = (name) => window.MV_RD.members.find((m) => m.name === name) || { initials: name[0], color: NAVY };

  function FeedItem({ f }) {
    const d = disc(f.disc), a = at(f.art), mem = member(f.who);
    return (
      <div style={{ display: "flex", gap: 13, padding: "16px 0", borderTop: `1px solid ${LINE}` }}>
        <div style={{ width: 38, height: 38, borderRadius: 19, background: mem.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{mem.initials}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, color: MUTE }}>
            <b style={{ color: INK, fontWeight: 800 }}>{f.who}</b> adicionou <b style={{ color: a.color, fontWeight: 800 }}>{a.label}</b>
            <span style={{ color: FAINT }}> · {f.when}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 13, padding: "12px 14px", marginTop: 9 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: a.color + "15", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={a.icon} size={18} color={a.color} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: -0.2 }}>{f.tema}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, fontWeight: 700, color: d.accent, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: d.accent }} /> {d.name}
              </div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 800, color: NAVY, border: `1px solid ${LINE}`, borderRadius: 9, padding: "8px 12px" }}>
              Abrir <Icon name="arrowRight" size={14} color={NAVY} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  function SideCard({ title, children, action }) {
    return (
      <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 16, padding: 18, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2 }}>{title}</span>
          {action ? <span style={{ fontSize: 12, fontWeight: 700, color: MUTE }}>{action}</span> : null}
        </div>
        {children}
      </div>
    );
  }

  function OptionFeed() {
    const RD = window.MV_RD;
    const days = [...new Set(RD.feed.map((f) => f.day))];
    const pinned = [
      { art: "vespera", tema: "Resumão P1 — Farmacologia", disc: "farm" },
      { art: "mapa", tema: "Mapa: Anti-hipertensivos", disc: "farm" },
    ];
    return (
      <div style={{ background: BG, fontFamily: "'Manrope', system-ui, sans-serif", color: INK, minHeight: 1180, padding: "26px 36px 40px" }}>
        {/* banner */}
        <div style={{ background: NAVY, color: "#fff", borderRadius: 20, padding: "26px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", opacity: 0.6 }}>Grupo de Estudos · UNINTER</div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.6, marginTop: 6 }}>Mural do Grupo</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 14, fontSize: 13.5, opacity: 0.9 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Icon name="calendar" size={16} color="#fff" /> P1 em 5 dias</span>
              <span style={{ width: 4, height: 4, borderRadius: 2, background: "rgba(255,255,255,.4)" }} />
              <span>77 materiais</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
              {RD.members.map((mem, i) => (
                <div key={mem.name} style={{ width: 36, height: 36, borderRadius: 18, background: mem.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, border: "2px solid #13203a", marginLeft: i ? -10 : 0 }}>{mem.initials}</div>
              ))}
            </div>
            <span style={{ fontSize: 12.5, opacity: 0.7, fontWeight: 600 }}>23 membros ativos</span>
          </div>
        </div>

        {/* two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, marginTop: 26 }}>
          {/* feed */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>Atividade recente</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 800, color: "#fff", background: NAVY, borderRadius: 10, padding: "9px 14px" }}>
                <Icon name="sparkle" size={15} color="#fff" /> Adicionar material
              </span>
            </div>
            {days.map((day) => (
              <div key={day} style={{ marginTop: 14 }}>
                <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: FAINT, marginBottom: 2 }}>{day}</div>
                {RD.feed.filter((f) => f.day === day).map((f, i) => <FeedItem key={i} f={f} />)}
              </div>
            ))}
          </div>

          {/* sidebar */}
          <div>
            <SideCard title="Destaques fixados" action="📌">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {pinned.map((p, i) => {
                  const a = at(p.art), d = disc(p.disc);
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 11 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 9, background: a.color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon name={a.icon} size={16} color={a.color} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.25 }}>{p.tema}</div>
                        <div style={{ fontSize: 11.5, color: MUTE, fontWeight: 600 }}>{d.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SideCard>

            <SideCard title="Disciplinas">
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {RD.disciplines.map((d) => (
                  <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 6px", borderRadius: 9 }}>
                    <span style={{ width: 9, height: 9, borderRadius: 5, background: d.accent }} />
                    <span style={{ fontSize: 13.5, fontWeight: 700, flex: 1 }}>{d.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: FAINT }}>{d.temas}</span>
                  </div>
                ))}
              </div>
            </SideCard>

            <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderLeft: "4px solid #c62828", borderRadius: 16, padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="clock" size={17} color="#c62828" />
                <span style={{ fontSize: 14, fontWeight: 800 }}>Revisão de véspera</span>
              </div>
              <div style={{ fontSize: 12.5, color: MUTE, marginTop: 7, lineHeight: 1.5 }}>3 materiais de véspera prontos para a P1. Revise antes do dia.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  window.OptionFeed = OptionFeed;
})();
