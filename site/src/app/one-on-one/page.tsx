import type { Metadata } from "next";

import { WhatsAppButton } from "@/components/Actions";
import { ClosingInvite } from "@/components/ClosingInvite";
import { SectionTitle, TornEdge } from "@/components/Decor";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { ProgramCards } from "@/components/ProgramCards";
import { StickyRegister } from "@/components/StickyRegister";
import { Testimonials } from "@/components/Testimonials";
import { Todo } from "@/components/Todo";
import { oneOnOne } from "@/content/one-on-one";
import { getProgram, type Program } from "@/content/programs";
import { site } from "@/content/site";
import { getTestimonial } from "@/content/testimonials";
import { absoluteUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import p from "@/components/page.module.css";
import styles from "./one-on-one.module.css";

export const metadata: Metadata = pageMetadata({
  title: oneOnOne.seo.title,
  description: oneOnOne.seo.description,
  path: "/one-on-one",
});

export default function OneOnOnePage() {
  const tracks = ["zone-of-genius", "solo-traveler"].map(getProgram).filter((x): x is Program => Boolean(x));
  const featured = getTestimonial("center");
  const others = [getTestimonial("guided-imagery"), getTestimonial("generosity")];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ליווי אישי: אימון לביטוי עצמי מלא",
          description: oneOnOne.seo.description,
          url: absoluteUrl("/one-on-one"),
          provider: { "@type": "Person", "@id": absoluteUrl("/#ortal"), name: site.name },
          areaServed: "IL",
        }}
      />

      <PageHero image="ortalForest" focus="72% 45%" titleId="oneonone-title" title={oneOnOne.title} subtitle={oneOnOne.headline}>
        <div id="register-hero">
          <WhatsAppButton message={oneOnOne.cta.message}>{oneOnOne.cta.label}</WhatsAppButton>
        </div>
      </PageHero>

      <section className="section bg-cream" aria-label="על הליווי">
        <div className={`container center ${styles.lead}`}>
          <p>{oneOnOne.lead}</p>
        </div>
      </section>

      {/* Situations */}
      <section className="section bg-white" aria-labelledby="situations-title">
        <div className={`container ${p.split}`}>
          <SectionTitle id="situations-title">{oneOnOne.situations.title}</SectionTitle>
          <ul role="list" className={`${p.lines} ${p.linesLarge}`}>
            {oneOnOne.situations.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <PhotoBand image="pineForest" focus="50% 60%" tornInto="var(--cream)" />

      {/* Process */}
      <section className="section bg-cream" aria-labelledby="process-title">
        <div className="container center">
          <SectionTitle id="process-title">{oneOnOne.process.title}</SectionTitle>
          <ol role="list" className={styles.steps}>
            {oneOnOne.process.steps.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNum} aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="t-h3">{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <p className={styles.place}>
            <strong>{oneOnOne.place.title}:</strong> {oneOnOne.place.body}
          </p>
          <Todo>אורך מפגש, משך תהליך טיפוסי ומחיר</Todo>
        </div>
      </section>

      {/* Course or 1:1 */}
      <section className="section bg-white" aria-labelledby="compare-title">
        <div className="container center">
          <SectionTitle id="compare-title">{oneOnOne.compare.title}</SectionTitle>
          <div className={styles.compare}>
            <div className={styles.compareCol}>
              <h3 className="t-h3">{oneOnOne.compare.course.label}</h3>
              <p>{oneOnOne.compare.course.body}</p>
            </div>
            <div className={`${styles.compareCol} ${styles.compareLit}`}>
              <h3 className="t-h3">{oneOnOne.compare.personal.label}</h3>
              <p>{oneOnOne.compare.personal.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sand" aria-labelledby="voices-title">
        <div className="container">
          <div className={`center ${styles.head}`}>
            <SectionTitle id="voices-title">במילים שלהן</SectionTitle>
          </div>
          <Testimonials featured={featured} others={others} note="המשובים מובאים כפי שנכתבו, ללא שמות." />
        </div>
        <TornEdge color="var(--cream)" seed={37} />
      </section>

      {/* Focused tracks */}
      <section className="section bg-cream" aria-labelledby="tracks-title">
        <div className="container">
          <div className={`center ${styles.head}`}>
            <SectionTitle id="tracks-title">{oneOnOne.tracks.title}</SectionTitle>
            <p className="t-lead">{oneOnOne.tracks.intro}</p>
          </div>
          <ProgramCards programs={tracks} />
        </div>
      </section>

      <div id="register-close">
        <ClosingInvite title={oneOnOne.cta.title} body={oneOnOne.cta.body}>
          <WhatsAppButton message={oneOnOne.cta.message}>{oneOnOne.cta.label}</WhatsAppButton>
        </ClosingInvite>
      </div>

      <StickyRegister title={oneOnOne.title} watchId="register-hero" hideNearId="register-close">
        <div className="actions">
          <WhatsAppButton message={oneOnOne.cta.message}>שיחת היכרות</WhatsAppButton>
        </div>
      </StickyRegister>
    </>
  );
}
