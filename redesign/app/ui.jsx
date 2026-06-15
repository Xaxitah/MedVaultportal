// ============================================================
// MedVault — tema line-art pastel + ícones + emblemas
// ============================================================
(function () {
  const THEME = {
    bg: "#fbfaf7",          // off-white quente
    surface: "#ffffff",
    ink: "#33384a",         // texto principal (suave, não preto)
    mute: "#8b8f9e",
    faint: "#b9bcc7",
    line: "#e7e4dd",        // hairline quente
    lineSoft: "#f0ede6",
    accent: "#7d8bb5",      // lavanda-azulado pastel (marca)
    accentInk: "#525f8a",   // texto/ícone de acento (adapta claro/escuro)
    btnBg: "#525f8a",       // fundo de botões sólidos (sempre texto branco)
    accentBg: "#eef0f7",    // superfície de acento (nav ativo, faixas)
    accentBorder: "#dfe3f1",// borda de acento
    hoverBg: "#f5f3ee",     // hover neutro quente
    fieldBg: "#f7f9f4",     // fundo sutil de formul./notas
    radius: 18,
    stroke: 1.6,
    logo: "coracao", // variante da logomarca (ver redesign/app/logos.jsx)
    font: "'Manrope', system-ui, -apple-system, sans-serif",
    serif: "'Newsreader', Georgia, serif",
  };

  // ---- Ícones de linha (stroke fino, cantos arredondados) ----
  const PATHS = {
    home: <path d="M5 11.5 12 5l7 6.5M7 10v9h10v-9" />,
    grid: <><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></>,
    tools: <path d="M4 19l7-7M9 7a3 3 0 1 0 4 4l6.5 6.5-2 2L11 13M14.5 6.5 18 3l3 3-3.5 3.5" />,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M4 9.5h16M8 3v4M16 3v4" /></>,
    book: <path d="M5 5.5A2 2 0 0 1 7 4h11v14H7a2 2 0 0 0-2 2V5.5ZM5 18.5A2 2 0 0 1 7 17h11" />,
    trending: <path d="M4 16l5-5 3.5 3.5L20 7M15 7h5v5" />,
    headphone: <path d="M5 14v-2a7 7 0 0 1 14 0v2M5 14a2 2 0 0 0-2 2v1a2 2 0 0 0 4 0v-3M19 14a2 2 0 0 1 2 2v1a2 2 0 0 1-4 0v-3" />,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" /></>,
    stack: <path d="M12 4 3 8l9 4 9-4-9-4ZM4 12.5 12 16l8-3.5M4 16.5 12 20l8-3.5" />,
    layers: <path d="M12 3 4 7.5l8 4.5 8-4.5L12 3ZM5 12l7 4 7-4M5 16l7 4 7-4" />,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.8-3.8" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    arrowRight: <path d="M5 12h13M12 6l6 6-6 6" />,
    chevronRight: <path d="M9 6l6 6-6 6" />,
    chevronLeft: <path d="M15 6l-6 6 6 6" />,
    chevronDown: <path d="M6 9l6 6 6-6" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    external: <path d="M14 5h5v5M19 5l-8 8M11 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />,
    edit: <path d="M5 19h14M7 15.5 16 6.5l2 2L9 17.5 6 18l.5-2.5Z" />,
    check: <path d="M5 12.5l4.5 4.5L19 7" />,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7.5V12l3 1.8" /></>,
    folder: <path d="M4 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />,
    sparkle: <path d="M12 4v5M12 15v5M4 12h5M15 12h5M7 7l3 3M14 14l3 3M17 7l-3 3M10 14l-3 3" />,
    bell: <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M9.5 19a2.5 2.5 0 0 0 5 0" />,
    play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
    trash: <path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13" />,
    bookmark: <path d="M7 4h10v16l-5-3.4L7 20V4Z" />,
    user: <path d="M5 20a7 7 0 0 1 14 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
    bookshelf: <><path d="M5 4h3v16H5z" /><path d="M9.5 4h3v16h-3z" /><path d="M14.6 5.1l2.9.5 2.3 13.8-2.9-.5z" /><path d="M4 20h16" /></>,
    quote: <path d="M10 8H6.5A1.5 1.5 0 0 0 5 9.5V13h4v-3M10 8v5a4 4 0 0 1-4 4M19 8h-3.5A1.5 1.5 0 0 0 14 9.5V13h4v-3M19 8v5a4 4 0 0 1-4 4" />,
    file: <path d="M14 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-5ZM14 4v5h5" />,
    fileText: <><path d="M14 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-5ZM14 4v5h5" /><path d="M8.5 13h7M8.5 16.5h4.5" /></>,
    presentation: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8.5 20h7M8 11l2.5-2.5L13 11l3-3" /></>,
    logo: <><path d="M12 2.8 19 5.5v4.9c0 4.6-2.9 7.9-7 9.6-4.1-1.7-7-5-7-9.6V5.5L12 2.8Z" /><circle cx="12" cy="6" r=".62" /><path d="M12 6.9v9" /><path d="M14.6 7.4c0 1.05-1.16 1.7-2.6 1.7s-2.6.65-2.6 1.7 1.16 1.7 2.6 1.7 2.6.65 2.6 1.7-1.16 1.7-2.6 1.7-2.55-.5-2.55-1.35" /></>,
  };

  function Icon({ name, size = 20, stroke = THEME.stroke, color = "currentColor", style = {} }) {
    if (name === "logo" && window.MVLogoMark) {
      const LogoMark = window.MVLogoMark;
      return <LogoMark variant={THEME.logo || "classica"} size={size} color={color} stroke={stroke} style={style} />;
    }
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
        strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        style={{ display: "block", flexShrink: 0, ...style }} aria-hidden="true">
        {PATHS[name] || null}
      </svg>
    );
  }

  // ---- Emblemas line-art por disciplina (48x48) ----
  const EMBLEMS = {
    pill: <g transform="rotate(-40 24 24)"><rect x="9" y="18" width="30" height="12" rx="6" /><path d="M24 18v12" /></g>,
    stetho: <><circle cx="16" cy="11" r="2" /><circle cx="32" cy="11" r="2" /><path d="M16 13c-3 7-1 14 6 15M32 13c3 7 1 14-6 15" /><path d="M22 28v3a2.5 2.5 0 0 0 5 0v-1" /><circle cx="30" cy="33" r="4.5" /></>,
    kidney: <path d="M24 11c6-2 13 3 13 11s-7 13-13 10c-2-1-3-3-3-5 0-3 2-4 2-7s-3-4-3-7c0-1 .5-2 1-3" transform="rotate(8 24 24)" />,
    scale: <><circle cx="24" cy="11" r="2" /><path d="M24 13v20M17 35h14M13 16h22M13 16l-4 9M13 16l4 9M35 16l-4 9M35 16l4 9" /><path d="M5 25c0 2.5 2 4 4 4s4-1.5 4-4M31 25c0 2.5 2 4 4 4s4-1.5 4-4" /></>,
    scalpel: <><path d="M30 19 39 10c1.5 2 1 5.5-2 8l-5 3Z" /><path d="M30 19 11 36" /></>,
  };

  function Emblem({ name, size = 40, color = "currentColor", stroke = 1.7, style = {} }) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color}
        strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        style={{ display: "block", ...style }} aria-hidden="true">
        {EMBLEMS[name] || null}
      </svg>
    );
  }

  function Avatar({ m, size = 32, ring = "#fff" }) {
    return (
      <div style={{ width: size, height: size, borderRadius: size / 2, background: m.color, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
        fontSize: size * 0.42, border: `2px solid ${ring}`, flexShrink: 0 }}>{m.initials}</div>
    );
  }

  Object.assign(window, { THEME, Icon, Emblem, Avatar });
})();
