export type FaqItem = { question: string; answer: string };
export type FaqCategory = { slug: string; title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    slug: "buromuzla-calismak",
    title: "Büromuzla Çalışmak",
    items: [
      {
        question: "Büronuzla nasıl randevu alabilirim?",
        answer:
          "İletişim sayfamızdaki formu doldurarak, telefonla veya e-posta ile randevu talebinde bulunabilirsiniz. Talebiniz, konunun ilgili olduğu çalışma alanındaki avukatımıza iletilir ve en kısa sürede sizinle iletişime geçilir.",
      },
      {
        question: "Görüşmeye gelirken hangi belgeleri getirmeliyim?",
        answer:
          "Kimlik belgenizle birlikte konuyla ilgili sözleşme, tebligat, mahkeme kararı, yazışma, fatura gibi elinizdeki tüm belgeleri getirmeniz değerlendirmenin daha sağlıklı yapılmasını sağlar. Belgelerin asıllarını değil, okunaklı kopyalarını getirmeniz yeterlidir.",
      },
      {
        question: "Yüz yüze görüşme zorunlu mu?",
        answer:
          "Hayır. Şehir dışında veya yurt dışında bulunan müvekkillerimizle görüntülü görüşme yoluyla da çalışabiliyoruz. Ancak vekâletname gibi bazı işlemler için noter veya konsolosluk işlemi gerekebilir.",
      },
      {
        question: "Hangi dillerde hizmet veriyorsunuz?",
        answer:
          "Türkçenin yanı sıra İngilizce ve Almanca dillerinde görüşme yapabilir, yazışma ve belge hazırlığı gerçekleştirebiliriz.",
      },
    ],
  },
  {
    slug: "vekalet-ve-ucret",
    title: "Vekâlet ve Ücretlendirme",
    items: [
      {
        question: "Vekâlet ücreti nasıl belirlenir?",
        answer:
          "Vekâlet ücreti; işin niteliği, kapsamı ve gerektirdiği emek dikkate alınarak, Avukatlık Kanunu ve her yıl Türkiye Barolar Birliği tarafından yayımlanan Avukatlık Asgari Ücret Tarifesi çerçevesinde belirlenir. Ücret ve masraflar, işe başlanmadan önce yazılı bir sözleşme ile netleştirilir.",
      },
      {
        question: "Vekâletname nasıl verilir?",
        answer:
          "Vekâletname herhangi bir noterden düzenlenebilir. Yurt dışında bulunan müvekkiller için vekâletname Türk konsolosluklarından veya apostil şerhi taşıyan yabancı noter belgesiyle verilebilir.",
      },
      {
        question: "Dava masrafları kim tarafından karşılanır?",
        answer:
          "Harç, tebligat, bilirkişi ve keşif gibi yargılama giderleri kural olarak davayı açan veya ilgili işlemi talep eden tarafça peşin olarak ödenir. Yargılama sonunda bu giderlerin kim tarafından üstlenileceğine mahkeme karar verir.",
      },
    ],
  },
  {
    slug: "dava-surecleri",
    title: "Dava Süreçleri",
    items: [
      {
        question: "Bir dava ne kadar sürer?",
        answer:
          "Dava süreleri; davanın türüne, mahkemenin iş yüküne, delil toplama ve bilirkişi süreçlerine göre önemli farklılıklar gösterir. Bu nedenle kesin bir süre vermek mümkün değildir; ancak ilk değerlendirmede dosyanıza ilişkin öngörülerimizi sizinle paylaşırız.",
      },
      {
        question: "Davanın sonucu hakkında kesin bilgi verebilir misiniz?",
        answer:
          "Hayır. Yargılamanın sonucu mahkemenin delilleri değerlendirmesine bağlıdır ve hiçbir avukat sonuç garantisi veremez. Biz, dosyanızın güçlü ve zayıf yönlerini açıkça paylaşarak bilinçli karar vermenize yardımcı oluruz.",
      },
      {
        question: "Dosyamın durumunu nasıl takip edebilirim?",
        answer:
          "Dosyanızın sorumlu avukatı, önemli gelişmeleri size düzenli olarak bildirir. Ayrıca e-Devlet ve UYAP Vatandaş Portal üzerinden dosyanızın durumunu kendiniz de takip edebilirsiniz.",
      },
      {
        question: "Arabuluculuk nedir ve hangi davalarda zorunludur?",
        answer:
          "Arabuluculuk, tarafların tarafsız bir arabulucu eşliğinde uyuşmazlığı müzakere ederek çözmeye çalıştığı bir yöntemdir. İş, ticaret, tüketici ve kira uyuşmazlıklarının önemli bir kısmında dava açmadan önce arabulucuya başvurmak zorunludur.",
      },
    ],
  },
  {
    slug: "gizlilik",
    title: "Gizlilik ve Kişisel Veriler",
    items: [
      {
        question: "Paylaştığım bilgiler gizli tutulur mu?",
        answer:
          "Evet. Avukatlar, Avukatlık Kanunu uyarınca mesleki faaliyetleri sırasında öğrendikleri bilgileri saklamakla yükümlüdür. Ayrıca kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak işlenir.",
      },
      {
        question: "İletişim formuyla gönderdiğim bilgiler nasıl kullanılır?",
        answer:
          "Formla ilettiğiniz bilgiler yalnızca talebinizi değerlendirmek ve sizinle iletişime geçmek amacıyla kullanılır. Ayrıntılı bilgiye KVKK Aydınlatma Metnimizden ulaşabilirsiniz.",
      },
      {
        question: "Karşı tarafı daha önce temsil ettiyseniz ne olur?",
        answer:
          "Her yeni başvuruda çıkar çatışması kontrolü yaparız. Meslek kuralları gereği, aynı uyuşmazlıkta karşı tarafa hizmet vermiş olmamız hâlinde dosyayı üstlenemeyiz ve bu durumu size açıkça bildiririz.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
