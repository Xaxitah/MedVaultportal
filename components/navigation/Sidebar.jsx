import React from "react";

/**
 * Sidebar — the dark navy navigation rail. Compose with
 * Sidebar.Section and Sidebar.Link. Used on every portal view.
 */
export function Sidebar({ brand = "MedVault", tagline = "Segundo Cérebro · Medicina", logoEmoji = "🧠", children, width = "var(--mv-sidebar-width)", style = {} }) {
  return (
    <nav
      style={{
        width,
        background: "var(--mv-navy-900)",
        color: "var(--mv-on-dark)",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--mv-font-sans)",
        paddingBottom: 16,
        ...style,
      }}
    >
      <div style={{ padding: "24px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", letterSpacing: "0.5px", margin: 0 }}>
          <span aria-hidden="true">{logoEmoji} </span>{brand}
        </h2>
        {tagline ? (
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", marginTop: 3 }}>{tagline}</p>
        ) : null}
      </div>
      {children}
    </nav>
  );
}

Sidebar.Section = function SidebarSection({ children }) {
  return (
    <div
      style={{
        padding: "14px 16px 6px",
        fontSize: "0.65rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: "rgba(255,255,255,0.35)",
      }}
    >
      {children}
    </div>
  );
};

Sidebar.Link = function SidebarLink({ icon, children, badge, active = false, href = "#", onClick }) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 20px",
        textDecoration: "none",
        color: on ? "#fff" : "rgba(255,255,255,0.7)",
        fontSize: "0.875rem",
        borderLeft: `3px solid ${on ? "var(--mv-indigo-400)" : "transparent"}`,
        background: on ? "rgba(255,255,255,0.06)" : "transparent",
        transition: "all var(--mv-transition)",
      }}
    >
      {icon ? <span aria-hidden="true" style={{ fontSize: "1rem", flexShrink: 0 }}>{icon}</span> : null}
      <span>{children}</span>
      {badge ? (
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.6rem",
            padding: "1px 6px",
            borderRadius: "10px",
            background: "var(--mv-indigo-400)",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          {badge}
        </span>
      ) : null}
    </a>
  );
};
