// YGU Hakkında › Tarafsızlık ve Meslek Etiği makaleleri. Kaynak: YGU Yönetmelik Taslağı (Md. 6/3, 8, 13, 18, 22, 28).
// Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil, geniş zaman. Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const ETIK_MAKALELERI: YguMakale[] = [
  {
    kategori: "meslek-etigi",
    yol: "ygu-bagimsizlik-ve-tarafsizlik-ilkeleri",
    baslik: "Yangın Güvenlik Uzmanının Bağımsızlık ve Tarafsızlık İlkeleri",
    ozet: "Taslağın 8. maddesinde uzmanın görevini dürüstlük kuralları içinde, bağımsız, tarafsız ve objektif biçimde yürütmesi istenir. Bu ilkelerin uygulamadaki karşılığı ve ihlal hâlinde doğan sonuçlar.",
    ozetle: "Yangın güvenlik uzmanı, görevini dürüstlük kuralları çerçevesinde bağımsız, tarafsız ve objektif olarak yerine getirir. Görev aldığı merciye ve kendi işverenine karşı bağımsızdır, görevini yalnızca uzmanlık alanındaki bilimsel verilere göre ve mevzuata uygun yürütür, bağımsızlığına zarar verebilecek ya da böyle bir izlenim uyandırabilecek her türlü ilişkiden uzak durur. Bu sorumlulukların yerine getirilmemesi yetki belgesinin iptaline yol açar.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik raporu, bir binanın kullanıcıları, itfaiye ve ilgili idare için güvenilir bir belge olarak kurgulanmıştır. Bu güvenin kaynağı, raporu hazırlayan kişinin tarafsızlığıdır. Taslakta bu nedenle etik ilkelere ayrı bir madde ayrılır ve ilkeler yaptırımla desteklenir." },
      { tip: "h2", id: "ilkeler", metin: "Uzmandan hangi temel ilkelere uyması beklenir?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Dürüstlük, bağımsızlık, tarafsızlık ve objektiflik", metin: "Görev, dürüstlük kuralları çerçevesinde bağımsız, tarafsız ve objektif olarak yerine getirilir." },
          { baslik: "Merciye ve işverene karşı bağımsızlık", metin: "Uzman, görev aldığı merciye ve kendi işverenine karşı bağımsızdır; görevini yalnızca uzmanlık alanındaki bilimsel verilere göre ve mevzuata uygun yürütür." },
          { baslik: "İzlenim düzeyinde dikkat", metin: "Bağımsızlığa zarar verebilecek ya da böyle bir izlenim uyandırabilecek her türlü davranış ve ilişkiden uzak durulur." },
          { baslik: "Hukuka aykırı taleplerin bildirilmesi", metin: "Etik dışı veya hukuka aykırı bir iş istendiğinde ya da görev sırasında böyle bir eylem fark edildiğinde durum itfaiyeye bildirilir." },
          { baslik: "Şartların kaybının bildirilmesi", metin: "Meslek veya kabul şartları kaybedildiğinde durum gecikmeksizin Bakanlığa ve itfaiyeye bildirilir." }
        ]
      },
      { tip: "h2", id: "isverene-karsi", metin: "Uzman kendi işverenine karşı da bağımsız mıdır?" },
      { tip: "p", metin: "Evet. Taslakta bağımsızlık yalnızca bina sahibine karşı değil, uzmanın görev aldığı merciye ve kendi işverenine karşı da aranır. Bu ifade, özel hukuk tüzel kişileri bünyesinde istihdam edilen uzmanlar için önem taşır. Uzmanı istihdam eden bir şirket, raporun içeriğini yönlendiremez; rapor yalnızca bilimsel verilere ve mevzuata göre hazırlanır." },
      { tip: "h2", id: "izlenim", metin: "Bağımsızlık izlenimi neden ayrıca vurgulanır?" },
      { tip: "p", metin: "Taslakta yalnızca fiilî bağımlılık değil, bağımlılık izlenimi uyandırabilecek davranış ve ilişkiler de yasaklanır. Gerçekte etkilenmemiş olsa bile, kontrol ettiği binanın sahibiyle ticari ilişkisi bulunan bir uzmanın raporu kamuoyu nezdinde güven kaybına uğrar. Bu nedenle uzmanın, kontrol öncesinde görev alacağı yapıyla ilişkisini kendisi sorgulaması beklenir." },
      { tip: "h2", id: "bilimsel-veri", metin: "Rapor hangi verilere dayanmalıdır?" },
      { tip: "p", metin: "Uzmanın görevini yalnızca uzmanlık alanındaki bilimsel verilere göre yürütmesi istenir. Raporlarda uzmanlık, özel veya teknik bilgi gerektiren hususlar dışında açıklama yapılmaz, nitelendirme ve değerlendirmede bulunulmaz. Rapor bu yönüyle bir bilirkişi raporuna benzer: tespitler teknik dayanağıyla yazılır, kişisel kanaat ya da hukuki nitelendirme raporun konusu yapılmaz." },
      { tip: "h2", id: "kamu-etigi", metin: "Kamu görevlileri etik ilkeleri uzmana uygulanır mı?" },
      { tip: "p", metin: "Uzman kamu görevlisi değildir; ancak göreviyle bağdaştığı ölçüde Kamu Görevlileri Etik Davranış İlkeleri ile Başvuru Usul ve Esasları Hakkında Yönetmelik'teki etik ilkelere uyması istenir. Uzman kamu adına bir kontrol yaptığı için, kamu görevlilerinden beklenen etik standartlar uzmana da yansıtılır." },
      { tip: "h2", id: "denetim-yaptirim", metin: "İlkelere uyulup uyulmadığı nasıl denetlenir?" },
      { tip: "p", metin: "Mahalli itfaiye teşkilatı, görev yapan uzmanların tutum ve davranışlarını kendiliğinden ya da bir başvuru üzerine denetler. Uygunsuzluk tespit edilirse dayanak belgeleriyle Bakanlığa bildirilir. Taslağın 8. maddesindeki sorumlulukları yerine getirmeyen uzmanın yetki belgesi Bakanlıkça iptal edilir; iptalden sonra beş yıl yeniden yetki verilmez." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 8/1: Yetkinlik, etik ilkelere bağlılık ve mesleki özen",
      "Yönetmelik Taslağı Madde 8/2-b ve f: Rapor dili ve kamu etiği",
      "Yönetmelik Taslağı Madde 22: Denetim",
      "Yönetmelik Taslağı Madde 28/2–3: Bildirim ve iptal",
      "Yönetmelik Taslağı Madde 13/7: İptal sonrası yeniden yetkilendirme"
    ]
  },
  {
    kategori: "meslek-etigi",
    yol: "ygu-hangi-durumlarda-gorev-alamaz",
    baslik: "YGU Hangi Durumlarda Görev Alamaz? Çıkar Çatışması ve Akrabalık",
    ozet: "Uzman; yapım, tasarım, danışmanlık, fenni mesuliyet, denetim veya malzeme satışı yaptığı yapılarda, akrabalarının ve iş ilişkisinin bulunduğu kişilerin yapılarında görev alamaz. Akrabalık derecelerinin anlamı ve örnek durumlar.",
    ozetle: "Yangın güvenlik uzmanı; yapım, tasarım, danışmanlık, fenni mesuliyet, denetim, malzeme satışı ve benzeri ticari faaliyette bulunduğu proje ve yapılarda görev alamaz. Kendisini, üçüncü dereceye kadar kan ve ikinci dereceye kadar kayın hısımlarını, evlatlıklarını veya iş ilişkisi bulunan kişi ve kuruluşları ilgilendiren yapılarda da görev üstlenemez.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Bir binanın yangın tedbirlerini kontrol eden kişinin, o binanın projesinde, yapımında ya da malzeme tedarikinde çıkarı bulunmamalıdır. Taslağın 8. maddesinin ikinci fıkrasında bu ilke somut yasaklara dönüştürülür. Yasaklar iki grupta toplanır: ticari ilişki ve yakınlık ilişkisi." },
      { tip: "h2", id: "ticari", metin: "Hangi ticari faaliyetler görev almaya engel olur?" },
      { tip: "p", metin: "Uzman, görevi süresince aşağıdaki faaliyetlerde bulunduğu projelerde veya yapılarda görev alamaz:" },
      {
        tip: "tablo",
        basliklar: ["Faaliyet", "Örnek durum"],
        satirlar: [
          ["Yapım", "Yapının inşaatında ya da yangın tesisatının montajında yüklenici olarak çalışmak"],
          ["Tasarım", "Yapının yangın, tahliye, algılama veya söndürme projesini çizmek"],
          ["Danışmanlık", "Yapı sahibine yangın güvenliği konusunda danışmanlık vermek"],
          ["Fenni mesuliyet", "Yapının fenni mesulü olmak"],
          ["Denetim", "Yapı denetimi ya da benzeri bir denetim görevinde bulunmak"],
          ["Malzeme satışı", "Yapıdaki yangın kapısı, dedektör, sprinkler gibi ürünleri satmak"]
        ]
      },
      { tip: "p", metin: "Listenin sonunda “ve benzeri ticari faaliyetler” ifadesi yer alır. Bu nedenle sayılanlarla sınırlı kalınmaz; bakım sözleşmesi, periyodik muayene hizmeti gibi yapıyla süreklilik taşıyan ticari ilişkiler de aynı mantıkla değerlendirilir." },
      { tip: "h2", id: "akrabalik", metin: "Akrabalık yasağı hangi dereceleri kapsar?" },
      { tip: "p", metin: "Uzman; kendisini, üçüncü dereceye kadar kan hısımlarını, ikinci dereceye kadar kayın hısımlarını ve evlatlıklarını ilgilendiren ya da iş ilişkisi bulunan kişi, kurum veya kuruluşların taraf olduğu veya ilgili bulunduğu proje ve yapılarda görev alamaz." },
      {
        tip: "tablo",
        basliklar: ["Derece", "Kapsanan yakınlar"],
        satirlar: [
          ["Kan hısımlığı, 1. derece", "Anne, baba, çocuk"],
          ["Kan hısımlığı, 2. derece", "Kardeş, büyükanne, büyükbaba, torun"],
          ["Kan hısımlığı, 3. derece", "Amca, dayı, hala, teyze, yeğen"],
          ["Kayın hısımlığı, 1. derece", "Eşin anne ve babası, eşin çocukları"],
          ["Kayın hısımlığı, 2. derece", "Eşin kardeşleri, eşin büyükanne ve büyükbabası"],
          ["Evlatlık", "Evlat edinilen kişiler"]
        ]
      },
      { tip: "p", metin: "Tablo, Türk Medeni Kanunu'ndaki genel hısımlık derecelendirmesine göre hazırlanmıştır ve kuralın kapsamını göstermek amacı taşır." },
      { tip: "h2", id: "is-iliskisi", metin: "İş ilişkisi ne anlama gelir?" },
      { tip: "p", metin: "Taslakta iş ilişkisinin türü sınırlanmaz. Uzmanın çalıştığı ya da çalışmış olduğu bir şirketin, düzenli hizmet verdiği bir müşterinin veya ortaklık ilişkisi bulunan bir kuruluşun taraf olduğu yapılar bu kapsamda değerlendirilir. Örneğin bir fabrikada iş güvenliği uzmanı olarak çalışan kişinin aynı fabrikanın periyodik kontrolünde görev alması bu kurala takılır." },
      { tip: "h2", id: "ne-yapilir", metin: "Engel durumunda uzman ne yapar?" },
      { tip: "p", metin: "Uzman, görev kendisine verildiğinde ya da belgeler teslim edildiğinde, görevden çekilmeyi haklı kılacak bir mazeretini en geç 2 iş günü içinde mahalli itfaiye teşkilatına bildirmek zorundadır. Çıkar çatışması bu mazeretlerin başında gelir. Görev başkasına devredilemeyeceği için uzmanın kendi yerine birini önermesi değil, durumu itfaiyeye bildirmesi beklenir." },
      { tip: "h2", id: "menfaat", metin: "Uzman hediye veya menfaat kabul edebilir mi?" },
      { tip: "p", metin: "Hayır. Uzman, görev, unvan ve yetkilerini kullanarak kendisi, yakınları veya üçüncü kişiler lehine menfaat sağlayamaz, hediye alamaz ve aracılıkta bulunamaz. Üstlendiği işlerin sahiplerine hizmet bedeli dışında haksız bir mali külfet de getiremez. Bedel itfaiye hesabı üzerinden ödendiği için bina tarafının uzmana doğrudan ödeme yapması öngörülmez." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 8/2-a: Ticari faaliyet yasağı",
      "Yönetmelik Taslağı Madde 8/2-ç: Akrabalık ve iş ilişkisi",
      "Yönetmelik Taslağı Madde 8/2-d: Menfaat ve hediye yasağı",
      "Yönetmelik Taslağı Madde 21/3: Mazeretin 2 iş günü içinde bildirilmesi",
      "Yönetmelik Taslağı Madde 27/3–4: Bedelin itfaiye üzerinden ödenmesi"
    ]
  },
  {
    kategori: "meslek-etigi",
    yol: "ygu-gizlilik-ve-gorevin-devredilmemesi",
    baslik: "YGU'nun Gizlilik Yükümlülüğü ve Görevi Başkasına Devredememesi",
    ozet: "Uzman görevini bizzat yürütür, kısmen de olsa başkasına devredemez. Görev sırasında öğrenilen bilgi ve sırların gizliliği görev bittikten sonra da sürer. Raporlarda yorum sınırı.",
    ozetle: "Yangın güvenlik uzmanı yürüttüğü görevi bizzat yerine getirmekle yükümlüdür; görevin icrası kısmen veya tamamen başka birine devredilemez. Görevi sebebiyle kendisine verilen bilgi ve belgelerin ve öğrendiği sırların gizliliği sağlanır ve bu yükümlülük uzmanlık görevi sona erdikten sonra da devam eder.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol sırasında uzman, bir binanın projelerine, güvenlik zaafiyetlerine, kullanıcı yüküne ve bazen ticari sırlarına erişir. Taslakta bu erişimin sınırları iki kuralla çizilir: görevin kişiye bağlı olması ve öğrenilenlerin gizli tutulması." },
      { tip: "h2", id: "devir", metin: "YGU görevini başkasına devredebilir mi?" },
      { tip: "p", metin: "Hayır. Uzman yürüttüğü görevi bizzat yerine getirmekle yükümlüdür ve görevin icrasını kısmen veya tamamen başka bir kimseye devredemez. Bu kural, kontrolün kayıtta adı geçen uzman tarafından yapılmasını güvence altına alır. Yetki belgesi kişiye özgü verildiği için başka birinin sahada kontrol yapıp raporun belge sahibince imzalanması bu kuralla bağdaşmaz." },
      { tip: "p", metin: "Kuralın istisnası itfaiyenin takdirine bırakılır. Yapının türü, büyüklüğü ve tedbirleri dikkate alınarak aynı iş için birden fazla uzman görevlendirilebilir. Yüksek tehlikeli yapılarda ise YGU-3 ile YGU-K'nin birlikte görev yapması zaten öngörülür. Bu durumlarda iş devredilmiş sayılmaz; her uzman kendi görevlendirmesiyle çalışır." },
      { tip: "h2", id: "sirket", metin: "Şirket bünyesinde çalışan uzman için durum farklı mıdır?" },
      { tip: "p", metin: "Özel hukuk tüzel kişileriyle protokol yapılabilmesi için uzmanların şirkette istihdam edilmesi, görev alacak uzmanların protokolde belirtilmesi ve hizmetin bu uzmanlar tarafından gerçekleştirilmesi gerekir. Şirket, protokolde adı geçmeyen birini sahaya gönderemez; görev yine protokolde belirtilen uzmanca bizzat yürütülür." },
      { tip: "h2", id: "gizlilik", metin: "Gizlilik yükümlülüğü neleri kapsar?" },
      { tip: "p", metin: "Görevi sebebiyle uzmana teslim edilen bilgi ve belgelerin ve görev sırasında öğrenilen sırların gizliliğinin sağlanması zorunludur. Onaylı projeler, yapının güvenlik düzeni, depolanan maddelerin türü ve miktarı, tespit edilen eksiklikler bu kapsamdadır. Yükümlülük uzmanlık görevi sona erdikten sonra da devam eder; belgenin süresinin dolması ya da iptal edilmesi gizlilik borcunu ortadan kaldırmaz." },
      { tip: "h2", id: "rapor-dagitimi", metin: "Gizlilik raporun paylaşılmasına engel olur mu?" },
      { tip: "p", metin: "Olmaz. Yangın güvenlik raporu itfaiyede arşivlenir, ilgili idareye gönderilir, yönetici veya yapı sahibine tebliğ edilir ve yapının görünür bir yerine asılır. Bu dağıtım yönetmeliğin öngördüğü bir işlemdir. Gizlilik yükümlülüğü, bu resmî kanallar dışında bilginin üçüncü kişilerle paylaşılmasını yasaklar." },
      { tip: "h2", id: "rapor-dili", metin: "Raporlarda uzmanın yorum sınırı nedir?" },
      { tip: "p", metin: "Uzman raporlarında uzmanlık, özel veya teknik bilgi gerektiren hususlar dışında açıklama yapamaz; nitelendirme ve değerlendirmede bulunamaz. Örneğin bir eksikliğin hangi kanuna göre suç oluşturduğu ya da sorumlunun kim olduğu gibi hukuki değerlendirmeler rapora yazılmaz. Raporda eksiklik, dayanağı ve teknik açıklaması yer alır." },
      { tip: "h2", id: "ihlal", metin: "Bu kurallara uyulmazsa ne olur?" },
      { tip: "p", metin: "Görevin devredilmemesi, gizlilik ve rapor dili, taslağın 8. maddesinde düzenlenen sorumluluklar arasında yer alır. Bu sorumlulukları yerine getirmeyen uzmanın yetki belgesi Bakanlıkça iptal edilir. Gizliliğin ihlali ayrıca genel hükümlere göre hukuki ve cezai sorumluluk doğurabilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 8/2-b, c ve e: Rapor dili, bizzat görev ve gizlilik",
      "Yönetmelik Taslağı Madde 20/4: Özel hukuk tüzel kişileriyle protokol",
      "Yönetmelik Taslağı Madde 21/2: Birden fazla uzman görevlendirilmesi",
      "Yönetmelik Taslağı Madde 24/2: Raporun dağıtımı",
      "Yönetmelik Taslağı Madde 28/3: İptal"
    ]
  },
  {
    kategori: "meslek-etigi",
    yol: "ygu-ya-uygulanan-yaptirimlar",
    baslik: "YGU'ya Hangi Yaptırımlar Uygulanır? Uyarı, Askıya Alma ve İptal",
    ozet: "Görevini mevzuata uygun yapmayan uzmana önce uyarı verilir, üçüncü uyarıda belge iptal edilir. Etik kuralların ihlali ve İmar Kanunu yaptırımı doğrudan iptal sebebidir. Askıya alma, itiraz ve yeniden yetkilendirme.",
    ozetle: "Onaylı projelerdeki aykırılığı bildirmeyen uzmana itfaiyenin bildirimi üzerine ilgili idarece İmar Kanunu'nun 42. maddesine göre yaptırım uygulanır ve bu uzmanın yetki belgesi Bakanlıkça iptal edilir. Etik sorumlulukları yerine getirmeyen uzmanın belgesi de iptal edilir. Diğer aykırılıklarda birinci fiilde uyarı verilir, üçüncü uyarıda belge iptal edilir. İptalden sonra beş yıl, ikinci iptalden sonra hiçbir zaman yeniden yetki verilmez.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yetki ile sorumluluk birlikte düzenlenir. Taslağın sekizinci bölümünde yangın güvenlik uzmanlarına uygulanacak idari yaptırımlar kademeli bir yapıda sayılır. Kademeler, aykırılığın ağırlığına göre uyarıdan kalıcı yetki kaybına kadar uzanır." },
      { tip: "h2", id: "tablo", metin: "Hangi aykırılığa hangi yaptırım uygulanır?" },
      {
        tip: "tablo",
        basliklar: ["Aykırılık", "Yaptırım"],
        satirlar: [
          ["Onaylı projelerdeki aykırılığın bildirilmeyerek görevin yerine getirilmemesi", "İlgili idarece İmar Kanunu Md. 42'ye göre yaptırım + yetki belgesinin iptali"],
          ["Etik sorumlulukların (Madde 8) yerine getirilmemesi", "Yetki belgesinin iptali"],
          ["Diğer mevzuata aykırı görev yapma — birinci fiil", "Uyarı cezası"],
          ["Diğer mevzuata aykırı görev yapma — üçüncü uyarı", "Yetki belgesinin iptali"],
          ["Belgenin süresinde yenilenmemesi", "Yenilenene kadar askıya alma"],
          ["Bakanlıkça zorunlu tutulan eğitime katılmama", "Eğitim tamamlanana kadar askıya alma"]
        ]
      },
      { tip: "h2", id: "imar", metin: "İmar Kanunu yaptırımı hangi durumda uygulanır?" },
      { tip: "p", metin: "Mevzuata uygun olarak onaylanan algılama, söndürme ve tahliye projeleri ile yangın güvenliği tedbirlerinin gösterildiği diğer projelerdeki aykırılığı bildirmeyerek görevini yerine getirmeyen bir uzman tespit edilirse, durum itfaiye tarafından ilgili idareye bildirilir. İlgili idare, 3194 sayılı İmar Kanunu'nun idari müeyyidelere ilişkin 42. maddesine göre yaptırım uygular. Yaptırım uygulanan uzmanın bilgileri 15 iş günü içinde Bakanlığa bildirilir ve belgesi Bakanlıkça iptal edilir." },
      { tip: "h2", id: "uyari", metin: "Uyarı cezası nasıl işler?" },
      { tip: "p", metin: "İptal sebepleri dışında kalan ve itfaiyece tespit edilen mevzuata aykırı görev yapma hâllerinde uzmana birinci fiilinde uyarı cezası verilir. Üçüncü kez uyarı cezası verildiğinde yetki belgesi iptal edilir. Uyarıların dosyası komisyonca takip edilir; itfaiyenin raporu bu sürecin başlangıç noktasıdır." },
      { tip: "h2", id: "tespit", metin: "Aykırılık nasıl tespit edilir?" },
      { tip: "p", metin: "Mahalli itfaiye teşkilatı, uzmanların görevle ilgili tutum ve davranışlarını ve hazırladıkları raporların mevzuata uygunluğunu kendiliğinden veya bir başvuru üzerine denetler. Aykırılık tespit edilirse dayanak bilgi ve belgeleriyle Bakanlığa bildirilir. Uyarı, askıya alma ve iptal işlemlerinin takibi komisyonun görevleri arasında sayılır." },
      { tip: "h2", id: "sonrasi", metin: "Yetki belgesi iptal edilen uzmanın işleri ne olur?" },
      { tip: "p", metin: "Yetkinin iptali ya da askıya alınması durumunda, bu tarihten önce verilen işin devamı niteliğindeki işlemler itfaiye veya başka bir uzman tarafından yürütülür. Tamamlanmamış periyodik kontrollerin bedelinden protokole göre kesinti yapılır ve işi devralan uzmana ödenir. Protokol de uzmanın yetkisinin iptaliyle kendiliğinden sona erer." },
      { tip: "h2", id: "yeniden", metin: "İptalden sonra yeniden YGU olunabilir mi?" },
      { tip: "p", metin: "Yetki belgesi iptal edilen uzmana, iptal tarihinden itibaren beş yıl boyunca yeniden yetki verilmez. Belgesi ikinci kez iptal edilen uzman ise bir daha yetkilendirilmez. Askıya alma ise süreli bir tedbirdir; yenileme yapıldığında ya da eğitim tamamlandığında yetki yeniden kullanılabilir." },
      { tip: "h2", id: "itiraz", metin: "Yaptırımlara nasıl itiraz edilir?" },
      { tip: "p", metin: "Uzmanlara uygulanan idari yaptırımlara karşı itirazlar ilgili mahkemeye yapılır. Askıya alınan ve iptal edilen uzmanlar Bakanlığın resmî internet sayfasında duyurulduğu için itiraz süreci de bu duyuruyla birlikte takip edilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 28: İdari yaptırımlar",
      "Yönetmelik Taslağı Madde 13/4–7: Askıya alma ve iptal",
      "Yönetmelik Taslağı Madde 18/4-ç: Komisyonun yaptırım takibi",
      "Yönetmelik Taslağı Madde 20/3 ve 27/6: İşin devri ve kesinti",
      "Yönetmelik Taslağı Madde 22: Denetim"
    ]
  },
  {
    kategori: "meslek-etigi",
    yol: "ygu-etik-disi-talep-bildirim",
    baslik: "Yangın Güvenlik Uzmanına Hukuka Aykırı Bir Talep Gelirse Ne Yapılır?",
    ozet: "Etik dışı ya da hukuka aykırı bir iş istendiğinde veya görev sırasında böyle bir durum öğrenildiğinde uzmanın bunu itfaiyeye bildirmesi zorunludur. Bildirim yükümlülüğünün kapsamı ve uygulamada karşılaşılabilecek örnekler.",
    ozetle: "Yangın güvenlik uzmanından etik ilkelerle bağdaşmayan veya hukuka aykırı bir iş ya da eylem talep edilirse ya da uzman görevini yaparken böyle bir eylem veya işlemden haberdar olursa, durumu mahalli itfaiye teşkilatına bildirir. Bu bildirim taslağın 8. maddesinde sayılan bir sorumluluktur; yerine getirilmemesi yetki belgesinin iptaline yol açabilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrolün sonucunda bir binanın “uygun” ya da “uygun değil” sayılması, bina tarafı için maliyet ve sorumluluk doğurur. Bu nedenle uzmanın, sonucu etkilemeye yönelik taleplerle karşılaşması ihtimal dışı değildir. Taslakta bu durum için açık bir davranış kuralı öngörülür." },
      { tip: "h2", id: "kural", metin: "Bildirim yükümlülüğü ne zaman doğar?" },
      { tip: "p", metin: "Taslağın 8. maddesinin birinci fıkrasında iki durum sayılır. Birincisi, etik ilkelerle bağdaşmayan veya hukuka aykırı iş ve eylemlerde bulunmasının uzmandan talep edilmesidir. İkincisi, uzmanın görevini yerine getirirken bu tür bir eylem veya işlemden haberdar olmasıdır. Her iki durumda da uzman durumu mahalli itfaiye teşkilatına bildirir." },
      { tip: "h2", id: "ornekler", metin: "Hangi durumlar bildirim gerektirir?" },
      {
        tip: "tablo",
        basliklar: ["Örnek durum", "Değerlendirme"],
        satirlar: [
          ["Bir eksikliğin rapora yazılmaması için menfaat teklif edilmesi", "Hukuka aykırı talep; uzman hediye ve menfaat kabul edemez, durum itfaiyeye bildirilir"],
          ["Kontrol günü için geçici olarak kaçış yollarının boşaltılıp sonra yeniden kapatılacağının öğrenilmesi", "Görev sırasında öğrenilen aykırılık; bildirilir ve tespit edilen durum rapora yansıtılır"],
          ["Muayene belgesinin sahte olduğundan şüphelenilmesi", "Hukuka aykırı işlem; itfaiyeye bildirilir"],
          ["Uzmana, projesini çizdiği binanın kontrolünün teklif edilmesi", "Görev alınamayacak durum; mazeret 2 iş günü içinde itfaiyeye bildirilir"]
        ]
      },
      { tip: "p", metin: "Tablodaki örnekler kuralın uygulanış biçimini göstermek için hazırlanmıştır. Somut bir olayın hukuki niteliği ilgili mercilerce değerlendirilir; uzmana düşen görev bildirimdir." },
      { tip: "h2", id: "neden-itfaiye", metin: "Bildirim neden itfaiyeye yapılır?" },
      { tip: "p", metin: "Uzman, itfaiyenin görevlendirmesiyle ve itfaiye ile imzaladığı protokol çerçevesinde çalışır. Uzmanların tutum ve davranışlarını denetleme yetkisi de itfaiyeye verilmiştir. Bu nedenle sahada karşılaşılan aykırılığın ilk bildirileceği yer, görevi veren ve süreci denetleyen kurum olarak itfaiye belirlenmiştir. İtfaiye, gerekli gördüğü durumlarda konuyu Bakanlığa ya da ilgili idareye taşır." },
      { tip: "h2", id: "rapora-yansima", metin: "Bildirim yapılması raporu değiştirir mi?" },
      { tip: "p", metin: "Bildirim, raporun yerine geçmez. Uzman, kontrol sırasında tespit ettiği eksiklik ve uygunsuzlukları EK-6 formunda işaretler ve EK-7 raporunda gösterir. Hukuka aykırı bir talebin reddedilmesi ve bildirilmesi, raporun bilimsel verilere ve mevzuata göre hazırlanması ilkesinin bir parçası olarak görülür." },
      { tip: "h2", id: "sonuc", metin: "Bildirim yapılmazsa ne olur?" },
      { tip: "p", metin: "Bildirim yükümlülüğü, 8. maddede düzenlenen sorumluluklar arasındadır. Bu sorumlulukları yerine getirmeyen uzmanın yetki belgesi Bakanlıkça iptal edilir. Ayrıca aykırılığın niteliğine göre genel hükümlerden doğan sorumluluk da gündeme gelebilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 8/1-ç: Hukuka aykırı taleplerin bildirilmesi",
      "Yönetmelik Taslağı Madde 8/2-d: Menfaat ve hediye yasağı",
      "Yönetmelik Taslağı Madde 21/3: Mazeret bildirimi",
      "Yönetmelik Taslağı Madde 22 ve 28/3: Denetim ve iptal"
    ]
  }
]
