import React from "react";

/**
 * ExamBadge — circular gradient badge marking exam (P1/P2) or
 * topic numbers (T01…). The defining MedVault accent chip.
 */
export function ExamBadge({ children, exam = "p1", size = 26, style = {} }) {
  const grads = {
    p1: "var(--mv-p1-grad)",
    p2: "var(--mv-p2-grad)",
  };
  return (
    <div
      style={{
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
        ...style,
      }}
    >
      {children}
    </div>
  );
}
