import { ImageResponse } from "next/og";
import { OgTemplate, ogSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.district}, ${siteConfig.city}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow={`${siteConfig.foundedYear}'dan bu yana`}
        title="Hukuki süreçlerinizde özenli, şeffaf ve ulaşılabilir bir yol arkadaşı"
      />
    ),
    size,
  );
}
