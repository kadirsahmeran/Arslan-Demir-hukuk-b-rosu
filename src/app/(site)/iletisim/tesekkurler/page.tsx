import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";
import { fullAddress, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Talebiniz alındı",
  description: `${siteConfig.name} iletişim talebiniz alınmıştır. İlgili avukatımız sizinle en kısa sürede iletişime geçecektir.`,
  path: "/iletisim/tesekkurler",
  noIndex: true,
});

const steps = [
  {
    n: "01",
    title: "İnceleme",
    text: "Talebiniz, seçtiğiniz çalışma alanındaki avukatımıza iletilir.",
  },
  {
    n: "02",
    title: "Dönüş",
    text: "Avukatımız sizi yazdığınız telefon veya e-posta üzerinden bilgilendirir.",
  },
  {
    n: "03",
    title: "Görüşme",
    text: "Uygun bir randevu saati birlikte belirlenir. Görüşmeler önceden randevuyla yapılır.",
  },
];

export default function ContactThanksPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Talebiniz alındı"
        description="Mesajınız büromuza ulaştı. İlgili avukatımız talebinizi inceleyip sizinle iletişime geçecektir."
        breadcrumbs={[
          { name: "İletişim", href: "/iletisim" },
          { name: "Talebiniz alındı", href: "/iletisim/tesekkurler" },
        ]}
      />

      <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <section aria-labelledby="sonuc-baslik" className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-accent-ink">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Sonraki adımlar
            </p>
            <h2 id="sonuc-baslik" className="mt-5 max-w-xl text-3xl md:text-4xl">
              Mesajınız ilgili avukatımıza iletildi
            </h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Bu aşamada ek bir işlem yapmanız gerekmez. Dönüş süresi, talebin konusuna ve
              büronun iş yoğunluğuna göre değişir.
            </p>
          </Reveal>

          <ol className="mt-12">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 0.08} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-line py-7">
                <span className="font-serif text-2xl leading-none text-accent-ink">{step.n}</span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-primary">{step.title}</h3>
                  <p className="mt-1 text-base text-ink-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2}>
            <p className="mt-4 border-l-2 border-accent py-1 pl-5 text-sm text-ink-muted">
              Form üzerinden iletilen bilgiler ön değerlendirme içindir; avukatlık sözleşmesi veya
              hukuki danışmanlık yerine geçmez. Acil bir konuda bizi doğrudan arayabilirsiniz.
            </p>
            {/* Hero'daki butonlarla aynı davranış: mobilde alt alta, eşit genişlikte ve ortalı
                (en fazla max-w-sm); sm ve üzerinde yan yana, sola hizalı. */}
            <div className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-4 sm:mx-0 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/" arrow className="w-full sm:w-auto">
                Ana sayfaya dön
              </ButtonLink>
              <ButtonLink href="/iletisim" variant="outline" className="w-full sm:w-auto">
                Yeni talep oluştur
              </ButtonLink>
            </div>
          </Reveal>
        </section>

        <aside aria-label="İletişim bilgileri" className="lg:col-span-5">
          <div className="space-y-px overflow-hidden rounded-sm bg-line lg:sticky lg:top-28">
            <div className="bg-primary p-8 text-surface">
              <h2 className="text-2xl text-surface">Beklerken bize ulaşın</h2>
              <p className="mt-3 text-base text-surface/70">
                Talebinizi telefonda veya WhatsApp üzerinden de iletebilirsiniz.
              </p>
              <address className="mt-6 space-y-4 not-italic">
                <p className="flex gap-3 text-surface/80">
                  <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  {fullAddress}
                </p>
                <a href={siteConfig.phoneHref} className="flex gap-3 text-surface/80 hover:text-accent-hover">
                  <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex gap-3 text-surface/80 hover:text-accent-hover">
                  <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-surface/80 hover:text-accent-hover"
                >
                  <WhatsAppIcon className="mt-1 size-4 shrink-0 text-accent" />
                  WhatsApp üzerinden yazın
                  <span className="sr-only">(yeni sekmede açılır)</span>
                </a>
              </address>
            </div>
            <div className="bg-white p-8">
              <h2 className="flex items-center gap-3 font-sans text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                <Clock aria-hidden="true" className="size-4 text-accent" />
                Çalışma Saatleri
              </h2>
              <dl className="mt-5 space-y-2 text-base">
                {siteConfig.hours.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4 border-b border-line pb-2 last:border-0">
                    <dt className="text-ink-muted">{h.label}</dt>
                    <dd className="font-medium text-primary">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
