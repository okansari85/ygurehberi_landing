// YGU Hakkında açılış sayfası (/ygu-hakkinda): Oğuz'un 4 Kasım 2026 tasarımı (WhatsApp, 4 görsel), metinler birebir.
// Blok: p = paragraf (kalin: sona eklenen kalın kısım), m = kalın etiket + metin, kutu = amber çizgili başlık, h = kalın ara başlık, link = kalın bağlantı.
export type HakkindaBlok =
  | { tip: 'p'; metin: string; kalin?: string }
  | { tip: 'm'; etiket: string; metin: string }
  | { tip: 'kutu' | 'h'; metin: string }
  | { tip: 'link'; metin: string; to: string }

export interface HakkindaBolum {
  id: string
  no: string
  etiket: string
  gorsel: string
  gorselAlt: string
  baslik: string
  bloklar: HakkindaBlok[]
  dugme?: { metin: string; to: string }
}

export const YGU_HAKKINDA_SAYFA = {
  hero: {
    baslik: 'Yangın Güvenlik Uzmanlığı (YGU)',
    vurgu: 'Hakkında',
    metin: 'YGU, proje, uygulama ve kullanım aşamalarında yangın güvenliği tedbirlerinin değerlendirilmesiyle ilgili teknik uzmanlık alanıdır.'
  },
  giris: {
    baslik: 'YGU Hakkında',
    paragraflar: [
      'Yangın güvenlik uzmanlığı; yapılarda yangın güvenliği tedbirlerinin proje, uygulama ve kullanım aşamalarında değerlendirilmesine yönelik görevler içeren bir uzmanlık sistemidir.',
      'Yangın güvenlik uzmanı (YGU), ilgili mevzuatta belirlenen şartları sağlayarak Bakanlık tarafından yetkilendirilmesi öngörülen ve yetki seviyesi kapsamında tanımlanan görevleri yerine getiren teknik uzmandır.',
      'YGU\'nun görevi yalnızca bir binada yangın söndürme cihazı bulunup bulunmadığına bakmak değildir. Uzman; yangın güvenliği projelerini, uygulamaların projelere uygunluğunu, kullanım sürecindeki güvenlik tedbirlerini ve ilgili kayıtları görevinin kapsamına göre değerlendirir.'
    ],
    not: {
      baslik: 'Mevzuat bilgilendirmesi',
      metin: 'Yangın güvenlik uzmanlığına ilişkin kanuni çerçeve oluşturulmuştur. Bu sayfada açıklanan uzmanlık seviyeleri, mesleğe kabul koşulları ve ayrıntılı görev usulleri ise Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik Taslağı esas alınarak hazırlanmıştır. Taslak hükümler kesinleşmiş uygulama kuralları olarak değerlendirilmemelidir.'
    }
  },
  bolumler: [
    {
      id: 'kimdir', no: '01', etiket: 'Mesleği Tanıma', gorsel: 'hakkinda2-01', gorselAlt: 'Proje üzerinden teknik inceleme çizimi: plan, tedbir, uygunluk',
      baslik: 'Yangın Güvenlik Uzmanı Kimdir?',
      bloklar: [
        { tip: 'p', metin: 'Yangın güvenlik uzmanı, yangın güvenliğine ilişkin belirli teknik değerlendirmeleri yapmak ve bunların sonucunu raporlamak üzere yetkilendirilmesi öngörülen meslek mensubudur.' },
        { tip: 'p', metin: 'Mesleğin temelinde üç unsur bulunur:' },
        { tip: 'm', etiket: 'Teknik yeterlilik:', metin: 'Uzman, göreviyle ilgili yangın güvenliği tedbirlerini ve bunların dayandığı teknik gereklilikleri değerlendirebilmelidir.' },
        { tip: 'm', etiket: 'Mevzuata uygunluk:', metin: 'Teknik incelemeler ilgili mevzuat, onaylı projeler ve görevin gerektirdiği standartlar dikkate alınarak yapılmalıdır.' },
        { tip: 'm', etiket: 'Bağımsızlık ve tarafsızlık:', metin: 'Uzman, değerlendirmelerini kendisini görevlendiren tarafın veya yapının sahibinin beklentilerine göre değil, teknik tespitlerine göre gerçekleştirmelidir.' },
        { tip: 'p', metin: 'YGU, itfaiye personeli veya iş güvenliği uzmanıyla aynı görev tanımına sahip değildir. Bu mesleklerin görev alanları bazı konularda ilişkili olsa da YGU\'nun yetkisi ve sorumluluğu kendisine özgü düzenlemelerle belirlenir.' }
      ]
    },
    {
      // id'ler eski bölüm çapalarıyla aynı (site içi arama /ygu-hakkinda#gorevler ve #seviyeler'e bağlanır)
      id: 'gorevler', no: '02', etiket: 'Görev Alanları', gorsel: 'hakkinda2-02', gorselAlt: 'Dört temel görev alanı: proje, yapı izni, kontrol, tatbikat',
      baslik: 'YGU\'nun Dört Temel Görevi',
      bloklar: [
        { tip: 'p', metin: 'Yönetmelik taslağında yangın güvenlik uzmanları için dört temel görev alanı düzenlenmektedir. Her uzmanın bu görevlerin tamamını yapabilmesi, sahip olduğu yetki seviyesine ve ilgili görevlendirme koşullarına bağlıdır.' },
        { tip: 'kutu', metin: '1. Proje İnceleme ve Uygunluk Görüşü' },
        { tip: 'p', metin: 'Yangın algılama, söndürme, tahliye ve diğer yangın güvenliği tedbirlerini gösteren projeleri değerlendirir. Uygunluk görüşüne esas oluşturacak teknik raporu hazırlar.' },
        { tip: 'kutu', metin: '2. Yapı Kullanma İzni Aşamasında Değerlendirme' },
        { tip: 'p', metin: 'Yapıdaki yangın güvenliği uygulamalarının ilgili projelere uygunluğunu ve sistemlerin test edildiğini, devreye alındığını gösteren gerekli belgelerin varlığını değerlendirir. Uygunluk görüşüne esas rapor düzenler.' },
        { tip: 'kutu', metin: '3. Yangın Güvenlik Periyodik Kontrolü' },
        { tip: 'p', metin: 'Kapsama giren yapıların kullanım sürecinde, onaylı projelerdeki yangın güvenliği tedbirlerinin varlığını ve işlevselliğine ilişkin koşulları değerlendirir. Kontrol sonuçlarını raporlar.' },
        { tip: 'kutu', metin: '4. Yangın Tatbikatlarının Planlanması' },
        { tip: 'p', metin: 'Kapsamdaki yangın tatbikatlarının, yapı sahibi, yönetici veya görevlendirilmiş birim amirinin sorumluluğunda birlikte planlanmasına katkı sağlar.' },
        { tip: 'p', metin: 'Bu görevler birbirleriyle ilişkili olmakla birlikte farklı amaçlara, uygulama koşullarına ve belge süreçlerine sahiptir.' }
      ],
      dugme: { metin: 'YGU\'nun Görevlerini Ayrıntılı İnceleyin', to: '/yangin-guvenlik-uzmani-gorevleri' }
    },
    {
      id: 'nasil-olunur', no: '03', etiket: 'Mesleğe Giriş ve Yetkilendirme', gorsel: 'hakkinda2-03', gorselAlt: 'Mesleğe giriş süreci: mesleki uygunluk, eğitim, sınav, yetki belgesi, görev alma',
      baslik: 'Yangın Güvenlik Uzmanı (YGU) Nasıl Olunur?',
      bloklar: [
        { tip: 'p', metin: 'Yangın güvenlik uzmanı olabilmek için yalnızca yangın güvenliği konusunda bilgi sahibi olmak yeterli değildir.' },
        { tip: 'p', metin: 'Yönetmelik taslağında mesleğe kabul, öğrenim ve mesleki unvan koşullarına; eğitim, sınav ve yetkilendirme süreçlerine bağlanmaktadır.' },
        { tip: 'h', metin: '1. Mesleki uygunluk' },
        { tip: 'p', metin: 'Adayın öğrenim durumu ve mesleki unvanının başvurmak istediği YGU seviyesi için öngörülen şartlara uygunluğu değerlendirilir.' },
        { tip: 'h', metin: '2. Eğitim' },
        { tip: 'p', metin: 'Adayın başvurduğu seviyeye ilişkin eğitim programını, ilgili şartlara uygun biçimde tamamlaması öngörülür.' },
        { tip: 'h', metin: '3. Sınav' },
        { tip: 'p', metin: 'Eğitim sonrası sınav şartlarının yerine getirilmesi ve başarılı olunması gerekir. Taslakta belirli kişiler için eğitim ve sınav muafiyetleri de düzenlenmektedir.' },
        { tip: 'h', metin: '4. Yetki belgesi' },
        { tip: 'p', metin: 'Gerekli koşulları sağlayan kişinin uygun YGU seviyesinde Bakanlık tarafından yetkilendirilmesi öngörülmektedir.' },
        { tip: 'h', metin: '5. Görev alma' },
        { tip: 'p', metin: 'Yetki belgesi edinilmesiyle belirli bir yapıda resmî YGU görevine başlanması aynı şey değildir. Görev alma, ilgili protokol ve görevlendirme koşullarına ayrıca bağlıdır.' },
        { tip: 'p', metin: 'Mesleğe giriş süreci bu genel çerçeveyle açıklanabilir. Başvuru belgeleri, eğitim müfredatı, sınav koşulları, muafiyetler ve belge işlemlerinin ayrıntıları kendi rehberinde ele alınmaktadır.' }
      ],
      dugme: { metin: 'YGU Eğitim, Sınav ve Belgelendirme Sürecini İnceleyin', to: '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme' }
    },
    {
      id: 'seviyeler', no: '04', etiket: 'Uzmanlık Seviyeleri', gorsel: 'hakkinda2-04', gorselAlt: 'Yetki ve uzmanlık seviyeleri: YGU-1, YGU-2, YGU-3, YGU-K',
      baslik: 'YGU-1, YGU-2, YGU-3 ve YGU-K',
      bloklar: [
        { tip: 'p', metin: 'Yönetmelik taslağı, yangın güvenlik uzmanlığını dört seviyede düzenlemektedir.' },
        { tip: 'p', metin: 'Bu seviyeler yalnızca mesleki unvanları birbirinden ayırmak için oluşturulmamıştır. Uzmanın öğrenim koşullarını ve hangi görevlerde, hangi yapı türlerinde çalışabileceğini belirleyen bir sistemin parçalarıdır.' },
        { tip: 'h', metin: 'YGU-1' },
        { tip: 'p', metin: 'Taslakta belirtilen teknik ön lisans ve itfaiyecilik öğrenimi geçmişine sahip kişiler için öngörülen uzmanlık seviyesidir.' },
        { tip: 'p', metin: 'Belirlenen yapı sınıfları ve sınırları içinde periyodik kontrol görevlerinde yer alabilmesi öngörülmektedir.' },
        { tip: 'h', metin: 'YGU-2' },
        { tip: 'p', metin: 'Taslakta sayılan mimarlık ve mühendislik unvanlarına sahip kişiler için öngörülen seviyedir.' },
        { tip: 'p', metin: 'Yetki kapsamı, ilgili yapı sınıfları ve görev koşulları çerçevesinde YGU-1 seviyesinden farklılaşır.' },
        { tip: 'h', metin: 'YGU-3' },
        { tip: 'p', metin: 'YGU-2 yetki belgesine sahip olup taslakta belirtilen ilave mesleki deneyim ve raporlama koşullarını sağlayan kişiler için öngörülen seviyedir.' },
        { tip: 'p', metin: 'Daha geniş yapı ve görev kapsamlarında görevlendirilmesi düzenlenmektedir.' },
        { tip: 'h', metin: 'YGU-K' },
        { tip: 'p', metin: 'Kimya mühendisleri ve kimya alanında lisans eğitimi tamamlayan kişiler için öngörülen uzmanlık seviyesidir.' },
        { tip: 'p', metin: 'Yüksek tehlikeli yapıların periyodik kontrol sürecinde, tehlikeli maddelerin tespiti ve sınıflandırılmasıyla ilişkili özel bir görev alanına sahiptir.' },
        { tip: 'm', etiket: 'Önemli ayrım:', metin: 'YGU-K, YGU-3\'ten daha üst bir genel yetki seviyesi değildir. Kimyasal tehlikelerle ilgili farklı bir uzmanlık alanını temsil eder.' },
        { tip: 'p', metin: 'Bir uzmanlık seviyesinin yetki kapsamı yalnızca seviyenin adına bakılarak belirlenemez. Yapı türü, ilgili sınır değerler, görevin niteliği ve özel koşullar birlikte değerlendirilmelidir.' }
      ],
      dugme: { metin: 'YGU Seviyelerini ve Yetki Farklarını İnceleyin', to: '/ygu-hakkinda/ygu-olma-sartlari/ygu-seviyeleri' }
    },
    {
      id: 'gorev-alma', no: '05', etiket: 'Çalışma ve Görevlendirme', gorsel: 'hakkinda2-05', gorselAlt: 'Görevlendirme ve raporlama: protokol, görevlendirme, teknik değerlendirme, raporlama',
      baslik: 'YGU Nasıl Görev Alır ve Çalışır?',
      bloklar: [
        { tip: 'p', metin: 'Yönetmelik taslağında YGU hizmetlerinin, mahalli itfaiye teşkilatının gerekli gördüğü durumlarda protokol ve görevlendirme ilişkisiyle yürütülmesi öngörülmektedir.' },
        { tip: 'p', metin: 'Bu modelde görev süreci genel olarak şu şekilde işler:' },
        { tip: 'm', etiket: 'Protokol:', metin: 'Mahalli itfaiye teşkilatı, gerekli şartları taşıyan uzmanla veya uzman istihdam eden özel hukuk kuruluşuyla protokol yapabilir.' },
        { tip: 'm', etiket: 'Görevlendirme:', metin: 'Yapılacak görevin türü, süresi ve gerekli belgeler ilgili uzmana bildirilir.' },
        { tip: 'm', etiket: 'Teknik değerlendirme:', metin: 'Uzman, kendisine verilen görevi yetki seviyesi ve görev kapsamı içerisinde yerine getirir.' },
        { tip: 'm', etiket: 'Raporlama:', metin: 'İnceleme veya kontrol sonuçları, ilgili usule göre hazırlanarak mahalli itfaiye teşkilatının işlem sürecine sunulur.' },
        { tip: 'p', metin: 'YGU\'nun kendi adına veya bir kuruluş bünyesinde çalışabilmesi, görev aldığı her yapı için bağımsız ve tarafsız değerlendirme yapma yükümlülüğünü ortadan kaldırmaz.' },
        { tip: 'p', metin: 'Uzman, çıkar çatışmasına neden olabilecek ilişkilerden kaçınmalı ve kendisine verilen teknik görevi bizzat yerine getirmelidir.' }
      ],
      dugme: { metin: 'YGU\'nun Serbest Çalışma Modelini İnceleyin', to: '/serbest-calisma' }
    },
    {
      id: 'yapilar', no: '06', etiket: 'Yapı Türleri ve Uygulama Alanları', gorsel: 'hakkinda2-06', gorselAlt: 'Yapı kullanım sınıfları: konut, konaklama, kurumsal, büro, ticari, endüstri, toplanma, depolama, yüksek tehlike',
      baslik: 'YGU Hangi Yapılarda Görev Alır?',
      bloklar: [
        { tip: 'p', metin: 'Yangın güvenlik uzmanının görev alabileceği yapı türleri ve yetki sınırları, yapılacak işlemin niteliğine göre belirlenmektedir.' },
        { tip: 'p', metin: 'Yönetmelik taslağındaki periyodik kontrol sınıflandırmasında konutlar, konaklama amaçlı binalar, kurumsal binalar, büro binaları, ticari amaçlı binalar, endüstriyel tesisler, toplanma amaçlı binalar, depolama amaçlı tesisler ve yüksek tehlikeli yerler bulunmaktadır.' },
        { tip: 'p', metin: 'Ancak her yapı türü için aynı kontrol koşulları ve aynı YGU yetki seviyesi öngörülmemektedir.' },
        { tip: 'p', metin: 'Örneğin konutlarda yapı yüksekliği, konaklama amaçlı binalarda yatılan oda sayısı, belirli diğer yapı sınıflarında yapı inşaat alanı, endüstriyel ve depolama tesislerinde ise yangın tehlike düzeyi önem taşımaktadır.' },
        { tip: 'p', metin: 'Bu nedenle ', kalin: 'bir yapının kontrol kapsamını ve görev alabilecek uzman seviyesini belirlemek için önce kullanım sınıfı ve ilgili özellikleri doğru tespit edilmelidir.' },
        { tip: 'link', metin: 'YGU\'nun Çalışma Alanlarını İnceleyin', to: '/calisma-alanlari' }
      ],
      dugme: { metin: 'Yangın Güvenlik Periyodik Kontrol Sürelerini İnceleyin', to: '/#kontrol-sureleri' }
    },
    {
      id: 'rol', no: '07', etiket: 'Neden Gerekli?', gorsel: 'hakkinda2-07', gorselAlt: 'Yangın güvenliğinde süreklilik: proje, uygulama, kullanım',
      baslik: 'Yangın Güvenliğinde YGU\'nun Rolü',
      bloklar: [
        { tip: 'p', metin: 'Bir binanın yangın güvenliği yalnızca tasarım aşamasında alınan kararlarla sağlanmaz. Projede öngörülen tedbirlerin doğru uygulanması ve bina kullanıldığı sürece korunması da gerekir.' },
        { tip: 'p', metin: 'Örneğin bir binanın projesinde yangın algılama sistemi, yangın kapıları, kaçış yolları ve sabit söndürme sistemi bulunabilir.' },
        { tip: 'p', metin: 'Ancak bu tedbirlerin projede gösterilmesi, sahada eksiksiz uygulandıklarını veya kullanım sürecinde işlevlerini koruduklarını tek başına göstermez.' },
        { tip: 'p', metin: 'Bu nedenle yangın güvenliği birbirine bağlı üç aşamada ele alınmalıdır:' },
        { tip: 'm', etiket: 'Proje aşaması:', metin: 'Yangın güvenliğine ilişkin tedbirler projelerde değerlendirilir.' },
        { tip: 'm', etiket: 'Uygulama aşaması:', metin: 'Yapılan uygulamaların ilgili projelerde öngörülen tedbirlere uygunluğu ve gerekli test/devreye alma belgelerinin varlığı incelenir.' },
        { tip: 'm', etiket: 'Kullanım aşaması:', metin: 'Yangın güvenliği tedbirlerinin mevcut ve çalışır durumda tutulmasına ilişkin koşullar periyodik kontroller kapsamında değerlendirilir.' },
        { tip: 'p', metin: 'YGU sistemi, mahalli itfaiye teşkilatının gerekli görmesi hâlinde uzmanların bu değerlendirme süreçlerinde görev alabilmesine yönelik bir model öngörmektedir.' }
      ]
    }
  ] as HakkindaBolum[]
}
