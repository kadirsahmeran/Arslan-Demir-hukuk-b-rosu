import { Counter } from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { firmStats } from "@/lib/data/firm";

export function Stats() {
  return (
    <section aria-labelledby="sayilar-baslik" className="py-24 md:py-28">
      <div className="container-site">
        <h2 id="sayilar-baslik" className="sr-only">
          Sayılarla büromuz
        </h2>
        <Stagger as="dl" className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {firmStats.map((stat, index) => (
            <StaggerItem
              key={stat.label}
              className={`flex flex-col-reverse gap-3 px-4 text-center md:px-8 ${index > 0 ? "lg:border-l lg:border-line" : ""} ${index % 2 === 1 ? "border-l border-line lg:border-l" : ""}`}
            >
              <dt className="eyebrow justify-center text-ink-muted">{stat.label}</dt>
              <dd className="font-serif text-5xl text-primary md:text-6xl">
                <Counter value={stat.value} format={stat.format} />
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
