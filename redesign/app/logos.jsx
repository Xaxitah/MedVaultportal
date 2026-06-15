// ============================================================
// MedVault — Variantes da logomarca (serpente)
//   classica  — bastão de Asclépio atual (2 ondas)
//   ondulada  — serpente com 3 ondas, mais sinuosa
//   cabeca    — serpente com cabeça visível (olho + língua)
//   caduceu   — duas serpentes + asas
//   facetada  — serpente "3D" em malha facetada hachurada
// Exporta: MVLogoMark, MVLogoFavicon, MV_LOGOS_META
// ============================================================
(function () {
  const SHIELD = "M12 2.8 19 5.5v4.9c0 4.6-2.9 7.9-7 9.6-4.1-1.7-7-5-7-9.6V5.5L12 2.8Z";

  // parts: {d} traço · {circle:[cx,cy,r]} traço · {dot:[cx,cy,r]} preenchido
  const LINE = {
    classica: {
      label: "Clássica", parts: [
        { d: SHIELD },
        { circle: [12, 6, 0.62] },
        { d: "M12 6.9v9" },
        { d: "M14.6 7.4c0 1.05-1.16 1.7-2.6 1.7s-2.6.65-2.6 1.7 1.16 1.7 2.6 1.7 2.6.65 2.6 1.7-1.16 1.7-2.6 1.7-2.55-.5-2.55-1.35" },
      ],
    },
    ondulada: {
      label: "Ondulada", parts: [
        { d: SHIELD },
        { circle: [12, 5.8, 0.55] },
        { d: "M12 6.6v9.8" },
        { d: "M14.5 7.5c0 .78-1.12 1.26-2.5 1.26s-2.5.48-2.5 1.26 1.12 1.26 2.5 1.26 2.5.48 2.5 1.26-1.12 1.26-2.5 1.26-2.5.48-2.5 1.26 1.12 1.26 2.5 1.26c1.12 0 2.1-.32 2.42-.84" },
      ],
    },
    cabeca: {
      label: "Cabeça visível", parts: [
        { d: SHIELD },
        { d: "M12 6.2v10.2" },
        { d: "M9.45 15c0-1 1.13-1.55 2.55-1.55s2.55-.6 2.55-1.6-1.13-1.6-2.55-1.6-2.55-.6-2.55-1.6S10.58 7.1 12 7.1c.9 0 1.66.3 2.1.78" },
        { circle: [15.2, 8.35, 1.25] },
        { dot: [15.6, 7.95, 0.34] },
        { d: "M16.15 7.4l.9-.95" },
        { d: "M17.05 6.45l.78.25M17.05 6.45l-.02-.8" },
      ],
    },
    caduceu: {
      label: "Caduceu", parts: [
        { d: SHIELD },
        { circle: [12, 5.55, 0.5] },
        { d: "M12 6.7v9.8" },
        { d: "M10.7 6.6C9.55 6.75 8.7 6.3 8.3 5.35M13.3 6.6c1.15.15 2-.3 2.4-1.25" },
        { d: "M14.7 7.9c0 .95-1.2 1.55-2.7 1.55s-2.7.6-2.7 1.55 1.2 1.55 2.7 1.55 2.7.6 2.7 1.55-1.2 1.55-2.7 1.55" },
        { d: "M9.3 7.9c0 .95 1.2 1.55 2.7 1.55s2.7.6 2.7 1.55-1.2 1.55-2.7 1.55-2.7.6-2.7 1.55 1.2 1.55 2.7 1.55" },
      ],
    },
  };

  // ---------- linha contínua: serpente em uma só linha (48x48) ----------
  // Catmull-Rom → cubic bezier, para uma linha fluída com laçadas
  function crPath(P, k = 1) {
    let d = `M${P[0][0]} ${P[0][1]}`;
    for (let i = 0; i < P.length - 1; i++) {
      const p0 = P[i - 1] || P[i], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2] || p2;
      const c1 = [p1[0] + ((p2[0] - p0[0]) / 6) * k, p1[1] + ((p2[1] - p0[1]) / 6) * k];
      const c2 = [p2[0] - ((p3[0] - p1[0]) / 6) * k, p2[1] - ((p3[1] - p1[1]) / 6) * k];
      d += `C${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${p2[0]} ${p2[1]}`;
    }
    return d;
  }
  // ponta livre → cauda → contorno de um lado do corpo → cabeça → desce o outro lado → saída livre cruzando o corpo
  function buildOneline() {
    const N = 15, pts = [], hw = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      pts.push([23 + 7.8 * Math.sin(2 * Math.PI * t + 2.4), 7.5 + 35 * t]);
      hw.push(2.4 - 1.9 * t * t);
    }
    const { U, L } = ribbonEdges(pts, hw);
    const d0 = norm(sub(pts[1], pts[0])), n0 = perp(d0);
    const nose = [pts[0][0] - d0[0] * 5, pts[0][1] - d0[1] * 5];
    const jaw = [pts[0][0] - d0[0] * 2.8 + n0[0] * 2.1, pts[0][1] - d0[1] * 2.8 + n0[1] * 2.1];
    // a ponta livre é a própria cauda esticada
    const P = [[1, 46.2], [10, 45.4]];
    for (let i = N - 1; i >= 0; i--) P.push(L[i]);
    P.push(nose, jaw);
    for (let i = 0; i <= 9; i++) P.push(U[i]);
    P.push([U[9][0] + 6, U[9][1] + 4.2], [U[9][0] + 13, U[9][1] + 9]);
    const eye = [pts[0][0] - d0[0] * 2.4 + n0[0] * 0.85, pts[0][1] - d0[1] * 2.4 + n0[1] * 0.85];
    return { d: crPath(P, 0.85), eye: [eye[0], eye[1], 0.55] };
  }

  // coração anatômico em linha contínua: entra pela aorta, contorna
  // o órgão inteiro e sai como vaso coronário descendo a face anterior
  function buildHeart() {
    const P = [
      [47, 3], [42.5, 5],                       // ponta livre (entra de cima à direita)
      [38.5, 8], [36, 6.8], [33.5, 5.6],        // sobe para o arco aórtico
      [32.2, 3.4], [30.8, 6.2],                 // ramo 1 do arco
      [29.4, 3.8], [28.2, 6.6],                 // ramo 2
      [26.5, 4.6], [25.6, 7.6],                 // ramo 3
      [22.5, 8.2], [19, 9.6],                   // tronco pulmonar → átrio esq.
      [16.6, 12.4], [15.9, 15.5],               // bojo do átrio
      [14, 19.5], [13.2, 25.5], [14.6, 31.5],   // contorno esquerdo
      [17.4, 37], [20.8, 41.6],                 // desce ao ápice
      [22.8, 41.9],                              // ápice (curva)
      [27.2, 38.6], [31.8, 33.6],               // contorno direito sobe
      [34.8, 27.6], [36.2, 21.5],               // ventrículo/átrio dir.
      [37.3, 16.5], [36.3, 12.2],               // fecha perto dos vasos
      [33, 12.4], [30.6, 14.6],                 // mergulha na face anterior
      [29.4, 18], [30.2, 21.4], [28.6, 24.8],   // coronária serpenteando
      [29, 28.2], [27.2, 31.6], [27.6, 34.8],   // continua descendo
      [25.8, 38.2], [24.2, 43], [23.4, 47.5],   // sai como linha livre
    ];
    return { d: crPath(P, 0.9) };
  }

  // ---------- facetada: geometria calculada (48x48) ----------
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const len = (v) => Math.hypot(v[0], v[1]);
  const norm = (v) => { const l = len(v) || 1; return [v[0] / l, v[1] / l]; };
  const perp = (v) => [-v[1], v[0]];

  // fita poligonal: pontos centrais + meia-larguras → arestas U/L
  function ribbonEdges(pts, hw) {
    const U = [], L = [];
    for (let i = 0; i < pts.length; i++) {
      const dPrev = i > 0 ? norm(sub(pts[i], pts[i - 1])) : null;
      const dNext = i < pts.length - 1 ? norm(sub(pts[i + 1], pts[i])) : null;
      let d = dPrev && dNext ? norm([dPrev[0] + dNext[0], dPrev[1] + dNext[1]]) : (dPrev || dNext);
      const n = perp(d);
      U.push([pts[i][0] + n[0] * hw[i], pts[i][1] + n[1] * hw[i]]);
      L.push([pts[i][0] - n[0] * hw[i], pts[i][1] - n[1] * hw[i]]);
    }
    return { U, L };
  }

  // hachura paralela recortada num triângulo
  function hatchTri(tri, angleDeg, spacing) {
    const a = (angleDeg * Math.PI) / 180;
    const dir = [Math.cos(a), Math.sin(a)], n = perp(dir);
    const offs = tri.map((p) => p[0] * n[0] + p[1] * n[1]);
    const min = Math.min(...offs), max = Math.max(...offs);
    let d = "";
    for (let c = min + spacing * 0.7; c < max - spacing * 0.25; c += spacing) {
      const hits = [];
      for (let e = 0; e < 3; e++) {
        const P = tri[e], Q = tri[(e + 1) % 3], E = sub(Q, P);
        const den = E[0] * n[0] + E[1] * n[1];
        if (Math.abs(den) < 1e-9) continue;
        const s = (c - (P[0] * n[0] + P[1] * n[1])) / den;
        if (s >= 0 && s <= 1) hits.push([P[0] + E[0] * s, P[1] + E[1] * s]);
      }
      if (hits.length >= 2) {
        const [p, q] = [hits[0], hits[hits.length - 1]];
        if (len(sub(q, p)) > spacing * 0.6)
          d += `M${p[0].toFixed(2)} ${p[1].toFixed(2)}L${q[0].toFixed(2)} ${q[1].toFixed(2)}`;
      }
    }
    return d;
  }

  function buildFacet() {
    // serpente em S suave amostrada — malha de facetas pequenas
    const N = 11, pts = [], hw = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      pts.push([23.5 + 8.5 * Math.sin(2 * Math.PI * t + 2.4), 6.5 + 36 * t]);
      hw.push(3 - 2.5 * t * t);
    }
    const { U, L } = ribbonEdges(pts, hw);
    const tris = [];
    for (let i = 0; i < N - 1; i++) {
      tris.push({ pts: [U[i], U[i + 1], L[i]], hatch: i % 2 === 0 ? { angle: (i * 53 + 20) % 180, spacing: 1.25 } : null });
      tris.push({ pts: [U[i + 1], L[i + 1], L[i]], hatch: i % 2 === 1 ? { angle: (i * 53 + 95) % 180, spacing: 1.25 } : null });
    }
    // cabeça: cunha de 2 facetas até o focinho, olho e língua bifurcada
    const d0 = norm(sub(pts[1], pts[0])), n0 = perp(d0);
    const nose = [pts[0][0] - d0[0] * 6, pts[0][1] - d0[1] * 6];
    tris.push({ pts: [U[0], nose, pts[0]], hatch: { angle: 150, spacing: 1.2 } });
    tris.push({ pts: [pts[0], nose, L[0]], hatch: null });
    const eye = [pts[0][0] - d0[0] * 2.6 + n0[0] * 1.05, pts[0][1] - d0[1] * 2.6 + n0[1] * 1.05];
    const tip = [nose[0] - d0[0] * 2, nose[1] - d0[1] * 2];
    const f1 = [tip[0] - d0[0] * 0.9 + n0[0] * 0.55, tip[1] - d0[1] * 0.9 + n0[1] * 0.55];
    const f2 = [tip[0] - d0[0] * 0.9 - n0[0] * 0.55, tip[1] - d0[1] * 0.9 - n0[1] * 0.55];
    const pt = (p) => p[0].toFixed(2) + " " + p[1].toFixed(2);
    return {
      tris,
      extras: [
        { dot: [eye[0], eye[1], 0.6] },
        { d: `M${pt(nose)}L${pt(tip)}M${pt(tip)}L${pt(f1)}M${pt(tip)}L${pt(f2)}` },
      ],
    };
  }
  const FACET = buildFacet();
  const ONELINE = buildOneline();
  const HEART = buildHeart();
  const triPath = (t) => `M${t.pts.map((p) => p[0].toFixed(2) + " " + p[1].toFixed(2)).join("L")}Z`;

  // ---------- componente ----------
  function LogoMark({ variant = "classica", size = 22, color = "currentColor", stroke = 1.6, style = {} }) {
    if (variant === "linha" || variant === "coracao") {
      const one = variant === "coracao" ? HEART : ONELINE;
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color}
          strokeWidth={stroke * 0.95} strokeLinecap="round" strokeLinejoin="round"
          style={{ display: "block", flexShrink: 0, ...style }} aria-hidden="true">
          <path d={one.d} />
          {one.eye ? <circle cx={one.eye[0]} cy={one.eye[1]} r={one.eye[2]} fill={color} stroke="none" /> : null}
        </svg>
      );
    }
    if (variant === "facetada") {
      const sw = stroke * 1.35; // viewBox 48, malha densa → traço mais fino
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color}
          strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
          style={{ display: "block", flexShrink: 0, ...style }} aria-hidden="true">
          {FACET.tris.map((t, i) => <path key={i} d={triPath(t)} />)}
          {FACET.tris.map((t, i) => t.hatch
            ? <path key={"h" + i} d={hatchTri(t.pts, t.hatch.angle, t.hatch.spacing)} strokeWidth={sw * 0.55} />
            : null)}
          {FACET.extras.map((p, i) => p.dot
            ? <circle key={"e" + i} cx={p.dot[0]} cy={p.dot[1]} r={p.dot[2]} fill={color} stroke="none" />
            : <path key={"e" + i} d={p.d} />)}
        </svg>
      );
    }
    const def = LINE[variant] || LINE.classica;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
        strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        style={{ display: "block", flexShrink: 0, ...style }} aria-hidden="true">
        {def.parts.map((p, i) => p.circle
          ? <circle key={i} cx={p.circle[0]} cy={p.circle[1]} r={p.circle[2]} />
          : p.dot
            ? <circle key={i} cx={p.dot[0]} cy={p.dot[1]} r={p.dot[2]} fill={color} stroke="none" />
            : <path key={i} d={p.d} />)}
      </svg>
    );
  }

  // ---------- favicon (data URI) ----------
  function logoSvgString(variant, color) {
    const cap = `fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"`;
    if (variant === "linha" || variant === "coracao") {
      const one = variant === "coracao" ? HEART : ONELINE;
      const body = `<path d="${one.d}"/>` + (one.eye ? `<circle cx="${one.eye[0]}" cy="${one.eye[1]}" r="${one.eye[2]}" fill="${color}" stroke="none"/>` : "");
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ${cap} stroke-width="2.2">${body}</svg>`;
    }
    if (variant === "facetada") {
      let body = "";
      FACET.tris.forEach((t) => { body += `<path d="${triPath(t)}"/>`; });
      FACET.tris.forEach((t) => { if (t.hatch) body += `<path stroke-width="0.9" d="${hatchTri(t.pts, t.hatch.angle, t.hatch.spacing)}"/>`; });
      FACET.extras.forEach((p) => {
        body += p.dot ? `<circle cx="${p.dot[0]}" cy="${p.dot[1]}" r="${p.dot[2]}" fill="${color}" stroke="none"/>` : `<path d="${p.d}"/>`;
      });
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ${cap} stroke-width="1.6">${body}</svg>`;
    }
    const def = LINE[variant] || LINE.classica;
    let body = "";
    def.parts.forEach((p) => {
      body += p.circle
        ? `<circle cx="${p.circle[0]}" cy="${p.circle[1]}" r="${p.circle[2]}"/>`
        : p.dot
          ? `<circle cx="${p.dot[0]}" cy="${p.dot[1]}" r="${p.dot[2]}" fill="${color}" stroke="none"/>`
          : `<path d="${p.d}"/>`;
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ${cap} stroke-width="1.7">${body}</svg>`;
  }
  function logoFaviconHref(variant, color) {
    return "data:image/svg+xml," + encodeURIComponent(logoSvgString(variant, color || "#525f8a"));
  }

  const MV_LOGOS_META = [
    { id: "coracao", label: "Coração 1-linha" },
    { id: "linha", label: "Serpente 1-linha" },
    { id: "classica", label: "Clássica" },
    { id: "ondulada", label: "Ondulada" },
    { id: "cabeca", label: "Cabeça visível" },
    { id: "caduceu", label: "Caduceu" },
    { id: "facetada", label: "Facetada 3D" },
  ];

  Object.assign(window, { MVLogoMark: LogoMark, MVLogoFavicon: logoFaviconHref, MV_LOGOS_META });
})();
