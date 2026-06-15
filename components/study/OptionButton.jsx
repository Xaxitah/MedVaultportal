import React from "react";

/**
 * OptionButton — a quiz answer choice with a letter chip.
 * State: idle → answered. When answered, pass status
 * ("correct" | "wrong" | "dimmed") to color it.
 */
export function OptionButton({ letter = "A", children, status = "idle", answered = false, onClick }) {
  const [hover, setHover] = React.useState(false);

  const palettes = {
    idle: { border: "var(--mv-border)", bg: "var(--mv-bg-alt)", chipBg: "var(--mv-border)", chipColor: "var(--mv-ink-muted)" },
    correct: { border: "var(--mv-success)", bg: "var(--mv-success-bg)", chipBg: "var(--mv-success)", chipColor: "#fff" },
    wrong: { border: "var(--mv-danger)", bg: "var(--mv-danger-bg)", chipBg: "var(--mv-danger)", chipColor: "#fff" },
    dimmed: { border: "var(--mv-border)", bg: "var(--mv-bg-alt)", chipBg: "var(--mv-border)", chipColor: "var(--mv-ink-muted)" },
  };
  const hovering = !answered && hover;
  const p = palettes[answered ? status : "idle"];

  return (
    <button
      onClick={onClick}
      disabled={answered}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        transition: "border-color var(--mv-transition-fast), background var(--mv-transition-fast)",
      }}
    >
      <span
        style={{
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
          marginTop: "0.05rem",
        }}
      >
        {letter}
      </span>
      <span>{children}</span>
    </button>
  );
}
