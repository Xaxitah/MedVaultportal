// ============================================================
// MedVault — Shell: sidebar line-art + roteamento (hash)
// ============================================================
(function () {
  const { THEME, Icon, Avatar } = window;
  const T = THEME;

  const ROUTES = {
    painel:      { label: "Início",       icon: "home",     group: 0 },
    materiais:   { label: "Materiais",    icon: "grid",     group: 0 },
    biblioteca:  { label: "Biblioteca",   icon: "bookshelf", group: 0 },
    ferramentas: { label: "Ferramentas",  icon: "tools",    group: 0 },
    agenda:      { label: "Agenda",       icon: "calendar", group: 0 },
    quiz:        { label: "Quizzes",      icon: "target",   group: 1, art: "quiz" },
    flashcards:  { label: "Flashcards",   icon: "stack",    group: 1, art: "flashcards" },
    podcast:     { label: "Podcasts",     icon: "headphone",group: 1, art: "podcast" },
    infografico: { label: "Infográficos", icon: "trending", group: 1, art: "infografico" },
  };

  function useRoute() {
    const get = () => (window.location.hash.replace(/^#\/?/, "") || "painel").split("?")[0];
    const [r, setR] = React.useState(get());
    React.useEffect(() => {
      const on = () => setR(get());
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    return [r, (next) => { window.location.hash = "/" + next; }];
  }

  function NavItem({ id, route, active, onNav }) {
    const [hover, setHover] = React.useState(false);
    const r = ROUTES[id];
    const on = active;
    return (
      <a href={"#/" + id} onClick={() => onNav(id)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          display: "flex", alignItems: "center", gap: 12, padding: "10px 13px", borderRadius: 12,
          textDecoration: "none", fontSize: 14, fontWeight: on ? 700 : 600,
          color: on ? T.accentInk : (hover ? T.ink : T.mute),
          background: on ? T.accentBg : (hover ? T.hoverBg : "transparent"),
          transition: "all .14s ease",
        }}>
        <Icon name={r.icon} size={19} color={on ? T.accentInk : (hover ? T.ink : T.faint)} />
        {r.label}
      </a>
    );
  }

  function Sidebar({ route, onNav }) {
    return (
      <nav style={{
        width: 248, flexShrink: 0, background: T.surface, borderRight: `1px solid ${T.line}`,
        padding: "24px 16px", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "0 8px 22px" }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, border: `1.6px solid ${T.accent}`, background: T.accentBg,
            display: "flex", alignItems: "center", justifyContent: "center", color: T.accentInk }}>
            <Icon name="logo" size={22} color={T.accentInk} />
          </div>
          <div>
            <div style={{ fontWeight: 800, color: T.ink, fontSize: 16, letterSpacing: -0.3 }}>MedVault</div>
            <div style={{ fontSize: 10.5, color: T.mute, fontWeight: 600 }}>Segundo Cérebro</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {Object.keys(ROUTES).filter((k) => ROUTES[k].group === 0).map((id) => (
            <NavItem key={id} id={id} active={route === id} onNav={onNav} />
          ))}
        </div>

        <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: 1.2, color: T.faint, textTransform: "uppercase", padding: "20px 13px 8px" }}>Artefatos</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {Object.keys(ROUTES).filter((k) => ROUTES[k].group === 1).map((id) => (
            <NavItem key={id} id={id} active={route === id} onNav={onNav} />
          ))}
        </div>

        <button onClick={() => window.postMessage({ type: "__activate_edit_mode" }, "*")} style={{
          marginTop: "auto", marginBottom: 10, display: "flex", alignItems: "center", gap: 11,
          padding: "10px 13px", borderRadius: 12, border: `1.5px dashed ${T.line}`,
          background: "transparent", cursor: "pointer", color: T.mute,
          fontWeight: 700, fontSize: 13, fontFamily: T.font,
        }}>
          <Icon name="sparkle" size={17} color={T.accentInk} /> Personalizar
        </button>

        <a href="#/login" onClick={() => onNav("login")} title="Sair · trocar usuário"
          style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 10px", borderTop: `1px solid ${T.line}`, textDecoration: "none", cursor: "pointer" }}>
          <Avatar m={window.MV.members[0]} size={34} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{window.MV.student}</div>
            <div style={{ fontSize: 11, color: T.mute, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{window.MV.group}</div>
          </div>
        </a>
      </nav>
    );
  }

  function App() {
    const [route, nav] = useRoute();
    const [, force] = React.useReducer((x) => x + 1, 0);
    React.useEffect(() => {
      const on = () => force();
      window.addEventListener("mv-rerender", on);
      return () => window.removeEventListener("mv-rerender", on);
    }, []);
    const r = ROUTES[route] || ROUTES.painel;
    const Pages = window.MVPages || {};
    if (route === "login" && Pages.Login) return <Pages.Login nav={nav} />;
    let view = null;
    if (route === "painel") view = <Pages.Painel nav={nav} />;
    else if (route === "materiais") view = <Pages.Materiais nav={nav} />;
    else if (route === "biblioteca") view = <Pages.Biblioteca nav={nav} />;
    else if (route === "ferramentas") view = <Pages.Ferramentas nav={nav} />;
    else if (route === "agenda") view = <Pages.Agenda nav={nav} />;
    else if (r.art) view = <Pages.Artefato art={r.art} nav={nav} />;
    else view = <Pages.Painel nav={nav} />;

    return (
      <div style={{ display: "flex", minHeight: "100vh", background: T.bg, fontFamily: T.font, color: T.ink }}>
        <Sidebar key={route} route={route} onNav={nav} />
        <main style={{ flex: 1, minWidth: 0 }}>{view}</main>
      </div>
    );
  }

  window.MVApp = App;
  window.MV_ROUTES = ROUTES;
})();
