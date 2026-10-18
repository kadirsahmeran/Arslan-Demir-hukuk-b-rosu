/**
 * Büronun tüm kimlik, iletişim ve konum bilgileri tek kaynaktan yönetilir.
 * Yerel SEO için adres/telefon bilgisinin her yerde tutarlı olması önemlidir.
 */
export const siteConfig = {
  name: "Arslan & Demir Hukuk Bürosu",
  shortName: "Arslan & Demir",
  legalName: "Arslan & Demir Avukatlık Ortaklığı",
  locale: "tr_TR",
  language: "tr",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arslandemir.av.tr").replace(/\/$/, ""),
  description:
    "Arslan & Demir Hukuk Bürosu, İstanbul Şişli'de aile, ceza, iş, gayrimenkul, ticaret, miras, icra-iflas ve tüketici hukuku alanlarında hukuki danışmanlık ve dava takibi hizmeti sunar.",
  foundedYear: 2009,
  bar: "İstanbul Barosu",
  city: "İstanbul",
  district: "Şişli",
  address: {
    street: "Büyükdere Caddesi No: 112, Kat 7",
    neighborhood: "Esentepe Mahallesi",
    district: "Şişli",
    city: "İstanbul",
    postalCode: "34394",
    country: "TR",
  },
  geo: { latitude: 41.0712, longitude: 29.0106 },
  phone: "+90 212 555 01 23",
  phoneHref: "tel:+902125550123",
  whatsapp: "905325550123",
  email: "info@arslandemir.av.tr",
  hours: [
    { label: "Pazartesi – Cuma", value: "09:00 – 18:30" },
    { label: "Cumartesi", value: "Randevu ile" },
    { label: "Pazar", value: "Kapalı" },
  ],
  openingHoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  languages: ["Türkçe", "İngilizce", "Almanca"],
  transport: [
    {
      title: "Metro",
      text: "M2 Yenikapı–Hacıosman hattı Gayrettepe istasyonundan yaklaşık 6 dakikalık yürüme mesafesindeyiz.",
    },
    {
      title: "Metrobüs",
      text: "Zincirlikuyu durağından Büyükdere Caddesi yönünde yaklaşık 10 dakika yürüyerek ulaşabilirsiniz.",
    },
    {
      title: "Otopark",
      text: "Bina bünyesindeki ücretli otoparktan misafir girişiyle yararlanabilirsiniz.",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.postalCode} ${siteConfig.address.district} / ${siteConfig.address.city}`;

export const mainNav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/avukatlar", label: "Avukatlarımız" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const legalNav = [
  { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/yasal-uyari", label: "Yasal Uyarı" },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
