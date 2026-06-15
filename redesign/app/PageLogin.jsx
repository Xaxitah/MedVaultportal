// ============================================================
// MedVault — Tela de login (logo em destaque)
// ============================================================
(function () {
  const { THEME, Icon } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};

  function Field({ label, type, placeholder, value, onChange }) {
    return (
      <label style={{ display: "block", marginBottom: 14 }}>
        <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 0.4, color: T.mute, textTransform: "uppercase", marginBottom: 7 }}>{label}</div>
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "12px 14px", borderRadius: 12,
            border: `1.5px solid ${T.line}`, fontSize: 14, fontFamily: T.font, color: T.ink,
            background: T.surface, outline: "none" }} />
      </label>
    );
  }

  function Login({ nav }) {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    function entrar(e) { e.preventDefault(); nav("painel"); }
    return (
      <div data-screen-label="Login" style={{ minHeight: "100vh", background: T.bg, fontFamily: T.font, color: T.ink,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ width: 400, maxWidth: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Icon name="logo" size={104} color={T.accentInk} stroke={0.9} />
          <h1 style={{ fontFamily: T.serif, fontSize: 34, fontWeight: 500, letterSpacing: -0.6, margin: "18px 0 4px", color: T.ink }}>MedVault</h1>
          <p style={{ fontSize: 13, color: T.mute, fontWeight: 600, margin: "0 0 28px" }}>Segundo Cérebro · Medicina</p>

          <form onSubmit={entrar} style={{ width: "100%", background: T.surface, border: `1px solid ${T.line}`,
            borderRadius: 22, padding: 26, boxSizing: "border-box" }}>
            <Field label="E-mail" type="email" placeholder="voce@exemplo.com" value={email} onChange={setEmail} />
            <Field label="Senha" type="password" placeholder="••••••••" value={senha} onChange={setSenha} />
            <button type="submit" style={{ width: "100%", marginTop: 6, background: T.btnBg, border: "none",
              borderRadius: 12, padding: "13px 18px", fontWeight: 700, fontSize: 14, color: "#fff",
              cursor: "pointer", fontFamily: T.font }}>Entrar</button>
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <a href="#/login" onClick={(e) => e.preventDefault()} style={{ fontSize: 12.5, fontWeight: 700, color: T.accentInk, textDecoration: "none" }}>Esqueci minha senha</a>
            </div>
          </form>

          <p style={{ fontSize: 12, color: T.faint, fontWeight: 600, marginTop: 22 }}>Repositório do grupo · acesso por convite</p>
        </div>
      </div>
    );
  }

  window.MVPages.Login = Login;
})();
