"use client";

import { useEffect, useState, type ReactNode } from "react";

import styles from "./StickyRegister.module.css";

/**
 * Mobile-only bottom bar that keeps the registration action within reach once
 * the page's own CTA has scrolled away, and steps aside near the closing CTA.
 */
export function StickyRegister({
  title,
  watchId,
  hideNearId,
  children,
}: {
  title: string;
  /** Element whose visibility hides the bar (the hero CTA). */
  watchId: string;
  /** Element near the end that also hides the bar (the closing CTA). */
  hideNearId?: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const watch = document.getElementById(watchId);
    const near = hideNearId ? document.getElementById(hideNearId) : null;
    if (!watch) return;
    let watchVisible = true;
    let nearVisible = false;
    const update = () => setShow(!watchVisible && !nearVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === watch) watchVisible = e.isIntersecting;
        // Hide while the closing CTA is on screen, and after scrolling past it.
        if (e.target === near) nearVisible = e.isIntersecting || e.boundingClientRect.top < 0;
      }
      update();
    });
    io.observe(watch);
    if (near) io.observe(near);
    return () => io.disconnect();
  }, [watchId, hideNearId]);

  return (
    <div className={styles.bar} data-show={show} aria-hidden={!show} inert={!show}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
}
