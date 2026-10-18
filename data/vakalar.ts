// Vakalarla Öğren sayfası (/vakalarla-ogren). Metinler, sıra ve görseller kullanıcının 18 Ekim 2026 tasarımından BİREBİR
// (kullanıcı: "yazılar veriler resimler aynen"). Görseller tasarım görselinden kesildi (public/img/vaka-*.webp, vakalar-hero.webp).
// Detay sayfası yok (kullanıcı vaka ayrıntı sayfası istemedi); kartlar bağlantısız. Süzgeç etiketleri tasarımda yok, içerikten atandı.
import type { Ikon } from './icerik'

export type VakaEtiket = 'pompa' | 'alarm' | 'kacis' | 'tadilat' | 'denetim' | 'sprinkler' | 'depolama' | 'kapi'

// Tasarımdaki sırayla; `ek: true` olanlar "⋯" düğmesinin arkasında.
export const VAKA_SUZGECLER: { id: VakaEtiket; ad: string; ikon: Ikon; ek?: boolean }[] = [
  { id: 'pompa', ad: 'Yangın Pompaları', ikon: 'pompa' },
  { id: 'alarm', ad: 'Yangın Alarmı', ikon: 'alev' },
  { id: 'kacis', ad: 'Kaçış Güvenliği', ikon: 'kacis' },
  { id: 'tadilat', ad: 'Tadilat / Kullanım', ikon: 'tadilat' },
  { id: 'denetim', ad: 'Denetim / Uygunluk', ikon: 'ekip' },
  { id: 'sprinkler', ad: 'Sprinkler Sistemleri', ikon: 'uyari' },
  { id: 'depolama', ad: 'Depolama', ikon: 'depo' },
  { id: 'kapi', ad: 'Yangın Kapıları', ikon: 'kapi', ek: true }
]

export type VakaKart = { no: string; baslik: string; yer: string; ozet: string; gorsel: string; alt: string; etiketler: VakaEtiket[] }

export const VAKA_SAYFA = {
  baslik: 'Gerçek Vakalarla',
  vurgu: 'Daha Güçlü Öğrenin',
  metin:
    "Türkiye'den ve dünyadan seçilmiş gerçek yangın vakalarını, mevzuat, teknik analiz, bilirkişi raporları ve yargı süreçleri ışığında inceleyin. Her vaka, YGU çalışmalarınızda karşılaşabileceğiniz riskleri daha iyi anlamanız için hazırlanmıştır.",
  seoBaslik: 'Vakalarla Öğren: Gerçek Yangın Vakaları ve Analizleri',
  seoAciklama:
    "Türkiye'den ve dünyadan gerçek yangın vakaları: Grand Kartal, Gayrettepe, Aladağ, Davutpaşa ve yangın pompası, alarm, sprinkler, yangın kapısı ve depolama vakaları; mevzuat, teknik analiz ve bilirkişi raporları ışığında.",
  cta: {
    baslik: 'Tüm Yangın Vakalarını Keşfedin',
    metin: 'Farklı yapı türlerine ait gerçek yangın vakaları, teknik analizler, mevzuat değerlendirmeleri ve çıkarılan derslere ulaşın.',
    dugme: 'Tüm Vakaları Görüntüle'
  },
  liste: [
    {
      no: '01', baslik: 'Projede Dizel Yedek Pompa, Sahada İkinci Elektrikli Pompa: Hangi Sistem Geçerli?', yer: 'Türkiye',
      ozet: 'Onaylı projede dizel yedek pompa öngörülmesine rağmen sahada ikinci bir elektrikli pompa bulunması durumunda hangi sistemin geçerli olduğu ve nasıl değerlendirileceği ele alınmaktadır.',
      gorsel: 'vaka-dizel-pompa', alt: 'Yangın pompası dairesinde kırmızı pompalar ve borular', etiketler: ['pompa', 'denetim']
    },
    {
      no: '02', baslik: 'Grand Kartal Otel Yangını: Mevcut Yapıda Yangın Güvenliği Tedbirleri Nerede Koptu?', yer: 'Kartalkaya / Bolu, 2025',
      ozet: "Grand Kartal Otel'de meydana gelen yangın, mevcut yapıda yangın güvenliği tedbirlerinin hangi aşamalarda yetersiz kaldığını, bilirkişi raporları ve yargı süreci üzerinden incelemektedir.",
      gorsel: 'vaka-grand-kartal-yangin', alt: 'Karlı dağlar önünde yanmış otel binası', etiketler: ['kacis', 'denetim']
    },
    {
      no: '03', baslik: 'Gayrettepe Gece Kulübü Yangını: Tadilat, Kullanım ve Kaçış Güvenliği Aynı Anda Değişirse Ne Olur?', yer: 'İstanbul, 2024',
      ozet: 'Tadilat sırasında meydana gelen ve 29 kişinin yaşamını yitirdiği yangın, ruhsat, tadilat ve yangın güvenliği ilişkisinin aynı anda değişmesi durumunda ortaya çıkan riskleri göstermektedir.',
      gorsel: 'vaka-gayrettepe-yangin', alt: 'Gece kulübü binasında yangın ve itfaiye araçları', etiketler: ['tadilat', 'kacis']
    },
    {
      no: '04', baslik: 'Aladağ Öğrenci Yurdu Yangını: Kaçış Kapısı Var Görünüyor; Gerçekten Kullanılabilir mi?', yer: 'Adana, 2016',
      ozet: "Aladağ'da meydana gelen yangın, kaçış kapıları, yangın merdivenleri ve kapı düzeninin sadece projede değil, sahada da gerçekten kullanılabilir olmasının önemini ortaya koymaktadır.",
      gorsel: 'vaka-aladag-yurt', alt: 'Yangın sonrası cephesi kararmış yurt binası', etiketler: ['kacis', 'kapi']
    },
    {
      no: '05', baslik: 'Davutpaşa Patlaması: Yapının Gerçek Kullanımı Denetim Sisteminin Dışına Çıkarsa Ne Olur?', yer: 'İstanbul, 2008',
      ozet: "Davutpaşa'da meydana gelen patlama, ruhsat, kullanım ve denetim zincirinin dışına çıkılmasının yarattığı riskleri ve sorumluluk tartışmalarını TBMM kayıtlarıyla birlikte ele almaktadır.",
      gorsel: 'vaka-davutpasa', alt: 'Patlama sonrası yıkılmış iş yerleri, havadan görünüm', etiketler: ['tadilat', 'denetim']
    },
    {
      no: '06', baslik: 'Yangın Pompası Testi Sınırda: Nameplate Farkı Tek Başına “Uygun Değil” Demek İçin Yeterli mi?', yer: 'Bridge Point 4 – Vaka 163',
      ozet: 'Test sonuçları sınırda olan bir yangın pompasında, nameplate değerlerindeki farklılığın tek başına “uygun değil” değerlendirmesi için yeterli olup olmadığı incelenmektedir.',
      gorsel: 'vaka-pompa-test', alt: 'Yangın pompası etiket plakası', etiketler: ['pompa', 'denetim']
    },
    {
      no: '07', baslik: 'Onaylı Yangın Alarm Projesi Yoksa “Sistem Çalışıyor” Demek Yeterli mi?', yer: 'The Shul – Vaka 189',
      ozet: 'Onaylı yangın alarm projesi bulunmayan bir yapıda, sistemin fiilen çalışıyor olmasının mevzuat açısından yeterli sayılıp sayılmayacağı değerlendirilmektedir.',
      gorsel: 'vaka-yangin-alarm', alt: 'Yangın alarm paneli ve duman dedektörü', etiketler: ['alarm', 'denetim']
    },
    {
      no: '08', baslik: 'Yangın Kapısı Raporu Var; Ama Raporun Kendisi 8 Kapıda Kusur Söylüyor', yer: 'Complete Care at Holiday City – Vaka 198',
      ozet: 'Yangın kapıları için hazırlanmış raporun, 8 kapıda kusur tespit etmesine rağmen yapının genel uygunluğunun nasıl değerlendirileceği ele alınmaktadır.',
      gorsel: 'vaka-yangin-kapisi', alt: 'Üzerinde Yangın Kapısı yazan çelik kapı', etiketler: ['kapi', 'denetim']
    },
    {
      no: '09', baslik: 'Altı Sprinkler Sisteminden Yalnız İkisi Test Edilmiş: Bu Rapor Tüm Sistemi Kanıtlar mı?', yer: 'LATAM Building 709 – Vaka 211',
      ozet: 'Bir yapıda bulunan altı sprinkler sisteminden yalnız iki tanesinin test edilmesi durumunda, raporun tüm sistemi kanıtlayıp kanıtlamayacağı incelenmektedir.',
      gorsel: 'vaka-sprinkler', alt: 'Su püskürten sprinkler başlığı', etiketler: ['sprinkler', 'denetim']
    },
    {
      no: '10', baslik: 'Projede Açık Depo, Sahada Duvarlar ve Raflar: Yangın Alarm Sistemi Hâlâ Aynı Sistem mi?', yer: 'US Aluminum – Vaka 206',
      ozet: 'Projede açık depo olarak planlanan alanda sahada duvarlar ve raflarla kapalı bir alan oluşturulması durumunda, yangın alarm sisteminin aynı sistem olarak değerlendirilip değerlendirilemeyeceği ele alınmaktadır.',
      gorsel: 'vaka-acik-depo', alt: 'Sundurma altında raflı açık depo', etiketler: ['depolama', 'alarm', 'tadilat']
    }
  ] as VakaKart[]
}
