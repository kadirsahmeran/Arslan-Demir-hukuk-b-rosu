import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Yasal Uyarı",
  description: `${siteConfig.name} internet sitesinin kullanım koşulları ve yasal uyarı metni.`,
  path: "/yasal-uyari",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Yasal Uyarı"
      description="İnternet sitemizin kullanımına ve içeriklerin niteliğine ilişkin yasal uyarı."
      href="/yasal-uyari"
      updated="2026-09-01"
    >
      <h2>İçeriğin niteliği</h2>
      <p>
        Bu internet sitesi, Türkiye Barolar Birliği Meslek Kuralları ve Avukatlık Kanunu&apos;nun reklam
        yasağına ilişkin hükümleri çerçevesinde, yalnızca büromuz ve faaliyet alanlarımız hakkında
        bilgilendirme amacıyla hazırlanmıştır. Sitede yer alan hiçbir içerik reklam, iş elde etme amacı
        taşıyan bir çağrı veya teklif niteliğinde değildir.
      </p>

      <h2>Hukuki görüş değildir</h2>
      <p>
        Sitede yer alan makaleler ve diğer içerikler genel bilgilendirme amaçlıdır; hukuki görüş veya
        danışmanlık niteliği taşımaz. Her somut olay kendi koşulları içinde değerlendirilmelidir. Sitedeki
        bilgilere dayanarak, bir avukata danışmadan işlem yapılmamalıdır.
      </p>

      <h2>Avukat-müvekkil ilişkisi</h2>
      <p>
        Siteyi ziyaret etmeniz, iletişim formunu doldurmanız veya bize e-posta göndermeniz, aramızda bir
        avukat-müvekkil ilişkisi kurulduğu anlamına gelmez. Bu ilişki, ancak taraflar arasında yazılı bir
        avukatlık sözleşmesi imzalanması ve vekâletname verilmesiyle kurulur.
      </p>

      <h2>Güncellik</h2>
      <p>
        İçerikler yayımlandıkları tarihteki mevzuat ve içtihatlar dikkate alınarak hazırlanmıştır.
        Mevzuattaki değişiklikler nedeniyle bilgilerin güncelliğini yitirmiş olabileceği göz önünde
        bulundurulmalıdır.
      </p>

      <h2>Fikrî mülkiyet</h2>
      <p>
        Sitedeki metinlerin tüm hakları {siteConfig.legalName}&apos;na aittir. İçerikler, kaynak
        gösterilmeksizin kopyalanamaz ve ticari amaçla kullanılamaz.
      </p>
    </LegalPage>
  );
}
