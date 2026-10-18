"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";
import { EASE_OUT, VIEWPORT } from "./easing";

type ParallaxImageProps = {
  image: SiteImage;
  sizes: string;
  className?: string;
  imageClassName?: string;
  /** Parallax yoğunluğu (yüzde). 0 verilirse parallax kapanır. */
  strength?: number;
  /** Görünüme girerken clip-path maske açılımı + scale efekti */
  reveal?: boolean;
  /** LCP görselleri için: önceden yükle ve maske animasyonu uygulama */
  preload?: boolean;
};

/**
 * Scroll ile hafifçe kayan (parallax) ve isteğe bağlı olarak maske açılımıyla
 * beliren görsel. Kapsayıcı `relative` ve boyutlandırılmış olmalıdır.
 */
export function ParallaxImage({
  image,
  sizes,
  className,
  imageClassName,
  strength = 8,
  reveal = true,
  preload = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const amount = reduce ? 0 : strength;
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  const animateReveal = reveal && !preload && !reduce;

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial={animateReveal ? { clipPath: "inset(100% 0% 0% 0%)" } : false}
      whileInView={animateReveal ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      viewport={VIEWPORT}
      transition={{ duration: 1.2, ease: EASE_OUT }}
    >
      <motion.div
        className="absolute inset-x-0 -inset-y-[10%]"
        style={{ y }}
        initial={reduce ? false : { scale: 1.1 }}
        {...(preload ? { animate: { scale: 1 } } : { whileInView: { scale: 1 }, viewport: VIEWPORT })}
        transition={{ duration: 1.6, ease: EASE_OUT }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
    </motion.div>
  );
}
