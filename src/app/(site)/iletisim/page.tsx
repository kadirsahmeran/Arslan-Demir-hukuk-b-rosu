import { Suspense } from "react";
import { Bus, Car, Clock, Mail, MapPin, Phone, TrainFront } from "lucide-react";
import { ContactForm, ContactFormWithTopic } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { practiceAreas } from "@/lib/data/practice-areas";
import { buildMetadata } from "@/lib/seo";
import { fullAddress, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "İletişim ve Randevu",
  description: `${siteConfig.name} iletişim bilgileri: ${fullAddress}. Telefon: ${siteConfig.phone}. Randevu talebinizi çevrim içi formla iletebilirsiniz.`,
  path: "/iletisim",
});

const topics = [
  ...practiceAreas.map((a) => ({ value: a.slug, label: a.title })),
  { value: "diger", label: "Diğer" },
];

const transportIcons = [TrainFront, Bus, Car];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.district}, ${siteConfig.address.city}`,
)}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Randevu talebinizi iletin"
        description="Formu doldurarak, telefonla veya e-posta yoluyla bize ulaşabilirsiniz. Talebiniz ilgili çalışma alanındaki avukatımıza iletilir."
        breadcrumbs={[{ name: "İletişim", href: "/iletisim" }]}
      />

      <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <section aria-labelledby="form-baslik" className="lg:col-span-7">
          <Reveal>
            <h2 id="form-baslik" className="text-3xl md:text-4xl">
              İletişim formu
            </h2>
            <p className="mt-4 mb-10 text-ink-muted">
              Lütfen hukuki durumunuzu kısaca özetleyin. Formla ilettiğiniz bilgiler yalnızca
              talebinizin değerlendirilmesi amacıyla kullanılır.
            </p>
          </Reveal>
          <Suspense fallback={<ContactForm topics={topics} />}>
            <ContactFormWithTopic topics={topics} />
          </Suspense>
        </section>

        <aside aria-label="İletişim bilgileri" className="lg:col-span-5">
          <div className="space-y-px overflow-hidden rounded-sm bg-line lg:sticky lg:top-28">
            <div className="bg-primary p-8 text-surface">
              <h2 className="text-2xl text-surface">{siteConfig.name}</h2>
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

      <section aria-labelledby="ulasim-baslik" className="border-t border-line bg-white/60 py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 id="ulasim-baslik" className="text-3xl md:text-4xl">
                Ofisimize ulaşım
              </h2>
              <p className="mt-4 text-ink-muted">
                Ofisimiz {siteConfig.district} Esentepe&apos;de, Büyükdere Caddesi üzerinde yer almaktadır.
                Görüşmeleriniz için önceden randevu almanızı rica ederiz.
              </p>
            </Reveal>
            <ul className="mt-10 space-y-8">
              {siteConfig.transport.map((t, i) => {
                const Icon = transportIcons[i] ?? MapPin;
                return (
                  <Reveal as="li" key={t.title} delay={i * 0.08} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-primary text-accent">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-semibold">{t.title}</h3>
                      <p className="mt-1 text-base text-ink-muted">{t.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-line bg-line">
              <iframe
                src={mapSrc}
                title={`${siteConfig.name} konumu — Google Haritalar`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 grayscale-[30%]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
