import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function Intro() {
  return (
    <section id="tanitim" className="py-24 md:py-36">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-6">
          <ParallaxImage
            image={images.documentSigning}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-4/5 rounded-sm"
          />
          <div className="absolute -right-4 -bottom-10 hidden w-2/5 md:block lg:-right-12">
            <ParallaxImage
              image={images.booksRow}
              sizes="20vw"
              strength={14}
              className="aspect-square rounded-sm border-8 border-surface shadow-lift"
            />
          </div>
          <span aria-hidden="true" className="absolute -top-6 -left-6 hidden h-32 w-32 border-t border-l border-accent md:block" />
        </div>

        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Yaklaşımımız"
            title="Her dosyayı, arkasındaki insan hikâyesiyle birlikte ele alıyoruz"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-ink-muted">
              <p>
                Hukuki bir sorunla karşılaşmak; belirsizlik, zaman baskısı ve çoğu zaman yoğun bir
                kaygı demektir. Bu nedenle çalışmalarımızın ilk adımı, durumunuzu dikkatle dinlemek ve
                önünüzdeki seçenekleri anlaşılır bir dille ortaya koymaktır.
              </p>
              <p>
                Her dosya için sorumlu bir avukat belirler, sürecin her aşamasında sizi düzenli olarak
                bilgilendiririz. Gerçekçi olmayan beklentiler oluşturmak yerine, dosyanızın güçlü ve
                zayıf yönlerini açıkça paylaşır; kararlarınızı bilgiye dayanarak vermenize yardımcı
                oluruz.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ButtonLink href="/hakkimizda" variant="link" arrow className="mt-10">
              Büromuzu Tanıyın
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
