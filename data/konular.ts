// Konu sayfaları (/<yol>): metinler kullanıcının verdiği metinden birebir (15 Ekim 2026; yalnız bölüm numaraları atıldı). Düz metin; doğrudan burada düzenlenir.
// Sayfa: pages/[konu].vue. Mevzuat bilgisi uydurulmaz; metin değişikliği önce kullanıcıya sorulur.

export type KonuBlok =
  | { tip: 'giris' | 'p' | 'h3'; metin: string }
  | { tip: 'h2'; id: string; metin: string }
  | { tip: 'not'; etiket: string; metin: string }
  | { tip: 'tablo'; basliklar: string[]; satirlar: string[][] }
  | { tip: 'adimlar'; liste: { baslik: string; metin: string }[] }
  | { tip: 'altlar'; numarali: boolean; liste: { baslik: string; metin: string }[] }
  | { tip: 'yapilar' }
  | { tip: 'denklem'; metin: string }
  | { tip: 'gorsel'; src: string; aciklama: string; genislik: number; yukseklik: number }

export type Konu = {
  kart: string
  ust: string
  baslik: string
  seoBaslik: string
  aciklama: string
  gorsel: string
  bloklar: KonuBlok[]
}

export const KONULAR: Record<string, Konu> = {
  "yangin-guvenlik-uzmani-nedir": {
    "kart": "YGU Nedir?",
    "ust": "Yangın Güvenlik Uzmanlığı",
    "baslik": "Yangın Güvenlik Uzmanı (YGU) Nedir?",
    "seoBaslik": "Yangın Güvenlik Uzmanı (YGU) Nedir, Kimdir? Neden Gereklidir? | YGU Rehberi",
    "aciklama": "Yangın güvenlik uzmanı (YGU) kimdir, yangın güvenlik uzmanlığı neden gereklidir? İş güvenliği uzmanlığından farkı ve sertifika ile yetki belgesi arasındaki ayrım.",
    "gorsel": "hakkinda-ygu-nedir",
    "bloklar": [
      {
        "tip": "giris",
        "metin": "Bir binada yangın algılama sistemi bulunması, yangın güvenliğinin sağlandığı anlamına gelir mi? Yangın kapılarının takılmış olması, kaçış yollarının güvenli olduğunu gösterir mi? Yangın su deposunun mevcut olması, söndürme sistemlerinin ihtiyaç duyduğu suyun her koşulda sağlanabileceğini kanıtlar mı?"
      },
      {
        "tip": "p",
        "metin": "Bu soruların yanıtı, yalnızca yangın güvenliği ekipmanlarının varlığına bakılarak verilemez."
      },
      {
        "tip": "p",
        "metin": "Bir yapının yangın güvenliği; tasarım kararlarının doğruluğuna, uygulamaların projeye uygunluğuna, teknik sistemlerin çalışabilirliğine ve yapı kullanılırken alınan tedbirlerin korunmasına bağlıdır."
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı (YGU), yapıların yangın güvenliği tedbirlerinin teknik ve mevzuat yönünden değerlendirilmesini sağlayacak mesleki yetkilendirme sistemidir."
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanları, yetkileri kapsamında yapıların yangın güvenliği tedbirlerini değerlendirir, uygunluk kontrollerini gerçekleştirir ve sonuçlarını raporlar."
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı sisteminin amacı, yangın güvenliğini yalnızca yapı tamamlandığında ele alınan bir konu olmaktan çıkararak kullanım süresince de kontrol edilen bir teknik sorumluluk alanı hâline getirmektir."
      },
      {
        "tip": "not",
        "etiket": "Mevzuat bilgilendirmesi",
        "metin": "Bu makalede açıklanan yetkilendirme seviyeleri, eğitim, sınav ve periyodik kontrol takvimi, yönetmelik taslağında öngörülen çerçeveye dayanmaktadır. Nihai hükümler ve yürürlük durumu resmî mevzuat üzerinden doğrulanmalıdır."
      },
      {
        "tip": "h2",
        "id": "kimdir",
        "metin": "Yangın Güvenlik Uzmanı Kimdir?"
      },
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
      },
      {
        "tip": "h2",
        "id": "neden-gerekli",
        "metin": "Yangın Güvenlik Uzmanlığı Neden Gereklidir?"
      },
      {
        "tip": "p",
        "metin": "Binaların yangın güvenliği tedbirleri, yapıların kullanım süresince değişen koşullardan etkilenebilir. Bir üretim tesisi yeni makineler kullanmaya başlayabilir; bir depoda yanıcı malzeme miktarı artabilir; bir işyerinde yeni bölmeler oluşturulabilir. Bu değişiklikler, ilk tasarımda kabul edilen yangın güvenliği koşullarını etkileyebilir."
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı sisteminin önemli işlevlerinden biri, yapının kullanım sürecindeki mevcut durumunu da değerlendirmektir."
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Aşama",
          "Yangın güvenliği açısından anlamı"
        ],
        "satirlar": [
          [
            "Tasarım",
            "Yapının özelliklerine ve mevzuata uygun tedbirlerin projelendirilmesi"
          ],
          [
            "Uygulama",
            "Tedbirlerin doğru uygulanması, test edilmesi ve devreye alınması"
          ],
          [
            "Kullanım ve kontrol",
            "Tedbirlerin korunması, değişikliklerin değerlendirilmesi ve gerekli kontroller"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "is-guvenligi-farki",
        "metin": "Yangın Güvenlik Uzmanlığı ile İş Güvenliği Uzmanlığı Arasındaki Fark Nedir?"
      },
      {
        "tip": "p",
        "metin": "İş Güvenliği Uzmanlığı, işyerindeki çalışanların sağlık ve güvenliğini etkileyen tehlikelere odaklanır. Yangın Güvenlik Uzmanlığı ise yapıların yangın güvenliği tedbirlerinin teknik ve mevzuat uygunluğunu değerlendirir. Bir yetki belgesi, diğer mesleğin yetkisini kendiliğinden sağlamaz."
      },
      {
        "tip": "h2",
        "id": "sertifika-yetki-belgesi",
        "metin": "Yangın Güvenlik Uzmanlığı Sertifikası ile Yetki Belgesi Aynı mıdır?"
      },
      {
        "tip": "p",
        "metin": "Yangın güvenliği alanındaki eğitim sertifikaları ile resmî Yangın Güvenlik Uzmanlığı yetki belgesi aynı değildir. Resmî görev yürütmek için ilgili mevzuatın öngördüğü yetkilendirme koşullarının tamamlanması gerekir."
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç: Yangın Güvenlik Uzmanlığının Yangın Güvenliğindeki Yeri"
      },
      {
        "tip": "p",
        "metin": "Yangın güvenliği, bir yapının tasarımında alınan kararlarla başlar. Bu kararların doğru uygulanması, gerekli testlerin gerçekleştirilmesi ve tedbirlerin kullanım süresince korunması gerekir. Yangın Güvenlik Uzmanlığı, yapıların yangın güvenliği tedbirlerinin teknik ve mevzuat yönünden değerlendirilmesine yönelik yetkilendirme sistemi oluşturmayı amaçlar."
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlarının yalnızca ekipmanların varlığını değil, bu ekipmanların yapının yangın güvenliği içerisindeki işlevini de değerlendirmeleri önemlidir. YGU Rehberi, mevzuat bilgilerini, teknik uygulamaları ve saha kontrol yöntemlerini bir araya getirmeyi hedeflemektedir."
      }
    ]
  },
  "yangin-guvenlik-uzmani-nasil-olunur": {
    "kart": "Nasıl YGU Olunur?",
    "ust": "Eğitim, Sınav ve Yetki Belgesi",
    "baslik": "Yangın Güvenlik Uzmanı Nasıl Olunur?",
    "seoBaslik": "Yangın Güvenlik Uzmanı Nasıl Olunur? Şartlar, Eğitim ve Sınav | YGU Rehberi",
    "aciklama": "Kimler yangın güvenlik uzmanı olabilir? YGU olmak için başvuru koşulları, teorik ve uygulama eğitimi, sınav ve yetki belgesi süreci adım adım.",
    "gorsel": "bg-ygu-yolu",
    "bloklar": [
      {
        "tip": "not",
        "etiket": "Mevzuat bilgilendirmesi",
        "metin": "Bu makalede açıklanan yetkilendirme seviyeleri, eğitim, sınav ve periyodik kontrol takvimi, yönetmelik taslağında öngörülen çerçeveye dayanmaktadır. Nihai hükümler ve yürürlük durumu resmî mevzuat üzerinden doğrulanmalıdır."
      },
      {
        "tip": "h2",
        "id": "kimler-olabilir",
        "metin": "Kimler Yangın Güvenlik Uzmanı Olabilir?"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Seviye",
          "Başvurabilecek meslek grupları"
        ],
        "satirlar": [
          [
            "Yangın Güvenlik Uzmanlığı 1 (YGU-1)",
            "Makine, inşaat, elektrik, elektrik-elektronik teknikerleri ve itfaiyecilik ön lisans mezunları"
          ],
          [
            "Yangın Güvenlik Uzmanlığı 2 (YGU-2)",
            "Mimarlar; inşaat, makine, elektrik, elektronik ve elektrik-elektronik mühendisleri"
          ],
          [
            "Yangın Güvenlik Uzmanlığı 3 (YGU-3)",
            "Yangın Güvenlik Uzmanlığı 2 yetkisi ve gerekli deneyim koşulları"
          ],
          [
            "Yangın Güvenlik Uzmanlığı K (YGU-K)",
            "Kimya mühendisleri ve kimya lisans mezunları"
          ]
        ]
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanı adaylarının yalnızca mezuniyet şartlarını sağlamaları yeterli değildir. Eğitim, sınav ve yetkilendirme koşullarının da yerine getirilmesi gerekir. Taslakta belirli kamu görevlerinde çalışmış kişiler için özel muafiyetler de öngörülmektedir."
      },
      {
        "tip": "h2",
        "id": "adimlar",
        "metin": "Yangın Güvenlik Uzmanı Nasıl Olunur?"
      },
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
      },
      {
        "tip": "h2",
        "id": "egitim",
        "metin": "Yangın Güvenlik Uzmanlığı Eğitimi"
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı eğitimi, adayların yangın güvenliği mevzuatını öğrenmelerini ve teknik değerlendirme becerilerini geliştirmelerini amaçlar. Teorik ve uygulamalı aşamalardan oluşması öngörülmektedir."
      },
      {
        "tip": "h3",
        "metin": "Yangın Güvenlik Uzmanlığı teorik eğitimi"
      },
      {
        "tip": "p",
        "metin": "Yangın güvenliği mevzuatı, yapı kullanım sınıfları, kaçış düzenlemeleri, algılama ve söndürme sistemleri, pasif tedbirler ve raporlama yöntemleri ele alınabilir. Taslakta yüz yüze veya uzaktan eğitim imkânı öngörülmektedir."
      },
      {
        "tip": "h3",
        "metin": "Yangın Güvenlik Uzmanlığı uygulama eğitimi"
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı uygulama eğitimi, teorik bilgilerin gerçek yapı koşullarında kullanılmasını amaçlar. Taslakta mahalli itfaiye teşkilatı tarafından yürütülmesi ve farklı kullanım sınıflarında raporlama çalışmaları öngörülmektedir."
      },
      {
        "tip": "h2",
        "id": "sinav-yetki-belgesi",
        "metin": "Yangın Güvenlik Uzmanlığı Sınavı ve Yetki Belgesi"
      },
      {
        "tip": "p",
        "metin": "Taslakta Yangın Güvenlik Uzmanlığı 1, 2 ve 3 için en az 50; Yangın Güvenlik Uzmanlığı K için en az 25 soruluk sınav öngörülmektedir. Başarı eşiği 100 üzerinden en az 70 puandır."
      },
      {
        "tip": "p",
        "metin": "Taslakta Yangın Güvenlik Uzmanlığı yetki belgesinin beş yıl geçerli olması öngörülmektedir. Yenileme, askıya alma ve iptal koşulları nihai mevzuata göre belirlenmelidir."
      }
    ]
  },
  "ygu-seviyeleri": {
    "kart": "YGU Seviyeleri",
    "ust": "YGU-1, YGU-2, YGU-3 ve YGU-K",
    "baslik": "Yangın Güvenlik Uzmanlığı Seviyeleri",
    "seoBaslik": "YGU Seviyeleri: YGU-1, YGU-2, YGU-3 ve YGU-K Nedir? | YGU Rehberi",
    "aciklama": "Yangın güvenlik uzmanlığında yetki seviyeleri: YGU-1, YGU-2, YGU-3 ve YGU-K kimler için öngörülüyor, hangi görevleri kapsıyor?",
    "gorsel": "yapi-endustriyel",
    "bloklar": [
      {
        "tip": "not",
        "etiket": "Mevzuat bilgilendirmesi",
        "metin": "Bu makalede açıklanan yetkilendirme seviyeleri, eğitim, sınav ve periyodik kontrol takvimi, yönetmelik taslağında öngörülen çerçeveye dayanmaktadır. Nihai hükümler ve yürürlük durumu resmî mevzuat üzerinden doğrulanmalıdır."
      },
      {
        "tip": "h2",
        "id": "yetki-seviyeleri",
        "metin": "Yangın Güvenlik Uzmanlığında Yetki Seviyeleri"
      },
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
    ]
  },
  "yangin-guvenlik-uzmani-gorevleri": {
    "kart": "Görev ve Sorumluluklar",
    "ust": "Görev ve Sorumluluklar",
    "baslik": "Yangın Güvenlik Uzmanı Ne İş Yapar?",
    "seoBaslik": "Yangın Güvenlik Uzmanı Ne İş Yapar? Görevleri ve Sahadaki Uygulamalar | YGU Rehberi",
    "aciklama": "Yangın güvenlik uzmanının görevleri: proje uygunluğu, yapı kullanma izni değerlendirmesi, periyodik kontroller, tatbikatlar; sahada ne yapar, hangi sorunlarla karşılaşır, rapor nasıl hazırlanır?",
    "gorsel": "surec-dogrulama",
    "bloklar": [
      {
        "tip": "not",
        "etiket": "Mevzuat bilgilendirmesi",
        "metin": "Bu makalede açıklanan yetkilendirme seviyeleri, eğitim, sınav ve periyodik kontrol takvimi, yönetmelik taslağında öngörülen çerçeveye dayanmaktadır. Nihai hükümler ve yürürlük durumu resmî mevzuat üzerinden doğrulanmalıdır."
      },
      {
        "tip": "h2",
        "id": "gorevler",
        "metin": "Yangın Güvenlik Uzmanının Görevleri Nelerdir?"
      },
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
      },
      {
        "tip": "h2",
        "id": "sahada",
        "metin": "Yangın Güvenlik Uzmanı Sahaya Gittiğinde Ne Yapar?"
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanının saha çalışması, yapının yangın güvenliği bakımından mevcut durumunu belirlemeye yönelik sistematik bir teknik incelemedir. Aşağıdaki altı aşama, kontrolün teknik mantığını açıklayan örnek bir iş akışıdır; resmî işlemler ilgili mevzuat ve formlara göre yürütülür."
      },
      {
        "tip": "adimlar",
        "liste": [
          {
            "baslik": "Yapıyı Tanır",
            "metin": ""
          },
          {
            "baslik": "Uygulanacak Mevzuatı Belirler",
            "metin": ""
          },
          {
            "baslik": "Teknik Belgeleri İnceler",
            "metin": ""
          },
          {
            "baslik": "Saha Kontrolünü Gerçekleştirir",
            "metin": ""
          },
          {
            "baslik": "Uygunluk Değerlendirmesi Yapar",
            "metin": ""
          },
          {
            "baslik": "Kontrol Sonuçlarını Raporlar",
            "metin": ""
          }
        ]
      },
      {
        "tip": "h2",
        "id": "saha-sorunlari",
        "metin": "Yangın Güvenlik Uzmanı Sahada Hangi Sorunlarla Karşılaşabilir?"
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanı, saha kontrollerinde yalnızca yangın güvenliği ekipmanlarının fiziksel durumunu incelemez. Yapıda sonradan gerçekleştirilen mimari değişiklikleri, yangın tesisatındaki müdahaleleri, yangın bölümlendirmesini etkileyen uygulamaları ve yangın güvenliği sistemlerinin mevcut kullanım koşullarına uygunluğunu da değerlendirir."
      },
      {
        "tip": "altlar",
        "numarali": true,
        "liste": [
          {
            "baslik": "Binaya sonradan kat veya asma kat eklenmesi",
            "metin": "Bir üretim tesisinde veya depoda sonradan asma kat oluşturulmuş olabilir. Yangın Güvenlik Uzmanı, yeni kullanım alanının kaçış düzenine, kişi yüküne, yangın güvenliği sistemlerinin kapsama alanına ve mevcut yangın güvenliği tedbirlerine etkisini değerlendirir. Yeni katın mimari projelerde bulunup bulunmadığı ve gerekli yangın güvenliği düzenlemelerinin yapılıp yapılmadığı incelenir."
          },
          {
            "baslik": "Yangın dolabının yerinin değiştirilmesi",
            "metin": "Üretim hattının genişletilmesi nedeniyle yangın dolabı başka bir noktaya taşınmış olabilir. Yangın Güvenlik Uzmanı, yeni konumun yangın dolabı kapsama alanını ve erişilebilirliğini etkileyip etkilemediğini değerlendirir. Hortum uzunluğu, yerleşim, tesisat bağlantıları ve gerekli teknik özellikler kontrol edilir."
          },
          {
            "baslik": "Sprinkler tesisatı bulunan alana yeni bölmeler yapılması",
            "metin": "Sprinkler sistemi bulunan geniş bir üretim alanı, sonradan duvar veya bölmelerle farklı odalara ayrılmış olabilir. Yangın Güvenlik Uzmanı, yeni bölmelerin sprinkler başlıklarının koruma alanlarını etkileyip etkilemediğini inceler. Yeni oluşturulan hacimlerde sprinkler korumasının yeterliliği ve gerekli tesisat değişikliklerinin yapılıp yapılmadığı değerlendirilir."
          },
          {
            "baslik": "Yangın pompa grubunun değiştirilmesi",
            "metin": "Bir işletmede mevcut yangın pompası arızalandığı için farklı özelliklerde yeni bir pompa monte edilmiş olabilir. Yangın Güvenlik Uzmanı, yeni pompa grubunun gerekli debi ve basınç koşullarını sağlayıp sağlamadığını teknik belgeler ve test sonuçları üzerinden değerlendirir. Pompanın değiştirilmiş olması tek başına sistemin yeterli olduğunu göstermez."
          },
          {
            "baslik": "Yangın bölmesi duvarının kaldırılması",
            "metin": "Bir fabrikada iki üretim alanını birleştirmek amacıyla aradaki duvar kaldırılmış olabilir. Yangın Güvenlik Uzmanı, kaldırılan duvarın yangın bölümlendirmesinde görev alıp almadığını inceler. Değişikliğin yangının ve dumanın yayılımına karşı öngörülen koruma düzenine etkisi değerlendirilir."
          },
          {
            "baslik": "Duman tahliye sisteminin bulunduğu alanda mimari değişiklik yapılması",
            "metin": "Bir alışveriş merkezinde, fabrikada veya büyük bir ticari yapıda yeni bölmeler oluşturulmuş ya da tavan düzeni değiştirilmiş olabilir. Yangın Güvenlik Uzmanı, bu değişikliklerin duman tahliye açıklıkları, duman perdeleri, hava akışı ve sistemin koruduğu alan üzerindeki etkisini inceler. Gerekli görülmesi durumunda sistemin tasarım ve hesap belgeleri değerlendirilir."
          },
          {
            "baslik": "Yangın algılama sistemine yeni kullanım alanlarının eklenmemesi",
            "metin": "Bir işletmede daha önce açık alan olarak kullanılan bir bölüm kapatılarak yeni bir oda veya ofis oluşturulmuş olabilir. Yangın Güvenlik Uzmanı, yeni hacimde yangın algılama ihtiyacını ve mevcut sistemin bu alanı kapsayıp kapsamadığını değerlendirir. Dedektör yerleşimi, algılama bölgesi ve sistemin ilgili teknik koşullara uygunluğu incelenir."
          },
          {
            "baslik": "Kaçış merdivenine açılan yeni kapı yapılması",
            "metin": "Bir binada kullanım kolaylığı sağlamak amacıyla korunumlu kaçış merdivenine sonradan yeni bir kapı açılmış olabilir. Yangın Güvenlik Uzmanı, bu müdahalenin merdivenin yangın ve dumandan korunma özelliklerini etkileyip etkilemediğini değerlendirir. Kapının yangına dayanımı, duman sızdırmazlığı, açılma yönü ve merdivenin korunmuş hacim niteliği incelenir."
          },
          {
            "baslik": "Yangın tesisatının yeni üretim alanına uygun şekilde genişletilmemesi",
            "metin": "Bir fabrikada mevcut üretim alanına yeni bir bölüm eklenmiş, ancak yangın söndürme tesisatında herhangi bir değişiklik yapılmamış olabilir. Yangın Güvenlik Uzmanı, yeni alanın yangın dolapları, sprinkler sistemi ve diğer gerekli söndürme tedbirleri bakımından korunup korunmadığını değerlendirir. Mevcut tesisatın yeni kullanım koşullarına uygunluğu incelenir."
          },
          {
            "baslik": "Yangın güvenliği sistemlerinin birbirleriyle çalışmasını etkileyen değişiklikler",
            "metin": "Bir binada yangın algılama paneli yenilenmiş, kartlı geçiş sistemi değiştirilmiş veya duman kontrol sistemi üzerinde tadilat yapılmış olabilir. Yangın Güvenlik Uzmanı, yangın durumunda birlikte çalışması gereken sistemlerin gerekli işlevleri yerine getirip getirmediğini değerlendirir. Yangın alarmı sırasında kapıların serbest bırakılması, ilgili fanların çalışması veya durması ve diğer otomatik kontrol senaryoları, gerekli testler ve teknik belgeler üzerinden incelenir."
          }
        ]
      },
      {
        "tip": "not",
        "etiket": "Teknik değerlendirme ilkesi",
        "metin": "Yangın Güvenlik Uzmanı sahada bir değişiklik tespit ettiğinde, bu değişikliği doğrudan uygunsuzluk olarak kabul etmez. Değişikliğin mevzuat, yapının teknik özellikleri ve mevcut belgeler çerçevesinde yangın güvenliği üzerindeki etkisini değerlendirir."
      },
      {
        "tip": "h2",
        "id": "rapor",
        "metin": "Yangın Güvenlik Raporu Nasıl Hazırlanır?"
      },
      {
        "tip": "p",
        "metin": "Yangın güvenlik raporu, yapılan kontrolün sonuçlarını ortaya koyar. Yangın Güvenlik Uzmanı yalnızca uygunsuzluğu belirtmekle yetinmez; tespitin yerini, konusunu ve teknik dayanağını ilgili raporlama usulüne göre açıklar. Örneğin kapanmayan bir yangın kapısının hangi konumda bulunduğu ve nasıl gözlemlendiği kayıt altına alınır."
      }
    ]
  },
  "calisma-alanlari": {
    "kart": "Çalışma Alanları",
    "ust": "Yangın Güvenlik Uzmanı Hangi Yapılarda Görev Alır?",
    "baslik": "Çalışma Alanları",
    "seoBaslik": "Yangın Güvenlik Uzmanı Çalışma Alanları ve Kariyer | YGU Rehberi",
    "aciklama": "Hangi binalar yangın güvenliği periyodik kontrolüne tabi olacak? Yangın güvenlik uzmanının görev aldığı yapılar, kariyer olanakları ve işletmelerin YGU sistemine hazırlığı.",
    "gorsel": "yapi-ticaret",
    "bloklar": [
      {
        "tip": "not",
        "etiket": "Mevzuat bilgilendirmesi",
        "metin": "Bu makalede açıklanan yetkilendirme seviyeleri, eğitim, sınav ve periyodik kontrol takvimi, yönetmelik taslağında öngörülen çerçeveye dayanmaktadır. Nihai hükümler ve yürürlük durumu resmî mevzuat üzerinden doğrulanmalıdır."
      },
      {
        "tip": "h2",
        "id": "periyodik-kontrol",
        "metin": "Hangi Binalar Yangın Güvenliği Periyodik Kontrolüne Tabi Olacak?"
      },
      {
        "tip": "p",
        "metin": "Kontrol kapsamı yapı kullanım sınıfları ve mevzuattaki diğer koşullara göre belirlenir. Endüstriyel tesisler, depolar, sağlık ve konaklama yapıları, eğitim binaları, alışveriş merkezleri ve toplu kullanım alanları önemli yapı gruplarıdır. Yangın Güvenlik Uzmanı yapının yalnızca faaliyet adına değil, kullanım sınıfına, teknik özelliklerine ve istisnalara da bakar. Geçiş tarihleri nihai düzenlemeden doğrulanmalıdır."
      },
      {
        "tip": "yapilar"
      },
      {
        "tip": "h2",
        "id": "isletmeler",
        "metin": "İşletmeler Yangın Güvenlik Uzmanlığı Sistemine Nasıl Hazırlanmalı?"
      },
      {
        "tip": "p",
        "metin": "İşletmeler mevcut yangın güvenliği projelerini, teknik sistemlerini, bakım ve test kayıtlarını, kaçış düzenlemelerini ve kullanım sırasında yapılan değişiklikleri gözden geçirmelidir. Yeni üretim hattı, farklı depolama düzeni veya kullanım amacı değişikliği mevcut yangın güvenliği koşullarını etkileyebilir. Yangın Güvenlik Uzmanının sağlıklı değerlendirmesi için doğru ve güncel teknik belgelere erişim önemlidir."
      },
      {
        "tip": "h2",
        "id": "kariyer",
        "metin": "Yangın Güvenlik Uzmanlığı Kariyer ve Çalışma Alanları"
      },
      {
        "tip": "p",
        "metin": "Yangın Güvenlik Uzmanlığı sistemi, ilgili mühendislik, mimarlık ve teknik meslek grupları için yeni çalışma alanları oluşturabilir. Çalışma olanakları yetki seviyelerine, uygulama biçimine ve kontrol kapsamındaki yapıların ihtiyaçlarına bağlıdır. Doğrulanmış veriler olmadan kesin gelir rakamları vermek doğru değildir."
      }
    ]
  }
}

// Kullanıcının metni › "Yangın Güvenlik Uzmanlığı Hakkında Sık Sorulan Sorular"; SSS sayfasında mevcut soruların ardından gelir.
export const SSS_DOCX: { soru: string; yanit: string }[] = [
  {
    "soru": "Yangın Güvenlik Uzmanı olmak için mühendis olmak zorunlu mudur?",
    "yanit": "Hayır. Taslakta ilgili teknik ön lisans mezunları için Yangın Güvenlik Uzmanlığı 1 yetkilendirmesi de öngörülmektedir."
  },
  {
    "soru": "Yangın Güvenlik Uzmanlığı eğitimi çevrim içi alınabilir mi?",
    "yanit": "Taslakta teorik eğitimin uzaktan verilebilmesi öngörülmektedir. Uygulama eğitimi saha çalışmalarını kapsar."
  },
  {
    "soru": "Yangın Güvenlik Uzmanı bütün yapılarda kontrol yapabilir mi?",
    "yanit": "Hayır. Yangın Güvenlik Uzmanının görev alanı yetki seviyesine ve mevzuat kapsamına bağlıdır."
  },
  {
    "soru": "Yangın Güvenlik Uzmanı projesi bulunmayan yapıyı nasıl değerlendirir?",
    "yanit": "Yangın Güvenlik Uzmanı yapının hukuki durumunu, mevcut belgelerini ve uygulanacak mevzuatı değerlendirir; izlenecek resmî işlem ilgili düzenlemelere bağlıdır."
  },
  {
    "soru": "Yangın Güvenlik Uzmanı yalnızca söndürme sistemlerini mi kontrol eder?",
    "yanit": "Hayır. Yangın Güvenlik Uzmanı yetkisi kapsamında aktif ve pasif tedbirleri, kaçış düzenlemelerini ve diğer teknik hususları değerlendirir."
  },
  {
    "soru": "Yangın Güvenlik Uzmanlığı yetki belgesi olmadan resmî kontrol yapılabilir mi?",
    "yanit": "Yangın Güvenlik Uzmanlığı kapsamındaki resmî görevler, mevzuatta öngörülen yetkilendirme koşullarına bağlıdır."
  }
]
