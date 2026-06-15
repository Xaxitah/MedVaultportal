import React from "react";

/**
 * FonteTag — bordered source/reference chip used in intro boxes
 * to credit textbooks and slide sources.
 */
export function FonteTag({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        background: "#f0f4ff",
        border: "1px solid #c5cae9",
        color: "var(--mv-indigo-600)",
        padding: "3px 10px",
        borderRadius: "var(--mv-radius-sm)",
        fontSize: "var(--mv-text-sm)",
        fontFamily: "var(--mv-font-sans)",
        fontWeight: "var(--mv-weight-semibold)",
        display: "inline-block",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
