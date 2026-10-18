"use client";

import { AnimatePresence, motion } from "motion/react";
import { PracticeAreaCard, type PracticeAreaCardData } from "@/components/cards/PracticeAreaCard";
import { EASE_OUT } from "@/components/motion/easing";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import type { PracticeCategory } from "@/lib/data/practice-areas";
import { useQueryState } from "@/lib/use-query-state";

export type PracticeAreaSummary = PracticeAreaCardData;

const ALL = "tumu";

type GridProps = {
  areas: PracticeAreaSummary[];
  categories: { value: PracticeCategory; label: string }[];
  active: string;
  onChange?: (value: string) => void;
};

/** Kategori sekmeleri + kart grid'i. Kartlar `layout` ve `AnimatePresence` ile yer değiştirir. */
export function PracticeAreaGrid({ areas, categories, active, onChange }: GridProps) {
  const options = [
    { value: ALL, label: "Tümü", count: areas.length },
    ...categories.map((c) => ({
      ...c,
      count: areas.filter((a) => a.categories.includes(c.value)).length,
    })),
  ];
  const visible =
    active === ALL ? areas : areas.filter((a) => a.categories.includes(active as PracticeCategory));

  return (
    <>
      <CategoryTabs
        options={options}
        active={active}
        onChange={onChange}
        layoutId="calisma-alani-sekme"
        label="Çalışma alanlarını filtrele"
      />
      <p className="sr-only" aria-live="polite">
        {visible.length} çalışma alanı listeleniyor
      </p>
      <motion.ul layout className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((area) => (
            <motion.li
              key={area.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
            >
              <PracticeAreaCard
                area={area}
                index={areas.indexOf(area) + 1}
                headingLevel="h2"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

/** URL'deki `?kategori=` parametresini okuyup yazan sürüm (Suspense içinde kullanılır). */
export function PracticeAreaExplorer(props: Omit<GridProps, "active" | "onChange">) {
  const { searchParams, setParams } = useQueryState();
  const requested = searchParams.get("kategori") ?? ALL;
  const active = props.categories.some((c) => c.value === requested) ? requested : ALL;

  return (
    <PracticeAreaGrid
      {...props}
      active={active}
      onChange={(value) => setParams({ kategori: value === ALL ? null : value })}
    />
  );
}
