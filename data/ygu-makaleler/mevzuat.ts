// YGU Hakkında › Mevzuat makaleleri. Kaynak: Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında
// Yönetmelik Taslağı ve ekleri. Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil, geniş
// zaman ("yapılır, edilir"; kullanıcı 18 Ekim). Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const MEVZUAT_MAKALELERI: YguMakale[] = [
  // 27 Kasım 2026: yayımlanan Bina Yangın Yönetmeliği (RG 33443). Kaynak taslak değil, yönetmeliğin kendisi; site genelindeki
  // "BYY ifadesi kullanılmaz" kuralı taslak dönemi içindi, bu yazıda resmî ad kullanılır. Duyuru popup'ı (DUYURU) buraya bağlanır.
  {
    kategori: "mevzuat",
    yol: "bina-yangin-yonetmeligi-ygu-ve-periyodik-kontrol",
    baslik: "Yeni Bina Yangın Yönetmeliği YGU ve Periyodik Kontrol İçin Ne Getirir?",
    ozet: "27 Kasım 2026'da yayımlanan Bina Yangın Yönetmeliği'nin yürürlük takvimi, yangın güvenlik uzmanına verilen görevler, periyodik kontrol, tatbikat ve mevcut yapılar için geçiş hükümleri.",
    ozetle: "Bina Yangın Yönetmeliği 27 Kasım 2026 tarihli ve 33443 sayılı Resmî Gazete'de yayımlanmıştır ve 1 Ocak 2028'de yürürlüğe girecektir. Yönetmelik, 2007 tarihli Binaların Yangından Korunması Hakkında Yönetmeliği yürürlükten kaldırır. Yangın güvenlik uzmanı (YGU) ilk kez yönetmelik düzeyinde tanımlanır: proje ve yapı kullanma izni aşamalarında uygunluk görüşü, periyodik kontrol, yangın güvenlik raporu ve tatbikat gözetimi, mahalli itfaiyenin gerekli gördüğü durumlarda YGU'ya verilebilir. Kontrol süreleri, ücretler ve YGU nitelikleri Bakanlıkça ayrıca belirlenecektir.",
    yayin: "2026-11-27",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenliği mevzuatında uzun süredir beklenen yeni ana metin, Bina Yangın Yönetmeliği adıyla 27 Kasım 2026'da Resmî Gazete'de yayımlanmıştır. 148 madde, 5 geçici madde ve 15 ekten oluşan yönetmelik, 2007'den bu yana uygulanan Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) yerini alacaktır." },
      { tip: "p", metin: "Aşağıda yönetmeliğin yangın güvenlik uzmanlığını ve binaların kullanım sürecindeki kontrolünü ilgilendiren hükümleri açıklanır. Mimari ve tesisat hükümlerinden yalnız eski yönetmeliğe göre öne çıkan farklar özetlenir; ayrıntıları ayrı yazıların konusudur." },
      { tip: "h2", id: "kunye", metin: "Yönetmelik ne zaman yayımlandı ve ne zaman yürürlüğe girecek?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "Yönetmelikteki karşılığı"],
        satirlar: [
          ["Yayım", "27 Kasım 2026 tarihli ve 33443 sayılı Resmî Gazete"],
          ["Karar", "26 Kasım 2026 tarihli ve 12041 sayılı Cumhurbaşkanı Kararı"],
          ["Dayanak", "7126 sayılı Sivil Savunma Kanunu'nun ek 9. maddesi (Madde 3)"],
          ["Yürürlük", "1 Ocak 2028 (Madde 147)"],
          ["Yürürlükten kaldırılan", "19/12/2007 tarihli ve 2007/12937 sayılı Bakanlar Kurulu Kararı ile yürürlüğe konulan Binaların Yangından Korunması Hakkında Yönetmelik (Madde 145)"],
          ["Yürütme", "Cumhurbaşkanı (Madde 148)"]
        ]
      },
      { tip: "p", metin: "Yayım ile yürürlük arasında yaklaşık 13 aylık bir hazırlık süresi bırakılmıştır. Bu süre içinde BYKHY uygulanmaya devam eder; yeni hükümler 1 Ocak 2028'den itibaren uygulanacaktır." },
      { tip: "h2", id: "ygu-tanimi", metin: "Yangın güvenlik uzmanı yönetmelikte nasıl tanımlanır?" },
      { tip: "p", metin: "Yönetmeliğin tanımlar maddesinde iki yeni kavram yer alır. Bu kavramlar, yangın güvenlik uzmanlığının yasal zeminini oluşturur." },
      {
        tip: "tablo",
        basliklar: ["Kavram", "Yönetmelikteki anlamı"],
        satirlar: [
          ["Yangın güvenlik uzmanı", "Bakanlık veya Bakanlığın yetkilendirdiği eğitici kurum ya da kuruluşlarca verilen eğitim sonucunda yapılan sınavda başarılı olan ve nitelikleri Bakanlıkça belirlenen kişi (Madde 4/şş)"],
          ["Yangın güvenlik raporu", "Her türlü yapı, bina, tesis ve işletme için mahalli itfaiye teşkilatı veya itfaiyenin gerekli gördüğü durumda yangın güvenlik uzmanlarınca düzenlenen ve yangın güvenliğine ilişkin durumu gösteren belge (Madde 4/ss)"],
          ["Periyodik muayene", "Yangın güvenlik sistemlerinin, cihazlarının veya ekipmanlarının yetkili kişilerce yapılan kontrol, test ve bakım faaliyetleri (Madde 4/ff)"]
        ]
      },
      { tip: "p", metin: "Tanımlarda periyodik muayene ile periyodik kontrol birbirinden ayrılır. Periyodik muayene, sistemlerin teknik bakım ve testidir; periyodik kontrol ise yapının bütün olarak yönetmeliğe uygunluğunun denetlenmesidir ve sonucunda yangın güvenlik raporu düzenlenir." },
      { tip: "h2", id: "ygu-gorevleri", metin: "YGU hangi aşamalarda görev alır?" },
      { tip: "p", metin: "Yönetmelikte YGU'ya verilen görevlerin tamamı aynı kalıpla yazılır: görev öncelikle mahalli itfaiye teşkilatınındır, itfaiyenin gerekli gördüğü durumda yangın güvenlik uzmanlarına verilir. Bu görevler yapının dört aşamasına dağılır:" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Proje onayı (Madde 5/10)", metin: "Ayrı hazırlanan yangın algılama, söndürme ve tahliye projeleri, itfaiyenin ya da YGU'nun uygunluk görüşü alındıktan sonra ilgili idarece onaylanır. Değişiklik istenirse dayanak madde belirtilir." },
          { baslik: "Yapı kullanma izni (Madde 6/2)", metin: "Periyodik kontrole tabi yapılarda, kullanım sınıfına göre itfaiyenin veya YGU'nun uygunluk görüşü alınır. Bu görüş verilen yapılarda kullanım ya da tehlike sınıfı değişmedikçe veya esaslı tadilat yapılmadıkça ilk periyodik kontrol tarihine kadar yangın güvenlik raporu istenmez." },
          { baslik: "Periyodik kontrol ve rapor (Madde 133)", metin: "Kamu binaları dışındaki yapıların sahibi, yöneticisi ve sorumluları, periyodik kontrolleri itfaiyeye veya itfaiyenin gerekli gördüğü durumda YGU'ya yaptırır ve raporlatır. Kamu binalarında kontrol, kurum amiri ya da görevlendireceği kişi veya heyetçe yapılır; kurum amiri itfaiyeden görevlendirme isteyebilir veya YGU'dan hizmet alabilir." },
          { baslik: "Tatbikat gözetimi (Madde 134/2)", metin: "Belirli yapılarda yıllık yangın tatbikatı itfaiye veya YGU gözetiminde yapılır." }
        ]
      },
      { tip: "h2", id: "periyodik-kontrol", metin: "Periyodik kontrol ve yangın güvenlik raporu için neler öngörülür?" },
      {
        tip: "liste",
        numarali: false,
        maddeler: [
          "Güncel yangın güvenlik raporu bulunmayan ya da raporunun geçerlilik süresi dolmasına rağmen yenilemeyen yapılar, ilgili idareye bildirilir (Madde 133/3).",
          "Kamu kurumları, kullanım sınıfına göre kendi yetki alanlarında yaptıkları denetimlerde güncel yangın güvenlik raporunu ister (Madde 133/1-b).",
          "Mali denetimler hariç; periyodik kontrole tabi yapılara denetim, belgelendirme veya teşvik gibi destek veren kurumlar ile yangın sigortası yapan şirketler güncel yangın güvenlik raporu ister (Madde 6/3).",
          "Yapı sahibi veya yöneticisi değiştiğinde periyodik kontrol ve muayenelere ilişkin bilgi ve belgeler yeni sahibe ya da yöneticiye bildirilir (Madde 6/6).",
          "Sistemleri kuranlar, müteahhitler ve cihaz satıcıları, yapı sahibini ve alıcıyı periyodik muayene konusunda bilgilendirir (Madde 6/5).",
          "Genel hayata etkili afetlerden sonra hasarsız veya az hasarlı yapılarda yangın güvenlik sistemleri, hasar tespitinden itibaren en geç 3 ay içinde muayene ettirilir; raporlar periyodik kontrolde sunulmak üzere saklanır (Madde 5/5).",
          "İtfaiyenin veya ruhsat vermeye yetkili idarenin re'sen denetim hakkı saklıdır (Madde 133/2)."
        ]
      },
      { tip: "h2", id: "bakanlik", metin: "Kontrol süreleri, ücretler ve YGU nitelikleri ne zaman belli olacak?" },
      { tip: "p", metin: "Yönetmelik bu konularda sayı vermez. Madde 133'ün dördüncü fıkrasına göre periyodik kontroller, kontrole tabi yapılar ve kontrol süreleri, uygunluk görüşü ve tatbikatlar, bu işler için alınacak ücretler, yangın güvenlik uzmanlarının nitelikleri, görev ve sorumlulukları ile bunların yürürlüğüne ilişkin usul ve esaslar Bakanlık tarafından belirlenecektir." },
      { tip: "p", metin: "Bu nedenle sitedeki diğer YGU yazılarında açıklanan Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik Taslağı, yayımlanan yönetmeliğin 133. maddesine dayanacak alt düzenlemedir. Geçici 2. maddeye göre yönetmeliğe aykırı alt düzey mevzuat, yürürlük tarihinden itibaren 1 yıl içinde uyumlu hâle getirilecektir." },
      { tip: "not", etiket: "Önemli", metin: "Taslakta yer alan kontrol süreleri, YGU seviyeleri ve eğitim şartları, Bakanlığın çıkaracağı düzenleme yayımlanana kadar kesinleşmiş sayılmaz." },
      { tip: "h2", id: "sorumluluk", metin: "Periyodik kontrolde kim sorumlu tutulur?" },
      { tip: "p", metin: "Madde 6'da sorumluluk zinciri aşamalara göre sayılır. Kullanım sürecine ilişkin üç bent doğrudan periyodik kontrol ve muayeneyi ilgilendirir:" },
      {
        tip: "tablo",
        basliklar: ["Durum", "Sorumlu"],
        satirlar: [
          ["Periyodik muayenelerin zamanında yaptırılmaması, periyodik kontrolün süresi içinde yaptırılmaması (6/1-d)", "Kamu yapılarında en üst yönetici veya görevlendirdiği birim amiri; diğer yapılarda yapı sahibi, yönetici veya kat malikleri kurulu"],
          ["Periyodik muayenenin standarda uygun yapılmaması (6/1-f)", "Periyodik muayeneyi yapan kişi"],
          ["Periyodik kontrolde eksik, hatalı veya standart dışı durumların tespitinde ihmal ya da tespit edildiği hâlde gereğinin yapılmaması (6/1-g)", "Mahalli itfaiye teşkilatı veya yangın güvenlik uzmanı"]
        ]
      },
      { tip: "p", metin: "Yönetmeliğe aykırılıklarda, aykırılığın suç ya da kabahat oluşturmasına göre 3194 sayılı İmar Kanunu, Türk Ceza Kanunu ve Kabahatler Kanunu hükümleri uygulanır (Madde 144)." },
      { tip: "h2", id: "tatbikat", metin: "Yangın tatbikatı için ne öngörülür?" },
      {
        tip: "liste",
        numarali: false,
        maddeler: [
          "Yönetmelik kapsamındaki yapılarda yılda en az 1 kez yangın tahliye ve söndürme tatbikatı yapılır; sorumluluk yapı sahibi, yöneticisi veya en üst yöneticinin görevlendirdiği birim amirindedir.",
          "Yataklı sağlık yapılarında, ilköğretim, ortaöğretim ve yükseköğretim kurumlarında, yatılan oda sayısı 25'ten fazla olan konaklama yapılarında, yapı yüksekliği 51,50 m'yi geçen yapılarda ve yüksek tehlikeli yapılarda tatbikat itfaiye veya itfaiyenin gerekli gördüğü durumda YGU gözetiminde yapılır. Kamu binalarında kurum amirinin görevlendireceği YGU gözetiminde de yapılabilir.",
          "Uygun gerçekleşmeyen tatbikat 3 ay içinde tekrarlanır.",
          "Tatbikatın zamanı, senaryosu ve katılımcıları raporlanır; rapor istenildiğinde sunulmak üzere saklanır."
        ]
      },
      { tip: "h2", id: "mevcut-yapilar", metin: "Mevcut yapılar için ne değişir?" },
      { tip: "p", metin: "BYKHY'ye uygun tedbirleri almış mevcut yapılardan, aşağıdaki üç başlık dışında ilave tedbir istenmez; yapı sahibi isterse yeni yönetmeliğe uyabilir (Madde 141/1). Bu üç başlık, yürürlük tarihinden itibaren 1 yıl içinde, yani 1 Ocak 2029'a kadar yerine getirilecektir (Geçici Madde 4)." },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Yüksek konutlar (Madde 141/3)", metin: "Yapı yüksekliği 30,50 m'den fazla olan konutlarda otomatik algılama ve uyarı sistemi kurulur; standarda uygun sayı ve yerleşimde taşınabilir söndürme cihazı bulundurulur." },
          { baslik: "Elektrikli araç şarjı (Madde 141/4)", metin: "Şarj sistemi kurulmuş veya kurulacak mevcut yapılarda 60. maddenin ilgili fıkralarına uyulur; uyulamıyorsa itfaiyenin görüşüne göre işlem yapılır." },
          { baslik: "Çatı ve cephe güneş enerjisi sistemleri (Madde 141/5)", metin: "Panel sistemlerinde acil durum devre kesicileri kullanılır, kesme anahtarı yangından etkilenmeyecek ve kolay müdahale edilebilecek bir yerde ya da en az 30 dakika dayanımlı kapalı bölümde bulunur; yerleşim planları ve uyarı levhaları asılır." }
        ]
      },
      {
        tip: "liste",
        numarali: false,
        maddeler: [
          "Mevcut yapıda eksiklik tespit edildiğinde veya esaslı tadilat yapıldığında, tehlikeli madde bulunduran yapılar dışında, yukarıdaki üç başlığa uyulması şartıyla BYKHY hükümleri uygulanabilir; tehlikeli madde bulunduran yapılarda yeni yönetmeliğe uyulur (Madde 141/2).",
          "Yürürlükten önce usulüne uygun yapı ruhsatı başvurusu yapılmış yapılar, istenirse BYKHY'ye göre sonuçlandırılır (Geçici Madde 4/2); ihale süreci başlamış kamu yapıları için de BYKHY uygulanır (Geçici Madde 3).",
          "BYKHY'nin Tarihi Yapılar kısmına uygun tedbir almış tescilli yapılardan ilave tedbir istenmez (Madde 142)."
        ]
      },
      { tip: "h2", id: "farklar", metin: "BYKHY'ye göre öne çıkan farklar nelerdir?" },
      { tip: "p", metin: "Yeni yönetmelik eski metnin kısım yapısını büyük ölçüde korur; ancak birçok eşik düşürülür ve önceki metinde hiç yer almayan konular ilk kez düzenlenir. 68. maddeden sonraki madde numaraları birkaç sıra kaydığı için eski maddeye atıf yapan şartname, prosedür ve eğitim dokümanlarının da güncellenmesi gerekir." },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY (2007)", "Bina Yangın Yönetmeliği (2026)"],
        satirlar: [
          ["Denetim modeli", "İtfaiye ve müfettiş denetimi; yılda bir tatbikat", "Yangın güvenlik raporu, YGU, periyodik kontrol, gözetimli tatbikat (Md. 4, 6, 133, 134)"],
          ["Ayrı yangın tahliye projesi", "Kat alanı 2.000 m² üzeri", "Herhangi bir katı 1.000 m² üzeri veya yapı yüksekliği 21,50 m üzeri (Md. 5/9)"],
          ["Sprinkler: otopark", "Kapalı otopark 600 m² üzeri", "Kapalı ve katlı açık otopark 300 m² üzeri (Md. 98/2)"],
          ["Sprinkler: konaklama", "100 oda veya 200 yatak üzeri ya da 21,50 m üzeri", "50 oda veya 15,50 m üzeri (Md. 98/2)"],
          ["Sprinkler: ticaret ve toplanma", "2.000 m² üzeri", "1.000 m² üzeri (Md. 98/2)"],
          ["Sprinkler: yeni zorunluluklar", "—", "Endüstriyel yapı 5.000 m², depo 2.000 m² üzeri; 9,50 m üzeri yataklı sağlık; cephesinde güneş enerjisi sistemi olan yapılar (Md. 98/2)"],
          ["Acil durum asansörü", "51,50 m üzeri bütün yapılar", "Konutta 51,50 m, diğer yapılarda 30,50 m üzeri; yataklı sağlıkta her yatay tahliye alanında"],
          ["Kaçış kapısı ölçüsü", "80 × 200 cm", "90 × 210 cm (Md. 47/1)"],
          ["Güneş enerjisi, elektrikli araç şarjı, engelli tahliye bekleme noktası", "Düzenleme yok", "Ayrıntılı kurallar getirilir; mevcut yapılarda GES ve şarj için 1 yıllık uyum süresi"],
          ["Mevcut yapılar", "Ayrı bir kısımda yaklaşık 30 madde, 2023 ve 2025 son tarihleri", "BYKHY'ye uygunsa ilave tedbir yok; yalnız üç konuda 1 yıllık uyum (Md. 141, Geçici 4)"],
          ["İhbar", "İtfaiye telefonu yazılır", "112 Acil Çağrı Merkezi; ihbar santralinin 112 ile otomatik haberleşmesi (Md. 7, Geçici 5)"]
        ]
      },
      { tip: "h2", id: "diger", metin: "Dikkat çeken diğer hükümler nelerdir?" },
      {
        tip: "liste",
        numarali: false,
        maddeler: [
          "Askerî, emniyet, sahil güvenlik, jandarma ve AFAD'a ait harekât ve savunma amaçlı yapılar ile özellik arz eden yapılarda, kontrolün kurumlarınca yapılması şartıyla uygunluk görüşü ve periyodik kontrol aranmaz (Madde 143).",
          "Enerji, nükleer, ceza infaz ve geçici barınma gibi özellik arz eden yapıların tedbirleri, ilgili kurumlarca 1 Şubat 2028'e kadar çıkarılacak yönetmeliklerle belirlenecektir (Geçici Madde 1).",
          "Yangın ihbar santrallerinin 112 Acil Çağrı Merkezi ile otomatik haberleşmesine ilişkin düzenleme İçişleri Bakanlığı ile Çevre, Şehircilik ve İklim Değişikliği Bakanlığınca yapılacaktır (Geçici Madde 5).",
          "Yapı yüksekliği 30,50 m'den fazla konutlarda, içinde 50 kişiden fazla insan bulunan konut dışı yapılarda ve 200 kişiden fazla kişinin barındığı sitelerde söndürme, kurtarma, koruma ve ilk yardım ekipleri kurulur (Madde 128).",
          "Yangın güvenlik sistemleri bakım veya arıza nedeniyle devre dışı kaldığında kısa sürede çalışır duruma getirilir; o süre boyunca korumasız kalan bölgeler ilave güvenlik personeliyle denetlenir (Madde 5/12)."
        ]
      }
    ],
    dayanak: [
      "Bina Yangın Yönetmeliği (RG 27.11.2026, Sayı 33443) Madde 3: Dayanak",
      "Madde 4: Tanımlar (ff, ss, şş)",
      "Madde 5: İlkeler (5., 9., 10. ve 12. fıkralar)",
      "Madde 47: Kaçış yolu kapıları",
      "Madde 98: Yağmurlama sistemi",
      "Madde 6: Görev, yetki ve sorumluluk",
      "Madde 128: Ekiplerin kuruluşu",
      "Madde 133: Denetim ve periyodik kontrol",
      "Madde 134: Tatbikat",
      "Madde 141–143: Mevcut ve tescilli yapılar, kontrol aranmayacak hâller",
      "Madde 144–147: Aykırılık, yürürlükten kaldırma, düzenleme yetkisi, yürürlük",
      "Geçici Madde 1–5"
    ],
    mevzuatNotu: "Bu yazı, 27 Kasım 2026 tarihli ve 33443 sayılı Resmî Gazete'de yayımlanan Bina Yangın Yönetmeliği'ne dayanmaktadır. Yönetmelik 1 Ocak 2028'de yürürlüğe girecektir; o tarihe kadar Binaların Yangından Korunması Hakkında Yönetmelik uygulanır. Periyodik kontrol süreleri, ücretler ve YGU nitelikleri Bakanlıkça ayrıca belirlenecektir. Güncel durum resmî mevzuat üzerinden doğrulanmalıdır."
  },  // 27 Kasım 2026: BYKHY (mevzuat.gov.tr güncel metni) ile Bina Yangın Yönetmeliği (RG 33443 sayfaları) madde madde karşılaştırması.
  // Her satır iki resmî metinden ayrı ayrı okundu; üçüncü taraf karşılaştırmaları kullanılmadı (kullanıcı). Doğrulanamayan farklar yazılmadı.
  {
    kategori: "mevzuat",
    yol: "bina-yangin-yonetmeligi-ile-bykhy-karsilastirmasi",
    baslik: "Bina Yangın Yönetmeliği ile BYKHY Arasında Neler Değişti? Madde Madde Karşılaştırma",
    ozet: "2007 tarihli Binaların Yangından Korunması Hakkında Yönetmelik ile 2026 tarihli Bina Yangın Yönetmeliği'nin resmî metinlerinden hazırlanan, eski ve yeni madde numaralı değişiklik tabloları.",
    ozetle: "Bina Yangın Yönetmeliği, BYKHY'nin kısım yapısını büyük ölçüde korur; ancak birçok eşiği düşürür ve önceki metinde bulunmayan konuları düzenler. Sprinkler, otomatik algılama, basınçlandırma ve acil durum asansörü eşikleri düşer; kaçış kapısı 90 × 210 cm'ye, koridor 120 cm'ye, kaçış merdiveni 100 cm'ye çıkar, rampa eğimi %8'e iner. Güneş enerjisi sistemleri, elektrikli araç şarjı ve engelliler için tahliye bekleme noktası ilk kez düzenlenir. Denetim, yapı sahibinin yaptırdığı periyodik kontrol ve yangın güvenlik raporu modeline geçer. BYKHY'ye uygun mevcut yapılardan yalnız üç konuda ilave tedbir istenir.",
    yayin: "2026-11-27",
    bloklar: [
      { tip: "giris", metin: "27 Kasım 2026'da yayımlanan Bina Yangın Yönetmeliği (BYY), 1 Ocak 2028'de yürürlüğe girdiğinde 2007 tarihli Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) yerini alacaktır. Bu yazıda iki yönetmelik, BYKHY'nin mevzuat.gov.tr'deki değişiklikleri işlenmiş güncel metni ile BYY'nin Resmî Gazete metni esas alınarak konu konu karşılaştırılır." },
      { tip: "p", metin: "Tablolarda her hükmün yanında eski ve yeni madde numarası verilir. Yalnız iki metinde de doğrulanan farklar yazılmıştır; kesin karşılığı bulunamayan hükümler tabloya alınmamıştır. Uygulamada Resmî Gazete'deki asıl metin esas alınmalıdır." },
      { tip: "h2", id: "genel-yapi", metin: "İki yönetmeliğin genel yapısı nasıl farklılaşır?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Yayım", "RG 19/12/2007, Sayı 26735 (BKK 2007/12937)", "RG 27/11/2026, Sayı 33443 (Karar 12041)"],
          ["Yürürlük", "Yayımı tarihinde (Md. 170)", "1/1/2028 (Md. 147)"],
          ["Madde sayısı", "171 madde, 167/A–C ve geçici maddeler", "148 madde ve 5 geçici madde"],
          ["Dayanak", "7126 sayılı Kanun ek 9 ile 1 sayılı CBK'nin 97, 107 ve 508. maddeleri (Md. 3)", "Yalnız 7126 sayılı Kanun ek 9 (Md. 3)"],
          ["Mevcut yapılar", "Onuncu Kısım, ayrıntılı özel hükümler (Md. 138–167)", "Tek madde (Md. 141) ve geçici madde"],
          ["Tarihi yapılar", "Ayrı kısım (Md. 167/A–C)", "Mevcut yapılarla aynı kısımda tek madde (Md. 142)"],
          ["Özel düzenlemeye bırakılan yapılar", "TSK yapıları (MSB) ve nükleer tesisler (Md. 2/3)", "Bunlara ek olarak enerji tesisleri (ETKB), geçici barınma merkezleri (İçişleri) ve ceza infaz kurumları (Adalet) (Md. 2/3)"]
        ]
      },
      { tip: "p", metin: "Madde numaraları 67. maddeye kadar iki yönetmelikte büyük ölçüde aynıdır. Güneş enerjisi sistemleri için yeni 68. madde eklendiğinden sonraki maddeler bir ila üç sıra kayar: örneğin eski 96. madde (yağmurlama) yeni 98. madde, eski 112. madde (doğalgaz) yeni 114. madde, eski 138. madde (mevcut yapılar) yeni 141. maddedir. Eski madde numarasına atıf yapan şartname, prosedür ve eğitim dokümanlarının güncellenmesi gerekir." },
      { tip: "h2", id: "proje-sorumluluk", metin: "Proje, sorumluluk ve kullanım sınıflarında ne değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Ayrı yangın tahliye projesi", "Kat alanı 2.000 m²'den fazla katlar (Md. 6/4)", "Herhangi bir katı 1.000 m²'den fazla veya yapı yüksekliği 21,50 m'den fazla yapılar (Md. 5/9)"],
          ["Proje onayı", "Ruhsat vermeye yetkili mercilerce onaylanır (Md. 6/4)", "İtfaiyenin veya itfaiyenin gerekli gördüğü durumda YGU'nun uygunluk görüşünden sonra idarece onaylanır (Md. 5/10)"],
          ["Sigorta şirketleri", "Yönetmeliğe uyulup uyulmadığını kontrol etmekle yükümlüdür (Md. 6/6)", "Denetim, belgelendirme ve teşvik kurumlarıyla birlikte güncel yangın güvenlik raporu ister (Md. 6/3)"],
          ["Sorumlular", "İdareler, yatırımcılar, yapı sahipleri, mimar ve mühendisler, müteahhit, işletmeci (Md. 6/1–2)", "Ayrıca şantiye şefi, denetçi ve fenni mesul, kat malikleri kurulu, periyodik muayeneyi standarda aykırı yapan kişi, ihmali olan itfaiye veya YGU (Md. 6/1)"],
          ["Projelerin bina girişinde bulundurulması", "10.000 m²'den büyük imalathane, depo, otel, sağlık, toplanma ve eğitim binalarında tahliye projesi (Md. 7/4)", "Tüm endüstriyel yapılar ile projeleri ayrı hazırlanan yapılarda tahliye, algılama ve söndürme projeleri (Md. 7/4)"],
          ["İhbar numarası", "İtfaiyenin güncel telefon numarası yazılır (Md. 7/2)", "112 Acil Çağrı Merkezi aranır ve 112 yazılır (Md. 7/1–2)"],
          ["Geçici yapılar", "Düzenleme yok", "Alanı 500 m² ve üstü prefabrik veya konteyner geçici yapılara yönetmelik uygulanır (Md. 5/3)"],
          ["Eğitim yapısı", "6 veya daha fazla kişinin günde 4 saat ya da haftada 12 saatten fazla kullandığı yapı (Md. 11/1-a)", "6 veya daha fazla kişinin eğitim amacıyla kullandığı yapı; saat ölçütü yok (Md. 11/1-a)"],
          ["Sağlık yapıları", "Tek sınıf; muayenehaneler büro sınıfında (Md. 11, 12)", "Yataklı sağlık yapıları ve ayakta tedavi merkezleri olarak ikiye ayrılır; muayenehaneler ayakta tedavi sınıfında (Md. 11/1-b)"],
          ["Ticaret içindeki küçük bölüm", "\"Küçük\" ticaret bölümleri ana binanın sınıfına tabidir (Md. 13/2)", "Net alanı 50 m²'den küçük ticaret bölümleri (Md. 13/2)"]
        ]
      },
      { tip: "p", metin: "Tanımlar maddesinden bina yüksekliği, yapı yüksekliği, yüksek bina, bodrum katı, apartman, konut ve yapı sahibi gibi tanımlar çıkarılmıştır; tanımlanmayan kavramlarda 3194 sayılı İmar Kanunu ve ikincil mevzuatı esas alınır (Md. 4/2). Yangın güvenlik uzmanı, yangın güvenlik raporu, periyodik muayene, tahliye bekleme noktası, elektrikli araç şarj sistemi ve umumi bina tanımları yenidir." },
      { tip: "h2", id: "bina-insasi", metin: "Cephe, kompartıman ve bina inşasında ne değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Dış cephe yanıcılık eşiği", "Bina yüksekliği 28,50 m'den fazla binalarda zor yanıcı (Md. 27/1)", "Bina yüksekliği 21,50 m'den fazla binalarda en az zor yanıcı; açığa çıkan bodrum cephesi bina yüksekliğine eklenir (Md. 27/1)"],
          ["Mantolamada 1,5 m yanmaz kaplama ve pencere bariyerleri", "28,50 m'den alçak binalar (Md. 27/2-b)", "21,50 m'den alçak binalar (Md. 27/2-b)"],
          ["Katlar arası 100 cm dolu yüzeyin alternatifi", "Cephe içine en çok 2 m aralıkla yağmurlama başlıkları (Md. 27/1)", "Dolu yüzey döşeme yangın dayanımında olur; sağlanamazsa binanın tamamında otomatik yağmurlama (Md. 27/1)"],
          ["Yangın duvarındaki kapı ve pencereler", "Yangın duvarı dayanımının yarı süresi kadar (Md. 25/2)", "Yangın duvarının dayanımı kadar; kapılar yangın kapısı özelliğinde (Md. 25/2)"],
          ["Tesisat şaftları", "Yalnız yüksek binalarda duvar 120 dk, kapak 90 dk (Md. 25/3)", "Müstakil konutlar dışında tüm binalarda yüksekliğe göre: 12,50 m'ye kadar REI 30 / EI 30, 21,50 m'ye kadar REI 60 / EI 60, üstünde REI 120 / EI 90 (Md. 24/8, EK-3 B)"],
          ["Atrium", "Atrium alanı hiçbir noktada 90 m²'den küçük olamaz; küçükse duman perdesi ve perde yanında sprinkler (Md. 24/5)", "Yatayda her boyutu en az 6 m; binanın tamamında sprinkler; her katta 60 dk dayanımlı duman perdesi, otomatik algılama ve duman kontrolü (Md. 24/4)"],
          ["Katlar arası düşey boşluklar", "Düzenleme yok", "Atrium dışındaki merdiven, asansör, yürüyen merdiven boşlukları ve şaftlar en az 60 dk kompartıman duvarı veya yangın perdesiyle kapatılır (Md. 24/5)"],
          ["İtfaiye iç ulaşım yolu serbest yüksekliği", "En az 4 m (Md. 22/3)", "En az 4,5 m (Md. 22/4)"],
          ["Çıkmaz iç ulaşım yolu", "Çıkmaz sokakta en az 8 m (Md. 22/3)", "20 m'ye kadar manevra alanısız çıkmaz yolda en az 6 m; daha uzunsa dairesel, Y veya T biçimli manevra alanı (Md. 22/3)"],
          ["İtfaiye aracının cepheye uzaklığı", "En çok 45 m (Md. 22/2)", "45 m; sprinklerli binalarda iki katına kadar; sağlanamazsa idare hidrant yapar (Md. 22/2)"],
          ["Yalıtımsız çelik yapı muafiyeti", "5.000 m²'den küçük tek katlı yapılar (Md. 23/4)", "Ayrıca 1.000 m²'den küçük iki katlı ve 5.000 m²'den küçük, sprinklerli, en fazla üç katlı yapılar (Md. 23/4)"],
          ["Yangın kesici ve asansör kat kapısı", "Yangın kesici EI 30; asansör kapısında E 60 için 51,50 m (Ek-3/B)", "Yangın kesici EI 60; asansör kapısında E 60 için 21,50 m, 12,50–21,50 m arasında E 30 (EK-3 B)"],
          ["Yüksek binada pis su boruları", "70 mm'den büyük borular en az zor alevlenici (Md. 29/4)", "Her çaptaki pis su, yağmur suyu ve gri su boruları; değilse kat geçişinde yangın durdurucu (Md. 29/3)"],
          ["Orman alanında parsel sınırı", "Orman sınırı boyunca beton iç ulaşım yolu (Md. 22/5)", "Buna ek olarak en az 120 dk dayanımlı, en az 2 m yüksek bariyer (Md. 22/6)"]
        ]
      },
      { tip: "h2", id: "kacis-yollari", metin: "Kaçış yollarında hangi ölçüler değişir?" },
      { tip: "p", metin: "Kaçış yollarında madde numaraları iki yönetmelikte aynıdır (Md. 30–52). Değişikliklerin büyük bölümü ölçülerin artması ve rampa eğiminin azalması yönündedir." },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Kaçış yolu kapısı (temiz genişlik × yükseklik)", "80 × 200 cm (Md. 47/1)", "90 × 210 cm (Md. 47/1)"],
          ["Tek kanatlı çıkış kapısı", "80–120 cm (Md. 33/5-b)", "90–120 cm (Md. 33/7-b)"],
          ["Koridor genişliği", "En az 110 cm; hastanede 2 m (Md. 33/1, 49/2)", "En az 120 cm; derslik koridoru 150 cm, yataklı sağlıkta hasta koridoru 200 cm (Md. 33/3)"],
          ["Kaçış merdiveni genişliği", "En az 80 cm; yüksek binalarda 120 cm (Md. 33/1–2)", "En az 100 cm; yüksek yapılarda 120 cm; konut bağımsız bölümü içinde 90 cm (Md. 33/4)"],
          ["Kişi sayısına göre kademeli genişlik", "50–500 kişi 100 cm, 501–2.000 kişi 150 cm, 2.001+ kişi 200 cm (Md. 33/1)", "Kaldırılmıştır"],
          ["Kaçış koridoru yüksekliği", "210 cm (Md. 33/3)", "220 cm (Md. 33/5)"],
          ["Kaçış rampası eğimi", "En çok %10; kavisli rampada 1/12 (Md. 44/1-a)", "En çok %8; kavisli rampada 1/16 (Md. 44/1-a)"],
          ["Yangın güvenlik holü zorunluluğu", "Acil durum asansörlü ve yapı yüksekliği 51,50 m'den fazla binalar (Md. 34/7)", "Merdiven evi yüksekliği 30,50 m'den fazla kaçış merdivenleri (Md. 34/3)"],
          ["Panik kollu kapı", "Zemin çıkışları ile kattaki kişi sayısı 100'ü geçen kat kapıları (Md. 47/5)", "Son çıkış, kaçış merdiveni, korunumlu hol/koridor ve yangın güvenlik holü kapılarının tamamı (Md. 47/5)"],
          ["Kaçış merdiveni kapısı dayanımı", "4 kattan az: 60 dk; bodrum ve 4 kattan fazla: 90 dk (Md. 47/3)", "4 kat veya 15,50 m'ye kadar 60 dk; bodrum, 4 kattan fazla veya 15,50 m'den yüksek: 90 dk (Md. 47/3)"],
          ["Çıkış kapısı olamayacak kapılar", "Dönel kapılar ve turnikeler (Md. 47/1)", "Döner kapılar ve kayar kapılar (Md. 47/1)"],
          ["Otelde tek merdiven", "20'den az yatak ve 15,50 m'den alçak (Md. 50/1-a)", "12'den az yatılan oda ve 12,50 m'den alçak (Md. 50/1)"],
          ["Zeminde tek çıkışa izin", "Zemin kattaki dükkânlar; 50 kişiden az ve 25 m'den kısa (Md. 32/8)", "Zemin ve bir alt/üst kattaki ticaret bölümleri, büro binaları ve ayakta tedavi merkezleri; aynı sınırlar (Md. 32/4)"]
        ]
      },
      { tip: "p", metin: "Engelli, yaşlı ve hareket kısıtlılığı olan kişiler için tahliye bekleme noktası ilk kez düzenlenir: en az 90 × 140 cm olur, yangın güvenlik holü, kaçış merdiveni veya korunumlu koridorda kaçış genişliğini daraltmadan konumlandırılır (Md. 35/2–3); bulunduğu holün alanı 2 m² artırılır (Md. 34/4). Noktada zeminde tekerlekli sandalye sembolü, 120–160 cm yükseklikte Braille işaret ve 80–120 cm yükseklikte acil durum butonu veya sesli iletişim cihazı bulunur (Md. 74/9, 76/9). Ayrıca kaçış merdivenlerinde en çok dört katta bir geri giriş kapısı (Md. 47/4) ve yataklı sağlık, okul öncesi ve ilköğretim yapılarında dairesel merdiven yasağı (Md. 43/6) getirilir. BYKHY'deki 110 N kapı açma kuvveti sınırı (Md. 47/6) ve kuş uçuşu kaçış uzaklığı kuralı (Md. 32/5) yeni metinde yer almaz." },
      { tip: "h2", id: "bolumler-tesisler", metin: "Bina bölümleri ve tesislerde neler değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Acil durum asansörü", "Yapı yüksekliği 51,50 m'den fazla yapılar (Md. 63/2)", "Konutlarda 51,50 m, diğer yapılarda 30,50 m'den fazla; yataklı sağlık yapılarında her yatay tahliye alanında (Md. 63/2)"],
          ["Kapalı otopark duman tahliyesi", "2.000 m² üstü; saatte en az 10 hava değişimi (Md. 60/2)", "1.000 m² üstü; taban alanının her m²'si için 300 L/dak (Md. 60/8)"],
          ["Mutfak davlumbazında otomatik söndürme", "100'den fazla kişiye hizmet veren mutfaklar (Md. 57/1)", "50'den fazla kişiye hizmet veren mutfaklar; sistem sertifikalı olur (Md. 57/1)"],
          ["Kazan dairesinde iki çıkış", "100 m² veya 350 kW üzeri (Md. 54/5)", "Net alanı 100 m² üzeri; kW ölçütü yok (Md. 54/5)"],
          ["Bina içindeki trafo", "Yağlı trafoda otomatik algılama ve söndürme (Md. 65/2)", "Bina içindeki her trafoda otomatik algılama ve söndürme; kapılar en az 90 dk (Md. 65/1–2)"],
          ["Asansörün yangında son çıkış katına dönüşü", "Yüksek binalar ve topluma açık yapılar (Md. 62/5)", "Otomatik algılama sistemi bulunan yapılar (Md. 62/8)"],
          ["Baca temizliği", "Yılda en az 2 kez (Md. 58/5)", "Yılda en az 2 kez; temizlik raporlanır ve rapor saklanır (Md. 58/5, 58/11)"],
          ["Yıldırımdan korunma", "İlgili mevzuata uygunluk (Md. 64)", "TS EN 62305'e göre risk analizi yapılır, elektrik projesiyle idareye sunulur (Md. 64)"]
        ]
      },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "Elektrikli araç şarjı (yeni, Md. 60/3–7)", metin: "Kapalı otoparkta dışarıya açılan katta kat kapasitesinin %20'sine, diğer katlarda %10'una kadar şarj ünitesi kurulabilir; fazlası için yönetim kararı ve itfaiyeye yazılı başvuru gerekir. Acil elektrik kesme butonu bulunur. Asansörle araç alınan otoparklarda şarj ve müstakil konutlar dışında ev tipi prizden şarj yasaktır." },
          { baslik: "Yapıya entegre güneş enerjisi sistemleri (yeni, Md. 68)", metin: "Çatıda panel dizisinin bir kenarı en fazla 45 m, diziler arası en az 240 cm, çatı kenarı ve bacalara mesafe en az 120 cm (yüksek, endüstriyel ve depolama yapılarında 180 cm) olur. Acil durum devre kesicisi, uyarı levhaları ve yerleşim planı zorunludur. Cephedeki panellerde en az zor alevlenici malzeme kullanılır; panel cephe elemanıysa binanın tamamında sprinkler ve otomatik algılama aranır." }
        ]
      },
      { tip: "h2", id: "algilama", metin: "Algılama, uyarı ve acil aydınlatmada ne değişir?" },
      { tip: "p", metin: "Otomatik algılama zorunluluğu BYKHY'de Ek-7, yeni yönetmelikte EK-8 tablosuyla belirlenir; yükseklik ve alan ölçütlerinden birinin aşılması yeterlidir. BYKHY'deki kurumsal, ticaret, endüstriyel ve toplanma satırları Danıştay kararıyla iptal edilmiş olduğundan bu sınıflar için yeni tabloda yeniden eşik belirlenir." },
      {
        tip: "tablo",
        basliklar: ["Kullanım", "BYKHY Ek-7", "BYY EK-8"],
        satirlar: [
          ["Konutlar", "Yapı yüksekliği > 51,50 m", "Yapı yüksekliği > 30,50 m"],
          ["Konaklama", "> 6,50 m veya > 1.000 m²", "> 6,50 m veya > 500 m²"],
          ["Büro", "> 30,50 m veya > 5.000 m²", "> 15,50 m veya > 1.000 m²"],
          ["Depolar", "> 6,50 m veya > 5.000 m²", "> 6,50 m veya > 2.000 m²"],
          ["Eğitim ve yataklı sağlık", "İptal edilmiş satır", "> 6,50 m veya > 1.000 m²"],
          ["Ayakta tedavi", "İptal edilmiş satır", "> 15,50 m veya > 1.000 m²"],
          ["Ticaret", "İptal edilmiş satır", "> 6,50 m veya > 1.000 m²"],
          ["Endüstriyel", "İptal edilmiş satır", "> 15,50 m veya > 2.000 m²"],
          ["Toplanma", "İptal edilmiş satır", "> 6,50 m veya > 2.000 m²"],
          ["Kapalı ve katlı açık otopark", "Satır yok", "> 6,50 m veya > 300 m²"]
        ]
      },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Yangın uyarı butonu", "Konutlar hariç kat alanı 400 m²'den fazla 2–4 katlı binalar, konutlar hariç 4 kattan fazla binalar ve tüm yüksek binalar (Md. 75/2)", "Herhangi bir katı 400 m²'den fazla veya yapı yüksekliği 12,50 m'den fazla binaların tamamı; konut istisnası yok (Md. 76/2)"],
          ["Sesli anons sistemi (konaklama)", "Yatak sayısı 200'den fazla (Md. 81/7-a)", "Yatılan oda sayısı 100'den fazla (Md. 82/7-a)"],
          ["İhbar santrali", "Düzenleme yok", "Algılama zorunlu yapılarda TS EN 50136 ve TS EN 50518'e uygun otomatik haberleşme yapabilen santral; 112 bağlantısı (Md. 76/3, Geçici 5)"],
          ["Acil aydınlatma ve yönlendirme değerleri", "Sayısal değerler maddede (1 lux, 2 cd/m² vb.) (Md. 72/4, 73/7)", "TS EN 1838 ve ilgili standartlara atıf (Md. 73/4, 74/7)"],
          ["Yangına dayanıklı kablo kapsamı", "Uyarı, anons, itfaiye haberleşme ve panel besleme kabloları (Md. 83/1)", "Bunlara ek olarak söndürme sistemleri ile duman kontrol ve basınçlandırma besleme kabloları; en az 60 dk (Md. 84/1)"],
          ["Kat numarası tabelası", "Düzenleme yok", "Kaçış merdiveninde her sahanlıkta en az 30 × 30 cm tabela (Md. 74/8)"]
        ]
      },
      { tip: "h2", id: "sondurme", metin: "Duman kontrolü ve söndürme sistemlerinde ne değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Sprinkler: otopark", "600 m²'den büyük kapalı otopark ve 10'dan fazla aracın asansörle alındığı otopark (Md. 96/2-c)", "300 m²'den büyük kapalı ve katlı açık otopark (Md. 98/2-c)"],
          ["Sprinkler: konaklama", "Oda sayısı 100'ü veya yatak sayısı 200'ü geçen; 21,50 m'den yüksek yataklı tesisler (Md. 96/2-ç)", "Yatılan oda sayısı 50'yi veya yapı yüksekliği 15,50 m'yi geçen konaklama yapıları (Md. 98/2-ç)"],
          ["Sprinkler: ticaret ve toplanma", "2.000 m² üzeri katlı mağaza, alışveriş ve eğlence yerleri (Md. 96/2-d)", "1.000 m² üzeri ticaret ve toplanma amaçlı bina ve bölümler (Md. 98/2-d)"],
          ["Sprinkler: kolay alevlenici madde", "1.000 m²'den fazla (Md. 96/2-e)", "500 m²'den fazla (Md. 98/2-e)"],
          ["Sprinkler: yeni zorunluluklar", "Yok", "5.000 m²'den fazla endüstriyel yapı, 2.000 m²'den büyük depo, cephesinde güneş enerjisi sistemi olan yapı, 9,50 m'den yüksek yataklı sağlık yapısı (Md. 98/2-f–h)"],
          ["Kaçış merdiveni basınçlandırma", "Konut dışında merdiven kovası 30,50 m, konutta yapı yüksekliği 51,50 m üstü (Md. 89/1, 89/3)", "Konut dışında merdiven evi 21,50 m, konutta 30,50 m üstü (Md. 90/1)"],
          ["Basınçlandırma tasarım değerleri", "50 Pa, 15 Pa, 110 N, 1 m/s maddede (Md. 89/5–11)", "TS 12101'e atıf (Md. 90/4)"],
          ["Yangın dolabı", "Yüksek binalar; 1.000 m² üzeri belirli kullanımlar; 600 m² üzeri kapalı otopark; 350 kW üzeri kazan dairesi (Md. 94/1-b)", "Yüksek yapılar; 1.000 m² üzeri tüm konut dışı binalar; bir katı 1.000 m²'yi aşan konutlar; 300 m² üzeri otoparklar; net alanı 100 m² üzeri kazan daireleri (Md. 96/1-b)"],
          ["İtfaiye su alma ağzı", "Yüksek binalar ve kat alanı 1.000 m²'den fazla AVM, otopark vb. (Md. 94/1-a)", "Ayrıca 300 m² üzeri otoparklar ve 1.000 m² üzeri GES'li çatılar; 400 l/dak, en az 400 kPa (Md. 96/1-a)"],
          ["Hidrant aralığı", "50 / 100 / 125 / 150 m, dört risk kademesi (Md. 95/3)", "50 / 100 / 150 m, üç tehlike kademesi (Md. 97/3)"],
          ["Yalnız hidrant olan yapıda su deposu", "1.900 l/dak, 90 dakika (Md. 92/7)", "1.900 l/dak; düşük tehlikede 30, ortada 60, yüksekte 90 dakika (Md. 94/7)"],
          ["Taşınabilir söndürücü sayısı", "Düşük tehlikede her 500 m², orta ve yüksekte her 250 m² için bir adet 6 kg (Md. 99/2)", "TS ISO/TS 11602-1'e göre; m² kuralı yalnız kamp alanlarında (Md. 101/1, 101/3)"],
          ["Söndürücü servisi", "Dolum ve servis yeterlilik belgesi; yıllık kontrol, 4. yılda hidrostatik test (Md. 99/7)", "TS 11827 kapsamında TSE Hizmet Yeterlilik Belgesi; süre hükümleri maddede yok (Md. 101/7)"],
          ["Ana elektrik panoları", "Düzenleme yok", "TS EN 15004 serisine uygun söndürme sistemi (Md. 100/7)"]
        ]
      },
      { tip: "h2", id: "tehlikeli-maddeler", metin: "Tehlikeli maddeler ve istasyonlarda ne değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["LPG ikmal istasyonu mesafeleri", "Akaryakıt tablosuna atıf (Md. 110/1, Ek-13)", "Ayrı tablo: yer altı tankının yataklı sağlık ve eğitim yapılarına 40 m, toplanma ve konaklama yapılarına 25 m; dispenserin bu yapılara 15 m (Md. 112/1, EK-14)"],
          ["Akaryakıt istasyonu tankının parsel sınırına uzaklığı", "Yer altı tankı 7,5 m; havalandırma borusu ve doldurma ağzı 5 m (Ek-13)", "Yer altı tankı, havalandırma borusu ve doldurma ağzı 3 m (EK-15)"],
          ["Akaryakıt istasyonu tank kapasitesi", "Tank başına 45.000 l, istasyonda toplam 250.000 l (Md. 121/4-b)", "İlgili standarda göre belirlenir (Md. 123/4-b)"],
          ["Mevcut istasyonlarda mesafe indirimi", "Topluma açık yerler ile hastane ve okul mesafeleri %60 azaltılır (Ek-13)", "%60 indirim yalnız ilk ruhsatı 19/12/2007'den önce olan istasyonlara; 240 dk dayanımlı duvar yapılırsa %80 (EK-14, EK-15)"],
          ["Bodrumda yanıcı sıvı depolama sınırı", "Her binada geçerli (Md. 118/1)", "Yalnız otomatik söndürme sistemi bulunmayan binalarda geçerli (Md. 120/1)"],
          ["Yanıcı sıvı azami miktarları", "100 / 500 / 2.500 l (Md. 115)", "Aynı değerler; otomatik söndürme varsa %50 artırılabilir (Md. 117/5)"],
          ["Doğalgaz tesisatı", "Kaçış merdiveni için özel hüküm yok", "Kaçış merdiveni ve yangın güvenlik holünden geçirilemez, buralara gaz menfezi açılamaz (Md. 114/1-k)"],
          ["Deprem gaz kesme tertibatı", "1. ve 2. derece deprem bölgelerinde belirli kullanımlar (Md. 112/1-j)", "Deprem tasarım sınıfı 1, 1a, 2 ve 2a olan binalar (Md. 114/1-j)"],
          ["LPG tankı yakınındaki yüksek gerilim hattı", "10,5 kV üzeri için 7,5 m (Md. 111/1-a)", "10,5–72 kV için 10 m, 72–420 kV için 30 m (Md. 113/1-a)"]
        ]
      },
      { tip: "h2", id: "denetim", metin: "Denetim, tatbikat ve organizasyonda ne değişir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Denetim modeli", "Özel yapılar itfaiye ve müfettişlerce, kamu binaları kurum amiri, mülki amir ve müfettişlerce denetlenir (Md. 131)", "Yapı sahibi periyodik kontrolü itfaiyeye veya YGU'ya yaptırır ve raporlatır; rapor yoksa ilgili idareye bildirilir; ayrıntılar Bakanlıkça belirlenir (Md. 133)"],
          ["Tatbikat", "Binada yılda en az bir kez söndürme ve tahliye tatbikatı (Md. 129, tek cümle)", "Yılda en az bir kez; riskli yapılarda itfaiye veya YGU gözetiminde; başarısızsa 3 ay içinde tekrar; rapor saklanır (Md. 134)"],
          ["Acil durum ekipleri", "Sivil savunma servisleri varsa görevleri onlar yürütür (Md. 126/3)", "İşyerlerinde Acil Durumlar Hakkında Yönetmelik'e göre kurulan ekipler de görevi yürütebilir (Md. 128/3)"],
          ["Yangın güvenliği sorumlusu", "Kamu ve özel kurumlarda en büyük amir (Md. 124)", "Kamu kurumlarında en üst yöneticinin görevlendirdiği birim amiri; diğerlerinde yapı sahibi, yöneticisi veya işletmecisi (Md. 126)"],
          ["Periyodik muayene belgeleri", "Sistemler periyodik kontrol, test ve bakıma tabi tutulur (Md. 84, 100)", "Muayene belgeleri itfaiye veya YGU'nun periyodik kontrolünde sunulmak üzere saklanır (Md. 85, 91, 102)"],
          ["Aykırılık hâli", "TCK ve Kabahatler Kanunu (Md. 168)", "Bunlara ek olarak 3194 sayılı İmar Kanunu; tedbir almayan yapı sahipleri açıkça sayılır (Md. 144)"]
        ]
      },
      { tip: "h2", id: "mevcut-yapilar", metin: "Mevcut yapılar için geçiş nasıl düzenlenir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "Bina Yangın Yönetmeliği"],
        satirlar: [
          ["Esas", "2002 tarihli yönetmeliğe uygun yapılarda ilave tedbir alınmaması asıldır (Md. 138/2)", "2007 tarihli BYKHY'ye uygun yapılardan, üç konu dışında ilave tedbir istenmez (Md. 141/1)"],
          ["Özel hükümler", "Kaçış yolları, merdivenler, algılama, basınçlandırma gibi konularda mevcut binalara özel yaklaşık 30 madde (Md. 141–167)", "Kaldırılmıştır; eksiklik veya esaslı tadilatta BYKHY uygulanabilir, tehlikeli madde bulunan yapılarda yeni yönetmeliğe uyulur (Md. 141/2)"],
          ["Mevcut yapılara getirilen tedbirler", "Süreli tedbirler: 31/12/2023 (Geçici 3) ve malzeme eksiklikleri için 31/12/2025 (Geçici 4)", "30,50 m'den yüksek konutlarda algılama-uyarı sistemi ve söndürücü, elektrikli araç şarjı ve GES kuralları; yürürlükten itibaren 1 yıl içinde (Md. 141/3–5, Geçici 4)"],
          ["Ruhsat aşamasındaki yapılar", "—", "Yürürlükten önce usulüne uygun ruhsat başvurusu yapılanlar istenirse BYKHY'ye göre sonuçlandırılır; ihale süreci başlamış kamu yapıları da BYKHY'ye tabidir (Geçici 3, 4)"]
        ]
      },
      { tip: "h2", id: "ekler", metin: "Eklerde neler değişir?" },
      {
        tip: "tablo",
        basliklar: ["Ek", "Değişiklik"],
        satirlar: [
          ["EK-5 Kullanıcı yükü (eski Ek-5/A)", "Bütün satırlar net alana göre hesaplanır (eskiden çoğu brüt). Terminal bekleme 3 → 1,5 m²/kişi; otel yatak odası 20 → 15 m²/kişi; eczane 20 → 7,5 m²/kişi; konut 15 m²/kişi ve yatay tahliye alanı satırları yeni."],
          ["EK-6 Kaçış uzaklıkları (eski Ek-5/B)", "Uzaklıklar aynı; yataklı sağlıkta kaçış merdiveninde birim genişliğe düşen kişi 30 → 15. Yağmurlamalı değerler için yapının bütününde sprinkler şartı."],
          ["EK-3 Yangın dayanım süreleri", "Asansör kat kapısında E 60 eşiği 51,50 m → 21,50 m; tesisat şaftları yüksekliğe göre REI 30 / 60 / 120 kademeli; 90 ve 120 dk istenen yerlerde kapı süresi 30 dk az olabilir."],
          ["EK-4 Kompartıman alanları", "Alanlar aynı; ayakta tedavi 2.000 m² ve genel sığınak 4.000 m² satırları yeni; alan artırımı için otomatik algılama, uyarı ve yağmurlama birlikte aranır."],
          ["EK-8 Otomatik algılama (eski Ek-7)", "Eşikler düşer, iptal edilmiş satırlar yeniden düzenlenir, otopark satırı eklenir."],
          ["EK-14 LPG ikmal istasyonu", "Yeni tablo."],
          ["EK-7, EK-9, EK-10–13", "Koltuk sayısı, su deposu, LPG ve yanıcı sıvı tablolarındaki değerler aynı kalır; yalnız numaraları değişir."]
        ]
      },
      { tip: "h2", id: "degismeyenler", metin: "Hangi temel eşikler aynı kalır?" },
      {
        tip: "liste",
        numarali: false,
        maddeler: [
          "Sprinkler zorunluluğu: konut dışında 30,50 m'den, konutta 51,50 m'den yüksek yapılar (Md. 98/2-a, b).",
          "Acil durum ekipleri: 30,50 m'den yüksek konutlar, 50 kişiden fazla konut dışı yapılar, 200 kişiden fazla siteler; söndürme ve kurtarma 3'er, koruma ve ilk yardım 2'şer kişi (Md. 128).",
          "Çıkış sayısı: 50 kişiden fazla mekânda 2, 500'den fazlada 3, 1.000'den fazlada 4 çıkış (Md. 39).",
          "Yangın uyarı butonuna en fazla 60 m; buton yüksekliği 110–130 cm (Md. 76/2).",
          "Acil aydınlatma en az 60 dakika; 200 kişiden fazla kullanıcıda 120 dakika (Md. 73/3).",
          "Su deposu süresi düşük tehlikede 30, ortada 60, yüksekte 90 dakika; hidrant 1.900 l/dak ve 700 kPa (Md. 94, 97).",
          "Yılda en az bir tatbikat (Md. 134/1)."
        ]
      }
    ],
    dayanak: [
      "Binaların Yangından Korunması Hakkında Yönetmelik (RG 19/12/2007, 26735; mevzuat.gov.tr güncel metni)",
      "Bina Yangın Yönetmeliği (RG 27/11/2026, 33443)",
      "Karşılaştırılan maddeler tablolarda her satırda ayrıca belirtilmiştir"
    ],
    mevzuatNotu: "Bu yazı, Binaların Yangından Korunması Hakkında Yönetmeliğin mevzuat.gov.tr'deki güncel metni ile 27 Kasım 2026 tarihli ve 33443 sayılı Resmî Gazete'de yayımlanan Bina Yangın Yönetmeliği karşılaştırılarak hazırlanmıştır. Bina Yangın Yönetmeliği 1 Ocak 2028'de yürürlüğe girecektir; o tarihe kadar BYKHY uygulanır. Tablolar özet niteliğindedir; proje ve hukuki işlemlerde Resmî Gazete'deki asıl metin esas alınmalıdır."
  },

  {
    kategori: "mevzuat",
    yol: "ygu-yonetmeligi-amaci-kapsami-ve-dayanagi",
    baslik: "YGU Yönetmeliği Nedir? Amacı, Kapsamı ve Dayanağı",
    ozet: "Yangın güvenlik uzmanlığını düzenleyen yönetmelik taslağının amacı, kapsadığı iş ve işlemler, dayandığı kanun maddeleri ve metinde sık geçen kavramların anlamı.",
    ozetle: "YGU yönetmeliği taslağı ile binalarda yangın riskinin azaltılması ve olası bir yangında can ve mal kaybının en aza indirilmesi için yapılacak kontroller, bu kontrolleri yürütecek yangın güvenlik uzmanları ve uzmanların eğitim, sınav ve yetki belgesi süreçleri düzenlenir. Taslak; 3194 sayılı İmar Kanunu'nun 44. maddesine, 1 sayılı Cumhurbaşkanlığı Kararnamesi'nin 107. maddesine ve Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) 133. maddesine dayandırılmıştır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Türkiye'de yangın güvenliği uzun süre tasarım ve ruhsat aşamasıyla sınırlı bir konu olarak ele alınmıştır. Tedbirler projede çizilir, yapı kullanma izni sırasında kontrol edilir; sonrasında sistemlerin yıllar boyunca çalışıp çalışmadığı çoğu zaman sorgulanmaz. Yangın güvenlik uzmanlığı yönetmeliği taslağı bu boşluğu kapatmak üzere hazırlanmıştır." },
      { tip: "p", metin: "Aşağıda taslağın ilk bölümü açıklanır: yönetmeliğin neden hazırlandığı, hangi işleri kapsadığı, hangi yasal dayanağa bağlandığı ve metinde sık karşılaşılan kavramların ne anlama geldiği." },
      { tip: "h2", id: "amac", metin: "YGU yönetmeliğinin amacı nedir?" },
      { tip: "p", metin: "Taslağın birinci maddesinde amaç iki katmanlı olarak tarif edilir. İlk katmanda koruma hedefi yer alır: bina ve tesislerde yangın riskinin azaltılması ve bir yangın çıktığında can ve mal kaybının en aza indirilmesi. İkinci katmanda ise bu korumayı sağlayacak düzen kurulur; yapılacak kontrollerin, kontrolleri yürütecek uzmanların ve uzmanlara yönelik eğitim, sınav ve yetki belgesinin usul ve esasları belirlenir." },
      { tip: "p", metin: "Buna göre yönetmelikle yalnızca binaların kontrol edilmesi istenmez; kontrolün kim tarafından, hangi yetkinlikle, hangi formlarla ve hangi takvimle yapılacağı da tek bir çerçevede toplanır." },
      { tip: "h2", id: "kapsam", metin: "Yönetmelik hangi iş ve işlemleri kapsar?" },
      { tip: "p", metin: "Kapsam maddesi kısa tutulmuştur: yapılardaki yangın güvenlik tedbirlerinin tasarımının, uygulanmasının ve sürdürülebilirliğinin mevzuata uygunluğunun sağlanmasına ilişkin iş ve işlemler. Bu üç kavram, sistemin üç aşamasına karşılık gelir." },
      {
        tip: "tablo",
        basliklar: ["Aşama", "Yönetmelikteki karşılığı"],
        satirlar: [
          ["Tasarım", "Algılama, söndürme ve tahliye projeleri ile diğer projeler için onay öncesinde verilen uygunluk görüşü"],
          ["Uygulama", "Yapı kullanma izni aşamasında, uygulamanın projeye uygunluğuna ve sistemlerin test edilmesine dair uygunluk görüşü"],
          ["Sürdürülebilirlik", "Kullanım sürecinde belirli aralıklarla yapılan periyodik kontrol ve yangın tatbikatlarının planlanması"]
        ]
      },
      { tip: "p", metin: "Kamuoyunda en çok periyodik kontrol konuşulsa da uzmana proje ve iskân aşamalarında da görev verilebilir. Bu görevlerin hepsinde uzman, mahalli itfaiye teşkilatının gerekli gördüğü durumlarda devreye girer; itfaiyenin kendi yetkisi saklı tutulur." },
      { tip: "h2", id: "dayanak", metin: "YGU yönetmeliği hangi kanuna dayanır?" },
      { tip: "p", metin: "Taslağın üçüncü maddesinde üç dayanak sayılır:" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "3194 sayılı İmar Kanunu, Madde 44", metin: "Yönetmeliklerin çıkarılmasına ilişkin genel yetki maddesidir." },
          { baslik: "1 sayılı Cumhurbaşkanlığı Kararnamesi, Madde 107/1-c", metin: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın görev ve yetkilerine ilişkin hükümdür." },
          { baslik: "BYKHY, Madde 133", metin: "Uzmanlık ve periyodik kontrol için ayrı bir düzenleme yapılmasına imkân tanıyan maddedir." }
        ]
      },
      { tip: "p", metin: "Üçüncü dayanağın tarih ve sayısı taslakta boş bırakılmıştır. Bu durum, uzmanlık yönetmeliğinin yangından korunma mevzuatında yapılacak yeni düzenlemeyle birlikte uygulanacak şekilde kurgulandığını gösterir. Yaptırımlar için İmar Kanunu'nun 42. maddesine ve Kabahatler Kanunu'na atıf yapılır; çünkü idari para cezası gibi yaptırımlar ancak kanunla öngörülebilir." },
      { tip: "h2", id: "temel-kavramlar", metin: "Yönetmelikte sık geçen kavramlar ne anlama gelir?" },
      {
        tip: "tablo",
        basliklar: ["Kavram", "Taslaktaki anlamı"],
        satirlar: [
          ["Periyodik kontrol", "Bina yangın güvenlik tedbirlerinin onaylı projelere uygun ve çalışır durumda olup olmadığının belirli aralıklarla kontrol edilmesi"],
          ["Uygunluk kontrolü", "Periyodik kontrolde tespit edilen eksiklik ve uygunsuzlukların giderilip giderilmediğinin kontrol edilmesi"],
          ["Yangın güvenlik raporu", "Periyodik kontrol sonucunda hazırlanan rapor"],
          ["Yangın güvenlik uzmanı (YGU)", "Bakanlıkça yetkilendirilen ve yönetmelikteki görevleri yapmaya yetkili kişi"],
          ["Yetki belgesi", "Uzmanlık faaliyetinde bulunabilmek için alınması gereken belge"],
          ["İlgili idare", "Yapı ruhsatı vermeye yetkili idarenin ruhsat birimi"],
          ["Mahalli itfaiye teşkilatı", "İtfaiye hizmetlerini yürüten, yerel yönetime bağlı kurum"],
          ["Komisyon", "Bakanlık personelinden oluşan; başvuru, sınav ve yaptırım işlerini yürüten kurul"]
        ]
      },
      { tip: "p", metin: "Yönetmelikte tanımlanmayan bir kavramla karşılaşıldığında öncelikle BYKHY'deki tanıma, orada da bulunmazsa ilgili diğer mevzuata bakılır. “Yapı yüksekliği” veya “kullanım sınıfı” gibi teknik terimlerin karşılığı bu nedenle BYKHY'de aranır." },
      { tip: "h2", id: "ne-degisir", metin: "Yönetmelikle uygulamada ne değişir?" },
      { tip: "p", metin: "Mevcut düzende bir binanın yangın tedbirleri en yoğun biçimde ruhsat ve iskân sırasında incelenir. Kullanım sürecinde yapılan tadilatlar, kapatılan kaçış yolları ya da bakımı aksatılan sistemler çoğunlukla bir yangından sonra fark edilir. Taslakla birlikte yangın güvenliği, tek seferlik bir onay olmaktan çıkarılır ve düzenli aralıklarla belgelenmesi gereken bir yükümlülüğe dönüştürülür." },
      { tip: "p", metin: "Sorumluluklar da bu çerçevede netleştirilir: kontrol başvurusu yöneticiye ya da yapı sahibine, kontrolün yapılması itfaiyeye veya itfaiyenin görevlendirdiği uzmana, eksikliklerin takibi ise ilgili idareye bırakılır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 1: Amaç",
      "Yönetmelik Taslağı Madde 2: Kapsam",
      "Yönetmelik Taslağı Madde 3: Dayanak",
      "Yönetmelik Taslağı Madde 4: Tanımlar ve kısaltmalar",
      "Yönetmelik Taslağı Madde 6 ve 26: Uzmanın görevleri ve uygunluk görüşü"
    ]
  },
  {
    kategori: "mevzuat",
    yol: "ygu-yonetmeligi-ne-zaman-yururluge-girecek",
    baslik: "YGU Yönetmeliği Ne Zaman Yürürlüğe Girecek? 2028 Takvimi ve Geçiş Dönemi",
    ozet: "Taslakta yürürlük tek bir tarihe bağlanmamıştır. Eğitim ve yetki belgesi hükümleri, uygunluk görüşü ve tatbikat hükümleri ile periyodik kontrol hükümleri farklı tarihlerde uygulanmaya başlanacaktır.",
    ozetle: "Taslağa göre periyodik kontrol hükümleri 1 Ocak 2028'de, uygunluk görüşü ve tatbikat hükümleri yangından korunma yönetmeliğine ilişkin yeni düzenlemenin yürürlük tarihine göre belirlenecek bir tarihte, eğitim, sınav ve yetki belgesi gibi diğer hükümler ise yayım tarihinde yürürlüğe girecektir. Mevcut binaların ilk periyodik kontrol başvuruları 2028 yılı içinde ya da kullanım izni tarihine EK-1'deki süre eklenerek bulunan daha geç tarihte yapılacaktır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığıyla ilgili en sık sorulan sorulardan biri takvimle ilgilidir: bina sahiplerinin ne zaman başvuru yapmak zorunda kalacağı ve uzman adaylarının eğitimlere ne zaman başlayabileceği. Taslakta bu soruya tek bir tarihle cevap verilmez; hükümler üç ayrı tarihte uygulanmaya başlanacaktır." },
      { tip: "h2", id: "uc-ayri-tarih", metin: "Hangi hüküm hangi tarihte yürürlüğe girecek?" },
      {
        tip: "tablo",
        basliklar: ["Hükümler", "Yürürlük tarihi", "Uygulamadaki karşılığı"],
        satirlar: [
          ["Eğitim, sınav, yetki belgesi, eğitici kuruluşlar, komisyon ve diğerleri", "Yönetmeliğin Resmî Gazete'de yayımlandığı gün", "Uzman yetiştirme süreci ilk olarak başlatılacaktır"],
          ["Uygunluk görüşü ve tatbikat", "Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) yürürlük tarihine göre belirlenecek tarih", "Proje ve iskân aşamasındaki görevler yangın yönetmeliğindeki yeni düzenlemeyle birlikte uygulanacaktır"],
          ["Periyodik kontrol", "1 Ocak 2028", "Bina sahipleri ve yöneticiler için başvuru yükümlülüğü doğacaktır"]
        ]
      },
      { tip: "p", metin: "Bu sıralamanın bir mantığı vardır. Periyodik kontrollerin başlayabilmesi için önce yeterli sayıda uzmanın eğitilmesi, sınava alınması ve yetki belgesi alması gerekir. Yayım tarihi ile 2028 arasındaki süre bu hazırlık için ayrılmış bir dönem olarak değerlendirilebilir." },
      { tip: "h2", id: "mevcut-yapilar", metin: "Mevcut binalarda ilk başvuru ne zaman yapılacak?" },
      { tip: "p", metin: "Taslağın geçici birinci maddesinde, halihazırda kullanıma ilişkin belgesi bulunan ve EK-1'deki listeye giren binalar için ayrı bir takvim öngörülür. Bu binaların ilk periyodik kontrol başvuruları 1 Ocak 2028'den itibaren bir yıl içinde yapılacaktır." },
      { tip: "p", metin: "Her mevcut binanın 2028'de başvurması gerekmez. Kullanım izni tarihine EK-1'deki kontrol süresi eklendiğinde 2028'den daha geç bir tarih bulunursa, ilk başvuru için bu tarih esas alınır." },
      {
        tip: "tablo",
        basliklar: ["Örnek bina", "Kullanım izni", "EK-1 süresi", "Hesaplanan tarih", "İlk başvuru"],
        satirlar: [
          ["1.000 m² üzeri bir iş merkezi", "2015", "4 yıl", "2019", "2028 içinde"],
          ["30 odalı bir otel", "2025", "4 yıl", "2029", "2029'a göre"],
          ["Düşük tehlikeli bir atölye", "2027", "5 yıl", "2032", "2032'ye göre"]
        ]
      },
      { tip: "p", metin: "Tablodaki yıllar yalnızca hesaplama mantığını göstermek için seçilmiştir; gerçek bir binada gün ve ay da hesaba katılır." },
      { tip: "h2", id: "2028-esnekligi", metin: "2028'de başvuran binalara hangi esneklik tanınacak?" },
      { tip: "p", metin: "Geçiş yılında çok sayıda başvurunun aynı anda gelmesi beklenmektedir. Bu nedenle 2028 yılı içinde ilk başvurusunu yapan binalar için kontrol aşamalarına ilişkin olağan iş günü süreleri uygulanmayacak; bu binaların kontrolü başvuru tarihinden itibaren bir yıl içinde tamamlanacaktır. Böylece itfaiyelere ve uzmanlara geçiş yılında daha geniş bir zaman tanınmış olacaktır." },
      { tip: "h2", id: "hazirlik", metin: "Takvime göre hangi hazırlıklar yapılabilir?" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "Uzman adayları", metin: "Eğitim ve sınav hükümleri yayım tarihinde yürürlüğe girdiği için ilk eğitim duyuruları Bakanlığın resmî internet sayfasından takip edilebilecektir." },
          { baslik: "Bina yöneticileri ve yapı sahipleri", metin: "Binanın EK-1'deki satırı ve kullanım izni tarihi şimdiden belirlenebilir; onaylı yangın projeleri ile bakım ve test belgeleri gözden geçirilebilir." },
          { baslik: "İtfaiye teşkilatları", metin: "Başvuruların karşılanması için personel planlaması yapılabilir; gerektiğinde uzmanlarla imzalanacak protokoller değerlendirilebilir." }
        ]
      },
      { tip: "p", metin: "Takvim taslak metne dayandığından nihai yönetmelikte tarihlerin değiştirilmesi mümkündür. Yayım tarihi kesinleştiğinde eğitim ve yetki belgesi sürecinin fiilen ne zaman başlatılacağı da netlik kazanacaktır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 30: Yürürlük",
      "Yönetmelik Taslağı Geçici Madde 1: Geçiş dönemi uygulamaları",
      "Yönetmelik Taslağı Madde 24/1: Periyodik kontrol aşamalarının süreleri",
      "Yönetmelik Taslağı EK-1: Periyodik kontrol süreleri"
    ]
  },
  {
    kategori: "mevzuat",
    yol: "periyodik-yangin-kontrolu-zorunlu-mu",
    baslik: "Periyodik Yangın Kontrolü Zorunlu mu? Başvuru Yapılmazsa Ne Olur?",
    ozet: "EK-1'de sayılan yapılar için periyodik kontrol zorunludur. Zorunluluğun hangi binaları kapsadığı, başvuru yapılmazsa sorumluluğun kime yüklendiği ve hangi kanunlara göre yaptırım uygulandığı.",
    ozetle: "Kullanıma ilişkin belgesi bulunan ve EK-1'de sayılan yapılar, aynı ekte belirtilen sürelerle periyodik kontrole tabidir. Başvuru, geçerli sürenin bitiminden en geç 60 gün önce yönetici ya da yapı sahibi tarafından itfaiyeye yapılır. Süresinde başvuru yapılmazsa ilgili idarece 3194 sayılı İmar Kanunu kapsamında idari yaptırım uygulanır ve geçerli rapor bulunmamasından doğan sorumluluk yöneticiye ya da yapı sahibine ait olur.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yeni düzenlemeyle ilgili en net sorulardan biri zorunluluk sorusudur. Periyodik kontrolün bir tavsiye mi yoksa yasal bir yükümlülük mü olduğu, taslağın 23. maddesinde açıkça cevaplanır." },
      { tip: "h2", id: "zorunlu-mu", metin: "Periyodik yangın kontrolü yasal bir zorunluluk mudur?" },
      { tip: "p", metin: "Evet. 3194 sayılı İmar Kanunu kapsamında kullanıma ilişkin belgeye sahip olan ve EK-1'de belirtilen yapılar, aynı ekte belirtilen sürelerle periyodik kontrole tabi tutulur. Zorunluluk binanın türüne ve büyüklüğüne bağlıdır; EK-1'de satırı bulunmayan yapılar bu yükümlülüğün dışında kalır." },
      {
        tip: "tablo",
        basliklar: ["Kullanım sınıfı", "Periyodik kontrol zorunluluğu başlar"],
        satirlar: [
          ["Konutlar", "Yapı yüksekliği 30,50 m ve üzeri"],
          ["Konaklama amaçlı binalar", "Oda sayısından bağımsız olarak (25 ve altı 5 yıl, üzeri 4 yıl)"],
          ["Kurumsal, büro, ticaret, toplanma", "İnşaat alanından bağımsız olarak (1.000 m² ve altı 5 yıl, üzeri 4 yıl)"],
          ["Endüstri ve depolama", "Tehlike sınıfına göre (düşük 5, orta 4, yüksek 3 yıl)"],
          ["Yüksek tehlikeli yerler", "Sınır olmaksızın, 3 yılda bir"]
        ]
      },
      { tip: "p", metin: "Tablodan da görüldüğü gibi konutlar dışındaki sınıflarda bir alt sınır öngörülmemiştir. Küçük bir otel, küçük bir büro ya da düşük tehlikeli bir atölye de EK-1 kapsamındadır; yalnızca kontrol süresi daha uzun tutulur." },
      { tip: "h2", id: "kim-sorumlu", metin: "Başvuru yükümlülüğü kime aittir?" },
      { tip: "p", metin: "Yapıda yönetici varsa yönetici, yoksa yapı sahipleri periyodik kontrol için mahalli itfaiye teşkilatına başvurur. Başvurunun, geçerli periyodik kontrol süresinin bitim tarihinden en geç 60 gün önce yapılması gerekir. Başvuruya EK-5/A başvuru formu, EK-5/B taahhütname ve ödeme dekontu eklenir." },
      { tip: "h2", id: "yaptirim", metin: "Başvuru yapılmazsa hangi yaptırım uygulanır?" },
      { tip: "p", metin: "Taslakta iki ayrı sonuç öngörülür. İlk olarak, yapının geçerli bir yangın güvenlik raporu bulunmamasından doğacak sorumluluk yöneticiye, yönetici yoksa yapı sahibine yüklenir. İkinci olarak, süresi içinde başvuru yapılmazsa ilgili idarece 3194 sayılı İmar Kanunu kapsamında idari yaptırım uygulanır." },
      { tip: "p", metin: "Kontrolde eksiklik çıkması ve bu eksikliklerin verilen sürede giderilmemesi hâlinde ise İmar Kanunu ya da 5326 sayılı Kabahatler Kanunu hükümleri uygulanır; aykırılık suç teşkil ederse Türk Ceza Kanunu'na göre işlem yapılır." },
      { tip: "h2", id: "kat-maliki", metin: "Apartmanda karar çıkmazsa sorumluluk kalkar mı?" },
      { tip: "p", metin: "Kalkmaz. Kat malikleri kurulundan ödenek için karar çıkmaması ya da ödemelerin tamamlanamaması nedeniyle periyodik kontrolün zamanında yapılamaması hâlinde doğacak sorumluluk yapı sahiplerine aittir. Kurul kararının alınamaması, yükümlülüğü ortadan kaldıran bir gerekçe olarak kabul edilmez." },
      { tip: "h2", id: "ne-zaman-baslar", metin: "Zorunluluk ne zaman başlayacak?" },
      { tip: "p", metin: "Periyodik kontrole ilişkin hükümler 1 Ocak 2028'de yürürlüğe girecektir. Mevcut binaların ilk başvuruları 2028 yılı içinde yapılacaktır; kullanım izni tarihine EK-1 süresi eklendiğinde daha geç bir tarih bulunursa bu tarih esas alınır. Taslak henüz Resmî Gazete'de yayımlanmadığı için bu tarihlerin nihai metinde değiştirilmesi mümkündür." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 23: Periyodik kontrol başvuruları ve sorumluluk",
      "Yönetmelik Taslağı Madde 24/6: Yaptırımlara ilişkin kanunlar",
      "Yönetmelik Taslağı EK-1: Periyodik kontrol süreleri",
      "Yönetmelik Taslağı Madde 30 ve Geçici Madde 1: Yürürlük"
    ]
  },
  {
    kategori: "mevzuat",
    yol: "ygu-yonetmeligi-kapsami-disinda-kalan-yapilar",
    baslik: "Hangi Yapılar YGU Yönetmeliğinin Kapsamı Dışında Kalır?",
    ozet: "Savunma, güvenlik ve sivil savunma amaçlı bazı yapılarda itfaiye uygunluk görüşü ve periyodik kontrol aranmaz. İstisnanın sınırları ve uygulanması için aranan yazı şartı.",
    ozetle: "Devletin güvenliği ve Türk Silahlı Kuvvetlerinin harekât ve savunması bakımından gizlilik taşıyan yapılar ile Sahil Güvenlik, Jandarma, Emniyet ve AFAD'a ait harekât, eğitim, savunma ve sivil savunma amaçlı yapılarda, sorumluluğun kuruma ait olduğuna dair yazı alınması şartıyla uygunluk görüşü ve periyodik kontrol aranmaz.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol, belirli kullanım sınıfları ve büyüklükler için zorunlu tutulur. Bununla birlikte bazı yapılar, nitelikleri gereği bu sistemin dışında bırakılır. İstisna geniş tutulmamıştır; kapsadığı yapılar ve bağlandığı koşul ikinci maddenin ikinci fıkrasında ayrıntılı olarak sayılır." },
      { tip: "h2", id: "istisna-kapsami", metin: "İstisna kapsamına hangi yapılar girer?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Gizlilik taşıyan yapılar", metin: "Devletin güvenlik ve emniyeti ile Türk Silahlı Kuvvetlerinin harekât ve savunması bakımından gizlilik arz eden yapılar veya yapının bölümleri." },
          { baslik: "Belirli kurumların özel amaçlı yapıları", metin: "Sahil Güvenlik Komutanlığı, Jandarma Genel Komutanlığı, Emniyet Genel Müdürlüğü ve Afet ve Acil Durum Yönetimi Başkanlığına ait harekât, eğitim, savunma ve sivil savunma amaçlı yapılar veya yapının bölümleri." }
        ]
      },
      { tip: "p", metin: "Mülkiyeti kime ait olursa olsun, bu nitelikte olduğu ilgili Bakanlık veya kamu kuruluşunca ilgili idareye bildirilen yapılar da istisnadan yararlanabilir. Belirleyici olan tapudaki sahiplik değil, yapının kullanım amacının bu niteliği taşıması ve bunun resmî olarak bildirilmesidir." },
      { tip: "h2", id: "kosul", metin: "İstisna hangi koşulla uygulanır?" },
      { tip: "p", metin: "İstisna kendiliğinden uygulanmaz; bir yazı şartına bağlanır. İlgili kurumdan, yapıda her türlü sorumluluğun kuruma ait olduğunu ve yönetmelik hükümlerine göre her türlü kontrol ve denetimin kurumun kendisi tarafından yapılacağını belirten bir yazı alınır. Yazı alındığında, yapı ruhsatı ve yapı kullanma izin belgesi aşamalarında itfaiye uygunluk görüşü ile periyodik kontrol aranmaz." },
      { tip: "p", metin: "Bu düzenlemeyle yangın güvenliği yükümlülüğü ortadan kaldırılmaz; yükümlülüğün yerine getirilmesi ve denetlenmesi kurumun kendisine bırakılır. Kurum, öngörülen kontrol ve denetimleri kendi bünyesinde yapmayı taahhüt etmiş sayılır." },
      { tip: "h2", id: "kapsamda-kalanlar", metin: "Kamu binalarının tamamı kapsam dışında mıdır?" },
      { tip: "p", metin: "Hayır. Sayılan kurumlara ait olsa bile harekât, eğitim, savunma veya sivil savunma amacı taşımayan bir idari bina bu fıkranın konusu dışında kalır. Bu tür yapılar EK-1'deki kullanım sınıfına ve sınır değerlere girerse periyodik kontrol yükümlülüğü devam eder." },
      {
        tip: "tablo",
        basliklar: ["Örnek", "Değerlendirme"],
        satirlar: [
          ["Jandarma eğitim merkezi", "Eğitim amaçlı olduğu için yazı alınması şartıyla istisna kapsamındadır"],
          ["AFAD'a ait sivil savunma deposu", "Sivil savunma amaçlı olduğu için yazı alınması şartıyla istisna kapsamındadır"],
          ["Bir kamu kurumunun genel müdürlük binası", "Sayılan amaçları taşımazsa istisna kapsamında değildir; büro binası olarak EK-1'e göre değerlendirilir"],
          ["Bir bakanlığa ait hizmet binası", "Gizlilik arz eden bir bölüm içermezse genel hükümlere tabidir"]
        ]
      },
      { tip: "p", metin: "Tablodaki örnekler istisnanın mantığını göstermek için hazırlanmıştır. Somut bir yapının istisnaya girip girmediği, ilgili kurumun bildirimine ve alınacak yazıya göre belirlenir." },
      { tip: "h2", id: "ek1-disi", metin: "İstisna ile EK-1 dışında kalmak arasında ne fark vardır?" },
      { tip: "p", metin: "Bir binanın periyodik kontrole tabi olmamasının iki ayrı nedeni olabilir. Birincisi burada açıklanan özel istisnadır. İkincisi ise binanın EK-1'deki kullanım sınıfı ve sınır değerlerine hiç girmemesidir; yapı yüksekliği 30,50 metrenin altında kalan bir konut binası buna örnek gösterilebilir. İkinci durumda bina istisna sayılmaz, yalnızca periyodik kontrol listesinde yer almaz. Ayrım, binanın ileride kullanım değişikliği veya esaslı tadilat geçirmesi hâlinde önem kazanır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 2/2: Kapsam istisnası",
      "Yönetmelik Taslağı Madde 23/1: Periyodik kontrole tabi yapılar",
      "Yönetmelik Taslağı EK-1: Periyodik kontrol süreleri"
    ]
  },
  {
    kategori: "mevzuat",
    yol: "ygu-sisteminde-kim-ne-yapar",
    baslik: "YGU Sisteminde Kim Ne Yapar? Bakanlık, Komisyon, İtfaiye ve İlgili İdare",
    ozet: "Taslakta görevler birden fazla kuruma dağıtılmıştır. Yetki belgesinin kim tarafından verildiği, kontrolün kim tarafından yapıldığı, raporun nereye gönderildiği ve yaptırımın kimce uygulandığı.",
    ozetle: "Yetki belgesi, sınav ve eğitici kuruluşlar Bakanlık tarafından yönetilir; başvuru, sınav ve yaptırım dosyaları Bakanlık bünyesindeki komisyonda incelenir. Periyodik kontrol, uygunluk görüşü ve uzman görevlendirmesi mahalli itfaiye teşkilatına, eksikliklere süre verilmesi ve idari yaptırım ise ilgili idareye bırakılır. Başvuru yükümlülüğü yöneticiye, yönetici yoksa yapı sahibine aittir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı sistemi tek bir kurum tarafından yürütülmez. Taslakta Bakanlık, Bakanlık bünyesindeki komisyon, mahalli itfaiye teşkilatı, ilgili idare, yangın güvenlik uzmanı ve bina tarafı ayrı ayrı görevlendirilir. Rollerin karıştırılması, özellikle bina yöneticileri açısından yanlış kuruma başvurulmasına ya da sorumluluğun bilinmemesine yol açabilir." },
      { tip: "h2", id: "bakanlik", metin: "Bakanlığın görevleri nelerdir?" },
      { tip: "p", metin: "Sistemin çerçevesi Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından çizilir. Teorik eğitimler Bakanlıkça düzenlenebilir ya da bu iş için eğitici kuruluşlar yetkilendirilir. Sınav Bakanlıkça yapılır, yetki belgesi elektronik ortamda doğrulanabilecek biçimde düzenlenir ve yetkili uzmanların listesi resmî internet sayfasında yayımlanır. Yetki belgesinin askıya alınması ve iptali de Bakanlıkça yapılır. Eğitim ve sınav bedelleri ile periyodik kontrol hizmetleri için taban ve tavan bedel aralığının ilanı da Bakanlığın görevleri arasında sayılır." },
      { tip: "h2", id: "komisyon", metin: "Komisyon hangi işleri yürütür?" },
      { tip: "p", metin: "Bakanlık merkezinde, biri başkan olmak üzere en az beş Bakanlık personelinden oluşan bir komisyon kurulur; aynı sayıda yedek üye belirlenir. Komisyona verilen işler şunlardır:" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "Başvurular", metin: "Uzmanlık başvuruları incelenir, itiraz ve şikâyetler değerlendirilir." },
          { baslik: "Sınav", metin: "Soru bankası hazırlanır, sınava yapılan itirazlar incelenir." },
          { baslik: "Eğitim", metin: "Eğitici kuruluşların ve eğiticilerin yeterlilikleri değerlendirilir." },
          { baslik: "Yaptırımlar", metin: "İtfaiyenin raporuna dayanan uyarı, askıya alma ve iptal işlemleri takip edilir." }
        ]
      },
      { tip: "p", metin: "Önemli bir sınır da çizilir: uzmanın hazırladığı raporların teknik içeriği hakkında Bakanlık ve komisyon tarafından değerlendirme yapılamaz. Raporun teknik doğruluğunun denetimi itfaiyeye bırakılır." },
      { tip: "h2", id: "itfaiye", metin: "İtfaiyenin rolü nedir?" },
      { tip: "p", metin: "Sahadaki merkez itfaiyedir. Periyodik kontrol başvuruları itfaiyeye yapılır; uygunluk görüşü verme ve periyodik kontrol yapma yetkisi bütün yapılar için itfaiyede bulunur. İtfaiye bu işleri kendi personeliyle yürütebilir ya da personel sayısı ve iş yoğunluğu dikkate alınarak uzmanlarla protokol imzalanır ve onlardan hizmet alınır." },
      { tip: "p", metin: "İtfaiye aynı zamanda denetleyicidir. Görev yapan uzmanların tutum ve davranışları ile düzenledikleri raporların mevzuata uygunluğu, itfaiyece kendiliğinden ya da bir başvuru üzerine denetlenir. Uygun olmayan bir durum tespit edilirse dayanak belgeleriyle birlikte Bakanlığa bildirilir." },
      { tip: "h2", id: "ilgili-idare", metin: "İlgili idarenin görevleri nelerdir?" },
      { tip: "p", metin: "Yapı ruhsatı vermeye yetkili idarenin ruhsat birimi, çoğu durumda belediyenin imar birimi, sistemin yaptırım ayağını oluşturur. Hazırlık aşamasında yapının onaylı projeleri ve belgeleri ilgili idareden temin edilir. Raporda eksiklik çıkarsa eksikliklerin giderilmesi için süre ilgili idarece verilir ve başvuru sahibine tebliğ edilir. Süresinde başvuru yapılmaması ya da eksikliklerin giderilmemesi hâlinde İmar Kanunu veya Kabahatler Kanunu kapsamındaki işlemler de ilgili idarece yapılır." },
      { tip: "h2", id: "ygu", metin: "Yangın güvenlik uzmanının yeri neresidir?" },
      { tip: "p", metin: "Uzman, itfaiyenin görevlendirdiği işlerde kontrolü yapar, formları doldurur ve raporu hazırlar. Uzman bina sahibi tarafından doğrudan seçilmez; görev, protokol çerçevesinde itfaiyece verilir. Görev alınan yapıda mevzuata uygun hareket edilmesinden uzman şahsen sorumlu tutulur." },
      { tip: "h2", id: "bina-tarafi", metin: "Bina tarafının yükümlülükleri nelerdir?" },
      { tip: "p", metin: "Yükümlülük zinciri bina tarafında başlar. Yönetici varsa yönetici, yoksa yapı sahibi; süresinde başvurmak, bedeli yatırmak, kontrol sırasında hazır bulunmak, bakım belgelerini sunmak ve eksiklikleri verilen süre içinde gidermekle yükümlü tutulur." },
      {
        tip: "tablo",
        basliklar: ["Konu", "Sorumlu"],
        satirlar: [
          ["Yetki belgesi, sınav, eğitici kuruluş", "Bakanlık"],
          ["Başvuru, itiraz ve yaptırım dosyaları", "Komisyon"],
          ["Periyodik kontrol başvurusu", "Yönetici, yoksa yapı sahibi"],
          ["Kontrolü yapmak veya uzmana yaptırmak", "Mahalli itfaiye teşkilatı"],
          ["Kontrol ve rapor", "İtfaiye ya da görevlendirilen YGU"],
          ["Eksiklik için süre ve idari yaptırım", "İlgili idare"],
          ["Uzmanın denetimi", "Mahalli itfaiye teşkilatı"]
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 13: Yetki belgesi",
      "Yönetmelik Taslağı Madde 18 ve 19: Komisyon",
      "Yönetmelik Taslağı Madde 20 ve 21: Hizmet alımı ve görevlendirme",
      "Yönetmelik Taslağı Madde 22, 23 ve 24: Denetim ve periyodik kontrol",
      "Yönetmelik Taslağı EK-1 Not 1: İtfaiyenin bütün yapılardaki yetkisi"
    ]
  },
  {
    kategori: "mevzuat",
    yol: "ygu-yonetmeligi-ve-bykhy",
    baslik: "YGU Yönetmeliği ile BYKHY Arasındaki İlişki",
    ozet: "Uzmanlık yönetmeliği taslağı, Binaların Yangından Korunması Hakkında Yönetmeliğe (BYKHY) dayanılarak hazırlanır ve onunla birlikte uygulanır. Tanımların, kontrol ölçütlerinin ve tatbikat yükümlülüğünün hangi yönetmelikten geldiği.",
    ozetle: "YGU yönetmeliği taslağı, BYKHY'nin 133. maddesine dayanılarak hazırlanır. Teknik ölçütler ve tanımlar BYKHY'den alınır; YGU yönetmeliğinde ise bu ölçütlere uyulup uyulmadığının kimin tarafından, hangi süreyle ve hangi formlarla kontrol edileceği düzenlenir. Uygunluk görüşü ve tatbikat hükümlerinin yürürlüğü ise yangından korunma yönetmeliğine ilişkin yeni düzenlemenin yürürlük tarihine bağlanır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı konuşulurken iki yönetmeliğin adı sık sık birlikte anılır. Bu iki metin birbirinin alternatifi değildir; biri neyin yapılacağını, diğeri bunun nasıl kontrol edileceğini düzenler. Bu ayrım bilindiğinde uzmanın görev alanı da daha net anlaşılır." },
      { tip: "h2", id: "is-bolumu", metin: "İki yönetmelik arasındaki iş bölümü nasıldır?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "BYKHY", "YGU yönetmeliği"],
        satirlar: [
          ["Kaçış yolu, kompartıman, söndürme, algılama ölçütleri", "Ölçütler burada belirlenir", "Ölçütlere uyulup uyulmadığı kontrol edilir"],
          ["Kullanım sınıfı, yapı yüksekliği, tehlike sınıfı", "Tanımlar burada yapılır", "Kontrol süresi bu tanımlara göre belirlenir"],
          ["Tatbikat", "Tatbikat yükümlülüğü öngörülür (134. madde)", "Tatbikatın planlanması ve formları düzenlenir"],
          ["Uzmanlık ve periyodik kontrol", "Ayrı düzenleme yapılacağı belirtilir (133. madde)", "Uzmanlık, eğitim, sınav ve kontrol süreci düzenlenir"]
        ]
      },
      { tip: "h2", id: "dayanak", metin: "YGU yönetmeliği BYKHY'ye nasıl bağlanır?" },
      { tip: "p", metin: "Taslağın dayanak maddesinde BYKHY'nin 133. maddesi açıkça sayılır. Ayrıca kısaltmayla metnin pek çok yerinde bu yönetmeliğe atıf yapılır. Taslakta atıf yapılan yönetmeliğin tarih ve sayısı boş bırakılmıştır; bu durum, uzmanlık yönetmeliğinin yangından korunma mevzuatında yapılacak yeni düzenlemeyle birlikte uygulanmasının öngörüldüğünü gösterir." },
      { tip: "h2", id: "tanimlar", metin: "Tanımlarda hangi yönetmelik esas alınır?" },
      { tip: "p", metin: "YGU yönetmeliğinde belirtilmeyen tanımlar için öncelik BYKHY'ye verilir, sonra ilgili diğer mevzuata bakılır. Kontrol süresini belirleyen yapı yüksekliği, yapı inşaat alanı, kullanım sınıfı ve tehlike sınıfı gibi kavramlar bu nedenle BYKHY'deki tanımlarla birlikte okunur." },
      { tip: "h2", id: "kontrol-formu", metin: "Periyodik kontrol formunda BYKHY nasıl kullanılır?" },
      { tip: "p", metin: "EK-6 Periyodik Kontrol Formu'nun pek çok maddesinde BYKHY'nin ilgili maddelerine doğrudan atıf yapılır. Kaçış yolu kapıları, duman kesici kapılar ya da tahliye bekleme noktası işaretlemesi gibi maddeler, BYKHY hükümlerine göre işaretlenir. Formun ilk sayfasında yapının tabi olduğu mevzuatın yazılması da bu nedenle istenir; çünkü eski bir binanın hangi tarihli yönetmeliğe göre değerlendirileceği ruhsat tarihine bağlıdır." },
      { tip: "h2", id: "uluslararasi", metin: "Uluslararası standarda göre tasarlanan binalar nasıl değerlendirilir?" },
      { tip: "p", metin: "BYKHY'nin 5. maddesinin ikinci fıkrası gereği uluslararası standartlara göre tasarlanan binaların periyodik kontrolü ve uygunluk görüşü işlerinde YGU-1 ve YGU-2 seviyesindeki uzmanlar görevlendirilmez. Bu tür binalar için uluslararası doküman ve standart okuma modülünü içeren YGU-3 seviyesine ihtiyaç duyulur." },
      { tip: "h2", id: "egitim", metin: "Uzman eğitiminde BYKHY ne kadar yer tutar?" },
      { tip: "p", metin: "EK-2 eğitim müfredatındaki modüllerin büyük çoğunluğunda referans olarak BYKHY'nin ilgili kısımları gösterilir: yapı ve malzeme için 2. kısım, kaçış ve tahliye için 2., 3. ve 4. kısımlar, sistemler için 4. ila 7. kısımlar, yüksek tehlikeli binalar için 8. kısım ve periyodik kontrol için 9. kısım. Uzman adayının eğitimi bu açıdan büyük ölçüde BYKHY'nin uygulamalı okunması üzerine kurulur." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 3: Dayanak (BYKHY Madde 133)",
      "Yönetmelik Taslağı Madde 4/2: Tanımlarda BYKHY önceliği",
      "Yönetmelik Taslağı Madde 6/1-ç: BYKHY Madde 134/2 kapsamındaki tatbikatlar",
      "Yönetmelik Taslağı Madde 30/1-b: Uygunluk görüşü ve tatbikat hükümlerinin yürürlüğü",
      "Yönetmelik Taslağı EK-1 Not 4 ve EK-2: Uluslararası standartlar ve müfredat referansları"
    ]
  }
]
