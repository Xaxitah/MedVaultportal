import React from "react";

/**
 * Flashcard — a 3D flip card. Front shows the prompt, back (navy)
 * shows the answer. Controlled or uncontrolled via click.
 */
export function Flashcard({
  front,
  back,
  height = 220,
  flipped: flippedProp,
  onFlip,
  frontHint = "Toque para ver a resposta",
  backHint = "Toque para voltar",
}) {
  const [internal, setInternal] = React.useState(false);
  const flipped = flippedProp !== undefined ? flippedProp : internal;

  function toggle() {
    if (onFlip) onFlip(!flipped);
    if (flippedProp === undefined) setInternal((v) => !v);
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
    boxSizing: "border-box",
  };

  return (
    <div style={{ perspective: 1000, height, cursor: "pointer", fontFamily: "var(--mv-font-sans)" }} onClick={toggle}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
          transform: flipped ? "rotateY(180deg)" : "none",
        }}
      >
        <div style={{ ...face, background: "var(--mv-surface)", color: "var(--mv-ink)", fontWeight: 500 }}>
          <div>{front}</div>
          <span style={{ position: "absolute", bottom: "0.6rem", fontSize: "0.72rem", opacity: 0.5, color: "var(--mv-ink-muted)" }}>
            {frontHint}
          </span>
        </div>
        <div style={{ ...face, background: "var(--mv-navy-700)", color: "#fff", transform: "rotateY(180deg)" }}>
          <div>{back}</div>
          <span style={{ position: "absolute", bottom: "0.6rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>
            {backHint}
          </span>
        </div>
      </div>
    </div>
  );
}
