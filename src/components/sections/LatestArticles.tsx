import { ArticleCard } from "@/components/cards/ArticleCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Article } from "@/lib/articles";

type Props = {
  articles: Article[];
  eyebrow?: string;
  title?: string;
  className?: string;
};

export function LatestArticles({
  articles,
  eyebrow = "Makaleler",
  title = "Hukuki gelişmelere dair bilgilendirici yazılar",
  className = "border-t border-line bg-white/60 py-24 md:py-32",
}: Props) {
  if (articles.length === 0) return null;
  return (
    <section className={className}>
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <ButtonLink href="/makaleler" variant="outline" arrow className="shrink-0">
            Tüm Makaleler
          </ButtonLink>
        </div>
        <Stagger className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
