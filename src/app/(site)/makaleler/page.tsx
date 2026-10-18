import { Suspense } from "react";
import {
  ArticleExplorer,
  ArticleExplorerView,
  type ExplorerArticle,
} from "@/components/articles/ArticleExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { getAllArticles, getArticleCategories } from "@/lib/articles";
import { getLawyer } from "@/lib/data/lawyers";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Makaleler",
  description:
    "Aile, iş, ceza, gayrimenkul, ticaret, miras ve tüketici hukukuna ilişkin güncel ve bilgilendirici hukuki makaleler.",
  path: "/makaleler",
});

export default function ArticlesPage() {
  const articles: ExplorerArticle[] = getAllArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    date: a.date,
    image: a.image,
    category: a.category,
    categoryTitle: a.categoryTitle,
    readingMinutes: a.readingMinutes,
    authorName: getLawyer(a.author)?.name ?? "",
  }));
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="Makaleler"
        title="Hukuki bilgilendirme yazıları"
        description="Sık karşılaşılan hukuki konuları sade bir dille ele aldığımız yazılarımız. Makaleler genel bilgilendirme amaçlıdır ve hukuki görüş niteliği taşımaz."
        breadcrumbs={[{ name: "Makaleler", href: "/makaleler" }]}
        image={images.libraryShelves}
      />
      <section className="py-20 md:py-28">
        <div className="container-site">
          <Suspense
            fallback={
              <ArticleExplorerView
                articles={articles}
                categories={categories}
                filters={{ category: "tumu", query: "", page: 1 }}
              />
            }
          >
            <ArticleExplorer articles={articles} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
