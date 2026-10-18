"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { EASE_OUT } from "@/components/motion/easing";

const STORAGE_KEY = "cerez-tercihi";
const CHANGE_EVENT = "cerez-tercihi-degisti";

type Consent = "all" | "necessary";

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Depolama kapalıysa tercih yalnızca bu oturumda geçerli olur.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Sayfanın altında beliren, içeriği engellemeyen çerez bandı (pop-up değildir).
 * Tercih verilene kadar yalnızca zorunlu çerezler kullanılır.
 */
export function CookieBanner() {
  // Sunucuda ve ilk hidrasyonda "bilinmiyor" kabul edilir; bant yalnızca istemcide gösterilir.
  const consent = useSyncExternalStore(subscribe, readConsent, () => "unknown" as const);
  const visible = consent === null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          aria-label="Çerez tercihleri"
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.6 }}
          className="fixed inset-x-3 bottom-[4.75rem] z-40 rounded-sm border border-line bg-white p-5 shadow-lift md:inset-x-auto md:left-6 md:bottom-6 md:max-w-md md:p-6"
        >
          <p className="text-sm text-ink">
            Sitemizde, yalnızca sitenin çalışması için gerekli olan zorunlu çerezler ile ziyaret
            istatistiklerini anlamamıza yardımcı olan isteğe bağlı çerezler kullanılmaktadır.
            Ayrıntılar için{" "}
            <Link href="/cerez-politikasi" className="font-medium text-primary underline underline-offset-4">
              Çerez Politikamızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="sm" onClick={() => saveConsent("all")}>
              Tümünü Kabul Et
            </Button>
            <Button size="sm" variant="outline" onClick={() => saveConsent("necessary")}>
              Yalnızca Zorunlu
            </Button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
