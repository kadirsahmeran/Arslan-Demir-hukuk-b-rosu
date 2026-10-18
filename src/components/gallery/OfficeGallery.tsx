"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";
import { Expand } from "lucide-react";
import { useEffect } from "react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";
// GLightbox stili yalnızca bu bileşeni kullanan sayfanın CSS'ine dahil edilir.
import "glightbox/dist/css/glightbox.min.css";

const SELECTOR = ".ofis-galerisi";

/**
 * Ofis galerisi: küçük görseller next/image ile, tam boyut görüntüleme
 * GLightbox ile. GLightbox JS'i yalnızca bu bileşen mount olduğunda dinamik
 * olarak yüklenir; açıkken Lenis durdurulur.
 */
export function OfficeGallery({ items }: { items: SiteImage[] }) {
  const lenis = useLenis();

  useEffect(() => {
    let instance: { destroy: () => void } | null = null;
    let cancelled = false;

    import("glightbox").then(({ default: GLightbox }) => {
      if (cancelled) return;
      const lightbox = GLightbox({
        selector: SELECTOR,
        touchNavigation: true,
        loop: true,
        openEffect: "fade",
        closeEffect: "fade",
      });
      lightbox.on("open", () => lenis?.stop());
      lightbox.on("close", () => lenis?.start());
      instance = lightbox;
    });

    return () => {
      cancelled = true;
      instance?.destroy();
      lenis?.start();
    };
  }, [lenis]);

  return (
    <Stagger className="grid auto-rows-56 grid-cols-2 gap-3 md:auto-rows-72 md:grid-cols-4 md:gap-4">
      {items.map((image, index) => (
        <StaggerItem
          key={image.src}
          className={cn(
            index === 0 && "col-span-2 row-span-2",
            (index === 3 || index === 4) && "md:col-span-2",
            index === 5 && "col-span-2",
          )}
        >
          <a
            href={image.src}
            className="ofis-galerisi group relative block size-full overflow-hidden rounded-sm bg-line"
            data-gallery="ofisimiz"
            data-type="image"
            data-description={image.alt}
            aria-label={`${image.alt} — büyük boyutta görüntüle`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center bg-primary/0 text-surface opacity-0 transition-all duration-500 group-hover:bg-primary/40 group-hover:opacity-100"
            >
              <Expand className="size-7" strokeWidth={1.4} />
            </span>
          </a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
