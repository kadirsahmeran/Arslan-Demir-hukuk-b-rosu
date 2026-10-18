import { LawyerCard } from "@/components/cards/LawyerCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { lawyers } from "@/lib/data/lawyers";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Avukatlarımız",
  description: `${siteConfig.name} avukat kadrosu: eğitim bilgileri, baro sicil numaraları, yabancı dilleri ve çalışma alanları.`,
  path: "/avukatlar",
});

export default function LawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="Avukatlarımız"
        title="Ekibimizle tanışın"
        description={`Avukatlarımızın tamamı ${siteConfig.bar}'na kayıtlıdır. Her dosya, ilgili alanda çalışan bir sorumlu avukat tarafından yürütülür.`}
        breadcrumbs={[{ name: "Avukatlarımız", href: "/avukatlar" }]}
        image={images.booksRow}
      />
      <section className="py-20 md:py-28">
        <div className="container-site">
          <Stagger className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((lawyer) => (
              <StaggerItem key={lawyer.slug}>
                <LawyerCard lawyer={lawyer} headingLevel="h2" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CTABand />
    </>
  );
}
