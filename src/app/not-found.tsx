import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { practiceAreas } from "@/lib/data/practice-areas";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-primary pt-40 pb-24 text-surface md:pt-48 md:pb-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-0 font-serif text-[16rem] leading-none text-surface/[0.04] md:text-[28rem]"
      >
        404
      </span>
      <div className="relative container-site max-w-3xl">
        <p className="eyebrow text-accent">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Hata 404
        </p>
        <h1 className="mt-6 text-4xl text-surface md:text-6xl">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-6 max-w-xl text-lg text-surface/75">
          Sayfa taşınmış, adı değiştirilmiş ya da kaldırılmış olabilir. Aşağıdaki bağlantılardan
          aradığınız bilgiye ulaşabilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/" variant="outlineLight" arrow>
            Ana Sayfaya Dön
          </ButtonLink>
          <ButtonLink href="/calisma-alanlari" variant="link" className="text-surface">
            Çalışma Alanlarımız
          </ButtonLink>
        </div>
        <nav aria-label="Çalışma alanları" className="mt-16 border-t border-surface/15 pt-8">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/calisma-alanlari/${area.slug}`}
                  className="text-surface/70 transition-colors duration-300 hover:text-accent-hover"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
