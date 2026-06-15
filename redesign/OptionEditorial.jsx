// Option B — "Editorial Minimalista": calm, magazine-like. Serif display,
// lots of whitespace, monochrome ink; discipline accent appears only as a
// small dot + the progress figure. Identity carried by the cover image.
(function () {
  const Icon = window.Icon;
  const INK = "#16203a";
  const MUTE = "#8a8f9c";
  const FAINT = "#b8bcc6";
  const LINE = "#e9eaee";
  const SERIF = "'Newsreader', Georgia, serif";
  const SANS = "'Manrope', system-ui, sans-serif";

  function Row({ d, i }) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "70px 168px 1fr 130px", alignItems: "center", gap: 28, padding: "26px 0", borderTop: `1px solid ${LINE}` }}>
        <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, color: FAINT, fontVariantNumeric: "tabular-nums" }}>
          {String(i + 1).padStart(2, "0")}
        </div>
        <image-slot id={d.slot + "-ed"} {...(d.src ? { src: d.src } : {})} shape="rounded" radius="12"
          style={{ width: 168, height: 104 }} placeholder={d.hint}></image-slot>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: d.accent }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, color: MUTE, textTransform: "uppercase" }}>{d.prova} · {d.temas} temas</span>
          </div>
          <div style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 500, color: INK, letterSpacing: -0.4, marginTop: 7, lineHeight: 1.05 }}>{d.name}</div>
          <div style={{ fontSize: 13.5, color: MUTE, marginTop: 6, lineHeight: 1.5, maxWidth: 440 }}>{d.desc}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 500, color: INK }}>{d.progress}<span style={{ fontSize: 16, color: FAINT }}>%</span></div>
          <div style={{ fontSize: 11.5, color: MUTE, fontWeight: 600, marginTop: 2 }}>dominado</div>
          <div style={{ height: 3, background: LINE, borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${d.progress}%`, background: d.accent }} />
          </div>
        </div>
      </div>
    );
  }

  function OptionEditorial() {
    const D = window.MV_RD.disciplines;
    return (
      <div style={{ background: "#fdfdfc", fontFamily: SANS, color: INK, minHeight: 1320, padding: "0 64px" }}>
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "30px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 600, letterSpacing: -0.3 }}>MedVault</span>
          </div>
          <div style={{ display: "flex", gap: 30, fontSize: 13.5, color: MUTE, fontWeight: 600 }}>
            <span style={{ color: INK }}>Disciplinas</span>
            <span>Ferramentas</span>
            <span>Agenda</span>
            <span>Progresso</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: MUTE }}>
            <Icon name="search" size={18} color={MUTE} />
            <div style={{ width: 34, height: 34, borderRadius: 17, background: "#16203a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, fontFamily: SANS }}>S</div>
          </div>
        </div>

        {/* masthead */}
        <div style={{ padding: "76px 0 60px", maxWidth: 880 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2.6, color: MUTE, textTransform: "uppercase" }}>Segundo Cérebro · Medicina</div>
          <div style={{ fontFamily: SERIF, fontSize: 62, fontWeight: 400, lineHeight: 1.04, letterSpacing: -1.6, marginTop: 22 }}>
            Tudo o que você precisa<br />para a <span style={{ fontStyle: "italic" }}>P1</span>, em um só lugar.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 30, fontSize: 14.5, color: MUTE }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, color: INK }}>
              <Icon name="calendar" size={17} color={INK} /> P1 em 5 dias
            </span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: FAINT }} />
            <span>5 disciplinas</span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: FAINT }} />
            <span>77 temas</span>
            <span style={{ width: 4, height: 4, borderRadius: 2, background: FAINT }} />
            <span>48% dominado</span>
          </div>
        </div>

        {/* discipline index */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontFamily: SERIF, fontSize: 20, fontStyle: "italic", color: INK }}>Disciplinas</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.4, color: MUTE, textTransform: "uppercase" }}>Por prova · 2025.1</span>
        </div>
        <div style={{ borderBottom: `1px solid ${LINE}` }}>
          {D.map((d, i) => <Row key={d.id} d={d} i={i} />)}
        </div>

        <div style={{ display: "flex", justifyContent: "center", padding: "44px 0 60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: SANS, fontSize: 13.5, fontWeight: 700, color: INK, border: `1px solid ${LINE}`, borderRadius: 999, padding: "13px 26px" }}>
            Abrir ferramentas de estudo <Icon name="arrowRight" size={16} color={INK} />
          </div>
        </div>
      </div>
    );
  }

  window.OptionEditorial = OptionEditorial;
})();
