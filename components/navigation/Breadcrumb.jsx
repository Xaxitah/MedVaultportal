import React from "react";

/**
 * Breadcrumb — slim trail of links separated by chevrons.
 * Sits under the page header.
 */
export function Breadcrumb({ items = [], style = {} }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--mv-text-sm)",
        color: "var(--mv-ink-muted)",
        fontFamily: "var(--mv-font-sans)",
        ...style,
      }}
    >
      {items.map((it, i) => {
        const label = typeof it === "string" ? it : it.label;
        const href = typeof it === "string" ? null : it.href;
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {href && !last ? (
              <a href={href} style={{ color: "var(--mv-indigo-500)", textDecoration: "none" }}>
                {label}
              </a>
            ) : (
              <span style={{ color: last ? "var(--mv-ink)" : "var(--mv-ink-muted)" }}>{label}</span>
            )}
            {!last ? <span aria-hidden="true" style={{ opacity: 0.5 }}>›</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
