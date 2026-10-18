"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type TabOption = { value: string; label: string; count?: number };

type CategoryTabsProps = {
  options: TabOption[];
  active: string;
  onChange?: (value: string) => void;
  /** Aynı sayfada birden fazla sekme grubu varsa benzersiz olmalı */
  layoutId: string;
  label: string;
};

/** Aktif sekmenin altındaki altın göstergenin `layoutId` ile kayarak geçtiği filtre. */
export function CategoryTabs({ options, active, onChange, layoutId, label }: CategoryTabsProps) {
  return (
    <div role="group" aria-label={label} className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" data-lenis-prevent-wheel>
      <ul className="flex min-w-max gap-1 border-b border-line">
        {options.map((option) => {
          const isActive = option.value === active;
          return (
            <li key={option.value}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange?.(option.value)}
                className={cn(
                  "relative px-4 pt-2 pb-4 text-[0.9375rem] font-medium transition-colors duration-300",
                  isActive ? "text-primary" : "text-ink-muted hover:text-primary",
                )}
              >
                {option.label}
                {option.count !== undefined && (
                  <span className="ml-2 text-xs text-ink-muted tabular-nums">{option.count}</span>
                )}
                {isActive && (
                  <motion.span
                    layoutId={layoutId}
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
