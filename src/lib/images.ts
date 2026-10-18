/**
 * Sitedeki tüm görseller bu dosyada toplanır. Bir görseli değiştirmek için
 * yalnızca ilgili kaydın `src` ve `alt` değerini güncellemek yeterlidir.
 * Kaynaklar: Unsplash (images.unsplash.com) ve Pixabay (cdn.pixabay.com).
 */
export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;

const pixabay = (path: string) => `https://cdn.pixabay.com/photo/${path}`;

export const images = {
  // Genel
  heroLibrary: {
    src: unsplash("1505664194779-8beaceb93744"),
    alt: "Ahşap raflarında ciltli hukuk kitapları ve büstler bulunan klasik bir kütüphane",
  },
  documentSigning: {
    src: unsplash("1450101499163-c8848c66ca85"),
    alt: "Masada bir belgeyi dolma kalemle imzalayan kişi",
  },
  istanbulSkyline: {
    src: unsplash("1524231757912-21f4fe3a7200"),
    alt: "Galata Kulesi ile İstanbul silüeti",
  },
  courthouseColumns: {
    src: unsplash("1436450412740-6b988f486c6b"),
    alt: "Neoklasik bir adliye binasının taş sütunları",
  },
  libraryShelves: {
    src: unsplash("1507842217343-583bb7270b66"),
    alt: "Tavana kadar uzanan kitap rafları",
  },
  booksRow: {
    src: unsplash("1495446815901-a7297e633e8d"),
    alt: "Yan yana dizilmiş eski ciltli kitaplar",
  },
  meetingTeam: {
    src: unsplash("1521737604893-d14cc237f11d"),
    alt: "Toplantı masasında dosyalar üzerinde çalışan ekip",
  },

  // Ofisimiz galerisi
  officeLobby: {
    src: unsplash("1497366216548-37526070297c"),
    alt: "Büro girişindeki aydınlık karşılama alanı ve koridor",
  },
  officeOpenSpace: {
    src: unsplash("1497366811353-6870744d04b2"),
    alt: "Geniş pencereli ortak çalışma alanı",
  },
  officeLounge: {
    src: unsplash("1524758631624-e2822e304c36"),
    alt: "Müvekkil bekleme salonu ve oturma grubu",
  },
  officeMeetingRoom: {
    src: unsplash("1497215728101-856f4ea42174"),
    alt: "Doğal ışık alan toplantı odası",
  },
  officeBoardroom: {
    src: unsplash("1462826303086-329426d1aef5"),
    alt: "Uzun toplantı masasının bulunduğu büyük toplantı salonu",
  },

  // Çalışma alanları
  areaFamily: {
    src: unsplash("1511895426328-dc8714191300"),
    alt: "Gün batımında el ele tutuşan aile",
  },
  areaCriminal: {
    src: unsplash("1589994965851-a8f479c573a9"),
    alt: "Adaleti simgeleyen bronz heykel",
  },
  areaEmployment: {
    src: unsplash("1542744173-8e7e53415bb0"),
    alt: "Toplantı masasında çalışan ekip üyeleri",
  },
  areaRealEstate: {
    src: unsplash("1560518883-ce09059eeffa"),
    alt: "Ahşap masa üzerinde ev maketi ve anahtar",
  },
  areaCommercial: {
    src: unsplash("1486406146926-c627a92ad1ab"),
    alt: "Aşağıdan görülen cam cepheli gökdelenler",
  },
  areaInheritance: {
    src: unsplash("1600585154340-be6161a56a0c"),
    alt: "Bahçe içinde modern bir müstakil konut",
  },
  areaEnforcement: {
    src: unsplash("1554224155-6726b3ff858f"),
    alt: "Masada hesap makinesi ve mali belgeler",
  },
  areaConsumer: {
    src: unsplash("1556740738-b6a63e27c4df"),
    alt: "Mağazada temassız ödeme yapılan kart okuyucu",
  },

  // Makaleler
  articleDivorce: {
    src: unsplash("1551836022-d5d88e9218df"),
    alt: "Masada karşılıklı oturarak görüşen iki kişi",
  },
  articleSeverance: {
    src: unsplash("1517245386807-bb43f82c33c4"),
    alt: "Dizüstü bilgisayar başında toplantı yapan çalışanlar",
  },
  articleRent: {
    src: pixabay("2016/11/29/03/53/house-1867187_1280.jpg"),
    alt: "Akşam ışıklarında müstakil bir ev",
  },
  articleInheritance: {
    src: unsplash("1517842645767-c639042777db"),
    alt: "Not defteri, gözlük ve dolma kalem",
  },
  articleCompany: {
    src: pixabay("2017/01/14/10/56/people-1979261_1280.jpg"),
    alt: "Toplantı masasında tokalaşan iş insanları",
  },
  articleConsumer: {
    src: pixabay("2015/07/17/22/43/student-849825_1280.jpg"),
    alt: "Dizüstü bilgisayarda çevrim içi işlem yapan kişi",
  },
  articleReinstatement: {
    src: pixabay("2015/01/09/11/08/startup-594090_1280.jpg"),
    alt: "Masada not alan ve bilgisayarla çalışan kişiler",
  },
  articleCriminal: {
    src: unsplash("1589829545856-d10d557cf95f"),
    alt: "Masada duran adalet heykelciği",
  },

  // Avukatlar
  lawyerMehmet: {
    src: unsplash("1560250097-0b93528c311a"),
    alt: "Av. Mehmet Arslan'ın portresi",
  },
  lawyerZeynep: {
    src: unsplash("1573496359142-b8d87734a5a2"),
    alt: "Av. Zeynep Demir'in portresi",
  },
  lawyerEmre: {
    src: unsplash("1519085360753-af0119f7cbe7"),
    alt: "Av. Emre Kaya'nın portresi",
  },
  lawyerElif: {
    src: unsplash("1573497019940-1c28c88b4f3e"),
    alt: "Av. Elif Yıldız'ın portresi",
  },
  lawyerSelin: {
    src: unsplash("1580489944761-15a19d654956"),
    alt: "Av. Selin Aksoy'un portresi",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

export const officeGallery: ImageKey[] = [
  "officeLobby",
  "officeOpenSpace",
  "officeMeetingRoom",
  "officeLounge",
  "officeBoardroom",
  "libraryShelves",
];
