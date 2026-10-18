import Link from "next/link";
import { cn } from "@/lib/utils";

/** Metin tabanlı serif logo */
export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Arslan & Demir Hukuk Bürosu — Ana Sayfa"
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-serif text-[1.375rem] tracking-tight md:text-2xl">
        Arslan <span className="text-accent">&amp;</span> Demir
      </span>
      <span className="mt-1.5 font-sans text-[0.625rem] font-semibold tracking-[0.32em] uppercase opacity-70">
        Hukuk Bürosu
      </span>
    </Link>
  );
}
