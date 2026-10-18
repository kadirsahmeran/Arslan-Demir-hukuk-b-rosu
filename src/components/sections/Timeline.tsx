"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";

type TimelineItem = { year: string; title: string; text: string };

/** Scroll ilerledikçe dikey çizgisi altın renkle dolan zaman çizelgesi. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <ol ref={ref} className="relative ml-3 md:ml-0">
      <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 w-px bg-line md:left-1/2" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : scaleY }}
        className="absolute top-0 bottom-0 left-0 w-px origin-top bg-accent md:left-1/2"
      />
      {items.map((item, index) => {
        const right = index % 2 === 1;
        return (
          <li key={item.year} className="relative pb-14 pl-10 last:pb-0 md:grid md:grid-cols-2 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-2 left-0 size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface md:left-1/2"
            />
            <Reveal
              className={
                right ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16 md:text-right"
              }
            >
              <p className="font-serif text-4xl text-accent-ink">{item.year}</p>
              <h3 className="mt-2 text-2xl">{item.title}</h3>
              <p className="mt-3 text-base text-ink-muted">{item.text}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
