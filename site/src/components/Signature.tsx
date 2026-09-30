"use client";

import { useEffect, useRef, useState } from "react";

import signature from "@/assets/images/signature.png";
import styles from "./Signature.module.css";

/**
 * Ortal's handwritten signature, used as a mask so it takes the text colour.
 * With `write`, it writes itself once, right to left, the first time it
 * enters the viewport.
 */
export function Signature({
  className = "",
  write = false,
  label = "אורטל ארבל",
}: {
  className?: string;
  write?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [written, setWritten] = useState(!write);

  useEffect(() => {
    if (!write || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setWritten(true);
          io.disconnect();
        }
      },
      // The clip-path hides the whole box, so the ratio stays 0: trigger on
      // isIntersecting and use rootMargin to wait until it is well in view.
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [write]);

  return (
    <span
      ref={ref}
      role="img"
      aria-label={label}
      className={`${styles.signature} ${write ? styles.writable : ""} ${className}`}
      data-written={written ? "true" : "false"}
      style={{ ["--sig" as string]: `url(${signature.src})` }}
    />
  );
}
