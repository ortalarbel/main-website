import Link from "next/link";
import type { ReactNode } from "react";

import { whatsappUrl } from "@/lib/links";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

type Variant = "primary" | "quiet" | "light";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^https?:/.test(href);
  const cls = `btn btn--${variant} ${className}`;
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

/** Opens WhatsApp with a pre-filled message. */
export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      {children}
      <span className="visually-hidden"> (נפתח בוואטסאפ)</span>
    </a>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`link-arrow ${className}`} href={href}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
