// YGU Hakkında › kategoriler ve makaleler (/ygu-hakkinda/<kategori>, /ygu-hakkinda/<kategori>/<makale>).
// Kategoriler yangin.com.tr'deki YGU soru kategorilerinin anlamıyla, kendi adlarımızla; adları ve sırası kullanıcının (18 Ekim). Makaleler
// soru-cevap değil, makale biçiminde; metinler özgün (kopya yok) ve YALNIZCA "Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol
// Usul ve Esasları Hakkında Yönetmelik Taslağı" ile eklerine dayanır. Mevzuat bilgisi uydurulmaz; taslak olduğu belirtilir.
// Yazarlar: Okan SARI ve Oğuzhan YAVUZ (İş Güvenliği Uzmanı), her makalede ikisi birlikte.
import type { Ikon } from './icerik'
import type { KonuBlok } from './konular'
import { MEVZUAT_MAKALELERI } from './ygu-makaleler/mevzuat'
import { OLMA_SARTLARI_MAKALELERI } from './ygu-makaleler/olma-sartlari'
import { EGITIM_MAKALELERI } from './ygu-makaleler/egitim'
import { PERIYODIK_MAKALELERI } from './ygu-makaleler/periyodik'
import { ETIK_MAKALELERI } from './ygu-makaleler/etik'
import { MERAK_MAKALELERI } from './ygu-makaleler/merak'

export const YAZARLAR = [
  { ad: 'Okan SARI', unvan: 'İş Güvenliği Uzmanı' },
  { ad: 'Oğuzhan YAVUZ', unvan: 'İş Güvenliği Uzmanı' }
]

export type YguKategori = {
  yol: string
  ad: string
  ikon: Ikon
  gorsel: string // public/img/<ad>.webp: kategori sayfasının hero ve içerik arka planı
  kisa: string // kartta ve menüde alt satır
  seoBaslik: string
  aciklama: string
  mevcut: { baslik: string; ozet: string; to: string }[] // sitede zaten olan ve bu kategoriye giren sayfalar
}

export type YguMakale = {
  kategori: string
  yol: string
  baslik: string
  ozet: string
  ozetle: string // makalenin başındaki "Kısaca" kutusu
  yayin: string
  guncelleme?: string
  bloklar: KonuBlok[]
  dayanak: string[]
  arac?: { baslik: string; metin: string; dugme: string; url: string }
}

export const YGU_KATEGORILER: YguKategori[] = [
  {
    yol: 'mevzuat',
    ad: 'Mevzuat',
    ikon: 'belge',
    gorsel: 'surec-proje',
    kisa: 'Yönetmeliğin amacı, kapsamı, takvimi ve sistemin aktörleri',
    seoBaslik: 'YGU Yönetmeliği ve Mevzuat: Kapsam, Dayanak ve Yürürlük | YGU Rehberi',
    aciklama: 'Yangın güvenlik uzmanlığı yönetmeliği neyi düzenliyor, hangi yapıları kapsıyor, ne zaman yürürlüğe giriyor? YGU sisteminin yasal çerçevesi.',
    mevcut: [{ baslik: 'Yangın Güvenlik Uzmanı (YGU) Nedir?', ozet: 'YGU kimdir, neden gereklidir, iş güvenliği uzmanlığından farkı nedir?', to: '/ygu-hakkinda/mevzuat/yangin-guvenlik-uzmani-nedir' }]
  },
  {
    yol: 'ygu-olma-sartlari',
    ad: 'YGU Olma Şartları',
    ikon: 'rozet',
    gorsel: 'hakkinda-hero',
    kisa: 'Hangi meslek hangi seviyeye başvurur, genel şartlar ve muafiyetler',
    seoBaslik: 'Yangın Güvenlik Uzmanı Olma Şartları: Meslekler, Seviyeler ve Muafiyetler | YGU Rehberi',
    aciklama: 'Kimler yangın güvenlik uzmanı (YGU) olabilir? YGU-1, YGU-2, YGU-3 ve YGU-K için meslek şartları, genel koşullar ve eğitimden muafiyet.',
    mevcut: [
      { baslik: 'Yangın Güvenlik Uzmanı Nasıl Olunur?', ozet: 'Kimler YGU olabilir, eğitim, sınav ve yetki belgesi süreci.', to: '/ygu-hakkinda/ygu-olma-sartlari/yangin-guvenlik-uzmani-nasil-olunur' },
      { baslik: 'YGU Seviyeleri', ozet: 'YGU-1, YGU-2, YGU-3 ve YGU-K seviyeleri ve aralarındaki farklar.', to: '/ygu-hakkinda/ygu-olma-sartlari/ygu-seviyeleri' }
    ]
  },
  {
    yol: 'egitim-ve-belgelendirme',
    ad: 'Eğitim ve Belgelendirme',
    ikon: 'kep',
    gorsel: 'egitim-hero',
    kisa: 'Müfredat, başvuru belgeleri, sınav kuralları ve yetki belgesi',
    seoBaslik: 'YGU Eğitimi ve Belgelendirme: Müfredat, Sınav, Yetki Belgesi | YGU Rehberi',
    aciklama: 'Yangın güvenlik uzmanlığı eğitimi nasıl yapılır, sınavda kaç soru var, geçme notu kaç, yetki belgesi ne kadar geçerli? YGU eğitim, sınav ve belgelendirme süreci.',
    mevcut: [{ baslik: 'Eğitim, Sınav ve Belgelendirme', ozet: 'Seviyelere göre eğitime kimlerin katılabileceği, eğitim süreleri, sınav ve YGU belgesi.', to: '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme' }]
  },
  {
    yol: 'periyodik-kontroller',
    ad: 'Periyodik Kontroller',
    ikon: 'takvim',
    gorsel: 'surec-dogrulama',
    kisa: 'Kontrol süreleri, başvuru, aşamalar, rapor ve ücret',
    seoBaslik: 'Periyodik Yangın Kontrolleri: Süreler, Başvuru ve Süreç | YGU Rehberi',
    aciklama: 'Periyodik yangın kontrolü kaç yılda bir yapılır, başvuruyu kim yapar, kontrol nasıl ilerler, eksiklik çıkarsa ne olur? Yapı sahipleri ve yöneticiler için rehber.',
    mevcut: []
  },
  {
    yol: 'meslek-etigi',
    ad: 'Tarafsızlık ve Meslek Etiği',
    ikon: 'pusula',
    gorsel: 'surec-uygulama',
    kisa: 'Bağımsızlık, çıkar çatışması, gizlilik ve yaptırımlar',
    seoBaslik: 'YGU Meslek Etiği: Bağımsızlık, Tarafsızlık ve Yaptırımlar | YGU Rehberi',
    aciklama: 'Yangın güvenlik uzmanı hangi işlerde görev alamaz, bağımsızlık ve gizlilik kuralları nelerdir, kurallara uymayan YGU\'ya hangi yaptırımlar uygulanır?',
    mevcut: []
  },
  {
    yol: 'merak-edilenler',
    ad: 'Merak Edilenler',
    ikon: 'bilgi',
    gorsel: 'rehber-tatbikat',
    kisa: 'İtfaiye ile çalışma, uygunluk görüşü, tatbikat ve diğer konular',
    seoBaslik: 'YGU Hakkında Merak Edilenler: Görevler, İtfaiye ile Çalışma, Tatbikat | YGU Rehberi',
    aciklama: 'Yangın güvenlik uzmanı itfaiye ile nasıl çalışır, uygunluk görüşü nedir, tatbikat nasıl planlanır? YGU hakkında merak edilen diğer konular.',
    mevcut: [
      { baslik: 'Yangın Güvenlik Uzmanının Görevleri', ozet: 'YGU sahada ne yapar, hangi sorunlarla karşılaşır, rapor nasıl hazırlanır?', to: '/ygu-hakkinda/merak-edilenler/yangin-guvenlik-uzmani-gorevleri' },
      { baslik: 'Çalışma Alanları', ozet: 'YGU\'nun görev alabileceği yapılar ve kariyer alanları.', to: '/calisma-alanlari' },
      // SSS ana menüden kaldırıldı, buradan ulaşılır (kullanıcı 18 Ekim: "Merak Edilenler varsa SSS ana menüden kalksın")
      { baslik: 'Sık Sorulan Sorular', ozet: 'Yangın güvenlik uzmanlığı hakkında en çok sorulan sorular ve kısa yanıtları.', to: '/sss' }
    ]
  }
]

// Makaleler kategori dosyalarında (data/ygu-makaleler/*.ts); sıra = kategori sayfasındaki sıra.
export const YGU_MAKALELER: YguMakale[] = [
  ...MEVZUAT_MAKALELERI, ...OLMA_SARTLARI_MAKALELERI, ...EGITIM_MAKALELERI,
  ...PERIYODIK_MAKALELERI, ...ETIK_MAKALELERI, ...MERAK_MAKALELERI
]

// Her makalenin en altında (metin, dayanak ve yazarlardan sonra). Konu sayfalarındaki notla aynı başlık.
export const MEVZUAT_NOTU: KonuBlok = {
  tip: 'not',
  etiket: 'Mevzuat bilgilendirmesi',
  metin: 'Bu yazı, Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik Taslağı\'na dayanmaktadır. Taslak henüz Resmî Gazete\'de yayımlanmamıştır; nihai metinde hükümler ve süreler değişebilir. Güncel durum resmî mevzuat üzerinden doğrulanmalıdır. Yönetmelik yayımlandığında yazı güncellenecektir.'
}

// Sitede önceden kökte olan sayfalar YGU Hakkında altına taşındı (kullanıcı 18 Ekim); eski adresler public/.htaccess'te 301.
export const KONU_KATEGORI: Record<string, string> = {
  'yangin-guvenlik-uzmani-nedir': 'mevzuat',
  'yangin-guvenlik-uzmani-nasil-olunur': 'ygu-olma-sartlari',
  'ygu-seviyeleri': 'ygu-olma-sartlari',
  'yangin-guvenlik-uzmani-gorevleri': 'merak-edilenler'
}
export const konuYolu = (y: string) => `/ygu-hakkinda/${KONU_KATEGORI[y]}/${y}`

export const yguKategori = (yol: string) => YGU_KATEGORILER.find((k) => k.yol === yol)
export const kategoriMakaleleri = (yol: string) => YGU_MAKALELER.filter((m) => m.kategori === yol)
