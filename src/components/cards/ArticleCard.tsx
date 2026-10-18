import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { images } from "@/lib/images";
import { formatDate } from "@/lib/utils";

export type ArticleCardData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: keyof typeof images;
  categoryTitle: string;
  readingMinutes: number;
};

export function ArticleCard({
  article,
  headingLevel = "h3",
}: {
  article: ArticleCardData;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const image = images[article.image];
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-line">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
          <span className="font-medium text-accent-ink">{article.categoryTitle}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <Heading className="mt-3 text-2xl leading-snug">
          <Link
            href={`/makaleler/${article.slug}`}
            className="bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px] after:absolute after:inset-0"
          >
            {article.title}
          </Link>
        </Heading>
        <p className="mt-3 line-clamp-3 flex-1 text-base text-ink-muted">{article.description}</p>
        <p className="mt-5 flex items-center gap-2 text-sm text-ink-muted">
          <Clock aria-hidden="true" className="size-4 text-accent" />
          {article.readingMinutes} dk okuma
        </p>
      </div>
    </article>
  );
}
