"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState, type MouseEvent } from "react";
import type { Heading } from "@/lib/articles";
import { cn } from "@/lib/utils";

/** Yapışkan içindekiler tablosu; okunan başlık vurgulanır. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -110 });
    else target.scrollIntoView();
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  if (headings.length === 0) return null;

  return (
    <nav aria-label="İçindekiler">
      <p className="eyebrow mb-5 text-accent-ink">
        <span aria-hidden="true" className="h-px w-6 bg-accent" />
        İçindekiler
      </p>
      <ol className="space-y-1 border-l border-line">
        {headings.map((h) => {
          const active = h.id === activeId;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l-2 py-1.5 text-[0.9375rem] leading-snug transition-colors duration-300",
                  h.level === 3 ? "pl-8" : "pl-4",
                  active
                    ? "border-accent font-medium text-primary"
                    : "border-transparent text-ink-muted hover:text-primary",
                )}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
