import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-primary text-surface">
      <ParallaxImage
        image={images.heroLibrary}
        sizes="100vw"
        preload
        strength={10}
        className="absolute! inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/50"
      />

      <div className="relative container-site pt-40 pb-24 md:pb-32">
        <Reveal y={16} delay={0.1}>
          <p className="eyebrow text-accent">
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            {siteConfig.district}, {siteConfig.city} · {siteConfig.foundedYear}&apos;dan bu yana
          </p>
        </Reveal>
        <RevealText
          as="h1"
          trigger="mount"
          delay={0.2}
          text="Hukuki süreçlerinizde özenli, şeffaf ve ulaşılabilir bir yol arkadaşı"
          className="mt-6 max-w-5xl text-[2.5rem] leading-[1.08] text-surface sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <Reveal delay={0.7} y={24}>
          <p className="mt-8 max-w-2xl text-lg text-surface/80 md:text-xl">
            {siteConfig.name}, {siteConfig.city} {siteConfig.district}&apos;teki ofisinde bireylere ve
            işletmelere aile, ceza, iş, gayrimenkul, ticaret ve miras hukuku başta olmak üzere
            sekiz alanda hukuki danışmanlık ve dava takibi hizmeti sunar.
          </p>
        </Reveal>
        <Reveal delay={0.85} y={24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink href="/iletisim" variant="accent" size="lg" arrow>
                Randevu Talebi
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/calisma-alanlari" variant="outlineLight" size="lg">
              Çalışma Alanlarımız
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <a
        href="#tanitim"
        className="group absolute right-6 bottom-8 hidden flex-col items-center gap-3 text-xs tracking-[0.3em] text-surface/70 uppercase transition-colors hover:text-accent md:flex lg:right-12"
        aria-label="Aşağı kaydır"
      >
        <span className="[writing-mode:vertical-rl]">Keşfedin</span>
        <span aria-hidden="true" className="relative h-16 w-px overflow-hidden bg-surface/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_2s_ease-in-out_infinite] bg-accent" />
        </span>
      </a>
    </section>
  );
}
