import type { ImageKey } from "@/lib/images";

export type Lawyer = {
  slug: string;
  name: string;
  title: string;
  image: ImageKey;
  barNumber: string;
  email: string;
  languages: string[];
  areas: string[];
  summary: string;
  bio: string[];
  education: { degree: string; school: string; year: string }[];
  memberships: string[];
  publications: string[];
};

export const lawyers: Lawyer[] = [
  {
    slug: "mehmet-arslan",
    name: "Av. Mehmet Arslan",
    title: "Kurucu Ortak",
    image: "lawyerMehmet",
    barNumber: "İstanbul Barosu Sicil No: 31245",
    email: "m.arslan@arslandemir.av.tr",
    languages: ["Türkçe", "İngilizce"],
    areas: ["ticaret-ve-sirketler-hukuku", "icra-ve-iflas-hukuku", "gayrimenkul-ve-kira-hukuku"],
    summary:
      "Ticaret ve şirketler hukuku ile icra ve iflas hukuku alanlarında çalışmaktadır. Büronun kurucu ortağıdır.",
    bio: [
      "Mehmet Arslan, 2004 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olmuş, stajını tamamladıktan sonra İstanbul'da faaliyet gösteren bir hukuk bürosunda ticari uyuşmazlıklar ve şirketler hukuku alanında çalışmıştır.",
      "2009 yılında Av. Zeynep Demir ile birlikte büroyu kurmuştur. Mesleki çalışmalarını ağırlıklı olarak şirket kuruluşları, ortaklık uyuşmazlıkları, ticari sözleşmeler ve alacak takibi konularında sürdürmektedir. Aile şirketlerinin kurumsallaşma süreçlerinde yönetim ve ortaklık yapısının hukuki çerçevesinin oluşturulmasına ilişkin çalışmalarda yer almaktadır.",
      "Galatasaray Üniversitesi'nde ticaret hukuku alanında yüksek lisans yapmıştır. Baro bünyesindeki meslek içi eğitim programlarında ticaret hukuku konularında seminerlere katılmaktadır.",
    ],
    education: [
      { degree: "Hukuk Lisans", school: "İstanbul Üniversitesi Hukuk Fakültesi", year: "2004" },
      { degree: "Ticaret Hukuku Yüksek Lisans", school: "Galatasaray Üniversitesi Sosyal Bilimler Enstitüsü", year: "2008" },
    ],
    memberships: ["İstanbul Barosu", "İstanbul Barosu Ticaret Hukuku Komisyonu"],
    publications: [
      "Limited Şirketlerde Ortaklıktan Çıkma ve Çıkarılma (Hakemli dergi makalesi, 2016)",
      "Aile Şirketlerinde Ortaklar Sözleşmesinin İşlevi (Konferans bildirisi, 2021)",
    ],
  },
  {
    slug: "zeynep-demir",
    name: "Av. Zeynep Demir",
    title: "Kurucu Ortak",
    image: "lawyerZeynep",
    barNumber: "İstanbul Barosu Sicil No: 32870",
    email: "z.demir@arslandemir.av.tr",
    languages: ["Türkçe", "İngilizce", "Almanca"],
    areas: ["aile-hukuku", "miras-hukuku", "gayrimenkul-ve-kira-hukuku"],
    summary:
      "Aile hukuku ve miras hukuku alanlarında çalışmaktadır. Yabancı unsurlu aile ve miras dosyalarını yürütmektedir.",
    bio: [
      "Zeynep Demir, Ankara Üniversitesi Hukuk Fakültesi'nden 2005 yılında mezun olmuştur. Lisans eğitiminin ardından Almanya'da Heidelberg Üniversitesi'nde karşılaştırmalı aile hukuku üzerine yüksek lisans yapmıştır.",
      "2009 yılında büronun kuruluşunda yer almıştır. Boşanma, velayet, nafaka ve mal rejiminin tasfiyesi davalarının yanı sıra, yurt dışında yaşayan Türk vatandaşlarının ve yabancı uyruklu kişilerin Türkiye'deki aile ve miras uyuşmazlıklarını takip etmektedir. Yabancı mahkeme kararlarının tanınması ve tenfizi ile Türkiye'deki taşınmazlara ilişkin miras paylaşımı süreçlerinde çalışmaktadır.",
      "Aile arabuluculuğu ve uzlaşmaya dayalı çözüm yöntemleri konusunda çeşitli eğitim programlarına katılmıştır.",
    ],
    education: [
      { degree: "Hukuk Lisans", school: "Ankara Üniversitesi Hukuk Fakültesi", year: "2005" },
      { degree: "LL.M. (Karşılaştırmalı Hukuk)", school: "Ruprecht-Karls-Universität Heidelberg", year: "2007" },
    ],
    memberships: ["İstanbul Barosu", "İstanbul Barosu Kadın Hakları Merkezi"],
    publications: [
      "Yabancı Boşanma Kararlarının Türkiye'de Tanınması (Hakemli dergi makalesi, 2014)",
      "Edinilmiş Mallara Katılma Rejiminde Değer Artış Payı (Kitap bölümü, 2019)",
    ],
  },
  {
    slug: "emre-kaya",
    name: "Av. Emre Kaya",
    title: "Kıdemli Avukat",
    image: "lawyerEmre",
    barNumber: "İstanbul Barosu Sicil No: 41562",
    email: "e.kaya@arslandemir.av.tr",
    languages: ["Türkçe", "İngilizce"],
    areas: ["ceza-hukuku", "is-hukuku"],
    summary:
      "Ceza hukuku ve iş hukuku alanlarında çalışmaktadır. Ekonomik suçlar ve bilişim suçlarına ilişkin dosyaları yürütmektedir.",
    bio: [
      "Emre Kaya, Marmara Üniversitesi Hukuk Fakültesi'nden 2011 yılında mezun olmuş ve 2014 yılında büroya katılmıştır.",
      "Soruşturma ve kovuşturma aşamalarında müdafilik ve vekillik görevlerini yürütmektedir. Özellikle şirket yöneticilerini ilgilendiren ekonomik suçlar, bilişim suçları ve kişisel verilerin korunmasına ilişkin suçlar konularında çalışmaktadır. İş hukuku alanında ise işe iade ve işçilik alacağı davalarını takip etmektedir.",
      "Ceza hukuku alanında yüksek lisans çalışmasını tamamlamış olup baro bünyesinde zorunlu müdafilik (CMK) görevlerine de katılmaktadır.",
    ],
    education: [
      { degree: "Hukuk Lisans", school: "Marmara Üniversitesi Hukuk Fakültesi", year: "2011" },
      { degree: "Ceza ve Ceza Muhakemesi Hukuku Yüksek Lisans", school: "Marmara Üniversitesi Sosyal Bilimler Enstitüsü", year: "2015" },
    ],
    memberships: ["İstanbul Barosu", "İstanbul Barosu CMK Uygulama Merkezi"],
    publications: ["Bilişim Sistemine Girme Suçunda Hukuka Uygunluk Nedenleri (Yüksek lisans tezi, 2015)"],
  },
  {
    slug: "elif-yildiz",
    name: "Av. Elif Yıldız",
    title: "Avukat",
    image: "lawyerElif",
    barNumber: "İstanbul Barosu Sicil No: 49318",
    email: "e.yildiz@arslandemir.av.tr",
    languages: ["Türkçe", "İngilizce"],
    areas: ["is-hukuku", "tuketici-hukuku", "icra-ve-iflas-hukuku"],
    summary:
      "İş hukuku ve tüketici hukuku alanlarında çalışmaktadır. Arabuluculuk süreçlerinde müvekkillerini temsil etmektedir.",
    bio: [
      "Elif Yıldız, İstanbul Bilgi Üniversitesi Hukuk Fakültesi'nden 2015 yılında mezun olmuştur. Stajını büromuzda tamamlamış ve 2017 yılından bu yana büromuzda avukat olarak görev yapmaktadır.",
      "Bireysel ve kurumsal müvekkillerin iş hukuku uyuşmazlıklarında arabuluculuk ve dava süreçlerini yürütmektedir. Tüketici hakem heyeti ve tüketici mahkemesi süreçleri ile ticari alacakların icra yoluyla takibi de çalışma alanları arasındadır.",
    ],
    education: [{ degree: "Hukuk Lisans", school: "İstanbul Bilgi Üniversitesi Hukuk Fakültesi", year: "2015" }],
    memberships: ["İstanbul Barosu"],
    publications: [],
  },
  {
    slug: "selin-aksoy",
    name: "Av. Selin Aksoy",
    title: "Avukat",
    image: "lawyerSelin",
    barNumber: "İstanbul Barosu Sicil No: 53704",
    email: "s.aksoy@arslandemir.av.tr",
    languages: ["Türkçe", "Almanca"],
    areas: ["aile-hukuku", "miras-hukuku", "tuketici-hukuku"],
    summary:
      "Aile hukuku ve miras hukuku alanlarında çalışmaktadır. Almanca konuşan müvekkillerle yürütülen dosyalarda görev almaktadır.",
    bio: [
      "Selin Aksoy, Türk-Alman Üniversitesi Hukuk Fakültesi'nden 2019 yılında mezun olmuştur. 2020 yılında avukatlık ruhsatını alarak büromuza katılmıştır.",
      "Boşanma, nafaka ve velayet davaları ile mirasçılık belgesi, mirasın reddi ve tenkis davalarında çalışmaktadır. Almanya'da yaşayan müvekkillerin Türkiye'deki aile ve miras işlemlerini koordine etmektedir.",
    ],
    education: [{ degree: "Hukuk Lisans", school: "Türk-Alman Üniversitesi Hukuk Fakültesi", year: "2019" }],
    memberships: ["İstanbul Barosu"],
    publications: [],
  },
];

export function getLawyer(slug: string) {
  return lawyers.find((lawyer) => lawyer.slug === slug);
}

export function getLawyersByArea(areaSlug: string) {
  return lawyers.filter((lawyer) => lawyer.areas.includes(areaSlug));
}
