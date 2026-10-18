import type { ImageKey } from "@/lib/images";

export type PracticeCategory = "bireysel" | "kurumsal";

export const practiceCategories: { value: PracticeCategory; label: string }[] = [
  { value: "bireysel", label: "Bireysel" },
  { value: "kurumsal", label: "Kurumsal" },
];

export type PracticeIconKey =
  | "family"
  | "criminal"
  | "employment"
  | "realEstate"
  | "commercial"
  | "inheritance"
  | "enforcement"
  | "consumer";

export type PracticeArea = {
  slug: string;
  title: string;
  categories: PracticeCategory[];
  icon: PracticeIconKey;
  image: ImageKey;
  excerpt: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  topics: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    categories: ["bireysel"],
    icon: "family",
    image: "areaFamily",
    excerpt:
      "Boşanma, velayet, nafaka ve mal rejimi süreçlerinde ailenin tüm bireylerini gözeten, ölçülü ve gizliliğe özen gösteren hukuki destek.",
    intro: [
      "Aile hukuku uyuşmazlıkları, hukuki olduğu kadar duygusal yönü de ağır basan süreçlerdir. Boşanma, velayet veya nafaka gibi konularda verilecek her karar; çocukların geleceğini, tarafların ekonomik düzenini ve çoğu zaman yıllarca sürecek ilişkileri doğrudan etkiler. Bu nedenle aile hukukuna ilişkin dosyalarda, yalnızca mevzuatın gerektirdiği adımları değil, tarafların özel hayatına duyulan saygıyı ve gizliliği de çalışmalarımızın merkezine alıyoruz.",
      "Büromuz, Türk Medeni Kanunu ve ilgili mevzuat çerçevesinde aile mahkemelerinde görülen davalarda müvekkillerine danışmanlık ve temsil hizmeti sunar. Mümkün olan her durumda uzlaşmaya dayalı çözümleri önceleyerek sürecin daha kısa ve daha az yıpratıcı ilerlemesini hedefleriz; uzlaşmanın mümkün olmadığı durumlarda ise hak kayıplarını önlemek için dosyayı titizlikle hazırlarız.",
    ],
    sections: [
      {
        heading: "Anlaşmalı ve çekişmeli boşanma",
        paragraphs: [
          "Türk Medeni Kanunu'nun 166. maddesinin üçüncü fıkrası uyarınca en az bir yıl sürmüş evliliklerde eşler, boşanma ve sonuçları konusunda anlaşarak mahkemeye birlikte başvurabilir veya bir eşin açtığı davayı diğeri kabul edebilir. Bu durumda hâkim, tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmeli ve sunulan protokolü uygun bulmalıdır. Protokolün; velayet, çocukla kişisel ilişki, nafaka, maddi ve manevi tazminat ile mal paylaşımı gibi başlıkları eksiksiz ve uygulanabilir biçimde düzenlemesi, ileride doğabilecek yeni uyuşmazlıkların önüne geçer.",
          "Anlaşmanın sağlanamadığı durumlarda çekişmeli boşanma davası gündeme gelir. Bu davalarda kanunda sayılan özel boşanma sebepleri (zina, hayata kast, pek kötü veya onur kırıcı davranış, suç işleme ve haysiyetsiz hayat sürme, terk, akıl hastalığı) ya da genel boşanma sebebi olan evlilik birliğinin temelinden sarsılması ileri sürülür. Çekişmeli davalarda iddiaların delillerle desteklenmesi, tanık beyanlarının ve yazılı belgelerin doğru zamanda dosyaya sunulması belirleyici önem taşır.",
        ],
      },
      {
        heading: "Velayet, nafaka ve mal rejimi",
        paragraphs: [
          "Velayet kararlarında mahkemenin temel ölçütü çocuğun üstün yararıdır. Çocuğun yaşı, eğitim durumu, ebeveynlerle bağı ve yaşam koşulları; sosyal inceleme raporları ve gerektiğinde uzman görüşleriyle birlikte değerlendirilir. Velayet hakkı kendisine bırakılmayan ebeveyn ile çocuk arasındaki kişisel ilişkinin düzenlenmesi de en az velayet kadar özenle ele alınması gereken bir konudur.",
          "Nafaka; tedbir, yoksulluk ve iştirak nafakası olmak üzere farklı türlerde karşımıza çıkar ve tarafların ekonomik durumundaki değişikliklere göre artırılması veya azaltılması talep edilebilir. Edinilmiş mallara katılma rejiminin tasfiyesi ise evlilik süresince edinilen malvarlığının hakkaniyete uygun biçimde paylaştırılmasını amaçlar ve çoğu zaman ayrıntılı bir malvarlığı incelemesi gerektirir.",
        ],
      },
      {
        heading: "Süreç boyunca dikkat edilmesi gerekenler",
        paragraphs: [
          "Aile hukukuna ilişkin süreçlerde, dava açılmadan önce atılan adımlar çoğu zaman sonucu doğrudan etkiler. Ortak konuttan ayrılma, ortak hesaplardan para çekme veya çocukların yaşadığı yerin değiştirilmesi gibi kararların, ileride aleyhe yorumlanabilecek sonuçlar doğurup doğurmayacağı önceden değerlendirilmelidir. Sosyal medya paylaşımları ve yazışmaların da delil olarak dosyaya girebileceği unutulmamalıdır.",
          "Çocukların bulunduğu dosyalarda, ebeveynler arasındaki anlaşmazlığın çocuğa yansıtılmaması hem çocuğun ruh sağlığı hem de mahkemenin değerlendirmesi bakımından önemlidir. Bu nedenle sürecin her aşamasında iletişimin mümkün olduğunca sakin ve yazılı kanallar üzerinden yürütülmesini öneriyoruz.",
        ],
      },
    ],
    topics: [
      "Anlaşmalı boşanma protokolünün hazırlanması",
      "Çekişmeli boşanma davaları",
      "Velayet ve velayetin değiştirilmesi",
      "Çocukla kişisel ilişki tesisi",
      "Tedbir, yoksulluk ve iştirak nafakası",
      "Nafakanın artırılması ve kaldırılması",
      "Mal rejiminin tasfiyesi ve katılma alacağı",
      "Maddi ve manevi tazminat talepleri",
      "6284 sayılı Kanun kapsamında koruyucu tedbirler",
      "Yabancı mahkeme boşanma kararlarının tanınması ve tenfizi",
      "Soybağı ve evlat edinme işlemleri",
    ],
    process: [
      {
        title: "İlk görüşme",
        description:
          "Ailenizin durumunu, beklentilerinizi ve öncelikli endişelerinizi gizlilik içinde dinler; olası yol haritalarını açık bir dille paylaşırız.",
      },
      {
        title: "Belge ve delil incelemesi",
        description:
          "Nüfus kayıtları, malvarlığı belgeleri, yazışmalar ve tanık bilgileri gibi dosyayı etkileyecek tüm bilgileri birlikte gözden geçiririz.",
      },
      {
        title: "Strateji ve uzlaşma imkânı",
        description:
          "Anlaşmalı çözüm mümkünse protokol taslağını hazırlar, karşı tarafla iletişimi yürütürüz; değilse dava stratejisini belirleriz.",
      },
      {
        title: "Dava süreci",
        description:
          "Dilekçelerin hazırlanması, duruşmalara katılım, sosyal inceleme ve bilirkişi süreçlerinin takibi büromuz tarafından yürütülür.",
      },
      {
        title: "Kararın uygulanması",
        description:
          "Kesinleşen kararın nüfusa tescili, nafaka ve kişisel ilişki kararlarının icrası gibi sonraki adımlarda da yanınızda oluruz.",
      },
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma için evliliğin ne kadar sürmüş olması gerekir?",
        answer:
          "Türk Medeni Kanunu'na göre anlaşmalı boşanma yoluna gidilebilmesi için evliliğin en az bir yıl sürmüş olması gerekir. Bir yılı doldurmamış evliliklerde boşanma ancak çekişmeli dava yoluyla mümkündür.",
      },
      {
        question: "Velayet kararı sonradan değiştirilebilir mi?",
        answer:
          "Evet. Koşulların önemli ölçüde değişmesi ve çocuğun üstün yararının bunu gerektirmesi hâlinde, velayetin değiştirilmesi için aile mahkemesine yeniden başvurulabilir.",
      },
      {
        question: "Nafaka miktarı nasıl belirlenir?",
        answer:
          "Mahkeme; tarafların gelir ve giderlerini, sosyal ve ekonomik durumlarını, çocuğun ihtiyaçlarını ve hakkaniyet ilkesini birlikte değerlendirerek nafaka miktarını belirler. Koşullar değiştiğinde artırım veya indirim talep edilebilir.",
      },
      {
        question: "Boşanma davası hangi mahkemede açılır?",
        answer:
          "Boşanma davaları aile mahkemesinde görülür. Dava, eşlerden birinin yerleşim yeri mahkemesinde veya eşlerin davadan önce son altı aydır birlikte oturdukları yer mahkemesinde açılabilir.",
      },
    ],
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    categories: ["bireysel", "kurumsal"],
    icon: "criminal",
    image: "areaCriminal",
    excerpt:
      "Soruşturma ve kovuşturma aşamalarında şüpheli, sanık, mağdur ve katılan sıfatıyla kişilerin ve kurumların haklarını gözeten müdafilik ve vekillik.",
    intro: [
      "Ceza yargılaması, kişi özgürlüğünü doğrudan ilgilendiren ve her aşamasında hızlı, dikkatli karar verilmesini gerektiren bir alandır. İfade alma, gözaltı veya arama gibi işlemlerde atılan ilk adımlar, çoğu zaman sürecin tamamını etkiler. Bu nedenle ceza hukukuna ilişkin dosyalarda, ulaşılabilir olmayı ve müvekkillerimizi her aşamada ne ile karşılaşacakları konusunda açıkça bilgilendirmeyi temel ilke olarak benimsiyoruz.",
      "Büromuz; Türk Ceza Kanunu, Ceza Muhakemesi Kanunu ve özel ceza kanunları kapsamında, soruşturma ve kovuşturma evrelerinde şüpheli ve sanık müdafiliği ile suçtan zarar görenlerin vekilliğini üstlenir. Bireysel dosyaların yanı sıra şirket yöneticilerinin karşılaşabileceği ekonomik suçlar ve bilişim suçları gibi konularda kurumlara da danışmanlık verir.",
    ],
    sections: [
      {
        heading: "Soruşturma evresi",
        paragraphs: [
          "Soruşturma evresi, Cumhuriyet savcılığının bir suç şüphesini öğrenmesiyle başlar ve iddianamenin kabulüne kadar devam eder. Bu aşamada şüphelinin susma hakkı, müdafi yardımından yararlanma hakkı ve lehine delillerin toplanmasını isteme hakkı gibi temel güvenceler vardır. İfade öncesinde dosyanın değerlendirilmesi ve şüphelinin haklarının hatırlatılması, ileride telafisi güç sonuçların önüne geçebilir.",
          "Gözaltı, tutuklama, adli kontrol ve arama-el koyma gibi koruma tedbirlerine karşı kanunda öngörülen itiraz yolları bulunmaktadır. Bu itirazların kanuni süreler içinde ve somut gerekçelere dayanarak yapılması büyük önem taşır. Suçtan zarar gören taraf için ise şikâyet sürelerinin kaçırılmaması ve delillerin vakit kaybetmeden güvence altına alınması gerekir.",
        ],
      },
      {
        heading: "Kovuşturma ve kanun yolları",
        paragraphs: [
          "İddianamenin mahkemece kabulüyle kovuşturma evresi başlar. Duruşmalarda delillerin tartışılması, tanıkların dinlenmesi, bilirkişi raporlarına itiraz edilmesi ve esasa ilişkin savunmanın hazırlanması müdafinin temel görevleri arasındadır. Hükmün açıklanmasının geri bırakılması, hapis cezasının ertelenmesi veya seçenek yaptırımlara çevrilmesi gibi kurumlar da dosyanın koşullarına göre değerlendirilir.",
          "İlk derece mahkemesi kararlarına karşı istinaf, bölge adliye mahkemesi kararlarına karşı ise belirli koşullarda temyiz yoluna başvurulabilir. Hak ihlali iddiasıyla Anayasa Mahkemesi'ne bireysel başvuru da son çare niteliğinde bir yoldur. Kanun yolu başvurularında sürelerin kısa olduğu ve gerekçeli kararın dikkatle incelenmesi gerektiği unutulmamalıdır.",
        ],
      },
      {
        heading: "Haklarınızı korumak için ilk adımlar",
        paragraphs: [
          "Bir soruşturmadan haberdar olduğunuzda ya da bir suçtan zarar gördüğünüzde, ilk iş olarak elinizdeki belge, mesaj, görüntü ve tanık bilgilerini bir araya getirmeniz önemlidir. Delillerin kaybolmaması için kamera kayıtları gibi süreli saklanan verilerin vakit kaybetmeden talep edilmesi gerekebilir.",
          "Kolluk veya savcılıkla yapılacak görüşmelerde verilecek beyanların sonradan değiştirilmesi zordur. Bu nedenle ifade öncesinde dosyanın değerlendirilmesi, hangi hususlarda açıklama yapılacağının planlanması ve kanunun tanıdığı hakların bilinmesi, sürecin sağlıklı ilerlemesi açısından belirleyicidir.",
        ],
      },
    ],
    topics: [
      "İfade ve sorgu süreçlerinde müdafilik",
      "Gözaltı, tutuklama ve adli kontrole itiraz",
      "Mala karşı suçlar (dolandırıcılık, güveni kötüye kullanma)",
      "Kişilere karşı suçlar ve yaralama",
      "Bilişim suçları ve kişisel verilere ilişkin suçlar",
      "Ekonomik suçlar ve vergi ceza hukuku",
      "Uyuşturucu madde suçları",
      "Trafik kazalarından doğan ceza davaları",
      "Suçtan zarar gören vekilliği ve katılma",
      "İstinaf, temyiz ve bireysel başvuru",
    ],
    process: [
      {
        title: "Acil değerlendirme",
        description:
          "Gözaltı veya ifade çağrısı gibi durumlarda öncelikle mevcut aşamayı ve haklarınızı netleştirir, ilk adımları birlikte planlarız.",
      },
      {
        title: "Dosya incelemesi",
        description:
          "Kısıtlama kararı yoksa soruşturma dosyasını inceler, aleyhe ve lehe delilleri ayrıntılı olarak değerlendiririz.",
      },
      {
        title: "Savunma stratejisi",
        description:
          "Delillerin hukuka uygunluğu, tanık beyanları ve bilirkişi raporları üzerinden savunma veya şikâyet stratejisini belirleriz.",
      },
      {
        title: "Duruşma süreci",
        description:
          "Tüm duruşmalara katılır, delil taleplerini ve esasa ilişkin savunmayı süresi içinde mahkemeye sunarız.",
      },
      {
        title: "Kanun yolları",
        description:
          "Karar sonrasında istinaf, temyiz veya bireysel başvuru imkânlarını değerlendirir ve süreleri takip ederiz.",
      },
    ],
    faqs: [
      {
        question: "İfadeye çağrıldığımda avukatla gitmek zorunlu mu?",
        answer:
          "Zorunlu değildir; ancak Ceza Muhakemesi Kanunu, şüpheliye ifadesi sırasında müdafi yardımından yararlanma hakkı tanır. İfade öncesinde dosyanın değerlendirilmesi, hakların doğru kullanılması bakımından faydalı olabilir.",
      },
      {
        question: "Şikâyet süresi ne kadardır?",
        answer:
          "Şikâyete bağlı suçlarda şikâyet hakkı, fiilin ve failin öğrenildiği tarihten itibaren altı ay içinde kullanılmalıdır. Şikâyete bağlı olmayan suçlarda ise savcılık re'sen soruşturma yürütür.",
      },
      {
        question: "Tutuklama kararına itiraz edilebilir mi?",
        answer:
          "Evet. Tutuklama kararına karşı, kararın öğrenilmesinden itibaren yedi gün içinde sulh ceza hâkimliğine itiraz edilebilir. Ayrıca tutukluluğun her aşamada incelenmesi ve tahliye talebinde bulunulması mümkündür.",
      },
      {
        question: "Hükmün açıklanmasının geri bırakılması ne demektir?",
        answer:
          "Belirli koşulların bulunması hâlinde mahkeme, kurduğu hükmü açıklamayarak beş yıllık bir denetim süresi belirleyebilir. Bu süre içinde kasıtlı yeni bir suç işlenmezse açıklanması geri bırakılan hüküm ortadan kaldırılır ve dava düşer.",
      },
    ],
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    categories: ["bireysel", "kurumsal"],
    icon: "employment",
    image: "areaEmployment",
    excerpt:
      "İşçi ve işveren arasındaki ilişkinin her aşamasında; sözleşme, fesih, tazminat ve arabuluculuk süreçlerinde dengeli ve öngörülebilir hukuki destek.",
    intro: [
      "İş ilişkileri, hem çalışanların geçimini hem de işletmelerin sürdürülebilirliğini doğrudan etkileyen bir alandır. İş sözleşmesinin kurulmasından sona ermesine kadar geçen süreçte, tarafların hak ve yükümlülüklerinin açık biçimde belirlenmesi pek çok uyuşmazlığın doğmasını baştan engeller.",
      "Büromuz; 4857 sayılı İş Kanunu, 7036 sayılı İş Mahkemeleri Kanunu ve ilgili mevzuat çerçevesinde hem işçilere hem de işverenlere danışmanlık ve dava takibi hizmeti sunar. Kurumsal müvekkillerimiz için önleyici hukuk yaklaşımıyla iç düzenlemeler ve sözleşmeler hazırlarken, bireysel müvekkillerimizin işçilik alacakları ve işe iade taleplerini takip ederiz.",
    ],
    sections: [
      {
        heading: "Fesih, tazminat ve işçilik alacakları",
        paragraphs: [
          "İş sözleşmesinin feshi, iş hukukunda en sık uyuşmazlık konusu olan meseledir. Feshin haklı veya geçerli bir nedene dayanıp dayanmadığı, bildirim sürelerine uyulup uyulmadığı ve fesih bildiriminin usulüne uygun yapılıp yapılmadığı; kıdem ve ihbar tazminatı başta olmak üzere pek çok hakkın doğup doğmayacağını belirler.",
          "Fazla çalışma, hafta tatili, ulusal bayram ve genel tatil ücretleri ile kullanılmayan yıllık izin ücretleri gibi işçilik alacaklarında ise ispat yükü ve zamanaşımı süreleri belirleyici rol oynar. Bu alacakların hesaplanmasında bordrolar, puantaj kayıtları ve tanık beyanları birlikte değerlendirilir.",
        ],
      },
      {
        heading: "Zorunlu arabuluculuk ve işveren danışmanlığı",
        paragraphs: [
          "7036 sayılı Kanun uyarınca kanuna, bireysel veya toplu iş sözleşmesine dayanan işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılacak davalarda arabulucuya başvurulmuş olması dava şartıdır. Arabuluculuk görüşmelerine hazırlıklı katılmak, tarafların makul bir uzlaşmaya ulaşmasını kolaylaştırır ve uzun yargılama süreçlerinin önüne geçebilir.",
          "İşverenler açısından iş sözleşmeleri, personel yönetmelikleri, disiplin prosedürleri ve iş sağlığı ve güvenliği yükümlülükleri düzenli olarak gözden geçirilmelidir. Fesih öncesinde savunma alınması ve gerekçenin yazılı olarak bildirilmesi gibi usul kurallarına uyulması, sonradan doğabilecek uyuşmazlıklarda işverenin konumunu doğrudan etkiler.",
        ],
      },
      {
        heading: "Belgelerin önemi",
        paragraphs: [
          "İş uyuşmazlıklarında ispat çoğunlukla belgelere dayanır. İş sözleşmesi, ücret bordroları, banka ödeme kayıtları, giriş-çıkış kayıtları, e-posta ve mesaj yazışmaları ile SGK hizmet dökümü, hem çalışanın hem işverenin iddialarını desteklemek için düzenli olarak saklanmalıdır.",
          "Fesih bildirimi veya istifa dilekçesi gibi belgelerin içeriği de büyük önem taşır. Bildirimde yer alan gerekçe, tazminat haklarının doğup doğmayacağını belirleyebilir. Bu nedenle imzalanması istenen ibraname, istifa veya fesih belgelerinin içeriği dikkatle okunmalı, anlaşılmayan hususlar imzadan önce netleştirilmelidir.",
        ],
      },
    ],
    topics: [
      "Kıdem ve ihbar tazminatı talepleri",
      "İşe iade davaları",
      "Fazla çalışma ve yıllık izin alacakları",
      "Zorunlu arabuluculuk süreçleri",
      "İş sözleşmesi ve rekabet yasağı düzenlemeleri",
      "Mobbing (psikolojik taciz) iddiaları",
      "İş kazası ve meslek hastalığı tazminatları",
      "Personel yönetmeliği ve disiplin prosedürleri",
      "Toplu işçi çıkarma süreçleri",
      "Hizmet tespit davaları",
    ],
    process: [
      {
        title: "Ön değerlendirme",
        description:
          "Sözleşme, bordro ve fesih bildirimi gibi belgeler üzerinden mevcut durumu ve olası talepleri değerlendiririz.",
      },
      {
        title: "Alacak hesabı",
        description:
          "Çalışma süresi ve ücret bilgileri esas alınarak kıdem, ihbar ve diğer alacakların yaklaşık hesabını çıkarırız.",
      },
      {
        title: "Arabuluculuk",
        description:
          "Zorunlu arabuluculuk başvurusunu yapar, görüşmelere hazırlıklı katılarak uzlaşma imkânlarını değerlendiririz.",
      },
      {
        title: "Dava süreci",
        description:
          "Uzlaşma sağlanamazsa iş mahkemesinde davayı açar; tanık, bilirkişi ve keşif süreçlerini takip ederiz.",
      },
      {
        title: "İcra ve tahsil",
        description:
          "Kesinleşen kararların icrası ve alacağın tahsili aşamalarında da süreci yürütmeye devam ederiz.",
      },
    ],
    faqs: [
      {
        question: "Kıdem tazminatına hak kazanmak için ne kadar çalışmak gerekir?",
        answer:
          "Kıdem tazminatına hak kazanabilmek için aynı işverene bağlı olarak en az bir yıl çalışmış olmak ve iş sözleşmesinin kanunda sayılan hâllerden biriyle sona ermiş olması gerekir.",
      },
      {
        question: "İşe iade davası için süre nedir?",
        answer:
          "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulmalıdır. Arabuluculuk görüşmelerinin anlaşmazlıkla sonuçlanması hâlinde son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir.",
      },
      {
        question: "Arabuluculuk her iş uyuşmazlığında zorunlu mu?",
        answer:
          "İşçi veya işveren alacağı, tazminat ve işe iade talepli davalarda arabuluculuk dava şartıdır. Ancak iş kazası ve meslek hastalığından kaynaklanan maddi ve manevi tazminat davaları ile bunlarla ilgili rücu davaları bu zorunluluğun dışındadır.",
      },
      {
        question: "İşçilik alacaklarında zamanaşımı süresi nedir?",
        answer:
          "Kıdem tazminatı, ihbar tazminatı, kötüniyet tazminatı ve yıllık izin ücretleri ile ücret alacakları bakımından zamanaşımı süresi kural olarak beş yıldır.",
      },
    ],
  },
  {
    slug: "gayrimenkul-ve-kira-hukuku",
    title: "Gayrimenkul ve Kira Hukuku",
    categories: ["bireysel", "kurumsal"],
    icon: "realEstate",
    image: "areaRealEstate",
    excerpt:
      "Tapu, kat mülkiyeti, kentsel dönüşüm ve kira ilişkilerinden doğan uyuşmazlıklarda mülk sahiplerine, kiracılara ve yatırımcılara hukuki destek.",
    intro: [
      "Gayrimenkul, çoğu kişi ve kurum için en önemli yatırım ve güvence aracıdır. Bir taşınmazın alımından kiraya verilmesine, kat mülkiyetinden kentsel dönüşüme kadar her işlem; tapu kayıtlarının, imar durumunun ve sözleşme hükümlerinin dikkatle incelenmesini gerektirir.",
      "Büromuz; Türk Borçlar Kanunu'nun kira hükümleri, Türk Medeni Kanunu'nun eşya hukukuna ilişkin düzenlemeleri, Kat Mülkiyeti Kanunu ve 6306 sayılı Kanun çerçevesinde bireylere, site yönetimlerine ve yatırımcılara danışmanlık ve dava takibi hizmeti sunar.",
    ],
    sections: [
      {
        heading: "Kira ilişkileri",
        paragraphs: [
          "Konut ve çatılı işyeri kiralarında kira bedelinin belirlenmesi, artırılması ve kira sözleşmesinin sona ermesi kanunla sıkı kurallara bağlanmıştır. Kira bedelinin güncel piyasa koşullarına uyarlanması için açılan kira tespit davaları, kiracının temerrüdü veya ihtiyaç gibi nedenlere dayanan tahliye davaları bu alandaki başlıca uyuşmazlıklardır.",
          "Kira sözleşmesinin yazılı ve açık hükümlerle düzenlenmesi, depozito ve teslim tutanaklarının eksiksiz hazırlanması, ihtarnamelerin usulüne uygun gönderilmesi gibi adımlar; hem kiraya verenin hem de kiracının ileride karşılaşabileceği sorunları önemli ölçüde azaltır. Yasal sürelerin kaçırılması ise çoğu zaman telafisi mümkün olmayan hak kayıplarına yol açar.",
        ],
      },
      {
        heading: "Tapu, kat mülkiyeti ve kentsel dönüşüm",
        paragraphs: [
          "Tapu iptali ve tescil, ortaklığın giderilmesi (izale-i şuyu), el atmanın önlenmesi ve ecrimisil davaları taşınmaz mülkiyetinden doğan uyuşmazlıkların başında gelir. Bu davalarda tapu kayıtları, imar planları, kadastro tutanakları ve bilirkişi incelemeleri belirleyici rol oynar.",
          "Kat mülkiyetine tabi yapılarda yönetim planı, ortak gider uyuşmazlıkları ve kat malikleri kurulu kararlarının iptali gündeme gelebilir. Kentsel dönüşüm süreçlerinde ise müteahhitle yapılacak kat karşılığı inşaat sözleşmesinin dengeli hükümler içermesi, malik haklarının korunması bakımından büyük önem taşır.",
        ],
      },
      {
        heading: "Sözleşme ve sürelere dikkat",
        paragraphs: [
          "Gayrimenkul uyuşmazlıklarının önemli bir kısmı, sözleşmelerin eksik veya belirsiz hazırlanmasından kaynaklanır. Kira sözleşmesinde kira süresi, artış oranı, depozito, bakım ve onarım yükümlülükleri ile tahliye koşullarının açıkça yazılması; alım-satım işlemlerinde ise tapu kaydının, şerhlerin ve imar durumunun önceden incelenmesi gerekir.",
          "Kira hukukunda pek çok hak, kısa ve kesin sürelere bağlıdır. İhtiyaç nedeniyle tahliye, kira tespiti veya temerrüt nedeniyle tahliye taleplerinde bildirim ve dava açma sürelerinin kaçırılması, hakkın bir yıl gecikmesine ya da tamamen kaybedilmesine yol açabilir.",
        ],
      },
    ],
    topics: [
      "Kira tespit ve kira uyarlama davaları",
      "Tahliye davaları ve tahliye taahhütnamesi",
      "Kira sözleşmesi hazırlanması ve incelenmesi",
      "Tapu iptali ve tescil davaları",
      "Ortaklığın giderilmesi (izale-i şuyu)",
      "Kat karşılığı inşaat sözleşmeleri",
      "Kentsel dönüşüm süreçleri",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıkları",
      "Ecrimisil ve el atmanın önlenmesi",
      "Taşınmaz alım-satım öncesi hukuki inceleme",
    ],
    process: [
      {
        title: "Belge incelemesi",
        description:
          "Tapu kaydı, kira sözleşmesi, imar durumu ve varsa yazışmaları inceleyerek hukuki durumu netleştiririz.",
      },
      {
        title: "Risk değerlendirmesi",
        description:
          "Olası talepleri, yasal süreleri ve sürecin muhtemel seyrini açık bir dille sizinle paylaşırız.",
      },
      {
        title: "İhtar ve müzakere",
        description:
          "Gerekli ihtarnameleri gönderir, karşı tarafla uzlaşma imkânlarını ve arabuluculuk sürecini değerlendiririz.",
      },
      {
        title: "Dava ve keşif",
        description:
          "Sulh hukuk veya asliye hukuk mahkemesinde davayı açar, keşif ve bilirkişi incelemelerini yakından takip ederiz.",
      },
      {
        title: "Tescil ve infaz",
        description:
          "Kesinleşen kararın tapuya tescili veya tahliyenin icra yoluyla gerçekleştirilmesi aşamalarını yürütürüz.",
      },
    ],
    faqs: [
      {
        question: "Kira uyuşmazlıklarında arabuluculuk zorunlu mu?",
        answer:
          "1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartı hâline getirilmiştir. Ancak bazı tahliye talepleri icra yoluyla da takip edilebilir.",
      },
      {
        question: "Kira tespit davası ne zaman açılabilir?",
        answer:
          "Beş yılı aşan kira ilişkilerinde ve beş yıldan sonraki her yenileme döneminde, yeni dönemin kira bedeli hâkim tarafından hakkaniyete göre belirlenebilir. Davanın yeni kira döneminden en geç otuz gün önce açılması veya bu süre içinde yazılı bildirimde bulunulması önemlidir.",
      },
      {
        question: "Ortaklığın giderilmesi davasında taşınmaz nasıl paylaştırılır?",
        answer:
          "Mahkeme öncelikle taşınmazın aynen taksiminin mümkün olup olmadığını değerlendirir. Aynen taksim mümkün değilse taşınmaz satılarak bedeli paydaşlar arasında payları oranında paylaştırılır.",
      },
      {
        question: "Tapu iptal davası hangi durumlarda açılır?",
        answer:
          "Yolsuz tescil, muvazaalı işlemler, ehliyetsizlik veya vekâlet görevinin kötüye kullanılması gibi hâllerde, gerçek hak sahibi tapu kaydının iptali ve adına tescili talebiyle dava açabilir.",
      },
    ],
  },
  {
    slug: "ticaret-ve-sirketler-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    categories: ["kurumsal"],
    icon: "commercial",
    image: "areaCommercial",
    excerpt:
      "Şirket kuruluşundan genel kurul süreçlerine, ticari sözleşmelerden ortaklık uyuşmazlıklarına kadar işletmelerin günlük hukuki ihtiyaçlarına çözüm.",
    intro: [
      "Ticari hayatta alınan her karar, şirketin geleceği üzerinde uzun vadeli etkiler doğurabilir. Bu nedenle ticaret hukukunda en etkili yaklaşım, uyuşmazlık çıktıktan sonra değil, işlemler planlanırken hukuki riskleri öngörmek ve buna göre önlem almaktır.",
      "Büromuz, 6102 sayılı Türk Ticaret Kanunu ve ilgili mevzuat çerçevesinde girişimcilere, aile şirketlerine ve kurumsal işletmelere sürekli hukuki danışmanlık ile ticari uyuşmazlıklarda dava takibi hizmeti sunar. Yabancı ortaklı şirketlerle İngilizce ve Almanca olarak çalışabilmekteyiz.",
    ],
    sections: [
      {
        heading: "Şirketler hukuku",
        paragraphs: [
          "Limited ve anonim şirket kuruluşu, esas sözleşmenin hazırlanması, sermaye artırımı, pay devri, birleşme ve bölünme işlemleri şirketler hukukunun temel konularıdır. Özellikle esas sözleşme ve ortaklar arası sözleşmelerde yönetim hakları, pay devrine ilişkin kısıtlamalar ve ortaklıktan çıkma koşullarının açıkça düzenlenmesi, ileride doğabilecek ortaklık uyuşmazlıklarını önemli ölçüde azaltır.",
          "Genel kurul ve yönetim kurulu toplantılarının usulüne uygun yapılması, kararların ticaret siciline tescili ve ilanı gibi işlemler de şirketin hukuki güvenliği açısından düzenli takip gerektirir. Usulsüz alınan kararlar iptal veya butlan davalarına konu olabilir.",
        ],
      },
      {
        heading: "Ticari sözleşmeler ve uyuşmazlıklar",
        paragraphs: [
          "Satış, distribütörlük, bayilik, franchise, hizmet ve gizlilik sözleşmeleri gibi ticari sözleşmelerin işletmenin ihtiyaçlarına göre hazırlanması ve karşı taraftan gelen taslakların dikkatle incelenmesi, ticari ilişkinin sağlıklı yürümesinin temelidir. Sorumluluk sınırları, cezai şartlar, fesih koşulları ve uyuşmazlık çözüm yolları bu sözleşmelerin en kritik hükümleridir.",
          "Ticari davalarda 6102 sayılı Kanun uyarınca konusu bir miktar paranın ödenmesi olan alacak ve tazminat talepleri için dava açılmadan önce arabulucuya başvurulması zorunludur. Arabuluculuk, çoğu zaman ticari ilişkinin devamını da mümkün kılan bir çözüm imkânı sunar.",
        ],
      },
      {
        heading: "Önleyici hukuk yaklaşımı",
        paragraphs: [
          "Şirketler açısından hukuki maliyetin en büyük kısmı, uyuşmazlık ortaya çıktıktan sonra doğar. Düzenli aralıklarla yapılan sözleşme ve kurul kararı incelemeleri, sicil kayıtlarının güncel tutulması ve ortaklar arasındaki ilişkilerin yazılı hâle getirilmesi, ileride doğabilecek uyuşmazlıkların önemli bir kısmını önler.",
          "Yeni bir ticari ilişkiye girmeden önce karşı tarafın sicil kayıtlarının, yetkili temsilcilerinin ve mali durumunun araştırılması da önleyici hukukun bir parçasıdır. Özellikle yüksek tutarlı ve uzun süreli sözleşmelerde teminat, cezai şart ve uyuşmazlık çözüm hükümlerinin dengeli kurulması önem taşır.",
        ],
      },
    ],
    topics: [
      "Limited ve anonim şirket kuruluşu",
      "Esas sözleşme ve ortaklar sözleşmesi hazırlanması",
      "Genel kurul ve yönetim kurulu süreçleri",
      "Pay devri, sermaye artırımı ve azaltımı",
      "Birleşme, bölünme ve tür değiştirme",
      "Ticari sözleşmelerin hazırlanması ve müzakeresi",
      "Distribütörlük, bayilik ve franchise ilişkileri",
      "Ortaklık uyuşmazlıkları ve ortaklıktan çıkma",
      "Ticari alacak davaları ve arabuluculuk",
      "Konkordato süreçlerinde danışmanlık",
    ],
    process: [
      {
        title: "İhtiyaç analizi",
        description:
          "Şirketinizin faaliyet alanını, ortaklık yapısını ve öncelikli hukuki ihtiyaçlarını birlikte belirleriz.",
      },
      {
        title: "Belge incelemesi",
        description:
          "Esas sözleşme, sicil kayıtları, mevcut sözleşmeler ve kurul kararlarını gözden geçirerek riskleri raporlarız.",
      },
      {
        title: "Hazırlık ve müzakere",
        description:
          "Gerekli sözleşme ve kararları hazırlar, karşı taraflarla yürütülen müzakerelerde yanınızda yer alırız.",
      },
      {
        title: "Uygulama ve tescil",
        description:
          "Ticaret sicili işlemleri, noter onayları ve ilan süreçlerini takip ederek işlemi tamamlarız.",
      },
      {
        title: "Sürekli danışmanlık",
        description:
          "Dilerseniz düzenli danışmanlık modeliyle günlük hukuki sorularınıza zamanında yanıt veririz.",
      },
    ],
    faqs: [
      {
        question: "Limited şirket mi, anonim şirket mi kurmalıyım?",
        answer:
          "Bu tercih; ortak sayısı, sermaye yapısı, pay devrindeki esneklik ihtiyacı, yatırım alma planları ve yönetim yapısı gibi faktörlere bağlıdır. Her iki türün avantajları, işletmenin hedefleri doğrultusunda değerlendirilmelidir.",
      },
      {
        question: "Ticari davalarda arabuluculuk zorunlu mu?",
        answer:
          "Konusu bir miktar paranın ödenmesi olan alacak ve tazminat talepli ticari davalarda dava açılmadan önce arabulucuya başvurulması dava şartıdır.",
      },
      {
        question: "Genel kurul kararına nasıl itiraz edilir?",
        answer:
          "Kanun veya esas sözleşme hükümlerine ve özellikle dürüstlük kuralına aykırı genel kurul kararlarına karşı, karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir.",
      },
      {
        question: "Limited şirkette pay devri nasıl yapılır?",
        answer:
          "Limited şirket pay devri yazılı şekilde yapılmalı ve imzalar noterce onaylanmalıdır. Esas sözleşmede aksi öngörülmedikçe devrin geçerli olması için genel kurulun onayı gerekir; devir ayrıca ticaret siciline tescil edilir.",
      },
    ],
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    categories: ["bireysel"],
    icon: "inheritance",
    image: "areaInheritance",
    excerpt:
      "Vasiyetname, mirasçılık belgesi, mirasın reddi ve paylaşımı süreçlerinde aile içi dengeleri gözeten, planlı ve şeffaf hukuki destek.",
    intro: [
      "Miras hukuku, bir kişinin vefatından sonra malvarlığının kimlere ve nasıl geçeceğini düzenler. Bu süreç çoğu zaman yas dönemine denk geldiği için, mirasçıların hem hukuki hem de duygusal açıdan zorlayıcı kararlar vermesini gerektirir. Önceden yapılan planlama ise aile içinde doğabilecek uyuşmazlıkların önemli bir kısmını önler.",
      "Büromuz, Türk Medeni Kanunu'nun miras hukukuna ilişkin hükümleri çerçevesinde vasiyetname ve miras sözleşmelerinin hazırlanması, mirasçılık belgesi alınması, terekenin tespiti ve paylaşımı ile miras uyuşmazlıklarına ilişkin davaların takibi konularında hizmet verir.",
    ],
    sections: [
      {
        heading: "Yasal mirasçılık ve saklı paylar",
        paragraphs: [
          "Türk hukukunda yasal mirasçılar zümre sistemine göre belirlenir: altsoy, anne-baba ve onların altsoyu, büyükanne-büyükbaba ve onların altsoyu. Sağ kalan eş ise birlikte mirasçı olduğu zümreye göre farklı oranlarda pay alır. Mirasçılık belgesi (veraset ilamı), noterden veya sulh hukuk mahkemesinden alınabilir.",
          "Miras bırakan, vasiyetname veya miras sözleşmesi ile malvarlığı üzerinde tasarrufta bulunabilir; ancak altsoy, anne-baba ve eş için kanunla öngörülen saklı payları ihlal edemez. Saklı payı zedelenen mirasçılar, tenkis davası yoluyla haklarını talep edebilir. Muris muvazaası iddiasıyla açılan tapu iptal davaları da uygulamada sıkça karşılaşılan uyuşmazlıklar arasındadır.",
        ],
      },
      {
        heading: "Mirasın reddi ve paylaşımı",
        paragraphs: [
          "Borçları malvarlığını aşan bir terekeyle karşılaşan mirasçılar, mirası reddederek terekenin borçlarından sorumlu olmaktan kurtulabilir. Ret beyanı, kural olarak mirasçılığın öğrenilmesinden itibaren üç ay içinde sulh hukuk mahkemesine yapılmalıdır. Ölüm tarihinde terekenin borca batık olduğu açıkça belli veya resmen tespit edilmişse ret beyanı karine olarak kabul edilir.",
          "Mirasçılar terekeyi aralarında anlaşarak paylaşabilir; anlaşma sağlanamazsa miras ortaklığı, ortaklığın giderilmesi davası ile sona erdirilir. Paylaşım sözleşmesinin yazılı yapılması ve tapu işlemlerinin buna uygun yürütülmesi önem taşır.",
        ],
      },
      {
        heading: "Miras planlaması",
        paragraphs: [
          "Miras uyuşmazlıklarının önemli bir kısmı, miras bırakanın sağlığında yapacağı planlama ile önlenebilir. Vasiyetname veya miras sözleşmesi ile malvarlığının paylaşımına ilişkin iradenin açıkça ortaya konması, saklı payların gözetilmesi ve yapılan bağışların kayıt altına alınması, mirasçılar arasında ileride doğabilecek anlaşmazlıkları azaltır.",
          "Yurt dışında yaşayan mirasçıların bulunduğu veya yurt dışında malvarlığı olan durumlarda, hangi ülkenin hukukunun uygulanacağı ve hangi mahkemenin yetkili olduğu da ayrıca değerlendirilmelidir. Türkiye'deki taşınmazlar bakımından kural olarak Türk hukuku uygulanır.",
        ],
      },
    ],
    topics: [
      "Mirasçılık belgesi (veraset ilamı) alınması",
      "Vasiyetname ve miras sözleşmesi hazırlanması",
      "Vasiyetnamenin açılması ve iptali",
      "Mirasın reddi ve hükmen ret",
      "Tenkis davaları",
      "Muris muvazaası nedeniyle tapu iptal davaları",
      "Terekenin tespiti ve resmî tasfiye",
      "Miras paylaşımı ve ortaklığın giderilmesi",
      "Yurt dışında bulunan mirasçılar ve taşınmazlar",
      "Mirastan mal kaçırma iddiaları",
    ],
    process: [
      {
        title: "Mirasçılık durumunun tespiti",
        description:
          "Nüfus kayıtları üzerinden yasal mirasçıları ve paylarını belirler, gerekirse mirasçılık belgesi alırız.",
      },
      {
        title: "Terekenin araştırılması",
        description:
          "Tapu, banka, araç ve borç kayıtlarını araştırarak terekenin aktif ve pasifini ortaya koyarız.",
      },
      {
        title: "Seçeneklerin değerlendirilmesi",
        description:
          "Mirasın kabulü, reddi veya paylaşımı konusunda her seçeneğin sonuçlarını açıkça anlatırız.",
      },
      {
        title: "Uzlaşma veya dava",
        description:
          "Mirasçılar arasında paylaşım protokolü hazırlar; anlaşma olmazsa gerekli davaları açar ve takip ederiz.",
      },
      {
        title: "Tescil ve devir",
        description:
          "Paylaşım veya mahkeme kararının tapu, banka ve diğer kurumlar nezdinde uygulanmasını sağlarız.",
      },
    ],
    faqs: [
      {
        question: "Mirasın reddi için süre nedir?",
        answer:
          "Yasal mirasçılar için süre, miras bırakanın ölümünü ve mirasçı olduklarını öğrendikleri tarihten itibaren üç aydır. Atanmış mirasçılar için süre, tasarrufun kendilerine resmen bildirildiği tarihte başlar.",
      },
      {
        question: "Mirasçılık belgesi nereden alınır?",
        answer:
          "Mirasçılık belgesi herhangi bir noterden ya da sulh hukuk mahkemesinden alınabilir. Vasiyetname bulunması veya yabancı unsurlu durumlarda mahkemeye başvurulması gerekebilir.",
      },
      {
        question: "Vasiyetname hangi şekillerde yapılabilir?",
        answer:
          "Türk hukukunda vasiyetname resmî şekilde (noter huzurunda), el yazısıyla veya olağanüstü durumlarda sözlü olarak yapılabilir. Her birinin kanunda öngörülen geçerlilik şartları vardır.",
      },
      {
        question: "Saklı pay nedir?",
        answer:
          "Saklı pay, miras bırakanın vasiyetname veya bağışlarla ortadan kaldıramayacağı, kanunla belirli mirasçılara güvence altına alınmış miras payıdır. Altsoy, anne-baba ve sağ kalan eş saklı paylı mirasçılardır.",
      },
    ],
  },
  {
    slug: "icra-ve-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    categories: ["bireysel", "kurumsal"],
    icon: "enforcement",
    image: "areaEnforcement",
    excerpt:
      "Alacakların tahsili, icra takipleri, itiraz ve şikâyet süreçleri ile iflas ve konkordato işlemlerinde alacaklı ve borçlulara hukuki destek.",
    intro: [
      "Bir alacağın mahkeme kararıyla veya belgeyle sabit olması, her zaman o alacağın kendiliğinden tahsil edileceği anlamına gelmez. İcra ve iflas hukuku, alacakların devlet gücüyle tahsil edilmesine ilişkin usulleri düzenler ve bu usullere titizlikle uyulmasını gerektirir.",
      "Büromuz, 2004 sayılı İcra ve İflas Kanunu çerçevesinde alacaklılar adına icra takiplerinin başlatılması ve yürütülmesi ile borçluların haksız takiplere karşı korunması konularında hizmet verir. Kurumsal müvekkillerimizin ticari alacak portföylerini düzenli raporlama ile takip ederiz.",
    ],
    sections: [
      {
        heading: "Takip türleri ve itiraz",
        paragraphs: [
          "Alacağın niteliğine göre ilamsız takip, kambiyo senetlerine dayalı takip, ilamlı takip veya rehnin paraya çevrilmesi yoluyla takip başlatılabilir. Doğru takip yolunun seçilmesi, sürecin hızını ve borçlunun başvurabileceği itiraz imkânlarını doğrudan etkiler.",
          "İlamsız takipte borçlu, ödeme emrinin tebliğinden itibaren yedi gün içinde itiraz ederek takibi durdurabilir. Bu durumda alacaklı, itirazın iptali davası veya itirazın kaldırılması yoluna başvurur. Kambiyo senetlerine dayalı takiplerde ise itiraz süresi beş gündür ve itiraz icra mahkemesine yapılır. Borçlu açısından menfi tespit ve istirdat davaları da önemli koruma araçlarıdır.",
        ],
      },
      {
        heading: "Haciz, satış ve iflas",
        paragraphs: [
          "Takibin kesinleşmesinden sonra borçlunun banka hesapları, taşınmazları, araçları ve üçüncü kişilerdeki alacakları üzerine haciz konulabilir. Haczedilen malların satışı ve elde edilen bedelin alacaklılar arasında paylaştırılması da icra dairesi aracılığıyla yürütülür. Haczedilemeyen mal ve haklar ise kanunla sınırlı olarak belirlenmiştir.",
          "Borçlarını ödeyemeyen tacirler için iflas yolu gündeme gelebilir. Ancak mali durumu bozulan işletmeler için konkordato, borçların yapılandırılarak faaliyetlerin sürdürülmesini sağlayabilen bir alternatiftir. Her iki süreç de ayrıntılı mali analiz ve zamanında atılması gereken adımlar içerir.",
        ],
      },
      {
        heading: "Alacaklılar ve borçlular için öneriler",
        paragraphs: [
          "Alacaklılar açısından alacağın dayanağını oluşturan fatura, sözleşme, sevk irsaliyesi ve yazışmaların düzenli tutulması, takibin hızını doğrudan etkiler. Borçlunun malvarlığını elden çıkarma ihtimali bulunan durumlarda ihtiyati haciz talebi de değerlendirilmelidir.",
          "Borçlular açısından ise ödeme emrine itiraz süresinin kısa olduğu unutulmamalıdır. Borcun bulunmadığı, ödendiği veya miktarının hatalı olduğu düşünülüyorsa, tebliğden itibaren süresi içinde itiraz edilmesi gerekir. Süre geçtikten sonra yapılabilecek işlemler oldukça sınırlıdır ve çoğu zaman ayrı bir dava açılmasını gerektirir.",
        ],
      },
    ],
    topics: [
      "İlamlı ve ilamsız icra takipleri",
      "Kambiyo senetlerine dayalı takipler",
      "İtirazın iptali ve kaldırılması davaları",
      "Menfi tespit ve istirdat davaları",
      "Haciz, muhafaza ve satış işlemleri",
      "İcra mahkemesine şikâyet",
      "İhalenin feshi davaları",
      "Rehnin paraya çevrilmesi yoluyla takip",
      "İflas ve konkordato süreçleri",
      "Ticari alacak portföyü yönetimi",
    ],
    process: [
      {
        title: "Alacağın değerlendirilmesi",
        description:
          "Fatura, senet, sözleşme veya mahkeme kararı gibi dayanak belgeleri inceleyerek en uygun takip yolunu belirleriz.",
      },
      {
        title: "Takibin başlatılması",
        description:
          "UYAP üzerinden takip talebini oluşturur, ödeme veya icra emrinin tebliğini takip ederiz.",
      },
      {
        title: "İtiraz süreçleri",
        description:
          "Borçlunun itirazı hâlinde itirazın iptali veya kaldırılması yoluna başvururuz.",
      },
      {
        title: "Haciz ve tahsil",
        description:
          "Malvarlığı araştırması yaparak haciz işlemlerini yürütür, satış ve tahsil aşamalarını takip ederiz.",
      },
      {
        title: "Raporlama",
        description:
          "Dosyaların güncel durumu hakkında düzenli ve anlaşılır raporlar sunarız.",
      },
    ],
    faqs: [
      {
        question: "Ödeme emrine itiraz süresi nedir?",
        answer:
          "Genel haciz yoluyla ilamsız takipte ödeme emrine itiraz süresi tebliğden itibaren yedi gündür. Kambiyo senetlerine dayalı takiplerde bu süre beş gündür.",
      },
      {
        question: "Maaşa ne kadar haciz konulabilir?",
        answer:
          "Nafaka alacakları hariç olmak üzere, maaş ve ücretlerin kural olarak dörtte birinden az olmamak üzere icra müdürünce belirlenecek kısmı haczedilebilir.",
      },
      {
        question: "İtirazın iptali davası ne zaman açılmalıdır?",
        answer:
          "Alacaklı, borçlunun itirazının kendisine tebliğinden itibaren bir yıl içinde itirazın iptali davası açabilir. Bu davadan önce, uyuşmazlığın niteliğine göre arabuluculuk şartı aranabilir.",
      },
      {
        question: "Konkordato nedir?",
        answer:
          "Konkordato, borçlarını vadesinde ödeyemeyen veya ödeyememe tehlikesi altında olan borçlunun, alacaklılarıyla mahkeme denetiminde yaptığı bir yapılandırma anlaşmasıdır. Amaç, işletmenin faaliyetini sürdürerek borçların ödenmesidir.",
      },
    ],
  },
  {
    slug: "tuketici-hukuku",
    title: "Tüketici Hukuku",
    categories: ["bireysel"],
    icon: "consumer",
    image: "areaConsumer",
    excerpt:
      "Ayıplı mal ve hizmet, mesafeli satış, banka ve kredi işlemleri gibi tüketici uyuşmazlıklarında hakem heyeti ve mahkeme süreçlerinde destek.",
    intro: [
      "Gündelik hayatta yaptığımız alışverişlerin, abonelik sözleşmelerinin ve bankacılık işlemlerinin önemli bir kısmı tüketici hukukunun koruması altındadır. Satıcı veya sağlayıcı karşısında genellikle daha zayıf konumda bulunan tüketiciyi korumak için 6502 sayılı Tüketicinin Korunması Hakkında Kanun, özel ve emredici kurallar öngörür.",
      "Büromuz, tüketicilerin ayıplı mal ve hizmetlerden, mesafeli ve kapıda satış sözleşmelerinden, kredi ve kart işlemlerinden doğan uyuşmazlıklarında tüketici hakem heyetleri ve tüketici mahkemeleri nezdinde danışmanlık ve temsil hizmeti sunar.",
    ],
    sections: [
      {
        heading: "Ayıplı mal ve hizmet",
        paragraphs: [
          "Satışa konu malın sözleşmeye, ambalajında veya reklamlarında belirtilen niteliklere uygun olmaması ayıplı mal olarak kabul edilir. Tüketici bu durumda; sözleşmeden dönme, ayıp oranında bedel indirimi, ücretsiz onarım veya ayıpsız misli ile değişim haklarından birini seçebilir. Seçimlik hakların kullanılmasında satıcının ve üreticinin yükümlülükleri kanunla belirlenmiştir.",
          "Ayıplı hizmette de benzer haklar söz konusudur. Tüketicinin, ayıbı fark ettiğinde durumu yazılı olarak bildirmesi ve fatura, garanti belgesi, yazışmalar gibi belgeleri saklaması, ileride başvurulacak hukuki yollar bakımından önem taşır.",
        ],
      },
      {
        heading: "Hakem heyeti ve tüketici mahkemesi",
        paragraphs: [
          "Her yıl yeniden belirlenen parasal sınırın altındaki uyuşmazlıklarda tüketici hakem heyetine başvurmak zorunludur. Başvuru, e-Devlet üzerinden veya ilgili kaymakamlık ve valiliklerdeki heyetlere doğrudan yapılabilir ve başvuru için harç ödenmez.",
          "Parasal sınırı aşan uyuşmazlıklarda ise dava açılmadan önce arabulucuya başvurulması dava şartıdır; arabuluculukta anlaşma sağlanamazsa tüketici mahkemesinde dava açılabilir. Bankacılık işlemlerinden doğan masraf iadesi, konut kredisi ve taksitli satış sözleşmelerine ilişkin uyuşmazlıklar da bu kapsamda değerlendirilir.",
        ],
      },
      {
        heading: "Başvuru öncesi hazırlık",
        paragraphs: [
          "Tüketici uyuşmazlıklarında başarılı bir başvurunun temeli, belgelerin eksiksiz olmasıdır. Fatura veya fiş, sipariş onayı, garanti belgesi, servis kayıtları, kargo teslim bilgileri ve satıcıyla yapılan yazışmalar mutlaka saklanmalıdır. Ayıbın fotoğraf veya video ile belgelenmesi de değerlendirme sırasında faydalı olur.",
          "Satıcıya yapılan bildirimin yazılı olması ve hangi seçimlik hakkın kullanıldığının açıkça belirtilmesi önemlidir. Başvuru yapılacak merci, uyuşmazlık tutarına göre değiştiğinden, güncel parasal sınırın başvuru tarihinde kontrol edilmesi gerekir.",
        ],
      },
    ],
    topics: [
      "Ayıplı mal ve hizmet uyuşmazlıkları",
      "Mesafeli ve internet satışlarında cayma hakkı",
      "Tüketici hakem heyeti başvuruları",
      "Tüketici mahkemesi davaları",
      "Banka, kredi ve kredi kartı uyuşmazlıkları",
      "Ön ödemeli konut satışları",
      "Abonelik sözleşmeleri",
      "Paket tur ve devre tatil sözleşmeleri",
      "Garanti belgesi ve satış sonrası hizmetler",
      "Haksız şart içeren sözleşme hükümleri",
    ],
    process: [
      {
        title: "Uyuşmazlığın tanımlanması",
        description:
          "Satın alınan ürün veya hizmeti, yaşanan sorunu ve elinizdeki belgeleri birlikte değerlendiririz.",
      },
      {
        title: "Bildirim ve ihtar",
        description:
          "Satıcıya veya sağlayıcıya yapılacak yazılı bildirimi ve seçimlik hakkın kullanılmasını planlarız.",
      },
      {
        title: "Doğru merciin belirlenmesi",
        description:
          "Uyuşmazlık tutarına göre hakem heyeti, arabuluculuk veya tüketici mahkemesi yolunu belirleriz.",
      },
      {
        title: "Başvuru ve takip",
        description:
          "Başvuru veya dava dilekçesini hazırlar, bilirkişi incelemesi dahil tüm süreci takip ederiz.",
      },
      {
        title: "Kararın uygulanması",
        description:
          "Hakem heyeti veya mahkeme kararının yerine getirilmesi için gerekli icra adımlarını atarız.",
      },
    ],
    faqs: [
      {
        question: "İnternetten aldığım ürünü iade edebilir miyim?",
        answer:
          "Mesafeli sözleşmelerde tüketici, kanun ve yönetmelikte sayılan istisnalar dışında, malın teslim alındığı tarihten itibaren on dört gün içinde herhangi bir gerekçe göstermeden cayma hakkını kullanabilir.",
      },
      {
        question: "Tüketici hakem heyetine başvuru ücretli mi?",
        answer:
          "Hayır. Tüketici hakem heyetlerine yapılan başvurular harçtan muaftır. Başvuru e-Devlet üzerinden de yapılabilir.",
      },
      {
        question: "Ayıplı mal için hangi haklarım var?",
        answer:
          "Sözleşmeden dönme, ayıp oranında bedel indirimi, ücretsiz onarım veya ayıpsız misli ile değişim haklarından birini seçebilirsiniz. Koşullar varsa tazminat da talep edilebilir.",
      },
      {
        question: "Ayıplı mal için zamanaşımı süresi nedir?",
        answer:
          "Daha uzun bir süre için sorumluluk üstlenilmemişse, ayıplı maldan sorumluluk ayıp sonradan ortaya çıksa bile malın tesliminden itibaren iki yıllık zamanaşımı süresine tabidir. Konut ve tatil amaçlı taşınmazlarda bu süre beş yıldır.",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}
