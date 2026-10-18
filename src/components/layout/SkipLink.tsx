"use client";

import { useLenis } from "lenis/react";
import type { MouseEvent } from "react";

/** Klavye kullanıcıları için "içeriğe atla" bağlantısı; odağı ana içeriğe taşır. */
export function SkipLink() {
  const lenis = useLenis();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const main = document.getElementById("icerik");
    if (!main) return;
    event.preventDefault();
    main.focus({ preventScroll: true });
    if (lenis) lenis.scrollTo(main, { immediate: true });
    else main.scrollIntoView();
  }

  return (
    <a
      href="#icerik"
      onClick={handleClick}
      className="fixed top-3 left-3 z-60 -translate-y-24 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-primary transition-transform duration-300 focus:translate-y-0"
    >
      İçeriğe atla
    </a>
  );
}
