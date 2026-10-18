// YGU Hakkında › YGU Olma Şartları makaleleri. Kaynak: YGU Yönetmelik Taslağı (Md. 5, 6, 7, 10, 14) ve EK-1, EK-2.
// Metinler özgün (kaynak sitelerle kopya testi: scratchpad/ozgunluk.mjs); edilgen dil, geniş zaman. Mevzuat bilgisi uydurulmaz.
import type { YguMakale } from '../yguBilgi'

export const OLMA_SARTLARI_MAKALELERI: YguMakale[] = [
  {
    kategori: "ygu-olma-sartlari",
    yol: "hangi-meslek-hangi-ygu-seviyesine-basvurur",
    baslik: "Kimler Yangın Güvenlik Uzmanı Olabilir? Hangi Meslek Hangi Seviyeye Başvurur?",
    ozet: "Taslakta uzmanlık belirli mesleklere açılır: teknikerler ve itfaiyecilik ön lisans mezunları YGU-1'e, mimar ve beş mühendislik dalı YGU-2'ye, kimya alanı YGU-K'ye başvurur. Listede olmayan meslekler için durum.",
    ozetle: "YGU-1'e makine, inşaat, elektrik ve elektrik-elektronik teknikerleri ile itfaiyecilik alanında iki yıllık ön lisans mezunları; YGU-2'ye mimar ile inşaat, makine, elektrik, elektronik ve elektrik-elektronik mühendisleri; YGU-K'ye kimya mühendisleri ve kimya alanında lisans mezunları başvurur. YGU-3'e doğrudan başvurulmaz. Listede sayılmayan meslekler taslakta yer almaz.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığına ilgi duyanların ilk sorusu genellikle kendi mesleğinin bu kapıyı açıp açmadığıdır. Taslağın 5. maddesinde bu soruya kapalı bir listeyle cevap verilir: her seviye için başvurabilecek meslekler tek tek sayılır." },
      { tip: "h2", id: "liste", metin: "Hangi meslek hangi seviyeye başvurur?" },
      {
        tip: "tablo",
        basliklar: ["Seviye", "Başvurabilecek meslek ve öğrenim"],
        satirlar: [
          ["YGU-1", "Makine teknikeri, inşaat teknikeri, elektrik teknikeri, elektrik ve elektronik teknikeri; itfaiyecilik alanında iki yıllık ön lisans öğrenimini tamamlayanlar"],
          ["YGU-2", "Mimar, inşaat mühendisi, makine mühendisi, elektrik mühendisi, elektronik mühendisi, elektrik ve elektronik mühendisi"],
          ["YGU-3", "Doğrudan başvuru yoktur: YGU-2 yetki belgesine sahip olup son bir yıl içinde en az iki farklı kullanım sınıfından en az dört yapının yangın güvenlik raporunu usulüne uygun düzenlemiş olanlar"],
          ["YGU-K", "Kimya mühendisleri ve kimya alanında lisans eğitimini tamamlayanlar"]
        ]
      },
      { tip: "p", metin: "Meslek şartının yanında, tüm seviyeler için ortak genel şartlar da aranır: adli sicil koşulları, terör örgütleriyle bağlantı bulunmaması, disiplin geçmişi, eğitimin tamamlanması ve sınavın geçilmesi. Bu şartlar ayrı bir yazıda açıklanır." },
      { tip: "h2", id: "itfaiyeci", metin: "İtfaiyeciler YGU olabilir mi?" },
      { tip: "p", metin: "İtfaiyecilik alanında iki yıllık ön lisans öğrenimini tamamlamış olanlar YGU-1 seviyesine başvurabilir. Listede “itfaiyeci” mesleği değil, itfaiyecilik ön lisans öğrenimi sayılır; başvuruda belirleyici olan diplomadır. İtfaiyede uzun süre görev yapmış ancak bu ön lisansı bulunmayan kişiler için taslakta ayrı bir yol öngörülmemiştir." },
      { tip: "h2", id: "muhendis-mimar", metin: "Mühendis ve mimarlar hangi seviyeden başlar?" },
      { tip: "p", metin: "Mimarlar ile inşaat, makine, elektrik, elektronik ve elektrik-elektronik mühendisleri YGU-2 seviyesinden başlar. Bu meslekler için YGU-1'den geçilmesi gerekmez. YGU-3'e ise YGU-2 belgesiyle sahada rapor düzenleyerek ulaşılır." },
      { tip: "h2", id: "listede-olmayanlar", metin: "Listede olmayan meslekler YGU olabilir mi?" },
      { tip: "p", metin: "Taslaktaki liste kapalı bir liste olarak yazılmıştır. Harita, endüstri, çevre, jeoloji, maden, metalurji gibi mühendislik dalları ile sayılanlar dışındaki tekniker programları için uzmanlık yolu öngörülmemiştir. Benzer biçimde yalnızca bir mesleki sertifikaya ya da kursa sahip olmak da yeterli sayılmaz; başvuruda temel öğrenim belgesine bakılır." },
      { tip: "p", metin: "Kimya alanındaki öğrenim ise farklı bir kapı açar: kimya mühendisleri ve kimya lisans mezunları YGU-K seviyesine başvurabilir; ancak bu seviyenin görev alanı yüksek tehlikeli yapılardaki tehlikeli madde tespiti ve sınıflandırılmasıyla sınırlıdır." },
      { tip: "h2", id: "belge", metin: "Mesleki öğrenim başvuruda nasıl belgelenir?" },
      { tip: "p", metin: "Teorik eğitime başvuruda diploma, mezuniyet belgesi, geçici mezuniyet belgesi ya da diploma denklik belgesi istenir. Mesleğini icra edebilmek için bir meslek kuruluşuna kayıtlı olması gerekenlerden, son altı ay içinde alınmış oda faaliyet ya da kayıt belgesi de istenir. YGU-3 başvurularında ayrıca mesleki tecrübeyi gösteren belge eklenir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 5/2: Seviyelere göre meslekler",
      "Yönetmelik Taslağı Madde 7: Kabul şartları",
      "Yönetmelik Taslağı Madde 10/2: Başvuru belgeleri"
    ]
  },
  {
    kategori: "ygu-olma-sartlari",
    yol: "is-guvenligi-uzmani-ygu-olabilir-mi",
    baslik: "İş Güvenliği Uzmanları Yangın Güvenlik Uzmanı Olabilir mi?",
    ozet: "İş güvenliği uzmanlığı belgesi tek başına YGU başvurusu için yeterli sayılmaz; başvuruda temel meslek ve öğrenim esas alınır. Hangi iş güvenliği uzmanlarının hangi seviyeye başvurabileceği ve iki görevin farkı.",
    ozetle: "Taslakta iş güvenliği uzmanlığı ayrı bir başvuru yolu olarak sayılmaz. Bir iş güvenliği uzmanının YGU olup olamayacağı temel mesleğine göre belirlenir: listede sayılan bir mühendislik dalından veya mimarlıktan gelenler YGU-2'ye, sayılan tekniker programlarından gelenler YGU-1'e, kimya alanından gelenler YGU-K'ye başvurabilir. Diğer öğrenim alanlarından gelen iş güvenliği uzmanları için taslakta yol öngörülmemiştir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Sahada yangın güvenliğiyle en çok temas eden meslek gruplarından biri iş güvenliği uzmanlarıdır. Acil durum planları, tatbikatlar ve yangın söndürücülerin takibi çoğu işyerinde onların gündemindedir. Bu nedenle yangın güvenlik uzmanlığı gündeme geldiğinde iş güvenliği uzmanlarının bu alana doğrudan geçip geçemeyeceği sıkça sorulur." },
      { tip: "h2", id: "kisa-cevap", metin: "İş güvenliği uzmanlığı belgesi YGU için yeterli midir?" },
      { tip: "p", metin: "Hayır. Taslağın 5. maddesinde uzmanlığa başvurabilecek meslekler sayılırken iş güvenliği uzmanlığına yer verilmez. Başvuruda belirleyici olan, kişinin iş güvenliği belgesi değil, diplomasında yazan temel meslek ve öğrenimdir." },
      { tip: "h2", id: "kim-basvurur", metin: "Hangi iş güvenliği uzmanları başvurabilir?" },
      {
        tip: "tablo",
        basliklar: ["Temel meslek", "Başvurulabilecek seviye"],
        satirlar: [
          ["Makine, inşaat, elektrik, elektronik, elektrik-elektronik mühendisi veya mimar", "YGU-2"],
          ["Makine, inşaat, elektrik veya elektrik-elektronik teknikeri", "YGU-1"],
          ["İtfaiyecilik alanında iki yıllık ön lisans mezunu", "YGU-1"],
          ["Kimya mühendisi veya kimya lisans mezunu", "YGU-K"],
          ["Diğer mühendislik dalları ve öğrenim alanları", "Taslakta öngörülmemiştir"]
        ]
      },
      { tip: "p", metin: "Örneğin makine mühendisi olan bir A sınıfı iş güvenliği uzmanı YGU-2 seviyesine başvurabilir. Endüstri mühendisi ya da fizik mezunu bir iş güvenliği uzmanı ise iş güvenliği alanındaki deneyimi ne kadar uzun olursa olsun, taslaktaki listeye göre başvuru hakkı elde edemez." },
      { tip: "h2", id: "fark", metin: "İki görev arasındaki temel fark nedir?" },
      { tip: "p", metin: "İş güvenliği uzmanı, çalıştığı işyerinin içinden, işverene danışmanlık veren bir konumda görev yapar. Yangın güvenlik uzmanı ise itfaiyenin görevlendirmesiyle, yapının dışından gelen bağımsız bir kontrolcü olarak konumlandırılır. Taslakta bu bağımsızlık özellikle vurgulanır: uzman, yapım, tasarım, danışmanlık, denetim veya malzeme satışı gibi ticari faaliyette bulunduğu yapılarda görev alamaz; iş ilişkisi bulunan kişi ve kuruluşların yapılarında da görev üstlenemez." },
      { tip: "p", metin: "Bu kural, iki görevin aynı yapıda birleştirilmesini de sınırlar. Bir işyerinde iş güvenliği uzmanı olarak çalışan kişinin aynı yapının periyodik kontrolünde yangın güvenlik uzmanı olarak görevlendirilmesi, iş ilişkisi nedeniyle taslaktaki etik kurallarla bağdaşmaz." },
      { tip: "h2", id: "avantaj", metin: "İş güvenliği deneyimi YGU için bir avantaj sağlar mı?" },
      { tip: "p", metin: "Taslakta iş güvenliği deneyimine özel bir muafiyet ya da eğitim indirimi tanınmaz. Bununla birlikte acil durum ekipleri, tatbikat düzeni ve yangın ekipmanlarının bakım kayıtları gibi konular, YGU eğitimindeki yangın güvenliği sorumluluğu ve periyodik kontrol modülleriyle örtüşür. Bu nedenle uygun temel mesleğe sahip iş güvenliği uzmanları için eğitim içeriği tanıdık bir zemine oturur." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 5/2: Seviyelere göre meslekler",
      "Yönetmelik Taslağı Madde 8/2-a ve ç: Görev alınamayacak durumlar",
      "Yönetmelik Taslağı Madde 14: Muafiyetler",
      "Yönetmelik Taslağı EK-2: Modül 7 ve Modül 8"
    ]
  },
  {
    kategori: "ygu-olma-sartlari",
    yol: "ygu-olmanin-genel-sartlari",
    baslik: "YGU Olmanın Genel Şartları: Adli Sicil, Disiplin, Yaş ve Yabancı Uyruklular",
    ozet: "Meslek şartına ek olarak tüm adaylardan aranan koşullar: mahkûmiyet engelleri, terör örgütleriyle bağlantı, disiplin geçmişi, eğitim ve sınav, 75 yaş üstü için sağlık belgesi ve yabancı uyruklu adaylardan istenen belgeler.",
    ozetle: "Yangın güvenlik uzmanı olacak kişilerde; belirli suçlardan mahkûm olmamak, kasten işlenen bir suçtan bir yıldan fazla hapis cezası almamış olmak, terör örgütleriyle iltisaklı veya irtibatlı olmamak, meslekten veya memuriyetten çıkarılmamış olmak, eğitimi tamamlayıp sınavı geçmek ve 75 yaşını dolduranlar için her yıl sağlık belgesi sunmak şartları aranır. Yabancı uyruklu adaylardan pasaport veya yabancı kimlik numarası ile çalışma izni belgesi istenir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Uygun bir mesleğe sahip olmak, yangın güvenlik uzmanı olmak için gerekli ama yeterli değildir. Taslağın 7. maddesinde tüm seviyeler için ortak kabul şartları sayılır. Bu şartlar, uzmanın kamu adına kontrol yapan bir kişi olarak güvenilirliğini sağlamaya yönelik düzenlenmiştir." },
      { tip: "h2", id: "sartlar", metin: "Tüm adaylardan hangi şartlar aranır?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "Mahkûmiyet engeli bulunmaması", metin: "Kasten işlenen bir suçtan bir yıldan fazla hapis cezası almamış olmak; ayrıca Devletin güvenliğine ve Anayasal düzene karşı suçlar, zimmet, irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, güveni kötüye kullanma, hileli iflas, ihaleye fesat karıştırma, edimin ifasına fesat karıştırma, suç gelirlerinin aklanması, kaçakçılık, gerçeğe aykırı bilirkişilik veya tercümanlık, yalan tanıklık ve yalan yere yemin suçlarından mahkûm olmamak." },
          { baslik: "Terörle bağlantı bulunmaması", metin: "Terör örgütleriyle iltisaklı veya irtibatlı olmamak." },
          { baslik: "Disiplin geçmişi", metin: "Disiplin yönünden meslekten veya memuriyetten çıkarılmamış, sanat icrasından veya mesleki faaliyetten sürekli olarak yasaklanmamış olmak." },
          { baslik: "Eğitim ve sınav", metin: "Eğitimi başarıyla tamamlamak ve sınavda başarılı olmak." },
          { baslik: "75 yaş üstü için sağlık belgesi", metin: "75 yaşını dolduranlar için görev yapmaya engel bir durum bulunmadığına dair sağlık kurum veya kuruluşundan belge almak ve bunu her yıl yenilemek." },
          { baslik: "Diğer şartlar", metin: "Yönetmelikte aranan diğer şartları taşımak." }
        ]
      },
      { tip: "h2", id: "adli-sicil", metin: "Adli sicil şartında affa ve sürelere bakılır mı?" },
      { tip: "p", metin: "Taslakta bu konuda sıkı bir ifade kullanılır. Türk Ceza Kanunu'nun 53. maddesinde belirtilen süreler geçmiş olsa bile kasten işlenen bir suçtan bir yıldan fazla hapis cezası almış olmak engel sayılır. Sayılan suçlar bakımından ise affa uğramış olunması da engeli kaldırmaz. Başvuruda bu nedenle son üç ay içinde alınmış adli sicil belgesi istenir." },
      { tip: "h2", id: "yas", metin: "YGU olmak için yaş sınırı var mıdır?" },
      { tip: "p", metin: "Taslakta bir üst yaş sınırı konulmaz. 75 yaşını dolduran uzmanlar için yalnızca ek bir yükümlülük öngörülür: görevin yapılmasına engel bir durum bulunmadığının sağlık kurum veya kuruluşundan alınacak belgeyle gösterilmesi ve bu belgenin her yıl yenilenmesi. Alt yaş sınırı ayrıca belirtilmez; ancak aranan öğrenim şartları doğal bir alt sınır oluşturur." },
      { tip: "h2", id: "sartlarin-kaybi", metin: "Şartlar sonradan kaybedilirse ne olur?" },
      { tip: "p", metin: "Uzmanın, meslek ve kabul şartlarını kaybetmesi hâlinde durumu gecikmeksizin Bakanlığa ve ilgili itfaiye teşkilatına bildirmesi gerekir. Bu bildirim yükümlülüğü etik kurallar arasında sayılır; bildirimin yapılmaması, yetki belgesinin iptaline varabilen yaptırımların konusu olabilir." },
      { tip: "h2", id: "yabancilar", metin: "Yabancı uyruklu kişiler YGU olabilir mi?" },
      { tip: "p", metin: "Taslakta yabancı uyruklu adaylar için ayrı bir yasak öngörülmez; başvuru belgeleri arasında yabancılar için düzenleme yapılır. Türkiye Cumhuriyeti vatandaşlarından kimlik numarası istenirken yabancılardan pasaport veya yabancı kimlik numarası ile çalışma iznini gösteren belge istenir. Meslek, diploma veya denklik belgesi ve diğer kabul şartları yabancı adaylar için de aynı şekilde aranır." },
      { tip: "h2", id: "basvuru-oncesi", metin: "Başvurudan önce neler kontrol edilebilir?" },
      {
        tip: "adimlar",
        liste: [
          { baslik: "Diploma kontrol edilir.", metin: "Diplomadaki bölüm adının taslaktaki listeyle örtüştüğü görülür." },
          { baslik: "Adli sicil belgesi alınır.", metin: "Başvurudan önceki son üç ay içinde alınmış olması gerekir." },
          { baslik: "Oda kaydı güncellenir.", metin: "Oda kaydı zorunlu olan meslekler için son altı ay içinde alınmış belge hazırlanır." },
          { baslik: "KEP adresi edinilir.", metin: "Tebligatlar ve görevlendirmeler kayıtlı elektronik posta üzerinden yürütülür." }
        ]
      }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 7: Kabul şartları",
      "Yönetmelik Taslağı Madde 8/1-d: Şartların kaybının bildirilmesi",
      "Yönetmelik Taslağı Madde 10/2: Başvuru belgeleri",
      "Yönetmelik Taslağı Madde 28/3: Sorumlulukların yerine getirilmemesinde iptal"
    ]
  },
  {
    kategori: "ygu-olma-sartlari",
    yol: "ygu-3-nasil-olunur",
    baslik: "YGU-3 Nasıl Olunur? Rapor Şartı, Ek Eğitim ve Yetki Alanı",
    ozet: "YGU-3'e doğrudan başvurulmaz. YGU-2 belgesinin ardından son bir yıl içinde en az iki farklı kullanım sınıfından en az dört yapının raporunun düzenlenmesi, 40 saatlik ek eğitim ve sınav gerekir.",
    ozetle: "YGU-3 seviyesi için YGU-2 yetki belgesine sahip olmak ve son bir yıl içinde en az iki farklı bina kullanım sınıfından en az dört yapının yangın güvenlik raporunu usulüne uygun düzenlemiş olmak gerekir. Başvuruda mesleki tecrübeyi gösteren belge sunulur, yüksek tehlikeli binalar (24 saat) ile uluslararası doküman ve standart okuma (16 saat) modüllerinden oluşan 40 saatlik eğitim alınır ve sınav geçilir.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "YGU-3, yangın güvenlik uzmanlığının en geniş yetkili seviyesidir. Diğer seviyelerden farklı olarak diploma ile değil, sahada kazanılan deneyimle ulaşılır. Bu nedenle YGU-3 bir başlangıç noktası değil, YGU-2'nin devamı olarak tasarlanmıştır." },
      { tip: "h2", id: "sartlar", metin: "YGU-3 için hangi şartlar aranır?" },
      {
        tip: "altlar",
        numarali: true,
        liste: [
          { baslik: "YGU-2 yetki belgesi", metin: "Geçerli bir YGU-2 belgesine sahip olunması gerekir. Dolayısıyla YGU-3'e yalnızca mimar ve sayılan mühendislik dallarından gelenler ulaşabilir." },
          { baslik: "Son bir yıldaki raporlar", metin: "Son bir yıl içinde en az dört yapıya ait yangın güvenlik raporunun usulüne uygun olarak düzenlenmiş olması gerekir." },
          { baslik: "Kullanım sınıfı çeşitliliği", metin: "Bu dört yapının en az iki farklı bina kullanım sınıfından olması gerekir." },
          { baslik: "Eğitim ve sınav", metin: "YGU-3 için öngörülen ek eğitim tamamlanır ve sınav geçilir." }
        ]
      },
      { tip: "h2", id: "rapor-sarti", metin: "Rapor şartı nasıl sağlanır?" },
      { tip: "p", metin: "Şartın üç unsuru birlikte aranır: sayı, süre ve çeşitlilik. Örneğin bir yıl içinde dört büro binasının raporunu düzenleyen bir uzman sayıyı sağlar, ancak kullanım sınıfı çeşitliliği bulunmadığı için şartı karşılamaz. Aynı dönemde iki büro ve iki konaklama yapısının raporunu düzenleyen bir uzman ise şartı sağlar." },
      { tip: "p", metin: "Raporların “usulüne uygun” düzenlenmiş olması da ayrıca vurgulanır. İtfaiyenin açıklama istediği ve cevapsız bırakılan ya da mevzuata aykırılığı tespit edilen raporların bu sayıya katılıp katılmayacağı, uygulamada komisyonun değerlendirmesine bırakılacak bir konu olarak görülebilir." },
      { tip: "h2", id: "belge", metin: "Başvuruda deneyim nasıl belgelenir?" },
      { tip: "p", metin: "YGU-3 başvurularında, diğer başvuru belgelerine ek olarak mesleki tecrübeyi tevsik eden belge istenir. Düzenlenen yangın güvenlik raporları itfaiyede arşivlendiği ve bir nüshası uzmanda saklandığı için bu belgelerin kayıtlar üzerinden doğrulanması mümkündür." },
      { tip: "h2", id: "egitim", metin: "YGU-3 eğitimi kaç saattir ve neleri kapsar?" },
      {
        tip: "tablo",
        basliklar: ["Modül", "İçerik", "Asgari süre"],
        satirlar: [
          ["Modül 6-B: Yüksek tehlikeli binalar ve tehlikeli maddeler", "Patlayıcı maddeler, parlayıcı ve patlayıcı gazlar, yanıcı ve parlayıcı sıvılar ile bu maddelerin depolandığı ve kullanıldığı yerlerde alınacak tedbirler", "24 saat"],
          ["Modül 10: Uluslararası doküman ve standart okuma", "Ulusal mevzuatta hüküm bulunmayan durumlarda değerlendirme; uluslararası standartlar ve içerikleri", "16 saat"],
          ["Toplam", "", "40 saat"]
        ]
      },
      { tip: "h2", id: "yetki", metin: "YGU-3 ile hangi işler yapılabilir?" },
      { tip: "p", metin: "YGU-3 ile tüm kullanım sınıflarında periyodik kontrol yapılabilir; proje ve iskân aşamasındaki uygunluk görüşleri ile tatbikat planlaması da üstlenilebilir. Yüksek tehlikeli endüstri ve depolama tesisleri ile yüksek tehlikeli yerlerde kontrol YGU-K ile birlikte yürütülür. Uluslararası standartlara göre tasarlanan binalar ise YGU-1 ve YGU-2 görevlendirilemediği için bu seviyeye kalır." },
      { tip: "h2", id: "muafiyet", metin: "YGU-3 belgesi doğrudan alınabilir mi?" },
      { tip: "p", metin: "Tek bir istisna öngörülür: Bakanlığın merkez teşkilatında yangın mevzuatı konusunda en az üç yıl çalışmış mimar ve sayılan mühendislik dallarından personel, eğitim ve sınava katılmaksızın YGU-3 yetki belgesi almaya hak kazanır. Bunun dışında YGU-3'e ancak YGU-2 üzerinden ulaşılır." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 5/2-c: YGU-3 şartları",
      "Yönetmelik Taslağı Madde 10/2-e: Mesleki tecrübe belgesi",
      "Yönetmelik Taslağı Madde 14: Muafiyet",
      "Yönetmelik Taslağı EK-1 Notları ve EK-2 Modül 6-B, 10"
    ]
  },
  {
    kategori: "ygu-olma-sartlari",
    yol: "ygu-egitim-ve-sinav-muafiyeti",
    baslik: "YGU Eğitim ve Sınavından Kimler Muaf Tutulur?",
    ozet: "Bakanlık merkez teşkilatında yangın mevzuatı konusunda en az üç yıl çalışmış personele, mesleğine göre eğitim ve sınava girmeden YGU-1, YGU-3 veya YGU-K belgesi verilir. Muafiyetin sınırları.",
    ozetle: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın merkez teşkilatında yangın mevzuatı konusunda en az üç yıl çalışmış personel eğitim ve sınavdan muaf tutulur. Tekniker grubundaki teknik personel YGU-1, mimar ve mühendis grubundaki personel YGU-3, kimya grubundaki teknik personel YGU-K yetki belgesi almaya hak kazanır.",
    yayin: "2026-10-18",
    bloklar: [
      { tip: "giris", metin: "Yangın güvenlik uzmanlığına geçişte eğitim ve sınav genel kural olarak herkes için aranır. Taslağın 14. maddesinde bu kurala tek bir istisna getirilir. İstisna dar tutulmuştur ve belirli bir kurumdaki belirli bir deneyime bağlanmıştır." },
      { tip: "h2", id: "kimler-muaf", metin: "Eğitim ve sınavdan kimler muaf tutulur?" },
      { tip: "p", metin: "Muafiyetten yalnızca Bakanlığın merkez teşkilatında yangın mevzuatı konusunda en az üç yıl çalışmış personel yararlanır. Taşra teşkilatında, belediyelerde, itfaiyelerde ya da özel sektörde geçirilen süreler bu madde kapsamında sayılmaz." },
      {
        tip: "tablo",
        basliklar: ["Personelin mesleği", "Verilen belge"],
        satirlar: [
          ["Tekniker grubu (YGU-1 meslekleri) — teknik personel", "YGU-1"],
          ["Mimar ve mühendis grubu (YGU-2 meslekleri) — personel", "YGU-3"],
          ["Kimya grubu (YGU-K meslekleri) — teknik personel", "YGU-K"]
        ]
      },
      { tip: "h2", id: "ygu-3", metin: "Muafiyetle neden doğrudan YGU-3 verilir?" },
      { tip: "p", metin: "Mimar ve mühendis grubundaki personele YGU-2 değil, doğrudan YGU-3 belgesi verilir. Bakanlık merkezinde yangın mevzuatı üzerinde en az üç yıl çalışmanın, YGU-3 için sahada aranan dört raporluk deneyimin ve ek eğitimin yerini tutacağı kabul edilmiş olarak değerlendirilebilir." },
      { tip: "h2", id: "sinirlar", metin: "Muafiyet hangi şartları kaldırmaz?" },
      { tip: "p", metin: "Muafiyet yalnızca eğitim ve sınav şartını kaldırır. Mesleğe ilişkin şartlar ile adli sicil, disiplin ve terör örgütleriyle bağlantı bulunmaması gibi genel kabul şartları muaf tutulan personel için de aranır. Yetki belgesinin beş yıllık geçerlilik süresi, yenileme, askıya alma ve iptal hükümleri de aynı şekilde uygulanır." },
      { tip: "h2", id: "diger-deneyimler", metin: "İtfaiyede ya da sektörde çalışmak muafiyet sağlar mı?" },
      { tip: "p", metin: "Hayır. Taslakta itfaiye personeli, yangın sistemleri sektöründe çalışanlar veya proje müellifleri için ayrıca bir muafiyet ya da eğitim indirimi öngörülmez. Bu kişiler mesleklerine uygun seviyeden eğitime katılır ve sınava girer. Mesleki deneyimin avantajı, belge alındıktan sonra sahada kendini gösterir." }
    ],
    dayanak: [
      "Yönetmelik Taslağı Madde 14: Eğitim ve sınavdan muaf tutulacaklar",
      "Yönetmelik Taslağı Madde 5/2: Seviyelere göre meslekler",
      "Yönetmelik Taslağı Madde 7 ve 13: Kabul şartları ve yetki belgesi"
    ]
  }
]
