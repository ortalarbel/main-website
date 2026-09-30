import Image from "next/image";

import { images, type ImageKey } from "@/content/images";

/**
 * A cropped photograph that fills its box. The box (aspect ratio, size) is set
 * by the caller's className; the crop centre comes from the image's `focus`.
 */
export function Photo({
  name,
  sizes,
  className = "",
  priority = false,
  alt,
  focus,
}: {
  name: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Override the default alt (use "" when purely decorative in context). */
  alt?: string;
  focus?: string;
}) {
  const img = images[name];
  return (
    <div className={`photo ${className}`}>
      <Image
        src={img.src}
        alt={alt ?? img.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        style={{ objectPosition: focus ?? img.focus }}
      />
    </div>
  );
}
