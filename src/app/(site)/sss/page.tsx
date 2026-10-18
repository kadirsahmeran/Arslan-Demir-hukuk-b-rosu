import { Reveal } from "@/components/motion/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { allFaqItems, faqCategories } from "@/lib/data/faq";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Randevu, vekâlet, ücretlendirme, dava süreçleri ve kişisel verilerin korunması hakkında büromuza sıkça yöneltilen sorular ve yanıtları.",
  path: "/sss",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="SSS"
        title="Sık sorulan sorular"
        description="Büromuzla çalışma süreci, vekâlet ilişkisi ve dava süreçleri hakkında en çok merak edilen konuları derledik."
        breadcrumbs={[{ name: "SSS", href: "/sss" }]}
      />
      <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <nav aria-label="Soru kategorileri" className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5 text-accent-ink">
              <span aria-hidden="true" className="h-px w-6 bg-accent" />
              Kategoriler
            </p>
            <ul className="space-y-1 border-l border-line">
              {faqCategories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className="-ml-px block border-l-2 border-transparent py-2 pl-4 text-ink-muted transition-colors duration-300 hover:border-accent hover:text-primary"
                  >
                    {category.title}
                    <span className="ml-2 text-xs tabular-nums">({category.items.length})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="space-y-20 lg:col-span-8">
          {faqCategories.map((category) => (
            <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-baslik`} className="scroll-mt-28">
              <Reveal>
                <h2 id={`${category.slug}-baslik`} className="text-3xl md:text-4xl">
                  {category.title}
                </h2>
                <span aria-hidden="true" className="mt-5 mb-6 block h-px w-12 bg-accent" />
              </Reveal>
              <Accordion items={category.items} />
            </section>
          ))}
        </div>
      </div>
      <CTABand
        title="Sorunuzun yanıtını bulamadınız mı?"
        description="Bize iletişim formu, telefon veya e-posta yoluyla ulaşabilirsiniz. Talebiniz ilgili avukatımıza iletilecektir."
      />
      <JsonLd data={faqSchema(allFaqItems)} />
    </>
  );
}
