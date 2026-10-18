import { Clock, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

/** Detay sayfalarında sağda yapışkan (sticky) duran iletişim kutusu. */
export function ContactAside({ topic, topicSlug }: { topic?: string; topicSlug?: string }) {
  return (
    <aside className="sticky top-28 rounded-sm bg-primary p-8 text-surface shadow-lift">
      <p className="eyebrow text-accent">
        <span aria-hidden="true" className="h-px w-6 bg-accent" />
        İletişim
      </p>
      <h2 className="mt-4 text-2xl text-surface">
        {topic ? `${topic} konusunda bilgi almak ister misiniz?` : "Randevu talebinde bulunun"}
      </h2>
      <p className="mt-4 text-base text-surface/70">
        Durumunuzu kısaca iletmeniz hâlinde ilgili avukatımız sizinle iletişime geçecektir.
      </p>
      <ButtonLink
        href={topicSlug ? `/iletisim?konu=${topicSlug}` : "/iletisim"}
        variant="accent"
        arrow
        className="mt-8 w-full"
      >
        Randevu Talebi
      </ButtonLink>
      <ul className="mt-8 space-y-4 border-t border-surface/15 pt-6 text-base">
        <li>
          <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-surface/85 hover:text-accent-hover">
            <Phone aria-hidden="true" className="size-4 text-accent" />
            {siteConfig.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-surface/85 hover:text-accent-hover">
            <Mail aria-hidden="true" className="size-4 text-accent" />
            {siteConfig.email}
          </a>
        </li>
        <li className="flex items-center gap-3 text-surface/70">
          <Clock aria-hidden="true" className="size-4 text-accent" />
          Hafta içi {siteConfig.hours[0].value}
        </li>
      </ul>
    </aside>
  );
}
