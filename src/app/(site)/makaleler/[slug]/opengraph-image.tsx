import { ImageResponse } from "next/og";
import { getAllArticles, getArticle } from "@/lib/articles";
import { OgTemplate, ogSize } from "@/lib/og";
import { formatDate } from "@/lib/utils";

export const alt = "Makale kapak görseli";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  return new ImageResponse(
    (
      <OgTemplate
        eyebrow={article ? `Makale · ${article.categoryTitle}` : "Makale"}
        title={article?.title ?? "Makaleler"}
        footer={article ? formatDate(article.date) : undefined}
      />
    ),
    size,
  );
}
