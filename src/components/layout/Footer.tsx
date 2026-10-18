import Link from "next/link";
import { cacheLife } from "next/cache";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import { practiceAreas } from "@/lib/data/practice-areas";
import { fullAddress, legalNav, mainNav, siteConfig } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="eyebrow mb-6 text-accent">
      <span aria-hidden="true" className="h-px w-6 bg-accent" />
      {children}
    </h2>
  );
}

const linkClass = "text-surface/70 transition-colors duration-300 hover:text-accent-hover";

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-surface md:pb-0">
      <div className="container-site grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-base text-surface/70">
            {siteConfig.foundedYear} yılından bu yana {siteConfig.city} {siteConfig.district}&apos;teki
            ofisimizde bireylere ve kurumlara hukuki danışmanlık ve dava takibi hizmeti sunuyoruz.
          </p>
          <p className="mt-6 text-sm text-surface/60">
            Avukatlarımız {siteConfig.bar}&apos;na kayıtlıdır ve Avukatlık Kanunu ile Türkiye Barolar
            Birliği meslek kurallarına tabidir.
          </p>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn sayfamız (yeni sekmede açılır)"
            className="mt-6 inline-grid size-10 place-items-center rounded-sm border border-surface/20 text-surface/80 transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>

        <nav aria-label="Hızlı bağlantılar" className="lg:col-span-2">
          <FooterHeading>Büro</FooterHeading>
          <ul className="space-y-3 text-base">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Çalışma alanları" className="lg:col-span-3">
          <FooterHeading>Çalışma Alanları</FooterHeading>
          <ul className="space-y-3 text-base">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/calisma-alanlari/${area.slug}`} className={linkClass}>
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterHeading>İletişim</FooterHeading>
          <address className="space-y-4 text-base not-italic">
            <p className="flex gap-3 text-surface/70">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              {fullAddress}
            </p>
            <a href={siteConfig.phoneHref} className={`flex gap-3 ${linkClass}`}>
              <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className={`flex gap-3 ${linkClass}`}>
              <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
              {siteConfig.email}
            </a>
          </address>
          <div className="mt-6 flex gap-3 text-base text-surface/70">
            <Clock aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              {siteConfig.hours.map((h) => (
                <div key={h.label} className="contents">
                  <dt>{h.label}</dt>
                  <dd className="text-surface">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="border-t border-surface/10">
        <div className="container-site flex flex-col gap-4 py-8 text-sm text-surface/60 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.legalName}. Tüm hakları saklıdır.
          </p>
          <nav aria-label="Yasal bağlantılar">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
