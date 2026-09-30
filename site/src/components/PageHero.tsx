import type { ReactNode } from "react";

import type { ImageKey } from "@/content/images";
import { TornEdge } from "./Decor";
import { Photo } from "./Photo";
import styles from "./PageHero.module.css";

/**
 * Full-bleed photographic header with the title set over the image and a
 * torn-paper edge into the page. Used by the homepage (size "full") and by
 * inner pages (size "page").
 */
export function PageHero({
  image,
  focus,
  title,
  titleId,
  subtitle,
  children,
  size = "page",
  edgeColor = "var(--cream)",
}: {
  image: ImageKey;
  focus?: string;
  title: ReactNode;
  titleId?: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  size?: "full" | "page";
  edgeColor?: string;
}) {
  return (
    <section className={`${styles.hero} ${size === "full" ? styles.full : styles.page}`} aria-labelledby={titleId}>
      <Photo name={image} alt="" priority sizes="100vw" focus={focus} className={styles.photo} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 id={titleId} className={styles.title}>
            {title}
          </h1>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          {children ? <div className={styles.actions}>{children}</div> : null}
        </div>
      </div>
      <TornEdge color={edgeColor} seed={size === "full" ? 11 : 5} />
    </section>
  );
}
