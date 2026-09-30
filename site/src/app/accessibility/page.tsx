import type { Metadata } from "next";

import { Todo } from "@/components/Todo";
import { site } from "@/content/site";
import { mailUrl, telUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import p from "@/components/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של האתר של אורטל ארבל, ודרכים לפנות בנושא נגישות.",
  path: "/accessibility",
});

/**
 * TODO(accessibility): have the statement reviewed. Add the date of the last
 * accessibility check and any known limitations. Israeli regulations
 * (תקנות שוויון זכויות לאנשים עם מוגבלות) require these details.
 */
export default function AccessibilityPage() {
  return (
    <>
      <header className={`container ${p.head}`}>
        <div className={p.headText}>
          <h1 className={p.title}>הצהרת נגישות</h1>
        </div>
      </header>
      <section className="container" style={{ paddingBlockEnd: "var(--section)" }}>
        <div className="prose" style={{ display: "grid", gap: "var(--space-6)" }}>
          <div>
            <h2 className="t-h3">המחויבות שלי</h2>
            <p>
              חשוב לי שכל אחת תוכל להשתמש באתר בנוחות. האתר נבנה בהתאם להנחיות תקן ישראלי 5568
              ולהנחיות הנגישות לתכני אינטרנט (WCAG 2.1) ברמה AA.
            </p>
          </div>
          <div>
            <h2 className="t-h3">מה נעשה באתר</h2>
            <ul>
              <li>מבנה כותרות היררכי וסימון סמנטי של אזורי העמוד.</li>
              <li>ניווט מלא באמצעות המקלדת, עם סימון פוקוס ברור וקישור ״דילוג לתוכן״.</li>
              <li>טקסט חלופי לתמונות בעלות משמעות.</li>
              <li>ניגודיות צבעים מספקת לטקסט.</li>
              <li>כיבוד הגדרת ״הפחתת תנועה״ במערכת ההפעלה.</li>
              <li>התאמה לתצוגה בטלפון, בטאבלט ובמחשב, ותמיכה בהגדלת טקסט.</li>
            </ul>
          </div>
          <div>
            <h2 className="t-h3">נתקלת בבעיה?</h2>
            <p>
              אם משהו באתר לא נגיש עבורך, אשמח מאוד לדעת ולתקן. אפשר לפנות אליי ישירות:
            </p>
            <p>
              טלפון:{" "}
              <a href={telUrl} className="ltr">
                {site.contact.phoneDisplay}
              </a>
              <br />
              מייל:{" "}
              <a href={mailUrl} className="ltr">
                {site.contact.email}
              </a>
            </p>
          </div>
          <p className="t-meta">
            <Todo>תאריך עדכון ההצהרה ובדיקת הנגישות האחרונה</Todo>
          </p>
        </div>
      </section>
    </>
  );
}
