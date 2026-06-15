import React from "react";

/**
 * IntroBox — white panel with a left accent border that opens
 * a section ("Sobre esta disciplina"). Optional source-tag row.
 */
export function IntroBox({
  title = "",
  icon = null,
  accent = "var(--mv-indigo-400)",
  children,
  sources = null,
}) {
  return (
    <div
      style={{
        background: "var(--mv-surface)",
        borderRadius: "var(--mv-radius-xl)",
        padding: "24px 28px",
        boxShadow: "var(--mv-shadow)",
        borderLeft: `5px solid ${accent}`,
        fontFamily: "var(--mv-font-sans)",
      }}
    >
      {title ? (
        <h3
          style={{
            fontSize: "var(--mv-text-md)",
            fontWeight: "var(--mv-weight-bold)",
            marginBottom: 8,
            color: "var(--mv-ink)",
          }}
        >
          {icon ? <span aria-hidden="true">{icon} </span> : null}
          {title}
        </h3>
      ) : null}
      <div style={{ fontSize: "var(--mv-text-base)", color: "var(--mv-ink-muted)", lineHeight: 1.6 }}>
        {children}
      </div>
      {sources ? (
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>{sources}</div>
      ) : null}
    </div>
  );
}
