/**
 * Testimonials, quoted verbatim from the original site.
 * The originals carry no names. Do not add names, roles or photos
 * unless the writer has approved it.
 *
 * TODO(testimonials): ask participants for permission to add a first name / context.
 */

export type Testimonial = {
  id: string;
  /** Paragraphs, verbatim. */
  text: string[];
  /** Only what the text itself says about its context. Never invented. */
  context?: string;
  /** Which offerings this quote genuinely relates to (used for filtering). */
  relatesTo: Array<"course" | "personal" | "general">;
};

export const testimonials: Testimonial[] = [
  {
    id: "critic-dialogue",
    text: [
      "נתחיל בזה שבכלל האתגר הזה אפשר לי להתבונן בו מעבר לקול המטרטר המעצבנים, לראות כמה הוא מנהל אותי ונמצא כל הזמן ברקע ולהתחיל לנהל איתו שיח. דרך לראות את הרווחים שבאים איתו וקצת אפילו לשחק איתו במחשבה. זה ללא ספק שינה את החוויה למולו וזה כשלעצמו כבר מרגיע. ממליצה בחום על הקורס ונראה לי משהו שכולנו ובמיוחד כנשים מלאות נזיפה עצמית.",
    ],
    context: "משתתפת בקורס",
    relatesTo: ["course"],
  },
  {
    id: "center",
    text: [
      "תודה אורטל על הכל. יותר מתמיד אני מחוברת לסנטר שלי, מקשיבה לעצמי גם בנפילות רגשיות ובמחשבה עליהן מוצאת שאני מרימה ראש ויודעת שצועדת קדימה וזה מה שיפה בתהליך. נהנית מהמסע מהיופי שלו והפתעות שעוד יקרו בדרך. מוכנה ומזומנה כמו שאומרים. שלב ההגבהה הנוסף הגיע",
    ],
    relatesTo: ["personal", "general"],
  },
  {
    id: "guided-imagery",
    text: [
      "ההכוונה שלך הייתה מדוייקת ועזרה ממש לדייק ולזקק את הדבר שהתקשיתי למצוא בעצמי. עפתי על הדמיון המודרך! היה משמעותי.",
    ],
    relatesTo: ["personal", "general"],
  },
  {
    id: "generosity",
    text: ["תודה על האבחנות, החרדות, השיקופים.", "תודה על נדיבות הלב.", "נהנתי מאוד."],
    relatesTo: ["general"],
  },
];

export function getTestimonial(id: string): Testimonial {
  const t = testimonials.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown testimonial: ${id}`);
  return t;
}
