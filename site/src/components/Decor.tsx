import type { ReactNode } from "react";

import styles from "./Decor.module.css";

/**
 * Organic photo shapes, defined once per page and referenced from CSS as
 * clip-path: url(#blob-n). Coordinates are relative to the element's box.
 */
export function BlobDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <clipPath id="blob-1" clipPathUnits="objectBoundingBox">
          <path d="M0.55,0.02 C0.79,0.0 0.97,0.15 0.99,0.37 C1.0,0.56 0.9,0.71 0.78,0.84 C0.66,0.97 0.5,1.0 0.36,0.97 C0.18,0.93 0.04,0.8 0.01,0.6 C-0.01,0.42 0.05,0.24 0.18,0.12 C0.29,0.04 0.42,0.03 0.55,0.02 Z" />
        </clipPath>
        <clipPath id="blob-2" clipPathUnits="objectBoundingBox">
          <path d="M0.32,0.03 C0.5,-0.01 0.74,0.02 0.88,0.12 C1.0,0.22 0.98,0.4 0.97,0.56 C0.96,0.74 0.99,0.9 0.86,0.97 C0.7,1.02 0.46,0.98 0.28,0.97 C0.12,0.96 0.02,0.86 0.02,0.68 C0.02,0.52 0.08,0.4 0.05,0.26 C0.03,0.12 0.14,0.07 0.32,0.03 Z" />
        </clipPath>
        <clipPath id="blob-3" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.0 C0.7,0.01 0.9,0.08 0.97,0.25 C1.03,0.42 0.94,0.55 0.96,0.72 C0.98,0.88 0.84,0.99 0.64,1.0 C0.46,1.01 0.3,0.95 0.16,0.88 C0.03,0.8 -0.01,0.64 0.02,0.47 C0.05,0.3 0.12,0.14 0.26,0.06 C0.34,0.02 0.42,0.0 0.5,0.0 Z" />
        </clipPath>
        <clipPath id="blob-4" clipPathUnits="objectBoundingBox">
          <path d="M0.4,0.02 C0.6,-0.02 0.86,0.04 0.95,0.2 C1.02,0.34 0.95,0.46 0.98,0.62 C1.01,0.8 0.9,0.95 0.7,0.98 C0.52,1.01 0.36,0.97 0.2,0.93 C0.06,0.89 0.0,0.76 0.02,0.6 C0.04,0.46 0.0,0.34 0.05,0.2 C0.1,0.08 0.22,0.05 0.4,0.02 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Deterministic jagged path, so the torn edge renders the same on server and client. */
function tornPath(seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const W = 1440;
  const H = 40;
  let d = `M0,${H} L0,${18 + rand() * 10}`;
  for (let x = 10; x < W; x += 8 + rand() * 14) {
    const wave = Math.sin(x / 140 + seed) * 6;
    d += ` L${x.toFixed(0)},${(14 + wave + rand() * 12).toFixed(1)}`;
  }
  d += ` L${W},${18 + rand() * 10} L${W},${H} Z`;
  return d;
}

/**
 * A torn-paper edge at the bottom of a section, painted in the colour of the
 * section that follows.
 */
export function TornEdge({ color = "var(--cream)", seed = 7, top = false }: { color?: string; seed?: number; top?: boolean }) {
  return (
    <svg
      className={`${styles.torn} ${top ? styles.tornTop : ""}`}
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={tornPath(seed)} fill={color} />
    </svg>
  );
}

/** A heading with a hand-drawn underline beneath its words. */
export function SectionTitle({
  children,
  as: Tag = "h2",
  id,
  className = "",
  size = "h2",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  size?: "h1" | "h2";
}) {
  return (
    <Tag id={id} className={`${styles.title} ${size === "h1" ? "t-h1" : "t-h2"} ${className}`}>
      <span className={styles.titleText}>
        {children}
        <svg className={styles.underline} viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M3,7.5 C48,4.2 96,6.8 150,5.6 C204,4.4 250,7.6 297,5" />
        </svg>
      </span>
    </Tag>
  );
}
