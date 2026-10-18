"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * URL query parametrelerini okuyup günceller (ör. ?kategori=aile-hukuku).
 * Geçmişi şişirmemek için `replace`, kaydırma konumunu korumak için `scroll: false` kullanılır.
 */
export function useQueryState() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function setParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") params.delete(key);
      else params.set(key, value);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return { searchParams, setParams };
}
