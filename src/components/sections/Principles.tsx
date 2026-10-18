import { Compass, Eye, Lock, Phone } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/data/firm";

const icons = { lock: Lock, eye: Eye, phone: Phone, compass: Compass };

export function Principles() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-surface md:py-32">
      <div aria-hidden="true" className="absolute inset-y-0 left-1/2 hidden w-px bg-surface/5 lg:block" />
      <div className="relative container-site">
        <SectionHeading
          tone="dark"
          eyebrow="İlkelerimiz"
          title="Çalışma biçimimizi belirleyen dört ilke"
          description="Mesleki sorumluluğumuzun gereği olarak her dosyada aynı özeni göstermeye çalışıyoruz."
        />
        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-sm bg-surface/10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, index) => {
            const Icon = icons[p.icon];
            return (
              <StaggerItem key={p.title} className="group bg-primary p-8 transition-colors duration-500 hover:bg-primary-light md:p-10">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" strokeWidth={1.4} className="size-8 text-accent" />
                  <span className="font-serif text-sm text-surface/30">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl text-surface">{p.title}</h3>
                <span aria-hidden="true" className="mt-4 block h-px w-8 bg-accent transition-[width] duration-700 ease-out-expo group-hover:w-16" />
                <p className="mt-5 text-base text-surface/70">{p.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
