"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  format?: "number" | "year";
  duration?: number;
  className?: string;
};

/**
 * Görünüme girdiğinde değere kadar sayarak artan gösterge. Sunucu HTML'inde
 * nihai değer yer alır; böylece JS olmadan ve arama motorlarında doğru görünür.
 */
export function Counter({ value, format = "number", duration = 2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const from = format === "year" ? value - 30 : 0;

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce) return;
    if (!inView) {
      node.textContent = String(from);
      return;
    }
    const controls = animate(from, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
