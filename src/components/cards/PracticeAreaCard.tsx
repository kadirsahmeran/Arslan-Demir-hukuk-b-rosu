import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PracticeIcon } from "@/components/ui/PracticeIcon";
import { practiceCategories, type PracticeArea } from "@/lib/data/practice-areas";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export type PracticeAreaCardData = Pick<
  PracticeArea,
  "slug" | "title" | "excerpt" | "icon" | "image" | "categories"
>;

type Props = {
  area: PracticeAreaCardData;
  /** Kart üzerinde gösterilecek sıra numarası (1'den başlar) */
  index?: number;
  headingLevel?: "h2" | "h3";
  sizes?: string;
  className?: string;
};

/**
 * Görsel odaklı çalışma alanı kartı. Masaüstünde kısa açıklama hover/focus ile
 * aşağıdan açılır; dokunmatik cihazlarda her zaman görünür. Metin her durumda DOM'dadır.
 */
export function PracticeAreaCard({
  area,
  index,
  headingLevel = "h3",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  className,
}: Props) {
  const Heading = headingLevel;
  const image = images[area.image];
  const categoryLabel = area.categories
    .map((value) => practiceCategories.find((c) => c.value === value)?.label)
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      href={`/calisma-alanlari/${area.slug}`}
      className={cn(
        "group relative isolate flex aspect-4/5 flex-col justify-between overflow-hidden rounded-sm bg-primary p-6 text-surface shadow-soft md:p-7",
        "transition-shadow duration-500 ease-out-expo hover:shadow-lift focus-visible:shadow-lift",
        className,
      )}
    >
      {/* Görsel + katmanlar */}
      <Image
        src={image.src}
        alt=""
        fill
        sizes={sizes}
        className="-z-20 object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-primary via-primary/70 to-primary/15 transition-opacity duration-700 ease-out-expo"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-primary/40 opacity-0 transition-opacity duration-700 ease-out-expo group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      {/* Üst satır: numara + ikon */}
      <div className="flex items-start justify-between">
        {index !== undefined && (
          <span className="font-serif text-lg text-surface/70 tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="ml-auto grid size-12 place-items-center rounded-full border border-surface/25 bg-surface/10 text-accent backdrop-blur-md transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-primary">
          <PracticeIcon icon={area.icon} className="size-5" />
        </span>
      </div>

      {/* Alt içerik */}
      <div>
        <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-accent uppercase">
          {categoryLabel}
        </p>
        <Heading className="mt-3 text-2xl leading-tight text-surface md:text-[1.75rem]">{area.title}</Heading>

        {/* Hover'da açılan açıklama (yalnızca ince imleçli cihazlarda gizli başlar) */}
        <div className="grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-500 ease-out-expo pointer-fine:grid-rows-[0fr] pointer-fine:opacity-0 pointer-fine:group-hover:grid-rows-[1fr] pointer-fine:group-hover:opacity-100 pointer-fine:group-focus-visible:grid-rows-[1fr] pointer-fine:group-focus-visible:opacity-100">
          <p className="overflow-hidden text-[0.9375rem] leading-relaxed text-surface/80">
            <span className="block pt-3">{area.excerpt}</span>
          </p>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-sm font-medium tracking-wide">İncele</span>
          <span aria-hidden="true" className="relative h-px flex-1 overflow-hidden bg-surface/20">
            <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 text-accent transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
