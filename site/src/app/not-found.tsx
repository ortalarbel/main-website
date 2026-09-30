import { ArrowLink, ButtonLink } from "@/components/Actions";
import p from "@/components/page.module.css";

export default function NotFound() {
  return (
    <section className={`container ${p.head}`} style={{ paddingBlockEnd: "var(--section)" }}>
      <div className={p.headText}>
        <h1 className={p.title}>העמוד הזה לא נמצא.</h1>
        <p className={`t-lead ${p.lead}`}>
          אולי הקישור השתנה, ואולי זו פשוט הזמנה לתנועה קטנה לכיוון אחר.
        </p>
        <div className="actions">
          <ButtonLink href="/">לעמוד הבית</ButtonLink>
          <ArrowLink href="/programs">לתוכניות</ArrowLink>
        </div>
      </div>
    </section>
  );
}
