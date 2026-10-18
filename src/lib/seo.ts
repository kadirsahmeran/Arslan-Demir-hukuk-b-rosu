import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path: string;
  image?: { src: string; alt: string };
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

/**
 * Her sayfa için tutarlı title/description/canonical/Open Graph/Twitter
 * metadata'sı üretir. Görsel verilmezse dosya tabanlı opengraph-image kullanılır.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const images = image ? [{ url: image.src, alt: image.alt, width: 1200, height: 630 }] : undefined;

  return {
    title: title ?? { absolute: `${siteConfig.name} | ${siteConfig.district}, ${siteConfig.city}` },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: ogTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(images && { images }),
      ...(type === "article" && { publishedTime, modifiedTime, authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(images && { images: images.map((i) => i.url) }),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}
