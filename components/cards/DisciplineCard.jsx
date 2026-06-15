import React from "react";

const DISCIPLINE_COLORS = {
  farm: "var(--mv-farm)",
  semi: "var(--mv-semi)",
  urol: "var(--mv-urol)",
  etica: "var(--mv-etica)",
  semiq: "var(--mv-semiq)",
};

/**
 * DisciplineCard — the big entry tile on the portal home.
 * Colored top border, emoji cover on a tinted wash, title, blurb
 * and a footer row of exam pills.
 */
export function DisciplineCard({
  discipline = "farm",
  emoji = "💊",
  title = "Disciplina",
  description = "",
  footer = null,
  href = "#",
  onClick,
}) {
  const color = DISCIPLINE_COLORS[discipline] || discipline;
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        fontFamily: "var(--mv-font-sans)",
      }}
    >
      <div
        style={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.2rem",
          background: `color-mix(in srgb, ${color} 8%, transparent)`,
        }}
      >
        <span aria-hidden="true">{emoji}</span>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <div
          style={{
            fontSize: "var(--mv-text-md)",
            fontWeight: "var(--mv-weight-extrabold)",
            textTransform: "uppercase",
            letterSpacing: "var(--mv-tracking-wide)",
            color: "var(--mv-ink)",
            marginBottom: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "var(--mv-text-sm)",
            color: "var(--mv-ink-muted)",
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>
      {footer ? (
        <div
          style={{
            padding: "10px 16px",
            borderTop: "1px solid var(--mv-border)",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {footer}
        </div>
      ) : null}
    </a>
  );
}
