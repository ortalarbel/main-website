import type { Metadata } from "next";

import { ArrowLink, ButtonLink, WhatsAppButton } from "@/components/Actions";
import { SectionTitle, TornEdge } from "@/components/Decor";
import { JournalList } from "@/components/JournalList";
import { CompassIcon, HeartHandsIcon, SeatedIcon } from "@/components/LineIcons";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { PhotoBand } from "@/components/PhotoBand";
import { ProgramCards } from "@/components/ProgramCards";
import { Signature } from "@/components/Signature";
import { Testimonials } from "@/components/Testimonials";
import { articles } from "@/content/articles";
import { home } from "@/content/home";
import { programs } from "@/content/programs";
import { generalWhatsappMessage, site } from "@/content/site";
import { story } from "@/content/story";
import { getTestimonial, testimonials } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";
import styles from "./home.module.css";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} | ${site.tagline}` },
};

const methodIcons = [HeartHandsIcon, SeatedIcon, CompassIcon];

export default function HomePage() {
  const featured = getTestimonial("critic-dialogue");
  const others = testimonials.filter((t) => t.id !== featured.id);

  return (
    <>
      {/* Hero */}
      <PageHero
        size="full"
        image="ortalForest"
        titleId="hero-title"
        title={<Signature write className={styles.heroSignature} label={site.name} />}
        subtitle={home.hero.subtitle}
      >
        <ButtonLink href={home.hero.primary.href} variant="light">
          {home.hero.primary.label}
        </ButtonLink>
      </PageHero>

      {/* Who I am */}
      <section className={`section bg-cream ${styles.about}`} aria-labelledby="about-title">
        <div className="container">
          <div className={styles.aboutHead}>
            <Photo name="ortalMountain" sizes="(max-width: 40rem) 60vw, 16rem" className={`${styles.aboutPhoto} blob-1`} />
            <SectionTitle id="about-title">{home.about.heading}</SectionTitle>
          </div>
          <div className={`center ${styles.aboutText}`}>
            <p className={styles.hello}>{home.about.hello}</p>
            <p className={styles.aboutLead}>{home.about.title}</p>
            {home.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <blockquote className={styles.aboutQuote}>
              <p>{story.quote}</p>
            </blockquote>
            <Signature write className={styles.aboutSignature} />
            <ArrowLink href={home.about.link.href}>{home.about.link.label}</ArrowLink>
          </div>
        </div>
      </section>

      <PhotoBand image="pineForest" focus="50% 40%" />

      {/* Recognition */}
      <section className="section bg-white" aria-labelledby="recognition-title">
        <div className={`container center ${styles.recognition}`}>
          <SectionTitle id="recognition-title">{home.recognition.heading}</SectionTitle>
          <p className="t-lead">{home.recognition.title}</p>
          <ul role="list" className={styles.critic} aria-label="מה שהקול הביקורתי אומר">
            {home.recognition.critic.map((line) => (
              <li key={line}>״{line}״</li>
            ))}
          </ul>
          <p className={styles.answer}>{home.recognition.answer}</p>
          <p className={styles.states}>{home.recognition.states.join(" • ")}</p>
          <p className={styles.closeLine}>{home.recognition.close}</p>
        </div>
      </section>

      {/* Programs: "upcoming events" */}
      <section className="section bg-cream" aria-labelledby="programs-title">
        <div className="container">
          <div className={`center ${styles.sectionHead}`}>
            <SectionTitle id="programs-title">{home.programs.title}</SectionTitle>
            <p className="t-lead">{home.programs.intro}</p>
            <WhatsAppButton message={generalWhatsappMessage}>{home.programs.whatsappLabel}</WhatsAppButton>
          </div>
          <ProgramCards programs={programs} />
        </div>
        <TornEdge color="var(--white)" seed={31} />
      </section>

      {/* How I work: three columns with line icons */}
      <section className="section bg-white" aria-labelledby="method-title">
        <div className="container">
          <div className={`center ${styles.sectionHead}`}>
            <SectionTitle id="method-title">{story.how.title}</SectionTitle>
          </div>
          <ul role="list" className={styles.method}>
            {story.how.items.map((item, i) => {
              const Icon = methodIcons[i % methodIcons.length];
              return (
                <li key={item.title}>
                  <Icon className={styles.methodIcon} />
                  <h3 className={styles.methodTitle}>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              );
            })}
          </ul>
          <div className="actions center">
            <ButtonLink href="/one-on-one">לליווי האישי</ButtonLink>
            <ButtonLink href="/programs" variant="quiet">
              לכל התוכניות
            </ButtonLink>
          </div>
        </div>
      </section>

      <PhotoBand image="forestPath" tall tornInto="var(--cream)" />

      {/* Beliefs, set like the reference site's centered editorial block */}
      <section className="section bg-cream" aria-labelledby="beliefs-title">
        <div className={`container center ${styles.beliefs}`}>
          <SectionTitle id="beliefs-title">{home.beliefs.title}</SectionTitle>
          <ul role="list" className={styles.beliefList}>
            {home.beliefs.items.map((b) => (
              <li key={b.statement}>
                <strong>{b.statement}</strong> {b.note}
              </li>
            ))}
          </ul>
          <p className={styles.method2}>{home.beliefs.method}</p>
          <Photo name="ortalForest" alt="" sizes="16rem" focus="72% 45%" className={`${styles.beliefsPhoto} blob-3`} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sand" aria-labelledby="voices-title">
        <div className="container">
          <div className={`center ${styles.sectionHead}`}>
            <SectionTitle id="voices-title">{home.testimonials.title}</SectionTitle>
          </div>
          <Testimonials featured={featured} others={others} note={home.testimonials.note} />
        </div>
      </section>

      {/* Journal */}
      <section className="section bg-cream" aria-labelledby="journal-title">
        <div className="container">
          <div className={`center ${styles.sectionHead}`}>
            <SectionTitle id="journal-title">{home.journal.title}</SectionTitle>
          </div>
          <JournalList articles={articles} />
          <div className={`actions center ${styles.after}`}>
            <ButtonLink href={home.journal.all.href} variant="quiet">
              {home.journal.all.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Closing invitation */}
      <section className="section bg-white" aria-labelledby="closing-title">
        <div className={`container center ${styles.closing}`}>
          <SectionTitle id="closing-title">{home.closing.title}</SectionTitle>
          <p className="t-lead">{home.closing.body}</p>
          <div className="actions center">
            <ButtonLink href={home.closing.primary.href}>{home.closing.primary.label}</ButtonLink>
            <WhatsAppButton variant="quiet" message={generalWhatsappMessage}>
              {home.closing.whatsappLabel}
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
