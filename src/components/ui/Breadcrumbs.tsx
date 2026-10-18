import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

/** Görünür breadcrumb + BreadcrumbList şeması. İlk öğe her zaman Ana Sayfa'dır. */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const all: Crumb[] = [{ name: "Ana Sayfa", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Sayfa konumu" className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((item, index) => {
            const isLast = index === all.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-surface">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-surface/65 transition-colors duration-300 hover:text-accent-hover"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight aria-hidden="true" className="size-3.5 text-accent" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
