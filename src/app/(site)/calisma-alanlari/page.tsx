import { Suspense } from "react";
import {
  PracticeAreaExplorer,
  PracticeAreaGrid,
  type PracticeAreaSummary,
} from "@/components/practice/PracticeAreaExplorer";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/ui/PageHero";
import { practiceAreas, practiceCategories } from "@/lib/data/practice-areas";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çalışma Alanları",
  description:
    "Aile, ceza, iş, gayrimenkul ve kira, ticaret ve şirketler, miras, icra ve iflas ile tüketici hukuku alanlarında İstanbul Şişli'de hukuki danışmanlık ve dava takibi.",
  path: "/calisma-alanlari",
});

const summaries: PracticeAreaSummary[] = practiceAreas.map(
  ({ slug, title, excerpt, icon, image, categories }) => ({ slug, title, excerpt, icon, image, categories }),
);

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Çalışma Alanları"
        title="Bireylere ve işletmelere hukuki destek"
        description="Her çalışma alanında dosyaları, ilgili hukuk dalında yoğunlaşan avukatlarımız yürütür. Size en yakın alanı seçerek ayrıntılı bilgiye ulaşabilirsiniz."
        breadcrumbs={[{ name: "Çalışma Alanları", href: "/calisma-alanlari" }]}
        image={images.courthouseColumns}
      />
      <section className="py-20 md:py-28">
        <div className="container-site">
          {/* Sunucu HTML'inde tüm alanlar listelenir; filtre istemcide URL'den okunur. */}
          <Suspense
            fallback={
              <PracticeAreaGrid areas={summaries} categories={practiceCategories} active="tumu" />
            }
          >
            <PracticeAreaExplorer areas={summaries} categories={practiceCategories} />
          </Suspense>
        </div>
      </section>
      <CTABand />
    </>
  );
}
