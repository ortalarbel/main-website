import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLink } from "@/components/Actions";
import { ClosingInvite } from "@/components/ClosingInvite";
import { SectionTitle, TornEdge } from "@/components/Decor";
import { PlusIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { RegisterActions } from "@/components/RegisterActions";
import { StickyRegister } from "@/components/StickyRegister";
import { Testimonials } from "@/components/Testimonials";
import { Todo } from "@/components/Todo";
import { getArticle } from "@/content/articles";
import { detailPrograms, getProgram, type Program } from "@/content/programs";
import { site } from "@/content/site";
import { getTestimonial } from "@/content/testimonials";
import { absoluteUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import p from "@/components/page.module.css";
import styles from "./program.module.css";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return detailPrograms.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return pageMetadata({
    title: program.seo.title,
    description: program.seo.description,
    path: `/programs/${program.slug}`,
  });
}

function programSchema(program: Program) {
  const provider = { "@type": "Person", "@id": absoluteUrl("/#ortal"), name: site.name };
  const url = absoluteUrl(`/programs/${program.slug}`);
  if (program.kind === "group") {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      name: program.title,
      description: program.seo.description,
      url,
      inLanguage: "he",
      provider,
      hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
      ...(program.slug === "first-move" ? { isAccessibleForFree: true } : {}),
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: program.title,
    description: program.seo.description,
    url,
    provider,
    areaServed: "IL",
  };
}

export default async function ProgramPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program || program.href) notFound();

  const quotes = program.testimonialIds.map(getTestimonial);
  const article = program.relatedArticle ? getArticle(program.relatedArticle) : undefined;
  const { price, nextDate } = program.registration;

  return (
    <>
      <JsonLd data={programSchema(program)} />

      <PageHero
        image={program.image}
        titleId="program-title"
        title={program.title}
        subtitle={program.tagline}
      >
        <div id="register-hero">
          <RegisterActions program={program} />
        </div>
      </PageHero>

      {/* Intro */}
      <section className="section bg-cream" aria-label="על התוכנית">
        <div className={`container center ${styles.intro}`}>
          <nav aria-label="פירורי לחם" className={styles.crumb}>
            <Link href="/programs">תוכניות</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{program.title}</span>
          </nav>
          <p className={styles.format}>{program.format}</p>
          {program.intro.map((para) => (
            <p key={para} className={styles.introText}>
              {para}
            </p>
          ))}
          <p className={styles.registerNote}>
            {nextDate ? <>המועד הקרוב: {nextDate}. </> : null}
            {program.registration.checkoutUrl
              ? "ההרשמה מתבצעת בעמוד התשלום."
              : "הכפתור פותח הודעה בוואטסאפ, ואני חוזרת אלייך עם כל הפרטים."}
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section bg-white" aria-labelledby="audience-title">
        <div className={`container ${p.split}`}>
          <SectionTitle id="audience-title">{program.audience.title}</SectionTitle>
          <ul role="list" className={`${p.lines} ${p.linesLarge}`}>
            {program.audience.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Context */}
      {program.context ? (
        <section className="section bg-sand" aria-labelledby="context-title">
          <div className={`container center ${styles.context}`}>
            <SectionTitle id="context-title">{program.context.title}</SectionTitle>
            {program.context.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <TornEdge color="var(--cream)" seed={29} />
        </section>
      ) : null}

      {/* What we'll do */}
      <section className="section bg-cream" aria-labelledby="explore-title">
        <div className={`container ${p.split}`}>
          <SectionTitle id="explore-title">{program.explore.title}</SectionTitle>
          <ol role="list" className={styles.explore}>
            {program.explore.items.map((item, i) => (
              <li key={item}>
                <span className={styles.step} aria-hidden="true">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Details */}
      <section className="section bg-white" aria-labelledby="details-title">
        <div className={`container ${p.split}`}>
          <SectionTitle id="details-title">פרטים</SectionTitle>
          <div className={styles.detailsCol}>
            <dl className={p.details}>
              {program.details.map((d) => (
                <div key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
              {price && !program.details.some((d) => d.label === "עלות") ? (
                <div>
                  <dt>מחיר</dt>
                  <dd>{price}</dd>
                </div>
              ) : null}
              <div>
                <dt>מועד</dt>
                <dd>
                  {nextDate ?? "המועד הקרוב מתעדכן בוואטסאפ"}
                  {nextDate ? null : (
                    <>
                      {" "}
                      <Todo>{`registration.nextDate for ${program.slug}`}</Todo>
                    </>
                  )}
                </dd>
              </div>
            </dl>
            {!price && program.slug !== "first-move" ? <Todo>{`registration.price for ${program.slug}`}</Todo> : null}
            <RegisterActions program={program} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {quotes.length > 0 ? (
        <section className="section bg-sand" aria-labelledby="voices-title">
          <div className="container">
            <div className={`center ${styles.head}`}>
              <SectionTitle id="voices-title">במילים שלהן</SectionTitle>
            </div>
            <Testimonials featured={quotes[0]} others={quotes.slice(1)} />
          </div>
        </section>
      ) : null}

      {/* Who guides */}
      <section className="section bg-cream" aria-labelledby="guide-title">
        <div className={`container center ${styles.guide}`}>
          <Photo name="ortalMountain" sizes="12rem" className={`${styles.guidePhoto} blob-1`} />
          <SectionTitle id="guide-title">מי מלווה אותך</SectionTitle>
          <p className={styles.guideLine}>
            אני אורטל ארבל. כל החיים היה לי קול ביקורתי חזק, ולפני שבע שנים למדתי לנהל איתו שיח במקום להיות
            כפופה לו. מאז אני מלווה נשים לעשות את אותו הדבר.
          </p>
          <ArrowLink href="/about">לסיפור שלי</ArrowLink>
        </div>
      </section>

      {/* FAQ */}
      {program.faq.length > 0 ? (
        <section className="section bg-white" aria-labelledby="faq-title">
          <div className={`container ${p.split}`}>
            <SectionTitle id="faq-title">שאלות</SectionTitle>
            <div className={p.faq}>
              {program.faq.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <PlusIcon />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            {article ? (
              <p className={styles.related}>
                לקריאה נוספת:{" "}
                <Link href={`/journal/${article.slug}`} className={styles.relatedLink}>
                  {article.title}
                </Link>
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <div id="register-close">
        <ClosingInvite title={program.title} body={program.tagline} headingId="register-close-title">
          <RegisterActions program={program} />
        </ClosingInvite>
      </div>

      <StickyRegister title={program.title} watchId="register-hero" hideNearId="register-close">
        <RegisterActions program={program} compact />
      </StickyRegister>
    </>
  );
}
