// YGU Hakkında › Merak Edilenler makaleleri. Kaynak: YGU Yönetmelik Taslağı (Md. 6, 20, 21, 25–27) ve EK-1, EK-3, EK-8, EK-9.
// Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil; genel kurallar geniş zaman, gelecekteki
// olaylar gelecek zaman (kullanıcı 18 Ekim). Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const MERAK_MAKALELERI: YguMakale[] = [
  {
    kategori: "merak-edilenler",
    yol: "itfaiye-ygu-gorevlendirmesi-ve-protokol",
    baslik: "Bina Sahibi YGU'yu Seçebilir mi? İtfaiyenin Uzman Görevlendirmesi ve Protokol",
    ozet: "Uzman bina sahibi tarafından değil, mahalli itfaiye teşkilatı tarafından, protokol çerçevesinde görevlendirilir. Protokolün tarafları, görevlendirmenin KEP ile bildirilmesi ve uzmanın 2 iş günlük mazeret süresi.",
    ozetle: "Bina sahibi ya da yönetici yangın güvenlik uzmanını seçemez. Mahalli itfaiye teşkilatı, personelinin yeterliliği, sayısı ve iş yoğunluğunu dikkate alarak gerekli gördüğünde EK-3'teki protokolle uzmanlardan hizmet alır ve görevi KEP üzerinden bildirir. Uzman, ihtiyaçlarını veya görevden çekilmeyi gerektiren mazeretini en geç 2 iş günü içinde itfaiyeye bildirir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Periyodik kontrol için bir uzmanla doğrudan anlaşılıp anlaşılamayacağı, bina yöneticilerinin sık sorduğu sorulardandır. Taslakta bu ilişki bilinçli olarak dolaylı kurulur: uzman ile bina arasında itfaiye bulunur." },
      { tip: "h2", id: "secim", metin: "Bina sahibi uzmanı kendisi seçebilir mi?" },
      { tip: "p", metin: "Hayır. Periyodik kontrol başvurusu itfaiyeye yapılır ve kontrolün itfaiye personeli tarafından mı yoksa bir uzman tarafından mı yapılacağına itfaiyece karar verilir. Uzman görevlendirilecekse, görev itfaiyenin protokol imzaladığı uzmanlar arasından verilir. Bedel de itfaiye hesabına yatırılır; uzmana ödeme itfaiye üzerinden yapılır. Bu yapı, kontrolü yapan kişi ile kontrol edilen yapı arasında ticari bir bağ kurulmasının önüne geçmek üzere tasarlanmıştır." },
      { tip: "h2", id: "ne-zaman", metin: "İtfaiye hangi durumda uzmandan hizmet alır?" },
      { tip: "p", metin: "Mahalli itfaiye teşkilatı, bünyesindeki personelin mesleki yeterliliğini, sayısını ve iş yoğunluğunu göz önünde bulundurarak gerekli gördüğü durumda uzmanlardan hizmet alabilir. Hizmet alımı zorunlu değildir; itfaiyeye bütün yapılarda kontrol yapma ve uygunluk görüşü verme yetkisi tanınır. Uzmanlar itfaiyenin kapasitesini destekleyen bir unsur olarak konumlandırılır." },
      { tip: "h2", id: "protokol", metin: "Protokol kimler arasında imzalanır?" },
      { tip: "p", metin: "Protokol, mahalli itfaiye teşkilatı ile uzman arasında imzalanır. İtfaiye adına belediye başkanı veya başkanın görevlendireceği yönetici imza atar. Protokolde tarafların adresleri ve KEP adresleri, hizmet bedeli, ödeme esasları, süre, fesih ve bildirim yükümlülükleri yer alır. KEP adresine yapılan tebligat geçerli tebligatın bütün hukuki sonuçlarını doğurur." },
      {
        tip: "tablo",
        basliklar: ["Protokol maddesi (EK-3)", "İçerik"],
        satirlar: [
          ["Konu", "Uygunluk görüşü, periyodik kontrol ve tatbikat planlaması hizmetleri ile itfaiyeye bildirim görevi"],
          ["Hizmet bedeli", "Belediyece belirlenen bedeller; itfaiye işlem payı bedelin %5'i"],
          ["Ödeme", "Hizmet tamamlandıktan sonra en geç 10 iş günü içinde uzmanın hesabına"],
          ["Süre", "Taraflarca belirlenen süre; bitime bir ay kala aksi bildirilmezse uzar"],
          ["Fesih", "Uzmanın yetkisi iptal edilirse protokol kendiliğinden sona erer"]
        ]
      },
      { tip: "h2", id: "gorevlendirme", metin: "Görevlendirme nasıl yapılır?" },
      { tip: "p", metin: "İtfaiye, protokol imzaladığı uzmana görevin türünü, süresini ve kontrol veya görüş için gerekli belgelerin teslim tarihini KEP yoluyla bildirir. Fiziki olarak verilecek belgeler imza karşılığı teslim edilir. Yapının türü, özelliği, büyüklüğü, yangın tedbirleri ve hizmet süresi dikkate alınarak aynı iş için birden fazla uzman görevlendirilebilir." },
      { tip: "h2", id: "mazeret", metin: "Uzman görevi reddedebilir mi?" },
      { tip: "p", metin: "Uzman, işi süresinde ve yönetmeliğe uygun tamamlamak için ihtiyaç duyduğu hususları ya da görevden çekilmeyi haklı kılacak bir mazeretini, görevin verildiği veya belgelerin teslim edildiği tarihten itibaren en geç 2 iş günü içinde itfaiyeye bildirmek zorundadır. Çıkar çatışması ve akrabalık gibi görev alınamayacak durumlar bu mazeretlerin başında gelir." },
      { tip: "h2", id: "yetki-kaybi", metin: "Uzmanın yetkisi biterse yarım kalan iş ne olur?" },
      { tip: "p", metin: "Uzmanın yetkisinin iptal edilmesi, askıya alınması ya da protokolün feshedilmesi hâlinde, bu tarihten önce verilen işin devamı niteliğindeki işlemler itfaiye veya başka bir uzman tarafından yürütülür. Bina tarafı için yeni bir başvuru ya da ek ödeme öngörülmez." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 20: Protokol esasları",
      "Yönetmelik Taslağı Madde 21: Görevlendirme esasları",
      "Yönetmelik Taslağı Madde 27/3–4: Bedelin itfaiye hesabına yatırılması ve uzmana ödenmesi",
      "Yönetmelik Taslağı EK-1 Not 1: İtfaiyenin yetkisi",
      "Yönetmelik Taslağı EK-3: Protokol örneği"
    ]
  },
  {
    kategori: "merak-edilenler",
    yol: "ygu-sirket-uzerinden-calisabilir-mi",
    baslik: "YGU Şirket Üzerinden Çalışabilir mi? Özel Hukuk Tüzel Kişileriyle Protokol",
    ozet: "İtfaiye, YGU istihdam eden şirketlerle de protokol yapabilir. Bunun şartları: uzmanların istihdam edilmesi, protokolde isimlerinin yer alması ve hizmetin bizzat bu uzmanlarca verilmesi.",
    ozetle: "Taslakta itfaiyenin özel hukuk tüzel kişileriyle de protokol yapabileceği öngörülür. Bunun için şirketin yangın güvenlik uzmanı istihdam etmesi, protokol kapsamında görev alacak uzmanların protokolde belirtilmesi ve hizmetin bu uzmanlar tarafından gerçekleştirilmesi gerekir. Uzmanın bağımsızlığı, kendi işverenine karşı da korunur.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Uzmanlık belgesi kişiye verilir; ancak sahada hizmetin bir şirket çatısı altında örgütlenmesi de mümkündür. Taslağın 20. maddesinde bu ihtimal açıkça düzenlenir ve birkaç şarta bağlanır." },
      { tip: "h2", id: "mumkun-mu", metin: "İtfaiye bir şirketle protokol yapabilir mi?" },
      { tip: "p", metin: "Evet. Özel hukuk tüzel kişileriyle de protokol yapılabilir. Bunun için üç şart birlikte aranır: şirketin yangın güvenlik uzmanı istihdam etmesi, protokol kapsamında görev alacak uzmanların protokolde adlarıyla belirtilmesi ve hizmetin bu uzmanlar tarafından gerçekleştirilmesi." },
      { tip: "h2", id: "bizzat", metin: "Şirket herhangi bir çalışanını kontrole gönderebilir mi?" },
      { tip: "p", metin: "Gönderemez. Protokolde adı geçmeyen bir kişinin kontrole gönderilmesi bu şartlarla bağdaşmaz. Uzmanın görevi bizzat yürütme yükümlülüğü şirket bünyesinde de geçerlidir; görevin kısmen veya tamamen başkasına devredilmesi yasaktır. Ayrıca kontrolü yapan uzmanın, yapı için öngörülen seviyede yetki belgesine sahip olması gerekir." },
      { tip: "h2", id: "bagimsizlik", metin: "Şirket çalışanı olan uzman bağımsız sayılır mı?" },
      { tip: "p", metin: "Taslakta uzmanın görev aldığı merciye ve kendi işverenine karşı bağımsız olduğu açıkça belirtilir. Uzmanı istihdam eden şirket raporun içeriğine müdahale edemez; rapor yalnızca bilimsel verilere ve mevzuata göre hazırlanır. Şirketin ya da şirket ortaklarının ticari ilişki içinde bulunduğu yapılar da uzmanın iş ilişkisi kapsamında değerlendirilir ve bu yapılarda görev alınmaz." },
      { tip: "h2", id: "ticari-faaliyet", metin: "Yangın sistemleri satan bir firma YGU istihdam edebilir mi?" },
      { tip: "p", metin: "Taslakta böyle bir firmanın uzman istihdam etmesi yasaklanmaz; ancak uzman, yapım, tasarım, danışmanlık, fenni mesuliyet, denetim, malzeme satışı ve benzeri ticari faaliyette bulunduğu yapılarda görev alamaz. Firmanın ürün sattığı, montaj yaptığı ya da projelendirdiği yapılar bu kapsamda değerlendirileceğinden, bu tür firmalarda çalışan uzmanların görev alabileceği yapı yelpazesi daralır." },
      { tip: "h2", id: "serbest", metin: "Uzman kendi adına çalışabilir mi?" },
      { tip: "p", metin: "Evet. Protokol esas olarak itfaiye ile uzman arasında imzalanır; uzmanın bir şirkette istihdam edilmesi zorunlu tutulmaz. Kendi adına çalışan uzman da itfaiyeyle doğrudan protokol imzalayabilir. Serbest çalışmanın diğer yönleri sitedeki Serbest Çalışma sayfasında ele alınır." },
      { tip: "h2", id: "odeme", metin: "Ödeme şirkete mi uzmana mı yapılır?" },
      { tip: "p", metin: "Taslakta ve protokol örneğinde ödemenin itfaiye tarafından, işlem payı ayrıldıktan sonra hizmetin tamamlanıp onaylanmasını müteakip yapılacağı düzenlenir. Şirketle yapılan protokollerde ödemenin muhatabı protokolün tarafıdır; uzmanın şirketle ilişkisi kendi iş sözleşmesine göre yürür." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 20/4: Özel hukuk tüzel kişileriyle protokol",
      "Yönetmelik Taslağı Madde 8/1-b ve 8/2-a, c: Bağımsızlık, ticari faaliyet ve bizzat görev",
      "Yönetmelik Taslağı Madde 27/4: Ödeme",
      "Yönetmelik Taslağı EK-3: Protokol örneği"
    ]
  },
  {
    kategori: "merak-edilenler",
    yol: "ygu-hizmet-bedeli-nasil-odenir",
    baslik: "Yangın Güvenlik Uzmanı Ne Kazanır? Hizmet Bedeli Nasıl Ödenir ve Paylaşılır?",
    ozet: "Uzmanın kazancı, belediyece belirlenen hizmet bedelinden itfaiye işlem payı düşüldükten sonra kalan tutardır. Birden fazla uzmanda paylaşım, YGU-K payı ve yetki kaybında kesinti.",
    ozetle: "Uzmana sabit bir ücret öngörülmez. Bakanlığın ilan ettiği taban ve tavan aralığında ilgili idarenin karar organınca belirlenen hizmet bedeli itfaiye hesabına yatırılır; itfaiye işlem payını (protokol örneğine göre %5) ayırıp kalanı hizmet tamamlanıp onaylandıktan sonra en geç 10 iş günü içinde uzmana öder. Aynı işte birden fazla uzman varsa YGU-1, YGU-2 ve YGU-3 eşit pay alır; YGU-K'ye diğerlerinin %25'i oranında ödenir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığına kariyer olarak bakanların ilk sorularından biri gelir modelidir. Taslakta uzmana sabit bir ücret ya da tarife verilmez; uzmanın kazancı, her yıl yerel düzeyde belirlenen hizmet bedeline bağlanır." },
      { tip: "h2", id: "bedel", metin: "Hizmet bedeli nasıl belirlenir?" },
      { tip: "p", metin: "Bakanlık her yıl, önceki yılın bedellerini ve yeniden değerleme oranını dikkate alarak bir taban ve tavan bedel aralığı ilan eder. İlgili idarenin karar organı bu aralıkta kalmak üzere o yılın bedelini 1 Ocak'tan geçerli olacak şekilde belirler. Bina tarafı, bu tutar ile itfaiye işlem payının toplamını başvurudan önce itfaiye hesabına yatırır." },
      { tip: "h2", id: "uzmana-odeme", metin: "Uzmana ödeme nasıl yapılır?" },
      { tip: "p", metin: "Hizmet bir uzman tarafından gerçekleştirildiğinde itfaiye, yatırılan bedelden işlem payını ayırır ve kalan kısmı hizmetin tamamlanmasını ve onaylanmasını müteakip uzmanın hesabına yatırır. Protokol örneğinde işlem payı hizmet bedelinin yüzde 5'i, ödeme süresi ise en geç 10 iş günü olarak gösterilir. Hizmet için, üstlenildiği yılın bedeli esas alınır." },
      { tip: "h2", id: "paylasim", metin: "Aynı işte birden fazla uzman varsa bedel nasıl paylaşılır?" },
      {
        tip: "tablo",
        basliklar: ["Uzman", "Pay"],
        satirlar: [
          ["YGU-1, YGU-2, YGU-3", "Hizmet bedeli eşit oranda paylaştırılır"],
          ["YGU-K", "Diğer seviyedeki uzmanlara ödenen bedelin %25'i oranında"]
        ]
      },
      { tip: "p", metin: "Örneğin yüksek tehlikeli bir tesiste YGU-3 ile YGU-K birlikte görev yaparsa, YGU-K'ye YGU-3'e ödenen bedelin dörtte biri ödenir. Bu oran, YGU-K'nin görevinin tehlikeli maddelerin tespiti ve sınıflandırılmasıyla sınırlı tutulmasıyla uyumludur." },
      { tip: "h2", id: "uygunluk-kontrolu", metin: "Uygunluk kontrolü için ayrıca ödeme yapılır mı?" },
      { tip: "p", metin: "Uygunluk kontrolleri de bedellidir. Birinci uygunluk kontrolünden sonra yapılacak uygunluk kontrollerinin bedeli, periyodik kontrol bedelini aşmamak kaydıyla ilgili idarece belirlenir. Uygunluk kontrolünün hangi uzman tarafından yapılacağı itfaiyenin görevlendirmesine bağlıdır." },
      { tip: "h2", id: "kesinti", metin: "Uzmanın yetkisi iptal edilirse ödeme ne olur?" },
      { tip: "p", metin: "Yetkisi iptal edilen ya da askıya alınan uzmanın tamamlanmamış periyodik kontrollerinin bedelinden protokole göre kesinti yapılır ve bu kesinti, uygunluk kontrolü için görev alan başka bir uzmana ödenir. Protokol örneğinde, birinci uygunluk kontrolü yapılmamışsa kesinti oranı yüzde 30 olarak gösterilir." },
      { tip: "h2", id: "diger-gorevler", metin: "Uzman başka hangi işlerden gelir elde eder?" },
      { tip: "p", metin: "Protokol kapsamındaki hizmetler periyodik kontrolle sınırlı değildir; proje aşamasındaki ve yapı kullanma izni aşamasındaki uygunluk görüşleri ile tatbikat planlaması da protokolün konusu içinde sayılır. Bu görevler YGU-2 ve YGU-3 seviyesindeki uzmanlara verilebilir. Hizmet bedelleri yerel düzeyde belirlendiği için uzmanın kazancı, çalıştığı bölgedeki bedellere ve itfaiyeden aldığı görev sayısına göre değişir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 27: Bedeller ve ödemeler",
      "Yönetmelik Taslağı EK-3 Madde 5–7: Protokolün konusu, hizmet bedeli ve ödeme",
      "Yönetmelik Taslağı Madde 6: Uzmanın görevleri"
    ]
  },
  {
    kategori: "merak-edilenler",
    yol: "uygunluk-gorusu-nedir",
    baslik: "Uygunluk Görüşü Nedir, Kim Verir? Proje ve İskân Aşamasında YGU",
    ozet: "Uygunluk görüşü; algılama, söndürme ve tahliye projeleri için onay öncesinde ve periyodik kontrole tabi yapılarda yapı kullanma izni aşamasında verilir. EK-9 formu, YGU-2 ve YGU-3'ün rolü ve tasarım gözetimi istisnası.",
    ozetle: "Uygunluk görüşü, ilgili idarenin onayından önce yangın projelerindeki tedbirler için ve EK-1'deki periyodik kontrole tabi yapılarda yapı kullanma izni aşamasında uygulamanın projeye uygunluğu ve test raporlarının varlığı için verilir. Görüş EK-9 formuyla, itfaiye ya da itfaiyenin gerekli gördüğü durumda YGU-2 veya YGU-3 seviyesindeki uzman tarafından hazırlanır. Özellik arz eden binalarda tasarım gözetmenince raporlanan projeler için ayrıca uygunluk görüşü aranmaz.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı çoğunlukla periyodik kontrolle birlikte anılsa da taslakta uzmana binanın daha ilk aşamalarında da görev verilir. Bu görevin adı uygunluk görüşüdür ve projeden iskâna kadar iki ayrı noktada devreye girer." },
      { tip: "h2", id: "iki-asama", metin: "Uygunluk görüşü hangi aşamalarda verilir?" },
      {
        tip: "tablo",
        basliklar: ["Aşama", "Görüşün konusu"],
        satirlar: [
          ["Proje onayı öncesi", "Ayrı olarak hazırlanan algılama, söndürme ve tahliye projeleri ile diğer projelerde gösterilen yangın güvenlik tedbirleri"],
          ["Yapı kullanma izni aşaması", "EK-1'deki periyodik kontrole tabi yapılarda, uygulamanın bu projelere uygun yapılıp yapılmadığı ve sistemlerin çalışır durumda olduğunu gösteren test raporlarının varlığı"]
        ]
      },
      { tip: "p", metin: "Bu iki görüş, periyodik kontrolün de temelini oluşturur. Periyodik kontrolde onaylı projeler esas alındığı ve projelerin mevzuata uygunluğu kontrolün kapsamı dışında tutulduğu için, proje ve iskân aşamasındaki görüşlerin doğruluğu sonraki bütün kontrollerin sağlıklı yürütülmesini etkiler." },
      { tip: "h2", id: "kim-verir", metin: "Uygunluk görüşünü kim hazırlar?" },
      { tip: "p", metin: "Uygunluk görüşü mahalli itfaiye teşkilatı ya da itfaiyenin gerekli gördüğü durumda yangın güvenlik uzmanı tarafından hazırlanır. Uzman görevlendirilecekse, proje ve iskân aşamasındaki görevler YGU-2 veya YGU-3 seviyesindeki uzmanlarca yürütülür; YGU-1'e bu görev verilmez. Uluslararası standartlara göre tasarlanan binalarda ise YGU-2 de görevlendirilmez." },
      { tip: "h2", id: "form", metin: "Uygunluk görüşü hangi formla verilir?" },
      { tip: "p", metin: "Görüş, EK-9'daki Uygunluk Görüş Rapor Formu ile verilir. Formda yapının adresi, ada ve parseli, ruhsat vermeye yetkili idaresi, görüş konusu ve değerlendirmeler yer alır; form tarih, imza, ad soyad ve unvan ya da YGU seviyesiyle tamamlanır. Projede veya yapıda eksiklik ve uygunsuzluk tespit edilirse, bunların hangi mevzuat veya standarda dayandığının belirtilmesi zorunludur." },
      { tip: "h2", id: "aciklama", metin: "İtfaiye görüşü yetersiz bulursa ne olur?" },
      { tip: "p", metin: "İtfaiye, uzmanın hazırladığı uygunluk görüşünde eksik ya da anlaşılamayan bir husus tespit ederse uzmandan açıklama ister. Uzman tarafından en geç 5 iş günü içinde yazılı açıklama yapılması gerekir. Görüşün bir nüshası itfaiyede arşivlenir, bir nüshası ilgili idareye gönderilir ve uzman görev aldıysa bir nüsha uzmanda saklanır." },
      { tip: "h2", id: "istisna", metin: "Hangi binalarda ayrıca uygunluk görüşü aranmaz?" },
      { tip: "p", metin: "Özellik Arz Eden Binaların Tasarım Gözetimi ve Kontrolü Hizmetlerine Dair Yönetmelik kapsamında tasarım gözetmeni tarafından yangın tedbirleri açısından raporlanan projeler için ayrıca uygunluk görüşü aranmaz. Bu binalarda yangın tasarımının değerlendirmesi zaten tasarım gözetimi sürecinde yapıldığı için mükerrer bir inceleme öngörülmemiştir." },
      { tip: "h2", id: "yururluk", metin: "Uygunluk görüşü hükümleri ne zaman uygulanacak?" },
      { tip: "p", metin: "Taslakta uygunluk görüşüne ve tatbikata ilişkin hükümlerin yürürlük tarihi, yangından korunma yönetmeliğine ilişkin yeni düzenlemenin yürürlük tarihine göre belirlenecektir. Bu nedenle uygunluk görüşü sistemi, periyodik kontrolden farklı bir takvimle uygulamaya girecektir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 6/1-a, b ve 6/2-a: Uygunluk görüşü görevi ve seviyeler",
      "Yönetmelik Taslağı Madde 26: Uygunluk görüşü verilmesi",
      "Yönetmelik Taslağı Madde 24/4: Proje uygunluğunun periyodik kontrol kapsamı dışında oluşu",
      "Yönetmelik Taslağı Madde 30/1-b: Yürürlük",
      "Yönetmelik Taslağı EK-9: Uygunluk Görüş Rapor Formu"
    ]
  },
  {
    kategori: "merak-edilenler",
    yol: "yangin-tatbikati-ve-ygu",
    baslik: "Yangın Tatbikatı Nasıl Planlanır? YGU'nun Rolü ve Tatbikat Formları",
    ozet: "Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) 134/2 maddesindeki yapılarda tatbikat, yapı tarafının sorumluluğunda itfaiye ve gerekirse YGU ile birlikte planlanır. EK-8 başvuru formu, kontrol listesi, rapor ve başarısız tatbikatın 3 ay içinde tekrarlanması.",
    ozetle: "BYKHY'nin 134. maddesinin ikinci fıkrasında belirtilen yapılarda yangın tatbikatı, yapı sahibi, yönetici ya da en üst yöneticinin görevlendirdiği birim amirinin sorumluluğunda, itfaiye ve gerekli görüldüğünde YGU-2 veya YGU-3 seviyesindeki uzmanla birlikte planlanır. Tatbikatta EK-8 başvuru formu, kontrol listesi ve rapor kullanılır; tatbikat uygun gerçekleşmezse 3 ay içinde tekrarlanır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenliği yalnızca sistemlerden ibaret değildir; bina kullanıcılarının bir yangında nasıl davranacağı da en az sistemler kadar belirleyicidir. Taslakta tatbikat, uzmanın görevleri arasında sayılır ve tatbikatın nasıl belgeleneceği EK-8'de düzenlenir." },
      { tip: "h2", id: "hangi-yapilar", metin: "Hangi yapılarda tatbikat uzmanla birlikte planlanır?" },
      { tip: "p", metin: "Uzmanın tatbikat görevi, BYKHY'nin 134. maddesinin ikinci fıkrasında belirtilen yapılarla sınırlıdır. Bu yapılarda tatbikat, yapı sahibi, yöneticisi veya en üst yönetici tarafından görevlendirilecek birim amirinin sorumluluğunda planlanır. İtfaiye gerekli görürse planlama YGU-2 veya YGU-3 seviyesindeki bir uzmanla birlikte yapılır." },
      { tip: "h2", id: "diger-yapilar", metin: "Diğer yapılarda tatbikat nasıl belgelenir?" },
      { tip: "p", metin: "Bu kapsamın dışındaki yapılarda yapılan tatbikatlarda EK-8 formlarının kullanılması zorunlu tutulmaz. Bununla birlikte tatbikatın yapıldığını gösteren bir belge düzenlenebilir ve periyodik kontrollerde bu belge ibraz edilir. Periyodik kontrol formunun mimari bölümünde tatbikata ilişkin maddeler bulunduğu için bu belge kontrol sırasında önem kazanır." },
      { tip: "h2", id: "formlar", metin: "EK-8 tatbikat formları neleri içerir?" },
      {
        tip: "tablo",
        basliklar: ["Form", "İçerik"],
        satirlar: [
          ["EK-8/A Başvuru formu", "Yapı bilgileri, tatbikatın tam veya kısmi olacağı, acil aydınlatmanın devreye girip girmeyeceği, söndürme, kurtarma, koruma ve ilk yardım ekiplerinin isimleri"],
          ["EK-8/B Kontrol listesi", "Sorumlu kişi, tarih ve saat, tahliye edilen kişi sayısı, tahliye süresi, hava durumu, bildirim yöntemi (sesli, sözlü, ışıklı) ve genel tatbikat esasları"],
          ["Tatbikat raporu", "Tatbikatın sonucu; itfaiyede arşivlenir, yöneticiye veya yapı sahibine tebliğ edilir, uzman görev aldıysa bir nüshası uzmanda kalır"]
        ]
      },
      { tip: "h2", id: "esaslar", metin: "Tatbikatta hangi kurallara uyulur?" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "Öncesinde ekipler bilgilendirilir", metin: "Söndürme, kurtarma, koruma ve ilk yardım ekiplerine uyarı sistemleri, kaçış yolları, toplanma alanı ve tahliyedeki görevleri anlatılır." },
          { baslik: "Otomatik bildirim yapan sistemler haberdar edilir", metin: "Yangın ihbar santrali 112 ile otomatik haberleşirse, alarm panelinin bağlı olduğu şirkete ve itfaiyeye önceden bilgi verilir." },
          { baslik: "Form tahliye tamamlanınca doldurulur", metin: "Binada kimsenin kalmadığı teyit edildikten sonra kontrol formu doldurulur; sorumlu kişi izin vermeden binaya girilmez." },
          { baslik: "Hastanelerde karar birlikte verilir", metin: "Yataklı sağlık yapılarında tahliyenin tam mı kısmi mi yapılacağına hastane idaresiyle birlikte karar verilir." }
        ]
      },
      { tip: "h2", id: "basarisiz", metin: "Tatbikat başarısız olursa ne yapılır?" },
      { tip: "p", metin: "Tatbikatın uygun gerçekleşmemesi hâlinde 3 ay içinde tekrarlanması için itfaiyeye başvurulur. Başvuru, yönetici varsa yönetici, yoksa yapı sahibi veya en üst yöneticinin görevlendirdiği birim amiri tarafından yapılır." },
      { tip: "h2", id: "yururluk", metin: "Tatbikat hükümleri ne zaman uygulanacak?" },
      { tip: "p", metin: "Tatbikata ilişkin hükümler, uygunluk görüşü hükümleriyle birlikte, yangından korunma yönetmeliğine ilişkin yeni düzenlemenin yürürlük tarihine göre belirlenecek tarihte yürürlüğe girecektir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 6/1-ç ve 6/2-a: Tatbikat planlaması",
      "Yönetmelik Taslağı Madde 25: Tatbikat planlanması",
      "Yönetmelik Taslağı EK-8: Tatbikat formları",
      "Yönetmelik Taslağı Madde 30/1-b: Yürürlük"
    ]
  },
  {
    kategori: "merak-edilenler",
    yol: "yuksek-tehlikeli-yapilarda-ygu-k",
    baslik: "Yüksek Tehlikeli Yapılarda Kontrol: YGU-3 ve YGU-K Neden Birlikte Çalışır?",
    ozet: "Yüksek tehlikeli endüstri ve depolama tesisleri ile yüksek tehlikeli yerler 3 yılda bir, YGU-3 ve YGU-K'nin birlikte katılımıyla kontrol edilir. YGU-K'nin görevi, eğitimi ve bedel payı.",
    ozetle: "Yüksek tehlikeli endüstri ve depolama tesisleri ile yüksek tehlikeli yerler 3 yılda bir kontrol edilir ve bu kontroller YGU-3 ile YGU-K seviyesindeki uzmanlar tarafından birlikte gerçekleştirilir. YGU-K'nin görevi tehlikeli maddelerin tespiti ve sınıflandırılmasıdır. YGU-K'ye kimya mühendisleri ve kimya lisans mezunları başvurur; asgari eğitim süresi 35 saattir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Akaryakıt ve gaz tesisleri, kimyasal madde depoları, boya ve çözücü üretilen fabrikalar gibi yapılarda yangın riski yalnızca binanın yapısından değil, içinde tutulan maddelerden kaynaklanır. Taslakta bu yapılar için ayrı bir kontrol düzeni kurulur: süre kısaltılır ve kontrol iki farklı uzmanlık alanından gelen uzmanlara birlikte verilir." },
      { tip: "h2", id: "sure", metin: "Yüksek tehlikeli yapılar kaç yılda bir kontrol edilir?" },
      { tip: "p", metin: "EK-1'de yüksek tehlikeli endüstriyel tesisler, yüksek tehlikeli depolama tesisleri ve yüksek tehlikeli yerler için kontrol süresi 3 yıl olarak belirlenir. Yüksek tehlikeli yerlerde herhangi bir büyüklük sınırı aranmaz; küçük bir tesis de 3 yılda bir kontrol edilir." },
      { tip: "h2", id: "birlikte", metin: "Kontrol neden iki uzmanla yapılır?" },
      { tip: "p", metin: "EK-1'in notlarında yüksek tehlikeli yapı ve yerlerdeki periyodik kontrollerin YGU-3 ve YGU-K seviyesindeki uzmanlarca birlikte gerçekleştirileceği belirtilir. Bunun nedeni görev paylaşımıdır: YGU-3 yapının yangın güvenliği tedbirlerini bütün olarak değerlendirir; YGU-K ise yüksek tehlikeli yapıların periyodik kontrolü sürecinde tehlikeli maddelerin tespiti ve sınıflandırılmasında görev alır. Hangi maddenin, hangi miktarda ve hangi koşulda tutulduğu, alınması gereken tedbirleri doğrudan belirler." },
      { tip: "h2", id: "ygu-k-kimdir", metin: "YGU-K kimdir, hangi eğitimi alır?" },
      { tip: "p", metin: "YGU-K seviyesine kimya mühendisleri ve kimya alanında lisans eğitimini tamamlayanlar başvurur. Asgari eğitim süresi 35 saattir: yangın bilimi (2 saat), yasal çerçeve (4 saat), yüksek tehlikeli binalar ve tehlikeli maddeler (24 saat) ve periyodik kontrol süreçleri (5 saat). Sınavda en az 25 çoktan seçmeli soru sorulur ve 70 puan başarı ölçütü olarak aranır." },
      {
        tip: "tablo",
        basliklar: ["Konu", "YGU-3", "YGU-K"],
        satirlar: [
          ["Kimler", "YGU-2 belgesi ve deneyim şartını sağlayan mimar ve mühendisler", "Kimya mühendisleri ve kimya lisans mezunları"],
          ["Yüksek tehlikeli yapılardaki görevi", "Yapının yangın güvenliği tedbirlerinin kontrolü", "Tehlikeli maddelerin tespiti ve sınıflandırılması"],
          ["Ek eğitim", "40 saat (yüksek tehlikeli binalar 24, uluslararası standartlar 16)", "35 saat"],
          ["Bedel payı", "Diğer uzmanlarla eşit pay", "Diğer seviyedeki uzmanlara ödenen bedelin %25'i"]
        ]
      },
      { tip: "h2", id: "yuksek-tehlikeli-ne", metin: "Hangi yapılar yüksek tehlikeli sayılır?" },
      { tip: "p", metin: "Yüksek tehlikeli yapıların tanımı ve sınıflandırması Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) ilgili kısmında yapılır. Eğitim müfredatındaki ilgili modülde patlayıcı maddeler, parlayıcı ve patlayıcı gazlar ile yanıcı ve parlayıcı sıvılar ve bu maddelerin depolandığı ve kullanıldığı yerler sayılır. Endüstri ve depolama tesislerinde ise yapının düşük, orta veya yüksek tehlikeli olması, içinde yürütülen faaliyete ve depolanan malzemeye göre belirlenir." },
      { tip: "h2", id: "on-sart", metin: "Periyodik kontrolde tehlike sınıfı nasıl sorgulanır?" },
      { tip: "p", metin: "EK-6 Periyodik Kontrol Formu'nun ön şartlarından biri, yapının mevcut kullanımının projesinde belirtilen tehlike sınıfına uygun olup olmadığıdır. Düşük ya da orta tehlikeli olarak projelendirilen bir tesiste sonradan yüksek tehlikeli malzeme kullanılmaya başlanmışsa bu durum kontrolün ilk aşamasında ortaya çıkar. Esaslı tadilat sayılmasa bile kontrol süresini değiştiren bu tür kullanım değişikliklerinin yapı sahibince itfaiyeye bildirilmesi gerekir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 5/2-ç ve 6/2-b: YGU-K",
      "Yönetmelik Taslağı EK-1 ve Not 3: Yüksek tehlikeli yapılar",
      "Yönetmelik Taslağı EK-2 Modül 6-B ve 7-B: YGU-K eğitimi",
      "Yönetmelik Taslağı Madde 11/5: YGU-K sınavı",
      "Yönetmelik Taslağı EK-3 Madde 7.4: YGU-K bedel payı",
      "Yönetmelik Taslağı Madde 24/8 ve EK-6: Kullanım değişikliği ve ön şartlar"
    ]
  }
]
