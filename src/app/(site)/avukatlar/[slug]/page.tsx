import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BookOpen, GraduationCap, Languages, Mail, ScrollText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { PracticeIcon } from "@/components/ui/PracticeIcon";
import { getArticlesByAuthor } from "@/lib/articles";
import { getLawyer, lawyers } from "@/lib/data/lawyers";
import { getPracticeArea } from "@/lib/data/practice-areas";
import { images } from "@/lib/images";
import { attorneySchema, personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Tüm detay sayfaları statik üretilir; bilinmeyen slug ilk istekte de doğrudan 404 döner.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return lawyers.map((lawyer) => ({ slug: lawyer.slug }));
}

export async function generateMetadata({ params }: PageProps<"/avukatlar/[slug]">) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) return {};
  return buildMetadata({
    title: `${lawyer.name} — ${lawyer.title}`,
    description: `${lawyer.name}: ${lawyer.summary} ${lawyer.barNumber}.`,
    path: `/avukatlar/${lawyer.slug}`,
    image: images[lawyer.image],
    type: "profile",
  });
}

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof GraduationCap;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" className="border-t border-line pt-8">
      <h2 className="flex items-center gap-3 font-sans text-sm font-semibold tracking-[0.18em] text-primary uppercase">
        <Icon aria-hidden="true" className="size-4 text-accent" />
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

export default async function LawyerPage({ params }: PageProps<"/avukatlar/[slug]">) {
  const { slug } = await params;
  const lawyer = getLawyer(slug);
  if (!lawyer) notFound();

  const image = images[lawyer.image];
  const articles = getArticlesByAuthor(lawyer.slug);
  const areas = lawyer.areas.map(getPracticeArea).filter((a) => a !== undefined);

  return (
    <>
      <section className="bg-primary pt-36 pb-16 text-surface md:pt-44 md:pb-0">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { name: "Avukatlarımız", href: "/avukatlar" },
              { name: lawyer.name, href: `/avukatlar/${lawyer.slug}` },
            ]}
            className="mb-10"
          />
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="pb-0 md:col-span-7 md:pb-20">
              <p className="eyebrow text-accent">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {lawyer.title}
              </p>
              <RevealText
                as="h1"
                trigger="mount"
                text={lawyer.name}
                className="mt-5 text-4xl text-surface md:text-6xl"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-surface/75">{lawyer.summary}</p>
                <p className="mt-6 text-sm tracking-wide text-surface/60">{lawyer.barNumber}</p>
              </Reveal>
            </div>
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-t-sm md:col-span-5 md:ml-auto">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container-site grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Biyografi</h2>
            <span aria-hidden="true" className="mt-5 block h-px w-12 bg-accent" />
          </Reveal>
          <Reveal className="mt-8 space-y-5 text-ink-muted" delay={0.1}>
            {lawyer.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <ButtonLink href="/iletisim" arrow>
              Randevu Talebi
            </ButtonLink>
            <a
              href={`mailto:${lawyer.email}`}
              className="inline-flex items-center gap-2 px-2 text-primary underline-offset-4 hover:underline"
            >
              <Mail aria-hidden="true" className="size-4 text-accent-ink" />
              {lawyer.email}
            </a>
          </Reveal>
        </div>

        <div className="space-y-10 lg:col-span-5">
          <InfoBlock icon={ScrollText} title="Çalışma Alanları">
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/calisma-alanlari/${area.slug}`}
                    className="group flex items-center gap-3 text-primary transition-colors hover:text-accent-ink"
                  >
                    <PracticeIcon icon={area.icon} className="size-5 text-accent" />
                    <span className="border-b border-transparent group-hover:border-accent">{area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock icon={GraduationCap} title="Eğitim">
            <ul className="space-y-4">
              {lawyer.education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-primary">{e.degree}</p>
                  <p className="text-base text-ink-muted">
                    {e.school}, {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock icon={Languages} title="Yabancı Diller ve Üyelikler">
            <p className="text-ink-muted">{lawyer.languages.join(", ")}</p>
            <ul className="mt-3 space-y-1 text-base text-ink-muted">
              {lawyer.memberships.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </InfoBlock>

          {lawyer.publications.length > 0 && (
            <InfoBlock icon={BookOpen} title="Yayınlar">
              <ul className="space-y-3 text-base text-ink-muted">
                {lawyer.publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </InfoBlock>
          )}
        </div>
      </div>

      <LatestArticles articles={articles} eyebrow="Makaleleri" title={`${lawyer.name} tarafından yazılanlar`} />

      <JsonLd data={[personSchema(lawyer), attorneySchema(lawyer)]} />
    </>
  );
}
