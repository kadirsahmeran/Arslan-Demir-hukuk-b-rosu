import { siteConfig } from "@/lib/site";
import { lawyers } from "@/lib/data/lawyers";
import { practiceAreas } from "@/lib/data/practice-areas";

/** Ana sayfadaki "Sayılarla Büro" göstergeleri — başarı oranı/dava sayısı içermez. */
export const firmStats = [
  { value: siteConfig.foundedYear, label: "Kuruluş yılı", format: "year" as const },
  { value: lawyers.length, label: "Avukat", format: "number" as const },
  { value: practiceAreas.length, label: "Çalışma alanı", format: "number" as const },
  { value: siteConfig.languages.length, label: "Hizmet verilen dil", format: "number" as const },
];

export const principles = [
  {
    icon: "lock",
    title: "Gizlilik",
    description:
      "Avukatlık Kanunu'nun öngördüğü sır saklama yükümlülüğünü, dosyanızla ilgili her bilgide ve her iletişim kanalında titizlikle uygularız.",
  },
  {
    icon: "eye",
    title: "Şeffaflık",
    description:
      "Sürecin hangi aşamada olduğunu, olası riskleri ve seçenekleri açık ve anlaşılır bir dille paylaşır; gerçekçi olmayan beklentiler oluşturmayız.",
  },
  {
    icon: "phone",
    title: "Ulaşılabilirlik",
    description:
      "Her dosyanın sorumlu bir avukatı vardır. Sorularınıza makul süre içinde yanıt verir, önemli gelişmeleri gecikmeden bildiririz.",
  },
  {
    icon: "compass",
    title: "Alan Odaklı Çalışma",
    description:
      "Avukatlarımız belirli hukuk dallarında yoğunlaşarak çalışır; dosyalar, ilgili alanda deneyim sahibi ekip üyeleri tarafından birlikte değerlendirilir.",
  },
] as const;

export const values = [
  {
    title: "Misyonumuz",
    text: "Müvekkillerimizin hukuki sorunlarını, mevzuata ve meslek kurallarına bağlı kalarak, anlaşılır bir dille ve özenle ele almak; her dosyada hak kayıplarını önleyecek adımları zamanında atmak.",
  },
  {
    title: "Vizyonumuz",
    text: "Bireylerin ve işletmelerin uzun yıllar boyunca güvenle başvurabileceği, mesleki etik ilkelerden ödün vermeyen ve sürekli kendini geliştiren bir hukuk bürosu olmak.",
  },
];

export const workingPrinciples = [
  "Her dosya için sorumlu bir avukat belirlenir ve müvekkil bu avukatla doğrudan iletişim kurar.",
  "Hukuki görüşler yazılı olarak ve gerekçeleriyle paylaşılır.",
  "Vekâlet ücreti ve masraflar, Avukatlık Asgari Ücret Tarifesi çerçevesinde iş başlamadan önce yazılı olarak belirlenir.",
  "Çıkar çatışması kontrolü yapılmadan hiçbir dosya kabul edilmez.",
  "Müvekkil bilgileri KVKK ve meslek sırrı kurallarına uygun şekilde saklanır.",
];

export const timeline = [
  {
    year: "2009",
    title: "Kuruluş",
    text: "Av. Mehmet Arslan ve Av. Zeynep Demir, Şişli'de iki kişilik bir büro olarak çalışmaya başladı.",
  },
  {
    year: "2012",
    title: "Kurumsal danışmanlık",
    text: "Şirketlere yönelik sürekli hukuki danışmanlık hizmeti yapılandırıldı.",
  },
  {
    year: "2014",
    title: "Ekibin genişlemesi",
    text: "Ceza ve iş hukuku alanlarında çalışmak üzere ekibe yeni avukatlar katıldı.",
  },
  {
    year: "2017",
    title: "Avukatlık ortaklığı",
    text: "Büro, İstanbul Barosu siciline kayıtlı avukatlık ortaklığı yapısına dönüştü.",
  },
  {
    year: "2020",
    title: "Dijital altyapı",
    text: "Müvekkil iletişimi ve dosya takibi için güvenli dijital altyapıya geçildi.",
  },
  {
    year: "2023",
    title: "Yeni ofis",
    text: "Büro, Esentepe'deki daha geniş ve ulaşımı kolay yeni ofisine taşındı.",
  },
];
