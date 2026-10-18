// YGU Hakkında › Periyodik Kontroller makaleleri. Kaynak: YGU Yönetmelik Taslağı (Md. 23–27, Geçici Md. 1) ve EK-1, EK-5, EK-6, EK-7.
// Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs), edilgen dil. Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

const FIRETECH = {
  baslik: "Binanın kontrol süresi 2 dakikada öğrenilebilir",
  metin: "FireTech'in ücretsiz ön değerlendirme aracında birkaç soru yanıtlanarak binanın kullanım sınıfı ve periyodik kontrol süresi görülebilir.",
  dugme: "Ücretsiz Kontrol Et",
  url: "https://firetech-ai.com/ucretsiz-kontrol/kullanim-sinifi"
}

export const PERIYODIK_MAKALELERI: YguMakale[] = [
  {
    kategori: "periyodik-kontroller",
    yol: "periyodik-yangin-kontrolu-kac-yilda-bir-yapilir",
    baslik: "Periyodik Yangın Kontrolü Kaç Yılda Bir Yapılır?",
    ozet: "Kontrol süresi; kullanım sınıfına ve yapının yüksekliği, oda sayısı, inşaat alanı ya da tehlike sınıfına göre 3, 4 veya 5 yıl olarak belirlenir. Tablo, örnekler ve sürenin başlangıç tarihi.",
    ozetle: "Taslak yönetmelikte periyodik kontrol üç kademede düzenlenmiştir: yüksek tehlikeli yerler ve tesisler 3 yılda bir, büyük yapılar ile orta tehlikeli tesisler 4 yılda bir, küçük yapılar ile düşük tehlikeli tesisler 5 yılda bir kontrol edilir. Yapı yüksekliği 30,50 metrenin altındaki konutlar listede yer almaz. Periyodik kontrol hükümleri 1 Ocak 2028'de yürürlüğe girecektir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yeni düzenlemeyle ilgili ilk sorulan soru çoğunlukla süreyle ilgilidir: bir apartmanın, otelin ya da fabrikanın kaç yılda bir kontrol ettirileceği. Bu sorunun tek bir cevabı yoktur. Taslakta yapılar kullanım amacına ve büyüklüğüne göre gruplara ayrılmış, her gruba ayrı bir süre verilmiştir." },
      { tip: "p", metin: "Aşağıda yönetmelik taslağının ekinde yer alan periyodik kontrol tablosu (EK-1) açıklanmakta, bir binanın hangi satıra girdiğinin nasıl bulunacağı ve sürenin hangi tarihten itibaren işlediği örneklerle gösterilmektedir." },
      { tip: "h2", id: "sureyi-ne-belirler", metin: "Kontrol süresini ne belirler?" },
      { tip: "p", metin: "Süre iki bilgiye göre belirlenir: binanın kullanım sınıfı ve o sınıf için tanımlanmış sınır değeri. Sınır değeri her sınıfta farklı bir ölçüye bağlanmıştır. Konutlarda yapı yüksekliğine, konaklama yapılarında oda sayısına, kurumsal, büro, ticaret ve toplanma yapılarında yapı inşaat alanına, endüstri ve depolama tesislerinde ise tehlike sınıfına bakılır." },
      { tip: "p", metin: "Genel kural basittir: yapı büyüdükçe ya da risk arttıkça kontrol aralığı kısalır. Yüksek tehlikeli yerler için hiçbir sınır aranmaz; bu yerler büyüklüklerinden bağımsız olarak 3 yılda bir kontrol edilir." },
      { tip: "h2", id: "kontrol-sureleri-tablosu", metin: "Kullanım sınıfına göre kontrol süreleri" },
      {
        tip: "tablo",
        basliklar: ["Kullanım sınıfı", "Sınır", "Kontrol süresi", "Kontrol edebilecek YGU"],
        satirlar: [
          ["Konutlar", "Yapı yüksekliği 30,50 m (dahil) – 51,50 m", "5 yıl", "YGU-1, YGU-2 veya YGU-3"],
          ["Konutlar", "Yapı yüksekliği 51,50 m ve üzeri", "4 yıl", "YGU-2 veya YGU-3"],
          ["Konaklama amaçlı binalar", "Oda sayısı 25 ve altı", "5 yıl", "YGU-1, YGU-2 veya YGU-3"],
          ["Konaklama amaçlı binalar", "Oda sayısı 25'in üzeri", "4 yıl", "YGU-2 veya YGU-3"],
          ["Kurumsal, büro, ticaret ve toplanma amaçlı binalar", "Yapı inşaat alanı 1.000 m² ve altı", "5 yıl", "YGU-1, YGU-2 veya YGU-3"],
          ["Kurumsal, büro, ticaret ve toplanma amaçlı binalar", "Yapı inşaat alanı 1.000 m² üzeri", "4 yıl", "YGU-2 veya YGU-3"],
          ["Endüstriyel ve depolama tesisleri", "Düşük tehlikeli", "5 yıl", "YGU-1, YGU-2 veya YGU-3"],
          ["Endüstriyel ve depolama tesisleri", "Orta tehlikeli", "4 yıl", "YGU-2 veya YGU-3"],
          ["Endüstriyel ve depolama tesisleri", "Yüksek tehlikeli", "3 yıl", "YGU-3 ve YGU-K birlikte"],
          ["Yüksek tehlikeli yerler", "Sınır yok", "3 yıl", "YGU-3 ve YGU-K birlikte"]
        ]
      },
      { tip: "not", etiket: "Taslaktaki bir yazım farkı", metin: "EK-1'de yüksek tehlikeli depolama tesisleri için “YGU-3 ve YGU-4” ifadesi geçer. Taslağın 5. maddesinde YGU-4 diye bir seviye tanımlanmadığından bu ifadenin nihai metinde düzeltilmesi beklenir. Diğer yüksek tehlikeli satırlarda YGU-3 ile YGU-K'nin birlikte görev yapması öngörülmüştür." },
      { tip: "h2", id: "her-apartman-kapsamda-mi", metin: "Her apartman periyodik kontrole tabi mi?" },
      { tip: "p", metin: "Hayır. Konutlar için ilk sınır 30,50 metre olarak belirlenmiştir. Bu yüksekliğin altında kalan konut binaları için tabloda bir satır bulunmaz. Periyodik kontrole yalnızca EK-1'de sayılan yapılar tabi tutulduğundan, 30,50 metrenin altındaki apartmanlar bu düzenlemeyle kontrol listesine alınmamıştır." },
      { tip: "p", metin: "Yapı yüksekliği 30,50 ile 51,50 metre arasında kalan bir konut binası 5 yılda bir, 51,50 metre ve üzerindeki bir konut binası 4 yılda bir kontrol edilir. Hesapta “bina yüksekliği” değil “yapı yüksekliği” esas alınır; iki kavramın tanımı Binaların Yangından Korunması Hakkında Yönetmelikte (BYKHY) ayrı ayrı yapılmıştır." },
      { tip: "h2", id: "fabrika-ve-depolar", metin: "Fabrika ve depolarda süre neye göre belirlenir?" },
      { tip: "p", metin: "Endüstriyel tesislerde ve depolarda binanın büyüklüğüne değil, içinde yürütülen faaliyetin ya da depolanan malzemenin tehlike düzeyine bakılır. Düşük tehlikeli bir atölye 5 yılda bir kontrol edilirken aynı büyüklükteki yüksek tehlikeli bir tesis 3 yılda bir kontrol edilir." },
      { tip: "p", metin: "Yüksek tehlikeli yapılarda kontrol tek bir uzmana bırakılmaz. YGU-3 seviyesindeki uzmanın, kimya alanından gelen YGU-K seviyesindeki uzmanla birlikte görev yapması öngörülmüştür; YGU-K'ye tehlikeli maddelerin tespiti ve sınıflandırılması görevi verilmiştir." },
      { tip: "h2", id: "karma-kullanim", metin: "Bir binada birden fazla kullanım varsa hangi süre uygulanır?" },
      { tip: "p", metin: "Karma kullanımlı binalarda kontrol süresi kısa olan sınıf esas alınır. Bir bölümü 4 yıllık, diğer bölümü 5 yıllık sınıfa giren bina 4 yılda bir kontrol edilir. Alt katı mağaza, üst katları ofis olan ya da içinde depo bölümü bulunan binalar için bu kural sıkça uygulanacaktır." },
      { tip: "h2", id: "sure-ne-zaman-baslar", metin: "Süre hangi tarihten itibaren hesaplanır?" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "İlk periyodik kontrol", metin: "Binanın kullanıma ilişkin belgesinin (yapı kullanma izin belgesi) tarihi esas alınır." },
          { baslik: "Sonraki kontroller", metin: "Bir önceki periyodik kontrol raporunun tarihi esas alınır." },
          { baslik: "Esaslı tadilattan sonra", metin: "Tadilat için uygunluk görüşü alınmışsa süre, tadilata ait yapı kullanma izin belgesinin onay tarihinden yeniden başlatılır." }
        ]
      },
      { tip: "p", metin: "Başvurunun, geçerli kontrol süresi dolmadan en geç 60 gün önce mahalli itfaiye teşkilatına yapılması gerekir. Süre kaçırılırsa geçerli bir yangın güvenlik raporu bulunmamasından doğan sorumluluk yöneticiye, yönetici yoksa yapı sahibine yüklenir ve ilgili idarece İmar Kanunu kapsamında idari yaptırım uygulanır." },
      { tip: "h2", id: "ilk-kontroller", metin: "Mevcut binalarda ilk kontrol ne zaman yapılacak?" },
      { tip: "p", metin: "Periyodik kontrole ilişkin hükümler 1 Ocak 2028'de yürürlüğe girecektir. Kullanım izni alınmış mevcut yapıların ilk başvuruları 1 Ocak 2028'den itibaren bir yıl içinde yapılacaktır. Kullanım izni tarihine EK-1'deki süre eklendiğinde 2028'den daha geç bir tarih bulunursa, ilk başvuru için bu tarih esas alınır. Örneğin 2026'da kullanım izni almış, 4 yıllık sınıfa giren bir bina için 2030 yılı hesaplanır." },
      { tip: "h2", id: "kontrol-listesi", metin: "Bir binanın süresi nasıl bulunur?" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Kullanım sınıfı belirlenir.", metin: "Yapı kullanma izin belgesinde yazan kullanım amacına bakılır." },
          { baslik: "Sınır değeri bulunur.", metin: "Konutta yapı yüksekliği, konaklamada oda sayısı, diğer binalarda yapı inşaat alanı, fabrika ve depoda tehlike sınıfı." },
          { baslik: "Karma kullanım kontrol edilir.", metin: "Birden fazla sınıf varsa kısa süreli olan alınır." },
          { baslik: "Başlangıç tarihi hesaplanır.", metin: "İlk kontrol için kullanım izni tarihi, sonrakiler için son rapor tarihi." },
          { baslik: "Başvuru tarihi takvime işlenir.", metin: "Süre bitiminden en az 60 gün öncesi." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı EK-1: Periyodik Kontrol Süreleri ve YGU Yetki Seviyeleri (tablo ve notları)",
      "Yönetmelik Taslağı Madde 5 ve 6/2: Seviyeler ve görev dağılımı",
      "Yönetmelik Taslağı Madde 23: Periyodik kontrol başvuruları",
      "Yönetmelik Taslağı Madde 24/7: Esaslı tadilat",
      "Yönetmelik Taslağı Madde 30 ve Geçici Madde 1: Yürürlük ve geçiş dönemi"
    ],
    arac: FIRETECH
  },
  {
    kategori: "periyodik-kontroller",
    yol: "periyodik-kontrol-basvurusu-nasil-yapilir",
    baslik: "Periyodik Kontrol Başvurusu Nasıl Yapılır? Nereye, Ne Zaman, Hangi Belgelerle",
    ozet: "Başvuru mahalli itfaiye teşkilatına; başvuru formu, taahhütname ve ödeme dekontuyla, geçerli sürenin bitiminden en az 60 gün önce yapılır. Taahhütnamede neyin beyan edildiği ve sık yapılan hatalar.",
    ozetle: "Periyodik kontrol başvurusu, yönetici varsa yönetici, yoksa yapı sahibi tarafından mahalli itfaiye teşkilatına yapılır. Başvuruya EK-5/A başvuru formu, EK-5/B taahhütname ve ödeme dekontu eklenir. Başvurunun, geçerli kontrol süresinin bitiminden en geç 60 gün önce yapılması gerekir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol, itfaiyenin kendiliğinden başlattığı bir işlem olarak kurgulanmamıştır. Süreç bina tarafının başvurusuyla başlar ve başvurunun zamanında yapılması da bina tarafının sorumluluğuna bırakılmıştır. Bu nedenle başvurunun nereye, kim tarafından ve hangi belgelerle yapılacağının önceden bilinmesi gerekir." },
      { tip: "h2", id: "kim-basvurur", metin: "Başvuruyu kim yapar?" },
      { tip: "p", metin: "Yapıda yönetici varsa başvuru yönetici tarafından yapılır. Yönetici yoksa başvuru yükümlülüğü yapı sahiplerine geçer. Kat mülkiyetine tabi binalarda yöneticinin, kontrol için gerekli işlemleri Kat Mülkiyeti Kanunu'na göre yürütmesi öngörülmüştür; bedelin karşılanması için kat malikleri kurulundan karar alınması da bu işlemlerin bir parçasıdır." },
      { tip: "h2", id: "nereye", metin: "Başvuru nereye yapılır?" },
      { tip: "p", metin: "Başvuru, yapının bulunduğu yerdeki mahalli itfaiye teşkilatına yapılır. Başvuru formu belediye başkanlığına hitaben düzenlenir ve itfaiye dairesi, müdürlüğü, amirliği ya da çavuşluğu üzerinden işleme alınır. Kontrolün itfaiye personeli tarafından mı yoksa itfaiyenin görevlendirdiği bir yangın güvenlik uzmanı tarafından mı yapılacağına itfaiye karar verir; başvuru sahibi uzman seçmez." },
      { tip: "h2", id: "belgeler", metin: "Başvuruda hangi belgeler istenir?" },
      {
        tip: "tablo",
        basliklar: ["Belge", "İçeriği"],
        satirlar: [
          ["EK-5/A Başvuru formu", "Yapının adresi, il/ilçe/mahalle, ada/parsel ve kullanım sınıfı; başvuru sahibinin adı veya unvanı, T.C. kimlik ya da vergi numarası ve telefonu"],
          ["Yapı kullanma izin belgesi veya yapı kayıt belgesi örneği", "Başvuru formunun ekleri arasında sayılır"],
          ["EK-5/B Taahhütname", "Yapıdaki imalat ve tadilatlara ilişkin beyan (aşağıda ayrıntılı)"],
          ["Ödeme dekontu", "Kontrol bedelinin itfaiye hesabına yatırıldığını gösteren belge"]
        ]
      },
      { tip: "h2", id: "taahhutname", metin: "Taahhütnamede neler beyan edilir?" },
      { tip: "p", metin: "Taahhütname, başvurunun en çok dikkat gerektiren belgesidir. Başvuru sahibi bu belgeyle üç konuda beyanda bulunur:" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Aykırı imalat olmadığı", metin: "Yapıda ruhsat ve eki projeler ile mevzuata aykırı bir imalat yapılmadığı beyan edilir." },
          { baslik: "Esaslı tadilatlar için izin alındığı", metin: "Yapılmış esaslı tadilatlar için ilgili idareden tadilat ruhsatı veya izin alındığı belirtilir; tadilat ruhsatı ekte sunulur." },
          { baslik: "İzne tabi olmayan tadilatlar", metin: "Ruhsat ve izne tabi olmayan tadilatlar tek tek yazılır." }
        ]
      },
      { tip: "p", metin: "Belgenin sonunda, bu bilgilerdeki eksiklik veya yanlışlıktan doğacak sorumluluğun kabul edildiği taahhüt edilir. Bu nedenle taahhütnamenin, binanın güncel durumu bilinmeden ya da eski bir beyan kopyalanarak doldurulması risk taşır." },
      { tip: "h2", id: "ne-zaman", metin: "Başvuru ne zaman yapılmalıdır?" },
      { tip: "p", metin: "Başvurunun, geçerli periyodik kontrol süresinin bitiminden en geç 60 gün önce yapılması gerekir. Bu süre, kontrolün hazırlık, yerinde kontrol ve raporlama aşamalarının tamamlanabilmesi için tanınmıştır. Mevcut binaların ilk başvuruları ise geçiş hükmüne göre 2028 yılı içinde ya da kullanım izni tarihine EK-1 süresi eklenerek bulunan tarihe göre yapılacaktır." },
      { tip: "h2", id: "gec-kalinirsa", metin: "Başvuru süresi kaçırılırsa ne olur?" },
      { tip: "p", metin: "Süreye uyulmaması hâlinde iki sonuç doğar. İlk olarak, yapının geçerli bir yangın güvenlik raporu bulunmamasından kaynaklanan sorumluluk yöneticiye, yönetici yoksa yapı sahibine ait olur. İkinci olarak, süresi içinde başvuru yapılmaması durumunda ilgili idarece 3194 sayılı İmar Kanunu kapsamında idari yaptırım uygulanır." },
      { tip: "p", metin: "Kat mülkiyetli binalarda sık karşılaşılabilecek bir durum da ayrıca düzenlenmiştir: kat malikleri kurulundan ödenek kararı çıkmaması veya ödemelerin tamamlanamaması yüzünden kontrol zamanında yapılamazsa, doğan sorumluluk yapı sahiplerine ait olur." },
      { tip: "h2", id: "hazirlik-onerisi", metin: "Başvuru öncesinde neler hazırlanabilir?" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Kullanım izni belgesi bulunur.", metin: "Belgedeki kullanım sınıfı ile binanın bugünkü kullanımının uyumu kontrol edilir." },
          { baslik: "Onaylı yangın projeleri araştırılır.", metin: "Tahliye, algılama ve söndürme projelerinin ilgili idarede bulunup bulunmadığı öğrenilir." },
          { baslik: "Bakım ve muayene belgeleri toplanır.", metin: "Yangın algılama, acil aydınlatma, yangın dolabı, sprinkler, söndürücüler ve benzeri sistemlerin periyodik muayene belgeleri bir araya getirilir." },
          { baslik: "Tadilat listesi çıkarılır.", metin: "İzinli ve izne tabi olmayan tadilatlar taahhütnameye yazılabilecek şekilde listelenir." },
          { baslik: "Bedel ve karar planlanır.", metin: "Apartmanlarda kat malikleri kurulu kararı başvuru tarihinden önce alınır." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 23: Periyodik kontrol başvuruları",
      "Yönetmelik Taslağı Madde 27/3: Bedellerin başvuru öncesinde yatırılması",
      "Yönetmelik Taslağı EK-5/A: Periyodik kontrol başvuru formu",
      "Yönetmelik Taslağı EK-5/B: Taahhütname",
      "Yönetmelik Taslağı Geçici Madde 1: İlk başvurular"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "periyodik-kontrol-asamalari-ve-sureleri",
    baslik: "Periyodik Kontrol Nasıl Yapılır? Hazırlık, Kontrol ve Raporlama Aşamaları",
    ozet: "Kontrol üç aşamada yürütülür: 5 iş günlük hazırlık, 20 iş günlük yerinde kontrol ve 5 iş günlük raporlama. Her aşamada ne yapıldığı, hangi belgelerin istendiği ve raporun kimlere gönderildiği.",
    ozetle: "Periyodik kontrol hazırlık, kontrol ve raporlama olmak üzere üç aşamadan oluşur. Hazırlık aşamasının 5 iş günü (gerekirse 5 iş günü daha), yerinde kontrolün 20 iş günü, raporlamanın 5 iş günü içinde tamamlanması esastır. Kontrol EK-6 Periyodik Kontrol Formu ile yapılır, sonuç EK-7 Yangın Güvenlik Raporu'nda gösterilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol, bir uzmanın binayı gezip kısa bir not almasıyla tamamlanan bir işlem olarak tasarlanmamıştır. Taslakta süreç üç aşamaya bölünmüş, her aşama için ayrı bir süre ve ayrı belgeler öngörülmüştür. Bu yapı, hem bina tarafının hem de itfaiyenin sürecin hangi noktasında olunduğunu takip edebilmesi için kurulmuştur." },
      {
        tip: "tablo",
        basliklar: ["Aşama", "Ne yapılır?", "Esas süre"],
        satirlar: [
          ["1. Hazırlık", "Belgeler ve onaylı projeler toplanır, yapılacak kontroller belirlenir, başlangıç tarihi bildirilir", "5 iş günü (+5 iş günü uzatılabilir)"],
          ["2. Kontrol", "Yerinde kontrol, EK-6 formunun doldurulması, belge ve fotoğrafların eklenmesi", "20 iş günü"],
          ["3. Raporlama", "EK-7 Yangın Güvenlik Raporu'nun düzenlenmesi", "5 iş günü"]
        ]
      },
      { tip: "h2", id: "hazirlik", metin: "Hazırlık aşamasında ne yapılır?" },
      { tip: "p", metin: "İlk aşamada yapının kâğıt üzerindeki durumu ortaya çıkarılır. İlgili idareden yapı belgeleri, yangın tedbirlerinin gösterildiği onaylı projeler ve varsa yangın tedbirlerini etkileyen izinler; mahalli itfaiye teşkilatından ise varsa önceki periyodik kontrol belgeleri ve diğer raporlar temin edilir. İlgili idareden alınacak belgeler itfaiye tarafından istenir." },
      { tip: "p", metin: "Belgeler incelendikten sonra yapıda alınması gereken tedbirler ve yapılacak kontroller belirlenir. Ardından itfaiye ya da görevlendirilen uzman, yöneticiye veya yapı sahibine kontrolün başlangıç tarihini bildirir. Bu aşamanın, bildirilen başlangıç tarihinden itibaren 5 iş günü içinde tamamlanması esastır; ihtiyaç hâlinde süre 5 iş günü daha uzatılabilir." },
      { tip: "h2", id: "kontrol", metin: "Yerinde kontrol nasıl yürütülür?" },
      { tip: "p", metin: "İkinci aşama binada, yönetici ya da yapı sahibinin katılımıyla yapılır. Kontrol, EK-6'daki Periyodik Kontrol Formu üzerinden yürütülür. Forma; yöneticinin veya yapı sahibinin sakladığı yangın güvenlik sistemleri, cihaz ve ekipmanlarına ait periyodik muayene belgelerinin birer nüshası, yerinde yapılan kontrole ait fotoğraflar ve diğer kanıt belgeleri eklenir." },
      { tip: "p", metin: "Bu aşamanın, bildirilen kontrol başlangıç tarihinden itibaren 20 iş günü içinde tamamlanması esastır. Kontrol sürerken tespit edilen bir eksiklik rapor tamamlanmadan giderilirse, bu durum form ve raporda dikkate alınır. Kontrol sırasında iş güvenliği kurallarına uyulması da ayrıca vurgulanmıştır." },
      { tip: "h2", id: "raporlama", metin: "Rapor nasıl hazırlanır?" },
      { tip: "p", metin: "Son aşamada yapının yangın güvenliği bakımından uygunluk durumu ve varsa eksiklik ile uygunsuzluklar EK-7'deki Yangın Güvenlik Raporu'nda gösterilir. Raporda yapının bilgileri, kontrolü yapan kişinin adı ve uzmanlık seviyesi, rapor numarası, “Uygun” veya “Uygun Değil” şeklinde sonuç, düzenlenme ve son geçerlilik tarihleri ile tespitler yer alır. Bu aşamanın 5 iş günü içinde tamamlanması esastır." },
      { tip: "p", metin: "İtfaiye raporda eksik ya da anlaşılamayan bir husus tespit ederse uzmandan açıklama istenir. Uzman tarafından 5 iş günü içinde yazılı açıklama yapılması gerekir." },
      { tip: "h2", id: "rapor-nereye-gider", metin: "Rapor kimlere gönderilir?" },
      { tip: "p", metin: "Kontrolde eksiklik veya uygunsuzluk bulunmazsa rapor dört nüsha olarak dağıtılır:" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "İtfaiye", metin: "Bir nüsha arşivlenir." },
          { baslik: "İlgili idare", metin: "Bir nüsha gönderilir." },
          { baslik: "Bina tarafı", metin: "Bir nüsha yöneticiye, yönetici yoksa yapı sahibine tebliğ edilir." },
          { baslik: "Uzman", metin: "Kontrol bir YGU tarafından yapıldıysa bir nüsha uzmanda saklanır." }
        ]
      },
      { tip: "p", metin: "Periyodik kontrol sonucunda verilen yangın güvenlik raporu, yapının görünür bir noktasına asılır. Eksiklik bulunan yapılarda ise ilgili idarenin süre verdiği ayrı bir süreç işletilir." },
      { tip: "h2", id: "2028-istisnasi", metin: "2028'de başvuran binalarda süreler farklı mı?" },
      { tip: "p", metin: "Evet. İlk periyodik kontrol başvurusu 1 Ocak ile 31 Aralık 2028 arasında yapılan yapıların kontrolü, yukarıdaki aşama sürelerine bakılmaksızın başvuru tarihinden itibaren bir yıl içinde yapılacaktır. Geçiş yılında başvuruların yoğunlaşması beklendiği için bu esneklik tanınmıştır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 24/1: Hazırlık, kontrol ve raporlama aşamaları",
      "Yönetmelik Taslağı Madde 24/2 ve 24/10: Raporun dağıtımı ve asılması",
      "Yönetmelik Taslağı EK-6: Periyodik Kontrol Formu",
      "Yönetmelik Taslağı EK-7: Yangın Güvenlik Raporu",
      "Yönetmelik Taslağı Geçici Madde 1/2: 2028 başvuruları"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "periyodik-kontrolde-nelere-bakilir",
    baslik: "Periyodik Yangın Kontrolünde Nelere Bakılır? Kontrol Formunun Bölümleri",
    ozet: "EK-6 Periyodik Kontrol Formu; ön şartlar, sistemlerin muayene belgeleri ile mimari, mekanik ve elektrik kontrol listelerinden oluşur. Hangi sistemin belgesinin istendiği ve hangi alanların yerinde incelendiği.",
    ozetle: "Periyodik kontrolde önce yapının mevcut kullanımının projedeki kullanım ve tehlike sınıfına uygunluğu sorgulanır. Ardından yangın algılama, acil aydınlatma, yangın dolabı, sprinkler, hidrant, söndürücüler, basınçlandırma, duman kontrolü ve davlumbaz söndürme gibi sistemlerin periyodik muayene belgelerine bakılır; kaçış yolları, kapılar, kompartımanlar ve söndürme tesisatı onaylı projeyle karşılaştırılarak yerinde kontrol edilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol için gelen uzmanın binada neye bakacağı, hazırlığın nereden başlatılacağını belirler. Taslağın ekinde yer alan EK-6 Periyodik Kontrol Formu bu sorunun cevabını verir. Form, serbest gözleme dayalı bir rapor değil; maddeleri “uygun” ve “uygun değil” olarak işaretlenen kontrol listelerinden oluşur." },
      { tip: "h2", id: "genel-bilgiler", metin: "Formun ilk sayfasında hangi bilgiler yer alır?" },
      { tip: "p", metin: "Formun başında kontrolün başlangıç ve düzenlenme tarihi, varsa önceki kontrolün tarihi yazılır. Yapının adresi, ada ve parseli, kullanım sınıfı, ilk yapı ruhsatı tarihi, yapı kullanma izni tarihi ve varsa yapı kayıt belgesi tarihi kaydedilir. Yapının tabi olduğu mevzuat da bu bölümde belirtilir; çünkü yapının hangi tarihli yönetmeliğe göre değerlendirileceği ruhsat tarihine bağlıdır." },
      { tip: "h2", id: "on-sartlar", metin: "Kontrolün ön şartları nelerdir?" },
      { tip: "p", metin: "Ayrıntılı listelere geçilmeden önce iki temel soru sorulur: yapının mevcut kullanımı projesinde belirtilen kullanım sınıfına uygun mu ve projesindeki tehlike sınıfına uygun mu? Ofis olarak projelendirilmiş bir katın depoya dönüştürülmesi ya da düşük tehlikeli bir üretim alanında yüksek tehlikeli malzeme kullanılmaya başlanması, bu aşamada ortaya çıkar." },
      { tip: "p", metin: "Kullanım belgelerinde yazan amaç dışında kullanıldığı tespit edilen yapılarda periyodik kontrol yapılmaz; durum ilgili idareye bildirilir. Bu nedenle ön şartlar, kontrolün devam edip etmeyeceğini belirleyen eşik niteliğindedir." },
      { tip: "h2", id: "muayene-belgeleri", metin: "Hangi sistemlerin muayene belgesi istenir?" },
      { tip: "p", metin: "Formun “periyodik muayene kontrolü” bölümünde, yapıda bulunan sistemlerin muayene belgelerinin varlığı sorgulanır:" },
      {
        tip: "tablo",
        basliklar: ["Grup", "Sistemler"],
        satirlar: [
          ["Tahliye ve uyarı", "Acil durum (itfaiyeci) asansörü, acil durum aydınlatması ve yönlendirmesi, yangın algılama ve uyarı sistemleri"],
          ["Sulu söndürme", "Yangın dolabı sistemi, itfaiye su alma ağzı, itfaiye su verme ağzı, yağmurlama (sprinkler) sistemi, hidrant sistemi"],
          ["Diğer söndürme", "Taşınabilir yangın söndürücüler, yangın söndürme sistemleri, davlumbaz söndürme sistemi"],
          ["Duman yönetimi", "Basınçlandırma sistemi, duman kontrol sistemi"]
        ]
      },
      { tip: "p", metin: "Bu belgeler kontrol sırasında üretilmez; yöneticinin ya da yapı sahibinin daha önce yaptırdığı bakım ve muayenelere ait olup forma birer nüsha olarak eklenir. Belgelerin önceden toplanmamış olması, kontrolün en sık uzamasına yol açan nedenlerden biri olarak öngörülebilir." },
      { tip: "h2", id: "mimari", metin: "Mimari kontrol listesinde neler incelenir?" },
      { tip: "p", metin: "Mimari bölümde, tahliye ve mimari projede gösterilen unsurların yerinde bulunup bulunmadığı ve korunup korunmadığı incelenir. Kaçış merdivenleri, yangına dayanıklı kapıların konumu, yangın güvenlik holleri, tahliye bekleme noktaları, yangın kompartımanları, korunumlu hol ve koridorlar ile iç ve dış kaçış koridorları bu listede yer alır." },
      { tip: "p", metin: "Kaçış yolu kapıları, konaklama binalarının koridorlarındaki duman kesici kapılar, yangın duvarları, cepheler, bodrumlu yapılarda son çıkışın düzeni ve tatbikat kayıtları da mimari başlık altında kontrol edilir. Kullanım sırasında en çok değişikliğe uğrayan alanlar genellikle bunlardır: kilitlenen çıkış kapıları, depo olarak kullanılan merdiven sahanlıkları, sökülen kapı kapatıcılar." },
      { tip: "h2", id: "mekanik-elektrik", metin: "Mekanik ve elektrik kontrol listeleri neyi kapsar?" },
      { tip: "p", metin: "Mekanik bölümde söndürme projesinde gösterilen yangın dolapları, itfaiye su alma ve verme ağızları ile diğer söndürme ekipmanlarının onaylı projeye uygun olarak yerinde bulunduğu kontrol edilir. Elektrik tarafında ise algılama ve uyarı sistemleri, acil aydınlatma ve yönlendirme ile acil durum asansörü gibi ekipmanlar ele alınır." },
      { tip: "h2", id: "kapsam-disi", metin: "Periyodik kontrolde neye bakılmaz?" },
      { tip: "p", metin: "Kontrolde esas alınan onaylı projelerin mevzuata uygunluğu ve buna ilişkin sorumluluk, periyodik kontrolün kapsamı dışında bırakılmıştır. Uzman projeyi yeniden tasarlamaz ya da projeyi denetlemez; yapının onaylı projeye uygun olup olmadığına ve tedbirlerin çalışır durumda tutulup tutulmadığına bakar." },
      { tip: "h2", id: "hazirlik-listesi", metin: "Kontrolden önce bina tarafında neler kontrol edilebilir?" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Kaçış yolları boşaltılır.", metin: "Merdivenlerde, koridorlarda ve çıkış kapılarının önünde eşya bırakılmamasına dikkat edilir." },
          { baslik: "Yangın kapıları kontrol edilir.", metin: "Kapı kapatıcıların çalıştığı, kapıların takozla açık tutulmadığı görülür." },
          { baslik: "Muayene belgeleri dosyalanır.", metin: "Her sistemin son muayene belgesi tek bir klasörde toplanır." },
          { baslik: "Kullanım değişiklikleri listelenir.", metin: "Projeden farklı kullanılan alanlar not edilir." },
          { baslik: "Tatbikat belgesi hazırlanır.", metin: "Yapılan son tatbikata ait belge bulunur." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı EK-6: Periyodik Kontrol Formu (genel bilgiler, ön şartlar, periyodik muayene kontrolü, mimari ve mekanik kontrol listeleri)",
      "Yönetmelik Taslağı Madde 24/1-b: Kontrol aşaması",
      "Yönetmelik Taslağı Madde 24/4 ve 24/9: Proje uygunluğunun kapsam dışı oluşu ve amaç dışı kullanım"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "yangin-guvenlik-raporunda-eksiklik-cikarsa",
    baslik: "Yangın Güvenlik Raporunda Eksiklik Çıkarsa Ne Olur? Uygunluk Kontrolü ve Yaptırımlar",
    ozet: "Raporda eksiklik çıkan yapılara ilgili idarece süre verilir; eksiklikler giderilerek uygunluk kontrolü istenir. İstenmezse ya da eksiklikler giderilmezse İmar Kanunu, Kabahatler Kanunu ve gerektiğinde Türk Ceza Kanunu devreye girer.",
    ozetle: "Yangın güvenlik raporunda eksiklik veya uygunsuzluk tespit edilirse ilgili idare, İmar Kanunu'ndaki süreyi aşmamak üzere bir süre belirler ve raporla birlikte başvuru sahibine tebliğ eder. Başvuru sahibi bu süre içinde eksiklikleri giderip itfaiyeden uygunluk kontrolü ister. Uygunluk kontrolü istenmezse veya eksiklikler giderilmezse ilgili idarece İmar Kanunu ya da Kabahatler Kanunu kapsamında işlem yapılır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrolün amacı bir not vermek değil, eksiklikleri giderilmiş bir bina elde etmektir. Bu nedenle taslakta “uygun değil” sonucu çıkan yapılar için ayrı bir takip süreci tanımlanmış, sürecin her adımına bir sorumlu atanmıştır." },
      { tip: "h2", id: "sure-verilir", metin: "Eksiklik çıktığında ilk olarak ne yapılır?" },
      { tip: "p", metin: "Yangın güvenlik raporunda eksiklik veya uygunsuzluk tespit edilirse süreç ilgili idareye geçer. İlgili idare, eksikliklerin giderilmesi için bir süre belirler; bu süre 3194 sayılı İmar Kanunu'nda öngörülen süreyi aşamaz. Belirlenen süre, bir yazı ve raporun bir nüshasıyla birlikte başvuru sahibine tebliğ edilir. Verilen süre ve tebliğ tarihi mahalli itfaiye teşkilatına da bildirilir." },
      { tip: "h2", id: "uygunluk-kontrolu", metin: "Uygunluk kontrolü nedir?" },
      { tip: "p", metin: "Uygunluk kontrolü, periyodik kontrolde tespit edilen eksiklik ve uygunsuzlukların giderilip giderilmediğinin incelenmesidir. Yapının tamamı yeniden kontrol edilmez; raporda yer alan tespitlerin akıbetine bakılır. Başvuru sahibi, verilen süre içinde eksiklikleri giderdikten sonra mahalli itfaiye teşkilatından uygunluk kontrolü yapılmasını ister." },
      { tip: "p", metin: "Uygunluk kontrolü için de bedel alınır. Birinci uygunluk kontrolünden sonra yapılacak kontrollerin bedeli, periyodik kontrol bedelini aşmamak üzere ilgili idarece belirlenir." },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Rapor “uygun değil” olarak düzenlenir.", metin: "Tespitler EK-7'de tek tek yazılır." },
          { baslik: "İlgili idare süre verir.", metin: "Süre ve rapor başvuru sahibine tebliğ edilir, itfaiyeye bildirilir." },
          { baslik: "Eksiklikler giderilir.", metin: "Yönetici veya yapı sahibi gerekli onarım, bakım ya da düzenlemeyi yaptırır." },
          { baslik: "Uygunluk kontrolü istenir.", metin: "Süre içinde itfaiyeye başvurulur." },
          { baslik: "Sonuç değerlendirilir.", metin: "Eksiklikler giderildiyse süreç kapanır, giderilmediyse yaptırım aşamasına geçilir." }
        ]
      },
      { tip: "h2", id: "istenmezse", metin: "Süre içinde uygunluk kontrolü istenmezse ne olur?" },
      { tip: "p", metin: "Verilen süre içinde başvuru sahibi tarafından uygunluk kontrolü istenmezse, ilgili idare tarafından İmar Kanunu kapsamında işlem tesis edilir. Sessiz kalmak süreci durdurmaz; aksine yaptırım aşamasını başlatır." },
      { tip: "h2", id: "giderilmezse", metin: "Eksiklikler giderilmezse hangi yaptırımlar uygulanır?" },
      { tip: "p", metin: "Uygunluk kontrolünde eksikliklerin giderilmediği anlaşılırsa, mevzuat ve standartlara uygun yangın tedbirlerini almadığı tespit edilen yapılara ve sorumlularına, tespit edilen eksikliğin niteliğine göre ilgili idarece işlem yapılır. Taslakta üç kanuna atıf yapılmıştır:" },
      {
        tip: "tablo",
        basliklar: ["Kanun", "Ne zaman uygulanır?"],
        satirlar: [
          ["3194 sayılı İmar Kanunu", "Yangın tedbirlerine ilişkin eksiklik ve uygunsuzluklarda, idari yaptırım olarak"],
          ["5326 sayılı Kabahatler Kanunu", "Eksiklik veya uygunsuzluğun niteliğine göre"],
          ["5237 sayılı Türk Ceza Kanunu", "Aykırı hareketin suç teşkil etmesi durumunda"]
        ]
      },
      { tip: "h2", id: "proje-yoksa", metin: "Onaylı proje bulunamazsa rapor nasıl düzenlenir?" },
      { tip: "p", metin: "Yapının tabi olduğu mevzuata göre gerekli yangın tedbirlerini gösteren onaylı projeler ilgili idareden temin edilemezse, kontrol aşaması uygulanmadan raporlama aşamasına geçilir ve bu durum eksiklik olarak ilgili idareye bildirilir. Bu durumda projelerin yapı sahibi tarafından hazırlatılarak ilgili idarenin onayına sunulması gerekir." },
      { tip: "h2", id: "rapor-asilmasi", metin: "Eksikliği olan bina raporu asmak zorunda mı?" },
      { tip: "p", metin: "Taslakta periyodik kontrol sonucunda verilen yangın güvenlik raporunun yapının görünür bir noktasına asılacağı belirtilmiştir. Raporda “Uygun” ya da “Uygun Değil” şeklinde açık bir sonuç ve son geçerlilik tarihi yer aldığından, bina kullanıcıları yapının durumunu bu belge üzerinden görebilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 4/1-h: Uygunluk kontrolü tanımı",
      "Yönetmelik Taslağı Madde 24/3: Eksiklik tespitinde süreç",
      "Yönetmelik Taslağı Madde 24/5: Onaylı projenin temin edilememesi",
      "Yönetmelik Taslağı Madde 24/6: İmar Kanunu, Kabahatler Kanunu ve Türk Ceza Kanunu",
      "Yönetmelik Taslağı Madde 27/5: Uygunluk kontrolü bedeli",
      "Yönetmelik Taslağı EK-7: Yangın Güvenlik Raporu"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "periyodik-kontrol-ucreti-nasil-belirlenir",
    baslik: "Periyodik Yangın Kontrolü Ücreti Ne Kadar? Bedel Nasıl Belirlenir?",
    ozet: "Kontrol bedeli için Bakanlıkça taban ve tavan aralığı ilan edilir; tutar her yıl ilgili idarenin karar organınca belirlenir. Bedele itfaiye işlem payı eklenir ve başvurudan önce itfaiye hesabına yatırılır.",
    ozetle: "Periyodik kontrol bedeli tek bir ülke geneli tarife ile değil, iki adımda belirlenir: Bakanlık her yıl taban ve tavan bedel aralığını ilan eder, ilgili idarenin karar organı bu aralıkta o yılın tutarını 1 Ocak'tan geçerli olmak üzere belirler. Ödenecek bedel bu tutar ile mahalli itfaiye teşkilatı işlem payının toplamıdır ve başvurudan önce itfaiye hesabına yatırılır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrolün maliyeti, bina yöneticilerinin en çok merak ettiği konulardan biridir. Taslakta belirli bir rakam verilmemiştir; bunun yerine bedelin nasıl hesaplanacağına dair bir yöntem tarif edilmiştir. Bu yöntem bilindiğinde, kendi binası için ödenecek tutarın nereden öğrenileceği de anlaşılır." },
      { tip: "h2", id: "kim-belirler", metin: "Kontrol ücretini kim belirler?" },
      { tip: "p", metin: "Bedel iki katmanda belirlenir. Önce Bakanlık, önceki yılın bedellerini ve Vergi Usul Kanunu'na göre o yıl için ilan edilen yeniden değerleme oranını dikkate alarak bir taban ve tavan bedel aralığı belirler; bu aralık Bakanlığın resmî internet sayfasında ilan edilir. Ardından ilgili idarenin karar organı, yani çoğunlukla belediye meclisi, bu aralık içinde kalmak üzere o yılın bedelini 1 Ocak'tan geçerli olacak şekilde belirler." },
      { tip: "p", metin: "Bu yapı nedeniyle aynı büyüklükteki iki bina, farklı belediyelerde farklı bedellerle karşılaşabilir. Ancak hiçbir belediyenin Bakanlıkça ilan edilen aralığın dışına çıkması öngörülmemiştir." },
      { tip: "h2", id: "bedelin-bilesenleri", metin: "Ödenecek tutar nelerden oluşur?" },
      { tip: "p", metin: "Ödenecek bedel, ilgili idare karar organının belirlediği tutar ile mahalli itfaiye teşkilatı işlem payının toplamıdır. Taslağın ekindeki protokol örneğinde itfaiye işlem payı hizmet bedelinin yüzde 5'i olarak gösterilmiştir." },
      {
        tip: "tablo",
        basliklar: ["Kalem", "Açıklama"],
        satirlar: [
          ["Hizmet bedeli", "İlgili idarenin karar organınca, Bakanlığın ilan ettiği aralıkta belirlenir"],
          ["İtfaiye işlem payı", "Protokol örneğine göre hizmet bedelinin %5'i"],
          ["Toplam", "Başvuru öncesinde itfaiye hesabına yatırılır, dekont başvuruya eklenir"]
        ]
      },
      { tip: "h2", id: "ne-zaman-odenir", metin: "Ücret ne zaman ve nereye ödenir?" },
      { tip: "p", metin: "Bedel, yönetici varsa yönetici, yoksa yapı sahipleri tarafından başvurudan önce mahalli itfaiye teşkilatının hesabına yatırılır. Ödeme dekontu başvuru belgeleri arasında yer alır; bu nedenle dekont olmadan yapılan başvuru eksik sayılır." },
      { tip: "h2", id: "ygu-ye-odeme", metin: "Kontrolü YGU yaparsa ödeme nasıl paylaşılır?" },
      { tip: "p", metin: "Bina tarafı uzmana doğrudan ödeme yapmaz. Hizmet bir yangın güvenlik uzmanı tarafından gerçekleştirilirse itfaiye, yatırılan bedelden işlem payını ayırır ve kalan kısmı hizmetin tamamlanıp onaylanmasından sonra uzmanın hesabına aktarır. Protokol örneğinde bu ödemenin en geç 10 iş günü içinde yapılacağı belirtilmiştir." },
      { tip: "p", metin: "Aynı iş için birden fazla uzman görevlendirildiğinde, YGU-1, YGU-2 ve YGU-3 seviyesindeki uzmanlara ödenecek bedel eşit paylaştırılır; YGU-K seviyesindeki uzmana ise diğer seviyedeki uzmanlara ödenen bedelin yüzde 25'i oranında ödeme yapılır." },
      { tip: "h2", id: "uygunluk-kontrolu-bedeli", metin: "Eksiklik çıkarsa ikinci kontrol için tekrar ücret ödenir mi?" },
      { tip: "p", metin: "Evet, uygunluk kontrolü de ücretlidir. Birinci uygunluk kontrolünden sonra yapılacak uygunluk kontrollerinin bedeli, periyodik kontrol bedelini aşmamak kaydıyla ilgili idarece belirlenir. Eksikliklerin tek seferde ve eksiksiz giderilmesi, bu nedenle maliyet açısından da önem taşır." },
      { tip: "h2", id: "uzman-yetkisi-iptal", metin: "Uzmanın yetkisi iptal edilirse ödenen bedel ne olur?" },
      { tip: "p", metin: "Yetkisi iptal edilen ya da askıya alınan bir uzmanın tamamlanmamış periyodik kontrollerinde bedelden protokole göre kesinti yapılır; bu kesinti, uygunluk kontrolü için görevlendirilen başka bir uzmana ödenir. Protokol örneğinde, birinci uygunluk kontrolü yapılmamışsa kesinti oranı yüzde 30 olarak gösterilmiştir. Bina tarafı için ek bir bedel öngörülmemiştir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 27: Bedeller ve ödemeler",
      "Yönetmelik Taslağı EK-3 Madde 6 ve 7: Hizmet bedeli, işlem payı ve ödeme",
      "Yönetmelik Taslağı Madde 23/2: Dekontun başvuruya eklenmesi"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "tadilat-ve-kullanim-degisikligi-periyodik-kontrol",
    baslik: "Tadilat veya Kullanım Değişikliği Periyodik Kontrolü Nasıl Etkiler?",
    ozet: "Esaslı tadilattan sonra kontrol süresi yeniden başlatılır; süreyi değiştiren kullanım değişiklikleri itfaiyeye bildirilir; amacı dışında kullanılan yapılarda ise periyodik kontrol yapılmaz.",
    ozetle: "Güncel periyodik kontrolü bulunan bir yapıda esaslı tadilat yapılır ve uygunluk görüşü alınırsa kontrol süresi, tadilata ilişkin yapı kullanma izin belgesinin onay tarihinden yeniden başlar. Esaslı tadilat sayılmayan ama EK-1'deki süreyi değiştiren kullanım değişiklikleri yapı sahibince itfaiyeye bildirilir. Kullanım belgesindeki amaç dışında kullanılan yapılarda periyodik kontrol yapılmaz, durum ilgili idareye bildirilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Binalar kullanıldıkça değişir. Bir kat birleştirilir, bir dükkân restorana dönüştürülür, bir depo bölümü üretim alanına katılır. Taslakta bu değişikliklerin periyodik kontrol takvimine etkisi üç ayrı durum olarak düzenlenmiştir." },
      {
        tip: "tablo",
        basliklar: ["Durum", "Sonuç"],
        satirlar: [
          ["Esaslı tadilat + uygunluk görüşü", "Kontrol süresi tadilata ait yapı kullanma izninin onay tarihinden yeniden başlar"],
          ["Esaslı tadilat değil, ama süreyi değiştiren kullanım", "Yapı sahibince itfaiyeye bildirilir; itfaiye gerekli görürse periyodik kontrol yapılır"],
          ["Kullanım belgesindeki amaç dışında kullanım", "Periyodik kontrol yapılmaz, ilgili idareye bildirilir"]
        ]
      },
      { tip: "h2", id: "esasli-tadilat", metin: "Esaslı tadilattan sonra kontrol süresi değişir mi?" },
      { tip: "p", metin: "Evet. Güncel periyodik kontrolü bulunan bir yapıda esaslı tadilat yapılır ve buna ilişkin uygunluk görüşü alınırsa, periyodik kontrol tadilata ilişkin yapı kullanma izin belgesinin onay tarihi itibarıyla yeniden başlar. Tadilat projesi ve uygulaması zaten uygunluk görüşü sürecinden geçtiği için, eski kontrol tarihinin esas alınmasına gerek görülmemiştir." },
      { tip: "p", metin: "Bu hükmün uygulanabilmesi için tadilatın izinli yapılmış ve uygunluk görüşünün alınmış olması gerekir. İzinsiz yapılan bir esaslı tadilat bu avantajı sağlamaz; aksine periyodik kontrolde ve taahhütnamede ayrı bir sorun olarak karşılaşılır." },
      { tip: "h2", id: "kullanim-degisikligi", metin: "Kullanım değişikliği bildirilmek zorunda mı?" },
      { tip: "p", metin: "Esaslı tadilat kapsamına girmeyen ancak EK-1'deki periyodik kontrol süresini değiştirecek kullanımlar, yapı sahibi tarafından mahalli itfaiye teşkilatına bildirilir. Örneğin bir binanın düşük tehlikeli bir üretimden orta tehlikeli bir üretime geçmesi, kontrol süresini 5 yıldan 4 yıla indirir. Bu durumda itfaiye gerekli görürse yapıda periyodik kontrol yapılır." },
      { tip: "p", metin: "Bildirim yükümlülüğü yapı sahibine verilmiştir. Bildirilmeyen bir değişiklik, bir sonraki kontrolde ön şartlar bölümünde “mevcut kullanım projedeki tehlike sınıfına uygun mu?” sorusuyla ortaya çıkar." },
      { tip: "h2", id: "amac-disi", metin: "Amacı dışında kullanılan binaya periyodik kontrol yapılır mı?" },
      { tip: "p", metin: "Hayır. Kullanıma ilişkin belgelerinde belirtilen amaç dışında kullanıldığı tespit edilen yapılarda periyodik kontrol yapılmaz ve durum ilgili idareye bildirilir. Konut olarak izin almış bir binanın tamamen ticari amaçla kullanılması bu duruma örnek gösterilebilir." },
      { tip: "p", metin: "Bu hüküm bir muafiyet anlamına gelmez. Kontrolün yapılmaması, binanın geçerli bir yangın güvenlik raporu alamaması demektir; konu ilgili idarenin imar mevzuatı kapsamındaki işlemlerine bırakılır." },
      { tip: "h2", id: "taahhutname", metin: "Tadilatlar başvuruda nasıl beyan edilir?" },
      { tip: "p", metin: "Periyodik kontrol başvurusundaki taahhütnamede esaslı tadilatlar için ilgili idareden tadilat ruhsatı veya izin alındığı beyan edilir ve ruhsat ekte sunulur. Ruhsat ve izne tabi olmayan tadilatlar da tek tek yazılır. Bu beyanlardaki eksiklik veya yanlışlıktan doğan sorumluluk başvuru sahibine aittir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 24/7: Esaslı tadilat sonrası periyodik kontrol",
      "Yönetmelik Taslağı Madde 24/8: Süreyi değiştiren kullanımların bildirilmesi",
      "Yönetmelik Taslağı Madde 24/9: Amaç dışı kullanım",
      "Yönetmelik Taslağı EK-5/B: Taahhütname",
      "Yönetmelik Taslağı EK-6: Ön şartlar"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "karma-kullanimli-binalarda-periyodik-kontrol",
    baslik: "Karma Kullanımlı Binalarda Periyodik Kontrol Süresi Nasıl Belirlenir?",
    ozet: "Altı mağaza üstü ofis ya da konut olan binalarda hangi sürenin uygulanacağı, hangi seviyedeki uzmanın görevlendirileceği ve uluslararası standartlara göre tasarlanan binalar için getirilen özel kural.",
    ozetle: "Karma kullanımlı binalarda, binadaki kullanım sınıflarından kontrol periyodu kısa olanın süresi uygulanır. Örneğin bir bölümü 4 yıllık, diğer bölümü 5 yıllık sınıfa giren bina 4 yılda bir kontrol edilir. Görevlendirilecek uzmanın seviyesi de EK-1'deki kullanım sınıfı ve sınırlara göre belirlenir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Şehirlerdeki binaların önemli bir kısmı tek bir amaçla kullanılmaz. Zemin katında dükkânlar, üst katlarında konutlar bulunan apartmanlar; alışveriş, ofis ve otel bölümlerini aynı kütlede toplayan karma projeler; üretim alanıyla deposu iç içe geçmiş tesisler yaygındır. Taslakta bu binalar için tek ve açık bir kural konulmuştur." },
      { tip: "h2", id: "kural", metin: "Karma kullanımda hangi süre geçerlidir?" },
      { tip: "p", metin: "EK-1'in notlarında karma kullanım sınıfındaki binalarda kontrol periyodu düşük olan sınıfın uygulanacağı belirtilmiştir. “Periyodu düşük” ifadesi, daha kısa süreyi anlatır. Bina, içindeki kullanımlardan hangisi daha sık kontrol gerektirirse o sıklıkta kontrol edilir." },
      {
        tip: "tablo",
        basliklar: ["Örnek bina", "Kullanımlar", "Uygulanacak süre"],
        satirlar: [
          ["35 m yüksekliğinde konut + 800 m² dükkânlar", "Konut 5 yıl, ticaret (1.000 m² altı) 5 yıl", "5 yıl"],
          ["55 m yüksekliğinde rezidans + ofis katları", "Konut 4 yıl, büro (1.000 m² üzeri) 4 yıl", "4 yıl"],
          ["Ofis binası + 40 odalı otel bölümü", "Büro 4 veya 5 yıl, konaklama (25 oda üzeri) 4 yıl", "4 yıl"],
          ["Atölye + yüksek tehlikeli depo bölümü", "Düşük tehlikeli endüstri 5 yıl, yüksek tehlikeli depolama 3 yıl", "3 yıl"]
        ]
      },
      { tip: "p", metin: "Tablodaki örnekler kuralın işleyişini göstermek için hazırlanmıştır. Gerçek bir binada her kullanımın hangi sınıfa ve sınıra girdiği, Binaların Yangından Korunması Hakkında Yönetmelikteki (BYKHY) tanımlara göre belirlenir." },
      { tip: "h2", id: "kucuk-bolumler", metin: "Binadaki küçük bir bölüm de karma kullanım sayılır mı?" },
      { tip: "p", metin: "Bir kullanımın ayrı bir sınıf olarak mı değerlendirileceği yoksa ana kullanımın bir parçası mı sayılacağı, BYKHY'nin kullanım sınıflarına ilişkin hükümlerine göre belirlenir. Örneğin bir ofisin içindeki küçük bir arşiv odası ile binanın bir katını kaplayan bir depo aynı şekilde değerlendirilmez. Bu ayrım kontrol süresini doğrudan etkilediği için hazırlık aşamasında projeler üzerinden netleştirilir." },
      { tip: "h2", id: "uzman-seviyesi", metin: "Karma kullanımlı binayı hangi seviyedeki uzman kontrol eder?" },
      { tip: "p", metin: "Periyodik kontrol ve uygunluk görüşü işlerinde uzmanın yetkilendirilmesinde EK-1'deki kullanım sınıfına göre belirlenmiş seviyeler dikkate alınır. Bir binada YGU-2 veya YGU-3 gerektiren bir kullanım varsa, YGU-1 seviyesindeki bir uzmanın tek başına görevlendirilmesi bu tabloyla bağdaşmaz. Yüksek tehlikeli bir bölüm varsa YGU-3 ile YGU-K'nin birlikte görev yapması gerekir." },
      { tip: "h2", id: "uluslararasi-standart", metin: "Uluslararası standarda göre tasarlanan binalarda farklı bir kural var mı?" },
      { tip: "p", metin: "Evet. BYKHY'nin 5. maddesinin ikinci fıkrası gereği uluslararası standartlara göre tasarımı yapılan binaların periyodik kontrolleri ve uygunluk görüşü işlerinde YGU-1 ve YGU-2 seviyesindeki uzmanlar görevlendirilmez. Bu binalarda uluslararası doküman ve standart okuma modülünü tamamlamış YGU-3 seviyesine ihtiyaç duyulur." },
      { tip: "h2", id: "itfaiye-yetkisi", metin: "İtfaiye bütün binaları kontrol edebilir mi?" },
      { tip: "p", metin: "Evet. EK-1'in ilk notunda mahalli itfaiye teşkilatının tüm yapılarda periyodik kontrol yapma ve uygunluk görüşü verme yetkisi olduğu belirtilmiştir. Seviye tablosu, itfaiyenin uzmanlardan hizmet aldığı durumlarda hangi uzmanın görevlendirilebileceğini belirler; itfaiyenin kendi yetkisini sınırlamaz." }
    ],
    dayanak: [
      "Yönetmelik Taslağı EK-1 Notları: Karma kullanım, seviye, yüksek tehlikeli yapılar ve uluslararası standartlar",
      "Yönetmelik Taslağı Madde 6/2: Görevlerin seviyelere göre dağılımı",
      "Yönetmelik Taslağı EK-2 Modül 10: Uluslararası doküman ve standart okuma"
    ],
    arac: FIRETECH
  },
  {
    kategori: "periyodik-kontroller",
    yol: "apartmanlarda-periyodik-kontrol-sorumlulugu",
    baslik: "Apartman ve Sitelerde Periyodik Kontrol Sorumluluğu Kimde?",
    ozet: "Başvuruyu yönetici yapar, yönetici yoksa yapı sahipleri. Kat malikleri kurulundan ödenek kararı çıkmazsa sorumluluğun kime geçtiği ve yüksek apartmanlar için pratik bir takvim.",
    ozetle: "Kat mülkiyetli binalarda periyodik kontrol başvurusu yönetici tarafından yapılır; yönetici, gerekli işlemleri Kat Mülkiyeti Kanunu'na göre yürütür. Yönetici yoksa sorumluluk yapı sahiplerine aittir. Kat malikleri kurulundan ödenek kararı çıkmaması veya ödemelerin tamamlanamaması nedeniyle kontrol zamanında yapılamazsa doğan sorumluluk da yapı sahiplerine ait olur.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yüksek apartmanlarda ve sitelerde periyodik kontrolün en zor kısmı teknik değil, idari kısmıdır: kararın alınması, bedelin toplanması ve başvurunun zamanında yapılması. Taslakta bu adımların sorumlusu ayrıca belirtilmiştir." },
      { tip: "h2", id: "hangi-apartmanlar", metin: "Hangi apartmanlar periyodik kontrole tabidir?" },
      { tip: "p", metin: "Konutlarda ölçü yapı yüksekliğidir. Yapı yüksekliği 30,50 metre (dahil) ile 51,50 metre arasında olan konutlar 5 yılda bir, 51,50 metre ve üzerindeki konutlar 4 yılda bir kontrol edilir. 30,50 metrenin altındaki apartmanlar EK-1'de yer almaz. Zemin katında dükkân bulunan apartmanlarda karma kullanım kuralı uygulanır ve kısa olan süre esas alınır." },
      { tip: "h2", id: "yonetici", metin: "Başvurudan yönetici mi sorumludur?" },
      { tip: "p", metin: "Evet. Yapıda yönetici varsa periyodik kontrol başvurusu yönetici tarafından yapılır. Yöneticinin kontrol için gerekli işlemleri 634 sayılı Kat Mülkiyeti Kanunu'na göre yürütmesi öngörülmüştür. Kontrol bedelinin karşılanması için kat malikleri kurulunun toplanması ve karar alınması bu işlemlerin başında gelir." },
      { tip: "p", metin: "Başvurunun, geçerli kontrol süresinin bitiminden en geç 60 gün önce yapılması gerektiği düşünüldüğünde, kurul toplantısının bu tarihten yeterince önce planlanması gerekir." },
      { tip: "h2", id: "karar-cikmazsa", metin: "Kat malikleri ödenek kararı vermezse sorumlu kim olur?" },
      { tip: "p", metin: "Taslakta bu durum açıkça düzenlenmiştir: kat malikleri kurulundan ödenek için karar çıkmaması veya ödemelerin tamamlanamaması nedeniyle periyodik kontrol zamanında yapılamazsa, doğan sorumluluk yapı sahiplerine aittir. Bu hüküm, kararı engelleyen ya da payını ödemeyen maliklerin sorumluluktan kurtulamayacağını gösterir." },
      {
        tip: "tablo",
        basliklar: ["Durum", "Sorumluluk"],
        satirlar: [
          ["Yönetici var, başvuru süresinde yapılmadı", "Yönetici"],
          ["Yönetici yok", "Yapı sahipleri"],
          ["Ödenek kararı çıkmadı veya ödemeler tamamlanmadı", "Yapı sahipleri"],
          ["Süresinde başvuru yapılmadı", "İlgili idarece İmar Kanunu kapsamında idari yaptırım"]
        ]
      },
      { tip: "h2", id: "kontrol-gunu", metin: "Kontrol sırasında kim hazır bulunur?" },
      { tip: "p", metin: "Yerinde kontrol, yönetici varsa yöneticinin, yoksa yapı sahibinin katılımıyla yapılır. Sistemlerin periyodik muayene belgeleri de yönetici ya da yapı sahibi tarafından saklanır ve kontrol formuna eklenmek üzere sunulur. Apartmanlarda bu belgelerin yönetim dosyasında tutulması, kontrolün uzamasını önler." },
      { tip: "h2", id: "takvim", metin: "Apartman yönetimleri için örnek takvim" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Süre bitiminden 6 ay önce", metin: "Binanın EK-1'deki satırı ve kontrol tarihi doğrulanır, bakım firmalarından muayene belgeleri istenir." },
          { baslik: "4 ay önce", metin: "Kat malikleri kurulu toplanır, kontrol bedeli ve olası onarımlar için ödenek kararı alınır." },
          { baslik: "3 ay önce", metin: "Kaçış yolları, yangın kapıları ve tadilatlar gözden geçirilir; taahhütname için tadilat listesi hazırlanır." },
          { baslik: "En geç 60 gün önce", metin: "Bedel itfaiye hesabına yatırılır, başvuru formu, taahhütname ve dekontla başvuru yapılır." },
          { baslik: "Rapor geldiğinde", metin: "Rapor binanın görünür bir noktasına asılır; eksiklik varsa verilen süre içinde giderilip uygunluk kontrolü istenir." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 23/2–4: Başvuru ve sorumluluk",
      "Yönetmelik Taslağı Madde 24/1-b: Yöneticinin kontrole katılımı",
      "Yönetmelik Taslağı Madde 27/3: Bedelin yatırılması",
      "Yönetmelik Taslağı EK-1: Konutlar için sınırlar"
    ]
  },
  {
    kategori: "periyodik-kontroller",
    yol: "yangin-guvenlik-raporu-nedir",
    baslik: "Yangın Güvenlik Raporu Nedir? İçeriği, Geçerliliği ve Asılma Zorunluluğu",
    ozet: "Periyodik kontrol sonunda düzenlenen yangın güvenlik raporunda hangi bilgilerin yer aldığı, “uygun” ve “uygun değil” sonuçlarının anlamı, raporun kimlere verildiği ve binada asılması.",
    ozetle: "Yangın güvenlik raporu, periyodik kontrol sonucunda EK-7 formatında düzenlenen ve yapının yangın güvenliği bakımından “Uygun” ya da “Uygun Değil” olduğunu gösteren belgedir. Raporda kontrolü yapan kişinin adı ve uzmanlık seviyesi, rapor numarası, düzenlenme ve son geçerlilik tarihleri ile tespitler yer alır. Rapor yapının görünür bir noktasına asılır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol sürecinin somut çıktısı yangın güvenlik raporudur. Bina kullanıcılarının, itfaiyenin ve ilgili idarenin yapı hakkında baktığı belge bu rapordur. Taslakta raporun biçimi EK-7'de, dağıtımı ve kullanımı ise 24. maddede düzenlenmiştir." },
      { tip: "h2", id: "tanim", metin: "Yangın güvenlik raporu ne işe yarar?" },
      { tip: "p", metin: "Taslakta yangın güvenlik raporu, periyodik kontrol sonucunda hazırlanacak rapor olarak tanımlanmıştır. Rapor, yapının belirli bir tarihteki yangın güvenliği durumunu tek sayfada gösterir ve bir sonraki kontrolün tarihini de dolaylı olarak belirler; çünkü sonraki periyodik kontrol süresi bu raporun tarihinden itibaren hesaplanır." },
      { tip: "h2", id: "icerik", metin: "Raporda hangi bilgiler bulunur?" },
      {
        tip: "tablo",
        basliklar: ["Bölüm", "İçerik"],
        satirlar: [
          ["Yapı bilgileri", "Adres, il/ilçe/mahalle, ada/parsel, kullanım sınıfı"],
          ["Kontrolü yapan", "Adı soyadı veya unvanı ve uzmanlık seviyesi"],
          ["Rapor bilgileri", "Rapor numarası, düzenlenme tarihi ve son geçerlilik tarihi"],
          ["Sonuç", "Uygun veya Uygun Değil"],
          ["Tespitler", "EK-6 Periyodik Kontrol Formunda belirlenen eksiklikler ve açıklamaları"],
          ["İmza", "Ad soyad, unvan, mühür"]
        ]
      },
      { tip: "p", metin: "Rapor, itfaiye dairesi ya da müdürlüğü üzerinden belediye başkanlığına hitaben düzenlenir. Tespitler bölümünün, kontrol formunda işaretlenen eksikliklerle birebir ilişkilendirilmesi beklenir." },
      { tip: "h2", id: "sonuc", metin: "“Uygun” ve “Uygun Değil” ne anlama gelir?" },
      { tip: "p", metin: "“Uygun” sonucu, kontrolde eksiklik veya uygunsuzluk bulunmadığını gösterir. Bu durumda rapor itfaiyede arşivlenir, ilgili idareye gönderilir, yöneticiye ya da yapı sahibine tebliğ edilir ve kontrolü bir uzman yaptıysa bir nüshası uzmanda kalır. “Uygun Değil” sonucunda ise ilgili idarenin süre verdiği eksiklik giderme süreci başlar ve süre sonunda uygunluk kontrolü yapılır." },
      { tip: "h2", id: "asilma", metin: "Rapor nereye asılır?" },
      { tip: "p", metin: "Periyodik kontrol sonucunda verilen yangın güvenlik raporu, yapının görünür bir noktasına asılır. Bina girişleri, asansör önleri veya yönetim panoları bu amaçla kullanılabilecek yerlere örnek gösterilebilir. Asılma zorunluluğu, binayı kullanan herkesin raporun sonucunu ve son geçerlilik tarihini görebilmesini amaçlar." },
      { tip: "h2", id: "itfaiye-aciklama", metin: "Raporda eksik bir husus varsa ne yapılır?" },
      { tip: "p", metin: "Mahalli itfaiye teşkilatı, uzmanın hazırladığı raporda eksik ya da anlaşılamayan bir husus tespit ederse uzmandan açıklama ister. Uzman tarafından 5 iş günü içinde yazılı açıklama yapılması gerekir. Raporun mevzuata uygunluğu itfaiyenin denetimine tabidir; Bakanlık ve komisyon ise raporların teknik içeriği hakkında değerlendirme yapamaz." },
      { tip: "h2", id: "rapor-dili", metin: "Raporda uzmanın yorumuna yer var mı?" },
      { tip: "p", metin: "Sınırlı ölçüde. Uzmanın raporlarında uzmanlığı, özel veya teknik bilgiyi gerektiren hususlar dışında açıklama yapamayacağı ve nitelendirme ya da değerlendirmede bulunamayacağı düzenlenmiştir. Rapor, teknik tespitlerin belgesidir; hukuki nitelendirme veya kişisel kanaat içermez." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 4/1-ı: Yangın güvenlik raporu tanımı",
      "Yönetmelik Taslağı Madde 24/1-c, 24/2, 24/10: Raporlama, dağıtım ve asılma",
      "Yönetmelik Taslağı Madde 8/2-b: Raporlarda açıklama sınırı",
      "Yönetmelik Taslağı Madde 18/5: Bakanlığın teknik içerik değerlendirmesi yapamaması",
      "Yönetmelik Taslağı EK-7: Yangın Güvenlik Raporu"
    ]
  }
]
