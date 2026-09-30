/**
 * Global site content: identity, contact details, navigation and shared CTAs.
 * Edit here; every page reads from this file.
 */

export const site = {
  name: "אורטל ארבל",
  tagline: "אימון לביטוי עצמי מלא",
  description:
    "אורטל ארבל מלווה נשים עצמאיות, יוצרות ויזמיות לנהל את הפרפקציוניזם והביקורת העצמית, ולעבור מתקיעות ודחיינות לעשייה מהנה מתוך ביטחון ואמון פנימי. בקליניקה במושב עין עירון ובאונליין.",
  /**
   * TODO(domain): set NEXT_PUBLIC_SITE_URL in the hosting environment to the real
   * production domain. It drives canonical URLs, Open Graph URLs and the sitemap.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "he_IL",
  contact: {
    phone: "+972502029935",
    phoneDisplay: "050-202-9935",
    email: "ortal.self@gmail.com",
    whatsappNumber: "972502029935",
    location: "קליניקה במושב עין עירון, ואונליין",
    locality: "עין עירון",
  },
  social: {
    instagram: { label: "אינסטגרם", handle: "@ortal.arbel", url: "https://www.instagram.com/ortal.arbel/" },
    facebook: { label: "פייסבוק", handle: "ortalarbel.self", url: "https://www.facebook.com/ortalarbel.self/" },
  },
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/about", label: "הסיפור שלי" },
  { href: "/programs", label: "תוכניות" },
  { href: "/one-on-one", label: "ליווי אישי" },
  { href: "/journal", label: "מאמרים" },
  { href: "/contact", label: "יצירת קשר" },
];

/** The one highlighted action in the header. */
export const navCta: NavItem = { href: "/programs/first-move", label: "לסדנה החינמית" };

export const footerNav: NavItem[] = [
  { href: "/", label: "בית" },
  ...mainNav,
  { href: "/accessibility", label: "הצהרת נגישות" },
];

/** Default WhatsApp opener used by general "talk to me" buttons. */
export const generalWhatsappMessage = "היי אורטל, הגעתי מהאתר ויש לי שאלה:";
