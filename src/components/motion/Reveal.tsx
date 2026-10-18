"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, VIEWPORT } from "./easing";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p" | "header" | "aside";
};

/** Görünüm alanına girdiğinde aşağıdan yukarı, solarak beliren sarmalayıcı. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  duration = 0.8,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduce ? 0.3 : duration, delay: reduce ? 0 : delay, ease: EASE_OUT }}
    >
      {children}
    </Component>
  );
}
