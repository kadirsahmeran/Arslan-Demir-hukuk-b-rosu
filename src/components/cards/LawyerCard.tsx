import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import type { Lawyer } from "@/lib/data/lawyers";
import { getPracticeArea } from "@/lib/data/practice-areas";

/** Hover'da fotoğraf gri tondan renkliye geçer. */
export function LawyerCard({ lawyer, headingLevel = "h3" }: { lawyer: Lawyer; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const image = images[lawyer.image];
  return (
    <Link href={`/avukatlar/${lawyer.slug}`} className="group block">
      <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-primary-light">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
      </div>
      <div className="mt-5">
        <p className="eyebrow text-accent-ink">{lawyer.title}</p>
        <Heading className="mt-2 text-2xl transition-colors duration-300 group-hover:text-accent-ink">
          {lawyer.name}
        </Heading>
        <p className="mt-2 text-sm text-ink-muted">
          {lawyer.areas.map((slug) => getPracticeArea(slug)?.title).filter(Boolean).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
