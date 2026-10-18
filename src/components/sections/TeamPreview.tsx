import { LawyerCard } from "@/components/cards/LawyerCard";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lawyers } from "@/lib/data/lawyers";

export function TeamPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Avukatlarımız"
            title="Dosyanızı birlikte yürüteceğimiz ekip"
            description="Avukatlarımız belirli hukuk dallarında yoğunlaşarak çalışır ve dosyaları gerektiğinde birlikte değerlendirir."
          />
          <ButtonLink href="/avukatlar" variant="outline" arrow className="shrink-0">
            Tüm Ekip
          </ButtonLink>
        </div>
        <Stagger className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {lawyers.slice(0, 4).map((lawyer) => (
            <StaggerItem key={lawyer.slug}>
              <LawyerCard lawyer={lawyer} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
