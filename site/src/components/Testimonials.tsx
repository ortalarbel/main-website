import type { Testimonial } from "@/content/testimonials";
import styles from "./Testimonials.module.css";

/**
 * One testimonial set large, the rest as quieter, staggered notes.
 * Anonymous by design: the originals carry no names.
 */
export function Testimonials({
  featured,
  others = [],
  note,
}: {
  featured: Testimonial;
  others?: Testimonial[];
  note?: string;
}) {
  return (
    <div className={styles.wrap}>
      <figure className={styles.featured}>
        <span className={styles.mark} aria-hidden="true">
          ״
        </span>
        <blockquote className={styles.featuredQuote}>
          {featured.text.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </blockquote>
        {featured.context ? <figcaption className="t-meta">{featured.context}</figcaption> : null}
      </figure>

      {others.length > 0 ? (
        <ul role="list" className={styles.others}>
          {others.map((t) => (
            <li key={t.id}>
              <figure className={styles.small}>
                <blockquote>
                  {t.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </blockquote>
                {t.context ? <figcaption className="t-meta">{t.context}</figcaption> : null}
              </figure>
            </li>
          ))}
        </ul>
      ) : null}

      {note ? <p className={`t-meta ${styles.note}`}>{note}</p> : null}
    </div>
  );
}
