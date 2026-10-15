// Sitenin bütün metinleri (tasarım: design/ana-sayfa.jpeg, design/ygu-hakkinda.jpeg). Sayfalar, arama ve SEO buradan beslenir.
// Mevzuat bilgisi uydurulmaz: metinler tasarımdakiyle aynı kalır; değişiklik önce sorulur.

import { SSS_DOCX, type KonuBlok } from './konular'

export const SITE = {
  url: 'https://ygurehberi.com',
  ad: 'YGU Rehberi',
  slogan: 'Yangın Güvenliğinde Tek Rehber',
  aciklama:
    'YGU hakkında güvenilir bilgiler, gerçek yangın vakaları ve uygulamaya yönelik teknik rehberler.'
}

export type Ikon =
  | 'belge' | 'kep' | 'ekip' | 'bina' | 'fabrika' | 'takvim' | 'alev' | 'kitap' | 'canta' | 'yapilar'
  | 'uyari' | 'ev' | 'magaza' | 'okul' | 'hastane' | 'otel' | 'depo' | 'tehlike' | 'saat' | 'sinav'
  | 'rozet' | 'kullanici' | 'bilgi' | 'kask' | 'pano' | 'buyutec' | 'liste' | 'zil' | 'pusula'

// Üst menü. "Ana Sayfa" yok (logo ana sayfaya gider; kullanıcı 15 Ekim'de menüyü rahatlatmak için kaldırttı); alt bilgide var.
export const MENU = [
  { ad: 'YGU Hakkında', to: '/ygu-hakkinda' },
  { ad: 'Çalışma Alanları', to: '/calisma-alanlari' },
  { ad: 'Vakalarla Öğren', to: '/#vakalar' },
  { ad: 'Kısa Rehberler', to: '/#rehberler' },
  { ad: 'SSS', to: '/sss' }
]

export const ON_KAYIT = { ad: 'YGU Olmak İçin Ön Kayıt', to: '/on-kayit' }

export const HERO_ETIKETLER = [
  { ad: 'YGU Nedir?', to: '/yangin-guvenlik-uzmani-nedir' },
  { ad: 'Nasıl Olunur?', to: '/yangin-guvenlik-uzmani-nasil-olunur' },
  { ad: 'Eğitim ve Sınav', to: '/yangin-guvenlik-uzmani-nasil-olunur#egitim' },
  { ad: 'Serbest Çalışma', to: '/calisma-alanlari#kariyer' },
  { ad: 'Çalışma Alanları', to: '/calisma-alanlari' },
  { ad: 'Kontrol Süreleri', to: '/#kontrol-sureleri' }
]

export const HERO_KART_MADDELER: { ikon: Ikon; metin: string }[] = [
  { ikon: 'kitap', metin: 'Eğitim, sınav ve belgelendirme gelişmeleri' },
  { ikon: 'canta', metin: 'Görevlendirme ve çalışma fırsatları' },
  { ikon: 'yapilar', metin: 'Yapı türlerine dair teknik rehberler' },
  { ikon: 'uyari', metin: 'Yeni vaka analizleri ve uygulama örnekleri' }
]

// Ana sayfadaki kayan kutular (slider); sıra ve metinler kullanıcının 13 Ekim örnek görselinden.
export const HIZLI_KARTLAR: { ikon: Ikon; baslik: string; metin: string; to: string }[] = [
  { ikon: 'belge', baslik: 'YGU Nedir?', metin: 'Yangın güvenlik uzmanlığının tanımı, önemi ve kapsamı.', to: '/yangin-guvenlik-uzmani-nedir' },
  { ikon: 'kep', baslik: 'Nasıl YGU Olunur?', metin: 'Eğitim, sınav ve belgelendirme süreci.', to: '/yangin-guvenlik-uzmani-nasil-olunur' },
  { ikon: 'ekip', baslik: 'YGU Seviyeleri', metin: 'YGU-1, YGU-2, YGU-3 ve YGU-K farkları.', to: '/ygu-seviyeleri' },
  { ikon: 'bina', baslik: 'Görev ve Sorumluluklar', metin: "YGU'nun hangi görevlerde yer aldığı.", to: '/yangin-guvenlik-uzmani-gorevleri' },
  { ikon: 'fabrika', baslik: 'Çalışma Alanları', metin: 'Hangi yapılarda, hangi koşullarda görev alınabilir?', to: '/calisma-alanlari' },
  { ikon: 'canta', baslik: 'Serbest Çalışma', metin: 'Kendi adına çalışma ve bağımsız hizmet imkânları.', to: '/calisma-alanlari#kariyer' },
  { ikon: 'kitap', baslik: 'Kısa Rehberler', metin: 'Sahada kullanabileceğiniz pratik rehberler.', to: '/#rehberler' },
  { ikon: 'liste', baslik: 'Vakalarla Öğren', metin: 'Gerçek yangın vakaları ve analizleri.', to: '/#vakalar' }
]

export const SUREC = {
  ust: "YGU'nun Çalışma Yaklaşımı",
  baslik: 'Yangın Güvenliği',
  vurgu: 'Projede Başlar, Sahada Sınanır.',
  metin:
    'Yangın güvenliği, yapının tasarım aşamasında alınan kararlarla şekillenir. Projelerde tanımlanan önlemler, uygulama ve kullanım süreçlerinde doğrulanır. YGU, bu sürecin farklı aşamalarında görev alır.',
  adimlar: [
    { baslik: 'Proje', metin: 'Yangın güvenliği çözümleri tasarlanır.', gorsel: 'surec-proje' },
    { baslik: 'Uygulama', metin: 'Tasarlanan sistemler ve önlemler hayata geçirilir.', gorsel: 'surec-uygulama' },
    { baslik: 'Doğrulama', metin: 'Proje, belgeler ve gerçekleşen uygulama değerlendirilir.', gorsel: 'surec-dogrulama' },
    { baslik: 'Süreklilik', metin: 'Kullanım süresince güvenlik koşulları kontrol edilir.', gorsel: 'surec-sureklilik' }
  ]
}

export const CALISMA_ALANLARI = {
  ust: "YGU'nun Çalışma Alanları",
  baslik: 'Hangi Yapılarda Görev Alır?',
  metin:
    'Konutlardan endüstriyel tesislere kadar çok çeşitli yapı ve tesislerde yangın güvenliği değerlendirmesi, kontrol ve diğer görevleri üstlenir.',
  // BYKHY kullanım sınıfları (Md. 9–17); metinler kullanıcının gönderdiği 9 kartlı görselden (13 Ekim).
  yapilar: [
    { ikon: 'ev', ad: 'Konutlar', alt: 've Konut Siteleri', gorsel: 'yapi-konut' },
    { ikon: 'otel', ad: 'Konaklama Tesisleri', alt: '(otel, motel, pansiyon)', gorsel: 'yapi-konaklama' },
    { ikon: 'hastane', ad: 'Kurumsal Binalar', alt: '(sağlık, eğitim vb.)', gorsel: 'yapi-kurumsal' },
    { ikon: 'bina', ad: 'Büro Binaları', alt: '(ofis ve yönetim)', gorsel: 'yapi-buro' },
    { ikon: 'magaza', ad: 'Ticaret Amaçlı Binalar', alt: '(mağaza, AVM, çarşı)', gorsel: 'yapi-ticaret' },
    { ikon: 'fabrika', ad: 'Endüstriyel Yapılar', alt: '(fabrika, üretim tesisi)', gorsel: 'yapi-endustriyel' },
    { ikon: 'ekip', ad: 'Toplanma Amaçlı Binalar', alt: '(sinema, tiyatro, spor salonu)', gorsel: 'yapi-toplanma' },
    { ikon: 'depo', ad: 'Depolama Amaçlı Tesisler', alt: '(antrepo, depo, lojistik)', gorsel: 'yapi-depolama' },
    { ikon: 'tehlike', ad: 'Yüksek Tehlikeli Yerler', alt: '(yanıcı, patlayıcı maddeler)', gorsel: 'yapi-yuksek-tehlikeli' }
  ] as { ikon: Ikon; ad: string; alt: string; gorsel: string }[]
}

export const YGU_YOLU = {
  ust: 'YGU Meslek ve Kariyer Rehberi',
  baslik: 'Eğitimden Serbest Çalışmaya',
  vurgu: 'YGU Olma Yolu',
  metin: 'YGU olmak için izlenecek temel adımlar: Eğitim, sınav, belgelendirme, görevlendirme ve çalışma modelleri.',
  adimlar: [
    { ikon: 'kep', baslik: 'Eğitim', metin: 'Seviyeye göre eğitim koşulları.' },
    { ikon: 'saat', baslik: 'Eğitim Süreleri', metin: 'YGU-1,2,3 ve YGU-K için öngörülen süreler.' },
    { ikon: 'sinav', baslik: 'Sınav', metin: 'Sınav yapısı ve başarı şartları.' },
    { ikon: 'rozet', baslik: 'Belgelendirme', metin: 'Yetki belgesi ve geçerlilik süresi.' },
    { ikon: 'ekip', baslik: 'Görevlendirme', metin: 'Hangi yapılarda, hangi şartlarla?' },
    { ikon: 'kullanici', baslik: 'Serbest Çalışma', metin: 'YGU kendi adına çalışabilir mi?' }
  ] as { ikon: Ikon; baslik: string; metin: string }[]
}

export const KONTROL_SURELERI = {
  ust: 'Periyodik Kontroller',
  baslik: 'Yangın Güvenliği Kontrolleri',
  vurgu: 'Kaç Yılda Bir Yapılır?',
  metin:
    'Yapı ve tesislerin tehlike sınıfına göre periyodik yangın güvenliği kontrolleri belirli aralıklarla gerçekleştirilir. Aşağıdaki süreler, taslak düzenlemedeki örnek değerleri göstermektedir.',
  sureler: [
    { sure: '5 Yıl', metin: 'Düşük tehlikeli endüstriyel tesis' },
    { sure: '4 Yıl', metin: 'Orta tehlikeli endüstriyel tesis' },
    { sure: '3 Yıl', metin: 'Yüksek tehlikeli endüstriyel tesis' }
  ],
  diger: { baslik: 'Yapı Türüne Göre Farklı Süreler', metin: 'Konut, ticari, eğitim, sağlık vb. yapılar için detaylı tablo' },
  not: 'Bu süreler üzerinde çalışılmış YGU taslağındaki örnek değerlerdir, yürürlükteki zorunlu kontrol periyotları olarak sunulmaz.',
  not2: 'Farklı yapı sınıflarının süreleri ve detayları için ilgili sayfayı ziyaret edin.'
}

// Kontrol süresi sorgulama aracı bandı (kullanıcının 14 Ekim örnek görseli). Araç henüz yok: düğme pasif, "Yakında".
export const KONTROL_ARACI = {
  ust: 'Yapınızın',
  baslik: 'Periyodik Yangın Kontrol Süresini Öğrenin',
  metin:
    'Yapı türünüze, özelliklerine ve tehlike sınıfına göre periyodik yangın kontrol sürenizi kolayca öğrenin. Konut, otel, hastane, fabrika veya diğer yapılar için süreler farklı olabilir.',
  dugme: 'Kontrol Sürenizi Öğren',
  not: 'Bu araç yakında kullanıma açılacaktır. Tamamlandığında detaylı sorgulama yapabilirsiniz.',
  gorsel: 'yapi-konut'
}

// Gerçek vakalar: başlık/alt başlık/yer/tarih/özet kullanıcının 14 Ekim metinlerinden (değiştirilmez, uydurulmaz).
// Görseller: Grand Kartal = Commons CC BY-SA 3.0 (atıf zorunlu), Gayrettepe = Commons kamu malı (VOA Türkçe),
// Davutpaşa = temsili (telifsiz gerçek fotoğraf yok). Kartlar bağlantısız; detay sayfası istenmedi.
export type Vaka = {
  etiket: string; baslik: string; altBaslik: string; yer: string; tarih: string; tarihMetin: string; ozet: string
  gorsel: string; alt: string; kaynak: string; kaynakUrl?: string
}

export const VAKALAR = {
  ust: 'Gerçek Olaylar, Gerçek Dersler',
  baslik: 'Vakalarla Öğren',
  metin: "Dünyada ve Türkiye'de yaşanmış yangınları, teknik bakış açısıyla inceliyor, hatalardan dersler çıkarıyoruz.",
  liste: [
    {
      etiket: 'Konaklama Tesisi', baslik: 'Grand Kartal Otel Yangını',
      altBaslik: 'Mevcut Yapıda Yangın Güvenliği Tedbirleri Nerede Koptu?',
      yer: 'Kartalkaya / Bolu', tarih: '2025-01-21', tarihMetin: '21 Ocak 2025',
      ozet: "Grand Kartal Otel'de meydana gelen yangın, mevcut yapıda yangın güvenliği tedbirlerinin hangi aşamalarda yetersiz kaldığının, bilirkişi raporları ve yargı süreci üzerinden incelenmesi amacıyla ele alınmaktadır.",
      gorsel: 'vaka-grand-kartal', alt: "Kartalkaya'daki Grand Kartal Otel binası",
      kaynak: 'Foto: Melih Rüştü Çalıkoğlu, CC BY-SA 3.0', kaynakUrl: 'https://commons.wikimedia.org/wiki/File:Grand_Kartal_Hotel_in_Kartalkaya_(flatter_cropped).jpg'
    },
    {
      etiket: 'Eğlence Mekânı', baslik: 'Gayrettepe Gece Kulübü Yangını',
      altBaslik: 'Tadilat, Kullanım ve Kaçış Güvenliği Aynı Anda Değişirse Ne Olur?',
      yer: 'İstanbul', tarih: '2024-04-02', tarihMetin: '2 Nisan 2024',
      ozet: 'Tadilat sırasında meydana gelen ve 29 kişinin yaşamını yitirdiği yangın, ruhsat, tadilat ve yangın güvenliği ilişkisinin aynı anda değişmesi durumunda ortaya çıkan riskleri göstermektedir.',
      gorsel: 'vaka-gayrettepe', alt: "Gayrettepe'de yangın çıkan binanın önünde itfaiye ve AFAD ekipleri",
      kaynak: 'Foto: Umut Çolak / VOA Türkçe, kamu malı', kaynakUrl: 'https://commons.wikimedia.org/wiki/File:2024_Gayrettepe_nightclub_fire.png'
    },
    {
      etiket: 'İş Merkezi', baslik: 'Davutpaşa Patlaması',
      altBaslik: 'Yapının Gerçek Kullanımı Denetim Sisteminin Dışına Çıkarsa Ne Olur?',
      yer: 'İstanbul', tarih: '2008-01-31', tarihMetin: '31 Ocak 2008',
      ozet: "Davutpaşa'da meydana gelen patlama, ruhsat, kullanım ve denetim zincirinin dışına çıkılmasının yarattığı riskleri ve sorumluluk tartışmalarını ele almaktadır.",
      gorsel: 'vaka-yuksek-bina', alt: 'Yangın çıkan bina (temsili görsel)', kaynak: 'Temsili görsel'
    }
  ] as Vaka[]
}

export const REHBERLER = {
  ust: 'Kısa Rehberler',
  baslik: 'Sahada işinize yarayacak teknik rehberler',
  liste: [
    { baslik: 'Yangın Kapıları Uygulama Rehberi', gorsel: 'rehber-yangin-kapisi' },
    { baslik: 'Acil Aydınlatma Uygulama Rehberi', gorsel: 'rehber-acil-aydinlatma' },
    { baslik: 'Yangın Tatbikatı Planlama Rehberi', gorsel: 'rehber-tatbikat' },
    { baslik: 'Endüstriyel Tesislerde Yangın Kontrol Listesi', gorsel: 'rehber-endustriyel' }
  ]
}

// YGU Hakkında sayfası
export const YGU_NEDIR =
  'Yangın güvenlik uzmanı (YGU), yapıların yangın güvenliğinin mevzuata uygun olarak tasarlanması, uygulanması ve kullanımı süreçlerinde teknik değerlendirme, inceleme, kontrol ve raporlama yaparak kamu yararının gözetilmesine katkı sağlayan teknik uzmandır.'

export const GOREVLER = {
  metin: 'YGU, mevzuatta tanımlanan kapsamda dört temel alanda faaliyet gösterir.',
  liste: [
    { ikon: 'liste', baslik: 'Proje İnceleme ve Uygunluk Görüşü', metin: 'Yangın güvenliği projelerini mevzuata göre inceler ve uygunluk görüşüne esas rapor hazırlar.' },
    { ikon: 'kask', baslik: 'Uygulama Kontrolü', metin: 'Projede öngörülen yangın güvenliği önlemlerinin uygulama aşamasında gerçekleşmesini kontrol eder.' },
    { ikon: 'pano', baslik: 'Kullanım Sürecinde Teknik Değerlendirme', metin: 'Yapıların kullanım sürecinde yangın güvenliği koşullarını değerlendirir ve gerekli tespitleri yapar.' },
    { ikon: 'buyutec', baslik: 'Raporlama ve Değerlendirme', metin: 'Gerçekleştirilen inceleme ve kontroller sonucunda mevzuata uygun raporlar hazırlayarak ilgili kurumlara sunar.' }
  ] as { ikon: Ikon; baslik: string; metin: string }[]
}

export const SEVIYELER = {
  metin: 'Yapı türleri ve görev kapsamına göre dört farklı YGU seviyesi bulunmaktadır.',
  liste: [
    { ad: 'YGU-1', ikon: 'bina', metin: 'Teknikerler ve ilgili ön lisans mezunları için öngörülen seviye.', gorsel: 'yapi-konut' },
    { ad: 'YGU-2', ikon: 'bina', metin: 'Belirtilen mühendislik dalları ve mimarlar için öngörülen seviye.', gorsel: 'yapi-buro' },
    { ad: 'YGU-3', ikon: 'fabrika', metin: 'YGU-2 belgesi ve belirli deneyim şartlarını sağlayanlar için öngörülen seviye.', gorsel: 'yapi-endustriyel' },
    { ad: 'YGU-K', ikon: 'tehlike', metin: 'Kimya mühendisleri ve kimya lisans mezunları için öngörülen seviye.', gorsel: 'yapi-yuksek-tehlikeli' }
  ] as { ad: string; ikon: Ikon; metin: string; gorsel: string }[]
}

export const NASIL_OLUNUR =
  'YGU olma süreci, eğitim, sınav, belgelendirme ve görevlendirme aşamalarından oluşur.'

// Ön Kayıt sayfası (design/on-kayit.jpeg; üst menü ve alt bilgi sitenin kendisinden).
export const ON_KAYIT_SAYFA = {
  baslik: 'YGU',
  vurgu: 'Ön Kayıt',
  alt: 'Yangın Güvenliği Uzmanı olmak için ilk adımı şimdi atın.',
  metin:
    'Eğitim, sınav ve belgelendirme süreci hakkında güncel bilgilere ulaşın. Başvurunuzu yaparak uzmanlık yolculuğunuzda bir adım öne geçin.',
  neden: {
    baslik: 'Neden Ön Kayıt?',
    metin:
      'YGU olmak isteyenler için hazırladığımız ön kayıt sistemi, süreci daha kolay ve hızlı hale getirir. Gelişmeleri takip edebilir, size özel bilgilendirmeler alabilirsiniz.',
    maddeler: [
      { ikon: 'belge', baslik: 'Güncel Bilgi', metin: 'Eğitim, sınav ve belgelendirme sürecine dair en güncel bilgilere ulaşın.' },
      { ikon: 'zil', baslik: 'Bilgilendirme', metin: 'Başvuru süreci, sınav tarihleri ve önemli duyurulardan haberdar olun.' },
      { ikon: 'pusula', baslik: 'Doğru Yönlendirme', metin: 'Hedefinize uygun adımları planlamanıza yardımcı olacak içeriklere erişin.' },
      { ikon: 'kullanici', baslik: 'Kolay Başvuru', metin: 'Sadece birkaç adımda ön kaydınızı tamamlayın, sürecinizi başlatın.' }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  },
  form: {
    sol: 'Hayalleriniz Güvenli Yapılarla Buluşsun',
    solMetin: 'YGU olmak için ön kaydınızı hemen yapın. Sizden gelen her başvuru, yangın güvenliği için daha güçlü bir gelecek demek.',
    baslik: 'Ön Kayıt Formu',
    metin: 'Kısa bilgilerinizle ön kaydınızı oluşturun. Sizi süreç hakkında bilgilendirelim.',
    dugme: 'Ön Kaydımı Tamamla',
    gizlilik: 'Bilgileriniz gizli tutulur, üçüncü kişilerle paylaşılmaz.'
  },
  slogan: 'Daha güvenli yapılar, daha güvenli bir gelecek.'
}

export const ILLER = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin', 'Aydın',
  'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
  'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
  'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş',
  'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli',
  'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu',
  'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop', 'Şırnak', 'Sivas', 'Tekirdağ', 'Tokat',
  'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
]

// SSS sayfası (/sss). Tasarım yok; YGU Hakkında sayfasının kalıbıyla yapıldı. İlk 6 sorunun soru cümleleri Claude'un (kullanıcı 15 Ekim'de "kalsın" dedi);
// ilk 5'in yanıtı kullanıcının verdiği metinden ilgili bölümün tamamı (düz metin, aşağıda SSS_ILK_BES; `bloklar` tablo/kart görünümü için, `yanit` şema ve arama için).
// Kontrol süreleri yanıtı sitedeki metinden. Sonraki 6 soru kullanıcının metnindeki SSS bölümü (konular.ts › SSS_DOCX);
// yeni sorular kullanıcıdan gelir (mevzuat yanıtı uydurulmaz). Sayfa, FAQPage şeması, site içi arama ve llms.txt buradan beslenir.
const sureMetni = (s: string) => s.replace(' Yıl', ' yılda bir')

const SSS_ILK_BES: { soru: string; yanit: string; bloklar: KonuBlok[]; to: string }[] = [
    {
      "soru": "Yangın güvenlik uzmanı (YGU) nedir?",
      "yanit": "Yangın Güvenlik Uzmanı, belirlenen mesleki ve yetkilendirme koşullarını sağlayarak yapıların yangın güvenliği tedbirlerini değerlendirmek üzere görev yapan teknik meslek mensubudur. Yangın Güvenlik Uzmanının değerlendirme alanı yalnızca yangın algılama ve söndürme sistemleriyle sınırlı değildir. Yangın Güvenlik Uzmanı, yapının özelliklerine ve görev kapsamına göre aktif ve pasif koruma tedbirlerini, kaçış düzenlemelerini, teknik sistemleri ve bunların birbirleriyle ilişkilerini inceler. Örneğin bir fabrikada yangın algılama sisteminin çalışır durumda olması önemlidir. Ancak aynı fabrikada kaçış yollarının depolanan malzemelerle daraltılması, yangın kapılarının işlevini kaybetmesi veya yangın bölmelerinin sonradan değiştirilmesi, yapının yangın güvenliğini olumsuz etkileyebilir. Yangın Güvenlik Uzmanı bu tür durumları yapının yangın güvenliği üzerindeki etkileri bakımından da değerlendirir.",
      "bloklar": [
        {
          "tip": "p",
          "metin": "Yangın Güvenlik Uzmanı, belirlenen mesleki ve yetkilendirme koşullarını sağlayarak yapıların yangın güvenliği tedbirlerini değerlendirmek üzere görev yapan teknik meslek mensubudur."
        },
        {
          "tip": "p",
          "metin": "Yangın Güvenlik Uzmanının değerlendirme alanı yalnızca yangın algılama ve söndürme sistemleriyle sınırlı değildir. Yangın Güvenlik Uzmanı, yapının özelliklerine ve görev kapsamına göre aktif ve pasif koruma tedbirlerini, kaçış düzenlemelerini, teknik sistemleri ve bunların birbirleriyle ilişkilerini inceler."
        },
        {
          "tip": "p",
          "metin": "Örneğin bir fabrikada yangın algılama sisteminin çalışır durumda olması önemlidir. Ancak aynı fabrikada kaçış yollarının depolanan malzemelerle daraltılması, yangın kapılarının işlevini kaybetmesi veya yangın bölmelerinin sonradan değiştirilmesi, yapının yangın güvenliğini olumsuz etkileyebilir. Yangın Güvenlik Uzmanı bu tür durumları yapının yangın güvenliği üzerindeki etkileri bakımından da değerlendirir."
        }
      ],
      "to": "/yangin-guvenlik-uzmani-nedir#kimdir"
    },
    {
      "soru": "Yangın güvenlik uzmanı ne iş yapar?",
      "yanit": "Proje uygunluğu Yangın Güvenlik Uzmanı, yetkisi kapsamında yangın güvenliği projelerinin mevzuata uygunluğunu değerlendirir. Yapı kullanma izni değerlendirmeleri Yangın Güvenlik Uzmanı, projede öngörülen tedbirlerin uygulanmasını, test ve devreye alma belgelerini inceler. Periyodik kontroller Yangın Güvenlik Uzmanı, ilgili yapılarda kontrol gerçekleştirir ve sonuçları kayıt altına alır. Yangın tatbikatları Yangın Güvenlik Uzmanı, yetki ve görev kapsamı içinde tatbikat planlamasına yönelik çalışmaları yürütür.",
      "bloklar": [
        {
          "tip": "altlar",
          "numarali": false,
          "liste": [
            {
              "baslik": "Proje uygunluğu",
              "metin": "Yangın Güvenlik Uzmanı, yetkisi kapsamında yangın güvenliği projelerinin mevzuata uygunluğunu değerlendirir."
            },
            {
              "baslik": "Yapı kullanma izni değerlendirmeleri",
              "metin": "Yangın Güvenlik Uzmanı, projede öngörülen tedbirlerin uygulanmasını, test ve devreye alma belgelerini inceler."
            },
            {
              "baslik": "Periyodik kontroller",
              "metin": "Yangın Güvenlik Uzmanı, ilgili yapılarda kontrol gerçekleştirir ve sonuçları kayıt altına alır."
            },
            {
              "baslik": "Yangın tatbikatları",
              "metin": "Yangın Güvenlik Uzmanı, yetki ve görev kapsamı içinde tatbikat planlamasına yönelik çalışmaları yürütür."
            }
          ]
        }
      ],
      "to": "/yangin-guvenlik-uzmani-gorevleri#gorevler"
    },
    {
      "soru": "Yangın güvenlik uzmanı nasıl olunur?",
      "yanit": "Yangın Güvenlik Uzmanı adayı uygun yetki seviyesini belirler. Mezuniyet ve başvuru koşulları değerlendirilir. Yangın Güvenlik Uzmanı adayı teorik eğitime katılır. Mevzuat, teknik sistemler ve kontrol yöntemleri hakkında eğitim alır. Yangın Güvenlik Uzmanı adayı uygulama eğitimini tamamlar. Saha değerlendirmeleri ve raporlama çalışmalarına katılır. Yangın Güvenlik Uzmanı adayı sınavda başarılı olur. İlgili sınav koşullarını yerine getirir. Yangın Güvenlik Uzmanı yetki belgesini alır. Resmî işlemler tamamlandığında yetki kapsamındaki görevleri gerçekleştirir.",
      "bloklar": [
        {
          "tip": "adimlar",
          "liste": [
            {
              "baslik": "Yangın Güvenlik Uzmanı adayı uygun yetki seviyesini belirler.",
              "metin": "Mezuniyet ve başvuru koşulları değerlendirilir."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanı adayı teorik eğitime katılır.",
              "metin": "Mevzuat, teknik sistemler ve kontrol yöntemleri hakkında eğitim alır."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanı adayı uygulama eğitimini tamamlar.",
              "metin": "Saha değerlendirmeleri ve raporlama çalışmalarına katılır."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanı adayı sınavda başarılı olur.",
              "metin": "İlgili sınav koşullarını yerine getirir."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanı yetki belgesini alır.",
              "metin": "Resmî işlemler tamamlandığında yetki kapsamındaki görevleri gerçekleştirir."
            }
          ]
        }
      ],
      "to": "/yangin-guvenlik-uzmani-nasil-olunur#adimlar"
    },
    {
      "soru": "Yangın güvenlik uzmanı (YGU) seviyeleri nelerdir?",
      "yanit": "Yangın Güvenlik Uzmanlığı 1 (YGU-1): İlgili teknik ön lisans mezunlarına yönelik periyodik kontrol görevleri. Yangın Güvenlik Uzmanlığı 2 (YGU-2): İlgili mühendis ve mimarlara yönelik proje, uygulama ve kontrol görevleri. Yangın Güvenlik Uzmanlığı 3 (YGU-3): Deneyim koşullarına bağlı ileri yetkilendirme. Yangın Güvenlik Uzmanlığı K (YGU-K): Tehlikeli maddelerin tespiti ve sınıflandırılmasına yönelik özel yetkilendirme. Yangın Güvenlik Uzmanlığı 1 (YGU-1) İlgili teknik ön lisans mezunları için öngörülür. Yangın Güvenlik Uzmanları yetki sınırları içerisinde periyodik kontrolleri gerçekleştirir. Yangın Güvenlik Uzmanlığı 2 (YGU-2) İlgili mühendislik ve mimarlık meslek gruplarına yönelik olup proje uygunluğu, uygulama değerlendirmesi ve kontrol görevlerini kapsar. Yangın Güvenlik Uzmanlığı 3 (YGU-3) Yangın Güvenlik Uzmanlığı 2 yetkisi ve belirlenen deneyim koşullarıyla ilişkili ileri yetkilendirme seviyesidir. Yangın Güvenlik Uzmanlığı K (YGU-K) Kimya mühendisleri ve ilgili kimya lisans mezunlarına yönelik, tehlikeli maddelerin tespiti ve sınıflandırılmasıyla ilişkili özel seviyedir.",
      "bloklar": [
        {
          "tip": "tablo",
          "basliklar": [
            "Seviye",
            "Genel kapsam"
          ],
          "satirlar": [
            [
              "Yangın Güvenlik Uzmanlığı 1 (YGU-1)",
              "İlgili teknik ön lisans mezunlarına yönelik periyodik kontrol görevleri"
            ],
            [
              "Yangın Güvenlik Uzmanlığı 2 (YGU-2)",
              "İlgili mühendis ve mimarlara yönelik proje, uygulama ve kontrol görevleri"
            ],
            [
              "Yangın Güvenlik Uzmanlığı 3 (YGU-3)",
              "Deneyim koşullarına bağlı ileri yetkilendirme"
            ],
            [
              "Yangın Güvenlik Uzmanlığı K (YGU-K)",
              "Tehlikeli maddelerin tespiti ve sınıflandırılmasına yönelik özel yetkilendirme"
            ]
          ]
        },
        {
          "tip": "altlar",
          "numarali": false,
          "liste": [
            {
              "baslik": "Yangın Güvenlik Uzmanlığı 1 (YGU-1)",
              "metin": "İlgili teknik ön lisans mezunları için öngörülür. Yangın Güvenlik Uzmanları yetki sınırları içerisinde periyodik kontrolleri gerçekleştirir."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanlığı 2 (YGU-2)",
              "metin": "İlgili mühendislik ve mimarlık meslek gruplarına yönelik olup proje uygunluğu, uygulama değerlendirmesi ve kontrol görevlerini kapsar."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanlığı 3 (YGU-3)",
              "metin": "Yangın Güvenlik Uzmanlığı 2 yetkisi ve belirlenen deneyim koşullarıyla ilişkili ileri yetkilendirme seviyesidir."
            },
            {
              "baslik": "Yangın Güvenlik Uzmanlığı K (YGU-K)",
              "metin": "Kimya mühendisleri ve ilgili kimya lisans mezunlarına yönelik, tehlikeli maddelerin tespiti ve sınıflandırılmasıyla ilişkili özel seviyedir."
            }
          ]
        }
      ],
      "to": "/ygu-seviyeleri#yetki-seviyeleri"
    },
    {
      "soru": "Yangın güvenlik uzmanı hangi yapılarda görev alır?",
      "yanit": "Kontrol kapsamı yapı kullanım sınıfları ve mevzuattaki diğer koşullara göre belirlenir. Endüstriyel tesisler, depolar, sağlık ve konaklama yapıları, eğitim binaları, alışveriş merkezleri ve toplu kullanım alanları önemli yapı gruplarıdır. Yangın Güvenlik Uzmanı yapının yalnızca faaliyet adına değil, kullanım sınıfına, teknik özelliklerine ve istisnalara da bakar. Geçiş tarihleri nihai düzenlemeden doğrulanmalıdır. Konutlar ve Konut Siteleri, Konaklama Tesisleri (otel, motel, pansiyon), Kurumsal Binalar (sağlık, eğitim vb.), Büro Binaları (ofis ve yönetim), Ticaret Amaçlı Binalar (mağaza, AVM, çarşı), Endüstriyel Yapılar (fabrika, üretim tesisi), Toplanma Amaçlı Binalar (sinema, tiyatro, spor salonu), Depolama Amaçlı Tesisler (antrepo, depo, lojistik), Yüksek Tehlikeli Yerler (yanıcı, patlayıcı maddeler).",
      "bloklar": [
        {
          "tip": "p",
          "metin": "Kontrol kapsamı yapı kullanım sınıfları ve mevzuattaki diğer koşullara göre belirlenir. Endüstriyel tesisler, depolar, sağlık ve konaklama yapıları, eğitim binaları, alışveriş merkezleri ve toplu kullanım alanları önemli yapı gruplarıdır. Yangın Güvenlik Uzmanı yapının yalnızca faaliyet adına değil, kullanım sınıfına, teknik özelliklerine ve istisnalara da bakar. Geçiş tarihleri nihai düzenlemeden doğrulanmalıdır."
        },
        {
          "tip": "yapilar"
        }
      ],
      "to": "/calisma-alanlari#periyodik-kontrol"
    }
  ]

export const SSS = {
  ust: 'Sık Sorulan Sorular',
  baslik: 'Yangın Güvenlik Uzmanı (YGU)',
  vurgu: 'Sık Sorulan Sorular',
  metin: 'Yangın güvenlik uzmanlığı hakkında en çok merak edilen soruların kısa yanıtları.',
  liste: [
    ...SSS_ILK_BES,
    {
      soru: 'Yangın güvenliği kontrolleri kaç yılda bir yapılır?',
      yanit: `${KONTROL_SURELERI.metin} ${KONTROL_SURELERI.sureler.map((s) => `${s.metin}: ${sureMetni(s.sure)}`).join('; ')}. ${KONTROL_SURELERI.not}`
    },
    ...SSS_DOCX
  ] as { soru: string; yanit: string; bloklar?: KonuBlok[]; to?: string }[]
}
