import type { MetadataRoute } from "next";

import { articles } from "@/content/articles";
import { detailPrograms } from "@/content/programs";
import { absoluteUrl } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/programs", "/one-on-one", "/journal", "/contact", "/accessibility"];
  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...detailPrograms.map((prog) => ({
      url: absoluteUrl(`/programs/${prog.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/journal/${a.slug}`),
      lastModified: a.updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
