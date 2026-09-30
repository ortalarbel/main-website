import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/** Emotional work: a heart held in two open hands. */
export function HeartHandsIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M24 22c-2.2-3.6-8-3.2-8 1.2 0 3.6 4.6 6.4 8 9 3.4-2.6 8-5.4 8-9 0-4.4-5.8-4.8-8-1.2Z" />
      <path d="M6 26c0 6 4 10 10 12l6 1.5M42 26c0 6-4 10-10 12l-6 1.5" />
      <path d="M6 26v-6M42 26v-6" />
    </svg>
  );
}

/** Experiential practice: a seated figure. */
export function SeatedIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="11" r="4" />
      <path d="M24 16v12" />
      <path d="M24 20c-4 1-7 4-8 8M24 20c4 1 7 4 8 8" />
      <path d="M12 36c4-3 8-4 12-4s8 1 12 4" />
      <path d="M10 38h28" />
    </svg>
  );
}

/** Practical tools: a compass. */
export function CompassIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="16" />
      <path d="m29.5 18.5-3 8-8 3 3-8Z" />
      <path d="M24 6v3M24 39v3M6 24h3M39 24h3" />
    </svg>
  );
}
