import { notFound } from "next/navigation";
import { LawyerCard } from "@/components/cards/LawyerCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ContactAside } from "@/components/practice/ContactAside";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { getArticlesByCategory } from "@/lib/articles";
import { getLawyersByArea } from "@/lib/data/lawyers";
import { getPracticeArea, practiceAreas } from "@/lib/data/practice-areas";
import { images } from "@/lib/images";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

// Tüm detay sayfaları statik üretilir; bilinmeyen slug ilk istekte de doğrudan 404 döner.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps<"/calisma-alanlari/[slug]">) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `${area.title} Avukatlık Hizmetleri`,
    description: `${siteConfig.city} ${siteConfig.district}: ${area.excerpt}`,
    path: `/calisma-alanlari/${area.slug}`,
    image: images[area.image],
  });
}

export default async function PracticeAreaPage({ params }: PageProps<"/calisma-alanlari/[slug]">) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const relatedLawyers = getLawyersByArea(area.slug);
  const relatedArticles = getArticlesByCategory(area.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Çalışma Alanı"
        title={area.title}
        description={area.excerpt}
        image={images[area.image]}
        breadcrumbs={[
          { name: "Çalışma Alanları", href: "/calisma-alanlari" },
          { name: area.title, href: `/calisma-alanlari/${area.slug}` },
        ]}
      />

      <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-8">
          <Reveal className="space-y-5 text-lg text-ink">
            {area.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          {area.sections.map((section) => (
            <Reveal as="section" key={section.heading} className="mt-16">
              <h2 className="text-3xl md:text-4xl">{section.heading}</h2>
              <span aria-hidden="true" className="mt-5 block h-px w-12 bg-accent" />
              <div className="mt-6 space-y-5 text-ink-muted">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}

          <section className="mt-20" aria-labelledby="konular">
            <Reveal>
              <h2 id="konular" className="text-3xl md:text-4xl">
                Kapsadığı konular
              </h2>
              <span aria-hidden="true" className="mt-5 block h-px w-12 bg-accent" />
            </Reveal>
            <Stagger as="ul" className="mt-8 grid gap-x-8 sm:grid-cols-2" stagger={0.05}>
              {area.topics.map((topic) => (
                <StaggerItem as="li" key={topic} className="flex gap-3 border-b border-line py-4 text-base">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-accent" />
                  {topic}
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <section className="mt-20" aria-labelledby="surec">
            <Reveal>
              <h2 id="surec" className="text-3xl md:text-4xl">
                Süreç nasıl işler?
              </h2>
              <span aria-hidden="true" className="mt-5 block h-px w-12 bg-accent" />
            </Reveal>
            <Stagger as="ol" className="mt-10 space-y-0">
              {area.process.map((step, index) => (
                <StaggerItem as="li" key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-accent font-serif text-lg text-primary">
                      {index + 1}
                    </span>
                    {index < area.process.length - 1 && (
                      <span aria-hidden="true" className="mt-2 w-px flex-1 bg-line" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <h3 className="text-xl md:text-2xl">{step.title}</h3>
                    <p className="mt-2 text-base text-ink-muted">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <section className="mt-20" aria-labelledby="sss">
            <Reveal>
              <h2 id="sss" className="text-3xl md:text-4xl">
                Sık sorulan sorular
              </h2>
              <span aria-hidden="true" className="mt-5 mb-8 block h-px w-12 bg-accent" />
            </Reveal>
            <Accordion items={area.faqs} />
            <JsonLd data={faqSchema(area.faqs)} />
          </section>

          <p className="mt-12 border-l-2 border-accent bg-white p-5 text-sm text-ink-muted">
            Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve hukuki görüş niteliği taşımaz. Her
            somut olay kendi koşulları içinde değerlendirilmelidir.
          </p>
        </div>

        <div className="lg:col-span-4">
          <ContactAside topic={area.title} topicSlug={area.slug} />
        </div>
      </div>

      {relatedLawyers.length > 0 && (
        <section className="border-t border-line py-20 md:py-28" aria-labelledby="ilgili-avukatlar">
          <div className="container-site">
            <h2 id="ilgili-avukatlar" className="text-3xl md:text-4xl">
              Bu alanda çalışan avukatlarımız
            </h2>
            <Stagger className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {relatedLawyers.map((lawyer) => (
                <StaggerItem key={lawyer.slug}>
                  <LawyerCard lawyer={lawyer} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <LatestArticles
        articles={relatedArticles}
        eyebrow="İlgili Makaleler"
        title={`${area.title} hakkında yazılarımız`}
      />
    </>
  );
}
