import React from "react";

/**
 * Pill — small rounded label. Used for exam tags (P1/P2),
 * topic counts, and artifact tags inside cards.
 */
export function Pill({ children, tone = "p1", style = {}, ...rest }) {
  const tones = {
    p1: { background: "var(--mv-p1-bg)", color: "var(--mv-p1-ink)" },
    p2: { background: "var(--mv-p2-bg)", color: "var(--mv-p2-ink)" },
    ok: { background: "var(--mv-success-bg)", color: "var(--mv-success-ink)" },
    neutral: { background: "#eef1f5", color: "var(--mv-ink-muted)" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "var(--mv-radius-pill)",
        fontSize: "var(--mv-text-sm)",
        fontFamily: "var(--mv-font-sans)",
        fontWeight: "var(--mv-weight-bold)",
        whiteSpace: "nowrap",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
