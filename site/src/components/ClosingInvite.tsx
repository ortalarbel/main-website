import type { ReactNode } from "react";

import { SectionTitle } from "./Decor";
import styles from "./ClosingInvite.module.css";

/** A warm, centered invitation near the end of a page. */
export function ClosingInvite({
  title,
  body,
  children,
  headingId = "closing-title",
}: {
  title: string;
  body?: string;
  children: ReactNode;
  headingId?: string;
}) {
  return (
    <section className={`section bg-cream ${styles.section}`} aria-labelledby={headingId}>
      <div className={`container center ${styles.inner}`}>
        <SectionTitle id={headingId}>{title}</SectionTitle>
        {body ? <p className={`t-lead ${styles.body}`}>{body}</p> : null}
        <div className="actions">{children}</div>
      </div>
    </section>
  );
}
