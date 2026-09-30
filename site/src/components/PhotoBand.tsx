import type { ImageKey } from "@/content/images";
import { TornEdge } from "./Decor";
import { Photo } from "./Photo";
import styles from "./PhotoBand.module.css";

/** A full-bleed photographic strip between sections. */
export function PhotoBand({
  image,
  focus,
  tall = false,
  tornInto,
}: {
  image: ImageKey;
  focus?: string;
  tall?: boolean;
  /** Colour of the following section, to tear the band's bottom edge into it. */
  tornInto?: string;
}) {
  return (
    <div className={`${styles.band} ${tall ? styles.tall : ""}`}>
      <Photo name={image} alt="" sizes="100vw" focus={focus} className={styles.photo} />
      {tornInto ? <TornEdge color={tornInto} seed={tall ? 23 : 17} /> : null}
    </div>
  );
}
