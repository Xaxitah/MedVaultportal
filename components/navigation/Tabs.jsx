import React from "react";

/**
 * Tabs — pill-style segmented toggle used to switch P1/P2 sections.
 * Inactive pills are outlined; the active pill fills navy.
 */
export function Tabs({ tabs = [], value, onChange, style = {} }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "var(--mv-font-sans)", ...style }}>
      {tabs.map((t) => {
        const id = typeof t === "string" ? t : t.id;
        const label = typeof t === "string" ? t : t.label;
        const active = id === value;
        return (
          <TabButton key={id} active={active} onClick={() => onChange && onChange(id)}>
            {label}
          </TabButton>
        );
      })}
    </div>
  );
}

function TabButton({ active, children, onClick }) {
  const [hover, setHover] = React.useState(false);
  const on = active || hover;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "0.45rem 1.1rem",
        borderRadius: "var(--mv-radius-pill)",
        border: `1px solid ${on ? "var(--mv-navy-700)" : "var(--mv-border)"}`,
        background: on ? "var(--mv-navy-700)" : "var(--mv-surface)",
        color: on ? "#fff" : "var(--mv-ink-muted)",
        cursor: "pointer",
        fontSize: "var(--mv-text-base)",
        fontFamily: "var(--mv-font-sans)",
        transition: "background var(--mv-transition), color var(--mv-transition)",
      }}
    >
      {children}
    </button>
  );
}
