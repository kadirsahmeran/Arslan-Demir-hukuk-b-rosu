import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/lib/site";

/** Yalnızca mobilde görünen sabit telefon / WhatsApp çubuğu. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-line bg-surface/95 backdrop-blur-md md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex h-16 items-center justify-center gap-2 text-sm font-medium text-primary active:bg-line"
      >
        <Phone aria-hidden="true" className="size-4 text-accent-ink" />
        Hemen Arayın
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 items-center justify-center gap-2 border-l border-line bg-primary text-sm font-medium text-surface active:bg-primary-light"
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
        <span className="sr-only">(yeni sekmede açılır)</span>
      </a>
    </div>
  );
}
