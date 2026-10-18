"use client";

import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLenis } from "lenis/react";
import { Mail, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { EASE_OUT } from "@/components/motion/easing";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const MENU_ID = "mobil-menu";

export function MenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={MENU_ID}
      aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
      className="relative grid size-11 place-items-center lg:hidden"
    >
      <span className="relative block h-3 w-6">
        <span
          className={cn(
            "absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-out-expo",
            open ? "top-1.5 rotate-45" : "top-0",
          )}
        />
        <span
          className={cn(
            "absolute left-0 h-px w-6 bg-current transition-transform duration-500 ease-out-expo",
            open ? "top-1.5 -rotate-45" : "top-3",
          )}
        />
      </span>
    </button>
  );
}

const list: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

/** Tam ekran açılan, linkleri sırayla beliren mobil menü. Açıkken Lenis durdurulur. */
export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const lenis = useLenis();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 250);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open, lenis, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={MENU_ID}
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-primary pt-28 pb-10 text-surface lg:hidden"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          data-lenis-prevent
        >
          <nav aria-label="Mobil menü" className="container-site flex-1">
            <motion.ul variants={list} initial="hidden" animate="visible" className="space-y-1">
              {mainNav.map((link, index) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href} className="overflow-hidden">
                    <motion.div variants={item}>
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-baseline gap-4 py-2 font-serif text-4xl transition-colors duration-300 sm:text-5xl",
                          active ? "text-accent" : "hover:text-accent-hover",
                        )}
                      >
                        <span className="font-sans text-xs tracking-widest text-surface/40">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>
          </nav>
          <motion.div
            className="container-site mt-10 space-y-3 border-t border-surface/15 pt-8 text-surface/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.7 } }}
          >
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-accent-hover">
              <Phone aria-hidden="true" className="size-4 text-accent" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-accent-hover">
              <Mail aria-hidden="true" className="size-4 text-accent" />
              {siteConfig.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
