import { Phone } from "lucide-react";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export function CTABand({
  title = "Hukuki sorununuzu değerlendirelim",
  description = "Durumunuzu ve beklentilerinizi dinleyerek size uygun hukuki yol haritasını birlikte belirleyelim. Randevu talebinizi iletmeniz yeterli.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-surface">
      <ParallaxImage
        image={images.istanbulSkyline}
        sizes="100vw"
        reveal={false}
        strength={12}
        className="absolute! inset-0"
        imageClassName="opacity-30"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary/60" />
      <div className="relative container-site py-24 md:py-32">
        <div className="max-w-3xl">
          <span aria-hidden="true" className="mb-8 block h-px w-16 bg-accent" />
          <RevealText text={title} className="text-4xl text-surface md:text-5xl lg:text-6xl" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg text-surface/75">{description}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ButtonLink href="/iletisim" variant="accent" size="lg" arrow>
                İletişime Geçin
              </ButtonLink>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-3 text-surface/85 transition-colors duration-300 hover:text-accent-hover"
              >
                <Phone aria-hidden="true" className="size-4 text-accent" />
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
