import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

/** "Forward" in RTL points left. */
export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props} className={`icon-arrow ${props.className ?? ""}`}>
      <path d="M20 12H4.5" />
      <path d="M10.5 6 4.5 12l6 6" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.6 20.4 5 16.2A8.4 8.4 0 1 1 8 19.2Z" />
      <path d="M9 8.6c.1-.4.5-.7.9-.7h.4c.2 0 .4.1.5.3l.8 1.8c.1.2 0 .5-.1.6l-.6.7c.6 1.2 1.5 2.1 2.7 2.7l.7-.6c.2-.1.4-.2.6-.1l1.8.8c.2.1.3.3.3.5v.4c0 .4-.3.8-.7.9-2.9.8-7.1-3.4-6.3-6.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 8.5h2V5h-2.3C11.7 5 10.5 6.6 10.5 9v2H8v3.4h2.5V21H14v-6.6h2.3l.5-3.4H14V9.4c0-.6.3-.9.5-.9Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.5 4-2 1.3a11 11 0 0 0 7 7l1.3-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
