"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { ArticleCard, type ArticleCardData } from "@/components/cards/ArticleCard";
import { EASE_OUT } from "@/components/motion/easing";
import { Button } from "@/components/ui/Button";
import { CategoryDropdown } from "@/components/ui/CategoryDropdown";
import { images } from "@/lib/images";
import { useQueryState } from "@/lib/use-query-state";
import { cn, formatDate } from "@/lib/utils";

export type ExplorerArticle = ArticleCardData & { category: string; authorName: string };

type Filters = { category: string; query: string; page: number };

type ViewProps = {
  articles: ExplorerArticle[];
  categories: { value: string; label: string }[];
  filters: Filters;
  onCategory?: (value: string) => void;
  onQuery?: (value: string) => void;
  onPage?: (value: number) => void;
  /** Kategori, arama ve sayfa parametrelerini tek seferde sıfırlar */
  onReset?: () => void;
};

const ALL = "tumu";
const PAGE_SIZE = 6;

function normalize(text: string) {
  return text.toLocaleLowerCase("tr-TR");
}

function FeaturedArticle({ article }: { article: ExplorerArticle }) {
  const image = images[article.image];
  return (
    <article className="group relative mb-20 grid overflow-hidden rounded-sm bg-white shadow-soft lg:grid-cols-2">
      <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
        <p className="eyebrow text-accent-ink">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          Öne Çıkan · {article.categoryTitle}
        </p>
        <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
          <Link href={`/makaleler/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h2>
        <p className="mt-5 text-ink-muted">{article.description}</p>
        <p className="mt-6 text-sm text-ink-muted">
          {article.authorName} · <time dateTime={article.date}>{formatDate(article.date)}</time> ·{" "}
          {article.readingMinutes} dk okuma
        </p>
        <span className="mt-8 inline-flex items-center gap-2 font-medium text-primary">
          Makaleyi okuyun
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

/** Öne çıkan makale + kategori filtresi + arama + sayfalama. */
export function ArticleExplorerView({
  articles,
  categories,
  filters,
  onCategory,
  onQuery,
  onPage,
  onReset,
}: ViewProps) {
  const [query, setQuery] = useState(filters.query);
  const deferredQuery = useDeferredValue(query);
  const listRef = useRef<HTMLDivElement>(null);
  const queryTimer = useRef<number | undefined>(undefined);
  const lenis = useLenis();

  useEffect(() => () => window.clearTimeout(queryTimer.current), []);

  const needle = normalize(deferredQuery.trim());
  const filtered = articles.filter(
    (a) =>
      (filters.category === ALL || a.category === filters.category) &&
      (!needle || normalize(`${a.title} ${a.description} ${a.categoryTitle}`).includes(needle)),
  );

  const showFeatured = filters.category === ALL && !needle && filters.page === 1 && filtered.length > 0;
  const featured = showFeatured ? filtered[0] : null;
  const pool = showFeatured ? filtered.slice(1) : filtered;
  const pageCount = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const page = Math.min(filters.page, pageCount);
  const visible = pool.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const options = [
    { value: ALL, label: "Tümü", count: articles.length },
    ...categories.map((c) => ({ ...c, count: articles.filter((a) => a.category === c.value).length })),
  ];

  function goToPage(next: number) {
    onPage?.(next);
    if (listRef.current) {
      if (lenis) lenis.scrollTo(listRef.current, { offset: -140 });
      else listRef.current.scrollIntoView();
    }
  }

  function handleQuery(value: string) {
    setQuery(value);
    // URL'yi her tuşta değil, yazma durunca güncelle (gereksiz yeniden çizimleri önler)
    window.clearTimeout(queryTimer.current);
    queryTimer.current = window.setTimeout(() => onQuery?.(value), 350);
  }

  const hasFilters = filters.category !== ALL || query.trim() !== "";

  function handleReset() {
    window.clearTimeout(queryTimer.current);
    setQuery("");
    onReset?.();
  }

  const clearButton = (
    <motion.button
      key="temizle"
      type="button"
      onClick={handleReset}
      initial={{ opacity: 0, x: -8, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -8, scale: 0.96 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
      className="group inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-sm px-3 text-sm font-medium text-primary transition-colors duration-300 hover:bg-primary/5 sm:self-auto"
    >
      <span className="grid size-6 place-items-center rounded-full border border-line transition-all duration-500 ease-out-expo group-hover:rotate-90 group-hover:border-accent group-hover:bg-accent">
        <X aria-hidden="true" className="size-3.5" />
      </span>
      Filtreleri temizle
    </motion.button>
  );

  return (
    <div>
      {/* Araç çubuğu en üstte: filtre değişse de konumu sabit kalır, sayfa zıplamaz */}
      <div ref={listRef} className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <CategoryDropdown
          options={options}
          value={filters.category}
          onChange={onCategory}
          label="Makaleleri kategoriye göre filtrele"
          className="w-full sm:w-80"
        />
        <AnimatePresence initial={false}>{hasFilters && clearButton}</AnimatePresence>
        <form role="search" className="relative w-full sm:ml-auto sm:w-80" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="makale-ara" className="sr-only">
            Makalelerde ara
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-muted" />
          <input
            id="makale-ara"
            type="search"
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
            placeholder="Makalelerde ara…"
            className="h-12 w-full rounded-sm border border-line bg-white pr-4 pl-11 text-base text-ink shadow-soft transition-colors duration-300 placeholder:text-ink-muted/70 hover:border-primary/40 focus:border-primary focus:outline-none"
          />
        </form>
      </div>

      <AnimatePresence initial={false}>
        {featured && (
          <motion.div
            key="one-cikan"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <FeaturedArticle article={featured} />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="sr-only" aria-live="polite">
        {filtered.length} makale bulundu
      </p>

      {/* Sabit minimum yükseklik: sonuç azaldığında sayfa kısalıp kaydırma konumu sıçramaz */}
      <div className="min-h-[70vh]">
        <motion.ul layout className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((article) => (
              <motion.li
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.55, ease: EASE_OUT }}
              >
                <ArticleCard article={article} headingLevel={featured ? "h3" : "h2"} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {visible.length === 0 && (
          <div className="flex flex-col items-center gap-5 border border-dashed border-line p-10 text-center text-ink-muted">
            <p>
              Aramanızla eşleşen bir makale bulunamadı. Farklı bir anahtar kelime deneyebilir veya
              filtreleri temizleyebilirsiniz.
            </p>
            {hasFilters && (
              <Button variant="outline" size="sm" onClick={handleReset}>
                Filtreleri temizle
              </Button>
            )}
          </div>
        )}
      </div>

      {pageCount > 1 && (
        <nav aria-label="Sayfalama" className="mt-16 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Önceki sayfa"
            className="grid size-11 place-items-center rounded-sm border border-line text-primary transition-colors hover:border-primary disabled:opacity-40"
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goToPage(n)}
              aria-current={n === page ? "page" : undefined}
              aria-label={`Sayfa ${n}`}
              className={cn(
                "grid size-11 place-items-center rounded-sm border text-sm font-medium transition-colors",
                n === page ? "border-primary bg-primary text-surface" : "border-line text-primary hover:border-primary",
              )}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === pageCount}
            aria-label="Sonraki sayfa"
            className="grid size-11 place-items-center rounded-sm border border-line text-primary transition-colors hover:border-primary disabled:opacity-40"
          >
            <ChevronRight aria-hidden="true" className="size-4" />
          </button>
        </nav>
      )}
    </div>
  );
}

/** URL'deki ?kategori=, ?q= ve ?sayfa= parametrelerini kullanan sürüm (Suspense içinde). */
export function ArticleExplorer(
  props: Omit<ViewProps, "filters" | "onCategory" | "onQuery" | "onPage" | "onReset">,
) {
  const { searchParams, setParams } = useQueryState();
  const requested = searchParams.get("kategori") ?? ALL;
  const category = props.categories.some((c) => c.value === requested) ? requested : ALL;
  const page = Math.max(1, Number.parseInt(searchParams.get("sayfa") ?? "1", 10) || 1);
  const query = searchParams.get("q") ?? "";

  return (
    <ArticleExplorerView
      {...props}
      filters={{ category, query, page }}
      onCategory={(value) => setParams({ kategori: value === ALL ? null : value, sayfa: null })}
      onQuery={(value) => setParams({ q: value.trim() || null, sayfa: null })}
      onPage={(value) => setParams({ sayfa: value === 1 ? null : String(value) })}
      onReset={() => setParams({ kategori: null, q: null, sayfa: null })}
    />
  );
}
