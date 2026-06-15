/* @ds-bundle: {"format":3,"namespace":"MedVaultDesignSystem_bafe94","components":[{"name":"DisciplineCard","sourcePath":"components/cards/DisciplineCard.jsx"},{"name":"IntroBox","sourcePath":"components/cards/IntroBox.jsx"},{"name":"TopicCard","sourcePath":"components/cards/TopicCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ExamBadge","sourcePath":"components/core/ExamBadge.jsx"},{"name":"FonteTag","sourcePath":"components/core/FonteTag.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Flashcard","sourcePath":"components/study/Flashcard.jsx"},{"name":"OptionButton","sourcePath":"components/study/OptionButton.jsx"},{"name":"ProgressBar","sourcePath":"components/study/ProgressBar.jsx"}],"sourceHashes":{"components/cards/DisciplineCard.jsx":"85cce87f191d","components/cards/IntroBox.jsx":"826d6fa239a8","components/cards/TopicCard.jsx":"47d48a8d2f2c","components/core/Button.jsx":"bbc369ef911d","components/core/ExamBadge.jsx":"34aed80fc402","components/core/FonteTag.jsx":"e62398e89518","components/core/Pill.jsx":"71629215e5c9","components/navigation/Breadcrumb.jsx":"ce4bdd8ec51a","components/navigation/Sidebar.jsx":"8e981576ef97","components/navigation/Tabs.jsx":"b09b79db1375","components/study/Flashcard.jsx":"0e5aaaaf1cfa","components/study/OptionButton.jsx":"9cfb641cd521","components/study/ProgressBar.jsx":"da3215e811a7","redesign/OptionDashboard.jsx":"74ffb2d69bc8","redesign/OptionEditorial.jsx":"b2158991280b","redesign/OptionFeed.jsx":"3968e0bfe7d8","redesign/OptionLibrary.jsx":"6e37685632ae","redesign/OrgSchemes.jsx":"affc29eab0c1","redesign/app/AddModal.jsx":"bdeaff0021ea","redesign/app/PageAgenda.jsx":"a8160b7d06b8","redesign/app/PageArtefato.jsx":"5194245b66db","redesign/app/PageBiblioteca.jsx":"958ff6c01ed3","redesign/app/PageFerramentas.jsx":"008e91697378","redesign/app/PageLogin.jsx":"a0e043ba8c68","redesign/app/PageMateriais.jsx":"fb016bb96224","redesign/app/PagePainel.jsx":"6ac7fac7cf8a","redesign/app/Shell.jsx":"27c0f48f4abc","redesign/app/data.js":"e88235b33564","redesign/app/logos.jsx":"fd8a3f662773","redesign/app/shared.jsx":"55ec4463d4a8","redesign/app/store.js":"ba47f5504cba","redesign/app/tweaks-panel.jsx":"6591467622ed","redesign/app/tweaks.jsx":"6d09ffa1c3a3","redesign/app/ui.jsx":"8ffaefc2a4c9","redesign/data.js":"9b9a3128e101","redesign/design-canvas.jsx":"bd8746af6e58","redesign/icons.jsx":"00da2a72a244","redesign/image-slot.js":"9309434cb09c","ui_kits/portal/PortalApp.jsx":"4eb9d9df1612","ui_kits/portal/data.js":"9fb107c52749","ui_kits/study/StudyApp.jsx":"8aca9fe9b20e","ui_kits/study/data.js":"33c115872f3c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MedVaultDesignSystem_bafe94 = window.MedVaultDesignSystem_bafe94 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/DisciplineCard.jsx
try { (() => {
const DISCIPLINE_COLORS = {
  farm: "var(--mv-farm)",
  semi: "var(--mv-semi)",
  urol: "var(--mv-urol)",
  etica: "var(--mv-etica)",
  semiq: "var(--mv-semiq)"
};

/**
 * DisciplineCard — the big entry tile on the portal home.
 * Colored top border, emoji cover on a tinted wash, title, blurb
 * and a footer row of exam pills.
 */
function DisciplineCard({
  discipline = "farm",
  emoji = "💊",
  title = "Disciplina",
  description = "",
  footer = null,
  href = "#",
  onClick
}) {
  const color = DISCIPLINE_COLORS[discipline] || discipline;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--mv-surface)",
      borderRadius: "var(--mv-radius-xl)",
      boxShadow: hover ? "var(--mv-shadow-hover)" : "var(--mv-shadow)",
      overflow: "hidden",
      borderTop: `6px solid ${color}`,
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
      minHeight: 220,
      transform: hover ? "var(--mv-lift)" : "none",
      transition: "transform var(--mv-transition), box-shadow var(--mv-transition)",
      fontFamily: "var(--mv-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3.2rem",
      background: `color-mix(in srgb, ${color} 8%, transparent)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, emoji)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      fontWeight: "var(--mv-weight-extrabold)",
      textTransform: "uppercase",
      letterSpacing: "var(--mv-tracking-wide)",
      color: "var(--mv-ink)",
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-sm)",
      color: "var(--mv-ink-muted)",
      lineHeight: 1.4
    }
  }, description)), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderTop: "1px solid var(--mv-border)",
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { DisciplineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DisciplineCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/IntroBox.jsx
try { (() => {
/**
 * IntroBox — white panel with a left accent border that opens
 * a section ("Sobre esta disciplina"). Optional source-tag row.
 */
function IntroBox({
  title = "",
  icon = null,
  accent = "var(--mv-indigo-400)",
  children,
  sources = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mv-surface)",
      borderRadius: "var(--mv-radius-xl)",
      padding: "24px 28px",
      boxShadow: "var(--mv-shadow)",
      borderLeft: `5px solid ${accent}`,
      fontFamily: "var(--mv-font-sans)"
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--mv-text-md)",
      fontWeight: "var(--mv-weight-bold)",
      marginBottom: 8,
      color: "var(--mv-ink)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon, " ") : null, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-base)",
      color: "var(--mv-ink-muted)",
      lineHeight: 1.6
    }
  }, children), sources ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, sources) : null);
}
Object.assign(__ds_scope, { IntroBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IntroBox.jsx", error: String((e && e.message) || e) }); }

// components/cards/TopicCard.jsx
try { (() => {
const DISCIPLINE_COLORS = {
  farm: "var(--mv-farm)",
  semi: "var(--mv-semi)",
  urol: "var(--mv-urol)",
  etica: "var(--mv-etica)",
  semiq: "var(--mv-semiq)"
};

/**
 * TopicCard — a single study topic (tema). Number badge + title + sub,
 * with a row of artifact tags below. Used inside P1/P2 topic grids.
 */
function TopicCard({
  number = "T01",
  exam = "p1",
  discipline = "farm",
  title = "Tema",
  subtitle = "",
  tags = null,
  href = "#",
  onClick
}) {
  const color = DISCIPLINE_COLORS[discipline] || discipline;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--mv-surface)",
      borderRadius: "var(--mv-radius-xl)",
      boxShadow: hover ? "var(--mv-shadow-hover)" : "var(--mv-shadow)",
      borderTop: `4px solid ${color}`,
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
      transform: hover ? "var(--mv-lift)" : "none",
      transition: "transform var(--mv-transition), box-shadow var(--mv-transition)",
      fontFamily: "var(--mv-font-sans)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px 8px"
    }
  }, /*#__PURE__*/React.createElement(ExamBadgeInline, {
    exam: exam
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      fontWeight: "var(--mv-weight-bold)",
      lineHeight: 1.3,
      color: "var(--mv-ink)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-sm)",
      color: "var(--mv-ink-muted)",
      marginTop: 3
    }
  }, subtitle) : null)), tags ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px 14px",
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, tags) : null);
}
function ExamBadgeInline({
  exam,
  children
}) {
  const grads = {
    p1: "var(--mv-p1-grad)",
    p2: "var(--mv-p2-grad)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "var(--mv-radius-round)",
      background: grads[exam],
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.72rem",
      fontWeight: "var(--mv-weight-extrabold)",
      flexShrink: 0
    }
  }, children);
}
Object.assign(__ds_scope, { TopicCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TopicCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MedVault Button.
 * Variants mirror the in-product buttons: solid navy primary,
 * outlined secondary, and the lighter "slides"/link variant.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  as = "button",
  href,
  onClick,
  style = {},
  ...rest
}) {
  const pads = {
    sm: "0.45rem 0.9rem",
    md: "0.6rem 1.4rem",
    lg: "0.7rem 1.75rem"
  };
  const fontSizes = {
    sm: "0.85rem",
    md: "0.9rem",
    lg: "0.95rem"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: pads[size],
    fontSize: fontSizes[size],
    fontFamily: "var(--mv-font-sans)",
    fontWeight: "var(--mv-weight-semibold)",
    borderRadius: "var(--mv-radius-lg)",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    lineHeight: 1.2,
    transition: "background var(--mv-transition-fast), border-color var(--mv-transition-fast), filter var(--mv-transition-fast)",
    border: "1px solid transparent"
  };
  const variants = {
    primary: {
      background: disabled ? "var(--mv-border)" : "var(--mv-navy-700)",
      color: disabled ? "var(--mv-ink-muted)" : "#fff"
    },
    secondary: {
      background: "var(--mv-bg-alt)",
      color: "var(--mv-navy-700)",
      borderColor: "var(--mv-border)"
    },
    slides: {
      background: "#f1f5f9",
      color: "var(--mv-navy-700)",
      borderColor: "#cbd5e1"
    }
  };
  const cls = {
    ...base,
    ...variants[variant],
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon) : null, children);
  if (as === "a") {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: cls,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    style: cls,
    disabled: disabled,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ExamBadge.jsx
try { (() => {
/**
 * ExamBadge — circular gradient badge marking exam (P1/P2) or
 * topic numbers (T01…). The defining MedVault accent chip.
 */
function ExamBadge({
  children,
  exam = "p1",
  size = 26,
  style = {}
}) {
  const grads = {
    p1: "var(--mv-p1-grad)",
    p2: "var(--mv-p2-grad)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--mv-radius-round)",
      background: grads[exam],
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--mv-font-sans)",
      fontSize: size <= 26 ? "0.72rem" : "0.85rem",
      fontWeight: "var(--mv-weight-extrabold)",
      flexShrink: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ExamBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ExamBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/FonteTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FonteTag — bordered source/reference chip used in intro boxes
 * to credit textbooks and slide sources.
 */
function FonteTag({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      background: "#f0f4ff",
      border: "1px solid #c5cae9",
      color: "var(--mv-indigo-600)",
      padding: "3px 10px",
      borderRadius: "var(--mv-radius-sm)",
      fontSize: "var(--mv-text-sm)",
      fontFamily: "var(--mv-font-sans)",
      fontWeight: "var(--mv-weight-semibold)",
      display: "inline-block",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FonteTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FonteTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — small rounded label. Used for exam tags (P1/P2),
 * topic counts, and artifact tags inside cards.
 */
function Pill({
  children,
  tone = "p1",
  style = {},
  ...rest
}) {
  const tones = {
    p1: {
      background: "var(--mv-p1-bg)",
      color: "var(--mv-p1-ink)"
    },
    p2: {
      background: "var(--mv-p2-bg)",
      color: "var(--mv-p2-ink)"
    },
    ok: {
      background: "var(--mv-success-bg)",
      color: "var(--mv-success-ink)"
    },
    neutral: {
      background: "#eef1f5",
      color: "var(--mv-ink-muted)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: "var(--mv-radius-pill)",
      fontSize: "var(--mv-text-sm)",
      fontFamily: "var(--mv-font-sans)",
      fontWeight: "var(--mv-weight-bold)",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/**
 * Breadcrumb — slim trail of links separated by chevrons.
 * Sits under the page header.
 */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--mv-text-sm)",
      color: "var(--mv-ink-muted)",
      fontFamily: "var(--mv-font-sans)",
      ...style
    }
  }, items.map((it, i) => {
    const label = typeof it === "string" ? it : it.label;
    const href = typeof it === "string" ? null : it.href;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, href && !last ? /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: "var(--mv-indigo-500)",
        textDecoration: "none"
      }
    }, label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--mv-ink)" : "var(--mv-ink-muted)"
      }
    }, label), !last ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        opacity: 0.5
      }
    }, "\u203A") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/**
 * Sidebar — the dark navy navigation rail. Compose with
 * Sidebar.Section and Sidebar.Link. Used on every portal view.
 */
function Sidebar({
  brand = "MedVault",
  tagline = "Segundo Cérebro · Medicina",
  logoEmoji = "🧠",
  children,
  width = "var(--mv-sidebar-width)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      background: "var(--mv-navy-900)",
      color: "var(--mv-on-dark)",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--mv-font-sans)",
      paddingBottom: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 20px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "1.1rem",
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "0.5px",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, logoEmoji, " "), brand), tagline ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.72rem",
      color: "rgba(255,255,255,0.45)",
      marginTop: 3
    }
  }, tagline) : null), children);
}
Sidebar.Section = function SidebarSection({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 6px",
      fontSize: "0.65rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px",
      color: "rgba(255,255,255,0.35)"
    }
  }, children);
};
Sidebar.Link = function SidebarLink({
  icon,
  children,
  badge,
  active = false,
  href = "#",
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 20px",
      textDecoration: "none",
      color: on ? "#fff" : "rgba(255,255,255,0.7)",
      fontSize: "0.875rem",
      borderLeft: `3px solid ${on ? "var(--mv-indigo-400)" : "transparent"}`,
      background: on ? "rgba(255,255,255,0.06)" : "transparent",
      transition: "all var(--mv-transition)"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1rem",
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "0.6rem",
      padding: "1px 6px",
      borderRadius: "10px",
      background: "var(--mv-indigo-400)",
      color: "#fff",
      fontWeight: 700
    }
  }, badge) : null);
};
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — pill-style segmented toggle used to switch P1/P2 sections.
 * Inactive pills are outlined; the active pill fills navy.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      fontFamily: "var(--mv-font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === "string" ? t : t.id;
    const label = typeof t === "string" ? t : t.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement(TabButton, {
      key: id,
      active: active,
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
function TabButton({
  active,
  children,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: "0.45rem 1.1rem",
      borderRadius: "var(--mv-radius-pill)",
      border: `1px solid ${on ? "var(--mv-navy-700)" : "var(--mv-border)"}`,
      background: on ? "var(--mv-navy-700)" : "var(--mv-surface)",
      color: on ? "#fff" : "var(--mv-ink-muted)",
      cursor: "pointer",
      fontSize: "var(--mv-text-base)",
      fontFamily: "var(--mv-font-sans)",
      transition: "background var(--mv-transition), color var(--mv-transition)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/study/Flashcard.jsx
try { (() => {
/**
 * Flashcard — a 3D flip card. Front shows the prompt, back (navy)
 * shows the answer. Controlled or uncontrolled via click.
 */
function Flashcard({
  front,
  back,
  height = 220,
  flipped: flippedProp,
  onFlip,
  frontHint = "Toque para ver a resposta",
  backHint = "Toque para voltar"
}) {
  const [internal, setInternal] = React.useState(false);
  const flipped = flippedProp !== undefined ? flippedProp : internal;
  function toggle() {
    if (onFlip) onFlip(!flipped);
    if (flippedProp === undefined) setInternal(v => !v);
  }
  const face = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: "var(--mv-radius-xl)",
    border: "1px solid var(--mv-border)",
    boxShadow: "var(--mv-shadow)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    textAlign: "center",
    fontSize: "var(--mv-text-md)",
    lineHeight: 1.6,
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      perspective: 1000,
      height,
      cursor: "pointer",
      fontFamily: "var(--mv-font-sans)"
    },
    onClick: toggle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
      transform: flipped ? "rotateY(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      background: "var(--mv-surface)",
      color: "var(--mv-ink)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", null, front), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "0.6rem",
      fontSize: "0.72rem",
      opacity: 0.5,
      color: "var(--mv-ink-muted)"
    }
  }, frontHint)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...face,
      background: "var(--mv-navy-700)",
      color: "#fff",
      transform: "rotateY(180deg)"
    }
  }, /*#__PURE__*/React.createElement("div", null, back), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "0.6rem",
      fontSize: "0.72rem",
      color: "rgba(255,255,255,0.7)"
    }
  }, backHint))));
}
Object.assign(__ds_scope, { Flashcard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/study/Flashcard.jsx", error: String((e && e.message) || e) }); }

// components/study/OptionButton.jsx
try { (() => {
/**
 * OptionButton — a quiz answer choice with a letter chip.
 * State: idle → answered. When answered, pass status
 * ("correct" | "wrong" | "dimmed") to color it.
 */
function OptionButton({
  letter = "A",
  children,
  status = "idle",
  answered = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const palettes = {
    idle: {
      border: "var(--mv-border)",
      bg: "var(--mv-bg-alt)",
      chipBg: "var(--mv-border)",
      chipColor: "var(--mv-ink-muted)"
    },
    correct: {
      border: "var(--mv-success)",
      bg: "var(--mv-success-bg)",
      chipBg: "var(--mv-success)",
      chipColor: "#fff"
    },
    wrong: {
      border: "var(--mv-danger)",
      bg: "var(--mv-danger-bg)",
      chipBg: "var(--mv-danger)",
      chipColor: "#fff"
    },
    dimmed: {
      border: "var(--mv-border)",
      bg: "var(--mv-bg-alt)",
      chipBg: "var(--mv-border)",
      chipColor: "var(--mv-ink-muted)"
    }
  };
  const hovering = !answered && hover;
  const p = palettes[answered ? status : "idle"];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: answered,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      padding: "0.85rem 1.1rem",
      borderRadius: "var(--mv-radius-lg)",
      border: `2px solid ${hovering ? "var(--mv-indigo-400)" : p.border}`,
      background: hovering ? "#e8f0fd" : p.bg,
      cursor: answered ? "default" : "pointer",
      textAlign: "left",
      fontSize: "var(--mv-text-md)",
      fontFamily: "var(--mv-font-sans)",
      lineHeight: 1.5,
      color: "var(--mv-ink)",
      opacity: answered && status === "dimmed" ? 0.45 : 1,
      width: "100%",
      transition: "border-color var(--mv-transition-fast), background var(--mv-transition-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      borderRadius: "var(--mv-radius-round)",
      background: p.chipBg,
      color: p.chipColor,
      fontSize: "0.75rem",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "0.05rem"
    }
  }, letter), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { OptionButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/study/OptionButton.jsx", error: String((e && e.message) || e) }); }

// components/study/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — thin navy fill bar with an optional caption.
 * Used at the top of quizzes and flashcard decks.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mv-font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--mv-border)",
      borderRadius: 4,
      overflow: "hidden",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: "var(--mv-navy-700)",
      borderRadius: 4,
      transition: "width 0.3s ease"
    }
  })), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-sm)",
      color: "var(--mv-ink-muted)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/study/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// redesign/OptionDashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  function Stat({
    icon,
    value,
    label,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 16,
        padding: "18px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: MUTE
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: 0.2
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 30,
        fontWeight: 800,
        color: INK,
        letterSpacing: -0.5
      }
    }, value), sub ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: MUTE,
        fontWeight: 600
      }
    }, sub) : null));
  }
  function Rail() {
    const items = [{
      icon: "home",
      label: "Início",
      active: true
    }, {
      icon: "grid",
      label: "Disciplinas"
    }, {
      icon: "target",
      label: "Quiz"
    }, {
      icon: "stack",
      label: "Flashcards"
    }, {
      icon: "calendar",
      label: "Agenda"
    }, {
      icon: "trending",
      label: "Progresso"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 230,
        background: "#fff",
        borderRight: `1px solid ${LINE}`,
        padding: "26px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 8px 22px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 10,
        background: NAVY,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 15
      }
    }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        color: INK,
        fontSize: 15.5,
        letterSpacing: -0.2
      }
    }, "MedVault"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: MUTE,
        fontWeight: 600
      }
    }, "Segundo C\xE9rebro"))), items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 12px",
        borderRadius: 11,
        color: it.active ? INK : MUTE,
        background: it.active ? BG : "transparent",
        fontWeight: it.active ? 700 : 600,
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 18,
      color: it.active ? NAVY : MUTE
    }), it.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        background: BG,
        borderRadius: 14,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: INK
      }
    }, "Revis\xE3o de v\xE9spera"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: MUTE,
        marginTop: 4,
        lineHeight: 1.45
      }
    }, "3 temas marcados para revisar hoje.")));
  }
  function DisciplineCard({
    d
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 116
      }
    }, /*#__PURE__*/React.createElement("image-slot", _extends({
      id: d.slot
    }, d.src ? {
      src: d.src
    } : {}, {
      shape: "rect",
      style: {
        width: "100%",
        height: "100%"
      },
      placeholder: `Imagem · ${d.hint}`
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 12,
        left: 12,
        background: "rgba(255,255,255,.92)",
        backdropFilter: "blur(4px)",
        borderRadius: 8,
        padding: "3px 9px",
        fontSize: 11,
        fontWeight: 700,
        color: INK
      }
    }, d.prova, " \xB7 ", d.dias, "d")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 18px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: d.accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        color: INK,
        fontSize: 15.5,
        letterSpacing: -0.2
      }
    }, d.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: MUTE,
        marginTop: 7,
        lineHeight: 1.5,
        minHeight: 38
      }
    }, d.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11.5,
        color: MUTE,
        fontWeight: 600,
        margin: "14px 0 6px"
      }
    }, /*#__PURE__*/React.createElement("span", null, d.feitos, "/", d.temas, " temas"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: INK
      }
    }, d.progress, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: LINE,
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${d.progress}%`,
        background: d.accent,
        borderRadius: 4
      }
    }))));
  }
  function OptionDashboard() {
    const D = window.MV_RD.disciplines;
    const farm = D[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        minHeight: 1320,
        background: BG,
        fontFamily: "'Manrope', system-ui, sans-serif",
        color: INK
      }
    }, /*#__PURE__*/React.createElement(Rail, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "26px 34px 40px",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: MUTE,
        fontWeight: 600
      }
    }, "Segunda, 9 de junho"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        letterSpacing: -0.6,
        marginTop: 2
      }
    }, "Bom dia, ", window.MV_RD.student, " \uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 11,
        padding: "9px 13px",
        color: MUTE,
        fontSize: 13,
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }), " Buscar tema\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 11,
        background: "#fff",
        border: `1px solid ${LINE}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: MUTE
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 11,
        background: NAVY,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700
      }
    }, "S"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 320px",
        background: NAVY,
        color: "#fff",
        borderRadius: 18,
        padding: 24,
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        opacity: 0.7,
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 16,
      color: "#fff"
    }), " Pr\xF3xima prova"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        marginTop: 14,
        opacity: 0.85
      }
    }, "P1 \u2014 4 disciplinas"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 52,
        fontWeight: 800,
        letterSpacing: -2
      }
    }, "5"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        opacity: 0.8
      }
    }, "dias restantes")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginTop: 18,
        background: "#fff",
        color: NAVY,
        borderRadius: 11,
        padding: "11px 16px",
        fontWeight: 700,
        fontSize: 13.5
      }
    }, "Montar revis\xE3o ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 17,
      color: NAVY
    }))), /*#__PURE__*/React.createElement(Stat, {
      icon: "flame",
      value: "12",
      sub: "dias",
      label: "SEQU\xCANCIA"
    }), /*#__PURE__*/React.createElement(Stat, {
      icon: "target",
      value: "48%",
      label: "DOMINADO (P1)"
    }), /*#__PURE__*/React.createElement(Stat, {
      icon: "stack",
      value: "23",
      sub: "cartas",
      label: "REVISAR HOJE"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderLeft: `4px solid ${farm.accent}`,
        borderRadius: 16,
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: 18,
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: farm.accent
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 20,
      color: farm.accent
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: MUTE,
        fontWeight: 700,
        letterSpacing: 0.3
      }
    }, "CONTINUE DE ONDE PAROU"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        marginTop: 3
      }
    }, "Farmacologia \xB7 T06 \u2014 AINEs")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: MUTE,
        fontWeight: 600
      }
    }, "parou em 60%"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        background: NAVY,
        color: "#fff",
        borderRadius: 11,
        padding: "11px 16px",
        fontWeight: 700,
        fontSize: 13.5
      }
    }, "Retomar ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: -0.3
      }
    }, "Suas disciplinas"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: MUTE,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, "Ver todas ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, D.map(d => /*#__PURE__*/React.createElement(DisciplineCard, {
      key: d.id,
      d: d
    })))));
  }
  window.OptionDashboard = OptionDashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/OptionDashboard.jsx", error: String((e && e.message) || e) }); }

// redesign/OptionEditorial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  function Row({
    d,
    i
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "70px 168px 1fr 130px",
        alignItems: "center",
        gap: 28,
        padding: "26px 0",
        borderTop: `1px solid ${LINE}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: SERIF,
        fontSize: 30,
        fontWeight: 400,
        color: FAINT,
        fontVariantNumeric: "tabular-nums"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("image-slot", _extends({
      id: d.slot + "-ed"
    }, d.src ? {
      src: d.src
    } : {}, {
      shape: "rounded",
      radius: "12",
      style: {
        width: 168,
        height: 104
      },
      placeholder: d.hint
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 4,
        background: d.accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.4,
        color: MUTE,
        textTransform: "uppercase"
      }
    }, d.prova, " \xB7 ", d.temas, " temas")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: SERIF,
        fontSize: 27,
        fontWeight: 500,
        color: INK,
        letterSpacing: -0.4,
        marginTop: 7,
        lineHeight: 1.05
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: MUTE,
        marginTop: 6,
        lineHeight: 1.5,
        maxWidth: 440
      }
    }, d.desc)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: SERIF,
        fontSize: 30,
        fontWeight: 500,
        color: INK
      }
    }, d.progress, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: FAINT
      }
    }, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: MUTE,
        fontWeight: 600,
        marginTop: 2
      }
    }, "dominado"), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: LINE,
        borderRadius: 2,
        marginTop: 10,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${d.progress}%`,
        background: d.accent
      }
    }))));
  }
  function OptionEditorial() {
    const D = window.MV_RD.disciplines;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fdfdfc",
        fontFamily: SANS,
        color: INK,
        minHeight: 1320,
        padding: "0 64px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px 0 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: SERIF,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: -0.3
      }
    }, "MedVault")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 30,
        fontSize: 13.5,
        color: MUTE,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: INK
      }
    }, "Disciplinas"), /*#__PURE__*/React.createElement("span", null, "Ferramentas"), /*#__PURE__*/React.createElement("span", null, "Agenda"), /*#__PURE__*/React.createElement("span", null, "Progresso")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        color: MUTE
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18,
      color: MUTE
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 17,
        background: "#16203a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 13,
        fontFamily: SANS
      }
    }, "S"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "76px 0 60px",
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 2.6,
        color: MUTE,
        textTransform: "uppercase"
      }
    }, "Segundo C\xE9rebro \xB7 Medicina"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: SERIF,
        fontSize: 62,
        fontWeight: 400,
        lineHeight: 1.04,
        letterSpacing: -1.6,
        marginTop: 22
      }
    }, "Tudo o que voc\xEA precisa", /*#__PURE__*/React.createElement("br", null), "para a ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontStyle: "italic"
      }
    }, "P1"), ", em um s\xF3 lugar."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        marginTop: 30,
        fontSize: 14.5,
        color: MUTE
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontWeight: 600,
        color: INK
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 17,
      color: INK
    }), " P1 em 5 dias"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 2,
        background: FAINT
      }
    }), /*#__PURE__*/React.createElement("span", null, "5 disciplinas"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 2,
        background: FAINT
      }
    }), /*#__PURE__*/React.createElement("span", null, "77 temas"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 2,
        background: FAINT
      }
    }), /*#__PURE__*/React.createElement("span", null, "48% dominado"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: SERIF,
        fontSize: 20,
        fontStyle: "italic",
        color: INK
      }
    }, "Disciplinas"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1.4,
        color: MUTE,
        textTransform: "uppercase"
      }
    }, "Por prova \xB7 2025.1")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: `1px solid ${LINE}`
      }
    }, D.map((d, i) => /*#__PURE__*/React.createElement(Row, {
      key: d.id,
      d: d,
      i: i
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "44px 0 60px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontFamily: SANS,
        fontSize: 13.5,
        fontWeight: 700,
        color: INK,
        border: `1px solid ${LINE}`,
        borderRadius: 999,
        padding: "13px 26px"
      }
    }, "Abrir ferramentas de estudo ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 16,
      color: INK
    }))));
  }
  window.OptionEditorial = OptionEditorial;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/OptionEditorial.jsx", error: String((e && e.message) || e) }); }

// redesign/OptionFeed.jsx
try { (() => {
// Model D — "Mural do Grupo": a collaborative study-group feed. Shows what
// was just added, who shared it, pinned destaques, discipline filters and the
// véspera reminder. Warm but clean.
(function () {
  const Icon = window.Icon;
  const INK = "#1b2336",
    MUTE = "#6b7280",
    FAINT = "#aeb2bd",
    LINE = "#ecedf1",
    BG = "#f6f7f9",
    NAVY = "#13203a";
  const disc = id => window.MV_RD.disciplines.find(x => x.id === id);
  const at = id => window.MV_RD.artifactTypes.find(x => x.id === id);
  const member = name => window.MV_RD.members.find(m => m.name === name) || {
    initials: name[0],
    color: NAVY
  };
  function FeedItem({
    f
  }) {
    const d = disc(f.disc),
      a = at(f.art),
      mem = member(f.who);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 13,
        padding: "16px 0",
        borderTop: `1px solid ${LINE}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 19,
        background: mem.color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 14,
        flexShrink: 0
      }
    }, mem.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: MUTE
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: INK,
        fontWeight: 800
      }
    }, f.who), " adicionou ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: a.color,
        fontWeight: 800
      }
    }, a.label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: FAINT
      }
    }, " \xB7 ", f.when)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 13,
        padding: "12px 14px",
        marginTop: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        background: a.color + "15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 18,
      color: a.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 800,
        letterSpacing: -0.2
      }
    }, f.tema), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11.5,
        fontWeight: 700,
        color: d.accent,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: d.accent
      }
    }), " ", d.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12.5,
        fontWeight: 800,
        color: NAVY,
        border: `1px solid ${LINE}`,
        borderRadius: 9,
        padding: "8px 12px"
      }
    }, "Abrir ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 14,
      color: NAVY
    })))));
  }
  function SideCard({
    title,
    children,
    action
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 16,
        padding: 18,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 800,
        letterSpacing: -0.2
      }
    }, title), action ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: MUTE
      }
    }, action) : null), children);
  }
  function OptionFeed() {
    const RD = window.MV_RD;
    const days = [...new Set(RD.feed.map(f => f.day))];
    const pinned = [{
      art: "vespera",
      tema: "Resumão P1 — Farmacologia",
      disc: "farm"
    }, {
      art: "mapa",
      tema: "Mapa: Anti-hipertensivos",
      disc: "farm"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: BG,
        fontFamily: "'Manrope', system-ui, sans-serif",
        color: INK,
        minHeight: 1180,
        padding: "26px 36px 40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: NAVY,
        color: "#fff",
        borderRadius: 20,
        padding: "26px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: 1.6,
        textTransform: "uppercase",
        opacity: 0.6
      }
    }, "Grupo de Estudos \xB7 UNINTER"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 800,
        letterSpacing: -0.6,
        marginTop: 6
      }
    }, "Mural do Grupo"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginTop: 14,
        fontSize: 13.5,
        opacity: 0.9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 16,
      color: "#fff"
    }), " P1 em 5 dias"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: 2,
        background: "rgba(255,255,255,.4)"
      }
    }), /*#__PURE__*/React.createElement("span", null, "77 materiais"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 8
      }
    }, RD.members.map((mem, i) => /*#__PURE__*/React.createElement("div", {
      key: mem.name,
      style: {
        width: 36,
        height: 36,
        borderRadius: 18,
        background: mem.color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 13,
        border: "2px solid #13203a",
        marginLeft: i ? -10 : 0
      }
    }, mem.initials))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        opacity: 0.7,
        fontWeight: 600
      }
    }, "23 membros ativos"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 24,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: -0.3
      }
    }, "Atividade recente"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        fontWeight: 800,
        color: "#fff",
        background: NAVY,
        borderRadius: 10,
        padding: "9px 14px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 15,
      color: "#fff"
    }), " Adicionar material")), days.map(day => /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: FAINT,
        marginBottom: 2
      }
    }, day), RD.feed.filter(f => f.day === day).map((f, i) => /*#__PURE__*/React.createElement(FeedItem, {
      key: i,
      f: f
    }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SideCard, {
      title: "Destaques fixados",
      action: "\uD83D\uDCCC"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, pinned.map((p, i) => {
      const a = at(p.art),
        d = disc(p.disc);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 11
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 34,
          height: 34,
          borderRadius: 9,
          background: a.color + "15",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: a.icon,
        size: 16,
        color: a.color
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 800,
          lineHeight: 1.25
        }
      }, p.tema), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: MUTE,
          fontWeight: 600
        }
      }, d.name)));
    }))), /*#__PURE__*/React.createElement(SideCard, {
      title: "Disciplinas"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, RD.disciplines.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 6px",
        borderRadius: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 5,
        background: d.accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        flex: 1
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: FAINT
      }
    }, d.temas))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderLeft: "4px solid #c62828",
        borderRadius: 16,
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 17,
      color: "#c62828"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 800
      }
    }, "Revis\xE3o de v\xE9spera")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: MUTE,
        marginTop: 7,
        lineHeight: 1.5
      }
    }, "3 materiais de v\xE9spera prontos para a P1. Revise antes do dia.")))));
  }
  window.OptionFeed = OptionFeed;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/OptionFeed.jsx", error: String((e && e.message) || e) }); }

// redesign/OptionLibrary.jsx
try { (() => {
// Model C — "Central de Materiais": a search-first library to find and open
// any resumo/artefato fast. Disciplina + tipo filters, recent strip, grid of
// material cards showing which artifacts each tema has.
(function () {
  const Icon = window.Icon;
  const INK = "#1b2336",
    MUTE = "#6b7280",
    FAINT = "#aeb2bd",
    LINE = "#ecedf1",
    BG = "#f6f7f9",
    NAVY = "#13203a";
  const D = () => window.MV_RD.disciplines;
  const disc = id => D().find(x => x.id === id);
  const AT = () => window.MV_RD.artifactTypes;
  const at = id => AT().find(x => x.id === id);
  function Chip({
    children,
    active,
    dot
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        fontWeight: 700,
        padding: "8px 14px",
        borderRadius: 999,
        whiteSpace: "nowrap",
        color: active ? "#fff" : INK,
        background: active ? NAVY : "#fff",
        border: `1px solid ${active ? NAVY : LINE}`
      }
    }, dot ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 4,
        background: dot
      }
    }) : null, children);
  }
  function ArtBadge({
    id,
    on
  }) {
    const a = at(id);
    return /*#__PURE__*/React.createElement("span", {
      title: a.label,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        width: 30,
        height: 30,
        borderRadius: 9,
        background: on ? a.color + "15" : "#f3f4f6",
        color: on ? a.color : "#c8ccd4",
        border: `1px solid ${on ? a.color + "30" : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 15,
      color: on ? a.color : "#c8ccd4"
    }));
  }
  function MaterialCard({
    m
  }) {
    const d = disc(m.disc);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 16,
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 0.3,
        color: d.accent
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 4,
        background: d.accent
      }
    }), " ", d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: FAINT,
        fontWeight: 600
      }
    }, m.when)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: FAINT
      }
    }, m.tema), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        letterSpacing: -0.3,
        marginTop: 2
      }
    }, m.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, AT().map(a => /*#__PURE__*/React.createElement(ArtBadge, {
      key: a.id,
      id: a.id,
      on: m.arts.includes(a.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: `1px solid ${LINE}`,
        paddingTop: 12,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: MUTE,
        fontWeight: 600
      }
    }, m.files, " arquivos \xB7 ", m.arts.length, " tipos"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        fontWeight: 800,
        color: NAVY
      }
    }, "Abrir ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15,
      color: NAVY
    }))));
  }
  function OptionLibrary() {
    const M = window.MV_RD.materials;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: BG,
        fontFamily: "'Manrope', system-ui, sans-serif",
        color: INK,
        minHeight: 1180
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderBottom: `1px solid ${LINE}`,
        padding: "18px 36px",
        display: "flex",
        alignItems: "center",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 9,
        background: NAVY,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: 14
      }
    }, "M"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: -0.3
      }
    }, "MedVault")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: BG,
        border: `1px solid ${LINE}`,
        borderRadius: 12,
        padding: "12px 16px",
        color: MUTE,
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }), " Buscar tema, resumo, f\xE1rmaco, sinal cl\xEDnico\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, window.MV_RD.members.slice(0, 4).map((mem, i) => /*#__PURE__*/React.createElement("div", {
      key: mem.name,
      style: {
        width: 32,
        height: 32,
        borderRadius: 16,
        background: mem.color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 12.5,
        border: "2px solid #fff",
        marginLeft: i ? -9 : 0
      }
    }, mem.initials)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: MUTE,
        fontWeight: 700,
        marginLeft: 8
      }
    }, "+19")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        background: NAVY,
        color: "#fff",
        borderRadius: 11,
        padding: "11px 16px",
        fontWeight: 700,
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 16,
      color: "#fff"
    }), " Adicionar")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "26px 36px 40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: -0.5
      }
    }, "Central de Materiais"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: MUTE,
        marginTop: 4
      }
    }, "Tudo do grupo de estudos, organizado por disciplina e tema."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 22,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      active: true
    }, "Todas"), D().map(d => /*#__PURE__*/React.createElement(Chip, {
      key: d.id,
      dot: d.accent
    }, d.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 1,
        color: FAINT,
        textTransform: "uppercase",
        marginRight: 4
      }
    }, "Tipo"), AT().map(a => /*#__PURE__*/React.createElement("span", {
      key: a.id,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12.5,
        fontWeight: 700,
        padding: "7px 12px",
        borderRadius: 999,
        background: "#fff",
        border: `1px solid ${LINE}`,
        color: INK
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 14,
      color: a.color
    }), " ", a.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        margin: "30px 0 14px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800
      }
    }, "Materiais ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: FAINT
      }
    }, "\xB7 ", M.length, " temas")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: MUTE,
        fontWeight: 600
      }
    }, "Mais recentes")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, M.map(m => /*#__PURE__*/React.createElement(MaterialCard, {
      key: m.disc + m.tema,
      m: m
    })))));
  }
  window.OptionLibrary = OptionLibrary;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/OptionLibrary.jsx", error: String((e && e.message) || e) }); }

// redesign/OrgSchemes.jsx
try { (() => {
// Organization schemes — three ways to structure a discipline's material.
// Small, side-by-side mockups so the user can react. Manrope, minimal.
(function () {
  const Icon = window.Icon;
  const INK = "#16203a";
  const MUTE = "#7b8090";
  const FAINT = "#aeb2bd";
  const LINE = "#ebecf0";
  const ACC = "#0f3460";
  function Frame({
    tag,
    title,
    when,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        fontFamily: "'Manrope', system-ui, sans-serif",
        color: INK,
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 22px 16px",
        borderBottom: `1px solid ${LINE}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: 1.4,
        color: ACC,
        textTransform: "uppercase"
      }
    }, tag), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: -0.3,
        marginTop: 5
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: MUTE,
        marginTop: 5,
        lineHeight: 1.5
      }
    }, when)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 22px 22px",
        flex: 1
      }
    }, children));
  }
  const ArtChips = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["Resumo", "Cards", "Quiz"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: MUTE,
      background: "#f4f5f7",
      borderRadius: 6,
      padding: "3px 7px"
    }
  }, t)));
  function StatusDot({
    c
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 5,
        border: `2px solid ${c}`,
        background: c === "#cfd3db" ? "transparent" : c,
        flexShrink: 0
      }
    });
  }

  // 1 — Por Prova → Tema
  function OrgByProva() {
    const temas = [["T06", "AINEs", "#1f8a4c"], ["T12", "Opioides", "#1f8a4c"], ["T02", "Farmacocinética", "#e2a200"], ["T13", "Antidepressivos", "#cfd3db"], ["T14", "Anestésicos Locais", "#cfd3db"]];
    return /*#__PURE__*/React.createElement(Frame, {
      tag: "Esquema 1",
      title: "Por Prova \u2192 Tema",
      when: "O atual, refinado. Foco no calend\xE1rio de provas. Bom quando o que importa \xE9 o que cai na P1/P2."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "#fff",
        background: ACC,
        borderRadius: 999,
        padding: "6px 14px"
      }
    }, "P1 \xB7 16"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: MUTE,
        background: "#f4f5f7",
        borderRadius: 999,
        padding: "6px 14px"
      }
    }, "P2 \xB7 12")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, temas.map(([n, t, c], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderTop: i ? `1px solid ${LINE}` : "none"
      }
    }, /*#__PURE__*/React.createElement(StatusDot, {
      c: c
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: FAINT,
        width: 28,
        fontVariantNumeric: "tabular-nums"
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        flex: 1
      }
    }, t), /*#__PURE__*/React.createElement(ArtChips, null)))));
  }

  // 2 — Por Sistema / Aparelho
  function OrgBySystem() {
    const groups = [["Cardiovascular", ["IECA & ARA-II", "Beta-bloqueadores", "Diuréticos"]], ["Sistema Nervoso", ["Opioides", "Antidepressivos", "Anticonvulsivantes"]], ["Dor & Inflamação", ["AINEs", "Anestésicos Locais"]]];
    return /*#__PURE__*/React.createElement(Frame, {
      tag: "Esquema 2",
      title: "Por Sistema / Aparelho",
      when: "Cruza P1 e P2 e agrupa por sistema cl\xEDnico. Bom para racioc\xEDnio cl\xEDnico integrado e revis\xE3o por \xF3rg\xE3o."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, groups.map(([g, items]) => /*#__PURE__*/React.createElement("div", {
      key: g
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 0.8,
        textTransform: "uppercase",
        color: ACC
      }
    }, g), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: LINE
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: FAINT,
        fontWeight: 700
      }
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 7
      }
    }, items.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontSize: 12,
        fontWeight: 700,
        border: `1px solid ${LINE}`,
        borderRadius: 9,
        padding: "7px 11px"
      }
    }, t)))))));
  }

  // 3 — Por Status (revisão espaçada)
  function OrgByStatus() {
    const cols = [["A estudar", "#cfd3db", ["Antidepressivos", "Anest. Locais", "Anest. Gerais"]], ["Revisar", "#e2a200", ["Farmacocinética", "Transportadores"]], ["Dominado", "#1f8a4c", ["AINEs", "Opioides"]]];
    return /*#__PURE__*/React.createElement(Frame, {
      tag: "Esquema 3",
      title: "Por Status \xB7 Revis\xE3o espa\xE7ada",
      when: "Estilo kanban guiado pela mem\xF3ria. Bom para estudo ativo: move o tema conforme voc\xEA domina."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10
      }
    }, cols.map(([title, c, items]) => /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        background: "#f7f8f9",
        borderRadius: 12,
        padding: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(StatusDot, {
      c: c
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: FAINT,
        fontWeight: 700,
        marginLeft: "auto"
      }
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, items.map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: "#fff",
        border: `1px solid ${LINE}`,
        borderRadius: 9,
        padding: "9px 10px",
        fontSize: 11.5,
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, t)))))));
  }
  Object.assign(window, {
    OrgByProva,
    OrgBySystem,
    OrgByStatus
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/OrgSchemes.jsx", error: String((e && e.message) || e) }); }

// redesign/app/AddModal.jsx
try { (() => {
// ============================================================
// MedVault — Modal "Adicionar material"
// Fluxo: escolher disciplina (ou nova) → tipo (inclui "Outros") →
// abrir o Google Drive compartilhado do grupo para subir o arquivo.
// ============================================================
(function () {
  const {
    THEME,
    Icon
  } = window;
  const T = THEME;
  function Field({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: 0.4,
        color: T.mute,
        textTransform: "uppercase",
        marginBottom: 9
      }
    }, label), children);
  }
  function Choice({
    active,
    dot,
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13.5,
        fontWeight: 700,
        padding: "9px 14px",
        borderRadius: 12,
        cursor: "pointer",
        fontFamily: T.font,
        color: active ? T.accentInk : T.ink,
        background: active ? T.accentBg : T.surface,
        border: `1.5px solid ${active ? T.accent : T.line}`
      }
    }, dot ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 5,
        border: `2px solid ${dot}`,
        background: active ? dot : "transparent"
      }
    }) : null, children);
  }
  function AddModal({
    open,
    onClose,
    presetDisc
  }) {
    const [disc, setDisc] = React.useState(presetDisc || "farm");
    const [creatingDisc, setCreatingDisc] = React.useState(false);
    const [newDisc, setNewDisc] = React.useState("");
    const [type, setType] = React.useState("resumo");
    const [title, setTitle] = React.useState("");
    const [files, setFiles] = React.useState([]);
    const fileRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        setDisc(presetDisc || "farm");
        setCreatingDisc(false);
        setNewDisc("");
        setType("resumo");
        setTitle("");
        setFiles([]);
      }
    }, [open, presetDisc]);
    if (!open) return null;
    const types = [...window.MV.artifactTypes, {
      id: "outros",
      single: "Outros",
      icon: "folder",
      line: T.mute
    }];
    function goDrive() {
      window.open(window.MV.driveUrl, "_blank", "noopener");
      onClose();
    }
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(40,42,54,.34)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: 560,
        maxWidth: "100%",
        maxHeight: "90vh",
        overflow: "auto",
        background: T.surface,
        borderRadius: 22,
        border: `1px solid ${T.line}`,
        boxShadow: "0 24px 60px rgba(40,42,54,.22)",
        padding: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 14,
        border: `1.6px solid ${T.accent}`,
        background: T.accentBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: T.accentInk,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "logo",
      size: 30,
      color: T.accentInk,
      stroke: 1.4
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.serif,
        fontSize: 24,
        fontWeight: 500,
        color: T.ink,
        letterSpacing: -0.4
      }
    }, "Adicionar material"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: T.mute,
        marginTop: 4
      }
    }, "Contribua com o reposit\xF3rio do grupo \uD83D\uDC9B"))), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: T.hoverBg,
        border: "none",
        borderRadius: 10,
        width: 36,
        height: 36,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close",
      size: 18,
      color: T.mute
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "Disciplina"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, window.MV.disciplines.map(d => /*#__PURE__*/React.createElement(Choice, {
      key: d.id,
      active: !creatingDisc && disc === d.id,
      dot: d.line,
      onClick: () => {
        setCreatingDisc(false);
        setDisc(d.id);
      }
    }, d.name)), /*#__PURE__*/React.createElement(Choice, {
      active: creatingDisc,
      onClick: () => setCreatingDisc(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15,
      color: creatingDisc ? T.accentInk : T.ink
    }), " Nova disciplina")), creatingDisc ? /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: newDisc,
      onChange: e => setNewDisc(e.target.value),
      placeholder: "Nome da nova disciplina\u2026",
      style: {
        marginTop: 10,
        width: "100%",
        boxSizing: "border-box",
        padding: "11px 14px",
        borderRadius: 12,
        border: `1.5px solid ${T.line}`,
        fontSize: 14,
        fontFamily: T.font,
        color: T.ink,
        background: T.surface,
        outline: "none"
      }
    }) : null), /*#__PURE__*/React.createElement(Field, {
      label: "Tipo de artefato"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, types.map(tp => /*#__PURE__*/React.createElement(Choice, {
      key: tp.id,
      active: type === tp.id,
      onClick: () => setType(tp.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: tp.icon,
      size: 15,
      color: tp.line || T.mute
    }), " ", tp.single)))), /*#__PURE__*/React.createElement(Field, {
      label: "T\xEDtulo / tema (opcional)"
    }, /*#__PURE__*/React.createElement("input", {
      value: title,
      onChange: e => setTitle(e.target.value),
      placeholder: "Ex.: AINEs \u2014 resumo completo",
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "11px 14px",
        borderRadius: 12,
        border: `1.5px solid ${T.line}`,
        fontSize: 14,
        fontFamily: T.font,
        color: T.ink,
        background: T.surface,
        outline: "none"
      }
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Arquivo"
    }, /*#__PURE__*/React.createElement("input", {
      ref: fileRef,
      type: "file",
      multiple: true,
      style: {
        display: "none"
      },
      onChange: e => setFiles(Array.from(e.target.files || []))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => fileRef.current && fileRef.current.click(),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13.5,
        fontWeight: 700,
        padding: "10px 16px",
        borderRadius: 12,
        cursor: "pointer",
        fontFamily: T.font,
        color: T.accentInk,
        background: T.accentBg,
        border: `1.5px dashed ${T.accent}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder",
      size: 16,
      color: T.accentInk
    }), " Escolher arquivo\u2026"), files.length > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: T.ink
      }
    }, files.map(f => f.name).join(", ")) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: T.faint,
        fontWeight: 600
      }
    }, "Nenhum arquivo selecionado"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        background: T.fieldBg,
        border: `1px solid ${T.lineSoft}`,
        borderRadius: 14,
        padding: "13px 15px",
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder",
      size: 20,
      color: "#6f9b56"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: T.mute,
        lineHeight: 1.5
      }
    }, "Os arquivos ficam no ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: T.ink
      }
    }, "Google Drive compartilhado"), " do grupo. Selecione disciplina e tipo e suba seu material l\xE1 \u2014 todos ter\xE3o acesso.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 12,
        padding: "12px 18px",
        fontWeight: 700,
        fontSize: 13.5,
        color: T.ink,
        cursor: "pointer",
        fontFamily: T.font
      }
    }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
      onClick: goDrive,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: T.btnBg,
        border: "none",
        borderRadius: 12,
        padding: "12px 20px",
        fontWeight: 700,
        fontSize: 13.5,
        color: "#fff",
        cursor: "pointer",
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "external",
      size: 16,
      color: "#fff"
    }), " ", files.length > 0 ? "Enviar ao Drive do grupo" : "Abrir Drive do grupo"))));
  }
  window.MVAddModal = AddModal;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/AddModal.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageAgenda.jsx
try { (() => {
// ============================================================
// MedVault — Página: Agenda (editável por qualquer membro)
// Add / editar / remover, persistido localmente (protótipo).
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    PageHead,
    useAgenda
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  const disc = id => window.MV.disciplines.find(x => x.id === id) || {
    id: "geral",
    line: T.accent,
    tint: T.accentBg,
    name: "Geral",
    ink: T.accentInk
  };
  const fmtLong = d => {
    const [y, m, day] = d.split("-");
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    return {
      day,
      mon: meses[+m - 1]
    };
  };
  const WD = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const ds2 = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const navBtn = {
    width: 34,
    height: 34,
    borderRadius: 9,
    border: `1.5px solid ${T.line}`,
    background: T.surface,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const navGhost = {
    padding: "0 13px",
    height: 34,
    borderRadius: 9,
    border: `1.5px solid ${T.line}`,
    background: T.surface,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 12.5,
    color: T.mute,
    fontFamily: T.font
  };
  function MonthCalendar({
    items,
    selected,
    onSelect
  }) {
    const todayStr = ds2(new Date());
    const base = selected || items[0] && items[0].date || todayStr;
    const [cur, setCur] = React.useState(() => {
      const [y, m] = base.split("-").map(Number);
      return {
        y,
        m: m - 1
      };
    });
    const byDate = {};
    items.forEach(it => {
      (byDate[it.date] = byDate[it.date] || []).push(it);
    });
    const startDow = new Date(cur.y, cur.m, 1).getDay();
    const dim = new Date(cur.y, cur.m + 1, 0).getDate();
    const rows = Math.ceil((startDow + dim) / 7);
    const start = new Date(cur.y, cur.m, 1 - startDow);
    const cells = [];
    for (let i = 0; i < rows * 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      cells.push(d);
    }
    const move = delta => setCur(c => {
      const d = new Date(c.y, c.m + delta, 1);
      return {
        y: d.getFullYear(),
        m: d.getMonth()
      };
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 18,
        padding: "18px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.serif,
        fontSize: 22,
        fontWeight: 600,
        color: T.ink,
        letterSpacing: -0.3,
        whiteSpace: "nowrap"
      }
    }, MES[cur.m], " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: T.mute,
        fontWeight: 500
      }
    }, cur.y)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        const d = new Date();
        setCur({
          y: d.getFullYear(),
          m: d.getMonth()
        });
      },
      style: navGhost
    }, "Hoje"), /*#__PURE__*/React.createElement("button", {
      onClick: () => move(-1),
      style: navBtn,
      "aria-label": "M\xEAs anterior"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronLeft",
      size: 18,
      color: T.mute
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => move(1),
      style: navBtn,
      "aria-label": "Pr\xF3ximo m\xEAs"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 18,
      color: T.mute
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 6
      }
    }, WD.map(w => /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: T.faint,
        textTransform: "uppercase",
        paddingBottom: 4
      }
    }, w)), cells.map((d, i) => {
      const str = ds2(d);
      const inMonth = d.getMonth() === cur.m;
      const evs = byDate[str] || [];
      const isToday = str === todayStr;
      const isSel = str === selected;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => onSelect(str),
        style: {
          position: "relative",
          aspectRatio: "1 / 1",
          borderRadius: 11,
          cursor: "pointer",
          fontFamily: T.font,
          border: isSel ? `1.5px solid ${T.accentInk}` : isToday ? `1.5px solid ${T.accentBorder}` : "1.5px solid transparent",
          background: isSel ? T.accentBg : evs.length ? T.fieldBg : "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          opacity: inMonth ? 1 : 0.32,
          transition: "background .12s ease"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13.5,
          fontWeight: isToday || isSel ? 800 : 600,
          color: isSel ? T.accentInk : T.ink
        }
      }, d.getDate()), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          gap: 3,
          height: 6,
          alignItems: "center"
        }
      }, evs.slice(0, 3).map((e, j) => /*#__PURE__*/React.createElement("span", {
        key: j,
        style: {
          width: 6,
          height: 6,
          borderRadius: 3,
          background: disc(e.disc).line
        }
      })), evs.length > 3 ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 9,
          fontWeight: 800,
          color: T.mute
        }
      }, "+", evs.length - 3) : null));
    })));
  }
  function Row({
    it,
    store
  }) {
    const [edit, setEdit] = React.useState(false);
    const [f, setF] = React.useState(it);
    const d = disc(it.disc);
    const dd = fmtLong(it.date);
    React.useEffect(() => setF(it), [it]);
    if (edit) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 10,
          alignItems: "center",
          padding: "14px 16px",
          background: T.fieldBg,
          border: `1.5px solid ${T.line}`,
          borderRadius: 14,
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "date",
        value: f.date,
        onChange: e => setF({
          ...f,
          date: e.target.value
        }),
        style: inp(120)
      }), /*#__PURE__*/React.createElement("input", {
        type: "time",
        value: f.time,
        onChange: e => setF({
          ...f,
          time: e.target.value
        }),
        style: inp(90)
      }), /*#__PURE__*/React.createElement("input", {
        value: f.title,
        onChange: e => setF({
          ...f,
          title: e.target.value
        }),
        placeholder: "T\xEDtulo",
        style: {
          ...inp(0),
          flex: 1,
          minWidth: 160
        }
      }), /*#__PURE__*/React.createElement("select", {
        value: f.disc,
        onChange: e => setF({
          ...f,
          disc: e.target.value
        }),
        style: inp(150)
      }, window.MV.disciplines.map(x => /*#__PURE__*/React.createElement("option", {
        key: x.id,
        value: x.id
      }, x.name)), /*#__PURE__*/React.createElement("option", {
        value: "geral"
      }, "Geral")), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          store.update(it.id, f);
          setEdit(false);
        },
        style: btn(T.btnBg, "#fff")
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16,
        color: "#fff"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          setF(it);
          setEdit(false);
        },
        style: btn(T.surface, T.mute, T.line)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "close",
        size: 16,
        color: T.mute
      })));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: "14px 16px",
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50,
        textAlign: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.serif,
        fontSize: 22,
        fontWeight: 600,
        color: T.ink,
        lineHeight: 1
      }
    }, dd.day), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: T.mute,
        fontWeight: 700,
        textTransform: "uppercase"
      }
    }, dd.mon)), /*#__PURE__*/React.createElement("div", {
      style: {
        borderLeft: `3px solid ${d.line}`,
        paddingLeft: 14,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 800,
        color: T.ink,
        letterSpacing: -0.2
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.mute,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13,
      color: T.mute
    }), " ", it.time), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: d.ink,
        background: d.tint,
        borderRadius: 999,
        padding: "2px 10px"
      }
    }, d.name))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEdit(true),
      style: ghost()
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 16,
      color: T.mute
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => store.remove(it.id),
      style: ghost()
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 16,
      color: T.mute
    })));
  }
  function AddForm({
    store
  }) {
    const [open, setOpen] = React.useState(false);
    const today = new Date().toISOString().slice(0, 10);
    const [f, setF] = React.useState({
      date: today,
      time: "19:00",
      title: "",
      disc: "farm"
    });
    if (!open) {
      return /*#__PURE__*/React.createElement("button", {
        onClick: () => setOpen(true),
        style: {
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: T.accentBg,
          border: `1.5px dashed ${T.accentBorder}`,
          borderRadius: 14,
          padding: "15px",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: 14,
          color: T.accentInk,
          fontFamily: T.font,
          marginBottom: 18
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18,
        color: T.accentInk
      }), " Adicionar compromisso");
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        padding: "16px",
        background: T.fieldBg,
        border: `1.5px solid ${T.line}`,
        borderRadius: 14,
        flexWrap: "wrap",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: f.date,
      onChange: e => setF({
        ...f,
        date: e.target.value
      }),
      style: inp(120)
    }), /*#__PURE__*/React.createElement("input", {
      type: "time",
      value: f.time,
      onChange: e => setF({
        ...f,
        time: e.target.value
      }),
      style: inp(90)
    }), /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: f.title,
      onChange: e => setF({
        ...f,
        title: e.target.value
      }),
      placeholder: "O que v\xE3o estudar?",
      style: {
        ...inp(0),
        flex: 1,
        minWidth: 180
      }
    }), /*#__PURE__*/React.createElement("select", {
      value: f.disc,
      onChange: e => setF({
        ...f,
        disc: e.target.value
      }),
      style: inp(150)
    }, window.MV.disciplines.map(x => /*#__PURE__*/React.createElement("option", {
      key: x.id,
      value: x.id
    }, x.name)), /*#__PURE__*/React.createElement("option", {
      value: "geral"
    }, "Geral")), /*#__PURE__*/React.createElement("button", {
      disabled: !f.title.trim(),
      onClick: () => {
        store.add(f);
        setF({
          date: today,
          time: "19:00",
          title: "",
          disc: "farm"
        });
        setOpen(false);
      },
      style: {
        ...btn(f.title.trim() ? T.btnBg : T.line, "#fff"),
        padding: "10px 16px",
        width: "auto",
        gap: 7,
        fontSize: 13.5,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "#fff"
    }), " Salvar"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(false),
      style: btn(T.surface, T.mute, T.line)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close",
      size: 16,
      color: T.mute
    })));
  }
  function Agenda() {
    const store = useAgenda();
    const items = store.get();
    const [sel, setSel] = React.useState(null);
    const shown = sel ? items.filter(i => i.date === sel) : items;
    const selLabel = sel ? (() => {
      const [y, m, d] = sel.split("-");
      return `${+d} de ${MES[+m - 1]}`;
    })() : null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px",
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: "Agenda do grupo",
      subtitle: "Combine sess\xF5es de estudo. Qualquer membro pode adicionar, editar ou remover."
    }), /*#__PURE__*/React.createElement(AddForm, {
      store: store
    }), /*#__PURE__*/React.createElement(MonthCalendar, {
      items: items,
      selected: sel,
      onSelect: d => setSel(sel === d ? null : d)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        margin: "26px 0 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: T.serif,
        fontSize: 21,
        fontWeight: 600,
        color: T.ink,
        letterSpacing: -0.3
      }
    }, sel ? selLabel : "Próximos compromissos"), sel ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setSel(null),
      style: {
        ...navGhost,
        color: T.accentInk,
        borderColor: T.accentBorder
      }
    }, "Ver todos") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, shown.map(it => /*#__PURE__*/React.createElement(Row, {
      key: it.id,
      it: it,
      store: store
    })), shown.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: T.mute,
        textAlign: "center",
        padding: "30px 0"
      }
    }, sel ? "Nenhum compromisso neste dia." : "Nenhum compromisso. Que tal marcar uma revisão? 📚") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 22,
        fontSize: 12,
        color: T.faint
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 14,
      color: T.faint
    }), " Edi\xE7\xE3o compartilhada \u2014 no prot\xF3tipo as mudan\xE7as ficam neste navegador."));
  }
  function inp(w) {
    return {
      padding: "10px 12px",
      borderRadius: 10,
      border: `1.5px solid ${T.line}`,
      fontSize: 13.5,
      fontFamily: T.font,
      color: T.ink,
      outline: "none",
      width: w || undefined,
      boxSizing: "border-box",
      background: T.surface,
      colorScheme: "light dark"
    };
  }
  function btn(bg, color, border) {
    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 10,
      background: bg,
      color,
      border: border ? `1.5px solid ${border}` : "none",
      cursor: "pointer"
    };
  }
  function ghost() {
    return {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: "transparent",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
  }
  window.MVPages.Agenda = Agenda;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageAgenda.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageArtefato.jsx
try { (() => {
// ============================================================
// MedVault — Página de Artefato (genérica): Quiz / Flashcards /
// Podcast / Infográfico. Agrupada por disciplina.
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    PageHead
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  const at = id => window.MV.artifactTypes.find(x => x.id === id);
  const disc = id => window.MV.disciplines.find(x => x.id === id);
  function ItemCard({
    tema,
    a,
    d
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => window.open(window.MV.driveUrl, "_blank", "noopener"),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        textAlign: "left",
        cursor: "pointer",
        fontFamily: T.font,
        background: T.surface,
        border: `1.5px solid ${h ? a.line : T.line}`,
        borderRadius: 16,
        padding: 16,
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "border-color .15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: a.tint,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 20,
      color: a.line
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: T.faint
      }
    }, tema.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 800,
        color: T.ink,
        letterSpacing: -0.2,
        lineHeight: 1.25
      }
    }, tema.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12.5,
        fontWeight: 800,
        color: a.line,
        flexShrink: 0
      }
    }, a.id === "podcast" ? /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16,
      color: a.line
    }) : null, "Abrir ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 14,
      color: a.line
    })));
  }
  function Artefato({
    art
  }) {
    const a = at(art);
    const groups = window.MV.disciplines.map(d => ({
      d,
      items: (window.MV.temas[d.id] || []).filter(t => t.arts.includes(art))
    })).filter(g => g.items.length > 0);
    const total = groups.reduce((s, g) => s + g.items.length, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px"
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: a.label,
      subtitle: `${total} ${total === 1 ? "item" : "itens"} do grupo · organizados por disciplina`,
      right: /*#__PURE__*/React.createElement("div", {
        style: {
          width: 52,
          height: 52,
          borderRadius: 15,
          background: a.tint,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: a.icon,
        size: 26,
        color: a.line
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 30
      }
    }, groups.map(({
      d,
      items
    }) => /*#__PURE__*/React.createElement("section", {
      key: d.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: 6,
        background: d.line
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        letterSpacing: -0.3,
        margin: 0,
        color: T.ink
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: T.line
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: T.faint
      }
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 14
      }
    }, items.map(tm => /*#__PURE__*/React.createElement(ItemCard, {
      key: d.id + tm.n,
      tema: tm,
      a: a,
      d: d
    })))))));
  }
  window.MVPages.Artefato = Artefato;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageArtefato.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageBiblioteca.jsx
try { (() => {
// ============================================================
// MedVault — Página: Biblioteca
// Resumos comentados, capítulo a capítulo, por livro/área.
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    Avatar,
    PageHead,
    MVPill
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  const member = name => window.MV.members.find(m => m.name === name) || {
    name,
    initials: (name || "?")[0],
    color: T.accent
  };
  function Chapter({
    c,
    book
  }) {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: `1.5px solid ${T.line}`,
        borderRadius: 14,
        overflow: "hidden",
        background: T.surface
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 15px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: book.ink,
        background: book.tint,
        borderRadius: 8,
        padding: "5px 9px",
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, c.n), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 14.5,
        fontWeight: 800,
        color: T.ink,
        letterSpacing: -0.2
      }
    }, c.t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12,
        color: T.mute,
        fontWeight: 600,
        marginTop: 2
      }
    }, "p. ", c.pag)), c.prova ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: "#8a4f31",
        background: "#fceee7",
        borderRadius: 999,
        padding: "3px 10px",
        whiteSpace: "nowrap"
      }
    }, "cai na P1") : null, /*#__PURE__*/React.createElement(Icon, {
      name: open ? "chevronDown" : "chevronRight",
      size: 18,
      color: T.faint
    })), open ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 17px 19px",
        borderTop: `1px solid ${T.lineSoft}`
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.65,
        color: T.ink,
        margin: "15px 0 14px"
      }
    }, c.resumo), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        marginBottom: 16
      }
    }, c.pontos.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        fontSize: 13.5,
        color: T.ink,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: book.line,
        marginTop: 7,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", null, p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        background: T.fieldBg,
        border: `1px solid ${T.line}`,
        borderRadius: 12,
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "quote",
      size: 20,
      color: book.line,
      style: {
        flexShrink: 0,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 0.5,
        textTransform: "uppercase",
        color: T.mute,
        marginBottom: 6
      }
    }, "Coment\xE1rio do grupo"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: 1.6,
        color: T.ink,
        margin: 0,
        fontStyle: "italic"
      }
    }, "\u201C", c.comentario, "\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      m: member(c.por),
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: T.ink
      }
    }, c.por)))), c.tags && c.tags.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 7,
        marginTop: 14
      }
    }, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: T.mute,
        background: T.hoverBg,
        borderRadius: 999,
        padding: "4px 11px"
      }
    }, "#", t))) : null) : null);
  }
  function BookCard({
    book,
    q
  }) {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      if (q) setOpen(true);
    }, [q]);
    const caps = q ? book.capitulos.filter(c => (c.t + " " + c.resumo + " " + (c.tags || []).join(" ")).toLowerCase().includes(q)) : book.capitulos;
    if (q && caps.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: `1.5px solid ${T.line}`,
        borderRadius: 18,
        background: T.surface,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: 18,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 60,
        borderRadius: "4px 9px 9px 4px",
        background: book.tint,
        borderLeft: `4px solid ${book.line}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: book.ink,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "book",
      size: 24,
      color: book.ink
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: book.ink,
        background: book.tint,
        borderRadius: 999,
        padding: "3px 10px"
      }
    }, book.area), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 17,
        fontWeight: 800,
        color: T.ink,
        letterSpacing: -0.3,
        marginTop: 8
      }
    }, book.titulo), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 13,
        color: T.mute,
        fontWeight: 600,
        marginTop: 3
      }
    }, book.autor, " \xB7 ", book.edicao, " \xB7 ", book.capitulos.length, " cap\xEDtulos resumidos")), /*#__PURE__*/React.createElement(Icon, {
      name: open ? "chevronDown" : "chevronRight",
      size: 20,
      color: T.faint
    })), open ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 18px 18px",
        display: "grid",
        gap: 10
      }
    }, caps.map(c => /*#__PURE__*/React.createElement(Chapter, {
      key: c.n,
      c: c,
      book: book
    }))) : null);
  }
  function Biblioteca() {
    const livros = window.MV.biblioteca || [];
    const areas = ["Todas"].concat(Array.from(new Set(livros.map(l => l.area))));
    const [area, setArea] = React.useState("Todas");
    const [q, setQ] = React.useState("");
    const ql = q.trim().toLowerCase();
    const shown = livros.filter(l => area === "Todas" || l.area === area);
    const totalCaps = livros.reduce((s, l) => s + l.capitulos.length, 0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px",
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: "Biblioteca",
      subtitle: `Resumos comentados, capítulo a capítulo — ${livros.length} livros · ${totalCaps} capítulos.`
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, areas.map(a => /*#__PURE__*/React.createElement(MVPill, {
      key: a,
      active: area === a,
      onClick: () => setArea(a)
    }, a))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 12
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 12,
        padding: "9px 13px",
        minWidth: 230
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 17,
      color: T.faint
    }), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Buscar cap\xEDtulo, tema, tag\u2026",
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 13.5,
        fontFamily: T.font,
        color: T.ink,
        width: "100%"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, shown.map(l => /*#__PURE__*/React.createElement(BookCard, {
      key: l.id,
      book: l,
      q: ql
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 24,
        fontSize: 12,
        color: T.faint
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 14,
      color: T.faint
    }), " Cada cap\xEDtulo guarda o resumo e o coment\xE1rio de quem leu \u2014 contribua com o do grupo."));
  }
  window.MVPages.Biblioteca = Biblioteca;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageBiblioteca.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageFerramentas.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================
// MedVault — Página: Ferramentas (hub de artefatos interativos)
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    PageHead
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  const at = id => window.MV.artifactTypes.find(x => x.id === id);

  // conta itens de um tipo entre todas as disciplinas
  function countArt(artId) {
    let n = 0;
    Object.values(window.MV.temas).forEach(arr => arr.forEach(t => {
      if (t.arts.includes(artId)) n++;
    }));
    return n;
  }
  function ToolCard({
    artId,
    route,
    nav,
    desc
  }) {
    const a = at(artId);
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => nav(route),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        textAlign: "left",
        cursor: "pointer",
        fontFamily: T.font,
        background: T.surface,
        border: `1.5px solid ${h ? a.line : T.line}`,
        borderRadius: 20,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color .15s, transform .15s",
        transform: h ? "translateY(-3px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        height: 60,
        borderRadius: 16,
        background: a.tint,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 28,
      color: a.line,
      stroke: 1.7
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 19,
        fontWeight: 800,
        letterSpacing: -0.3,
        color: T.ink
      }
    }, a.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: T.mute,
        marginTop: 5,
        lineHeight: 1.5
      }
    }, desc)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: a.line,
        background: a.tint,
        borderRadius: 999,
        padding: "4px 11px"
      }
    }, countArt(artId), " dispon\xEDveis"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13.5,
        fontWeight: 800,
        color: T.ink
      }
    }, "Abrir ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15,
      color: T.ink
    }))));
  }
  function Ferramentas({
    nav
  }) {
    const cards = [{
      artId: "quiz",
      route: "quiz",
      desc: "Questões de múltipla escolha com gabarito comentado."
    }, {
      artId: "flashcards",
      route: "flashcards",
      desc: "Cartas de revisão ativa para fixar conceitos."
    }, {
      artId: "podcast",
      route: "podcast",
      desc: "Áudios e resumos para ouvir no deslocamento."
    }, {
      artId: "infografico",
      route: "infografico",
      desc: "Esquemas visuais e mapas de um olhar só."
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px"
      }
    }, /*#__PURE__*/React.createElement(PageHead, {
      title: "Ferramentas",
      subtitle: "Estudo ativo do grupo \u2014 escolha um formato para praticar."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 18
      }
    }, cards.map(c => /*#__PURE__*/React.createElement(ToolCard, _extends({
      key: c.artId
    }, c, {
      nav: nav
    })))));
  }
  window.MVPages.Ferramentas = Ferramentas;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageFerramentas.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageLogin.jsx
try { (() => {
// ============================================================
// MedVault — Tela de login (logo em destaque)
// ============================================================
(function () {
  const {
    THEME,
    Icon
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  function Field({
    label,
    type,
    placeholder,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "block",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 0.4,
        color: T.mute,
        textTransform: "uppercase",
        marginBottom: 7
      }
    }, label), /*#__PURE__*/React.createElement("input", {
      type: type,
      placeholder: placeholder,
      value: value,
      onChange: e => onChange(e.target.value),
      style: {
        width: "100%",
        boxSizing: "border-box",
        padding: "12px 14px",
        borderRadius: 12,
        border: `1.5px solid ${T.line}`,
        fontSize: 14,
        fontFamily: T.font,
        color: T.ink,
        background: T.surface,
        outline: "none"
      }
    }));
  }
  function Login({
    nav
  }) {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    function entrar(e) {
      e.preventDefault();
      nav("painel");
    }
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Login",
      style: {
        minHeight: "100vh",
        background: T.bg,
        fontFamily: T.font,
        color: T.ink,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 400,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "logo",
      size: 104,
      color: T.accentInk,
      stroke: 0.9
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: T.serif,
        fontSize: 34,
        fontWeight: 500,
        letterSpacing: -0.6,
        margin: "18px 0 4px",
        color: T.ink
      }
    }, "MedVault"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: T.mute,
        fontWeight: 600,
        margin: "0 0 28px"
      }
    }, "Segundo C\xE9rebro \xB7 Medicina"), /*#__PURE__*/React.createElement("form", {
      onSubmit: entrar,
      style: {
        width: "100%",
        background: T.surface,
        border: `1px solid ${T.line}`,
        borderRadius: 22,
        padding: 26,
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "E-mail",
      type: "email",
      placeholder: "voce@exemplo.com",
      value: email,
      onChange: setEmail
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Senha",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: senha,
      onChange: setSenha
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        width: "100%",
        marginTop: 6,
        background: T.btnBg,
        border: "none",
        borderRadius: 12,
        padding: "13px 18px",
        fontWeight: 700,
        fontSize: 14,
        color: "#fff",
        cursor: "pointer",
        fontFamily: T.font
      }
    }, "Entrar"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#/login",
      onClick: e => e.preventDefault(),
      style: {
        fontSize: 12.5,
        fontWeight: 700,
        color: T.accentInk,
        textDecoration: "none"
      }
    }, "Esqueci minha senha"))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: T.faint,
        fontWeight: 600,
        marginTop: 22
      }
    }, "Reposit\xF3rio do grupo \xB7 acesso por convite")));
  }
  window.MVPages.Login = Login;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageLogin.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PageMateriais.jsx
try { (() => {
// ============================================================
// MedVault — Página: Materiais (Central). Busca + filtros +
// grade de temas mostrando os artefatos de cada um. Botão Adicionar.
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    PageHead,
    Topbar,
    MVPill,
    Avatar
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  const disc = id => window.MV.disciplines.find(x => x.id === id);
  const at = id => window.MV.artifactTypes.find(x => x.id === id);
  function ArtBadge({
    id,
    on
  }) {
    const a = at(id);
    if (!a) return null;
    return /*#__PURE__*/React.createElement("span", {
      title: a.single,
      style: {
        width: 30,
        height: 30,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: on ? a.tint : "#f4f2ec",
        border: `1px solid ${on ? "transparent" : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 15,
      color: on ? a.line : "#cfccc4"
    }));
  }
  function MaterialCard({
    m,
    onOpen
  }) {
    const d = disc(m.disc);
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        background: T.surface,
        border: `1.5px solid ${h ? d.line : T.line}`,
        borderRadius: 18,
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 13,
        transition: "border-color .15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 11.5,
        fontWeight: 800,
        color: d.ink
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: d.line
      }
    }), " ", d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: T.faint
      }
    }, m.n)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16.5,
        fontWeight: 800,
        letterSpacing: -0.3,
        color: T.ink
      }
    }, m.t), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, window.MV.artifactTypes.map(a => /*#__PURE__*/React.createElement(ArtBadge, {
      key: a.id,
      id: a.id,
      on: m.arts.includes(a.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: `1px solid ${T.lineSoft}`,
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: T.mute,
        fontWeight: 600
      }
    }, m.arts.length, " tipos dispon\xEDveis"), /*#__PURE__*/React.createElement("button", {
      onClick: onOpen,
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        fontWeight: 800,
        color: d.line,
        fontFamily: T.font
      }
    }, "Abrir ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15,
      color: d.line
    }))));
  }
  function Materiais() {
    const [add, setAdd] = React.useState(false);
    const [fd, setFd] = React.useState("all");
    const [ft, setFt] = React.useState("all");
    const AddModal = window.MVAddModal;
    const all = [];
    Object.keys(window.MV.temas).forEach(dId => window.MV.temas[dId].forEach(tm => all.push({
      ...tm,
      disc: dId
    })));
    const list = all.filter(m => (fd === "all" || m.disc === fd) && (ft === "all" || m.arts.includes(ft)));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Topbar, {
      onAdd: () => setAdd(true)
    })), /*#__PURE__*/React.createElement(PageHead, {
      title: "Materiais",
      subtitle: "Tudo do grupo, organizado por disciplina e tema."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 14,
        padding: "13px 16px",
        color: T.mute,
        fontSize: 14,
        marginBottom: 18,
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18,
      color: T.faint
    }), " Buscar tema, resumo, f\xE1rmaco, sinal cl\xEDnico\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(MVPill, {
      active: fd === "all",
      onClick: () => setFd("all")
    }, "Todas"), window.MV.disciplines.map(d => /*#__PURE__*/React.createElement(MVPill, {
      key: d.id,
      active: fd === d.id,
      dot: d.line,
      onClick: () => setFd(d.id)
    }, d.name))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 1,
        color: T.faint,
        textTransform: "uppercase",
        marginRight: 4
      }
    }, "Tipo"), /*#__PURE__*/React.createElement(MVPill, {
      active: ft === "all",
      onClick: () => setFt("all")
    }, "Todos"), window.MV.artifactTypes.map(a => /*#__PURE__*/React.createElement("button", {
      key: a.id,
      onClick: () => setFt(a.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12.5,
        fontWeight: 700,
        padding: "8px 13px",
        borderRadius: 999,
        cursor: "pointer",
        fontFamily: T.font,
        background: ft === a.id ? a.tint : T.surface,
        border: `1.4px solid ${ft === a.id ? a.line : T.line}`,
        color: ft === a.id ? a.line : T.ink
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 14,
      color: a.line
    }), " ", a.single))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 800
      }
    }, list.length, " temas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
        gap: 16
      }
    }, list.map(m => /*#__PURE__*/React.createElement(MaterialCard, {
      key: m.disc + m.n,
      m: m,
      onOpen: () => window.open(window.MV.driveUrl, "_blank", "noopener")
    }))), /*#__PURE__*/React.createElement(AddModal, {
      open: add,
      onClose: () => setAdd(false),
      presetDisc: fd === "all" ? null : fd
    }));
  }
  window.MVPages.Materiais = Materiais;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PageMateriais.jsx", error: String((e && e.message) || e) }); }

// redesign/app/PagePainel.jsx
try { (() => {
// ============================================================
// MedVault — Página: Painel (Início). Modelo A enxuto:
// cards de disciplina (line-art pastel) + prévia da agenda editável.
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    Emblem,
    PageHead,
    Topbar,
    useAgenda
  } = window;
  const T = THEME;
  window.MVPages = window.MVPages || {};
  function DisciplineCard({
    d,
    onOpen
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onOpen,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        textAlign: "left",
        cursor: "pointer",
        fontFamily: T.font,
        background: T.surface,
        border: `1.5px solid ${h ? d.line : T.line}`,
        borderRadius: 20,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color .15s ease, transform .15s ease",
        transform: h ? "translateY(-3px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: 18,
        background: d.tint,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Emblem, {
      name: d.emblem,
      size: 42,
      color: d.line,
      stroke: 1.7
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 800,
        letterSpacing: -0.3,
        color: T.ink
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: d.ink,
        background: d.tint,
        borderRadius: 999,
        padding: "4px 11px"
      }
    }, d.prova, " \xB7 ", d.dias, "d"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: T.mute,
        fontWeight: 600
      }
    }, d.temas, " temas"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        fontWeight: 700,
        color: d.line,
        marginTop: "auto"
      }
    }, "Abrir materiais ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 15,
      color: d.line
    })));
  }
  function AgendaPreview({
    nav
  }) {
    const store = useAgenda();
    const items = store.get().slice(0, 4);
    const disc = id => window.MV.disciplines.find(x => x.id === id) || {
      line: T.accent,
      tint: T.accentBg,
      name: "Geral"
    };
    const fmt = d => {
      const [y, m, day] = d.split("-");
      return `${day}/${m}`;
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: T.surface,
        border: `1.5px solid ${T.line}`,
        borderRadius: 20,
        padding: 22,
        position: "sticky",
        top: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 19,
      color: T.accentInk
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        letterSpacing: -0.3
      }
    }, "Agenda do grupo")), /*#__PURE__*/React.createElement("button", {
      onClick: () => nav("agenda"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 12.5,
        fontWeight: 700,
        color: T.mute,
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontFamily: T.font
      }
    }, "Editar ", /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 14,
      color: T.mute
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, items.map(it => {
      const d = disc(it.disc);
      return /*#__PURE__*/React.createElement("div", {
        key: it.id,
        style: {
          display: "flex",
          gap: 12,
          padding: "11px 0",
          borderTop: `1px solid ${T.lineSoft}`
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 44,
          textAlign: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 800,
          color: T.ink
        }
      }, fmt(it.date)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: T.mute,
          fontWeight: 600
        }
      }, it.time)), /*#__PURE__*/React.createElement("div", {
        style: {
          borderLeft: `2.5px solid ${d.line}`,
          paddingLeft: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: 700,
          color: T.ink,
          lineHeight: 1.3
        }
      }, it.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: T.mute,
          fontWeight: 600,
          marginTop: 2
        }
      }, d.name)));
    }), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: T.mute,
        padding: "10px 0"
      }
    }, "Nada agendado ainda.") : null), /*#__PURE__*/React.createElement("button", {
      onClick: () => nav("agenda"),
      style: {
        marginTop: 14,
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        background: T.accentBg,
        border: "none",
        borderRadius: 12,
        padding: "11px",
        fontWeight: 700,
        fontSize: 13,
        color: T.accentInk,
        cursor: "pointer",
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16,
      color: T.accentInk
    }), " Adicionar \xE0 agenda"));
  }
  function Painel({
    nav
  }) {
    const [add, setAdd] = React.useState(false);
    const AddModal = window.MVAddModal;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "30px 38px 48px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Topbar, {
      onAdd: () => setAdd(true)
    })), /*#__PURE__*/React.createElement(PageHead, {
      title: `Bom dia, ${window.MV.student}.`,
      subtitle: "Reposit\xF3rio do grupo de estudos \u2014 escolha uma disciplina para abrir os materiais."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: T.accentBg,
        border: `1.5px solid ${T.accentBorder}`,
        borderRadius: 18,
        padding: "18px 22px",
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 14,
        background: T.surface,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 22,
      color: T.accentInk
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        letterSpacing: 0.5,
        color: T.accentInk,
        textTransform: "uppercase"
      }
    }, "Pr\xF3xima prova"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15.5,
        fontWeight: 700,
        color: T.ink,
        marginTop: 2
      }
    }, "P1 \u2014 4 disciplinas \xB7 faltam ", /*#__PURE__*/React.createElement("b", null, "5 dias")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: 26,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: 0.6,
        color: T.mute,
        textTransform: "uppercase",
        marginBottom: 14
      }
    }, "Disciplinas"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 16
      }
    }, window.MV.disciplines.map(d => /*#__PURE__*/React.createElement(DisciplineCard, {
      key: d.id,
      d: d,
      onOpen: () => nav("materiais")
    })))), /*#__PURE__*/React.createElement(AgendaPreview, {
      nav: nav
    })), /*#__PURE__*/React.createElement(AddModal, {
      open: add,
      onClose: () => setAdd(false)
    }));
  }
  window.MVPages.Painel = Painel;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/PagePainel.jsx", error: String((e && e.message) || e) }); }

// redesign/app/Shell.jsx
try { (() => {
// ============================================================
// MedVault — Shell: sidebar line-art + roteamento (hash)
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    Avatar
  } = window;
  const T = THEME;
  const ROUTES = {
    painel: {
      label: "Início",
      icon: "home",
      group: 0
    },
    materiais: {
      label: "Materiais",
      icon: "grid",
      group: 0
    },
    biblioteca: {
      label: "Biblioteca",
      icon: "bookshelf",
      group: 0
    },
    ferramentas: {
      label: "Ferramentas",
      icon: "tools",
      group: 0
    },
    agenda: {
      label: "Agenda",
      icon: "calendar",
      group: 0
    },
    quiz: {
      label: "Quizzes",
      icon: "target",
      group: 1,
      art: "quiz"
    },
    flashcards: {
      label: "Flashcards",
      icon: "stack",
      group: 1,
      art: "flashcards"
    },
    podcast: {
      label: "Podcasts",
      icon: "headphone",
      group: 1,
      art: "podcast"
    },
    infografico: {
      label: "Infográficos",
      icon: "trending",
      group: 1,
      art: "infografico"
    }
  };
  function useRoute() {
    const get = () => (window.location.hash.replace(/^#\/?/, "") || "painel").split("?")[0];
    const [r, setR] = React.useState(get());
    React.useEffect(() => {
      const on = () => setR(get());
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    return [r, next => {
      window.location.hash = "/" + next;
    }];
  }
  function NavItem({
    id,
    route,
    active,
    onNav
  }) {
    const [hover, setHover] = React.useState(false);
    const r = ROUTES[id];
    const on = active;
    return /*#__PURE__*/React.createElement("a", {
      href: "#/" + id,
      onClick: () => onNav(id),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 13px",
        borderRadius: 12,
        textDecoration: "none",
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        color: on ? T.accentInk : hover ? T.ink : T.mute,
        background: on ? T.accentBg : hover ? T.hoverBg : "transparent",
        transition: "all .14s ease"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 19,
      color: on ? T.accentInk : hover ? T.ink : T.faint
    }), r.label);
  }
  function Sidebar({
    route,
    onNav
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        width: 248,
        flexShrink: 0,
        background: T.surface,
        borderRight: `1px solid ${T.line}`,
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        height: "100vh"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "0 8px 22px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 12,
        border: `1.6px solid ${T.accent}`,
        background: T.accentBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: T.accentInk
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "logo",
      size: 22,
      color: T.accentInk
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        color: T.ink,
        fontSize: 16,
        letterSpacing: -0.3
      }
    }, "MedVault"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: T.mute,
        fontWeight: 600
      }
    }, "Segundo C\xE9rebro"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, Object.keys(ROUTES).filter(k => ROUTES[k].group === 0).map(id => /*#__PURE__*/React.createElement(NavItem, {
      key: id,
      id: id,
      active: route === id,
      onNav: onNav
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 800,
        letterSpacing: 1.2,
        color: T.faint,
        textTransform: "uppercase",
        padding: "20px 13px 8px"
      }
    }, "Artefatos"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, Object.keys(ROUTES).filter(k => ROUTES[k].group === 1).map(id => /*#__PURE__*/React.createElement(NavItem, {
      key: id,
      id: id,
      active: route === id,
      onNav: onNav
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => window.postMessage({
        type: "__activate_edit_mode"
      }, "*"),
      style: {
        marginTop: "auto",
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 13px",
        borderRadius: 12,
        border: `1.5px dashed ${T.line}`,
        background: "transparent",
        cursor: "pointer",
        color: T.mute,
        fontWeight: 700,
        fontSize: 13,
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkle",
      size: 17,
      color: T.accentInk
    }), " Personalizar"), /*#__PURE__*/React.createElement("a", {
      href: "#/login",
      onClick: () => onNav("login"),
      title: "Sair \xB7 trocar usu\xE1rio",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 10px",
        borderTop: `1px solid ${T.line}`,
        textDecoration: "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      m: window.MV.members[0],
      size: 34
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: T.ink
      }
    }, window.MV.student), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: T.mute,
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, window.MV.group))));
  }
  function App() {
    const [route, nav] = useRoute();
    const [, force] = React.useReducer(x => x + 1, 0);
    React.useEffect(() => {
      const on = () => force();
      window.addEventListener("mv-rerender", on);
      return () => window.removeEventListener("mv-rerender", on);
    }, []);
    const r = ROUTES[route] || ROUTES.painel;
    const Pages = window.MVPages || {};
    if (route === "login" && Pages.Login) return /*#__PURE__*/React.createElement(Pages.Login, {
      nav: nav
    });
    let view = null;
    if (route === "painel") view = /*#__PURE__*/React.createElement(Pages.Painel, {
      nav: nav
    });else if (route === "materiais") view = /*#__PURE__*/React.createElement(Pages.Materiais, {
      nav: nav
    });else if (route === "biblioteca") view = /*#__PURE__*/React.createElement(Pages.Biblioteca, {
      nav: nav
    });else if (route === "ferramentas") view = /*#__PURE__*/React.createElement(Pages.Ferramentas, {
      nav: nav
    });else if (route === "agenda") view = /*#__PURE__*/React.createElement(Pages.Agenda, {
      nav: nav
    });else if (r.art) view = /*#__PURE__*/React.createElement(Pages.Artefato, {
      art: r.art,
      nav: nav
    });else view = /*#__PURE__*/React.createElement(Pages.Painel, {
      nav: nav
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        minHeight: "100vh",
        background: T.bg,
        fontFamily: T.font,
        color: T.ink
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      key: route,
      route: route,
      onNav: nav
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, view));
  }
  window.MVApp = App;
  window.MV_ROUTES = ROUTES;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/Shell.jsx", error: String((e && e.message) || e) }); }

// redesign/app/data.js
try { (() => {
// ============================================================
// MedVault — dados do protótipo (repositório do grupo de estudos)
// ============================================================
window.MV = {
  student: "Simone",
  group: "Grupo de Estudos · UNINTER · PJC",
  // Link do Google Drive compartilhado (TROCAR pelo real do grupo)
  driveUrl: "https://drive.google.com/drive/folders/SEU-LINK-COMPARTILHADO",
  // Disciplinas — tom pastel + traço (line art) por disciplina
  disciplines: [{
    id: "farm",
    name: "Farmacologia",
    emblem: "pill",
    tint: "#e9effb",
    line: "#5b7bb0",
    ink: "#324a73",
    prova: "P1",
    dias: 5,
    temas: 28
  }, {
    id: "semi",
    name: "Semiologia Médica",
    emblem: "stetho",
    tint: "#e8f4ea",
    line: "#5f9670",
    ink: "#36634a",
    prova: "P1",
    dias: 5,
    temas: 18
  }, {
    id: "urol",
    name: "Urologia",
    emblem: "kidney",
    tint: "#f1eaf8",
    line: "#9070ad",
    ink: "#5d4276",
    prova: "P1",
    dias: 5,
    temas: 14
  }, {
    id: "etica",
    name: "Ética Médica",
    emblem: "scale",
    tint: "#fceee7",
    line: "#c5825f",
    ink: "#8a4f31",
    prova: "P1",
    dias: 5,
    temas: 10
  }, {
    id: "semiq",
    name: "Semiologia Cirúrgica",
    emblem: "scalpel",
    tint: "#e3f2f1",
    line: "#569a99",
    ink: "#326463",
    prova: "P2",
    dias: 33,
    temas: 7
  }],
  // Tipos de artefato
  artifactTypes: [{
    id: "resumo",
    label: "Resumos",
    single: "Resumo",
    icon: "book",
    tint: "#e9effb",
    line: "#5b7bb0"
  }, {
    id: "infografico",
    label: "Infográficos",
    single: "Infográfico",
    icon: "trending",
    tint: "#eaf3e6",
    line: "#6f9b56"
  }, {
    id: "podcast",
    label: "Podcasts",
    single: "Podcast",
    icon: "headphone",
    tint: "#f1eaf8",
    line: "#9070ad"
  }, {
    id: "quiz",
    label: "Quizzes",
    single: "Quiz",
    icon: "target",
    tint: "#fcecdf",
    line: "#c5824f"
  }, {
    id: "flashcards",
    label: "Flashcards",
    single: "Flashcards",
    icon: "stack",
    tint: "#e3f2f1",
    line: "#4f9494"
  }, {
    id: "mapa",
    label: "Mapas mentais",
    single: "Mapa mental",
    icon: "layers",
    tint: "#eaecf8",
    line: "#6a72b8"
  }, {
    id: "pdf",
    label: "PDFs",
    single: "PDF",
    icon: "file",
    tint: "#fbe9e6",
    line: "#c1665f"
  }, {
    id: "slide",
    label: "Slides",
    single: "Slide",
    icon: "presentation",
    tint: "#f8eccd",
    line: "#b5893c"
  }, {
    id: "transcricao",
    label: "Transcrições",
    single: "Transcrição",
    icon: "fileText",
    tint: "#edeef2",
    line: "#7c8597"
  }],
  // Temas por disciplina, com os artefatos que existem em cada um
  temas: {
    farm: [{
      n: "T01",
      t: "Bases Farmacológicas",
      arts: ["pdf", "slide", "resumo", "infografico", "mapa"]
    }, {
      n: "T02",
      t: "Farmacocinética (ADME)",
      arts: ["slide", "transcricao", "resumo", "quiz", "flashcards"]
    }, {
      n: "T06",
      t: "AINEs",
      arts: ["pdf", "slide", "transcricao", "resumo", "infografico", "podcast", "quiz", "flashcards"]
    }, {
      n: "T12",
      t: "Opioides",
      arts: ["slide", "resumo", "quiz", "flashcards", "mapa"]
    }, {
      n: "T13",
      t: "Antidepressivos",
      arts: ["pdf", "resumo", "podcast"]
    }],
    semi: [{
      n: "T02",
      t: "Sinais Vitais",
      arts: ["slide", "transcricao", "resumo", "quiz", "infografico"]
    }, {
      n: "T04",
      t: "Exame do Abdome",
      arts: ["pdf", "slide", "resumo", "infografico", "podcast"]
    }, {
      n: "T07",
      t: "Ausculta Cardíaca",
      arts: ["transcricao", "resumo", "flashcards", "podcast"]
    }],
    urol: [{
      n: "T03",
      t: "Litíase Urinária",
      arts: ["pdf", "slide", "resumo", "infografico", "mapa"]
    }, {
      n: "T05",
      t: "Infecção Urinária",
      arts: ["slide", "resumo", "quiz"]
    }, {
      n: "T08",
      t: "Hiperplasia Prostática",
      arts: ["pdf", "resumo", "flashcards"]
    }],
    etica: [{
      n: "T01",
      t: "Código de Ética Médica",
      arts: ["pdf", "transcricao", "resumo", "podcast", "quiz"]
    }, {
      n: "T03",
      t: "Bioética & Autonomia",
      arts: ["slide", "resumo", "infografico"]
    }],
    semiq: [{
      n: "T05",
      t: "Sinais de Apendicite",
      arts: ["pdf", "slide", "resumo", "infografico"]
    }, {
      n: "T06",
      t: "Abdome Agudo",
      arts: ["transcricao", "resumo", "quiz", "mapa"]
    }]
  },
  // Agenda editável (semeada). Editável localmente no protótipo.
  agenda: [{
    id: 1,
    date: "2026-06-10",
    time: "19:00",
    title: "Revisão AINEs + Opioides",
    disc: "farm"
  }, {
    id: 2,
    date: "2026-06-11",
    time: "20:00",
    title: "Quiz coletivo — Sinais Vitais",
    disc: "semi"
  }, {
    id: 3,
    date: "2026-06-12",
    time: "18:30",
    title: "Mapa: Litíase Urinária",
    disc: "urol"
  }, {
    id: 4,
    date: "2026-06-13",
    time: "19:30",
    title: "Simulado geral P1",
    disc: "etica"
  }, {
    id: 5,
    date: "2026-06-17",
    time: "19:00",
    title: "Ausculta Cardíaca — prática",
    disc: "semi"
  }, {
    id: 6,
    date: "2026-06-19",
    time: "20:00",
    title: "Farmacocinética (ADME)",
    disc: "farm"
  }, {
    id: 7,
    date: "2026-06-19",
    time: "21:30",
    title: "Revisão flashcards Urologia",
    disc: "urol"
  }, {
    id: 8,
    date: "2026-06-24",
    time: "18:30",
    title: "Abdome Agudo — casos",
    disc: "semiq"
  }, {
    id: 9,
    date: "2026-06-26",
    time: "19:00",
    title: "Bioética & Autonomia",
    disc: "etica"
  }, {
    id: 10,
    date: "2026-07-01",
    time: "19:30",
    title: "Simulado final P2",
    disc: "semiq"
  }],
  // Biblioteca — resumos comentados, capítulo a capítulo (editável em produção)
  biblioteca: [{
    id: "guyton",
    area: "Fisiologia",
    titulo: "Tratado de Fisiologia Médica",
    autor: "Guyton & Hall",
    edicao: "14ª ed.",
    tint: "#e6f1f3",
    line: "#4f8f99",
    ink: "#2f5d65",
    capitulos: [{
      n: "Cap. 5",
      t: "Potenciais de Membrana e de Ação",
      pag: "63–78",
      prova: true,
      resumo: "Gradientes iônicos e a bomba Na⁺/K⁺-ATPase estabelecem o potencial de repouso (≈ −90 mV no músculo). A abertura sequencial de canais de Na⁺ e K⁺ voltagem-dependentes gera o potencial de ação tudo-ou-nada e sua propagação ao longo da membrana.",
      pontos: ["O repouso depende sobretudo do vazamento de K⁺ (equação de Nernst/Goldman).", "Despolarização: canais rápidos de Na⁺ → overshoot positivo.", "Repolarização: inativação do Na⁺ + abertura tardia de K⁺.", "Período refratário garante condução unidirecional."],
      comentario: "Liguei o período refratário com a arritmia que vimos em Semio — explica por que o coração não tetaniza.",
      por: "Lucas",
      tags: ["Nernst", "canais iônicos"]
    }, {
      n: "Cap. 9–10",
      t: "Músculo Cardíaco · O Coração como Bomba",
      pag: "115–132",
      prova: true,
      resumo: "Acoplamento excitação-contração no miócito, o platô do potencial de ação (Ca²⁺ tipo-L), o ciclo cardíaco e a relação de Frank-Starling entre pré-carga e débito sistólico.",
      pontos: ["Platô prolongado evita contração tetânica do miocárdio.", "Frank-Starling: mais enchimento diastólico → mais força de ejeção.", "Cálcio extracelular dispara liberação de Ca²⁺ do retículo sarcoplasmático."],
      comentario: "Frank-Starling caiu na P1 do ano passado — vale decorar o gráfico pré-carga × volume sistólico.",
      por: "Simone",
      tags: ["ciclo cardíaco", "Frank-Starling"]
    }, {
      n: "Cap. 26",
      t: "Formação da Urina: Filtração Glomerular",
      pag: "349–364",
      prova: false,
      resumo: "TFG, forças de Starling no glomérulo e autorregulação do fluxo renal — base para depuração de fármacos e ajuste de dose. Conecta diretamente com Farmacologia e Urologia.",
      pontos: ["TFG ≈ 125 mL/min em adulto saudável.", "Autorregulação miogênica + feedback tubuloglomerular.", "Clearance de creatinina estima a TFG na prática."],
      comentario: "Útil pra Farmaco: o ajuste de dose em nefropata sai daqui.",
      por: "Marina",
      tags: ["TFG", "clearance"]
    }]
  }, {
    id: "rang",
    area: "Farmacologia",
    titulo: "Rang & Dale — Farmacologia",
    autor: "Rang, Dale, Ritter",
    edicao: "9ª ed.",
    tint: "#e9effb",
    line: "#5b7bb0",
    ink: "#324a73",
    capitulos: [{
      n: "Cap. 2",
      t: "Como os Fármacos Atuam — Princípios Gerais",
      pag: "6–20",
      prova: true,
      resumo: "Interação fármaco-receptor: afinidade vs. eficácia, agonistas plenos/parciais, antagonistas competitivos e não competitivos, e as curvas dose-resposta que descrevem potência (EC₅₀) e eficácia máxima.",
      pontos: ["Afinidade = ligar-se; eficácia = ativar o receptor.", "Antagonista competitivo desloca a curva para a direita (reversível).", "Agonista parcial pode agir como antagonista na presença de agonista pleno."],
      comentario: "Desenhei as 4 curvas dose-resposta no caderno — antagonismo competitivo × não competitivo sempre confunde.",
      por: "André",
      tags: ["receptores", "dose-resposta"]
    }, {
      n: "Cap. 7",
      t: "Absorção, Distribuição e Farmacocinética",
      pag: "104–124",
      prova: true,
      resumo: "Os quatro processos do ADME, biodisponibilidade, volume de distribuição (Vd), meia-vida e depuração — e como cinética de primeira ordem vs. ordem zero muda o regime de doses.",
      pontos: ["Biodisponibilidade oral cai pelo efeito de primeira passagem hepática.", "Vd alto → fármaco lipofílico, distribui-se nos tecidos.", "Meia-vida orienta o intervalo entre doses e o tempo até o estado de equilíbrio."],
      comentario: "Cinética de ordem zero (álcool, fenitoína) é pegadinha clássica de prova.",
      por: "Simone",
      tags: ["ADME", "meia-vida"]
    }, {
      n: "Cap. 26",
      t: "Anti-inflamatórios — AINEs",
      pag: "318–334",
      prova: false,
      resumo: "Inibição da ciclo-oxigenase (COX-1 constitutiva × COX-2 induzível), efeitos analgésico/antipirético/anti-inflamatório e os adversos clássicos: lesão GI, nefrotoxicidade e risco cardiovascular dos coxibes.",
      pontos: ["COX-1 protege a mucosa gástrica — sua inibição causa úlcera.", "Coxibes poupam o estômago, mas elevam risco CV.", "Cuidado em nefropatas e idosos desidratados."],
      comentario: "Casou perfeito com o tema AINEs de Farmaco — usei pra montar os flashcards.",
      por: "Lucas",
      tags: ["COX", "AINEs"]
    }]
  }, {
    id: "porto",
    area: "Semiologia",
    titulo: "Porto — Semiologia Médica",
    autor: "Celmo Celeno Porto",
    edicao: "8ª ed.",
    tint: "#e8f4ea",
    line: "#5f9670",
    ink: "#36634a",
    capitulos: [{
      n: "Cap. 3",
      t: "Exame Físico Geral e Sinais Vitais",
      pag: "88–110",
      prova: true,
      resumo: "Sequência do exame geral (ectoscopia), aferição correta de PA, FC, FR e temperatura, e a interpretação dos achados de fácies, atitude, estado de hidratação e nutrição.",
      pontos: ["PA: manguito adequado, repouso de 5 min, evitar erro de tamanho do braçal.", "Pulsos: frequência, ritmo, amplitude e simetria.", "Fácies típicas orientam hipóteses (ex.: hipertireoidismo, Cushing)."],
      comentario: "A parte de erros de aferição de PA é ouro — caiu na OSCE do semestre passado.",
      por: "Marina",
      tags: ["sinais vitais", "ectoscopia"]
    }, {
      n: "Cap. 12",
      t: "Exame Cardiovascular — Ausculta",
      pag: "234–260",
      prova: true,
      resumo: "Focos de ausculta, gênese de B1/B2, desdobramentos fisiológicos, B3/B4 e a caracterização de sopros por tempo, foco, irradiação e intensidade (escala de Levine).",
      pontos: ["Focos: aórtico, pulmonar, tricúspide e mitral.", "B1 = fechamento mitral/tricúspide; B2 = aórtica/pulmonar.", "Sopro sistólico em foco mitral irradiando p/ axila → insuficiência mitral."],
      comentario: "Ouvimos os áudios de sopro junto na sessão — recomendo escutar antes de ler.",
      por: "Simone",
      tags: ["ausculta", "sopros"]
    }, {
      n: "Cap. 18",
      t: "Exame do Abdome",
      pag: "356–382",
      prova: false,
      resumo: "Sequência semiológica do abdome (inspeção → ausculta → percussão → palpação) e os sinais de irritação peritoneal e visceromegalias.",
      pontos: ["No abdome, ausculta vem ANTES da palpação.", "Sinal de Blumberg sugere irritação peritoneal.", "Piparote e macicez móvel investigam ascite."],
      comentario: "A ordem invertida (ausculta antes) é a pegadinha que todo mundo erra.",
      por: "André",
      tags: ["abdome", "Blumberg"]
    }]
  }, {
    id: "campbell",
    area: "Urologia",
    titulo: "Campbell-Walsh — Urologia",
    autor: "Wein, Kavoussi et al.",
    edicao: "12ª ed.",
    tint: "#f1eaf8",
    line: "#9070ad",
    ink: "#5d4276",
    capitulos: [{
      n: "Cap. 92",
      t: "Litíase Urinária",
      pag: "1184–1210",
      prova: true,
      resumo: "Fisiopatologia da formação de cálculos (supersaturação), tipos (oxalato de cálcio, ácido úrico, estruvita), apresentação clínica da cólica renal e conduta conforme tamanho e localização.",
      pontos: ["Oxalato de cálcio é o cálculo mais comum.", "Cólica renal: dor lombar em cólica com irradiação para fossa ilíaca/genitália.", "Cálculos < 5 mm tendem a eliminação espontânea."],
      comentario: "Liguei a supersaturação com a aula de fluidos do Guyton — fez sentido na hora.",
      por: "Marina",
      tags: ["cálculo", "cólica renal"]
    }, {
      n: "Cap. 55",
      t: "Infecções do Trato Urinário",
      pag: "720–748",
      prova: true,
      resumo: "Classificação (ITU baixa × alta, complicada × não complicada), agente mais comum (E. coli), diagnóstico por urocultura e princípios de antibioticoterapia empírica.",
      pontos: ["E. coli responde pela maioria das ITUs não complicadas.", "Pielonefrite = febre + dor lombar + Giordano positivo.", "Urocultura ≥ 10⁵ UFC/mL confirma (com clínica compatível)."],
      comentario: "Conecta com Farmaco: escolha do ATB empírico depende do perfil de resistência local.",
      por: "Lucas",
      tags: ["ITU", "E. coli"]
    }, {
      n: "Cap. 144",
      t: "Hiperplasia Prostática Benigna",
      pag: "2425–2450",
      prova: false,
      resumo: "HPB e sintomas do trato urinário inferior (LUTS), avaliação por IPSS e toque retal, e o tratamento escalonado: alfa-bloqueadores, inibidores da 5-alfa-redutase e cirurgia (RTU).",
      pontos: ["LUTS: jato fraco, hesitação, noctúria, esvaziamento incompleto.", "Alfa-bloqueador alivia sintoma; finasterida reduz a próstata.", "RTU de próstata é o padrão cirúrgico clássico."],
      comentario: "Bom diferenciar HPB de câncer de próstata — a dupla toque retal + PSA aparece sempre.",
      por: "André",
      tags: ["HPB", "LUTS"]
    }]
  }],
  members: [{
    name: "Simone",
    initials: "S",
    color: "#5b7bb0"
  }, {
    name: "Lucas",
    initials: "L",
    color: "#5f9670"
  }, {
    name: "Marina",
    initials: "M",
    color: "#9070ad"
  }, {
    name: "André",
    initials: "A",
    color: "#c5825f"
  }, {
    name: "Júlia",
    initials: "J",
    color: "#569a99"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/data.js", error: String((e && e.message) || e) }); }

// redesign/app/logos.jsx
try { (() => {
// ============================================================
// MedVault — Variantes da logomarca (serpente)
//   classica  — bastão de Asclépio atual (2 ondas)
//   ondulada  — serpente com 3 ondas, mais sinuosa
//   cabeca    — serpente com cabeça visível (olho + língua)
//   caduceu   — duas serpentes + asas
//   facetada  — serpente "3D" em malha facetada hachurada
// Exporta: MVLogoMark, MVLogoFavicon, MV_LOGOS_META
// ============================================================
(function () {
  const SHIELD = "M12 2.8 19 5.5v4.9c0 4.6-2.9 7.9-7 9.6-4.1-1.7-7-5-7-9.6V5.5L12 2.8Z";

  // parts: {d} traço · {circle:[cx,cy,r]} traço · {dot:[cx,cy,r]} preenchido
  const LINE = {
    classica: {
      label: "Clássica",
      parts: [{
        d: SHIELD
      }, {
        circle: [12, 6, 0.62]
      }, {
        d: "M12 6.9v9"
      }, {
        d: "M14.6 7.4c0 1.05-1.16 1.7-2.6 1.7s-2.6.65-2.6 1.7 1.16 1.7 2.6 1.7 2.6.65 2.6 1.7-1.16 1.7-2.6 1.7-2.55-.5-2.55-1.35"
      }]
    },
    ondulada: {
      label: "Ondulada",
      parts: [{
        d: SHIELD
      }, {
        circle: [12, 5.8, 0.55]
      }, {
        d: "M12 6.6v9.8"
      }, {
        d: "M14.5 7.5c0 .78-1.12 1.26-2.5 1.26s-2.5.48-2.5 1.26 1.12 1.26 2.5 1.26 2.5.48 2.5 1.26-1.12 1.26-2.5 1.26-2.5.48-2.5 1.26 1.12 1.26 2.5 1.26c1.12 0 2.1-.32 2.42-.84"
      }]
    },
    cabeca: {
      label: "Cabeça visível",
      parts: [{
        d: SHIELD
      }, {
        d: "M12 6.2v10.2"
      }, {
        d: "M9.45 15c0-1 1.13-1.55 2.55-1.55s2.55-.6 2.55-1.6-1.13-1.6-2.55-1.6-2.55-.6-2.55-1.6S10.58 7.1 12 7.1c.9 0 1.66.3 2.1.78"
      }, {
        circle: [15.2, 8.35, 1.25]
      }, {
        dot: [15.6, 7.95, 0.34]
      }, {
        d: "M16.15 7.4l.9-.95"
      }, {
        d: "M17.05 6.45l.78.25M17.05 6.45l-.02-.8"
      }]
    },
    caduceu: {
      label: "Caduceu",
      parts: [{
        d: SHIELD
      }, {
        circle: [12, 5.55, 0.5]
      }, {
        d: "M12 6.7v9.8"
      }, {
        d: "M10.7 6.6C9.55 6.75 8.7 6.3 8.3 5.35M13.3 6.6c1.15.15 2-.3 2.4-1.25"
      }, {
        d: "M14.7 7.9c0 .95-1.2 1.55-2.7 1.55s-2.7.6-2.7 1.55 1.2 1.55 2.7 1.55 2.7.6 2.7 1.55-1.2 1.55-2.7 1.55"
      }, {
        d: "M9.3 7.9c0 .95 1.2 1.55 2.7 1.55s2.7.6 2.7 1.55-1.2 1.55-2.7 1.55-2.7.6-2.7 1.55 1.2 1.55 2.7 1.55"
      }]
    }
  };

  // ---------- linha contínua: serpente em uma só linha (48x48) ----------
  // Catmull-Rom → cubic bezier, para uma linha fluída com laçadas
  function crPath(P, k = 1) {
    let d = `M${P[0][0]} ${P[0][1]}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i],
        p1 = P[i],
        p2 = P[i + 1],
        p3 = P[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6 * k, p1[1] + (p2[1] - p0[1]) / 6 * k];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6 * k, p2[1] - (p3[1] - p1[1]) / 6 * k];
      d += `C${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${p2[0]} ${p2[1]}`;
    }
    return d;
  }
  // ponta livre → cauda → contorno de um lado do corpo → cabeça → desce o outro lado → saída livre cruzando o corpo
  function buildOneline() {
    const N = 15,
      pts = [],
      hw = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      pts.push([23 + 7.8 * Math.sin(2 * Math.PI * t + 2.4), 7.5 + 35 * t]);
      hw.push(2.4 - 1.9 * t * t);
    }
    const {
      U,
      L
    } = ribbonEdges(pts, hw);
    const d0 = norm(sub(pts[1], pts[0])),
      n0 = perp(d0);
    const nose = [pts[0][0] - d0[0] * 5, pts[0][1] - d0[1] * 5];
    const jaw = [pts[0][0] - d0[0] * 2.8 + n0[0] * 2.1, pts[0][1] - d0[1] * 2.8 + n0[1] * 2.1];
    // a ponta livre é a própria cauda esticada
    const P = [[1, 46.2], [10, 45.4]];
    for (let i = N - 1; i >= 0; i--) P.push(L[i]);
    P.push(nose, jaw);
    for (let i = 0; i <= 9; i++) P.push(U[i]);
    P.push([U[9][0] + 6, U[9][1] + 4.2], [U[9][0] + 13, U[9][1] + 9]);
    const eye = [pts[0][0] - d0[0] * 2.4 + n0[0] * 0.85, pts[0][1] - d0[1] * 2.4 + n0[1] * 0.85];
    return {
      d: crPath(P, 0.85),
      eye: [eye[0], eye[1], 0.55]
    };
  }

  // coração anatômico em linha contínua: entra pela aorta, contorna
  // o órgão inteiro e sai como vaso coronário descendo a face anterior
  function buildHeart() {
    const P = [[47, 3], [42.5, 5],
    // ponta livre (entra de cima à direita)
    [38.5, 8], [36, 6.8], [33.5, 5.6],
    // sobe para o arco aórtico
    [32.2, 3.4], [30.8, 6.2],
    // ramo 1 do arco
    [29.4, 3.8], [28.2, 6.6],
    // ramo 2
    [26.5, 4.6], [25.6, 7.6],
    // ramo 3
    [22.5, 8.2], [19, 9.6],
    // tronco pulmonar → átrio esq.
    [16.6, 12.4], [15.9, 15.5],
    // bojo do átrio
    [14, 19.5], [13.2, 25.5], [14.6, 31.5],
    // contorno esquerdo
    [17.4, 37], [20.8, 41.6],
    // desce ao ápice
    [22.8, 41.9],
    // ápice (curva)
    [27.2, 38.6], [31.8, 33.6],
    // contorno direito sobe
    [34.8, 27.6], [36.2, 21.5],
    // ventrículo/átrio dir.
    [37.3, 16.5], [36.3, 12.2],
    // fecha perto dos vasos
    [33, 12.4], [30.6, 14.6],
    // mergulha na face anterior
    [29.4, 18], [30.2, 21.4], [28.6, 24.8],
    // coronária serpenteando
    [29, 28.2], [27.2, 31.6], [27.6, 34.8],
    // continua descendo
    [25.8, 38.2], [24.2, 43], [23.4, 47.5] // sai como linha livre
    ];
    return {
      d: crPath(P, 0.9)
    };
  }

  // ---------- facetada: geometria calculada (48x48) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const len = v => Math.hypot(v[0], v[1]);
  const norm = v => {
    const l = len(v) || 1;
    return [v[0] / l, v[1] / l];
  };
  const perp = v => [-v[1], v[0]];

  // fita poligonal: pontos centrais + meia-larguras → arestas U/L
  function ribbonEdges(pts, hw) {
    const U = [],
      L = [];
    for (let i = 0; i < pts.length; i++) {
      const dPrev = i > 0 ? norm(sub(pts[i], pts[i - 1])) : null;
      const dNext = i < pts.length - 1 ? norm(sub(pts[i + 1], pts[i])) : null;
      let d = dPrev && dNext ? norm([dPrev[0] + dNext[0], dPrev[1] + dNext[1]]) : dPrev || dNext;
      const n = perp(d);
      U.push([pts[i][0] + n[0] * hw[i], pts[i][1] + n[1] * hw[i]]);
      L.push([pts[i][0] - n[0] * hw[i], pts[i][1] - n[1] * hw[i]]);
    }
    return {
      U,
      L
    };
  }

  // hachura paralela recortada num triângulo
  function hatchTri(tri, angleDeg, spacing) {
    const a = angleDeg * Math.PI / 180;
    const dir = [Math.cos(a), Math.sin(a)],
      n = perp(dir);
    const offs = tri.map(p => p[0] * n[0] + p[1] * n[1]);
    const min = Math.min(...offs),
      max = Math.max(...offs);
    let d = "";
    for (let c = min + spacing * 0.7; c < max - spacing * 0.25; c += spacing) {
      const hits = [];
      for (let e = 0; e < 3; e++) {
        const P = tri[e],
          Q = tri[(e + 1) % 3],
          E = sub(Q, P);
        const den = E[0] * n[0] + E[1] * n[1];
        if (Math.abs(den) < 1e-9) continue;
        const s = (c - (P[0] * n[0] + P[1] * n[1])) / den;
        if (s >= 0 && s <= 1) hits.push([P[0] + E[0] * s, P[1] + E[1] * s]);
      }
      if (hits.length >= 2) {
        const [p, q] = [hits[0], hits[hits.length - 1]];
        if (len(sub(q, p)) > spacing * 0.6) d += `M${p[0].toFixed(2)} ${p[1].toFixed(2)}L${q[0].toFixed(2)} ${q[1].toFixed(2)}`;
      }
    }
    return d;
  }
  function buildFacet() {
    // serpente em S suave amostrada — malha de facetas pequenas
    const N = 11,
      pts = [],
      hw = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      pts.push([23.5 + 8.5 * Math.sin(2 * Math.PI * t + 2.4), 6.5 + 36 * t]);
      hw.push(3 - 2.5 * t * t);
    }
    const {
      U,
      L
    } = ribbonEdges(pts, hw);
    const tris = [];
    for (let i = 0; i < N - 1; i++) {
      tris.push({
        pts: [U[i], U[i + 1], L[i]],
        hatch: i % 2 === 0 ? {
          angle: (i * 53 + 20) % 180,
          spacing: 1.25
        } : null
      });
      tris.push({
        pts: [U[i + 1], L[i + 1], L[i]],
        hatch: i % 2 === 1 ? {
          angle: (i * 53 + 95) % 180,
          spacing: 1.25
        } : null
      });
    }
    // cabeça: cunha de 2 facetas até o focinho, olho e língua bifurcada
    const d0 = norm(sub(pts[1], pts[0])),
      n0 = perp(d0);
    const nose = [pts[0][0] - d0[0] * 6, pts[0][1] - d0[1] * 6];
    tris.push({
      pts: [U[0], nose, pts[0]],
      hatch: {
        angle: 150,
        spacing: 1.2
      }
    });
    tris.push({
      pts: [pts[0], nose, L[0]],
      hatch: null
    });
    const eye = [pts[0][0] - d0[0] * 2.6 + n0[0] * 1.05, pts[0][1] - d0[1] * 2.6 + n0[1] * 1.05];
    const tip = [nose[0] - d0[0] * 2, nose[1] - d0[1] * 2];
    const f1 = [tip[0] - d0[0] * 0.9 + n0[0] * 0.55, tip[1] - d0[1] * 0.9 + n0[1] * 0.55];
    const f2 = [tip[0] - d0[0] * 0.9 - n0[0] * 0.55, tip[1] - d0[1] * 0.9 - n0[1] * 0.55];
    const pt = p => p[0].toFixed(2) + " " + p[1].toFixed(2);
    return {
      tris,
      extras: [{
        dot: [eye[0], eye[1], 0.6]
      }, {
        d: `M${pt(nose)}L${pt(tip)}M${pt(tip)}L${pt(f1)}M${pt(tip)}L${pt(f2)}`
      }]
    };
  }
  const FACET = buildFacet();
  const ONELINE = buildOneline();
  const HEART = buildHeart();
  const triPath = t => `M${t.pts.map(p => p[0].toFixed(2) + " " + p[1].toFixed(2)).join("L")}Z`;

  // ---------- componente ----------
  function LogoMark({
    variant = "classica",
    size = 22,
    color = "currentColor",
    stroke = 1.6,
    style = {}
  }) {
    if (variant === "linha" || variant === "coracao") {
      const one = variant === "coracao" ? HEART : ONELINE;
      return /*#__PURE__*/React.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        fill: "none",
        stroke: color,
        strokeWidth: stroke * 0.95,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
          display: "block",
          flexShrink: 0,
          ...style
        },
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: one.d
      }), one.eye ? /*#__PURE__*/React.createElement("circle", {
        cx: one.eye[0],
        cy: one.eye[1],
        r: one.eye[2],
        fill: color,
        stroke: "none"
      }) : null);
    }
    if (variant === "facetada") {
      const sw = stroke * 1.35; // viewBox 48, malha densa → traço mais fino
      return /*#__PURE__*/React.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        fill: "none",
        stroke: color,
        strokeWidth: sw,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
          display: "block",
          flexShrink: 0,
          ...style
        },
        "aria-hidden": "true"
      }, FACET.tris.map((t, i) => /*#__PURE__*/React.createElement("path", {
        key: i,
        d: triPath(t)
      })), FACET.tris.map((t, i) => t.hatch ? /*#__PURE__*/React.createElement("path", {
        key: "h" + i,
        d: hatchTri(t.pts, t.hatch.angle, t.hatch.spacing),
        strokeWidth: sw * 0.55
      }) : null), FACET.extras.map((p, i) => p.dot ? /*#__PURE__*/React.createElement("circle", {
        key: "e" + i,
        cx: p.dot[0],
        cy: p.dot[1],
        r: p.dot[2],
        fill: color,
        stroke: "none"
      }) : /*#__PURE__*/React.createElement("path", {
        key: "e" + i,
        d: p.d
      })));
    }
    const def = LINE[variant] || LINE.classica;
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        flexShrink: 0,
        ...style
      },
      "aria-hidden": "true"
    }, def.parts.map((p, i) => p.circle ? /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.circle[0],
      cy: p.circle[1],
      r: p.circle[2]
    }) : p.dot ? /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.dot[0],
      cy: p.dot[1],
      r: p.dot[2],
      fill: color,
      stroke: "none"
    }) : /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p.d
    })));
  }

  // ---------- favicon (data URI) ----------
  function logoSvgString(variant, color) {
    const cap = `fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"`;
    if (variant === "linha" || variant === "coracao") {
      const one = variant === "coracao" ? HEART : ONELINE;
      const body = `<path d="${one.d}"/>` + (one.eye ? `<circle cx="${one.eye[0]}" cy="${one.eye[1]}" r="${one.eye[2]}" fill="${color}" stroke="none"/>` : "");
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ${cap} stroke-width="2.2">${body}</svg>`;
    }
    if (variant === "facetada") {
      let body = "";
      FACET.tris.forEach(t => {
        body += `<path d="${triPath(t)}"/>`;
      });
      FACET.tris.forEach(t => {
        if (t.hatch) body += `<path stroke-width="0.9" d="${hatchTri(t.pts, t.hatch.angle, t.hatch.spacing)}"/>`;
      });
      FACET.extras.forEach(p => {
        body += p.dot ? `<circle cx="${p.dot[0]}" cy="${p.dot[1]}" r="${p.dot[2]}" fill="${color}" stroke="none"/>` : `<path d="${p.d}"/>`;
      });
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ${cap} stroke-width="1.6">${body}</svg>`;
    }
    const def = LINE[variant] || LINE.classica;
    let body = "";
    def.parts.forEach(p => {
      body += p.circle ? `<circle cx="${p.circle[0]}" cy="${p.circle[1]}" r="${p.circle[2]}"/>` : p.dot ? `<circle cx="${p.dot[0]}" cy="${p.dot[1]}" r="${p.dot[2]}" fill="${color}" stroke="none"/>` : `<path d="${p.d}"/>`;
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ${cap} stroke-width="1.7">${body}</svg>`;
  }
  function logoFaviconHref(variant, color) {
    return "data:image/svg+xml," + encodeURIComponent(logoSvgString(variant, color || "#525f8a"));
  }
  const MV_LOGOS_META = [{
    id: "coracao",
    label: "Coração 1-linha"
  }, {
    id: "linha",
    label: "Serpente 1-linha"
  }, {
    id: "classica",
    label: "Clássica"
  }, {
    id: "ondulada",
    label: "Ondulada"
  }, {
    id: "cabeca",
    label: "Cabeça visível"
  }, {
    id: "caduceu",
    label: "Caduceu"
  }, {
    id: "facetada",
    label: "Facetada 3D"
  }];
  Object.assign(window, {
    MVLogoMark: LogoMark,
    MVLogoFavicon: logoFaviconHref,
    MV_LOGOS_META
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/logos.jsx", error: String((e && e.message) || e) }); }

// redesign/app/shared.jsx
try { (() => {
// ============================================================
// MedVault — helpers compartilhados de página (cabeçalho, etc.)
// ============================================================
(function () {
  const {
    THEME,
    Icon,
    Avatar
  } = window;
  const T = THEME;
  function PageHead({
    title,
    subtitle,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 20,
        marginBottom: 26,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: T.serif,
        fontSize: 34,
        fontWeight: 500,
        letterSpacing: -0.6,
        margin: 0,
        color: T.ink
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: T.mute,
        marginTop: 6
      }
    }, subtitle) : null), right || null);
  }
  function Topbar({
    onAdd
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, window.MV.members.slice(0, 4).map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        marginLeft: i ? -9 : 0
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      m: m,
      size: 32
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: T.mute,
        fontWeight: 700,
        marginLeft: 9
      }
    }, "+19")), onAdd ? /*#__PURE__*/React.createElement("button", {
      onClick: onAdd,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        cursor: "pointer",
        background: T.btnBg,
        color: "#fff",
        borderRadius: 12,
        padding: "11px 16px",
        fontWeight: 700,
        fontSize: 13.5,
        fontFamily: T.font
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 17,
      color: "#fff"
    }), " Adicionar") : null);
  }

  // Botão pill line-art reutilizável
  function Pill({
    children,
    active,
    dot,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        fontWeight: 700,
        padding: "8px 14px",
        borderRadius: 999,
        whiteSpace: "nowrap",
        cursor: onClick ? "pointer" : "default",
        fontFamily: T.font,
        color: active ? "#fff" : T.ink,
        background: active ? T.btnBg : T.surface,
        border: `1.4px solid ${active ? T.btnBg : T.line}`
      }
    }, dot ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        border: `2px solid ${dot}`,
        background: active ? "#fff" : dot
      }
    }) : null, children);
  }
  Object.assign(window, {
    PageHead,
    Topbar,
    MVPill: Pill
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/shared.jsx", error: String((e && e.message) || e) }); }

// redesign/app/store.js
try { (() => {
// ============================================================
// MedVault — store da Agenda (editável, persistente em localStorage)
// Obs.: no protótipo a edição é local. Em produção, ligar a um
// backend compartilhado (ex.: Firebase) para edição colaborativa.
// ============================================================
(function () {
  const KEY = "mv_agenda_v1";
  let listeners = [];
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return window.MV.agenda.slice();
  }
  let items = load();
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch (e) {}
    listeners.forEach(fn => fn(items));
  }
  const Store = {
    get: () => items.slice().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
    add: it => {
      items.push({
        ...it,
        id: Date.now()
      });
      save();
    },
    update: (id, patch) => {
      items = items.map(x => x.id === id ? {
        ...x,
        ...patch
      } : x);
      save();
    },
    remove: id => {
      items = items.filter(x => x.id !== id);
      save();
    },
    reset: () => {
      items = window.MV.agenda.slice();
      save();
    },
    subscribe: fn => {
      listeners.push(fn);
      return () => {
        listeners = listeners.filter(f => f !== fn);
      };
    }
  };
  function useAgenda() {
    const [, setTick] = React.useState(0);
    React.useEffect(() => Store.subscribe(() => setTick(t => t + 1)), []);
    return Store;
  }
  Object.assign(window, {
    MVAgendaStore: Store,
    useAgenda
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/store.js", error: String((e && e.message) || e) }); }

// redesign/app/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// redesign/app/tweaks.jsx
try { (() => {
// ============================================================
// MedVault — Tweaks bridge
// Três controles expressivos que reformulam a sensação do app:
//   1. Atmosfera  — temperatura + claro/escuro (paleta inteira)
//   2. Sotaque    — cor de marca (acento)
//   3. Tipografia — voz tipográfica (títulos serifados x diretos)
// Estratégia: muta window.THEME no lugar e dispara "mv-rerender",
// já que todos os componentes leem T.* no render.
// ============================================================
(function () {
  const {
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakColor,
    TweakSelect,
    useTweaks
  } = window;

  // ---- helpers de cor ----
  const hx = h => {
    h = h.replace("#", "");
    if (h.length === 3) h = h.split("").map(c => c + c).join("");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  };
  const toHex = a => "#" + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, t) => {
    const A = hx(a),
      B = hx(b);
    return toHex([0, 1, 2].map(i => A[i] + (B[i] - A[i]) * t));
  };
  const darken = (h, t) => mix(h, "#000000", t);

  // ---- atmosferas (tokens neutros, independem do acento) ----
  const ATMOS = {
    cozy: {
      bg: "#fbfaf7",
      surface: "#ffffff",
      ink: "#33384a",
      mute: "#8b8f9e",
      faint: "#b9bcc7",
      line: "#e7e4dd",
      lineSoft: "#f0ede6",
      dark: false
    },
    clinic: {
      bg: "#eef2f6",
      surface: "#ffffff",
      ink: "#222b37",
      mute: "#67707c",
      faint: "#a6aeba",
      line: "#e1e6ec",
      lineSoft: "#eaeff4",
      dark: false
    },
    night: {
      bg: "#14161d",
      surface: "#1e212b",
      ink: "#e8eaf1",
      mute: "#99a0ae",
      faint: "#646b79",
      line: "#2c313c",
      lineSoft: "#262b35",
      dark: true
    }
  };

  // ---- acentos de marca ----
  const ACCENTS = ["#7d8bb5", "#6f9b80", "#6a8fc0", "#c39a52"]; // lavanda · verde · azul · âmbar

  const SERIF = "'Newsreader', Georgia, serif";

  // favicon d: SVG da variante escolhida, na cor do acento
  function setFavicon(variant, color) {
    if (!window.MVLogoFavicon) return;
    let l = document.querySelector('link[rel="icon"]');
    if (!l) {
      l = document.createElement("link");
      l.rel = "icon";
      document.head.appendChild(l);
    }
    l.type = "image/svg+xml";
    l.href = window.MVLogoFavicon(variant, color);
  }
  function applyTheme(t) {
    const base = ATMOS[t.atmosfera] || ATMOS.cozy;
    const accent = ACCENTS.includes(t.sotaque) ? t.sotaque : ACCENTS[0];
    const T = window.THEME;
    if (!T) return;
    T.bg = base.bg;
    T.surface = base.surface;
    T.ink = base.ink;
    T.mute = base.mute;
    T.faint = base.faint;
    T.line = base.line;
    T.lineSoft = base.lineSoft;
    T.accent = accent;
    if (base.dark) {
      T.accentInk = mix(accent, "#ffffff", 0.42); // texto de acento claro
      T.btnBg = accent; // botão sólido (texto branco)
      T.accentBg = mix(base.surface, accent, 0.24); // superfície tingida escura
      T.accentBorder = mix(base.surface, accent, 0.44);
      T.hoverBg = mix(base.bg, accent, 0.14);
      T.fieldBg = mix(base.surface, "#ffffff", 0.05);
    } else {
      T.accentInk = darken(accent, 0.34); // texto de acento escuro
      T.btnBg = darken(accent, 0.26);
      T.accentBg = mix(base.surface, accent, 0.13); // tinta clara
      T.accentBorder = mix(base.surface, accent, 0.28);
      T.hoverBg = mix(base.surface, accent, 0.06);
      T.fieldBg = mix(base.bg, accent, 0.05);
    }
    T.serif = t.tipografia === "Direto" ? T.font : SERIF;
    T.logo = t.logotipo || "coracao";
    setFavicon(T.logo, T.accentInk);
    document.body.style.background = base.bg;
    window.dispatchEvent(new Event("mv-rerender"));
  }

  // aplica imediatamente (antes do app montar) com os valores persistidos
  applyTheme(window.MV_TWEAKS || {});
  window.MVApplyTheme = applyTheme;
  function TweaksMount() {
    const [t, setTweak] = useTweaks(window.MV_TWEAKS);
    const set = (key, val) => {
      const next = {
        ...t,
        [key]: val
      };
      setTweak(key, val);
      applyTheme(next);
    };
    return /*#__PURE__*/React.createElement(TweaksPanel, {
      title: "Tweaks"
    }, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Atmosfera"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Clima",
      value: t.atmosfera,
      options: [{
        value: "cozy",
        label: "Quente"
      }, {
        value: "clinic",
        label: "Clínico"
      }, {
        value: "night",
        label: "Noturno"
      }],
      onChange: v => set("atmosfera", v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Sotaque de marca"
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: "Acento",
      value: t.sotaque,
      options: ACCENTS,
      onChange: v => set("sotaque", v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Logomarca"
    }), /*#__PURE__*/React.createElement(TweakSelect, {
      label: "S\xEDmbolo",
      value: t.logotipo || "coracao",
      options: (window.MV_LOGOS_META || []).map(m => ({
        value: m.id,
        label: m.label
      })),
      onChange: v => set("logotipo", v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Tipografia"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Voz",
      value: t.tipografia,
      options: [{
        value: "Editorial",
        label: "Editorial"
      }, {
        value: "Direto",
        label: "Direto"
      }],
      onChange: v => set("tipografia", v)
    }));
  }
  window.MVTweaksMount = TweaksMount;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/tweaks.jsx", error: String((e && e.message) || e) }); }

// redesign/app/ui.jsx
try { (() => {
// ============================================================
// MedVault — tema line-art pastel + ícones + emblemas
// ============================================================
(function () {
  const THEME = {
    bg: "#fbfaf7",
    // off-white quente
    surface: "#ffffff",
    ink: "#33384a",
    // texto principal (suave, não preto)
    mute: "#8b8f9e",
    faint: "#b9bcc7",
    line: "#e7e4dd",
    // hairline quente
    lineSoft: "#f0ede6",
    accent: "#7d8bb5",
    // lavanda-azulado pastel (marca)
    accentInk: "#525f8a",
    // texto/ícone de acento (adapta claro/escuro)
    btnBg: "#525f8a",
    // fundo de botões sólidos (sempre texto branco)
    accentBg: "#eef0f7",
    // superfície de acento (nav ativo, faixas)
    accentBorder: "#dfe3f1",
    // borda de acento
    hoverBg: "#f5f3ee",
    // hover neutro quente
    fieldBg: "#f7f9f4",
    // fundo sutil de formul./notas
    radius: 18,
    stroke: 1.6,
    logo: "coracao",
    // variante da logomarca (ver redesign/app/logos.jsx)
    font: "'Manrope', system-ui, -apple-system, sans-serif",
    serif: "'Newsreader', Georgia, serif"
  };

  // ---- Ícones de linha (stroke fino, cantos arredondados) ----
  const PATHS = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M5 11.5 12 5l7 6.5M7 10v9h10v-9"
    }),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "7",
      height: "7",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "4",
      width: "7",
      height: "7",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "13",
      width: "7",
      height: "7",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "13",
      y: "13",
      width: "7",
      height: "7",
      rx: "2"
    })),
    tools: /*#__PURE__*/React.createElement("path", {
      d: "M4 19l7-7M9 7a3 3 0 1 0 4 4l6.5 6.5-2 2L11 13M14.5 6.5 18 3l3 3-3.5 3.5"
    }),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "15",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 9.5h16M8 3v4M16 3v4"
    })),
    book: /*#__PURE__*/React.createElement("path", {
      d: "M5 5.5A2 2 0 0 1 7 4h11v14H7a2 2 0 0 0-2 2V5.5ZM5 18.5A2 2 0 0 1 7 17h11"
    }),
    trending: /*#__PURE__*/React.createElement("path", {
      d: "M4 16l5-5 3.5 3.5L20 7M15 7h5v5"
    }),
    headphone: /*#__PURE__*/React.createElement("path", {
      d: "M5 14v-2a7 7 0 0 1 14 0v2M5 14a2 2 0 0 0-2 2v1a2 2 0 0 0 4 0v-3M19 14a2 2 0 0 1 2 2v1a2 2 0 0 1-4 0v-3"
    }),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "0.6",
      fill: "currentColor",
      stroke: "none"
    })),
    stack: /*#__PURE__*/React.createElement("path", {
      d: "M12 4 3 8l9 4 9-4-9-4ZM4 12.5 12 16l8-3.5M4 16.5 12 20l8-3.5"
    }),
    layers: /*#__PURE__*/React.createElement("path", {
      d: "M12 3 4 7.5l8 4.5 8-4.5L12 3ZM5 12l7 4 7-4M5 16l7 4 7-4"
    }),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "6.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m20 20-3.8-3.8"
    })),
    plus: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h13M12 6l6 6-6 6"
    }),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    }),
    chevronLeft: /*#__PURE__*/React.createElement("path", {
      d: "M15 6l-6 6 6 6"
    }),
    chevronDown: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }),
    close: /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6 6 18"
    }),
    external: /*#__PURE__*/React.createElement("path", {
      d: "M14 5h5v5M19 5l-8 8M11 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
    }),
    edit: /*#__PURE__*/React.createElement("path", {
      d: "M5 19h14M7 15.5 16 6.5l2 2L9 17.5 6 18l.5-2.5Z"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5l4.5 4.5L19 7"
    }),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7.5V12l3 1.8"
    })),
    folder: /*#__PURE__*/React.createElement("path", {
      d: "M4 7a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
    }),
    sparkle: /*#__PURE__*/React.createElement("path", {
      d: "M12 4v5M12 15v5M4 12h5M15 12h5M7 7l3 3M14 14l3 3M17 7l-3 3M10 14l-3 3"
    }),
    bell: /*#__PURE__*/React.createElement("path", {
      d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M9.5 19a2.5 2.5 0 0 0 5 0"
    }),
    play: /*#__PURE__*/React.createElement("path", {
      d: "M8 5.5v13l11-6.5-11-6.5Z"
    }),
    trash: /*#__PURE__*/React.createElement("path", {
      d: "M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13"
    }),
    bookmark: /*#__PURE__*/React.createElement("path", {
      d: "M7 4h10v16l-5-3.4L7 20V4Z"
    }),
    user: /*#__PURE__*/React.createElement("path", {
      d: "M5 20a7 7 0 0 1 14 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    }),
    bookshelf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 4h3v16H5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 4h3v16h-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.6 5.1l2.9.5 2.3 13.8-2.9-.5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 20h16"
    })),
    quote: /*#__PURE__*/React.createElement("path", {
      d: "M10 8H6.5A1.5 1.5 0 0 0 5 9.5V13h4v-3M10 8v5a4 4 0 0 1-4 4M19 8h-3.5A1.5 1.5 0 0 0 14 9.5V13h4v-3M19 8v5a4 4 0 0 1-4 4"
    }),
    file: /*#__PURE__*/React.createElement("path", {
      d: "M14 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-5ZM14 4v5h5"
    }),
    fileText: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-5-5ZM14 4v5h5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 13h7M8.5 16.5h4.5"
    })),
    presentation: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "12",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 16v4M8.5 20h7M8 11l2.5-2.5L13 11l3-3"
    })),
    logo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2.8 19 5.5v4.9c0 4.6-2.9 7.9-7 9.6-4.1-1.7-7-5-7-9.6V5.5L12 2.8Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "6",
      r: ".62"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 6.9v9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.6 7.4c0 1.05-1.16 1.7-2.6 1.7s-2.6.65-2.6 1.7 1.16 1.7 2.6 1.7 2.6.65 2.6 1.7-1.16 1.7-2.6 1.7-2.55-.5-2.55-1.35"
    }))
  };
  function Icon({
    name,
    size = 20,
    stroke = THEME.stroke,
    color = "currentColor",
    style = {}
  }) {
    if (name === "logo" && window.MVLogoMark) {
      const LogoMark = window.MVLogoMark;
      return /*#__PURE__*/React.createElement(LogoMark, {
        variant: THEME.logo || "classica",
        size: size,
        color: color,
        stroke: stroke,
        style: style
      });
    }
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        flexShrink: 0,
        ...style
      },
      "aria-hidden": "true"
    }, PATHS[name] || null);
  }

  // ---- Emblemas line-art por disciplina (48x48) ----
  const EMBLEMS = {
    pill: /*#__PURE__*/React.createElement("g", {
      transform: "rotate(-40 24 24)"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "18",
      width: "30",
      height: "12",
      rx: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24 18v12"
    })),
    stetho: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "11",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "11",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 13c-3 7-1 14 6 15M32 13c3 7 1 14-6 15"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 28v3a2.5 2.5 0 0 0 5 0v-1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "30",
      cy: "33",
      r: "4.5"
    })),
    kidney: /*#__PURE__*/React.createElement("path", {
      d: "M24 11c6-2 13 3 13 11s-7 13-13 10c-2-1-3-3-3-5 0-3 2-4 2-7s-3-4-3-7c0-1 .5-2 1-3",
      transform: "rotate(8 24 24)"
    }),
    scale: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "11",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24 13v20M17 35h14M13 16h22M13 16l-4 9M13 16l4 9M35 16l-4 9M35 16l4 9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 25c0 2.5 2 4 4 4s4-1.5 4-4M31 25c0 2.5 2 4 4 4s4-1.5 4-4"
    })),
    scalpel: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M30 19 39 10c1.5 2 1 5.5-2 8l-5 3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 19 11 36"
    }))
  };
  function Emblem({
    name,
    size = 40,
    color = "currentColor",
    stroke = 1.7,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 48 48",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        ...style
      },
      "aria-hidden": "true"
    }, EMBLEMS[name] || null);
  }
  function Avatar({
    m,
    size = 32,
    ring = "#fff"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: size / 2,
        background: m.color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: size * 0.42,
        border: `2px solid ${ring}`,
        flexShrink: 0
      }
    }, m.initials);
  }
  Object.assign(window, {
    THEME,
    Icon,
    Emblem,
    Avatar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/app/ui.jsx", error: String((e && e.message) || e) }); }

// redesign/data.js
try { (() => {
// Shared seed data for the MedVault redesign concepts.
window.MV_RD = {
  student: "Simone",
  disciplines: [{
    id: "farm",
    name: "Farmacologia",
    accent: "#0f3460",
    desc: "Mecanismos de ação, farmacodinâmica e farmacoterapia",
    progress: 62,
    temas: 28,
    feitos: 17,
    prova: "P1",
    dias: 5,
    slot: "rd-cover-farm",
    hint: "comprimidos / medicação"
  }, {
    id: "semi",
    name: "Semiologia Médica",
    accent: "#1b5e20",
    desc: "Propedêutica, exame físico e semiologia dos sistemas",
    progress: 45,
    temas: 18,
    feitos: 8,
    prova: "P1",
    dias: 5,
    slot: "rd-cover-semi",
    hint: "estetoscópio / exame físico"
  }, {
    id: "urol",
    name: "Urologia",
    accent: "#4a148c",
    desc: "Patologias do trato urinário e sistema reprodutor",
    progress: 30,
    temas: 14,
    feitos: 4,
    prova: "P1",
    dias: 5,
    slot: "rd-cover-urol",
    hint: "anatomia renal / rim"
  }, {
    id: "etica",
    name: "Ética Médica",
    accent: "#bf360c",
    desc: "Princípios, deontologia e bioética médica",
    progress: 80,
    temas: 10,
    feitos: 8,
    prova: "P1",
    dias: 5,
    slot: "rd-cover-etica",
    hint: "balança / justiça"
  }, {
    id: "semiq",
    name: "Semiologia Cirúrgica",
    accent: "#006064",
    desc: "Exame físico cirúrgico e propedêutica",
    progress: 20,
    temas: 7,
    feitos: 1,
    prova: "P2",
    dias: 33,
    slot: "rd-cover-semiq",
    hint: "centro cirúrgico / bisturi",
    src: "assets/img/signo-psoas.jpg"
  }],
  // Tipos de artefato disponíveis por tema (cor + ícone do set window.Icon)
  artifactTypes: [{
    id: "resumo",
    label: "Resumo",
    icon: "book",
    color: "#1565c0"
  }, {
    id: "infografico",
    label: "Infográfico",
    icon: "trending",
    color: "#558b2f"
  }, {
    id: "podcast",
    label: "Podcast",
    icon: "play",
    color: "#6a1b9a"
  }, {
    id: "quiz",
    label: "Quiz",
    icon: "target",
    color: "#e65100"
  }, {
    id: "flashcards",
    label: "Flashcards",
    icon: "stack",
    color: "#00695c"
  }, {
    id: "mapa",
    label: "Mapa mental",
    icon: "layers",
    color: "#283593"
  }, {
    id: "vespera",
    label: "Véspera",
    icon: "clock",
    color: "#c62828"
  }],
  // Materiais (temas) com os artefatos que existem em cada um
  materials: [{
    tema: "T06",
    title: "AINEs",
    disc: "farm",
    arts: ["resumo", "infografico", "podcast", "quiz", "flashcards"],
    files: 9,
    when: "há 2 h"
  }, {
    tema: "T12",
    title: "Opioides",
    disc: "farm",
    arts: ["resumo", "quiz", "flashcards", "mapa"],
    files: 6,
    when: "há 5 h"
  }, {
    tema: "T03",
    title: "Diuréticos",
    disc: "farm",
    arts: ["resumo", "flashcards"],
    files: 3,
    when: "ontem"
  }, {
    tema: "T04",
    title: "Exame do Abdome",
    disc: "semi",
    arts: ["resumo", "infografico", "podcast"],
    files: 5,
    when: "ontem"
  }, {
    tema: "T02",
    title: "Sinais Vitais",
    disc: "semi",
    arts: ["resumo", "quiz", "vespera"],
    files: 4,
    when: "há 2 d"
  }, {
    tema: "T07",
    title: "Litíase Urinária",
    disc: "urol",
    arts: ["resumo", "infografico", "mapa"],
    files: 4,
    when: "há 3 d"
  }, {
    tema: "T01",
    title: "Código de Ética",
    disc: "etica",
    arts: ["resumo", "podcast", "quiz", "vespera"],
    files: 5,
    when: "há 3 d"
  }, {
    tema: "T05",
    title: "Sinais de Apendicite",
    disc: "semiq",
    arts: ["resumo", "infografico"],
    files: 3,
    when: "há 4 d"
  }],
  // Feed colaborativo do grupo de estudos
  members: [{
    name: "Simone",
    initials: "S",
    color: "#0f3460"
  }, {
    name: "Lucas",
    initials: "L",
    color: "#1b5e20"
  }, {
    name: "Marina",
    initials: "M",
    color: "#4a148c"
  }, {
    name: "André",
    initials: "A",
    color: "#bf360c"
  }, {
    name: "Júlia",
    initials: "J",
    color: "#006064"
  }],
  feed: [{
    who: "Marina",
    day: "Hoje",
    art: "resumo",
    tema: "AINEs",
    disc: "farm",
    when: "há 2 h"
  }, {
    who: "Lucas",
    day: "Hoje",
    art: "flashcards",
    tema: "Opioides",
    disc: "farm",
    when: "há 5 h"
  }, {
    who: "Simone",
    day: "Hoje",
    art: "infografico",
    tema: "Exame do Abdome",
    disc: "semi",
    when: "há 6 h"
  }, {
    who: "André",
    day: "Ontem",
    art: "quiz",
    tema: "Sinais Vitais",
    disc: "semi",
    when: "ontem 21h"
  }, {
    who: "Júlia",
    day: "Ontem",
    art: "podcast",
    tema: "Código de Ética",
    disc: "etica",
    when: "ontem 18h"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/data.js", error: String((e && e.message) || e) }); }

// redesign/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/design-canvas.jsx", error: String((e && e.message) || e) }); }

// redesign/icons.jsx
try { (() => {
// Lucide-style line icons as small React components (stroke 1.75, round caps).
// Used across the MedVault redesign concepts. Discipline identity comes from
// cover images (image-slot), not from these — these are UI affordances only.
(function () {
  const P = {
    flame: /*#__PURE__*/React.createElement("path", {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
    }),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "17",
      x: "3",
      y: "4",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9.5h18M8 2.5v4M16 2.5v4"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7.5V12l3 1.8"
    })),
    arrowRight: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5l4.5 4.5L19 7"
    }),
    layers: /*#__PURE__*/React.createElement("path", {
      d: "M12 3 3 8l9 5 9-5-9-5ZM4 13l8 4.5L20 13M4 17l8 4.5L20 17"
    }),
    rotate: /*#__PURE__*/React.createElement("path", {
      d: "M4 5v5h5M4.5 10a8 8 0 1 1-.9 5"
    }),
    book: /*#__PURE__*/React.createElement("path", {
      d: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5ZM4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }),
    trending: /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 7-7M16 7h5v5"
    }),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    bell: /*#__PURE__*/React.createElement("path", {
      d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M9.5 20a2.5 2.5 0 0 0 5 0"
    }),
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    play: /*#__PURE__*/React.createElement("path", {
      d: "M7 4.5v15l12-7.5-12-7.5Z"
    }),
    home: /*#__PURE__*/React.createElement("path", {
      d: "M4 11.5 12 4l8 7.5M6 10v10h12V10"
    }),
    stack: /*#__PURE__*/React.createElement("path", {
      d: "M3 7.5 12 3l9 4.5-9 4.5-9-4.5ZM6.5 11 3 12.7l9 4.3 9-4.3L17.5 11"
    }),
    activity: /*#__PURE__*/React.createElement("path", {
      d: "M3 12h4l3 8 4-16 3 8h4"
    }),
    sparkle: /*#__PURE__*/React.createElement("path", {
      d: "M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5"
    })
  };
  function Icon({
    name,
    size = 20,
    stroke = 1.75,
    color = "currentColor",
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        flexShrink: 0,
        ...style
      },
      "aria-hidden": "true"
    }, P[name] || null);
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/icons.jsx", error: String((e && e.message) || e) }); }

// redesign/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalApp.jsx
try { (() => {
// MedVault Portal — interactive recreation of the discipline portal.
// Uses MedVault design-system components from window namespace.
const {
  Sidebar,
  DisciplineCard,
  TopicCard,
  IntroBox,
  Tabs,
  Breadcrumb,
  Pill,
  ExamBadge
} = window.MedVaultDesignSystem_bafe94;
const DISC_GRAD = {
  farm: "linear-gradient(135deg, #0f3460 0%, #1a237e 100%)",
  semi: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)",
  urol: "linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)",
  etica: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
  semiq: "linear-gradient(135deg, #006064 0%, #00838f 100%)"
};
function PageHeader({
  emoji,
  title,
  subtitle,
  gradient
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: gradient || "var(--mv-grad-header)",
      color: "#fff",
      padding: "40px 44px 32px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--mv-text-2xl)",
      fontWeight: 800,
      margin: 0,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, emoji, " "), title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.95rem",
      opacity: 0.78,
      maxWidth: 640,
      lineHeight: 1.5,
      margin: 0
    }
  }, subtitle) : null);
}
function PortalSidebar({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Sidebar, {
    brand: "MedVault",
    tagline: "Segundo C\xE9rebro \xB7 Medicina"
  }, /*#__PURE__*/React.createElement(Sidebar.Section, null, "Navega\xE7\xE3o"), /*#__PURE__*/React.createElement(Sidebar.Link, {
    icon: "\uD83C\uDFE0",
    active: route.view === "home",
    onClick: e => {
      e.preventDefault();
      onNavigate({
        view: "home"
      });
    }
  }, "In\xEDcio"), /*#__PURE__*/React.createElement(Sidebar.Section, null, "Disciplinas"), window.MV_DISCIPLINES.map(d => {
    const badge = d.p1 && d.p2 ? "P1+P2" : d.p1 ? "P1" : "P2";
    return /*#__PURE__*/React.createElement(Sidebar.Link, {
      key: d.id,
      icon: d.emoji,
      badge: badge,
      active: route.view === "disc" && route.id === d.id,
      onClick: e => {
        e.preventDefault();
        onNavigate({
          view: "disc",
          id: d.id
        });
      }
    }, d.name);
  }), /*#__PURE__*/React.createElement(Sidebar.Section, null, "Ferramentas"), /*#__PURE__*/React.createElement(Sidebar.Link, {
    icon: "\uD83C\uDFAF"
  }, "Quiz"), /*#__PURE__*/React.createElement(Sidebar.Link, {
    icon: "\uD83C\uDCCF"
  }, "Flashcards"));
}
function HomeView({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    emoji: "\uD83C\uDFE5",
    title: "MedVaultWeb",
    subtitle: "Portal de acesso aos materiais de estudo de medicina \xB7 UNINTER \xB7 Pedro Juan Caballero"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 44px",
      background: "#fff",
      borderBottom: "1px solid var(--mv-border)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: ["Início"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 44px",
      maxWidth: "var(--mv-content-max)"
    }
  }, /*#__PURE__*/React.createElement(IntroBox, {
    icon: "\uD83D\uDCD6",
    title: "Sobre este portal"
  }, "Acesso aos resumos, infogr\xE1ficos, podcasts, quizzes, mapas mentais e flashcards organizados por disciplina e por prova \u2014 elaborados a partir de aulas, transcri\xE7\xF5es, slides e livros-texto de refer\xEAncia m\xE9dica."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      fontWeight: 700,
      color: "var(--mv-navy-700)",
      borderLeft: "4px solid var(--mv-navy-700)",
      paddingLeft: 12,
      margin: "28px 0 16px"
    }
  }, "\uD83D\uDCDA Disciplinas Dispon\xEDveis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 20
    }
  }, window.MV_DISCIPLINES.map(d => /*#__PURE__*/React.createElement(DisciplineCard, {
    key: d.id,
    discipline: d.key,
    emoji: d.emoji,
    title: d.name,
    description: d.desc,
    onClick: e => {
      e.preventDefault();
      onNavigate({
        view: "disc",
        id: d.id
      });
    },
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, d.p1 ? /*#__PURE__*/React.createElement(Pill, {
      tone: "p1"
    }, "P1 \xB7 ", d.p1, " temas") : null, d.p2 ? /*#__PURE__*/React.createElement(Pill, {
      tone: "p2"
    }, "P2 \xB7 ", d.p2, " temas") : null)
  })))));
}
function DisciplineView({
  id,
  onNavigate
}) {
  const d = window.MV_DISCIPLINES.find(x => x.id === id);
  const topics = window.MV_TOPICS[id];
  const hasBoth = d.p1 && d.p2;
  const [tab, setTab] = React.useState(d.p1 ? "p1" : "p2");
  const list = topics ? topics[tab] || [] : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    emoji: d.emoji,
    title: d.name,
    subtitle: d.desc,
    gradient: DISC_GRAD[d.key]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 44px",
      background: "#fff",
      borderBottom: "1px solid var(--mv-border)"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Início",
      href: "#"
    }, d.name]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 44px",
      maxWidth: "var(--mv-content-max)"
    }
  }, /*#__PURE__*/React.createElement(IntroBox, {
    icon: d.emoji,
    title: "Sobre esta disciplina",
    accent: `var(--mv-${d.key})`,
    sources: d.sources.map((s, i) => /*#__PURE__*/React.createElement(FonteTagInline, {
      key: i
    }, s))
  }, d.desc, ". Os artefatos foram elaborados a partir de transcri\xE7\xF5es de aulas, slides e livros-texto de refer\xEAncia."), hasBoth ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 0 18px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "p1",
      label: `P1 · ${d.p1} temas`
    }, {
      id: "p2",
      label: `P2 · ${d.p2} temas`
    }]
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "20px 0 14px"
    }
  }, /*#__PURE__*/React.createElement(ExamBadge, {
    exam: tab
  }, tab.toUpperCase()), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--mv-text-lg)",
      fontWeight: 700,
      margin: 0,
      color: "var(--mv-ink)"
    }
  }, tab === "p1" ? "Primeira" : "Segunda", " Prova \u2014 ", tab === "p1" ? d.p1 : d.p2, " Temas")), list ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 16
    }
  }, list.map(([num, title, sub]) => /*#__PURE__*/React.createElement(TopicCard, {
    key: num + title,
    number: num,
    exam: tab,
    discipline: d.key,
    title: title,
    subtitle: sub,
    tags: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pill, {
      tone: tab
    }, "\uD83D\uDCC4 Resumo"), tab === "p2" ? /*#__PURE__*/React.createElement(Pill, {
      tone: tab
    }, "\uD83C\uDCCF Flashcards") : null)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mv-warning-bg)",
      border: "1px solid var(--mv-warning)",
      borderRadius: "var(--mv-radius-xl)",
      padding: "20px 24px",
      color: "var(--mv-warning-ink)",
      fontSize: "var(--mv-text-base)"
    }
  }, "\uD83D\uDEA7 Conte\xFAdo desta disciplina ainda n\xE3o dispon\xEDvel na demonstra\xE7\xE3o.")));
}
function FonteTagInline({
  children
}) {
  const {
    FonteTag
  } = window.MedVaultDesignSystem_bafe94;
  return /*#__PURE__*/React.createElement(FonteTag, null, children);
}
function PortalApp() {
  const [route, setRoute] = React.useState({
    view: "home"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--mv-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      height: "100vh",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PortalSidebar, {
    route: route,
    onNavigate: setRoute
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, route.view === "home" ? /*#__PURE__*/React.createElement(HomeView, {
    onNavigate: setRoute
  }) : /*#__PURE__*/React.createElement(DisciplineView, {
    id: route.id,
    onNavigate: setRoute
  }), /*#__PURE__*/React.createElement("footer", {
    style: {
      textAlign: "center",
      padding: 24,
      color: "var(--mv-ink-muted)",
      fontSize: "var(--mv-text-sm)",
      background: "#fff",
      borderTop: "1px solid var(--mv-border)",
      marginTop: 40
    }
  }, "MedVaultWeb 2.0 \xB7 MED-Vault Pipeline \xB7 UNINTER Paraguay")));
}
window.PortalApp = PortalApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/data.js
try { (() => {
// MedVault portal seed data — disciplines and a sample topic set.
window.MV_DISCIPLINES = [{
  id: "farmacologia",
  key: "farm",
  emoji: "💊",
  name: "Farmacologia",
  desc: "Mecanismos de ação, farmacodinâmica e farmacoterapia",
  p1: 16,
  p2: 12,
  sources: ["Flórez — Farmacología Humana 6ª ed.", "Goodman & Gilman", "Slides UNINTER"]
}, {
  id: "semiologia-medica",
  key: "semi",
  emoji: "🩺",
  name: "Semiologia Médica",
  desc: "Propedêutica, exame físico, semiologia dos sistemas",
  p1: 10,
  p2: 8,
  sources: ["Porto — Semiologia Médica", "Bates — Propedêutica"]
}, {
  id: "urologia",
  key: "urol",
  emoji: "🫘",
  name: "Urologia",
  desc: "Patologias do trato urinário e sistema reprodutor",
  p1: 14,
  p2: 0,
  sources: ["Campbell-Walsh Urology", "Slides UNINTER"]
}, {
  id: "etica-medica",
  key: "etica",
  emoji: "⚖️",
  name: "Ética Médica",
  desc: "Princípios, deontologia e bioética médica",
  p1: 10,
  p2: 0,
  sources: ["Código de Ética Médica", "Bioética — Beauchamp & Childress"]
}, {
  id: "semiologia-cirurgica",
  key: "semiq",
  emoji: "🔪",
  name: "Semiologia Cirúrgica",
  desc: "Exame físico cirúrgico, propedêutica",
  p1: 0,
  p2: 7,
  sources: ["Vanuno — Semiología Quirúrgica"]
}];
window.MV_TOPICS = {
  farmacologia: {
    p1: [["T01", "Bases Farmacológicas da Terapêutica", "Introdução, receptores, alvos moleculares"], ["T02", "Farmacocinética e Farmacodinâmica", "ADME, curvas dose-resposta"], ["T03", "Transportadores e Metabolismo", "CYP450, transportadores de membrana"], ["T05", "Toxicidade e Intoxicação", "Reações adversas, antídotos, margens"], ["T06", "AINEs", "COX-1/COX-2, mecanismos, indicações"], ["T12", "Opioides", "Receptores µ/κ/δ, morfina, naloxona"], ["T13", "Antidepressivos", "ISRS, tricíclicos, IMAO, venlafaxina"], ["T14", "Anestésicos Locais", "Lidocaína, bupivacaína, bloqueio"]],
    p2: [["T01", "IECA e ARA-II", "SRAA, captopril, losartana"], ["T02", "Beta-bloqueadores", "Seletividade β1/β2, propranolol"], ["T03", "Diuréticos", "Alça, tiazídicos, poupadores de K⁺"], ["T06", "Hemostasia e Anticoagulantes", "Heparina, warfarina, fibrinolíticos"], ["T07", "Normolipemiantes", "Estatinas, fibratos, PCSK9"], ["T09", "Analgésicos Opioides", "Tolerância, antagonistas"]]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/data.js", error: String((e && e.message) || e) }); }

// ui_kits/study/StudyApp.jsx
try { (() => {
// MedVault Study Tools — interactive Quiz + Flashcards recreation.
const {
  ProgressBar,
  OptionButton,
  Flashcard,
  Button
} = window.MedVaultDesignSystem_bafe94;
function ToolHeader({
  emoji,
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mv-grad-header)",
      color: "#fff",
      padding: "32px 40px 26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-sm)",
      opacity: 0.7,
      marginBottom: 6
    }
  }, "\uD83C\uDFE5 MED-Vault \u203A ", title), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--mv-text-2xl)",
      fontWeight: 800,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, emoji, " "), title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      opacity: 0.78,
      margin: "6px 0 0",
      fontSize: "0.95rem"
    }
  }, subtitle) : null);
}
function Launcher({
  onPick
}) {
  const tiles = [{
    id: "quiz",
    emoji: "🎯",
    label: "Quiz Interativo",
    desc: "Questões de múltipla escolha com gabarito comentado",
    color: "var(--mv-quiz)"
  }, {
    id: "deck",
    emoji: "🃏",
    label: "Flashcards",
    desc: "Cartas de revisão ativa com auto-avaliação",
    color: "var(--mv-flashcard)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      maxWidth: 760
    }
  }, tiles.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onPick(t.id),
    style: {
      textAlign: "left",
      cursor: "pointer",
      background: "var(--mv-surface)",
      border: "1px solid var(--mv-border)",
      borderTop: `4px solid ${t.color}`,
      borderRadius: "var(--mv-radius-xl)",
      padding: "24px",
      boxShadow: "var(--mv-shadow)",
      fontFamily: "var(--mv-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "2.6rem",
      marginBottom: 10
    }
  }, t.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-sm)",
      color: "var(--mv-ink-muted)",
      marginTop: 6,
      lineHeight: 1.4
    }
  }, t.desc))));
}
function Quiz({
  data,
  onExit
}) {
  const [i, setI] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);
  const q = data.questions[i];
  const answered = picked !== null;
  const correctIdx = q ? q.options.findIndex(o => o.correct) : -1;
  function choose(idx) {
    if (answered) return;
    setPicked(idx);
    if (q.options[idx].correct) setScore(s => s + 1);
  }
  function next() {
    if (i + 1 >= data.questions.length) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setPicked(null);
    setShowHint(false);
  }
  function restart() {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setShowHint(false);
  }
  if (done) {
    const pct = Math.round(score / data.questions.length * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    return /*#__PURE__*/React.createElement(ScoreScreen, {
      emoji: emoji,
      pct: pct,
      sub: `${score} de ${data.questions.length} questões corretas`,
      onRestart: restart,
      onExit: onExit,
      restartLabel: "\uD83D\uDD04 Refazer quiz"
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      padding: "28px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-xl)",
      fontWeight: 700,
      color: "var(--mv-navy-700)",
      marginBottom: 12
    }
  }, data.title), /*#__PURE__*/React.createElement(ProgressBar, {
    value: i,
    max: data.questions.length,
    label: `Questão ${i + 1} de ${data.questions.length}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mv-surface)",
      border: "1px solid var(--mv-border)",
      borderRadius: "var(--mv-radius-xl)",
      padding: "1.75rem 1.5rem",
      boxShadow: "var(--mv-shadow)",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      lineHeight: 1.65,
      fontWeight: 500,
      marginBottom: "1.25rem"
    }
  }, q.question), q.hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowHint(h => !h),
    style: {
      background: "none",
      border: "1px dashed var(--mv-border)",
      borderRadius: "var(--mv-radius-md)",
      padding: "0.35rem 0.8rem",
      fontSize: "var(--mv-text-base)",
      color: "var(--mv-ink-muted)",
      cursor: "pointer",
      fontFamily: "var(--mv-font-sans)"
    }
  }, "\uD83D\uDCA1 Ver dica"), showHint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-base)",
      color: "var(--mv-warning-ink)",
      background: "var(--mv-warning-bg)",
      border: "1px solid var(--mv-warning)",
      borderRadius: "var(--mv-radius-md)",
      padding: "0.6rem 0.9rem",
      marginTop: "0.4rem"
    }
  }, q.hint) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem",
      marginBottom: "1rem"
    }
  }, q.options.map((opt, idx) => {
    let status = "idle";
    if (answered) {
      if (opt.correct) status = "correct";else if (idx === picked) status = "wrong";else status = "dimmed";
    }
    return /*#__PURE__*/React.createElement(OptionButton, {
      key: idx,
      letter: String.fromCharCode(65 + idx),
      status: status,
      answered: answered,
      onClick: () => choose(idx)
    }, opt.text);
  })), answered ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--mv-info-bg)",
      borderLeft: "3px solid var(--mv-navy-700)",
      borderRadius: "0 8px 8px 0",
      padding: "0.9rem 1.1rem",
      fontSize: "var(--mv-text-base)",
      lineHeight: 1.6,
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: q.options[picked].correct ? "var(--mv-success-ink)" : "var(--mv-danger-ink)"
    }
  }, q.options[picked].correct ? "✅ Correto" : "❌ Incorreto"), " — ", q.options[picked].correct ? q.options[picked].rationale : q.options[correctIdx].rationale) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      marginTop: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onExit,
    icon: "\u2190"
  }, "Sair"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: !answered,
    onClick: next,
    icon: i + 1 < data.questions.length ? "→" : "🏁"
  }, i + 1 < data.questions.length ? "Próxima" : "Ver resultado"))));
}
function Deck({
  data,
  onExit
}) {
  const [i, setI] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [knew, setKnew] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const card = data.cards[i];
  function mark(ok) {
    if (ok) setKnew(k => k + 1);
    advance();
  }
  function advance() {
    if (i + 1 >= data.cards.length) {
      setDone(true);
      return;
    }
    setI(i + 1);
    setFlipped(false);
  }
  function restart() {
    setI(0);
    setFlipped(false);
    setKnew(0);
    setDone(false);
  }
  if (done) {
    const pct = Math.round(knew / data.cards.length * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    return /*#__PURE__*/React.createElement(ScoreScreen, {
      emoji: emoji,
      pct: pct,
      sub: `${knew} de ${data.cards.length} cartas dominadas`,
      onRestart: restart,
      onExit: onExit,
      restartLabel: "\uD83D\uDD00 Reiniciar"
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      padding: "28px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-xl)",
      fontWeight: 700,
      color: "var(--mv-navy-700)",
      marginBottom: 12
    }
  }, data.title), /*#__PURE__*/React.createElement(ProgressBar, {
    value: i,
    max: data.cards.length,
    label: `Carta ${i + 1} de ${data.cards.length}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Flashcard, {
    front: card.front,
    back: card.back,
    flipped: flipped,
    onFlip: setFlipped
  })), flipped ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => mark(true),
    style: markStyle("var(--mv-success-bg)", "var(--mv-success-ink)")
  }, "\u2705 Sabia"), /*#__PURE__*/React.createElement("button", {
    onClick: () => mark(false),
    style: markStyle("var(--mv-danger-bg)", "var(--mv-danger-ink)")
  }, "\uD83D\uDD04 Revisar")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1rem",
      flexWrap: "wrap",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onExit,
    icon: "\u2190"
  }, "Sair"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: advance,
    icon: "\u2192"
  }, "Pr\xF3xima")));
}
function markStyle(bg, color) {
  return {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "var(--mv-radius-md)",
    border: "none",
    fontSize: "var(--mv-text-base)",
    fontWeight: 600,
    cursor: "pointer",
    background: bg,
    color,
    fontFamily: "var(--mv-font-sans)"
  };
}
function ScoreScreen({
  emoji,
  pct,
  sub,
  onRestart,
  onExit,
  restartLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      padding: "28px 40px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "3rem 1.5rem",
      background: "var(--mv-surface)",
      border: "1px solid var(--mv-border)",
      borderRadius: "var(--mv-radius-xl)",
      boxShadow: "var(--mv-shadow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "3.5rem",
      marginBottom: "1rem"
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-3xl)",
      fontWeight: 800,
      color: "var(--mv-navy-700)"
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--mv-text-md)",
      color: "var(--mv-ink-muted)",
      marginBottom: "2rem"
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onRestart
  }, restartLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onExit,
    icon: "\u2190"
  }, "Voltar"))));
}
function StudyApp() {
  const [tool, setTool] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--mv-bg)"
    }
  }, /*#__PURE__*/React.createElement(ToolHeader, {
    emoji: tool === "quiz" ? "🎯" : tool === "deck" ? "🃏" : "📚",
    title: tool === "quiz" ? "Quiz Interativo" : tool === "deck" ? "Flashcards" : "Ferramentas de Estudo",
    subtitle: tool ? "Farmacologia · AINEs" : "Escolha uma ferramenta para começar"
  }), tool === null ? /*#__PURE__*/React.createElement(Launcher, {
    onPick: setTool
  }) : null, tool === "quiz" ? /*#__PURE__*/React.createElement(Quiz, {
    data: window.MV_QUIZ,
    onExit: () => setTool(null)
  }) : null, tool === "deck" ? /*#__PURE__*/React.createElement(Deck, {
    data: window.MV_DECK,
    onExit: () => setTool(null)
  }) : null);
}
window.StudyApp = StudyApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/study/StudyApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/study/data.js
try { (() => {
// Sample quiz + flashcard data for the MedVault study tools.
window.MV_QUIZ = {
  title: "Farmacologia — AINEs",
  questions: [{
    question: "Qual é o principal mecanismo de ação dos anti-inflamatórios não esteroidais (AINEs)?",
    hint: "Pense na enzima responsável pela síntese de prostaglandinas.",
    options: [{
      text: "Inibição da fosfolipase A2",
      correct: false,
      rationale: "A fosfolipase A2 é inibida pelos corticosteroides, não pelos AINEs."
    }, {
      text: "Inibição da enzima ciclo-oxigenase (COX-1 e COX-2)",
      correct: true,
      rationale: "Os AINEs inibem a COX, reduzindo a síntese de prostaglandinas e tromboxanos."
    }, {
      text: "Bloqueio dos canais de sódio",
      correct: false,
      rationale: "Esse é o mecanismo dos anestésicos locais."
    }, {
      text: "Antagonismo dos receptores opioides",
      correct: false,
      rationale: "Antagonismo opioide é o mecanismo da naloxona."
    }]
  }, {
    question: "Qual AINE é classicamente associado à inibição irreversível da COX-1 plaquetária?",
    hint: "Usado em baixas doses como antiagregante.",
    options: [{
      text: "Ibuprofeno",
      correct: false,
      rationale: "O ibuprofeno é um inibidor reversível da COX."
    }, {
      text: "Ácido acetilsalicílico (AAS)",
      correct: true,
      rationale: "O AAS acetila irreversivelmente a COX-1, com efeito antiagregante por toda a vida da plaqueta."
    }, {
      text: "Celecoxibe",
      correct: false,
      rationale: "O celecoxibe é um inibidor seletivo da COX-2."
    }, {
      text: "Paracetamol",
      correct: false,
      rationale: "O paracetamol tem ação central e fraca atividade anti-inflamatória periférica."
    }]
  }, {
    question: "Qual o principal efeito adverso gastrointestinal dos AINEs não seletivos?",
    hint: "Relacionado à perda do efeito protetor da COX-1 na mucosa.",
    options: [{
      text: "Úlcera péptica e sangramento gastrointestinal",
      correct: true,
      rationale: "A inibição da COX-1 reduz prostaglandinas protetoras da mucosa gástrica."
    }, {
      text: "Constipação grave",
      correct: false,
      rationale: "Não é o efeito típico dos AINEs."
    }, {
      text: "Hepatite fulminante",
      correct: false,
      rationale: "Mais associada à superdosagem de paracetamol."
    }, {
      text: "Pancreatite aguda",
      correct: false,
      rationale: "Não é efeito característico dos AINEs."
    }]
  }]
};
window.MV_DECK = {
  title: "Farmacologia — AINEs · Flashcards",
  cards: [{
    front: "Qual o mecanismo de ação dos AINEs?",
    back: "Inibição da ciclo-oxigenase (COX-1 e COX-2), reduzindo a síntese de prostaglandinas."
  }, {
    front: "Diferença entre COX-1 e COX-2?",
    back: "COX-1 é constitutiva (proteção gástrica, função plaquetária); COX-2 é induzida na inflamação."
  }, {
    front: "Por que o AAS tem efeito antiagregante prolongado?",
    back: "Acetila irreversivelmente a COX-1 plaquetária — efeito dura toda a vida da plaqueta (~7-10 dias)."
  }, {
    front: "Principal vantagem dos coxibes (COX-2 seletivos)?",
    back: "Menor toxicidade gastrointestinal, por poupar a COX-1 protetora da mucosa."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/study/data.js", error: String((e && e.message) || e) }); }

__ds_ns.DisciplineCard = __ds_scope.DisciplineCard;

__ds_ns.IntroBox = __ds_scope.IntroBox;

__ds_ns.TopicCard = __ds_scope.TopicCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ExamBadge = __ds_scope.ExamBadge;

__ds_ns.FonteTag = __ds_scope.FonteTag;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Flashcard = __ds_scope.Flashcard;

__ds_ns.OptionButton = __ds_scope.OptionButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

})();
