import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const trMap: Record<string, string> = {
  ç: "c",
  ğ: "g",
  ı: "i",
  i̇: "i",
  ö: "o",
  ş: "s",
  ü: "u",
  â: "a",
  î: "i",
  û: "u",
};

/** Türkçe karakterleri sadeleştirerek URL/ID dostu bir slug üretir. */
export function slugify(input: string) {
  return input
    .toLocaleLowerCase("tr-TR")
    .replace(/i̇|[çğıöşüâîû]/g, (ch) => trMap[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-");
}

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Istanbul",
});

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T12:00:00+03:00`));
}

/** Ortalama 200 kelime/dk okuma hızıyla tahmini okuma süresi (dakika). */
export function readingTime(text: string) {
  const words = text
    .replace(/[#>*_`\-[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
