import { site } from "@/content/site";

/** WhatsApp deep link with an optional pre-filled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const telUrl = `tel:${site.contact.phone}`;
export const mailUrl = `mailto:${site.contact.email}`;

export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
