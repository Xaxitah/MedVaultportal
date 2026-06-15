// ============================================================
// MedVault — helpers compartilhados de página (cabeçalho, etc.)
// ============================================================
(function () {
  const { THEME, Icon, Avatar } = window;
  const T = THEME;

  function PageHead({ title, subtitle, right }) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 26, flexWrap: "wrap" }}>
        <div>
          <h1 style={{ fontFamily: T.serif, fontSize: 34, fontWeight: 500, letterSpacing: -0.6, margin: 0, color: T.ink }}>{title}</h1>
          {subtitle ? <div style={{ fontSize: 14.5, color: T.mute, marginTop: 6 }}>{subtitle}</div> : null}
        </div>
        {right || null}
      </div>
    );
  }

  function Topbar({ onAdd }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {window.MV.members.slice(0, 4).map((m, i) => (
            <div key={m.name} style={{ marginLeft: i ? -9 : 0 }}><Avatar m={m} size={32} /></div>
          ))}
          <span style={{ fontSize: 12.5, color: T.mute, fontWeight: 700, marginLeft: 9 }}>+19</span>
        </div>
        {onAdd ? (
          <button onClick={onAdd} style={{
            display: "inline-flex", alignItems: "center", gap: 8, border: "none", cursor: "pointer",
            background: T.btnBg, color: "#fff", borderRadius: 12, padding: "11px 16px",
            fontWeight: 700, fontSize: 13.5, fontFamily: T.font,
          }}>
            <Icon name="plus" size={17} color="#fff" /> Adicionar
          </button>
        ) : null}
      </div>
    );
  }

  // Botão pill line-art reutilizável
  function Pill({ children, active, dot, onClick }) {
    return (
      <button onClick={onClick} style={{
        display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700,
        padding: "8px 14px", borderRadius: 999, whiteSpace: "nowrap", cursor: onClick ? "pointer" : "default",
        fontFamily: T.font, color: active ? "#fff" : T.ink,
        background: active ? T.btnBg : T.surface,
        border: `1.4px solid ${active ? T.btnBg : T.line}`,
      }}>
        {dot ? <span style={{ width: 8, height: 8, borderRadius: 4, border: `2px solid ${dot}`, background: active ? "#fff" : dot }} /> : null}
        {children}
      </button>
    );
  }

  Object.assign(window, { PageHead, Topbar, MVPill: Pill });
})();
