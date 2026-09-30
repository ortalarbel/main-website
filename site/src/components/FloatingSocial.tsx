import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";
import styles from "./FloatingSocial.module.css";

/** Social shortcuts floating at the side of the screen (desktop). */
export function FloatingSocial() {
  return (
    <aside className={styles.rail} aria-label="רשתות חברתיות">
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ">
        <WhatsAppIcon />
      </a>
      <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם">
        <InstagramIcon />
      </a>
      <a href={site.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="פייסבוק">
        <FacebookIcon />
      </a>
    </aside>
  );
}
