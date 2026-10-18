import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Çerez Politikası",
  description: `${siteConfig.name} internet sitesinde kullanılan çerez türleri, kullanım amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz.`,
  path: "/cerez-politikasi",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Çerez Politikası"
      description="İnternet sitemizde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgilendirme."
      href="/cerez-politikasi"
      updated="2026-09-01"
    >
      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen
        küçük metin dosyalarıdır. Çerezler sayesinde site, tercihlerinizi hatırlayabilir ve daha iyi bir
        kullanım deneyimi sunabilir.
      </p>

      <h2>Kullandığımız çerez türleri</h2>
      <h3>Zorunlu çerezler</h3>
      <p>
        Sitenin temel işlevlerinin çalışması için gereklidir ve devre dışı bırakılamaz. Örneğin çerez
        tercihinizin hatırlanması bu kapsamdadır. Bu çerezler kişisel veri içermez.
      </p>
      <h3>Analitik çerezler</h3>
      <p>
        Ziyaretçilerin siteyi nasıl kullandığını anonim olarak anlamamıza yardımcı olur. Bu çerezler
        yalnızca açık rızanız alındıktan sonra kullanılır.
      </p>
      <h3>Üçüncü taraf içerikler</h3>
      <p>
        İletişim sayfamızdaki harita, Google Haritalar hizmeti aracılığıyla gösterilmektedir. Bu hizmet,
        Google&apos;ın kendi gizlilik politikasına tabi çerezler kullanabilir.
      </p>

      <h2>Tercihlerinizi nasıl yönetebilirsiniz?</h2>
      <p>
        Sitemizi ilk ziyaretinizde görüntülenen çerez bandı üzerinden tercihinizi belirleyebilirsiniz.
        Ayrıca tarayıcınızın ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Tarayıcı
        verilerinizi temizlediğinizde çerez bandı tekrar görüntülenecektir.
      </p>

      <h2>İletişim</h2>
      <p>
        Çerez politikamıza ilişkin sorularınız için <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
        adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
