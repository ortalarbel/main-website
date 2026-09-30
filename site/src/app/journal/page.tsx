import type { Metadata } from "next";

import { JournalList } from "@/components/JournalList";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "מאמרים",
  description:
    "מאמרים של אורטל ארבל על פרפקציוניזם ודחיינות, על אזור הגאונות ועל יציאה לטיול לבד, ועל מה שעוזר לעבור מתקיעות לעשייה.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        image="notebook"
        titleId="journal-title"
        title="מחשבות, בכתב"
        subtitle="על הקול הביקורתי, על פרפקציוניזם ודחיינות, על אזור הגאונות ועל הדרך החוצה."
      />
      <section className="section bg-cream" aria-label="רשימת המאמרים">
        <div className="container">
          <JournalList articles={articles} headingLevel="h2" />
        </div>
      </section>
    </>
  );
}
