"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { mainNav, navCta, site } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { Signature } from "./Signature";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu open: lock scroll, move focus in, Esc closes, keep Tab inside.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a, button") ?? []).concat(
        toggleRef.current ? [toggleRef.current] : [],
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const list = focusables();
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.header} data-scrolled={scrolled || open ? "true" : "false"} data-open={open}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.home} aria-label={`${site.name}, לעמוד הבית`}>
          <Signature className={styles.signature} label={site.name} />
        </Link>

        <nav className={styles.nav} aria-label="ניווט ראשי">
          <ul role="list" className={styles.links}>
            {[{ href: "/", label: "בית" }, ...mainNav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href={navCta.href} className={`btn btn--primary ${styles.cta}`}>
          {navCta.label}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleLabel}>{open ? "סגירה" : "תפריט"}</span>
          <span className={styles.toggleIcon} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={styles.panel}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="תפריט"
      >
        <nav aria-label="ניווט ראשי">
          <ul role="list" className={styles.panelLinks}>
            <li>
              <Link href="/" className={styles.panelLink} aria-current={pathname === "/" ? "page" : undefined}>
                בית
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.panelLink}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelActions}>
          <Link href={navCta.href} className="btn btn--primary">
            {navCta.label}
            <ArrowIcon />
          </Link>
          <a className="btn btn--quiet" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            וואטסאפ
          </a>
        </div>
      </div>
    </header>
  );
}
