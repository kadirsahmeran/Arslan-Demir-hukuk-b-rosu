import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { fullAddress, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: `${siteConfig.name} tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metni.`,
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca kişisel verilerinizin işlenmesine ilişkin bilgilendirme."
      href="/kvkk"
      updated="2026-09-01"
    >
      <h2>Veri sorumlusu</h2>
      <p>
        Bu aydınlatma metni, veri sorumlusu sıfatıyla <strong>{siteConfig.legalName}</strong> (&quot;Büro&quot;)
        tarafından hazırlanmıştır. Adres: {fullAddress}. E-posta: {siteConfig.email}.
      </p>

      <h2>İşlenen kişisel veriler</h2>
      <p>Büromuzla iletişime geçmeniz veya hizmet almanız hâlinde aşağıdaki kişisel verileriniz işlenebilir:</p>
      <ul>
        <li><strong>Kimlik bilgileri:</strong> ad, soyad, T.C. kimlik numarası (vekâlet ilişkisi kurulması hâlinde)</li>
        <li><strong>İletişim bilgileri:</strong> telefon numarası, e-posta adresi, adres</li>
        <li><strong>Hukuki işlem bilgileri:</strong> uyuşmazlığa ilişkin bilgi ve belgeler, yazışmalar</li>
        <li><strong>İşlem güvenliği bilgileri:</strong> IP adresi, tarayıcı bilgileri ve site kullanım kayıtları</li>
      </ul>

      <h2>İşleme amaçları</h2>
      <ul>
        <li>İletişim ve randevu taleplerinizin değerlendirilmesi ve size dönüş yapılması,</li>
        <li>Avukatlık hizmetinin sunulması, vekâlet ilişkisinin kurulması ve yürütülmesi,</li>
        <li>Avukatlık Kanunu ve ilgili mevzuattan doğan yükümlülüklerin yerine getirilmesi,</li>
        <li>Çıkar çatışması kontrolünün yapılması,</li>
        <li>Bilgi güvenliği süreçlerinin yürütülmesi ve hukuki uyuşmazlıklarda delil olarak kullanılması.</li>
      </ul>

      <h2>Hukuki sebepler ve toplama yöntemi</h2>
      <p>
        Kişisel verileriniz; internet sitemizdeki iletişim formu, e-posta, telefon ve yüz yüze görüşmeler
        aracılığıyla toplanmaktadır. Verileriniz KVKK&apos;nın 5. maddesinde yer alan; bir sözleşmenin
        kurulması veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüğün yerine getirilmesi, bir hakkın
        tesisi, kullanılması veya korunması ve meşru menfaat hukuki sebeplerine dayanılarak işlenmektedir.
      </p>

      <h2>Aktarım</h2>
      <p>
        Kişisel verileriniz, yukarıda belirtilen amaçlarla sınırlı olarak; yetkili kamu kurum ve
        kuruluşlarına, yargı mercilerine, icra dairelerine, arabuluculara, bilirkişilere ve hizmet
        aldığımız bilgi teknolojileri tedarikçilerine mevzuata uygun şekilde aktarılabilir. Yurt dışına
        aktarım, yalnızca KVKK&apos;nın 9. maddesindeki şartların sağlanması hâlinde yapılır.
      </p>

      <h2>Haklarınız</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca Büro&apos;ya başvurarak;</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini, şartları oluşmuşsa silinmesini isteme,</li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
      </ul>
      <p>
        haklarına sahipsiniz. Başvurularınızı yazılı olarak adresimize veya{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> adresine iletebilirsiniz. Başvurular en
        geç otuz gün içinde ücretsiz olarak sonuçlandırılır.
      </p>
      <p>
        Avukatlık mesleğinin gereği olarak, meslek sırrı kapsamındaki bilgilere ilişkin talepler Avukatlık
        Kanunu hükümleri saklı kalmak kaydıyla değerlendirilir.
      </p>
    </LegalPage>
  );
}
