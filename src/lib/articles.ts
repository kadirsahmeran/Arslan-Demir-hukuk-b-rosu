import fs from "node:fs";
import path from "node:path";
import type { ImageKey } from "@/lib/images";
import { getPracticeArea, practiceAreas } from "@/lib/data/practice-areas";
import { readingTime, slugify } from "@/lib/utils";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  /** Çalışma alanı slug'ı; makale kategorisi olarak da kullanılır. */
  category: string;
  author: string;
  date: string;
  updated?: string;
  image: ImageKey;
};

export type Article = ArticleMeta & {
  categoryTitle: string;
  readingMinutes: number;
};

export type Heading = { id: string; text: string; level: 2 | 3 };

const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

const articleMeta: ArticleMeta[] = [
  {
    slug: "anlasmali-bosanma-sureci-nasil-isler",
    title: "Anlaşmalı Boşanma Süreci Nasıl İşler?",
    description:
      "Anlaşmalı boşanmanın şartları, protokolde yer alması gereken konular, duruşma süreci ve kararın kesinleşmesi hakkında bilmeniz gerekenler.",
    category: "aile-hukuku",
    author: "zeynep-demir",
    date: "2026-09-22",
    image: "articleDivorce",
  },
  {
    slug: "kidem-tazminati-hangi-durumlarda-alinir",
    title: "Kıdem Tazminatı Hangi Durumlarda Alınır?",
    description:
      "Kıdem tazminatına hak kazanma şartları, istifa hâlinde tazminat alınabilecek durumlar, hesaplama esasları ve zamanaşımı süresi.",
    category: "is-hukuku",
    author: "elif-yildiz",
    date: "2026-09-08",
    image: "articleSeverance",
  },
  {
    slug: "kira-tespit-davasi-nedir",
    title: "Kira Tespit Davası Nedir?",
    description:
      "Kira tespit davasının hangi durumlarda açılabileceği, hâkimin kira bedelini belirlerken dikkate aldığı ölçütler ve dava süreleri.",
    category: "gayrimenkul-ve-kira-hukuku",
    author: "mehmet-arslan",
    date: "2026-08-25",
    image: "articleRent",
  },
  {
    slug: "mirasin-reddi-nasil-yapilir",
    title: "Mirasın Reddi Nasıl Yapılır?",
    description:
      "Mirasın reddinin süresi, şekli, sonuçları ve borca batık terekede hükmen ret davası hakkında temel bilgiler.",
    category: "miras-hukuku",
    author: "selin-aksoy",
    date: "2026-08-11",
    image: "articleInheritance",
  },
  {
    slug: "ise-iade-davasi-sartlari",
    title: "İşe İade Davasının Şartları Nelerdir?",
    description:
      "İş güvencesinden yararlanma koşulları, arabuluculuk ve dava süreleri ile işe iade kararının sonuçları.",
    category: "is-hukuku",
    author: "emre-kaya",
    date: "2026-07-28",
    image: "articleReinstatement",
  },
  {
    slug: "limited-sirkette-pay-devri",
    title: "Limited Şirkette Pay Devri Nasıl Yapılır?",
    description:
      "Limited şirket paylarının devrinde şekil şartı, genel kurul onayı, ticaret siciline tescil ve devralanın sorumluluğu.",
    category: "ticaret-ve-sirketler-hukuku",
    author: "mehmet-arslan",
    date: "2026-07-14",
    image: "articleCompany",
  },
  {
    slug: "tuketici-hakem-heyetine-basvuru",
    title: "Tüketici Hakem Heyetine Başvuru Rehberi",
    description:
      "Tüketici hakem heyetine hangi uyuşmazlıklarda başvurulur, başvuru nasıl yapılır ve heyet kararlarına nasıl itiraz edilir?",
    category: "tuketici-hukuku",
    author: "elif-yildiz",
    date: "2026-06-30",
    image: "articleConsumer",
  },
  {
    slug: "ifade-verirken-supheli-haklari",
    title: "İfade Verirken Şüphelinin Hakları",
    description:
      "Kolluk veya savcılıkta ifade verilirken şüpheliye tanınan susma hakkı, müdafi yardımı ve diğer temel güvenceler.",
    category: "ceza-hukuku",
    author: "emre-kaya",
    date: "2026-06-16",
    image: "articleCriminal",
  },
];

export function getArticleSource(slug: string) {
  return fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.mdx`), "utf8");
}

function enrich(meta: ArticleMeta): Article {
  return {
    ...meta,
    categoryTitle: getPracticeArea(meta.category)?.title ?? meta.category,
    readingMinutes: readingTime(getArticleSource(meta.slug)),
  };
}

export function getAllArticles(): Article[] {
  return [...articleMeta].sort((a, b) => b.date.localeCompare(a.date)).map(enrich);
}

export function getArticle(slug: string): Article | undefined {
  const meta = articleMeta.find((article) => article.slug === slug);
  return meta ? enrich(meta) : undefined;
}

export function getArticlesByCategory(category: string, exclude?: string) {
  return getAllArticles().filter((a) => a.category === category && a.slug !== exclude);
}

export function getArticlesByAuthor(author: string) {
  return getAllArticles().filter((a) => a.author === author);
}

export function getRelatedArticles(article: Article, limit = 3) {
  const sameCategory = getArticlesByCategory(article.category, article.slug);
  const others = getAllArticles().filter(
    (a) => a.slug !== article.slug && a.category !== article.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Makale filtresinde gösterilecek kategoriler (yalnızca makalesi olan alanlar). */
export function getArticleCategories() {
  const used = new Set(articleMeta.map((a) => a.category));
  return practiceAreas
    .filter((area) => used.has(area.slug))
    .map((area) => ({ value: area.slug, label: area.title }));
}

/** MDX kaynağındaki ## ve ### başlıklarından içindekiler tablosu üretir. */
export function getHeadings(source: string): Heading[] {
  return source
    .split("\n")
    .map((line) => /^(#{2,3})\s+(.+?)\s*$/.exec(line))
    .filter((match): match is RegExpExecArray => match !== null)
    .map((match) => ({
      level: match[1].length as 2 | 3,
      text: match[2],
      id: slugify(match[2]),
    }));
}
