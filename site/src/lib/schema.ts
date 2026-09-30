import { site } from "@/content/site";
import { absoluteUrl } from "./links";

/** Schema.org Person for Ortal: only facts published on her own site. */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": absoluteUrl("/#ortal"),
    name: site.name,
    jobTitle: site.tagline,
    description: site.description,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/og-default.jpg"),
    email: `mailto:${site.contact.email}`,
    telephone: site.contact.phone,
    address: { "@type": "PostalAddress", addressLocality: site.contact.locality, addressCountry: "IL" },
    sameAs: [site.social.instagram.url, site.social.facebook.url],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: site.name,
        inLanguage: "he-IL",
        publisher: { "@id": absoluteUrl("/#ortal") },
      },
      personSchema(),
    ],
  };
}
