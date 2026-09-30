import Link from "next/link";

import { readingMinutes, type Article } from "@/content/articles";
import { Photo } from "./Photo";
import styles from "./JournalList.module.css";

const shapes = ["blob-3", "blob-1", "blob-2"];

/** Articles as centered cards with organic photo shapes. */
export function JournalList({
  articles,
  headingLevel = "h3",
}: {
  articles: Article[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <ul role="list" className={styles.grid}>
      {articles.map((a, i) => (
        <li key={a.slug}>
          <article className={styles.card}>
            <Photo
              name={a.image}
              alt=""
              sizes="(max-width: 40rem) 80vw, 28vw"
              className={`${styles.photo} ${shapes[i % shapes.length]}`}
            />
            <p className={styles.meta}>{readingMinutes(a)} דקות קריאה</p>
            <Heading className={styles.title}>
              <Link href={`/journal/${a.slug}`} className={styles.link}>
                {a.title}
              </Link>
            </Heading>
            <p className={styles.excerpt}>{a.excerpt}</p>
            <span className={`btn btn--quiet ${styles.btn}`} aria-hidden="true">
              לקריאה
            </span>
          </article>
        </li>
      ))}
    </ul>
  );
}
