import React from "react";

const DISCIPLINE_COLORS = {
  farm: "var(--mv-farm)",
  semi: "var(--mv-semi)",
  urol: "var(--mv-urol)",
  etica: "var(--mv-etica)",
  semiq: "var(--mv-semiq)",
};

/**
 * TopicCard — a single study topic (tema). Number badge + title + sub,
 * with a row of artifact tags below. Used inside P1/P2 topic grids.
 */
export function TopicCard({
  number = "T01",
  exam = "p1",
  discipline = "farm",
  title = "Tema",
  subtitle = "",
  tags = null,
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
        borderTop: `4px solid ${color}`,
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transform: hover ? "var(--mv-lift)" : "none",
        transition: "transform var(--mv-transition), box-shadow var(--mv-transition)",
        fontFamily: "var(--mv-font-sans)",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px 8px" }}>
        <ExamBadgeInline exam={exam}>{number}</ExamBadgeInline>
        <div>
          <div
            style={{
              fontSize: "var(--mv-text-md)",
              fontWeight: "var(--mv-weight-bold)",
              lineHeight: 1.3,
              color: "var(--mv-ink)",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: "var(--mv-text-sm)", color: "var(--mv-ink-muted)", marginTop: 3 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
      {tags ? (
        <div style={{ padding: "0 14px 14px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {tags}
        </div>
      ) : null}
    </a>
  );
}

function ExamBadgeInline({ exam, children }) {
  const grads = { p1: "var(--mv-p1-grad)", p2: "var(--mv-p2-grad)" };
  return (
    <div
      style={{
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
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}
