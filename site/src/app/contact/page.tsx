import type { Metadata } from "next";

import { WhatsAppButton } from "@/components/Actions";
import { SectionTitle } from "@/components/Decor";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { generalWhatsappMessage, site } from "@/content/site";
import { mailUrl, telUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata: Metadata = pageMetadata({
  title: "יצירת קשר",
  description:
    "לשאלה, לתיאום שיחת היכרות או להרשמה: וואטסאפ, טלפון או מייל. אורטל ארבל, קליניקה במושב עין עירון ואונליין.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="forestPath"
        titleId="contact-title"
        title="יצירת קשר"
        subtitle="בא לך לשאול משהו? אשמח שתכתבי לי."
      />
      <section className="section bg-cream" aria-labelledby="channels-title">
        <div className={`container center ${styles.inner}`}>
          <Photo name="ortalMountain" sizes="12rem" className={`${styles.photo} blob-3`} />
          <SectionTitle id="channels-title">דברו איתי</SectionTitle>
          <p className="t-lead">
            הכי מהיר בוואטסאפ. אפשר לשאול על תוכנית, לתאם שיחת היכרות, או פשוט לספר איפה את נמצאת.
          </p>
          <WhatsAppButton message={generalWhatsappMessage} className={styles.whatsapp}>
            לכתוב לי בוואטסאפ
          </WhatsAppButton>

          <ul role="list" className={styles.channels}>
            <li>
              <PhoneIcon />
              <span className={styles.label}>טלפון</span>
              <a href={telUrl} className="ltr">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <MailIcon />
              <span className={styles.label}>מייל</span>
              <a href={mailUrl} className="ltr">
                {site.contact.email}
              </a>
            </li>
            <li>
              <PinIcon />
              <span className={styles.label}>איפה</span>
              <span>{site.contact.location}</span>
            </li>
            <li>
              <InstagramIcon />
              <span className={styles.label}>{site.social.instagram.label}</span>
              <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" className="ltr">
                {site.social.instagram.handle}
              </a>
            </li>
            <li>
              <FacebookIcon />
              <span className={styles.label}>{site.social.facebook.label}</span>
              <a href={site.social.facebook.url} target="_blank" rel="noopener noreferrer" className="ltr">
                {site.social.facebook.handle}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
