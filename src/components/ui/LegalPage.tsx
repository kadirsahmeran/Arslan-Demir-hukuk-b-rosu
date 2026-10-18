import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { formatDate } from "@/lib/utils";

export function LegalPage({
  title,
  description,
  href,
  updated,
  children,
}: {
  title: string;
  description: string;
  href: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Yasal Bilgilendirme" title={title} description={description} breadcrumbs={[{ name: title, href }]} />
      <div className="container-site py-20 md:py-28">
        <article className="prose prose-lg mx-auto max-w-[70ch] prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary prose-h2:mt-12 prose-h2:text-3xl prose-p:text-ink prose-a:text-primary prose-a:decoration-accent prose-a:underline-offset-4 prose-li:marker:text-accent prose-strong:text-primary">
          <p className="text-sm text-ink-muted">
            Son güncelleme: <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
          {children}
        </article>
      </div>
    </>
  );
}
