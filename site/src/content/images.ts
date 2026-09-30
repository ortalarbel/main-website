import type { StaticImageData } from "next/image";

import ortalForest from "@/assets/images/ortal-forest.jpg";
import ortalMountain from "@/assets/images/ortal-mountain.jpg";
import pineForest from "@/assets/images/pine-forest.jpg";
import forestPath from "@/assets/images/forest-path.jpg";
import notebook from "@/assets/images/notebook.jpg";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  /** Where the subject sits, used as object-position when the image is cropped. */
  focus: string;
  /** Provenance. Kept in code so it travels with the asset. */
  credit: string;
};

/**
 * Photographs used on the site.
 * - Photos of Ortal come from her previous site (her own material).
 * - Supporting photos are CC0 / public-domain, from Wikimedia Commons (see README).
 */
export const images = {
  ortalForest: {
    src: ortalForest,
    alt: "אורטל ארבל יושבת בישיבה מזרחית על סלע ביער אורנים, באור שמש של בוקר",
    focus: "70% 55%",
    credit: "אורטל ארבל, מתוך האתר הקודם",
  },
  ortalMountain: {
    src: ortalMountain,
    alt: "אורטל ארבל מחייכת, שיער ברוח, על רכס הרים בדרום אמריקה",
    focus: "55% 40%",
    credit: "אורטל ארבל, מתוך האתר הקודם",
  },
  pineForest: {
    src: pineForest,
    alt: "",
    focus: "50% 50%",
    credit: "Thick pine forest (Unsplash), Wikimedia Commons, CC0",
  },
  forestPath: {
    src: forestPath,
    alt: "",
    focus: "50% 60%",
    credit: "Forest path, Ånnaboda, Wikimedia Commons, CC0",
  },
  notebook: {
    src: notebook,
    alt: "מחברת פתוחה על החול, ובה עלה שרך ופרח מיובש",
    focus: "50% 45%",
    credit: "An open notebook on a sandy beach (Rawpixel), Wikimedia Commons, CC0",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
