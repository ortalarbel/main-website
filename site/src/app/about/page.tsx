import type { Metadata } from "next";

import { ButtonLink, WhatsAppButton } from "@/components/Actions";
import { ClosingInvite } from "@/components/ClosingInvite";
import { SectionTitle, TornEdge } from "@/components/Decor";
import { JsonLd } from "@/components/JsonLd";
import { CompassIcon, HeartHandsIcon, SeatedIcon } from "@/components/LineIcons";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { PhotoBand } from "@/components/PhotoBand";
import { Signature } from "@/components/Signature";
import { Todo } from "@/components/Todo";
import { generalWhatsappMessage } from "@/content/site";
import { story } from "@/content/story";
import { absoluteUrl } from "@/lib/links";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata: Metadata = pageMetadata({
  title: "הסיפור שלי",
  description:
    "אורטל ארבל, בת 39, מלווה נשים ומנחה סדנאות כשבע שנים. על קול ביקורתי חזק, על השיח שלמדה לנהל איתו, ועל החיים שבנתה מחדש.",
  path: "/about",
  type: "profile",
});

const icons = [HeartHandsIcon, SeatedIcon, CompassIcon];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absoluteUrl("/about"),
          inLanguage: "he-IL",
          mainEntity: personSchema(),
        }}
      />

      <PageHero image="ortalForest" focus="70% 40%" titleId="about-title" title={story.title} subtitle={story.opening} />

      {/* Opening */}
      <section className="section bg-cream" aria-label="נעים להכיר">
        <div className={`container center ${styles.opening}`}>
          <Photo name="ortalMountain" priority sizes="16rem" className={`${styles.portrait} blob-2`} />
          <p className={styles.lead}>{story.lead}</p>
          {story.chapters.map((c) => (
            <div key={c.title} className={styles.chapter}>
              <h2 className={styles.chapterTitle}>{c.title}</h2>
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <PhotoBand image="pineForest" focus="50% 30%" tornInto="var(--white)" />

      {/* What changed */}
      <section className="section bg-white" aria-labelledby="changes-title">
        <div className={`container center ${styles.changes}`}>
          <SectionTitle id="changes-title">{story.changes.title}</SectionTitle>
          <ol role="list" className={styles.changesList}>
            {story.changes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className={styles.movement}>
            <h2 className="t-h3">{story.movement.title}</h2>
            {story.movement.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section bg-sand" aria-label="ציטוט">
        <div className={`container center ${styles.quoteWrap}`}>
          <span className={styles.mark} aria-hidden="true">
            ״
          </span>
          <blockquote className={styles.quote}>
            <p>{story.quote}</p>
          </blockquote>
          <Signature write className={styles.signature} />
        </div>
        <TornEdge color="var(--cream)" seed={41} />
      </section>

      {/* Today */}
      <section className="section bg-cream" aria-labelledby="today-title">
        <div className={`container center ${styles.today}`}>
          <SectionTitle id="today-title">{story.today.title}</SectionTitle>
          {story.today.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Todo>הרחבת הסיפור: רקע מקצועי והכשרות, נקודת המפנה, מה לימד הטיול</Todo>
        </div>
      </section>

      {/* How I work */}
      <section className="section bg-white" aria-labelledby="how-title">
        <div className="container center">
          <SectionTitle id="how-title">{story.how.title}</SectionTitle>
          <ul role="list" className={styles.how}>
            {story.how.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={item.title}>
                  <Icon className={styles.icon} />
                  <h3 className="t-h3">{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              );
            })}
          </ul>
          <p className={styles.place}>{story.how.place}</p>
          <div className="actions center">
            <ButtonLink href="/programs">לתוכניות</ButtonLink>
            <ButtonLink href="/one-on-one" variant="quiet">
              לליווי האישי
            </ButtonLink>
          </div>
        </div>
      </section>

      <ClosingInvite title="רוצה לעבוד יחד?" body="אפשר להתחיל בסדנה החינמית, או פשוט לכתוב לי ולספר איפה את נמצאת.">
        <ButtonLink href="/programs/first-move">להרשמה לסדנה החינמית</ButtonLink>
        <WhatsAppButton variant="quiet" message={generalWhatsappMessage}>
          לכתוב לי בוואטסאפ
        </WhatsAppButton>
      </ClosingInvite>
    </>
  );
}
