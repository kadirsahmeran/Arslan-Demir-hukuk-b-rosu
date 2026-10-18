"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT, VIEWPORT } from "./easing";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
};

/** Alt öğelerini (`StaggerItem`) sırayla görünür kılan liste kapsayıcısı. */
export function Stagger({ children, className, stagger = 0.1, delay = 0, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : delay },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0.3 : 0.8, ease: EASE_OUT } },
  };

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
