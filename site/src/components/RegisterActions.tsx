import type { Program } from "@/content/programs";
import { ButtonLink, WhatsAppButton } from "./Actions";

/**
 * The registration action for a program.
 * - With `registration.checkoutUrl`, the primary button goes to the external
 *   checkout / sign-up page and WhatsApp becomes the quiet secondary.
 * - Without it (the current state), registration happens in a WhatsApp
 *   conversation with a pre-filled message naming the program.
 */
export function RegisterActions({ program, compact = false }: { program: Program; compact?: boolean }) {
  const { checkoutUrl } = program.registration;
  if (checkoutUrl) {
    return (
      <div className="actions">
        <ButtonLink href={checkoutUrl}>{program.cta.label}</ButtonLink>
        {compact ? null : (
          <WhatsAppButton variant="quiet" message={program.cta.message}>
            שאלה לפני? בוואטסאפ
          </WhatsAppButton>
        )}
      </div>
    );
  }
  return (
    <div className="actions">
      <WhatsAppButton message={program.cta.message}>{program.cta.label}</WhatsAppButton>
    </div>
  );
}
