// Option A — "Painel de Estudo": a calm, modern study dashboard.
// Leads with what to study now (próxima prova, streak, continue), disciplines
// carry an identity cover image. Minimal color: accents are thin.
(function () {
  const Icon = window.Icon;
  const NAVY = "#13203a";
  const INK = "#1b2336";
  const MUTE = "#6b7280";
  const LINE = "#eceef2";
  const BG = "#f6f7f9";

  function Stat({ icon, value, label, sub }) {
    return (
      <div style={{ flex: 1, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 16, padding: "18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: MUTE }}>
          <Icon name={icon} size={17} />
          <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 0.2 }}>{label}</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 12 }}>
          <span style={{ fontSize: 30, fontWeight: 800, color: INK, letterSpacing: -0.5 }}>{value}</span>
          {sub ? <span style={{ fontSize: 13, color: MUTE, fontWeight: 600 }}>{sub}</span> : null}
        </div>
      </div>
    );
  }

  function Rail() {
    const items = [
      { icon: "home", label: "Início", active: true },
      { icon: "grid", label: "Disciplinas" },
      { icon: "target", label: "Quiz" },
      { icon: "stack", label: "Flashcards" },
      { icon: "calendar", label: "Agenda" },
      { icon: "trending", label: "Progresso" },
    ];
    return (
      <div style={{ width: 230, background: "#fff", borderRight: `1px solid ${LINE}`, padding: "26px 18px", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px 22px" }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15 }}>M</div>
          <div>
            <div style={{ fontWeight: 800, color: INK, fontSize: 15.5, letterSpacing: -0.2 }}>MedVault</div>
            <div style={{ fontSize: 10.5, color: MUTE, fontWeight: 600 }}>Segundo Cérebro</div>
          </div>
        </div>
        {items.map((it) => (
          <div key={it.label} style={{
            display: "flex", alignItems: "center", gap: 11, padding: "10px 12px", borderRadius: 11,
            color: it.active ? INK : MUTE, background: it.active ? BG : "transparent",
            fontWeight: it.active ? 700 : 600, fontSize: 13.5,
          }}>
            <Icon name={it.icon} size={18} color={it.active ? NAVY : MUTE} />
            {it.label}
          </div>
        ))}
        <div style={{ marginTop: "auto", background: BG, borderRadius: 14, padding: 16 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: INK }}>Revisão de véspera</div>
          <div style={{ fontSize: 11.5, color: MUTE, marginTop: 4, lineHeight: 1.45 }}>3 temas marcados para revisar hoje.</div>
        </div>
      </div>
    );
  }

  function DisciplineCard({ d }) {
    return (
      <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 18, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", height: 116 }}>
          <image-slot id={d.slot} {...(d.src ? { src: d.src } : {})} shape="rect"
            style={{ width: "100%", height: "100%" }} placeholder={`Imagem · ${d.hint}`}></image-slot>
          <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.92)", backdropFilter: "blur(4px)", borderRadius: 8, padding: "3px 9px", fontSize: 11, fontWeight: 700, color: INK }}>
            {d.prova} · {d.dias}d
          </div>
        </div>
        <div style={{ padding: "16px 18px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: d.accent }} />
            <span style={{ fontWeight: 800, color: INK, fontSize: 15.5, letterSpacing: -0.2 }}>{d.name}</span>
          </div>
          <div style={{ fontSize: 12.5, color: MUTE, marginTop: 7, lineHeight: 1.5, minHeight: 38 }}>{d.desc}</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: MUTE, fontWeight: 600, margin: "14px 0 6px" }}>
            <span>{d.feitos}/{d.temas} temas</span>
            <span style={{ color: INK }}>{d.progress}%</span>
          </div>
          <div style={{ height: 6, background: LINE, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${d.progress}%`, background: d.accent, borderRadius: 4 }} />
          </div>
        </div>
      </div>
    );
  }

  function OptionDashboard() {
    const D = window.MV_RD.disciplines;
    const farm = D[0];
    return (
      <div style={{ display: "flex", minHeight: 1320, background: BG, fontFamily: "'Manrope', system-ui, sans-serif", color: INK }}>
        <Rail />
        <div style={{ flex: 1, padding: "26px 34px 40px", minWidth: 0 }}>
          {/* top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 26 }}>
            <div>
              <div style={{ fontSize: 13, color: MUTE, fontWeight: 600 }}>Segunda, 9 de junho</div>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.6, marginTop: 2 }}>Bom dia, {window.MV_RD.student} 👋</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 11, padding: "9px 13px", color: MUTE, fontSize: 13, width: 200 }}>
                <Icon name="search" size={16} /> Buscar tema…
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: "#fff", border: `1px solid ${LINE}`, display: "flex", alignItems: "center", justifyContent: "center", color: MUTE }}>
                <Icon name="bell" size={18} />
              </div>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>S</div>
            </div>
          </div>

          {/* hero: prova countdown + stats */}
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ flex: "0 0 320px", background: NAVY, color: "#fff", borderRadius: 18, padding: 24, position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.7, fontSize: 12.5, fontWeight: 600 }}>
                <Icon name="calendar" size={16} color="#fff" /> Próxima prova
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, marginTop: 14, opacity: 0.85 }}>P1 — 4 disciplinas</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 2 }}>
                <span style={{ fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>5</span>
                <span style={{ fontSize: 16, fontWeight: 600, opacity: 0.8 }}>dias restantes</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, background: "#fff", color: NAVY, borderRadius: 11, padding: "11px 16px", fontWeight: 700, fontSize: 13.5 }}>
                Montar revisão <Icon name="arrowRight" size={17} color={NAVY} />
              </div>
            </div>
            <Stat icon="flame" value="12" sub="dias" label="SEQUÊNCIA" />
            <Stat icon="target" value="48%" label="DOMINADO (P1)" />
            <Stat icon="stack" value="23" sub="cartas" label="REVISAR HOJE" />
          </div>

          {/* continue */}
          <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderLeft: `4px solid ${farm.accent}`, borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 18, marginBottom: 30 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: BG, display: "flex", alignItems: "center", justifyContent: "center", color: farm.accent }}>
              <Icon name="play" size={20} color={farm.accent} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: MUTE, fontWeight: 700, letterSpacing: 0.3 }}>CONTINUE DE ONDE PAROU</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginTop: 3 }}>Farmacologia · T06 — AINEs</div>
            </div>
            <div style={{ fontSize: 13, color: MUTE, fontWeight: 600 }}>parou em 60%</div>
            <div style={{ display: "flex", alignItems: "center", gap: 7, background: NAVY, color: "#fff", borderRadius: 11, padding: "11px 16px", fontWeight: 700, fontSize: 13.5 }}>
              Retomar <Icon name="arrowRight" size={16} color="#fff" />
            </div>
          </div>

          {/* disciplines */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.3 }}>Suas disciplinas</span>
            <span style={{ fontSize: 13, color: MUTE, fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>Ver todas <Icon name="chevronRight" size={15} /></span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {D.map((d) => <DisciplineCard key={d.id} d={d} />)}
          </div>
        </div>
      </div>
    );
  }

  window.OptionDashboard = OptionDashboard;
})();
