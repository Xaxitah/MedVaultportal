// Lucide-style line icons as small React components (stroke 1.75, round caps).
// Used across the MedVault redesign concepts. Discipline identity comes from
// cover images (image-slot), not from these — these are UI affordances only.
(function () {
  const P = {
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /></>,
    calendar: <><rect width="18" height="17" x="3" y="4" rx="2.5" /><path d="M3 9.5h18M8 2.5v4M16 2.5v4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3 1.8" /></>,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    chevronRight: <path d="M9 6l6 6-6 6" />,
    check: <path d="M5 12.5l4.5 4.5L19 7" />,
    layers: <path d="M12 3 3 8l9 5 9-5-9-5ZM4 13l8 4.5L20 13M4 17l8 4.5L20 17" />,
    rotate: <path d="M4 5v5h5M4.5 10a8 8 0 1 1-.9 5" />,
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5ZM4 19.5A2.5 2.5 0 0 1 6.5 17H20" />,
    trending: <path d="M3 17l6-6 4 4 7-7M16 7h5v5" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    bell: <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M9.5 20a2.5 2.5 0 0 0 5 0" />,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    play: <path d="M7 4.5v15l12-7.5-12-7.5Z" />,
    home: <path d="M4 11.5 12 4l8 7.5M6 10v10h12V10" />,
    stack: <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5ZM6.5 11 3 12.7l9 4.3 9-4.3L17.5 11" />,
    activity: <path d="M3 12h4l3 8 4-16 3 8h4" />,
    sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />,
  };

  function Icon({ name, size = 20, stroke = 1.75, color = "currentColor", style = {} }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        style={{ display: "block", flexShrink: 0, ...style }} aria-hidden="true">
        {P[name] || null}
      </svg>
    );
  }

  window.Icon = Icon;
})();
