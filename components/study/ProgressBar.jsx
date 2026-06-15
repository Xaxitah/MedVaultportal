import React from "react";

/**
 * ProgressBar — thin navy fill bar with an optional caption.
 * Used at the top of quizzes and flashcard decks.
 */
export function ProgressBar({ value = 0, max = 100, label = null, style = {} }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ fontFamily: "var(--mv-font-sans)", ...style }}>
      <div
        style={{
          height: 6,
          background: "var(--mv-border)",
          borderRadius: 4,
          overflow: "hidden",
          marginBottom: 5,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "var(--mv-navy-700)",
            borderRadius: 4,
            transition: "width 0.3s ease",
          }}
        />
      </div>
      {label ? (
        <div style={{ fontSize: "var(--mv-text-sm)", color: "var(--mv-ink-muted)" }}>{label}</div>
      ) : null}
    </div>
  );
}
