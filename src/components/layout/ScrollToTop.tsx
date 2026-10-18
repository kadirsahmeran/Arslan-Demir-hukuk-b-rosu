"use client";

import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

/** Lenis `scrollTo` ile yumuşakça sayfa başına dönen buton. */
export function ScrollToTop() {
  const lenis = useLenis();
  const visible = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 800,
    () => false,
  );

  function toTop() {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0 });
    document.getElementById("icerik")?.focus({ preventScroll: true });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Sayfanın başına dön"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          className="fixed right-5 bottom-6 z-30 hidden size-12 place-items-center rounded-sm border border-line bg-white text-primary shadow-soft transition-colors duration-300 hover:border-accent hover:bg-primary hover:text-surface md:grid"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
