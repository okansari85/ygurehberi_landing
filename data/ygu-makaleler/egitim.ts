// YGU Hakkında › Eğitim ve Belgelendirme makaleleri. Kaynak: YGU Yönetmelik Taslağı (Md. 5, 9–17) ve EK-1, EK-2.
// Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil, geniş zaman. Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const EGITIM_MAKALELERI: YguMakale[] = [
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-seviyeleri-yetki-alanlari-ve-egitim-saatleri",
    baslik: "YGU-1, YGU-2, YGU-3 ve YGU-K: Hangi Seviye Hangi Binayı Kontrol Eder?",
    ozet: "Dört uzmanlık seviyesinin yetki alanları, asgari eğitim süreleri ve uluslararası standartlara göre tasarlanan binalar için getirilen özel kural; taslaktaki EK-1 ve EK-2 tablolarına göre karşılaştırma.",
    ozetle: "Taslakta dört uzmanlık seviyesi tanımlanır. YGU-1 ile 5 yıllık kontrole tabi küçük yapılar ve düşük tehlikeli tesisler, YGU-2 ile bunlara ek olarak büyük yapılar ve orta tehlikeli tesisler kontrol edilir; YGU-3 tüm sınıflarda görev alabilir ve yüksek tehlikeli yapılarda YGU-K ile birlikte çalışır. Asgari eğitim süreleri YGU-1 için 65, YGU-2 için 85, YGU-3 için 40, YGU-K için 35 saattir. Uluslararası standartlara göre tasarlanan binalarda YGU-1 ve YGU-2 görevlendirilmez.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı tek tip bir yetki olarak düzenlenmemiştir. Taslağın 5. maddesinde mesleki disiplin ve unvan esas alınarak dört seviye tanımlanır. Seviyeler arasındaki fark yalnızca bir unvan farkı değildir; hangi binanın kimin tarafından kontrol edileceği de bu seviyelere göre belirlenir." },
      { tip: "h2", id: "karsilastirma", metin: "Seviyeler arasındaki fark nedir?" },
      {
        tip: "tablo",
        basliklar: ["Seviye", "Kimler başvurur?", "Kontrol edebileceği yapılar", "Asgari eğitim"],
        satirlar: [
          ["YGU-1", "Makine, inşaat, elektrik, elektrik-elektronik teknikerleri ve itfaiyecilik ön lisans mezunları", "5 yıllık kontrole tabi yapılar: 30,50–51,50 m konutlar, 25 ve altı odalı konaklama, 1.000 m² ve altı kurumsal, büro, ticaret ve toplanma yapıları, düşük tehlikeli endüstri ve depolama", "65 saat"],
          ["YGU-2", "Mimar ile inşaat, makine, elektrik, elektronik ve elektrik-elektronik mühendisleri", "YGU-1'in yapılarına ek olarak 4 yıllık kontrole tabi büyük yapılar ve orta tehlikeli tesisler", "85 saat"],
          ["YGU-3", "YGU-2 belgesi olup son bir yılda en az iki farklı kullanım sınıfından en az dört yapının raporunu düzenlemiş olanlar", "Tüm sınıflar; yüksek tehlikeli yapı ve yerlerde YGU-K ile birlikte; uluslararası standarda göre tasarlanan binalar", "40 saat (ek modüller)"],
          ["YGU-K", "Kimya mühendisleri ve kimya alanında lisans mezunları", "Yüksek tehlikeli yapılarda tehlikeli maddelerin tespiti ve sınıflandırılması (YGU-3 ile birlikte)", "35 saat"]
        ]
      },
      { tip: "p", metin: "Tablodaki yapı grupları EK-1'deki “YGU seviyesi” sütunundan çıkarılmıştır. Periyodik kontrol ve uygunluk görüşü işlerinde uzmanın yetkilendirilmesinde bu sütundaki seviyeler dikkate alınır." },
      { tip: "h2", id: "ygu-1", metin: "YGU-1 hangi binaları kontrol edebilir?" },
      { tip: "p", metin: "YGU-1 seviyesindeki uzmana, EK-1'de 5 yıllık kontrol süresine bağlanan satırlarda periyodik kontrol görevi verilebilir. Bu satırlarda yapılar görece küçük ya da düşük tehlikelidir. Proje onayı ve yapı kullanma izni aşamasındaki uygunluk görüşü görevleri ise YGU-1'e verilmez; bu görevler YGU-2 veya YGU-3 tarafından yürütülür." },
      { tip: "h2", id: "ygu-2", metin: "YGU-2'nin YGU-1'den farkı nedir?" },
      { tip: "p", metin: "YGU-2 ile 4 yıllık kontrole tabi büyük yapılar da kontrol edilebilir: 51,50 metre ve üzerindeki konutlar, 25'ten fazla odalı konaklama yapıları, 1.000 m²'yi aşan kurumsal, büro, ticaret ve toplanma yapıları ile orta tehlikeli endüstri ve depolama tesisleri. Ayrıca proje aşamasındaki ve yapı kullanma izni aşamasındaki uygunluk görüşleri ile tatbikat planlaması YGU-2 veya YGU-3 seviyesindeki uzmanlara bırakılır." },
      { tip: "h2", id: "ygu-3", metin: "YGU-3 neden ayrı bir seviyedir?" },
      { tip: "p", metin: "YGU-3'e doğrudan başvurulamaz; seviyeye YGU-2 belgesi ve sahada kazanılan deneyimle ulaşılır. YGU-3 ile tüm kullanım sınıflarında görev alınabilir. Yüksek tehlikeli endüstri, depolama ve yüksek tehlikeli yerlerde kontrol YGU-3 ile YGU-K'nin birlikte çalışmasıyla yapılır. Uluslararası standartlara göre tasarlanan binalar da bu seviyeye bırakılır." },
      { tip: "h2", id: "ygu-k", metin: "YGU-K ne iş yapar?" },
      { tip: "p", metin: "YGU-K, kimya alanından gelen uzmanlar için tanımlanmış bir seviyedir ve tek başına periyodik kontrol yapacak şekilde kurgulanmamıştır. Yüksek tehlikeli yapıların periyodik kontrolü sürecinde tehlikeli maddelerin tespiti ve sınıflandırılması görevi YGU-K'ye verilir. Kontrol YGU-3 ile birlikte gerçekleştirilir." },
      { tip: "h2", id: "egitim-saatleri", metin: "Hangi seviye kaç saat eğitim alır?" },
      {
        tip: "tablo",
        basliklar: ["Seviye", "Asgari süre", "Modüller (EK-2)"],
        satirlar: [
          ["YGU-1", "65 saat", "Yangın bilimi (2), yasal çerçeve (4), yangın projeleri (3), yapı ve malzeme (4), kaçış yolları (8), elektrik sistemleri (8), duman kontrol ve söndürme (8), yüksek tehlikeli binalar (4), periyodik kontrol (20), yangın güvenliği sorumluluğu (4)"],
          ["YGU-2", "85 saat", "Yangın bilimi (2), yasal çerçeve (4), yangın projeleri (3), yapı ve malzeme (6), tahliye (14), elektrik sistemleri (12), duman kontrol ve söndürme (12), yüksek tehlikeli binalar (4), periyodik kontrol (20), sorumluluk (4), ruhsat ve iskân kontrolleri (4)"],
          ["YGU-3", "40 saat", "Yüksek tehlikeli binalar ve tehlikeli maddeler (24), uluslararası doküman ve standart okuma (16)"],
          ["YGU-K", "35 saat", "Yangın bilimi (2), yasal çerçeve (4), yüksek tehlikeli binalar ve tehlikeli maddeler (24), periyodik kontrol (5)"]
        ]
      },
      { tip: "p", metin: "Parantez içindeki rakamlar modüllerin asgari saatleridir. YGU-1 ve YGU-2'de aynı adı taşıyan modüller farklı derinlikte işlenir: YGU-1 modüllerinde “bilir” düzeyinde kazanımlar, YGU-2 modüllerinde ise tasarım ve kurulum ölçütlerinin bilinmesi ve değerlendirilmesi hedeflenir." },
      { tip: "h2", id: "uluslararasi-standart", metin: "Uluslararası standartla tasarlanan binalarda neden YGU-1 ve YGU-2 görevlendirilmez?" },
      { tip: "p", metin: "Binaların Yangından Korunması Hakkında Yönetmeliğin (BYKHY) 5. maddesinin ikinci fıkrası kapsamında, ulusal mevzuat yerine uluslararası standartlara göre tasarım yapılabilir. Bu binaların periyodik kontrolü ve uygunluk görüşü işlerinde YGU-1 ve YGU-2 seviyesindeki uzmanlar görevlendirilmez. Gerekçe eğitim müfredatında görülür: uluslararası doküman ve standart okuma modülü yalnızca YGU-3 eğitiminde yer alır ve bu modülle ulusal mevzuatta hüküm bulunmayan durumlarda değerlendirme yapabilme becerisi hedeflenir." },
      { tip: "h2", id: "itfaiye", metin: "Seviye kuralı itfaiye için de geçerli midir?" },
      { tip: "p", metin: "Hayır. Mahalli itfaiye teşkilatına tüm yapılarda periyodik kontrol yapma ve uygunluk görüşü verme yetkisi tanınır. Seviye tablosu, itfaiyenin uzmanlardan hizmet aldığı durumlarda hangi uzmanın görevlendirilebileceğini belirler." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 5: Yangın güvenlik uzmanlığı seviyeleri",
      "Yönetmelik Taslağı Madde 6/2: Görevlerin seviyelere göre dağılımı",
      "Yönetmelik Taslağı EK-1 ve notları: Seviye sütunu, yüksek tehlikeli yapılar, uluslararası standartlar",
      "Yönetmelik Taslağı EK-2: Eğitim müfredatı ve asgari süreler"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-egitimi-nasil-yapilir",
    baslik: "YGU Eğitimi Nasıl Yapılır? Teorik Eğitim, Uygulama Eğitimi ve Uzaktan Eğitim",
    ozet: "Eğitim iki aşamada yürütülür: teorik kısım Bakanlıkta veya yetkili eğitici kuruluşta yüz yüze ya da uzaktan, uygulama kısmı ise mahalli itfaiyede verilir. Yüzde 90 devam şartı ve uygulama eğitiminin içeriği.",
    ozetle: "YGU eğitimi teorik ve uygulama olmak üzere iki aşamada yapılır. Teorik eğitim Bakanlık veya Bakanlıkça yetkilendirilen eğitici kuruluşlarca yüz yüze ya da uzaktan verilir ve katılım belgesi için en az yüzde 90 devam şartı aranır. Uygulama eğitimi mahalli itfaiye teşkilatınca verilir; farklı kullanım sınıfındaki iki yapı için yangın güvenlik raporu düzenlenmesini ve uygulama gözetimini kapsar.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı eğitimi, bir sınıfta dinlenip sertifikayla biten bir kurs olarak tasarlanmamıştır. Taslağın 9. maddesinde eğitim iki aşamaya ayrılır ve aşamalar farklı kurumlara verilir. Teorik bilgi eğitici kuruluşta, saha becerisi ise itfaiyede kazandırılır." },
      { tip: "h2", id: "iki-asama", metin: "YGU eğitimi hangi aşamalardan oluşur?" },
      {
        tip: "tablo",
        basliklar: ["Aşama", "Kim verir?", "Nasıl yapılır?"],
        satirlar: [
          ["Teorik eğitim", "Bakanlık veya Bakanlıkça yetkilendirilen eğitici kuruluşlar", "EK-2 müfredatına göre, yüz yüze ya da uzaktan"],
          ["Uygulama eğitimi", "Mahalli itfaiye teşkilatı", "Farklı kullanım sınıfındaki iki yapı için rapor düzenleme ve uygulama gözetimi"]
        ]
      },
      { tip: "h2", id: "uzaktan", metin: "YGU eğitimi online alınabilir mi?" },
      { tip: "p", metin: "Teorik eğitim için evet. Taslakta teorik eğitimlerin yüz yüze veya uzaktan eğitimle gerçekleştirileceği açıkça belirtilir. Uzaktan eğitim veren kuruluşlardan, yetkilendirme başvurusunda sistem altyapısına ilişkin bilgi istenir; eğitim öncesinde de Bakanlık gözetimi için gerekli bilgilerin Bakanlığa bildirilmesi gerekir. Uygulama eğitimi ise doğası gereği sahada, itfaiye gözetiminde yapılır." },
      { tip: "h2", id: "devam", metin: "Eğitime devam zorunluluğu var mıdır?" },
      { tip: "p", metin: "Var. Katılım belgesi alınabilmesi için teorik eğitimin en az yüzde 90'ına devam edilmesi zorunludur. Örneğin 85 saatlik YGU-2 eğitiminde en fazla yaklaşık 8,5 saatlik devamsızlık tolere edilir. Katılım belgesi alınamazsa sınava başvurulamaz; çünkü sınava, istisnalar dışında yalnızca eğitimleri tamamlayanlar başvurabilir." },
      { tip: "p", metin: "Eğitici kuruluşlar devam durumunu gösteren çizelgeyi, katılım belgesini ve adayın başvuru belgelerini eğitimin bitiminden itibaren en geç 5 iş günü içinde KEP üzerinden Bakanlığa gönderir. Teorik eğitime ilişkin denetime esas kayıtlar iki yıl saklanır." },
      { tip: "h2", id: "uygulama", metin: "Uygulama eğitiminde ne yapılır?" },
      { tip: "p", metin: "Uygulama eğitimi, adayın teorik bilgiyi sahada kullanma becerisinin geliştirilmesi amacıyla düzenlenir. Bu aşamada farklı kullanım sınıfına sahip iki yapıya ilişkin yangın güvenlik raporu düzenlenir ve uygulama gözetimi faaliyetlerine katılınır. Örneğin bir büro binası ile bir konaklama yapısı için rapor hazırlanması bu şartı karşılar." },
      { tip: "p", metin: "Uygulama eğitimi için eğitici kuruluşun işbirliği protokolü yaptığı itfaiyeye ya da adayın talebi hâlinde herhangi bir mahalli itfaiye teşkilatına başvurulabilir. Aday uygulamayı kendi seçtiği bir itfaiyede yaparsa, itfaiyenin verdiği katılım belgesi de Bakanlığa iletilir." },
      { tip: "h2", id: "itfaiye-bildirimi", metin: "Uygulama eğitimi tamamlanınca ne olur?" },
      { tip: "p", metin: "Mahalli itfaiye teşkilatı, uygulama eğitimini tamamlayan adaylara ilişkin bilgileri eğitimin bitiminden itibaren en geç 15 gün içinde adayın teorik eğitimi aldığı eğitici kuruluşa gönderir. Teorik ve uygulama kayıtları böylece tek dosyada birleştirilir ve sınav başvurusuna esas alınır." },
      { tip: "h2", id: "duyurular", metin: "Eğitim tarihleri nereden öğrenilir?" },
      { tip: "p", metin: "Bakanlıkça düzenlenen teorik eğitimlerin tarih ve yerleri Bakanlığın resmî internet sayfasında duyurulur. Başvuru ilanları da Bakanlığın ya da yetkilendirilen kuruluşun resmî internet sayfasında yayımlanır. Yetkilendirilen eğitici kuruluşların listesi de yine Bakanlık sayfasında ilan edilir." },
      { tip: "h2", id: "guncelleme", metin: "Belge alındıktan sonra eğitim devam eder mi?" },
      { tip: "p", metin: "Bakanlıkça ihtiyaç duyulduğunda belirlenen ve ilan edilen eğitimlerin uzmanlarca alınması zorunludur. Bu eğitimler uzaktan erişimle de düzenlenebilir. Eğitime katılmayan uzmanın yetkisi, eğitim tamamlanana kadar askıya alınır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 9: Yangın güvenlik uzmanlarının eğitimi",
      "Yönetmelik Taslağı Madde 10/1 ve 10/3: Başvuru ilanı ve uygulama eğitimi başvurusu",
      "Yönetmelik Taslağı Madde 11/3: Sınava başvuru",
      "Yönetmelik Taslağı Madde 13/5: Bakanlıkça istenen eğitimler",
      "Yönetmelik Taslağı Madde 15/3 ve 16: Eğitici kuruluşların bildirimleri"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-egitim-mufredati-moduller-ve-saatler",
    baslik: "YGU Eğitim Müfredatı: Modüller, Konular ve Kazanımlar",
    ozet: "EK-2 müfredatındaki 10 ana modülün konuları, hangi seviyeye verildiği, beklenen kazanımlar, dayandığı mevzuat ve modülleri hangi branştaki eğiticilerin verdiği.",
    ozetle: "YGU eğitim müfredatı EK-2'de 10 ana modül hâlinde düzenlenir: yangın bilimi ve yasal çerçeve, yapı ve malzeme, kaçış ve tahliye, elektrik sistemleri, duman kontrol ve söndürme sistemleri, yüksek tehlikeli binalar, periyodik kontrol süreçleri, yangın güvenliği sorumluluğu, ruhsat ve iskân kontrolleri ile uluslararası standart okuma. Toplam asgari süre YGU-1 için 65, YGU-2 için 85, YGU-3 için 40, YGU-K için 35 saattir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Uzman adaylarının hangi konularda eğitileceği, taslağın ekinde yer alan EK-2 müfredatında ayrıntılı olarak gösterilir. Her modül için içerik, kazanımlar, asgari süre, dayanılan mevzuat, hangi seviyeye verileceği ve hangi branştaki eğiticiler tarafından anlatılacağı tek tabloda belirlenir." },
      { tip: "h2", id: "moduller", metin: "Müfredatta hangi modüller bulunur?" },
      {
        tip: "tablo",
        basliklar: ["Modül", "Konu", "Seviye ve asgari süre"],
        satirlar: [
          ["1-A Yangın bilimi", "Yangın biliminin temel kavramları ve insan davranışı", "YGU-1, YGU-2, YGU-K: 2 saat"],
          ["1-B Yasal çerçeve", "Mevzuat okuma, yetki ve etik; Binaların Yangından Korunması Hakkında Yönetmelik (BYKHY), İmar Kanunu, Kat Mülkiyeti Kanunu", "YGU-1, YGU-2, YGU-K: 4 saat"],
          ["1-C Yangın projeleri", "Projelerin yangın güvenliği açısından okunması", "YGU-1, YGU-2: 3 saat"],
          ["2 Yapı ve malzeme", "Malzemelerin yangın davranışı, taşıyıcı sistemler", "YGU-1: 4 saat · YGU-2: 6 saat"],
          ["3 Kaçış yolları ve tahliye", "Kullanım ve tehlike sınıfları, kaçış yolu ve merdivenleri", "YGU-1: 8 saat · YGU-2: 14 saat"],
          ["4 Yangın güvenliği sistemleri-1", "Asansör, yıldırımdan korunma, trafo ve jeneratör, elektrik tesisatı, yapıya entegre güneş enerjisi, acil aydınlatma, algılama ve uyarı", "YGU-1: 8 saat · YGU-2: 12 saat"],
          ["5 Yangın güvenliği sistemleri-2", "Duman kontrol, basınçlandırma, sulu, köpüklü, gazlı ve kuru tozlu söndürme, taşınabilir söndürücüler", "YGU-1: 8 saat · YGU-2: 12 saat"],
          ["6 Yüksek tehlikeli binalar", "Patlayıcı maddeler, parlayıcı gazlar, yanıcı sıvılar ve bunların depolandığı yerler", "YGU-1, YGU-2: 4 saat · YGU-3, YGU-K: 24 saat"],
          ["7 Periyodik kontrol süreçleri", "Kontrol süreci, formlar, rapor yazımı, bilgilendirme", "YGU-1, YGU-2: 20 saat · YGU-K: 5 saat"],
          ["8 Yangın güvenliği sorumluluğu", "Tatbikat, eğitim, ekipler", "YGU-1, YGU-2: 4 saat"],
          ["9 Ruhsat ve iskân kontrolleri", "Proje ve uygulama kontrolü, uygunluk raporu", "YGU-2: 4 saat"],
          ["10 Uluslararası doküman ve standart", "Ulusal mevzuatta hüküm bulunmayan durumların değerlendirilmesi", "YGU-3: 16 saat"]
        ]
      },
      { tip: "h2", id: "bilir-degerlendirir", metin: "YGU-1 ile YGU-2 eğitimi arasındaki fark nedir?" },
      { tip: "p", metin: "Aynı adı taşıyan modüller iki seviyede farklı derinlikte işlenir. YGU-1 modüllerinde kazanımlar çoğunlukla “bilir” düzeyinde tanımlanır; örneğin kaçış merdiveni özelliklerinin bilinmesi hedeflenir. YGU-2 modüllerinde ise aynı konu “değerlendirir” düzeyinde ele alınır ve sistemlerin tasarım ve kurulum ölçütlerinin bilinmesi beklenir. Süre farkı da bu derinlik farkından kaynaklanır." },
      { tip: "h2", id: "agirlik", metin: "Eğitimde en çok zaman hangi konuya ayrılır?" },
      { tip: "p", metin: "YGU-1 ve YGU-2 müfredatında en uzun modül, 20 saatle periyodik kontrol süreçleridir. Bu modülde kontrol sürecinin yönetilmesi, uygunsuzlukların teknik olarak tespit edilmesi, bulguların açık biçimde sunulması, bina yönetiminin test, bakım, tatbikat ve ekipler konusunda bilgilendirilmesi ve geçerli bir yangın güvenlik raporunun hazırlanması hedeflenir. YGU-3 ve YGU-K müfredatında ise ağırlık 24 saatlik yüksek tehlikeli binalar modülündedir." },
      { tip: "h2", id: "mevzuat-referansi", metin: "Modüller hangi mevzuata dayanır?" },
      { tip: "p", metin: "Modüllerin büyük kısmında BYKHY'nin ilgili kısımları referans gösterilir. Bunun yanında Yapı Malzemeleri Yönetmeliği, İş Ekipmanları Yönetmeliği, ilgili Türk Standartları, İmar Kanunu, Kat Mülkiyeti Kanunu ve periyodik kontrol modülünde uzmanlık yönetmeliğinin kendisi kaynak olarak sayılır. YGU-3'e özgü modülde ise uluslararası doküman ve standartlar esas alınır." },
      { tip: "h2", id: "egiticiler", metin: "Modülleri kimler anlatır?" },
      { tip: "p", metin: "Her modül için eğitici branşı ayrıca belirlenir. Örneğin elektrik sistemleri modülü elektrik mühendislerince, duman kontrol ve söndürme modülü makine mühendislerince, yapı ve kaçış modülleri mimar ve inşaat mühendislerince verilir. Periyodik kontrol modülünde mühendis ve mimarların yanı sıra mahalli itfaiye teşkilatı, yangın güvenliği sorumluluğu modülünde ise AFAD veya itfaiye eğitici olarak gösterilir. Eğiticilerin müfredata uygun konuda en az tezli yüksek lisans ya da doktora derecesine sahip olması aranır; Bakanlık, AFAD ve itfaiye kaynaklı eğiticiler için üç yıllık görev deneyimi yeterli sayılır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı EK-2: Yangın Güvenlik Uzmanlığı Eğitim Müfredatı",
      "Yönetmelik Taslağı Madde 9/2: Müfredatın EK-2'ye göre düzenlenmesi",
      "Yönetmelik Taslağı Madde 15/2: Eğiticilerin nitelikleri"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-egitimine-basvuru-belgeleri",
    baslik: "YGU Eğitimine Başvuruda Hangi Belgeler İstenir?",
    ozet: "Kimlik bilgisi, fotoğraf, son üç ayın adli sicil kaydı, diploma, oda belgesi, YGU-3 için deneyim belgesi, KEP adresi ve KVKK izni. Eksik belge için tanınan süre ve sık yapılan hatalar.",
    ozetle: "Teorik eğitime başvuruda kimlik numarası (yabancılar için pasaport veya yabancı kimlik numarası ve çalışma izni), bir vesikalık fotoğraf, son üç ay içinde alınmış adli sicil belgesi, diploma veya denklik belgesi, oda kaydı zorunlu meslekler için son altı ayda alınmış oda belgesi, YGU-3 başvurularında mesleki tecrübe belgesi, KEP adresi belgesi ve kişisel verilerin yayımlanmasına izin belgesi istenir. Eksik belgeler için 15 gün süre verilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığı sürecinde ilk resmî adım teorik eğitime başvurudur. Başvuru ilanı Bakanlığın ya da yetkilendirilen kuruluşun resmî internet sayfasında yayımlanır ve başvuruda istenen belgeler taslağın 10. maddesinde tek tek sayılır." },
      { tip: "h2", id: "liste", metin: "Başvuru belgeleri nelerdir?" },
      {
        tip: "tablo",
        basliklar: ["Belge", "Dikkat edilecek nokta"],
        satirlar: [
          ["Kimlik bilgisi", "T.C. vatandaşları için kimlik numarası; yabancılar için pasaport veya yabancı kimlik numarası ile çalışma izni belgesi"],
          ["Vesikalık fotoğraf", "Bir adet"],
          ["Adli sicil belgesi", "Müracaat tarihinden önceki son üç ay içinde alınmış olmalıdır"],
          ["Diploma", "Diploma, mezuniyet belgesi, geçici mezuniyet belgesi veya diploma denklik belgesi"],
          ["Oda belgesi", "Meslek kuruluşuna kayıt zorunlu olanlar için son altı ay içinde alınmış oda faaliyet veya kayıt belgesi"],
          ["Mesleki tecrübe belgesi", "Yalnızca YGU-3 başvurularında"],
          ["KEP adresi belgesi", "Kayıtlı elektronik posta adresini gösteren belge"],
          ["Kişisel veri izni", "Eğitim, sınav ve yetki belgesi bilgilerinin Bakanlık sayfasında yayımlanmasına KVKK kapsamında izin"]
        ]
      },
      { tip: "h2", id: "kep", metin: "KEP adresi neden istenir?" },
      { tip: "p", metin: "Kayıtlı elektronik posta, sistemin resmî iletişim kanalı olarak kurgulanır. Eğitici kuruluşlar adayların bilgilerini Bakanlığa KEP üzerinden gönderir; itfaiye uzmanlara görevin türünü, süresini ve belge teslim tarihini KEP ile bildirir; protokollerde de tarafların KEP adreslerine yapılan tebligat geçerli sayılır. Bu nedenle KEP adresi, uzmanlık süreci boyunca kullanılacak bir araç olarak başvuru aşamasında istenir." },
      { tip: "h2", id: "kvkk", metin: "Kişisel verilerin yayımlanmasına neden izin istenir?" },
      { tip: "p", metin: "Bakanlık, yetki belgesi almaya hak kazananların ve geçerli belge sahiplerinin adını, soyadını ve uzmanlık seviyesini, askıya alınan ve iptal edilen uzmanları resmî internet sayfasında duyurur. Başvuru belgeleri, sınav sonuçları ve başvurunun reddine ilişkin bilgilendirmeler de aynı sayfada yayımlanır ve bu duyuru tebliğ yerine geçer. Bu yayımlar için 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında adaydan izin belgesi alınır." },
      { tip: "h2", id: "eksik-belge", metin: "Belge eksik olursa ne olur?" },
      { tip: "p", metin: "Başvuru belgeleri komisyon tarafından incelenir. Zorunlu belgelerden biri eksikse başvuru sahibine belgeleri tamamlaması için 15 gün süre verilir. Bu süre içinde eksikler tamamlanmazsa başvuru belgeleri Bakanlıkça iade edilir ve aday sınava katılamaz." },
      { tip: "h2", id: "gercek-disi-beyan", metin: "Belgelerde gerçek dışı beyan tespit edilirse ne olur?" },
      { tip: "p", metin: "Gerçek dışı beyanda bulunduğu ya da sınava girme koşullarını taşımadığı sonradan anlaşılan adayların sınavı geçersiz sayılır ve haklarında suç duyurusunda bulunulur. Bu kişilere bir daha yangın güvenlik uzmanlığı sınavına girme hakkı tanınmaz. Bu nedenle başvuru belgelerinin güncelliği ve doğruluğu, sürecin ilerleyen aşamalarını da doğrudan etkiler." },
      { tip: "h2", id: "kontrol-listesi", metin: "Başvurudan önce hangi kontroller yapılabilir?" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Tarihler kontrol edilir.", metin: "Adli sicil belgesinin son üç ay, oda belgesinin son altı ay içinde alındığı görülür." },
          { baslik: "Diplomadaki bölüm adı karşılaştırılır.", metin: "Bölüm adının taslaktaki meslek listesiyle örtüştüğü kontrol edilir." },
          { baslik: "KEP adresi önceden açılır.", metin: "KEP hesabının açılması zaman alabileceği için ilan beklenmeden işlem yapılabilir." },
          { baslik: "YGU-3 için raporlar listelenir.", metin: "Son bir yıl içinde düzenlenen raporlar, kullanım sınıflarıyla birlikte bir tabloda toplanır." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 10: Eğitim başvuruları",
      "Yönetmelik Taslağı Madde 11/4, 11/8 ve 11/9: Belge incelemesi, geçersiz sayılan sınavlar ve duyurular",
      "Yönetmelik Taslağı Madde 13/6: Uzman listesinin yayımlanması",
      "Yönetmelik Taslağı Madde 16/2 ve 21/1: KEP kullanımı"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-sinavi-soru-sayisi-gecme-notu-ve-sinav-hakki",
    baslik: "YGU Sınavı: Kaç Soru, Geçme Notu Kaç, Kaç Kez Girilebilir?",
    ozet: "Sınav Bakanlıkça düzenlenir; YGU-1, YGU-2 ve YGU-3 için en az 50, YGU-K için en az 25 çoktan seçmeli soru sorulur, 70 puan başarılı sayılır. İtiraz süreleri, ikinci sınav hakkı ve sınavın geçersiz sayıldığı durumlar.",
    ozetle: "YGU sınavı teorik eğitim konularını kapsayacak şekilde Bakanlıkça düzenlenir. YGU-1, YGU-2 ve YGU-3 için en az 50, YGU-K için en az 25 çoktan seçmeli soru sorulur; 100 üzerinden 70 ve üzeri puan alanlar başarılı sayılır. Sonuçlara 7 iş günü içinde itiraz edilir, itirazlar 15 iş günü içinde karara bağlanır. Başarısız olanlara eğitime yeniden katılmadan bir sınav hakkı daha tanınır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Eğitim tamamlandıktan sonra yetki belgesine giden yol Bakanlığın düzenlediği sınavdan geçer. Taslağın 11. maddesinde sınavın biçimi, başarı ölçütü, itiraz süreleri ve tekrar hakları ayrıntılı olarak düzenlenir." },
      { tip: "h2", id: "ozet-tablo", metin: "Sınavın temel kuralları nelerdir?" },
      {
        tip: "tablo",
        basliklar: ["Konu", "Kural"],
        satirlar: [
          ["Düzenleyen", "Bakanlık"],
          ["Kapsam", "Teorik eğitim konuları"],
          ["Soru sayısı", "YGU-1, YGU-2 ve YGU-3 için en az 50; YGU-K için en az 25 çoktan seçmeli soru"],
          ["Başarı ölçütü", "100 üzerinden 70 ve üzeri puan"],
          ["Sonuca itiraz", "Sonuçların ilanını izleyen 7 iş günü içinde"],
          ["İtirazın karara bağlanması", "Bakanlıkça 15 iş günü içinde"],
          ["Tekrar hakkı", "Eğitime yeniden katılmadan bir kez daha"]
        ]
      },
      { tip: "h2", id: "kimler-girer", metin: "Sınava kimler girebilir?" },
      { tip: "p", metin: "Sınava, yönetmelikte belirtilen eğitimleri tamamlayanlar başvurabilir. Tek istisna, Bakanlık merkez teşkilatında yangın mevzuatı konusunda en az üç yıl çalışmış ve eğitim ile sınavdan muaf tutulan personeldir. Başvuru belgeleri komisyonca incelenir ve eksik belge için 15 gün süre tanınır; eksikler tamamlanmazsa aday sınava alınmaz." },
      { tip: "h2", id: "basarisizlik", metin: "Sınavda başarısız olunursa ne olur?" },
      { tip: "p", metin: "Sınavda başarılı olamayanlara ve eğitimi tamamlayıp geçerli bir mazeret nedeniyle sınava giremeyenlere, eğitime yeniden katılmaksızın en fazla bir kez daha sınava girme hakkı tanınır. İki kez sınava girip başarısız olanlar ise eğitime yeniden katılmadıkça sınava alınmaz." },
      { tip: "h2", id: "gecersiz", metin: "Sınav hangi durumlarda geçersiz sayılır?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Gerçek dışı beyan", metin: "Gerçek dışı beyanda bulunduğu veya sınava girme koşullarını taşımadığı sonradan anlaşılan adaylar." },
          { baslik: "Kopya", metin: "Sınav tutanağıyla kopya çekmeye teşebbüs ettiği, kopya çektiği, verdiği ya da çekilmesine imkân sağladığı tespit edilen adaylar." },
          { baslik: "Başkasının yerine girmek", metin: "Başkasının yerine sınava giren veya kendi yerine başkasını sokan adaylar." },
          { baslik: "Sınav kuralları", metin: "Sınav kurallarına uymayan adaylar." }
        ]
      },
      { tip: "p", metin: "Bu durumların hepsinde sınav geçersiz sayılır. İlk üç durumda ayrıca adaylar hakkında suç duyurusunda bulunulur. Bu kişilere bir daha yangın güvenlik uzmanlığı sınavına girme hakkı tanınmaz." },
      { tip: "h2", id: "duyuru", metin: "Sınav sonuçları nasıl duyurulur?" },
      { tip: "p", metin: "Sınava ait bütün bilgiler Bakanlığın resmî internet sayfasında duyurulur. Başvuru belgelerindeki eksiklikler, başvurunun reddi ve sınav sonucuna ilişkin bilgilendirmeler de bu sayfada yayımlanır ve bu duyuru tebliğ yerine geçer. Ayrıca kişiye yazı gönderilmesi beklenmemelidir; itiraz süresi de ilan tarihinden itibaren işler." },
      { tip: "h2", id: "sonrasi", metin: "Sınavı geçenlere ne verilir?" },
      { tip: "p", metin: "Sınavda başarılı olan kişiler yetki belgesi almaya hak kazanır. Belge Bakanlıkça, elektronik ortam üzerinden doğruluğu teyit edilebilecek şekilde düzenlenir ve beş yıl geçerli olur. Belge sahiplerinin adı, soyadı ve seviyesi Bakanlığın resmî internet sayfasında ilan edilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 11: Sınav ve değerlendirme",
      "Yönetmelik Taslağı Madde 13/1–3 ve 13/6: Yetki belgesi",
      "Yönetmelik Taslağı Madde 14: Muafiyet"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-egitim-ve-sinav-ucreti",
    baslik: "YGU Eğitimi ve Sınavı Ücretli mi? Bedel Nasıl Belirlenir, İade Edilir mi?",
    ozet: "Bakanlığın düzenlediği eğitimin ve sınavın bedeli Bakanlıkça, eğitici kuruluşların eğitim bedeli taraflarca belirlenir. Ödemenin yeri ve iade yapılmaması.",
    ozetle: "Bakanlıkça düzenlenen eğitimin bedeli Bakanlıkça, eğitici kuruluşlarca düzenlenen eğitimin bedeli ise taraflarca belirlenir. Bakanlık eğitimine katılacak ve sınava girecek adaylar, Bakanlıkça ilan edilen bedeli Bakanlık Döner Sermaye hesabına yatırır. Yatırılan eğitim ve sınav bedeli iade edilmez.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Uzman adaylarının sık sorduğu sorulardan biri maliyetle ilgilidir. Taslakta bir rakam verilmez; bedelin kim tarafından belirleneceği, nereye ödeneceği ve iade edilip edilmeyeceği düzenlenir." },
      { tip: "h2", id: "kim-belirler", metin: "Eğitim ücretini kim belirler?" },
      {
        tip: "tablo",
        basliklar: ["Eğitimi düzenleyen", "Bedeli belirleyen"],
        satirlar: [
          ["Bakanlık", "Bakanlık; tutar resmî internet sayfasında duyurulur"],
          ["Yetkilendirilmiş eğitici kuruluş (üniversite, meslek kuruluşu, ticari iştirak)", "Taraflar; yani eğitici kuruluş ile aday arasında belirlenir"]
        ]
      },
      { tip: "p", metin: "Bu yapı nedeniyle eğitici kuruluşların eğitim bedelleri birbirinden farklı olabilir. Bakanlık eğitimine katılan adaylar için ise tek bir bedel ilan edilir." },
      { tip: "h2", id: "sinav-ucreti", metin: "Sınav ücreti var mıdır?" },
      { tip: "p", metin: "Evet. Bakanlıkça düzenlenen eğitime katılacak ve sınava girecek adayların, Bakanlık tarafından belirlenip resmî internet sayfasında duyurulan bedeli Bakanlık Döner Sermaye hesabına yatırması gerekir. Sınav Bakanlıkça yapıldığı için eğitimi bir eğitici kuruluşta alan adaylar da sınav aşamasında Bakanlığın belirlediği usule tabi olur." },
      { tip: "h2", id: "iade", metin: "Yatırılan bedel iade edilir mi?" },
      { tip: "p", metin: "Hayır. Taslakta yatırılan eğitim ve sınav bedelinin iade edilmeyeceği açıkça belirtilir. Devam şartının sağlanamaması, eksik belgenin tamamlanamaması ya da sınavda başarısız olunması durumunda da bedel geri verilmez. Bu nedenle başvuru belgelerinin ve eğitim takviminin ödeme öncesinde kontrol edilmesi önerilir." },
      { tip: "h2", id: "ikinci-hak", metin: "İkinci sınav için tekrar ödeme yapılır mı?" },
      { tip: "p", metin: "Taslakta ikinci sınav hakkı için ayrı bir bedel hükmü yer almaz; sınava ilişkin bedeller Bakanlıkça belirlenip duyurulur. İki kez başarısız olunması hâlinde eğitime yeniden katılmak gerektiğinden, bu durumda eğitim bedelinin yeniden ödenmesi gündeme gelir." },
      { tip: "h2", id: "egitici-kurulus", metin: "Eğitici kuruluşlar Bakanlığa ücret öder mi?" },
      { tip: "p", metin: "Evet. Eğitici kuruluşlar her cari yıl için Bakanlıkça belirlenen kuruluş yetkilendirme bedelini Bakanlık Döner Sermaye hesabına yatırır. Bedel süresinde yatırılmazsa kuruluşun yetkisi ödeme yapılana kadar askıya alınır. Yetkisi askıya alınan kuruluş Bakanlığın listesinden çıkarıldığı için adayların eğitim almadan önce kuruluşun güncel listede yer aldığını kontrol etmesi yararlı olur." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 12: Eğitim ve sınav bedelleri",
      "Yönetmelik Taslağı Madde 15/5, 15/7 ve 15/8: Eğitici kuruluş listesi ve yetkilendirme bedeli",
      "Yönetmelik Taslağı Madde 11/7: İkinci sınav hakkı"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-yetki-belgesi-gecerlilik-yenileme-askiya-alma-iptal",
    baslik: "YGU Yetki Belgesi Kaç Yıl Geçerlidir? Yenileme, Askıya Alma ve İptal",
    ozet: "Yetki belgesi beş yıl geçerlidir ve eğitime katılmadan sınava girilerek yenilenir. Belgenin askıya alındığı ve iptal edildiği durumlar, iptalden sonra tekrar yetki alınıp alınamayacağı.",
    ozetle: "YGU yetki belgesi Bakanlıkça elektronik ortamda doğrulanabilir şekilde düzenlenir ve beş yıl geçerlidir. Belge, eğitime katılmadan sınava girilip başarılı olunarak yenilenir; iki kez başarısız olanlar eğitime katılmak zorundadır. Süresinde yenilenmeyen belge ile Bakanlığın zorunlu eğitimine katılmayan uzmanın yetkisi askıya alınır. İptal edilen belge sahibi beş yıl, ikinci kez iptal edilen hiçbir zaman yeniden yetkilendirilmez.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yetki belgesi, uzmanlık faaliyetinde bulunabilmek için alınması gereken belge olarak tanımlanır. Belgenin süresiz olmadığı, belirli durumlarda askıya alınabildiği ve iptal edilebildiği taslağın 13. maddesinde ayrıntılı olarak düzenlenir." },
      { tip: "h2", id: "gecerlilik", metin: "Yetki belgesi ne kadar süre geçerlidir?" },
      { tip: "p", metin: "Yetki belgesinin geçerlilik süresi beş yıldır. Belge Bakanlıkça düzenlenir ve doğruluğu elektronik ortam üzerinden teyit edilebilir. Belge sahiplerinin adı, soyadı ve seviyesi Bakanlığın resmî internet sayfasında yayımlandığı için itfaiyeler ve bina tarafı bir uzmanın yetkisini bu listeden doğrulayabilir." },
      { tip: "h2", id: "yenileme", metin: "Yetki belgesi nasıl yenilenir?" },
      { tip: "p", metin: "Yenilemede eğitimin tekrar alınması şartı aranmaz. Belge, eğitimlere katılmadan sınava yeniden girilip başarılı olunarak yenilenir. İki kez sınava girdiği hâlde başarılı olamayanlar ise eğitimlere katılmak zorundadır." },
      { tip: "h2", id: "askiya-alma", metin: "Yetki belgesi hangi durumlarda askıya alınır?" },
      {
        tip: "tablo",
        basliklar: ["Durum", "Sonuç"],
        satirlar: [
          ["Belge geçerlilik süresi içinde yenilenmezse", "Yetki, yenileme yapılana kadar askıya alınır"],
          ["Bakanlıkça zorunlu tutulan eğitime katılınmazsa", "Yetki, eğitim tamamlanana kadar askıya alınır"]
        ]
      },
      { tip: "p", metin: "Askı süresince uzman olarak faaliyette bulunulamaz. Askıya alınan uzmanlar da Bakanlığın resmî internet sayfasında duyurulur. Askıdaki bir uzmanın tamamlanmamış işleri itfaiye veya başka bir uzman tarafından sürdürülür; kontrol bedelinden protokole göre kesinti yapılarak işi devralan uzmana ödenir." },
      { tip: "h2", id: "iptal", metin: "Yetki belgesi hangi durumlarda iptal edilir?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Etik sorumlulukların yerine getirilmemesi", metin: "Bağımsızlık, tarafsızlık, gizlilik ve görev alınamayacak durumlara ilişkin sorumlulukları yerine getirmeyen uzmanın belgesi iptal edilir." },
          { baslik: "İmar Kanunu yaptırımı", metin: "Onaylı projelerdeki aykırılığı bildirmeyerek görevini yerine getirmediği için İmar Kanunu'nun 42. maddesine göre yaptırım uygulanan uzmanın belgesi iptal edilir." },
          { baslik: "Üçüncü uyarı", metin: "Mevzuata uygun görev yapmadığı itfaiyece tespit edilen uzmana birinci fiilinde uyarı verilir; üçüncü uyarıda belge iptal edilir." }
        ]
      },
      { tip: "h2", id: "iptal-sonrasi", metin: "Yetki belgesi iptal edilen uzman tekrar YGU olabilir mi?" },
      { tip: "p", metin: "İlk iptalden sonra, iptal tarihinden itibaren beş yıl boyunca yeniden yetkilendirme yapılmaz. Yetki belgesi ikinci kez iptal edilen uzman ise bir daha yetkilendirilmez. İdari yaptırımlara karşı itirazlar ilgili mahkemeye yapılır." },
      { tip: "h2", id: "sartlarin-kaybi", metin: "Şartların kaybı belgeyi etkiler mi?" },
      { tip: "p", metin: "Meslek veya kabul şartlarını kaybeden uzmanın bu durumu gecikmeksizin Bakanlığa ve ilgili itfaiye teşkilatına bildirmesi gerekir. Örneğin sayılan suçlardan birinden mahkûmiyet ya da meslekten çıkarılma, uzmanlık şartlarının ortadan kalkması anlamına gelir. Bildirimin yapılmaması, etik sorumlulukların yerine getirilmemesi olarak iptal sebepleri arasında değerlendirilir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 4/1-j: Yetki belgesi tanımı",
      "Yönetmelik Taslağı Madde 13: Yetki belgesi",
      "Yönetmelik Taslağı Madde 8/1-d: Şartların kaybının bildirilmesi",
      "Yönetmelik Taslağı Madde 20/3 ve 27/6: Askı ve iptalde işin devri",
      "Yönetmelik Taslağı Madde 28: İdari yaptırımlar"
    ]
  },
  {
    kategori: "egitim-ve-belgelendirme",
    yol: "ygu-egitimini-kimler-verebilir",
    baslik: "YGU Eğitimini Kimler Verebilir? Eğitici Kuruluş Olma Şartları",
    ozet: "Üniversiteler ile kamu kurumu niteliğindeki meslek kuruluşları ve ticari iştirakleri, Bakanlıkla protokol imzalayarak eğitici kuruluş olur. Başvuru, eğitici nitelikleri, yükümlülükler, denetim ve iptal halleri.",
    ozetle: "YGU teorik eğitimi Bakanlık tarafından ya da Bakanlıkla protokol imzalayarak yetkilendirilen üniversiteler, kamu kurumu niteliğindeki meslek kuruluşları ve bunların ticari iştirakleri tarafından verilir. Başvuru 30 gün içinde komisyonca incelenir. Eğiticilerde ilgili konuda en az tezli yüksek lisans veya doktora aranır; kuruluşlar her yıl yetkilendirme bedeli öder ve Bakanlıkça denetlenir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Uzman sayısının kısa sürede artırılması gerekeceğinden teorik eğitimin yalnızca Bakanlıkça verilmesi öngörülmemiştir. Taslağın dördüncü bölümünde eğitim verebilecek kuruluşlar, yetkilendirme usulü ve kuruluşların yükümlülükleri düzenlenir." },
      { tip: "h2", id: "kimler", metin: "Hangi kuruluşlar eğitici kuruluş olabilir?" },
      { tip: "p", metin: "Eğitim için üniversiteler veya kamu kurumu niteliğindeki meslek kuruluşları ile bunların ticari iştirakleri, Bakanlıkla imzalanan protokolle eğitici kuruluş olarak yetkilendirilir. Bu tanıma göre özel eğitim şirketleri, ancak bir üniversitenin ya da kamu kurumu niteliğindeki bir meslek kuruluşunun ticari iştiraki ise eğitici kuruluş olabilir." },
      { tip: "h2", id: "basvuru", metin: "Eğitici kuruluş başvurusunda neler istenir?" },
      { tip: "p", metin: "Eğitim vermek isteyen kuruluş yazılı olarak başvurur. Başvuruda kuruluş bilgileri, eğitim programı, eğiticilerin bilgileri ve yeterlilikleri, yüz yüze eğitimde eğitim mekânı, uzaktan eğitimde sistem altyapısı ve uygulama eğitimi için işbirliği protokolü yapılan itfaiye teşkilatları hakkında gerekçeli bilgi verilir. Bilgi ve belgeler başvuru tarihinden itibaren en geç 30 gün içinde komisyonca incelenir; şartları sağlayan kuruluş faaliyete başlar, sağlamayanın talebi reddedilir." },
      { tip: "h2", id: "egiticiler", metin: "Eğiticilerde hangi nitelikler aranır?" },
      { tip: "p", metin: "Teorik eğitim, EK-2 müfredatında belirtilen eğitici branşına sahip ve müfredata uygun konuda YÖK tarafından kabul edilen en az tezli yüksek lisans yapmış ya da bu konuda çalışması bulunan doktora veya üzeri unvanlı eğiticiler tarafından verilir. Bakanlık, AFAD ve itfaiyenin verebileceği belirtilen modüllerde, bu kurumların görevlendirdiği ya da bu kurumlarda ilgili konuda en az üç yıl görev yaptığını belgeleyen kişiler için akademik derece şartı aranmaz." },
      { tip: "h2", id: "yukumlulukler", metin: "Eğitici kuruluşların yükümlülükleri nelerdir?" },
      {
        tip: "altlar",
        numarali: false,
        liste: [
          { baslik: "Önceden bildirim", metin: "Eğitimlerin kapsamı, tarihi, saati ve yeri ile uzaktan eğitimde gözetim için gerekli bilgiler eğitim öncesinde Bakanlığa bildirilir." },
          { baslik: "Sonradan bildirim", metin: "Adayların bilgileri, başvuru belgeleri, devam çizelgesi ve katılım belgesi eğitimin bitiminden itibaren 5 iş günü içinde KEP üzerinden Bakanlığa gönderilir." },
          { baslik: "Kayıt saklama", metin: "Teorik eğitime ilişkin denetime esas belge ve veriler iki yıl saklanır." },
          { baslik: "Değişiklik bildirimi", metin: "Başvuruda sunulan bilgilerde değişiklik olursa bildirilmeden eğitime devam edilmez." },
          { baslik: "Yıllık bedel", metin: "Her yıl kuruluş yetkilendirme bedeli ödenir; ödenmezse yetki askıya alınır." }
        ]
      },
      { tip: "h2", id: "iptal", metin: "Eğitici kuruluşun yetkisi hangi durumlarda iptal edilir?" },
      { tip: "p", metin: "Bilgilerdeki değişiklik bildirilmeden eğitime devam edilmesi, müfredata uygun eğitim verilmediğinin tespiti, katılım belgesi düzenlenmesinde usulsüzlük yapılması ya da kuruluşun kendi talebi hâlinde izin Bakanlıkça iptal edilir. Katılım belgesinde usulsüzlük tespit edilirse ayrıca suç duyurusunda bulunulur. Yetkisi iptal edilen ya da askıya alınan kuruluş listeden çıkarılır." },
      { tip: "h2", id: "denetim", metin: "Eğitici kuruluşlar nasıl denetlenir?" },
      { tip: "p", metin: "Teorik eğitimin verilip verilmediği, içeriği, kim tarafından ve nerede verildiği, sınıf mevcutları ve eğitim sonunda sunulan belgeler Bakanlıkça kendiliğinden denetlenebilir. Eğitici kuruluşlar ile eğiticilerin yeterliliklerinin değerlendirilmesi de komisyonun görevleri arasında sayılır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 15: Eğitici kuruluşların yetkilendirilmesi",
      "Yönetmelik Taslağı Madde 16: Eğitici kuruluşların yükümlülükleri",
      "Yönetmelik Taslağı Madde 17: Eğitici kuruluşların denetimi",
      "Yönetmelik Taslağı Madde 18/4-c: Komisyonun değerlendirmesi",
      "Yönetmelik Taslağı EK-2 ve EK-4: Müfredat ve eğitici kuruluş protokolü"
    ]
  }
]
