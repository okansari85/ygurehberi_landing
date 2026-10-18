// YGU Hakkında › Mevzuat makaleleri. Kaynak: Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında
// Yönetmelik Taslağı ve ekleri. Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil, geniş
// zaman ("yapılır, edilir"; kullanıcı 18 Ekim). Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const MEVZUAT_MAKALELERI: YguMakale[] = [
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
