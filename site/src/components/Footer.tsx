import Link from "next/link";

import { footerNav, site } from "@/content/site";
import { mailUrl, telUrl, whatsappUrl } from "@/lib/links";
import { SectionTitle } from "./Decor";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Signature } from "./Signature";
import styles from "./Footer.module.css";

/** Contact block over pale mountains ("דברו איתי"), then a slim legal strip. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <svg className={styles.mountains} viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0,250 C120,190 210,150 330,180 C450,210 520,120 650,110 C780,100 860,190 990,170 C1120,150 1210,90 1330,120 C1390,135 1420,150 1440,160 L1440,420 L0,420 Z" fill="#e3eef1" />
          <path d="M0,310 C140,250 260,260 380,280 C520,300 600,220 740,230 C880,240 960,300 1100,280 C1230,262 1330,220 1440,240 L1440,420 L0,420 Z" fill="#d6e6ea" />
          <path d="M0,370 C160,330 300,340 460,350 C620,360 720,310 880,320 C1040,330 1160,370 1300,355 C1370,348 1410,340 1440,338 L1440,420 L0,420 Z" fill="#c9dde2" />
        </svg>

        <div className={`container ${styles.inner}`}>
          <div className={styles.block}>
            <SectionTitle as="h2" className={styles.title}>
              דברו איתי
            </SectionTitle>
            <p className={styles.intro}>בא לך לשאול שאלה? אשמח שתפני אליי :)</p>
            <ul role="list" className={styles.list}>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> וואטסאפ
                </a>
              </li>
              <li>
                <a href={telUrl}>
                  <PhoneIcon /> <span className="ltr">{site.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={mailUrl}>
                  <MailIcon /> <span className="ltr">{site.contact.email}</span>
                </a>
              </li>
              <li className={styles.plain}>
                <PinIcon /> {site.contact.location}
              </li>
            </ul>
            <div className={styles.social}>
              <a href={site.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="פייסבוק">
                <FacebookIcon />
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className={styles.brand}>
            <Signature className={styles.signature} />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <div className={`container ${styles.legalInner}`}>
          <nav aria-label="ניווט בתחתית העמוד">
            <ul role="list" className={styles.legalNav}>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>
            © <span className="ltr">{year}</span> כל הזכויות שמורות ל{site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
