import React from "react";

/**
 * MedVault Button.
 * Variants mirror the in-product buttons: solid navy primary,
 * outlined secondary, and the lighter "slides"/link variant.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  as = "button",
  href,
  onClick,
  style = {},
  ...rest
}) {
  const pads = {
    sm: "0.45rem 0.9rem",
    md: "0.6rem 1.4rem",
    lg: "0.7rem 1.75rem",
  };
  const fontSizes = { sm: "0.85rem", md: "0.9rem", lg: "0.95rem" };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: pads[size],
    fontSize: fontSizes[size],
    fontFamily: "var(--mv-font-sans)",
    fontWeight: "var(--mv-weight-semibold)",
    borderRadius: "var(--mv-radius-lg)",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    lineHeight: 1.2,
    transition: "background var(--mv-transition-fast), border-color var(--mv-transition-fast), filter var(--mv-transition-fast)",
    border: "1px solid transparent",
  };

  const variants = {
    primary: {
      background: disabled ? "var(--mv-border)" : "var(--mv-navy-700)",
      color: disabled ? "var(--mv-ink-muted)" : "#fff",
    },
    secondary: {
      background: "var(--mv-bg-alt)",
      color: "var(--mv-navy-700)",
      borderColor: "var(--mv-border)",
    },
    slides: {
      background: "#f1f5f9",
      color: "var(--mv-navy-700)",
      borderColor: "#cbd5e1",
    },
  };

  const cls = {
    ...base,
    ...variants[variant],
    ...style,
  };

  const content = (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </>
  );

  if (as === "a") {
    return (
      <a href={href} style={cls} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button style={cls} disabled={disabled} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
