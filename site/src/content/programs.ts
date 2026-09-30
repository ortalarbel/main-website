import type { ImageKey } from "./images";

/**
 * Programs and offerings.
 *
 * Everything here is sourced from the original site. Transactional facts that
 * were never published (price, dates, session length, checkout link) are left
 * `undefined` on purpose. The UI then falls back to "details in a short
 * WhatsApp conversation" instead of inventing them. Fill them in when known:
 *
 *   registration.price      e.g. "₪1,200"
 *   registration.nextDate   e.g. "יום ג׳, 4 בנובמבר 2026, 20:00"
 *   registration.checkoutUrl  an external payment/registration page. When set,
 *                             the primary CTA goes there and WhatsApp becomes
 *                             the secondary action.
 */

export type ProgramKind = "group" | "personal";

export type Program = {
  slug: string;
  kind: ProgramKind;
  /** Full title, as used on the detail page. */
  title: string;
  /** Short line under the title in lists. */
  tagline: string;
  /** Short format label, e.g. "קורס אונליין · 6 מפגשים". */
  format: string;
  /** Optional override: this program lives on its own page. */
  href?: string;
  image: ImageKey;
  /** One or two paragraphs that open the detail page. */
  intro: string[];
  audience: { title: string; items: string[] };
  context?: { title: string; body: string[] };
  explore: { title: string; items: string[] };
  /** Only facts that are actually known. */
  details: Array<{ label: string; value: string }>;
  faq: Array<{ q: string; a: string }>;
  testimonialIds: string[];
  cta: {
    label: string;
    /** Pre-filled WhatsApp message. */
    message: string;
  };
  registration: {
    price?: string;
    nextDate?: string;
    checkoutUrl?: string;
  };
  relatedArticle?: string;
  seo: { title: string; description: string };
};

export const programs: Program[] = [
  {
    slug: "first-move",
    kind: "group",
    title: "התנועה הראשונה",
    tagline: "סדנה חווייתית להכרת הקול המבקר, ולצעד הראשון למרות הספקות.",
    format: "סדנת אונליין · ללא עלות",
    image: "forestPath",
    intro: [
      "סדנת אונליין חינמית למי שמרגישה שהספקות והפרפקציוניזם מעכבים אותה מלהוציא את היצירה והעשייה שלה לאור.",
      "נכיר את הקול הביקורתי, נבין מאיפה הוא מגיע, וניקח ממנו צעד אחד קדימה. לא את כל הדרך, רק את התנועה הראשונה.",
    ],
    audience: {
      title: "הסדנה בשבילך אם",
      items: [
        "יש לך יצירה, רעיון או עשייה שמחכים ״שיהיו מוכנים״ כבר הרבה זמן",
        "את מתכננת, משפרת ומלטשת, ומתקשה לשחרר",
        "את מכירה היטב את הקול שאומר ״זה עוד לא מספיק טוב״",
        "בא לך להכיר את הדרך שבה אני עובדת, לפני שמתחייבים לתהליך ארוך",
      ],
    },
    context: {
      title: "למה דווקא תנועה ראשונה",
      body: [
        "כשמנסים לפתור את כל המשימות הגדולות בבת אחת, מנגנוני ההגנה נכנסים לפעולה ושום דבר לא זז. צעד קטן, קל ומהנה לא מעורר אותם.",
        "ברגע שמתחילים לנוע, רמת החרדה יורדת והאנרגיה היצירתית מתחילה לזרום, וקל יותר להמשיך הלאה.",
      ],
    },
    explore: {
      title: "מה נעשה בסדנה",
      items: [
        "נכיר את הקול הביקורתי ונבין מאיפה הוא מגיע",
        "נקבל כלים מעשיים ראשונים להתמודדות איתו",
        "נחווה תנועה ראשונה: צעד שמניע את העשייה קדימה, למרות הספקות והפחדים",
        "נתרגל עמידה מלאה מאחורי היצירה שלך",
      ],
    },
    details: [
      { label: "פורמט", value: "סדנת אונליין חווייתית" },
      { label: "עלות", value: "ללא עלות" },
    ],
    faq: [
      { q: "כמה זה עולה?", a: "הסדנה חינמית." },
      { q: "איפה זה מתקיים?", a: "באונליין, כך שאפשר להצטרף מכל מקום." },
      {
        q: "איך נרשמים?",
        a: "שולחים לי הודעה בוואטסאפ, ואני חוזרת עם המועד הקרוב ופרטי ההצטרפות.",
      },
    ],
    testimonialIds: [],
    cta: {
      label: "אני רוצה להצטרף לסדנה",
      message: "היי אורטל, אשמח להצטרף לסדנה החינמית ״התנועה הראשונה״. מתי המפגש הקרוב?",
    },
    // TODO(first-move): next workshop date/time and a sign-up link (e.g. a form or Zoom registration).
    registration: {},
    relatedArticle: "perfectionism-and-procrastination",
    seo: {
      title: "התנועה הראשונה: סדנת אונליין חינמית",
      description:
        "סדנת אונליין חינמית עם אורטל ארבל: להכיר את הקול הביקורתי, לקבל כלים ראשונים ולחוות את התנועה הראשונה שמניעה את העשייה קדימה, למרות הספקות.",
    },
  },
  {
    slug: "inner-leadership",
    kind: "group",
    title: "מנהיגות פנימית",
    tagline: "שישה מפגשים מעמיקים לניהול הקול הביקורתי.",
    format: "קורס אונליין · 6 מפגשים",
    image: "pineForest",
    intro: [
      "קורס אונליין שמשלב כלים רגשיים ופרקטיים לניהול הפרפקציוניזם והביקורת העצמית, כדי שתוכלי להביא את עצמך לידי ביטוי אותנטי ומשוחרר בעבודה, ביצירה ובחיים האישיים.",
      "מנהיגות פנימית היא היכולת לזהות את הקול המבקר, בלי לתת לו לנהל את הבחירות שלך.",
    ],
    audience: {
      title: "הקורס בשבילך אם",
      items: [
        "את עצמאית, יוצרת או יזמית, עם קול פנימי ביקורתי חזק",
        "את נוטה לפרפקציוניזם, ומשלמת עליו בתקיעות, בדחיינות ובסטרס",
        "העשייה שלך מרגישה כמו מרדף אינסופי, גם כשהיא הולכת טוב",
        "את רוצה כלים לעבודה בתוך קבוצה של נשים שמכירות את זה מבפנים",
      ],
    },
    context: {
      title: "מתחת למעטה המצוינות",
      body: [
        "פרפקציוניזם נראה כמו שאיפה למצוינות, אבל לעיתים קרובות מסתתר מתחתיו פחד: מביקורת, מכישלון, ולפעמים אפילו מהצלחה. כל עוד הפרויקט לא מוכן לגמרי, לא צריך להעמיד אותו למבחן המציאות.",
        "השחרור ממנו לא קשור לירידה באיכות העבודה. הוא קשור ליכולת לפעול למרות חוסר הוודאות והחשש הטבעי.",
      ],
    },
    explore: {
      title: "מה נעשה בששת המפגשים",
      items: [
        "נחליף את השיח הפנימי הכוחני בשיח רך ומאפשר",
        "ניצור עקביות והתמדה בעשייה",
        "נפתח איזון בריא יותר בין העסק לחיים",
        "נזהה דפוסים מעכבים, כדי לנהל אותם בצורה מודעת ובריאה",
      ],
    },
    details: [
      { label: "פורמט", value: "קורס אונליין בקבוצה" },
      { label: "מבנה", value: "6 מפגשים חווייתיים" },
    ],
    faq: [
      { q: "איפה זה מתקיים?", a: "באונליין, כך שאפשר להשתתף מכל מקום." },
      { q: "כמה מפגשים יש בקורס?", a: "שישה מפגשים." },
      {
        q: "מתי הקבוצה הבאה, וכמה זה עולה?",
        a: "שלחי לי הודעה בוואטסאפ ואעדכן אותך במועד הקרוב ובכל הפרטים.",
      },
    ],
    testimonialIds: ["critic-dialogue"],
    cta: {
      label: "לפרטים ולהרשמה",
      message: "היי אורטל, אשמח לשמוע על הקורס ״מנהיגות פנימית״: מתי הקבוצה הבאה ואיך נרשמים?",
    },
    // TODO(inner-leadership): price, next cohort start date, meeting day/time, session length, checkout link.
    registration: {},
    relatedArticle: "perfectionism-and-procrastination",
    seo: {
      title: "מנהיגות פנימית: קורס אונליין לניהול הקול הביקורתי",
      description:
        "קורס אונליין של שישה מפגשים עם אורטל ארבל: כלים רגשיים ופרקטיים לניהול הפרפקציוניזם והביקורת העצמית, ליצירת עקביות בעשייה ולאיזון בין העסק לחיים.",
    },
  },
  {
    slug: "full-expression",
    kind: "personal",
    href: "/one-on-one",
    title: "אימון לביטוי עצמי מלא",
    tagline: "ליווי אישי אחד על אחד, כשצריך את כל הזרקור לעצמך.",
    format: "ליווי אישי · עין עירון או אונליין",
    image: "ortalForest",
    intro: [],
    audience: { title: "", items: [] },
    explore: { title: "", items: [] },
    details: [],
    faq: [],
    testimonialIds: [],
    cta: {
      label: "לתיאום שיחת היכרות",
      message: "היי אורטל, אשמח לתאם שיחת היכרות לגבי ליווי אישי.",
    },
    registration: {},
    seo: { title: "", description: "" },
  },
  {
    slug: "zone-of-genius",
    kind: "personal",
    title: "גילוי אזור הגאונות",
    tagline: "סשנים פרטיים לגילוי התשוקות, המוטיבציות והחוזקות הייחודיות לך.",
    format: "סשנים פרטיים · עין עירון או אונליין",
    image: "notebook",
    intro: [
      "סדרת סשנים פרטיים וממוקדים, שמטרתם לחשוף ולמפות את ״אזור הגאונות״ שלך: הדברים שמדליקים אותך, שגורמים לך לפעול בכיף, ושבהם את מביאה את הערך הגבוה ביותר שלך.",
      "את מה שנגלה נתרגם לתוכנית פעולה מעשית, כדי שהעשייה והחיים שלך יהיו בעלי משמעות, שמחה וזרימה טבעית.",
    ],
    audience: {
      title: "זה בשבילך אם",
      items: [
        "את טובה בהרבה דברים, ועדיין מרגישה שמשהו חסר",
        "העבודה שלך טובה, ואפילו מצוינת, אבל שוחקת ומעייפת",
        "יש בך תחושה שמה שבא לך בקלות ״לא באמת שווה״",
        "את רוצה לדייק את העשייה והעסק סביב מי שאת באמת",
      ],
    },
    context: {
      title: "המלכודת של אזור המצוינות",
      body: [
        "נשים מוכשרות נוטות לפעול מתוך ״אזור המצוינות״: עבודה טובה מאוד, שהסביבה מחזקת ומבקשת עוד ממנה, אבל בלי השראה ותשוקה אמיתית. משם הדרך לשחיקה ולעייפות מצטברת קצרה.",
        "אזור הגאונות הוא המקום שבו העבודה מרגישה חסרת מאמץ, הזמן עובר בלי שמרגישים, והתוצאות יוצאות דופן. כדי להגיע אליו צריך להעז לוותר על הטוב לטובת מה שהוא באמת שלך.",
      ],
    },
    explore: {
      title: "מה נעשה בסשנים",
      items: [
        "נמפה את התשוקות, המוטיבציות והחוזקות הטבעיות שלך",
        "נפרק אמונות מגבילות, כמו ״מה שבא בקלות אינו בעל ערך״",
        "נבנה מערכת יחסים חדשה ובריאה עם הכישרונות שלך",
        "נתרגם את הממצאים לתוכנית פעולה מעשית",
      ],
    },
    details: [
      { label: "פורמט", value: "סדרת סשנים פרטיים" },
      { label: "מיקום", value: "קליניקה במושב עין עירון, או אונליין" },
    ],
    faq: [
      { q: "איפה זה מתקיים?", a: "בקליניקה במושב עין עירון, או באונליין מכל מקום." },
      {
        q: "כמה סשנים יש בסדרה, וכמה זה עולה?",
        a: "נדבר על זה בשיחת ההיכרות, ונבנה את הסדרה לפי מה שנכון לך.",
      },
    ],
    testimonialIds: ["guided-imagery"],
    cta: {
      label: "לתיאום שיחת היכרות",
      message: "היי אורטל, אשמח לשמוע על הסשנים לגילוי אזור הגאונות.",
    },
    // TODO(zone-of-genius): number of sessions, session length, price.
    registration: {},
    relatedArticle: "zone-of-genius",
    seo: {
      title: "גילוי אזור הגאונות: סשנים פרטיים",
      description:
        "סשנים פרטיים עם אורטל ארבל לחשיפת אזור הגאונות שלך: התשוקות, המוטיבציות והחוזקות הייחודיות לך, ותרגומן לתוכנית פעולה מעשית.",
    },
  },
  {
    slug: "solo-traveler",
    kind: "personal",
    title: "המטיילת העצמאית",
    tagline: "הכנה מנטלית ומעשית ליציאה לטיול לבד, בביטחון.",
    format: "ליווי אישי · עין עירון או אונליין",
    image: "ortalMountain",
    intro: [
      "תמיד חלמת לטייל לבד בעולם, אבל החששות והפחדים החזיקו אותך מאחור?",
      "ליווי ממוקד שמשלב מענה לקשיים הרגשיים ולחששות המעכבים עם תכנון מעשי ופרקטי. נבין יחד מהו הטיול שנכון לך, ונבנה את מפת הדרכים שתאפשר לך לצאת לדרך בהנאה, בביטחון ובחופש.",
    ],
    audience: {
      title: "זה בשבילך אם",
      items: [
        "את חולמת על טיול לבד, ועוד לא יצאת",
        "הקול שואל ״את בטוחה שתסתדרי לבד?״ ו״זה בכלל בטוח?״",
        "את צריכה עזרה גם בפחד וגם בתכנון",
        "את מחפשת בטיול יותר מחופשה: פגישה מחודשת עם עצמך",
      ],
    },
    context: {
      title: "למה זה אישי לי",
      body: [
        "טסתי בעצמי, לבד, לתשעה חודשים בדרום אמריקה. אני מכירה מקרוב גם את הפחד שלפני, וגם את מה שנפתח כשכל החלטה בדרך, קטנה כגדולה, נמצאת בידיים שלך.",
        "החששות האלה טבעיים לגמרי. בליווי נלמד להקשיב להם לא כמחסומים, אלא כסימנים לצמיחה שמתקרבת, ונפרק אותם לתרחישים מעשיים שאפשר להתכונן אליהם.",
      ],
    },
    explore: {
      title: "מה נעשה יחד",
      items: [
        "נבין מהו הטיול שנכון לך",
        "נפרק את הפחדים לתרחישים מעשיים ונלמד לנהל אותם",
        "נבנה תוכנית אישית ומפת דרכים ליציאה",
        "נחזק את הביטחון, האינטואיציה והחיבור לעצמך לקראת הדרך",
      ],
    },
    details: [
      { label: "פורמט", value: "ליווי אישי" },
      { label: "מיקום", value: "קליניקה במושב עין עירון, או אונליין" },
    ],
    faq: [
      { q: "איפה זה מתקיים?", a: "בקליניקה במושב עין עירון, או באונליין מכל מקום." },
      {
        q: "כמה זמן לפני הטיסה כדאי להתחיל?",
        a: "כל מקרה שונה. נדבר על זה בשיחת ההיכרות לפי הלו״ז והטיול שלך.",
      },
    ],
    testimonialIds: [],
    cta: {
      label: "לתיאום שיחת היכרות",
      message: "היי אורטל, אני חולמת לצאת לטיול לבד ואשמח לשמוע על הליווי למטיילת העצמאית.",
    },
    // TODO(solo-traveler): number of sessions, price.
    registration: {},
    relatedArticle: "traveling-solo",
    seo: {
      title: "המטיילת העצמאית: ליווי לטיול לבד",
      description:
        "ליווי אישי עם אורטל ארבל, שטיילה לבד תשעה חודשים בדרום אמריקה: הכנה מנטלית ומעשית ליציאה לטיול עצמאי, מתוך ביטחון, חיבור לעצמך וחופש.",
    },
  },
];

export function programHref(p: Program): string {
  return p.href ?? `/programs/${p.slug}`;
}

/** Programs with their own detail page under /programs/[slug]. */
export const detailPrograms = programs.filter((p) => !p.href);

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
