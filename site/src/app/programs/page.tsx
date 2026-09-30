import type { Metadata } from "next";

import { WhatsAppButton } from "@/components/Actions";
import { SectionTitle, TornEdge } from "@/components/Decor";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProgramCards } from "@/components/ProgramCards";
import { programHref, programs } from "@/content/programs";
import { absoluteUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import styles from "./programs.module.css";

export const metadata: Metadata = pageMetadata({
  title: "תוכניות: סדנה, קורס וליווי אישי",
  description:
    "הסדנה החינמית ״התנועה הראשונה״, הקורס ״מנהיגות פנימית״ וליווי אישי לביטוי עצמי מלא, לגילוי אזור הגאונות ולמטיילת העצמאית. עם אורטל ארבל.",
  path: "/programs",
});

export default function ProgramsPage() {
  const group = programs.filter((x) => x.kind === "group");
  const personal = programs.filter((x) => x.kind === "personal");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: programs.map((x, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: x.title,
            url: absoluteUrl(programHref(x)),
          })),
        }}
      />

      <PageHero
        image="pineForest"
        titleId="programs-title"
        title="התוכניות"
        subtitle="סדנה חינמית אחת, קורס של שישה מפגשים, או ליווי אישי שבו כל הזרקור עלייך."
      />

      <section className="section bg-cream" aria-labelledby="group-title">
        <div className="container">
          <div className={`center ${styles.head}`}>
            <SectionTitle id="group-title">בקבוצה</SectionTitle>
            <p className="t-lead">באונליין, עם נשים שמכירות את זה מבפנים.</p>
          </div>
          <ProgramCards programs={group} />
        </div>
        <TornEdge color="var(--white)" seed={19} />
      </section>

      <section className="section bg-white" aria-labelledby="personal-title">
        <div className="container">
          <div className={`center ${styles.head}`}>
            <SectionTitle id="personal-title">אחת על אחת</SectionTitle>
            <p className="t-lead">בקליניקה במושב עין עירון, או באונליין.</p>
          </div>
          <ProgramCards programs={personal} />
        </div>
      </section>

      <section className="section bg-sand" aria-labelledby="unsure-title">
        <div className={`container center ${styles.unsure}`}>
          <SectionTitle id="unsure-title">לא בטוחה מה מתאים לך?</SectionTitle>
          <p className="t-lead">כתבי לי כמה מילים על איפה את נמצאת עכשיו, ונחשוב יחד מה הצעד הנכון.</p>
          <WhatsAppButton message="היי אורטל, אני לא בטוחה איזו תוכנית מתאימה לי. אשמח להתייעץ.">
            להתייעץ בוואטסאפ
          </WhatsAppButton>
        </div>
      </section>
    </>
  );
}
