import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { ReadingProgress } from "@/components/articles/ReadingProgress";
import { ShareButtons } from "@/components/articles/ShareButtons";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import {
  getAllArticles,
  getArticle,
  getArticleSource,
  getHeadings,
  getRelatedArticles,
} from "@/lib/articles";
import { getLawyer } from "@/lib/data/lawyers";
import { images } from "@/lib/images";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { formatDate } from "@/lib/utils";

// Tüm detay sayfaları statik üretilir; bilinmeyen slug ilk istekte de doğrudan 404 döner.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/makaleler/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const author = getLawyer(article.author);
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/makaleler/${article.slug}`,
    type: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    authors: author ? [author.name] : undefined,
  });
}

export default async function ArticlePage({ params }: PageProps<"/makaleler/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getLawyer(article.author);
  const headings = getHeadings(getArticleSource(article.slug));
  const image = images[article.image];
  const url = absoluteUrl(`/makaleler/${article.slug}`);

  return (
    <>
      <ReadingProgress />

      <header className="bg-primary pt-36 pb-32 text-surface md:pt-44 md:pb-44">
        <div className="container-site max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Makaleler", href: "/makaleler" },
              { name: article.title, href: `/makaleler/${article.slug}` },
            ]}
            className="mb-10"
          />
          <Link
            href={`/makaleler?kategori=${article.category}`}
            className="eyebrow text-accent transition-colors hover:text-accent-hover"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {article.categoryTitle}
          </Link>
          <RevealText
            as="h1"
            trigger="mount"
            text={article.title}
            className="mt-6 text-4xl leading-tight text-surface md:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-surface/70">
              {author && (
                <Link href={`/avukatlar/${author.slug}`} className="font-medium text-surface hover:text-accent-hover">
                  {author.name}
                </Link>
              )}
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>{article.readingMinutes} dk okuma</span>
            </div>
          </Reveal>
        </div>
      </header>

      <div className="container-site">
        <div className="relative -mt-20 aspect-16/9 overflow-hidden rounded-sm shadow-lift md:-mt-32 lg:mx-auto lg:max-w-5xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-3">
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <TableOfContents headings={headings} />
          </div>
          <details className="rounded-sm border border-line bg-white p-5 lg:hidden">
            <summary className="cursor-pointer font-medium text-primary">İçindekiler</summary>
            <ol className="mt-4 space-y-2 text-base">
              {headings.map((h) => (
                <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                  <a href={`#${h.id}`} className="text-ink-muted hover:text-primary">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </aside>

        <article className="min-w-0 lg:col-span-9">
          <div
            className="prose prose-lg max-w-[70ch] prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary prose-h2:mt-14 prose-h2:text-3xl prose-h3:text-2xl prose-p:text-ink prose-a:text-primary prose-a:decoration-accent prose-a:underline-offset-4 prose-blockquote:border-accent prose-blockquote:bg-white prose-blockquote:py-1 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-ink-muted prose-strong:text-primary prose-li:marker:text-accent"
          >
            <ArticleBody slug={article.slug} />
          </div>

          <aside
            aria-label="Yasal uyarı"
            className="mt-14 flex max-w-[70ch] gap-4 border-l-2 border-accent bg-white p-6 text-base text-ink-muted"
          >
            <Info aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-ink" />
            <p>
              Bu makale bilgilendirme amaçlıdır, hukuki görüş niteliği taşımaz. Somut durumunuza ilişkin
              değerlendirme için bir avukata danışmanız önerilir. Yazıda yer alan bilgiler yayım
              tarihindeki mevzuata göre hazırlanmıştır.
            </p>
          </aside>

          <div className="mt-12 flex max-w-[70ch] flex-col gap-8 border-t border-line pt-10">
            <ShareButtons url={url} title={article.title} />
            {author && (
              <div className="flex flex-wrap items-center justify-between gap-6 rounded-sm bg-white p-6 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 overflow-hidden rounded-full">
                    <Image
                      src={images[author.image].src}
                      alt={images[author.image].alt}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-ink-muted">Yazar</p>
                    <p className="font-serif text-xl text-primary">{author.name}</p>
                  </div>
                </div>
                <ButtonLink href={`/avukatlar/${author.slug}`} variant="link" arrow>
                  Profili görüntüle
                </ButtonLink>
              </div>
            )}
          </div>
        </article>
      </div>

      <LatestArticles
        articles={getRelatedArticles(article)}
        eyebrow="İlgili Makaleler"
        title="Bunlar da ilginizi çekebilir"
      />

      <JsonLd data={articleSchema(article, author?.name ?? "", author?.slug ?? "")} />
    </>
  );
}
