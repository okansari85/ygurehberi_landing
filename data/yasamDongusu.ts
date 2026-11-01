// /yangin-guvenligi-yasam-dongusu: metinler design/yasam-dongusu.jpeg'den birebir (kullanıcı 1 Kasım 2026).
import type { Ikon } from './icerik'

export const YASAM_DONGUSU = {
  ust: 'Uygulama Rehberi',
  baslik: 'Yangın Güvenliğinde',
  vurgu: 'Süreklilik',
  altBaslik: 'Projeden Kullanıma: YGU Rehberinde Yangın Güvenliğinin Yaşam Döngüsü',
  metin:
    'Bir yapının yangın güvenliği; doğru tasarım, hatasız uygulama, uygunluğun doğrulanması ve kullanım süresince etkinliğin korunmasıyla sağlanır. Bu sayfa, yangın güvenlik uzmanı (YGU) bakış açısıyla bu bütüncül süreci adım adım açıklar.',
  ozet: [
    { ikon: 'hedef', baslik: 'Temel Amaç', metin: 'Can güvenliği, mal güvenliği ve iş sürekliliğini sağlamak' },
    { ikon: 'katman', baslik: 'Kapsam', metin: 'Tasarım • Uygulama • Doğrulama • Süreklilik' },
    { ikon: 'ekip', baslik: 'Odak', metin: 'Yangın güvenlik uzmanı (YGU) için uygulama rehberi' },
    { ikon: 'kalkan', baslik: 'Değer', metin: 'Mevzuata uygun, izlenebilir ve sürdürülebilir güvenlik' }
  ] as { ikon: Ikon; baslik: string; metin: string }[],
  neden: {
    baslik: 'Neden Bir Yaşam Döngüsü Yaklaşımı?',
    metin:
      'Yangın güvenliği, tek bir aşamada tamamlanan bir iş değil; yapının tasarımından kullanım ömrü boyunca yönetilmesi gereken dinamik bir süreçtir. YGU, bu sürecin belirli aşamalarında teknik değerlendirme, kontrol ve izleme faaliyetleriyle yapının güvenliğine katkı sağlar.',
    kartBaslik: 'Bu Sayfada Neler Bulacaksınız?',
    kartMaddeler: [
      'Yangın güvenliğinin dört temel aşaması',
      'Her aşamada yapılması gereken çalışmalar',
      "YGU'nun süreçteki rolü ve katkısı",
      'Gerçekçi bir üretim tesisi uygulama örneği',
      'Sürekliliğin nasıl sağlanacağına dair pratik rehber'
    ]
  },
  asamaBaslik: 'Yangın Güvenliğinin Dört Temel Aşaması',
  asamaAlt: 'Bir yapının güvenliğini, tasarımından kullanımına kadar kesintisiz olarak ele alan bütüncül süreç.',
  asamalar: [
    {
      baslik: 'Proje',
      ikon: 'plan',
      kisa: 'Güvenliğin Tasarımı',
      alt: 'Güvenliğin Tasarlaması',
      gorsel: 'yd-proje',
      maddeler: [
        'Yapının kullanım amacı, özellikleri ve yangın tehlikeleri değerlendirilir.',
        'Kaçış düzeni, yangın bölmeleri, algılama ve uyarı, söndürme, duman kontrolü ve itfaiye erişimi gibi tedbirler birlikte planlanır.',
        'Sistemlerin birbirine uyumu ve mevzuata uygunluğu tasarım aşamasında sağlanır.'
      ],
      rol: 'Projede öngörülen yangın güvenliği tedbirlerinin mevzuata ve teknik esaslara uygunluğunu değerlendirir.'
    },
    {
      baslik: 'Uygulama',
      ikon: 'vinc',
      kisa: 'Tasarımın Hayata Geçirilmesi',
      alt: 'Tasarımın Yapıya Dönüşmesi',
      gorsel: 'yd-uygulama',
      maddeler: [
        'Projede belirlenen aktif ve pasif yangın güvenliği tedbirleri sahada hayata geçirilir.',
        'Yangın bölmeleri, tesisat geçişleri ve sistem kurulumları proje esaslarına uygun olarak tamamlanır.',
        'Uygulama sırasında ortaya çıkan değişiklikler, yangın güvenliği etkileri açısından değerlendirilir.'
      ],
      rol: 'Uygulama sürecinde teknik kontrol, uygunluk değerlendirmesi ve sahada gerekli tespitleri yapar.'
    },
    {
      baslik: 'Doğrulama',
      ikon: 'liste',
      kisa: 'Uygunluk ve İşlev Kontrolü',
      alt: 'Uygunluk ve İşlev Kontrolü',
      gorsel: 'yd-dogrulama',
      maddeler: [
        'Gerçekleşen uygulamalar, onaylı proje, mevzuat ve ilgili standartlarla karşılaştırılır.',
        'Sistemlerin test, ölçüm ve devreye alma kayıtları incelenir.',
        'Alarm, kapı tutucu, duman kontrolü gibi birbirine bağlı sistemlerin öngörülen senaryolardaki işlevi doğrulanır.'
      ],
      rol: 'Uygulamanın bütüncül uygunluğunu değerlendirir, tespit edilen eksiklikler için teknik öneriler geliştirir ve raporlar.'
    },
    {
      baslik: 'Süreklilik',
      ikon: 'yenile',
      kisa: 'Kullanım Boyunca Koruma',
      alt: 'Kullanım Boyunca Koruma',
      gorsel: 'yd-sureklilik',
      maddeler: [
        'Sistemlerin bakım, test ve periyodik kontrolleri planlanır ve yürütülür.',
        'Üretim, depolama, yerleşim veya tesisat değişikliklerinin yangın güvenliğine etkileri değerlendirilir.',
        'Eksiklikler için düzeltici faaliyetler yapılarak güvenlik koşullarının sürekliliği sağlanır.'
      ],
      rol: 'Periyodik kontrol, değişiklik değerlendirmesi ve kullanım sürecindeki teknik durumun izlenmesine katkı sağlar.'
    }
  ] as { baslik: string; ikon: Ikon; kisa: string; alt: string; gorsel: string; maddeler: string[]; rol: string }[],
  ornek: {
    baslik: 'Örnek Uygulama: Üretim Tesisinde Yaşam Döngüsü',
    alt: 'Aynı üretim tesisi üzerinden, yangın güvenliğinin dört aşamada nasıl sağlandığını inceleyelim.',
    adimlar: [
      { baslik: 'Proje', metin: 'Üretim süreci, yangın yükü, çalışan sayısı ve yapı özelliklerine göre bütüncül yangın güvenliği projesi hazırlanır.' },
      { baslik: 'Uygulama', metin: 'Projede yer alan bölmeler, sistemler ve güvenlik tedbirleri sahada uygulanır; kritik detaylar kontrol edilir.' },
      { baslik: 'Doğrulama', metin: 'Uygulamanın proje ve mevzuata uygunluğu test, ölçüm ve belgelerle doğrulanır.' },
      { baslik: 'Süreklilik', metin: 'Tesis işletmeye alındıktan sonra bakım, test, periyodik kontrol ve yapılan değişikliklerin etkisi düzenli olarak yönetilir.' }
    ]
  },
  yer: {
    baslik: "YGU'nun Süreçteki Yeri",
    metin:
      'Yangın güvenlik uzmanı (YGU), mevzuatta tanımlanan görev ve yetkileri çerçevesinde; proje, uygulama, doğrulama ve kullanım sürecinde teknik değerlendirme, kontrol, izleme ve raporlama faaliyetleriyle yangın güvenliğinin sürekliliğine katkı sağlar.'
  },
  paydaslar: {
    baslik: 'Süreçte Yer Alan Diğer Paydaşlar',
    liste: ['Proje müellifleri (mimar, mühendis)', 'Yapım yüklenicisi ve uygulayıcılar', 'Yapı sahibi / işletmeci', 'Bakım ve servis kuruluşları', 'Yetkili kurumlar'],
    yan: 'Yangın güvenliği, ortak sorumlulukla yönetilen bir süreçtir.'
  },
  saglar: {
    baslik: 'Doğru Yönetilen Süreç Ne Sağlar?',
    liste: ['Can güvenliğini artırır.', 'Maddi kayıpları ve iş kesintisini azaltır.', 'Mevzuata uyumu ve yasal güvenceyi destekler.', 'Yapının kullanım ömrü boyunca güvenliği korur.']
  },
  mevzuat: {
    baslik: 'İlgili Mevzuat ve Teknik Çerçeve',
    metin:
      'Binaların Yangından Korunması Hakkında Yönetmelik, ilgili kılavuzlar, 3194 sayılı Kanun, İSG mevzuatı ve uygulanabilir standartlar, yangın güvenliğinin tasarım, uygulama, kontrol ve kullanım aşamalarına ilişkin temel çerçeveyi oluşturur.'
  },
  sonuc: {
    baslik: 'Sonuç',
    metin:
      "Yangın güvenliği; doğru planlama, nitelikli uygulama, objektif doğrulama ve etkin süreklilik yönetimi ile sağlanır. Bu sürecin etkin yürütülmesinde YGU'nun teknik değerlendirmeleri ve izleme faaliyetleri kritik bir rol oynar."
  }
}
