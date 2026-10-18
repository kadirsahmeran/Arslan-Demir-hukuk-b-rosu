import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal y={16}>
          <p className={cn("eyebrow mb-5", dark ? "text-accent" : "text-accent-ink")}>
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <RevealText
        as={as}
        text={title}
        className={cn("text-3xl md:text-4xl lg:text-[2.75rem]", dark && "text-surface")}
      />
      {description && (
        <Reveal delay={0.15} y={20}>
          <p className={cn("mt-6 text-lg", dark ? "text-surface/75" : "text-ink-muted")}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
