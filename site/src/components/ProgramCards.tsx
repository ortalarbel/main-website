import Link from "next/link";

import { programHref, type Program } from "@/content/programs";
import { Photo } from "./Photo";
import styles from "./ProgramCards.module.css";

const shapes = ["blob-1", "blob-2", "blob-3", "blob-4"];

/** Programs as centered cards with organic photo shapes. */
export function ProgramCards({
  programs,
  headingLevel = "h3",
  buttonLabel = "לפרטים נוספים",
}: {
  programs: Program[];
  headingLevel?: "h2" | "h3";
  buttonLabel?: string;
}) {
  const Heading = headingLevel;
  return (
    <ul role="list" className={styles.grid} data-count={programs.length}>
      {programs.map((p, i) => (
        <li key={p.slug} className={styles.card}>
          <Photo
            name={p.image}
            alt=""
            sizes="(max-width: 40rem) 80vw, (max-width: 70rem) 40vw, 20vw"
            className={`${styles.photo} ${shapes[i % shapes.length]}`}
          />
          <Heading className={styles.title}>{p.title}</Heading>
          <p className={styles.meta}>{p.format}</p>
          <p className={styles.text}>{p.tagline}</p>
          <Link href={programHref(p)} className={`btn btn--primary ${styles.btn}`}>
            {buttonLabel}
            <span className="visually-hidden">: {p.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
