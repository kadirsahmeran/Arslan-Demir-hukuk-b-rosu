import { Check } from "lucide-react";
import { OfficeGallery } from "@/components/gallery/OfficeGallery";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CTABand } from "@/components/sections/CTABand";
import { Principles } from "@/components/sections/Principles";
import { Timeline } from "@/components/sections/Timeline";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline, values, workingPrinciples } from "@/lib/data/firm";
import { images, officeGallery } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description: `${siteConfig.foundedYear} yılında İstanbul Şişli'de kurulan ${siteConfig.name}'nun hikâyesi, misyonu, değerleri ve çalışma prensipleri.`,
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Güvene dayalı, uzun soluklu müvekkil ilişkileri"
        description={`${siteConfig.foundedYear} yılından bu yana ${siteConfig.city} ${siteConfig.district}'teki ofisimizde, bireylere ve işletmelere hukuki danışmanlık ve dava takibi hizmeti sunuyoruz.`}
        breadcrumbs={[{ name: "Hakkımızda", href: "/hakkimizda" }]}
        image={images.libraryShelves}
      />

      {/* Hikâye */}
      <section className="py-24 md:py-32">
        <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Hikâyemiz" title="İki avukatın ortak bir anlayışla başlayan yolculuğu" />
          </div>
          <Reveal className="space-y-5 text-ink-muted lg:col-span-7">
            <p>
              Büromuz, {siteConfig.foundedYear} yılında Av. Mehmet Arslan ve Av. Zeynep Demir tarafından
              Şişli&apos;de kuruldu. Kurucularımızın farklı hukuk dallarındaki birikimlerini bir araya
              getirme fikri, bugün de sürdürdüğümüz temel yaklaşımın çıkış noktası oldu: Bir hukuki
              sorunu, ilgili tüm boyutlarıyla birlikte değerlendirmek.
            </p>
            <p>
              Aradan geçen yıllarda ekibimiz büyüdü, çalışma alanlarımız genişledi ve 2023 yılında
              Esentepe&apos;deki yeni ofisimize taşındık. Değişmeyen ise müvekkillerimizle kurduğumuz
              ilişkinin niteliği oldu: Açık iletişim, gerçekçi değerlendirmeler ve her aşamada
              ulaşılabilir bir sorumlu avukat.
            </p>
            <p>
              Bugün Türkçe, İngilizce ve Almanca dillerinde; bireysel müvekkillerin yanı sıra aile
              şirketlerine, yabancı ortaklı işletmelere ve yurt dışında yaşayan Türk vatandaşlarına
              hizmet veriyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misyon & vizyon */}
      <section className="pb-24 md:pb-32">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <div className="h-full border-t-2 border-accent bg-white p-10 shadow-soft md:p-12">
                <h2 className="text-3xl">{value.title}</h2>
                <p className="mt-5 text-ink-muted">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Principles />

      {/* Çalışma prensipleri */}
      <section className="py-24 md:py-32">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Çalışma Prensiplerimiz"
              title="Dosyanız büromuza ulaştığı andan itibaren"
            />
            <Stagger as="ul" className="mt-10 space-y-5">
              {workingPrinciples.map((item) => (
                <StaggerItem as="li" key={item} className="flex gap-4">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-accent">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  <span className="text-ink-muted">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <ParallaxImage
            image={images.meetingTeam}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-4/3 rounded-sm"
          />
        </div>
      </section>

      {/* Zaman çizelgesi */}
      <section className="border-y border-line bg-white/60 py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Kuruluştan Bugüne"
            title="Büromuzun yolculuğu"
            align="center"
            className="mb-20"
          />
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Ofisimiz */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ofisimiz"
            title="Esentepe'deki çalışma ortamımız"
            description="Müvekkillerimizle gizlilik içinde görüşebileceğimiz toplantı odalarımız ve çalışma alanlarımızdan kareler. Büyütmek için görsellere tıklayabilirsiniz."
            className="mb-14"
          />
          <OfficeGallery items={officeGallery.map((key) => images[key])} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
