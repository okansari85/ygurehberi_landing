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

// Google Analytics (G-BKK8WPW9Q5) ve çerez bildirimi (KVKK; kullanıcı 15 Ekim'de "çerez bildirimiyle" seçti).
// Onay yokken Analytics çerez kullanmaz (Consent Mode v2, nuxt.config). Karar tarayıcıda `cerez-onay` = kabul | ret.
export const ANALYTICS_ID = 'G-BKK8WPW9Q5'
export const CEREZ = {
  metin: 'Sitemizde ziyaret istatistikleri için çerez kullanıyoruz. Onay vermezseniz ölçüm çerezleri kullanılmaz.',
  kabul: 'Kabul Et',
  ret: 'Reddet'
}

export type Ikon =
  | 'belge' | 'kep' | 'ekip' | 'bina' | 'fabrika' | 'takvim' | 'alev' | 'kitap' | 'canta' | 'yapilar'
  | 'uyari' | 'ev' | 'magaza' | 'okul' | 'hastane' | 'otel' | 'depo' | 'tehlike' | 'saat' | 'sinav'
  | 'rozet' | 'kullanici' | 'bilgi' | 'kask' | 'pano' | 'buyutec' | 'liste' | 'zil' | 'pusula' | 'yenile' | 'grafik'
  | 'izgara' | 'pompa' | 'kacis' | 'tadilat' | 'kapi' | 'sprinkler' | 'noktalar' | 'kalkan' | 'disli' | 'katman' | 'takvimOnay' | 'plan' | 'aletler' | 'ciftOk' | 'hedef' | 'vinc' | 'terazi' | 'isci' | 'sise' | 'elSikisma' | 'para' | 'odemeKarti' | 'balon' | 'tik'

// Üst menü. "Ana Sayfa" yok (logo ana sayfaya gider; kullanıcı 15 Ekim'de menüyü rahatlatmak için kaldırttı); alt bilgide var.
// "Kaynaklar" açılır menü (kullanıcı 15 Ekim: rehberler ve teknik makaleler tek menü altında). `yakinda: true` = sayfası henüz yok.
export type MenuOge = { ad: string; to: string; yakinda?: boolean; alt?: MenuOge[] }
export const MENU: MenuOge[] = [
  {
    // Oğuz'un isteği (4 Kasım): Çalışma Alanları YGU Hakkında açılırına girdi; bölümler yine sayfadaki şeritte (YguBolumSeridi)
    ad: 'YGU Hakkında',
    to: '/ygu-hakkinda',
    alt: [
      { ad: 'YGU Hakkında', to: '/ygu-hakkinda' },
      { ad: 'Çalışma Alanları', to: '/calisma-alanlari' }
    ]
  },
  { ad: 'Vakalarla Öğren', to: '/vakalarla-ogren' },
  {
    ad: 'Kaynaklar',
    to: '/#rehberler',
    alt: [
      { ad: 'Kısa Rehberler', to: '/#rehberler' },
      { ad: 'Teknik Makaleler', to: '/teknik-makaleler' }
    ]
  },
  { ad: 'SSS', to: '/sss' }
]

export const ON_KAYIT = { ad: 'YGU Olmak İçin Ön Kayıt', to: '/on-kayit' }

// Hero metinleri ve etiketleri Oğuz'un 1 Kasım 2026 tasarımından.
export const HERO_ETIKETLER: { ad: string; ikon: Ikon; to: string }[] = [
  { ad: 'YGU Nedir?', ikon: 'alev', to: '/ygu-hakkinda/mevzuat/yangin-guvenlik-uzmani-nedir' },
  { ad: 'Nasıl YGU Olunur?', ikon: 'kep', to: '/ygu-hakkinda/ygu-olma-sartlari/yangin-guvenlik-uzmani-nasil-olunur' },
  { ad: 'Eğitim ve Belgelendirme', ikon: 'belge', to: '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme' },
  { ad: 'Çalışma Alanları', ikon: 'bina', to: '/calisma-alanlari' },
  { ad: 'Kontrol Süreleri', ikon: 'takvimOnay', to: '/#kontrol-sureleri' },
  { ad: 'Vakalarla Öğren', ikon: 'katman', to: '/vakalarla-ogren' }
]

export const HERO_KART_MADDELER: { ikon: Ikon; metin: string }[] = [
  { ikon: 'kalkan', metin: 'Güncel mevzuat ve uygulama bilgileri' },
  { ikon: 'disli', metin: 'Sahaya yönelik teknik rehberler ve kontrol listeleri' },
  { ikon: 'grafik', metin: 'Gerçek yangın vakalarıyla uygulamaya dönük dersler' }
]

// Ana sayfadaki kayan kutular (slider). İlk 6 kartın metni ve görseli Oğuz'un 1 Kasım 2026 tasarımından (design/ana-sayfa-kartlar.jpeg);
// bu görsellerin rozeti resmin içinde. Son ikisinde tasarım yok: mevcut görsel + `rozet` (ikon kodla çizilir).
export const HIZLI_KARTLAR: { ikon: Ikon; baslik: string; metin: string; to: string; gorsel: string; rozet?: boolean }[] = [
  { ikon: 'belge', baslik: 'YGU Nedir?', metin: 'Yangın güvenlik uzmanlığının tanımı, önemi, yasal dayanağı ve görev kapsamı.', to: '/ygu-hakkinda/mevzuat/yangin-guvenlik-uzmani-nedir', gorsel: '/img/kart-ygu-nedir.webp' },
  { ikon: 'kep', baslik: 'Nasıl YGU Olunur?', metin: 'YGU olmak için gereken başvuru koşulları, eğitim süreci, sınav ve belgelendirme adımları.', to: '/ygu-hakkinda/ygu-olma-sartlari/yangin-guvenlik-uzmani-nasil-olunur', gorsel: '/img/kart-nasil-olunur.webp' },
  { ikon: 'ekip', baslik: 'YGU Seviyeleri', metin: 'YGU-1, YGU-2, YGU-3 ve YGU-K seviyelerinin farkları, yetki alanları ve başvuru koşulları.', to: '/ygu-hakkinda/ygu-olma-sartlari/ygu-seviyeleri', gorsel: '/img/kart-seviyeler.webp' },
  { ikon: 'bina', baslik: 'Görev ve Sorumluluklar', metin: "YGU'nun proje inceleme, uygulama değerlendirme, periyodik kontrol, tatbikat ve raporlama görevleri.", to: '/yangin-guvenlik-uzmani-gorevleri', gorsel: '/img/kart-gorevler.webp' },
  { ikon: 'fabrika', baslik: 'Çalışma Alanları', metin: "YGU'nun konut, ticari yapı, endüstriyel tesis, depo, lojistik ve kamu yapılarında çalışma kapsamı.", to: '/calisma-alanlari', gorsel: '/img/kart-calisma-alanlari.webp' },
  { ikon: 'canta', baslik: 'Serbest Çalışma', metin: "YGU'nun kendi adına çalışma, danışmanlık hizmeti sunma koşulları ve uygulamadaki çalışma modeli.", to: '/serbest-calisma', gorsel: '/img/kart-serbest.webp' },
  { ikon: 'kitap', baslik: 'Kısa Rehberler', metin: 'Sahada kullanabileceğiniz pratik rehberler.', to: '/#rehberler', gorsel: '/img/rehber-endustriyel.webp', rozet: true },
  { ikon: 'liste', baslik: 'Vakalarla Öğren', metin: 'Gerçek yangın vakaları ve analizleri.', to: '/vakalarla-ogren', gorsel: '/img/vakalar-hero.webp', rozet: true }
]

export const SUREC = {
  ust: "YGU'nun Çalışma Yaklaşımı",
  baslik: 'Yangın Güvenliği Projede Başlar,',
  vurgu: 'Süreklilikle Sağlanır.',
  metin:
    'Yangın güvenliği, tasarımda belirlenen tedbirlerin doğru uygulanması, uygunluğunun doğrulanması ve yapının kullanımı süresince etkinliğinin korunmasıyla sağlanır.',
  metin2:
    'Yangın güvenlik uzmanı (YGU), mevzuatta tanımlanan görev ve yetkileri kapsamında bu sürecin ilgili aşamalarında değerlendirme, kontrol ve izleme çalışmaları yürütür.',
  // Metinler ve görseller 1 Kasım 2026 tasarımından (design/ana-sayfa-surec.png); görsellerin alt kenarındaki rozeti koddaki numara örter.
  adimlar: [
    { baslik: 'Proje', ikon: 'plan', metin: 'Yangın güvenliği gereksinimleri belirlenir, yapının özelliklerine ve mevzuata uygun koruma tedbirleri projelendirilir.', gorsel: 'anasayfa-surec-proje' },
    { baslik: 'Uygulama', ikon: 'aletler', metin: 'Projede öngörülen aktif ve pasif yangın güvenliği sistemleri usulüne uygun şekilde hayata geçirilir.', gorsel: 'anasayfa-surec-uygulama' },
    { baslik: 'Doğrulama', ikon: 'pano', metin: 'Uygulanan sistemlerin, proje, mevzuat ve teknik standartlara uygunluğu test, ölçüm ve belgelerle değerlendirilir.', gorsel: 'anasayfa-surec-dogrulama' },
    { baslik: 'Süreklilik', ikon: 'yenile', metin: 'Kullanım süresince sistemlerin işlevselliği; bakım, test, periyodik kontrol ve yapıdaki değişikliklerin değerlendirilmesiyle sürdürülür.', gorsel: 'anasayfa-surec-sureklilik' }
  ] as { baslik: string; ikon: Ikon; metin: string; gorsel: string }[]
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

// Yalnız ana sayfa bölümü: metin ve görseller 1 Kasım 2026 tasarımından (design/ana-sayfa-yapilar.jpeg). Çalışma Alanları sayfası CALISMA_ALANLARI'nı kullanır.
export const ANA_CALISMA = {
  metin:
    'Yangın güvenlik uzmanları (YGU); konutlardan konaklama ve kurumsal yapılara, ticari binalardan endüstriyel tesislere kadar farklı kullanım amaçlarına sahip yapılarda, yetki seviyeleri ve mevzuatta belirlenen görev kapsamları doğrultusunda görev alabilir.',
  yapilar: [
    { ad: 'Konutlar', alt: 'Apartman, site ve konut yapıları', gorsel: 'ana-yapi-konut' },
    { ad: 'Konaklama Amaçlı Binalar', alt: 'Otel, motel, pansiyon ve benzeri', gorsel: 'ana-yapi-konaklama' },
    { ad: 'Kurumsal Binalar', alt: 'Eğitim, sağlık, bakım ve benzeri', gorsel: 'ana-yapi-kurumsal' },
    { ad: 'Büro Binaları', alt: 'Banka, ofis, idari ve hizmet binaları', gorsel: 'ana-yapi-buro' },
    { ad: 'Ticaret Amaçlı Binalar', alt: 'Mağaza, AVM, çarşı ve benzeri', gorsel: 'ana-yapi-ticaret' },
    { ad: 'Endüstriyel Tesisler', alt: 'Fabrika, üretim ve imalat tesisleri', gorsel: 'ana-yapi-endustriyel' },
    { ad: 'Toplanma Amaçlı Binalar', alt: 'Sinema, tiyatro, spor salonu ve benzeri', gorsel: 'ana-yapi-toplanma' },
    { ad: 'Depolama Amaçlı Tesisler', alt: 'Depo, antrepo, lojistik ve benzeri', gorsel: 'ana-yapi-depolama' },
    { ad: 'Yüksek Tehlikeli Yerler', alt: 'Yanıcı ve patlayıcı madde bulunan yerler', gorsel: 'ana-yapi-tehlikeli' }
  ]
}

export const YGU_YOLU = {
  ust: 'YGU Meslek ve Kariyer Rehberi',
  baslik: 'Eğitimden Belgelendirmeye',
  vurgu: 'YGU Olma Yolu',
  // Metinler 1 Kasım 2026 tasarımından (design/ana-sayfa-yol.jpeg).
  soru: 'Kimler yangın güvenlik uzmanı olabilir?',
  metin: 'Hangi eğitimlerden geçilmeli, sınav ve belgelendirme koşulları nelerdir?',
  metinVurgu: 'YGU olma sürecini adım adım öğrenin.',
  dugme: 'YGU Olma Sürecini İncele',
  adimlar: [
    { ikon: 'kep', baslik: 'Başvuru Şartları', metin: 'Kimler, hangi seviyeye başvurabilir?' },
    { ikon: 'saat', baslik: 'Eğitim ve Süreleri', metin: 'Seviyelere göre eğitim koşulları ve süreleri.' },
    { ikon: 'sinav', baslik: 'Sınav', metin: 'Sınav konuları ve başarı koşulları.' },
    { ikon: 'rozet', baslik: 'Belgelendirme', metin: 'Yetki belgesinin alınması ve geçerliliği.' },
    { ikon: 'ekip', baslik: 'Görevlendirme', metin: 'Yetki seviyesine göre görev alma koşulları.' }
  ] as { ikon: Ikon; baslik: string; metin: string }[]
}

// Ana sayfa "YGU'nun Görevleri" ve "Serbest Çalışma İmkânı" bantları (kullanıcının 15 Ekim ekran görüntüsü).
// 2. kartın görseldeki metni okunamıyordu; Serbest Çalışma sayfasındaki aynı başlıklı metin kullanıldı.
export const ANA_GOREVLER = {
  baslik: "YGU'nun Görevleri",
  // Metinler ve görseller 1 Kasım 2026 tasarımından (design/ana-sayfa-gorevler.jpeg).
  metin: 'Yangın güvenlik uzmanı (YGU), yapıların yangın güvenliğini proje aşamasından kullanım sürecine kadar farklı yönleriyle değerlendirir.',
  metin2: 'Proje uygunluğu, yapı kullanma izni, periyodik kontroller ve yangın tatbikatlarına ilişkin dört temel görevini, mevzuatta belirlenen yetki ve sorumluluk sınırları içinde yürütür.',
  liste: [
    { baslik: 'Proje İnceleme ve Uygunluk Görüşü', ikon: 'belge', metin: 'Yangın güvenliği projeleri incelenir; mevzuat ve teknik esaslara göre gerekli uygunluk görüşü oluşturulur.', gorsel: 'ana-gorev-proje', genislik: 355 },
    { baslik: 'Yapı Kullanma İzni Aşamasında Değerlendirme', ikon: 'pano', metin: 'Yapıdaki yangın güvenliği tedbirleri, uygulama ve test belgeleriyle karşılaştırılarak değerlendirilir.', gorsel: 'ana-gorev-izin', genislik: 358 },
    { baslik: 'Yangın Güvenlik Periyodik Kontrolü', ikon: 'disli', metin: 'Kullanımdaki yapılarda, yangın güvenliği sistem ve donanımlarının mevcut durumu belirli periyotlarda kontrol edilir ve raporlanır.', gorsel: 'ana-gorev-periyodik', genislik: 357 },
    { baslik: 'Yangın Tatbikatlarının Planlanması', ikon: 'ekip', metin: 'Yangın tatbikatlarının senaryosu, görev dağılımı ve uygulama hazırlıkları planlanır; süreç değerlendirilir.', gorsel: 'ana-gorev-tatbikat', genislik: 356 }
  ] as { baslik: string; ikon: Ikon; metin: string; gorsel: string; genislik: number }[]
}

export const ANA_SERBEST = {
  ust: 'YGU Çalışma Modeli',
  baslik: 'Serbest Çalışma İmkânı',
  metin: 'Yeterli mesleki koşulları sağlayan ve geçerli YGU belgesine sahip uzmanlar, kendi adlarına veya uzman istihdam eden bir kuruluş bünyesinde yangın güvenliği hizmeti sunabilir.'
}

// Kontrol süreleri bölümü ve altındaki araç bandı: Oğuz'un tasarımı (4 Kasım 2026), metinler tasarımdan.
export const KONTROL_SURELERI = {
  ust: 'Periyodik Kontroller',
  baslik: 'Yangın Güvenliği Kontrolleri',
  vurgu: 'Kaç Yılda Bir Yapılır?',
  metin:
    'Yangın güvenlik periyodik kontrol süreleri; yapının kullanım sınıfına, yüksekliğine, büyüklüğüne, kapasitesine ve yangın tehlike düzeyine göre belirlenir. Yönetmelik taslağında yapı türlerine göre 3, 4 ve 5 yıllık kontrol periyotları öngörülmektedir.',
  sureler: [
    { sure: '5 Yıl', metin: 'Düşük tehlikeli yapılar ve tesisler için daha uzun kontrol aralığı.', cizim: 'dusuk' },
    { sure: '4 Yıl', metin: 'Orta tehlikeli yapılar ve endüstriyel tesisler için kontrol aralığı.', cizim: 'orta' },
    { sure: '3 Yıl', metin: 'Yüksek tehlikeli yapılar, endüstriyel tesisler ve özel risk taşıyan yerler için daha sık kontrol.', cizim: 'yuksek' }
  ] as { sure: string; metin: string; cizim: string }[],
  diger: { baslik: 'Yapı Türüne Göre Farklı Süreler', metin: 'Konut, ticari, eğitim, sağlık, toplanma, konaklama, depo ve diğer yapılar için detaylı tablo.' },
  dugme: 'Tüm Yapı Türleri ve Süreleri Gör',
  not: 'Gösterilen süreler, Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik **taslağındaki** düzenlemelere dayanmaktadır.'
}

// Kontrol süresi sorgulama aracı bandı. Araç henüz yok: düğme pasif, "Yakında".
export const KONTROL_ARACI = {
  ust: 'Yapınızın Periyodik Yangın',
  baslik: 'Kontrol Süresini Öğrenin',
  metin:
    'Yapınızın kullanım türünü, temel özelliklerini ve tehlike sınıfını girerek, yönetmelik taslağına göre öngörülen periyodik kontrol süresini anında öğrenin.',
  adimlar: [
    { ikon: 'bina', ad: 'Yapı Türü Seçimi' },
    { ikon: 'katman', ad: 'Özellik ve Kapasite' },
    { ikon: 'saat', ad: 'Kontrol Süresi Sonucu' }
  ] as { ikon: Ikon; ad: string }[],
  dugme: 'Kontrol Sürenizi Öğrenin',
  not: 'Bu araç yakında kullanıma açılacaktır.',
  gorsel: 'ana-yapi-buro'
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

// Eğitim, Sınav ve Belgelendirme sayfası (/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme): design/egitim-sinav-belgelendirme.jpeg.
// Metinler kullanıcının 15 Ekim'de gönderdiği tasarım görselinden birebir (yalnız sertifikadaki "Güvenliği" → "Güvenlik" düzeltildi).
export const EGITIM_SAYFA = {
  ust: 'Yangın Güvenlik Uzmanı',
  baslik: 'YGU',
  vurgu: 'Eğitim, Sınav ve',
  baslik2: 'Belgelendirme',
  metin: 'Yangın güvenlik uzmanı (YGU) olmak isteyenlerin başvuru koşullarını, eğitim, sınav ve belgelendirme süreçlerini mevzuata uygun ve anlaşılır şekilde öğrenin.',
  basvuru: {
    baslik: 'Başvuru Şartları',
    alt: 'Kimler Başvurabilir?',
    metin: 'YGU eğitimine başvurabilecek adaylar; mezuniyet alanları ve ilgili uzmanlık seviyesine özgü koşullara göre belirlenir.',
    not: 'Başvuru koşulları yalnızca mezuniyetle sınırlı değildir. Adayların, ilgili yönetmelikte belirtilen genel şartları ve yeterlilik koşullarını da sağlaması gerekir.',
    seviyeler: [
      { ad: 'YGU-1', ikon: 'kep', kimler: 'Makine, inşaat, elektrik, elektronik ve elektrik-elektronik alanlarındaki ilgili teknik ön lisans programları ile itfaiyecilik ön lisans mezunları.', sure: '65 saat' },
      { ad: 'YGU-2', ikon: 'kep', kimler: 'Mimarlar ile inşaat, makine, elektrik, elektronik ve elektrik-elektronik mühendisliği lisans mezunları.', sure: '85 saat' },
      { ad: 'YGU-3', ikon: 'liste', kimler: 'Geçerli YGU-2 belgesine sahip olup, son bir yıl içinde en az iki farklı bina kullanım sınıfından toplam en az dört yapıya ait yangın güvenlik raporunu usulüne uygun düzenlemiş olanlar.', sure: '40 saat' },
      { ad: 'YGU-K', ikon: 'sise', kimler: 'Kimya mühendisliği veya kimya lisans programı mezunları.', sure: '35 saat' }
    ] as { ad: string; ikon: Ikon; kimler: string; sure: string }[]
  },
  egitim: {
    baslik: 'Eğitim Süreleri ve İçeriği',
    alt: 'Seviyelere göre eğitim süreleri, eğitim içeriği ve uygulama.',
    icerik: {
      baslik: 'Eğitim İçeriği',
      maddeler: [
        'Yangın güvenliği mevzuatı', 'Yangın bilimi', 'Yapı ve yapı malzemelerinin yangın davranışı', 'Kaçış ve tahliye',
        'Aktif ve pasif yangın güvenlik sistemleri', 'Proje inceleme ve uygunluk değerlendirmesi', 'Periyodik kontrol ve raporlama', 'Tatbikat ve uygulamalar'
      ]
    },
    uygulama: {
      baslik: 'Eğitim Uygulaması',
      metin: 'Eğitimler teorik ve uygulamalı olarak yürütülür. Uygulama eğitiminde, mahalli itfaiye teşkilatı gözetiminde iki farklı kullanım sınıfından iki yapıda yangın güvenlik raporu düzenlenmesi gerçekleştirilir.'
    },
    odak: {
      baslik: 'YGU-K Eğitim Odak Alanı',
      metin: 'Tehlikeli maddelerin özellikleri, belirlenmesi ve sınıflandırılması ile bu maddelere ilişkin yangın ve patlama tehlikelerinin değerlendirilmesi.'
    }
  },
  sinav: {
    baslik: 'Sınav',
    alt: 'Sınav Süreci ve Başarı Şartları',
    not: 'Sınavda başarısız olan veya geçerli mazeretle sınava katılamayan adaylar, yeniden eğitim almadan bir kez daha sınava girebilir. İkinci başarısızlıkta eğitimin tekrarlanması gerekir.',
    adimlar: [
      { ikon: 'belge', baslik: 'Sınav Başvurusu', metin: 'Gerekli eğitim aşamalarını tamamlayan ve başvuru şartlarını sağlayan adaylar, ilan edilen usul ve takvime göre YGU sınavına başvurur.' },
      { ikon: 'kitap', baslik: 'Sınav Konu Başlıkları', metin: 'Sınav soruları, ilgili YGU seviyesinin eğitim müfredatı esas alınarak hazırlanır. YGU-K adayları, kendi uzmanlık alanlarına yönelik konulardan değerlendirilir.' },
      { ikon: 'hedef', baslik: 'Değerlendirme ve Başarı Kriteri', metin: 'Sınav çoktan seçmelidir.', maddeler: ['YGU-1, YGU-2 ve YGU-3 için en az 50 soru,', 'YGU-K için en az 25 soru öngörülür.', 'Başarı için 100 üzerinden en az 70 puan gerekir.'] },
      { ikon: 'grafik', baslik: 'Sonuçların Duyurulması', metin: 'Sınav sonuçları yetkili Bakanlık tarafından ilan edilir. Başarılı adaylar, diğer belgelendirme şartlarını da sağlamaları halinde yetki belgesi düzenlenmesi aşamasına geçer.' }
    ] as { ikon: Ikon; baslik: string; metin: string; maddeler?: string[] }[]
  },
  belge: {
    baslik: 'Belgelendirme',
    alt: 'YGU Belgesi Nasıl Alınır ve Yenilenir?',
    sertifika: {
      ust: 'T.C.',
      kurum: 'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı',
      ad: 'Yangın Güvenlik Uzmanı (YGU) Yetki Belgesi',
      alanlar: ['Adı Soyadı', 'T.C. Kimlik No', 'Belge Numarası', 'Düzenleme Tarihi'],
      not: 'Temsili YGU Yetki Belgesi'
    },
    gecerlilik: { baslik: 'Belgenin Geçerlilik Süresi', deger: '5 yıl', metin: 'YGU yetki belgesi, düzenlendiği tarihten itibaren beş yıl geçerlidir.' },
    maddeler: [
      { ikon: 'yenile', baslik: 'Yenileme', metin: 'Belge sahipleri, geçerlilik süresi dolmadan yenileme sınavına girerek başarılı olmaları halinde yeniden eğitim almadan belgelerini yenileyebilir. İki sınavda da başarısız olanların eğitimi tekrar tamamlaması gerekir. Süresi içinde yenilenmeyen belgeler askıya alınır.' },
      { ikon: 'ekip', baslik: 'Kayıt ve Sorgulama', metin: 'YGU belgelerine ilişkin kayıt, geçerlilik, askıya alma ve iptal işlemleri Bakanlık tarafından yürütülür. Yetkili uzmanlara ilişkin bilgiler resmî kanallardan duyurulur.' }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  },
  gorev: {
    baslik: 'Görevlendirme',
    alt: 'Hangi YGU, Hangi Yapıda Görev Alabilir?',
    not: 'YGU belgesine sahip olmak, her yapıda ve her görevde çalışma yetkisi vermez. Görevlendirmelerde yapının özellikleri, uzmanlık seviyesi, görev kapsamı ve ilgili mevzuat hükümleri birlikte değerlendirilir.',
    adimlar: [
      { ikon: 'yapilar', baslik: 'Yapı ve Görev Kapsamının Belirlenmesi', metin: 'Yapının kullanım sınıfı, büyüklüğü, kullanım özellikleri ve yangın tehlike düzeyi incelenerek yapılacak yangın güvenliği değerlendirmesinin kapsamı belirlenir.' },
      { ikon: 'kalkan', baslik: 'Yetki Seviyesinin Kontrolü', metin: 'Yapının özellikleri ve görevin niteliği, yönetmelikte tanımlanan YGU yetki seviyeleriyle karşılaştırılır. Yüksek tehlikeli yapılara ve özel uzmanlık gerektiren durumlara ilişkin hükümler dikkate alınır.' },
      { ikon: 'kullanici', baslik: "Uygun YGU'nun Görevlendirilmesi", metin: 'Gerekli yetki seviyesine ve geçerli belgeye sahip uzman, ilgili görevlendirme usulüne göre belirlenir. Periyodik kontrollerde mahalli itfaiye teşkilatının görev ve yetkileri esas alınır.' },
      { ikon: 'belge', baslik: 'İnceleme, Kontrol ve Raporlama', metin: 'Görevlendirilen YGU, yetki ve görev kapsamına göre proje uygunluğu, yapı incelemesi, periyodik yangın güvenliği kontrolü, tatbikat veya ilgili raporlama işlemlerini yürütür.' }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  },
  dayanak: [
    'Bu sayfa, Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik Taslağı esas alınarak bilgilendirme amacıyla hazırlanmıştır.',
    'Başvuru, eğitim, sınav, belgelendirme ve görevlendirmeye ilişkin koşullar nihai düzenlemede değişebilir. Resmî uygulamalarda yürürlükteki mevzuat ve yetkili Bakanlık duyuruları esas alınır.'
  ]
}

// Serbest Çalışma sayfası (/serbest-calisma): design/serbest-calisma-2.jpeg. Metinler kullanıcının 2 Kasım tasarım görselinden.
export const SERBEST_SAYFA = {
  ust: 'YGU Çalışma Modeli',
  baslik: 'Yangın Güvenlik Uzmanı (YGU) Serbest Çalışabilir mi?',
  metin: 'Yeterli mesleki koşulları sağlayan ve geçerli YGU belgesine sahip uzmanlar, kendi adlarına veya uzman istihdam eden bir kuruluş bünyesinde yangın güvenliği hizmeti sunabilir. Ancak resmî YGU hizmetleri; yetki, görevlendirme ve tarafsızlık şartlarıyla yürütülür.',
  bilgi: {
    baslik: 'Mevzuat Bilgilendirmesi',
    metin: 'Bu sayfadaki açıklamalar, yönetmelik taslağındaki çalışma modeli esas alınarak hazırlanmış bilgilendirme içeriğidir.'
  },
  kendi: {
    baslik: 'YGU Kendi Adına Çalışabilir mi?',
    metin: 'Yönetmelik taslağında, gerekli yeterlilikleri sağlayan ve geçerli yetki belgesine sahip uzmanların kendi adlarına görev alabilmesine imkân tanınmaktadır. Ancak bu durum, her yapıda ve her işlemde doğrudan serbestçe görev alınabileceği anlamına gelmez. Uzmanın yetki seviyesi, yapı özellikleri ve görevlendirme süreci birlikte değerlendirilir.'
  },
  modeller: {
    baslik: 'Serbest Çalışmanın İki Modeli',
    liste: [
      { ikon: 'kullanici', baslik: 'Bireysel Çalışma', metin: 'Uzman, kendi adına yürütülen hizmet modelinde doğrudan sorumluluk üstlenir; inceleme, tespit ve raporlama faaliyetlerini bizzat gerçekleştirir.', gorsel: 'serbest-sayfa-bireysel', alt: 'Masada duran YGU Rehberi logolu baret ve proje çizimi' },
      { ikon: 'bina', baslik: 'Şirket Üzerinden Çalışma', metin: 'Uzman, YGU istihdam eden bir kuruluş bünyesinde görev alabilir. Ancak teknik değerlendirmeler yine görevli YGU tarafından yürütülür ve sorumluluk uzmanlık çerçevesinde devam eder.', gorsel: 'serbest-sayfa-sirket', alt: 'Cam cepheli kurumsal ofis binası' }
    ] as { ikon: Ikon; baslik: string; metin: string; gorsel: string; alt: string }[]
  },
  gorevlendirme: {
    baslik: 'Serbest Çalışmada Görevlendirme Nasıl Yapılır?',
    adimlar: [
      { ikon: 'elSikisma', baslik: 'Protokol', metin: 'Mahalli itfaiye teşkilatı ile hizmet ilişkisi protokol üzerinden kurulur.' },
      { ikon: 'liste', baslik: 'Görev Bildirimi', metin: "Görevin kapsamı ve gerekli belgeler ilgili YGU'ya bildirilir." },
      { ikon: 'kask', baslik: 'Görevin Yürütülmesi', metin: 'YGU, yetki seviyesi ve görev kapsamına uygun olarak teknik incelemeyi gerçekleştirir.' },
      { ikon: 'grafik', baslik: 'Raporlama', metin: 'Tespitler ve değerlendirmeler ilgili usule uygun şekilde raporlanır.' }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  },
  bedel: {
    baslik: 'Hizmet Bedeli ve Ödeme Yapısı',
    metin: 'Serbest çalışma modelinde hizmet bedelleri belirli bir sistem çerçevesinde değerlendirilir. Hizmetin türü, kapsamı ve ilgili idarenin uygulama esasları bedelin oluşumunda etkili olur. Ödeme süreci, hizmetin tamamlanması ve onaylanmasıyla birlikte yürütülür.',
    liste: [
      { ikon: 'para', metin: 'Hizmetin türü ve kapsamı' },
      { ikon: 'disli', metin: 'Uygulama esasları' },
      { ikon: 'odemeKarti', metin: 'Ödeme süreci' }
    ] as { ikon: Ikon; metin: string }[]
  },
  bagimsizlik: {
    baslik: 'Mesleki Bağımsızlık ve Tarafsızlık',
    maddeler: [
      'YGU teknik değerlendirmelerinde bağımsız hareket eder.',
      'Çıkar çatışması doğurabilecek durumlarda görev üstlenilmez.',
      'Görev başkasına devredilmez; inceleme ve raporlama uzman tarafından yürütülür.',
      'Hazırlanan değerlendirmeler gizlilik ve meslek etiği çerçevesinde ele alınır.'
    ]
  },
  isletme: {
    baslik: 'İşletmeler Doğrudan YGU ile Çalışabilir mi?',
    metin: 'Teknik danışmanlık hizmetleri ile resmî YGU görevlendirmeleri aynı şey değildir. İşletmeler, yangın güvenliği konusunda danışmanlık alabilir; ancak resmî YGU hizmetleri ilgili görevlendirme ve hizmet modeli içinde değerlendirilir.',
    liste: [
      { ikon: 'balon', baslik: 'Teknik Danışmanlık', metin: "İşletmeler, yangın güvenliği ile ilgili planlama, iyileştirme ve uygulama konularında YGU'dan danışmanlık alabilir." },
      { ikon: 'ekip', baslik: 'Resmî YGU Hizmeti', metin: "YGU'nun resmî görevlendirmeyle yürüttüğü inceleme, tespit ve raporlama faaliyetleri ise mevzuata uygun hizmet modeli içinde gerçekleştirilir." }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  },
  bilinmesi: {
    baslik: 'Serbest Çalışmak İsteyen YGU Neleri Bilmelidir?',
    liste: [
      { ikon: 'kalkan', baslik: 'Yetki seviyesi', metin: 'Hangi yapı ve kapsamda görev alınabileceğini belirler.' },
      { ikon: 'katman', baslik: 'Görev kapsamı', metin: 'Yapılacak inceleme, tespit ve raporlama faaliyetlerinin sınırlarını ifade eder.' },
      { ikon: 'takvim', baslik: 'Görevlendirme süreci', metin: 'Hizmet ilişkisinin nasıl kurulacağı ve görevin resmî olarak nasıl başlatılacağını kapsar.' },
      { ikon: 'para', baslik: 'Hizmet bedeli', metin: 'Hizmetin niteliği ve kapsamına göre ilgili idare tarafından belirlenen esaslara göre değerlendirilir.' },
      { ikon: 'terazi', baslik: 'Bağımsızlık ve sorumluluk', metin: 'YGU, görevini tarafsız ve bağımsız şekilde yürütür; teknik değerlendirmelerinden sorumludur.' }
    ] as { ikon: Ikon; baslik: string; metin: string }[]
  }
}

// Ön Kayıt sayfası (design/on-kayit.jpeg; üst menü ve alt bilgi sitenin kendisinden).
// Ön Kayıt sayfası (/on-kayit): design/on-kayit-2.jpeg (Oğuz, 3 Kasım 2026). Metinler tasarımdan birebir.
export const ON_KAYIT_SAYFA = {
  ust: 'Yangın Güvenlik Uzmanlığı (YGU) Eğitimleri',
  baslik: 'Yangın Güvenlik Uzmanı Olmaya',
  vurgu: 'İlk Adımı Atın!',
  metin: 'YGU eğitimlerimiz için ön kaydınızı oluşturun. Eğitim takvimi, başvuru süreci ve önemli bilgilendirmelerden ilk siz haberdar olun.',
  heroDugme: 'Ön Kayıt Formuna Git',
  bant: {
    baslik: 'İlk YGU Eğitimini',
    vurgu: 'Kaçırmayın!',
    metin: 'Yakında başlayacak YGU eğitimleri, kontenjan bilgileri ve tüm detaylar için şimdi ön kaydınızı oluşturun.'
  },
  maddeler: [
    { ikon: 'hedef', baslik: 'Neden Ön Kayıt?', metin: 'Eğitim süreci ve başvuru koşulları hakkında ilk bilgilendirmeyi alın.' },
    { ikon: 'takvim', baslik: 'Eğitim Takviminden İlk Siz Haberdar Olun', metin: 'Planlanan YGU eğitimlerinin tarih ve içeriklerini önceden öğrenin.' },
    { ikon: 'zil', baslik: 'Önemli Duyuruları Kaçırmayın', metin: 'Mevzuat, başvuru ve süreç değişikliklerinden anında haberdar olun.' },
    { ikon: 'grafik', baslik: 'Kariyerinizde Yeni Bir Adım', metin: 'Yangın güvenliği alanında uzmanlaşma fırsatını değerlendirin.' }
  ] as { ikon: Ikon; baslik: string; metin: string }[],
  form: {
    baslik: 'YGU Eğitimleri Ön Kayıt Formu',
    metin: 'Bilgilerinizi girerek ön kaydınızı oluşturun.',
    seviyeler: ['YGU-1', 'YGU-2', 'YGU-3', 'YGU-K'],
    bilgiBaslik: 'Hangi YGU seviyesine başvurabileceğinizi öğrenmek ister misiniz?',
    bilgiMetin: 'Seviye tanımları, başvuru koşulları ve görev kapsamlarını inceleyin.',
    bilgiDugme: 'YGU Seviyelerini İncele',
    bilgiTo: '/ygu-hakkinda/ygu-olma-sartlari/ygu-seviyeleri',
    dugme: 'Ön Kaydımı Oluştur'
  },
  kartlar: [
    {
      baslik: 'Vakalarla Öğren',
      ikon: 'alev',
      metin: 'Gerçek vakalar, saha tespitleri ve uygulama örnekleri üzerinden öğrenin. Eksikleri, çözüm yollarını ve teknik değerlendirmeleri keşfedin.',
      dugme: 'Vakaları İncele',
      to: '/vakalarla-ogren',
      gorsel: '/img/on-kayit-vaka.webp'
    },
    {
      baslik: 'Teknik Makaleler',
      ikon: 'kitap',
      metin: 'Yangın bilimi, yapı güvenliği ve YGU uygulamalarına ilişkin kapsamlı teknik yayınlara ulaşın.',
      dugme: 'Makaleleri Oku',
      to: '/teknik-makaleler',
      gorsel: '/img/on-kayit-makale.webp'
    }
  ] as { baslik: string; ikon: Ikon; metin: string; dugme: string; to: string; gorsel: string }[],
  takip: {
    baslik: 'YGU Gelişmelerini Kaçırmayın',
    metin: 'Eğitim duyuruları, mevzuat değişiklikleri, yeni teknik makaleler ve vaka analizleriyle YGU Rehberi’ni düzenli takip edin.',
    ogeler: [
      { ikon: 'oynat', ad: 'Sosyal Medya' },
      { ikon: 'kitap', ad: 'Yeni Yayınlar' },
      { ikon: 'zil', ad: 'Güncel Duyurular' }
    ] as { ikon: 'oynat' | Ikon; ad: string }[]
  }
}

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
      "to": "/ygu-hakkinda/mevzuat/yangin-guvenlik-uzmani-nedir#kimdir"
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
      "to": "/ygu-hakkinda/ygu-olma-sartlari/yangin-guvenlik-uzmani-nasil-olunur#adimlar"
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
      "to": "/ygu-hakkinda/ygu-olma-sartlari/ygu-seviyeleri#yetki-seviyeleri"
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
      "to": "/calisma-alanlari"
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
