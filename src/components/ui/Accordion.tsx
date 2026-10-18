"use client";

import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/components/motion/easing";

type AccordionItem = { question: string; answer: string };

/**
 * Erişilebilir, animasyonlu accordion. Kapalı paneller DOM'da kalır
 * (arama motorları içeriği görebilir), yalnızca `inert` ile etkileşime kapatılır.
 */
export function Accordion({
  items,
  className,
  headingLevel = 3,
}: {
  items: AccordionItem[];
  className?: string;
  headingLevel?: 2 | 3 | 4;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();
  const reduce = useReducedMotion();
  const Heading = `h${headingLevel}` as const;

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <Heading className="font-sans text-base md:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left font-medium text-primary transition-colors duration-300 hover:text-accent-ink"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line transition-all duration-[400ms] ease-out-expo",
                    isOpen ? "rotate-45 border-accent bg-accent text-primary" : "group-hover:border-accent",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </Heading>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.5, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <p className="max-w-3xl pr-12 pb-6 text-ink-muted">{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
