import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: `${siteConfig.name} internet sitesi gizlilik politikası: bilgilerin korunması, güvenlik önlemleri ve meslek sırrı.`,
  path: "/gizlilik-politikasi",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      description="Sitemizi ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde bilgilerinizin nasıl korunduğuna ilişkin ilkelerimiz."
      href="/gizlilik-politikasi"
      updated="2026-09-01"
    >
      <h2>Genel ilkeler</h2>
      <p>
        {siteConfig.name} olarak, ziyaretçilerimizin ve müvekkillerimizin gizliliğine önem veriyoruz.
        Avukatlık Kanunu&apos;nun öngördüğü sır saklama yükümlülüğü, bizimle paylaştığınız tüm bilgiler
        için geçerlidir. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgiye KVKK Aydınlatma
        Metnimizden ulaşabilirsiniz.
      </p>

      <h2>Toplanan bilgiler</h2>
      <p>
        Sitemizi yalnızca ziyaret ettiğinizde, sunucu kayıtları (IP adresi, tarayıcı türü, ziyaret zamanı)
        dışında kişisel bilgi toplanmaz. İletişim formunu doldurmanız hâlinde paylaştığınız bilgiler
        yalnızca talebinizin değerlendirilmesi amacıyla kullanılır ve pazarlama amacıyla işlenmez.
      </p>

      <h2>Bilgi güvenliği</h2>
      <p>
        Sitemiz ile tarayıcınız arasındaki iletişim SSL/TLS ile şifrelenir. Büromuza ulaşan bilgi ve
        belgeler, yetkisiz erişime karşı korunan sistemlerde ve yalnızca ilgili dosyada çalışan
        avukatlarımızın erişimine açık şekilde saklanır.
      </p>

      <h2>Hassas bilgiler</h2>
      <p>
        İletişim formu, ilk değerlendirme için tasarlanmıştır. Bu aşamada sağlık bilgisi, ceza mahkûmiyeti
        gibi özel nitelikli kişisel verilerinizi veya ayrıntılı belge içeriklerini paylaşmamanızı rica
        ederiz. Bu bilgiler, görüşme sırasında güvenli kanallar aracılığıyla alınacaktır.
      </p>

      <h2>Bağlantılı siteler</h2>
      <p>
        Sitemizde üçüncü taraf sitelere bağlantılar bulunabilir. Bu sitelerin gizlilik uygulamalarından
        büromuz sorumlu değildir.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu politika gerektiğinde güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.
      </p>
    </LegalPage>
  );
}
