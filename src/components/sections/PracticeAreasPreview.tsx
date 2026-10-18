import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/lib/data/practice-areas";

export function PracticeAreasPreview() {
  return (
    <section className="border-y border-line bg-white/60 py-24 md:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Çalışma Alanları"
            title="Bireysel ve kurumsal hukuki ihtiyaçlarınız için"
            description="Her çalışma alanında, ilgili mevzuat ve güncel yargı kararlarını yakından takip eden avukatlarımızla çalışıyoruz."
          />
          <ButtonLink href="/calisma-alanlari" variant="outline" arrow className="shrink-0">
            Tüm Alanlar
          </ButtonLink>
        </div>
        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4" stagger={0.08}>
          {practiceAreas.map((area, index) => (
            <StaggerItem key={area.slug}>
              <PracticeAreaCard area={area} index={index + 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
