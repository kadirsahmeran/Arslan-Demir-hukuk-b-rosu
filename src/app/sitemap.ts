import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { lawyers } from "@/lib/data/lawyers";
import { practiceAreas } from "@/lib/data/practice-areas";
import { absoluteUrl } from "@/lib/site";

/** Statik sayfaların son içerik güncelleme tarihi (içerik değiştikçe güncelleyin). */
const CONTENT_UPDATED = "2026-10-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const staticPages: MetadataRoute.Sitemap = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/hakkimizda", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/calisma-alanlari", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/avukatlar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/makaleler", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/sss", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/kvkk", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cerez-politikasi", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/gizlilik-politikasi", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/yasal-uyari", priority: 0.2, changeFrequency: "yearly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  }));

  return [
    ...staticPages,
    ...practiceAreas.map((area) => ({
      url: absoluteUrl(`/calisma-alanlari/${area.slug}`),
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...lawyers.map((lawyer) => ({
      url: absoluteUrl(`/avukatlar/${lawyer.slug}`),
      lastModified: CONTENT_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/makaleler/${article.slug}`),
      lastModified: article.updated ?? article.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
