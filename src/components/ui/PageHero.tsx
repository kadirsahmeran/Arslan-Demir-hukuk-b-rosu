import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import type { Crumb } from "@/lib/schema";
import type { SiteImage } from "@/lib/images";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  image?: SiteImage;
  children?: ReactNode;
};

/** İç sayfaların lacivert başlık bandı: breadcrumb + tek h1. */
export function PageHero({ eyebrow, title, description, breadcrumbs, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 pb-16 text-surface md:pt-44 md:pb-24">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-primary/70 via-primary/85 to-primary" />
        </>
      )}
      <div className="relative container-site">
        <Breadcrumbs items={breadcrumbs} className="mb-10" />
        {eyebrow && (
          <Reveal y={16}>
            <p className="eyebrow mb-5 text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {eyebrow}
            </p>
          </Reveal>
        )}
        <RevealText
          as="h1"
          trigger="mount"
          text={title}
          className="max-w-4xl text-4xl text-surface md:text-5xl lg:text-6xl"
        />
        {description && (
          <Reveal delay={0.25} y={20}>
            <p className="mt-6 max-w-2xl text-lg text-surface/75">{description}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
