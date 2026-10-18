"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Fragment } from "react";
import { EASE_OUT, VIEWPORT } from "./easing";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** "mount": sayfa yüklenince (hero), "inView": görünüme girince */
  trigger?: "mount" | "inView";
  delay?: number;
  stagger?: number;
};

/**
 * Başlığı kelime kelime, overflow-hidden maske içinden aşağıdan yukarı kaydırarak gösterir.
 * Ekran okuyucular için tam metin ayrıca sr-only olarak verilir.
 */
export function RevealText({
  text,
  as = "h2",
  className,
  trigger = "inView",
  delay = 0,
  stagger = 0.06,
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: reduce ? { opacity: 0 } : { y: "110%" },
    visible: reduce
      ? { opacity: 1, transition: { duration: 0.3 } }
      : { y: "0%", transition: { duration: 0.9, ease: EASE_OUT } },
  };

  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" as const }
      : { whileInView: "visible" as const, viewport: VIEWPORT };

  return (
    <Tag className={cn(className)}>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden="true" variants={container} initial="hidden" {...triggerProps}>
        {words.map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <span className="mb-[-0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span className="inline-block will-change-transform" variants={word}>
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
