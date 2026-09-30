import type { Metadata } from "next";

import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative image URL for social sharing. */
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
};

const defaultImage = "/images/og-default.jpg";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [site.name] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}
