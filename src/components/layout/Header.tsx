"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu, MenuToggle } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Scroll edildiğinde blur zemin + ince alt çizgi kazanarak küçülen başlık. */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 24,
    () => false,
  );

  const solid = scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color,backdrop-filter] duration-500 ease-out-expo",
          solid
            ? "border-b border-line bg-surface/85 text-primary backdrop-blur-md"
            : "border-b border-transparent text-surface",
        )}
      >
        <div
          className={cn(
            "container-site flex items-center justify-between gap-6 transition-[height] duration-500 ease-out-expo",
            solid ? "h-[4.5rem]" : "h-24",
          )}
        >
          <Logo onClick={() => setMenuOpen(false)} />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {mainNav.slice(1).map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-[0.9375rem] font-medium transition-opacity duration-300 hover:opacity-100",
                        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent",
                        "after:transition-transform after:duration-[400ms] after:ease-out-expo hover:after:scale-x-100",
                        active ? "opacity-100 after:scale-x-100" : "opacity-80 after:scale-x-0",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="/iletisim"
              size="sm"
              variant={solid ? "primary" : "outlineLight"}
              className="hidden sm:inline-flex"
            >
              Randevu Talebi
            </ButtonLink>
            <MenuToggle open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
