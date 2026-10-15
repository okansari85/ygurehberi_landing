// Teknik makaleler (/teknik-makaleler, /teknik-makaleler/<yol>). Metinler kullanıcının makale dosyalarından birebir;
// düz metin, doğrudan burada düzenlenir. Yeni makale: python -I scripts/makale-aktar.py <dosya.docx>, sonra etiketler ve yayin doldurulur.
// Mevzuat/teknik bilgi uydurulmaz; metin değişikliği önce kullanıcıya sorulur.
import type { KonuBlok } from './konular'

export type Makale = {
  kod: string
  yol: string
  baslik: string
  ozet: string
  etiketler: string[]
  yayin: string
  bloklar: KonuBlok[]
  kaynakBaslik: string
  kaynaklar: { metin: string; url?: string }[]
  sonNotlar: KonuBlok[]
}

export const MAKALELER: Makale[] = [
  {
    "kod": "YGR-005",
    "yol": "yangin-su-deposunda-100-m3-yaziyor-sistemin-kullanabilecegi-su-kac-m3",
    "baslik": "Yangın Su Deposunda 100 m³ Yazıyor: Sistemin Kullanabileceği Su Kaç m³?",
    "ozet": "Deponun geometrik kapasitesi, o anda içerdiği su ve pompanın güvenli biçimde kullanabileceği hacim aynı büyüklük değildir.",
    "etiketler": [
      "Yangın Suyu"
    ],
    "yayin": "2026-10-15",
    "bloklar": [
      {
        "tip": "p",
        "metin": "100 m³ nominal hacimli dikdörtgen bir yangın su deposu tasarlayalım. İç taban ölçüleri 5 × 5 m, iç yükseklik 4 m olsun. Su seviyesi gerçekte tam dolu seviyeye değil 3,6 m’ye ulaşıyor. Emiş koşulları nedeniyle de örnek olarak tabandan 0,6 m’lik bölümün kullanılabilir hacim dışında bırakıldığını kabul edelim."
      },
      {
        "tip": "h2",
        "id": "geometriden-kullanilabilir-hacme",
        "metin": "Geometriden kullanılabilir hacme"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Büyüklük",
          "Varsayım / hesap"
        ],
        "satirlar": [
          [
            "Taban alanı",
            "5 × 5 = 25 m²"
          ],
          [
            "Nominal hacim",
            "25 × 4,0 = 100 m³"
          ],
          [
            "Normal doluluk düzeyi",
            "3,6 m"
          ],
          [
            "Normal seviyede fiilî su",
            "25 × 3,6 = 90 m³"
          ],
          [
            "Örnek minimum kullanım seviyesi",
            "0,6 m"
          ],
          [
            "Bu seviye altında kalan su",
            "25 × 0,6 = 15 m³"
          ],
          [
            "Örnek kullanılabilir hacim",
            "90 − 15 = 75 m³"
          ]
        ]
      },
      {
        "tip": "denklem",
        "metin": "Vkullanılabilir = Ataban × (hnormal − hminimum)"
      },
      {
        "tip": "denklem",
        "metin": "Vkullanılabilir = 25 × (3,6 − 0,6) = 75 m³"
      },
      {
        "tip": "gorsel",
        "genislik": 2083,
        "yukseklik": 582,
        "aciklama": "Şekil 4. Nominal 100 m³ hacmin temsili dağılımı. Minimum kullanılabilir seviye bu örnek için kabul edilmiştir, evrensel bir oran değildir.",
        "src": "/img/makale/ygr-005-1.png"
      },
      {
        "tip": "h2",
        "id": "minimum-seviye-neden-projeden-okunmali",
        "metin": "Minimum seviye neden projeden okunmalı?"
      },
      {
        "tip": "p",
        "metin": "Pompa emişi için gerekli su seviyesi tek başına depo tabanı veya emiş ağzının yüksekliğiyle belirlenmez. Emiş borusu geometrisi, giriş kayıpları, vorteks/hava sürüklenmesi ihtimali, pompanın gerekli net pozitif emme yüksekliği (NPSHr) ve sağlanan NPSH (NPSHa) gibi koşullar teknik incelemede önem taşır. Dolayısıyla örnekteki 0,6 m gerçek bir projeye kopyalanamaz."
      },
      {
        "tip": "h2",
        "id": "ihtiyac-hesabiyla-karsilastirma",
        "metin": "İhtiyaç hesabıyla karşılaştırma"
      },
      {
        "tip": "p",
        "metin": "Tasarımdan geldiği varsayılan gerekli toplam debi 1.500 L/dak, gerekli besleme süresi 60 dakika olsun. Depoya etkin yenileme suyu girmediği kabulüyle gerekli hacim:"
      },
      {
        "tip": "denklem",
        "metin": "Vgerekli = (Q × t) / 1.000"
      },
      {
        "tip": "denklem",
        "metin": "Vgerekli = (1.500 × 60) / 1.000 = 90 m³"
      },
      {
        "tip": "p",
        "metin": "Örnek kullanılabilir hacim 75 m³ olduğuna göre hacim farkı 15 m³’tür. Bu, yalnızca kabul edilen koşullara göre hesap sonucudur. Gerçek tesiste sisteme ilişkin uygulanabilir debi/süre, eşzamanlı talepler, ek besleme güvenilirliği ve kullanım rezervi doğrulanmadan mevzuata aykırılık kararı verilemez."
      },
      {
        "tip": "denklem",
        "metin": "Hacim farkı = 90 − 75 = 15 m³"
      },
      {
        "tip": "h2",
        "id": "hacim-yeterli-olsa-da-sistem-neden-yetersiz-olabilir",
        "metin": "Hacim yeterli olsa da sistem neden yetersiz olabilir?"
      },
      {
        "tip": "p",
        "metin": "Su deposunda yeterli hacim bulunması pompanın gerekli noktada yeterli debi ve basınç sağlayacağını garanti etmez. Emiş koşulları, pompaların performans eğrileri, tesisat kayıpları ve su kaynağının sürekliliği ayrı ayrı kontrol edilmelidir. Yangın su deposu başka tüketicilerle ortak kullanılıyorsa yangına ayrılmış rezervin korunup korunmadığı da belirlenmelidir."
      },
      {
        "tip": "h2",
        "id": "sahada-kanit-zinciri",
        "metin": "Sahada kanıt zinciri"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Doğrulanacak konu",
          "Kanıt"
        ],
        "satirlar": [
          [
            "Geometrik kapasite",
            "Depo planı / fiilî ölçüm"
          ],
          [
            "Gerçek su düzeyi",
            "Kalibre seviye göstergesi / ölçüm"
          ],
          [
            "Minimum çalışabilir seviye",
            "Pompa ve emiş hesabı, teknik doküman"
          ],
          [
            "Yangın suyu gereksinimi",
            "Proje hesapları ve uygulanabilir standart"
          ],
          [
            "Besleme süresi",
            "Tasarım esası ve diğer kullanıcı talepleri"
          ],
          [
            "Pompa kapasitesi",
            "Performans testi, eğri ve hidrolik hesap"
          ],
          [
            "Ortak kullanım",
            "Seviye koruma ve otomasyon düzeni"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç"
      },
      {
        "tip": "p",
        "metin": "Depo üzerindeki 100 m³ etiketi yalnızca başlangıç bilgisidir. Mühendislik kararı, doğrulanmış kullanılabilir hacim ile tasarımın ihtiyaç duyduğu suyun ve gerekli debi/basıncın aynı anda karşılaştırılmasına dayanmalıdır."
      }
    ],
    "kaynakBaslik": "Kaynaklar ve teknik çerçeve",
    "kaynaklar": [
      {
        "metin": "BYKHY, yangın suyu ve söndürme sistemleri bağlamı",
        "url": "https://mevzuat.adalet.gov.tr/mevzuat/116939"
      },
      {
        "metin": "NFPA 20, Standard for the Installation of Stationary Pumps for Fire Protection (2025)",
        "url": "https://www.nfpa.org/product/nfpa-20-standard/p0020code?order_src=C900"
      },
      {
        "metin": "NFPA 13 (2025), sprinkler sistemi tasarım bağlamı",
        "url": "https://www.nfpa.org/codes-and-standards/nfpa-standard-development-process/13"
      }
    ],
    "sonNotlar": [
      {
        "tip": "not",
        "etiket": "Uygulama notu",
        "metin": "Buradaki teknik senaryolar örnektir. Bağlayıcı hüküm, onaylı proje, geçerli standart baskısı ve gerçek saha koşulları ayrı ayrı doğrulanmadan uygunluk kararı verilemez."
      }
    ]
  },
  {
    "kod": "YGR-004",
    "yol": "depolama-yuksekligi-sabitken-sprinkler-tasarimi-gecerli-kalir-mi",
    "baslik": "Depolama Yüksekliği Sabitken Sprinkler Tasarımı Geçerli Kalır mı?",
    "ozet": "Bir depo aynı tavan ve raf yüksekliğini korurken ürün, ambalaj ve depolama biçimi değişebilir. Bu değişim sprinkler sisteminin ilk tasarım dayanağını etkileyebilir.",
    "etiketler": [
      "Sprinkler",
      "Depolama"
    ],
    "yayin": "2026-10-15",
    "bloklar": [
      {
        "tip": "p",
        "metin": "1.000 m² alana ve 9 m tavan yüksekliğine sahip sprinkler korumalı bir depo düşünelim. Raflı depolama yüksekliği başlangıçta ve sonrasında 5 m. İşletme önce karton ambalajlı metal yedek parçalar depoluyor; sonra plastik kasalarda, plastik içerikli ürünlerle çalışmaya başlıyor. Başlık sayısı ve boru sistemi değişmemiştir."
      },
      {
        "tip": "h2",
        "id": "degismeyen-geometri-degisen-yangin-ozelligi",
        "metin": "Değişmeyen geometri, değişen yangın özelliği"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Özellik",
          "Önce",
          "Sonra"
        ],
        "satirlar": [
          [
            "Depo alanı",
            "1.000 m²",
            "1.000 m²"
          ],
          [
            "Tavan yüksekliği",
            "9 m",
            "9 m"
          ],
          [
            "Üst depolama seviyesi",
            "5 m",
            "5 m"
          ],
          [
            "Ürün niteliği",
            "Metal parçalar",
            "Plastik içerikli ürünler"
          ],
          [
            "Dış ambalaj / taşıyıcı",
            "Karton",
            "Plastik kasa"
          ],
          [
            "Sprinkler tasarım uyumu",
            "İlk esas saptanmalı",
            "Yeniden doğrulanmalı"
          ]
        ]
      },
      {
        "tip": "p",
        "metin": "Buradaki “metal ürün” veya “plastik ürün” tanımı tek başına ilgili standarda göre nihai ürün sınıfını belirlemez. Plastik yüzdesi, ürün biçimi, kartonlama, palet, raf ve istif koşulları gibi bilgiler gerekir. NFPA 13 ile EN 12845’in terminolojileri de otomatik olarak birbirine dönüştürülemez."
      },
      {
        "tip": "h2",
        "id": "bir-sprinkler-sisteminin-gecerlilik-alani-nedir",
        "metin": "Bir sprinkler sisteminin geçerlilik alanı nedir?"
      },
      {
        "tip": "p",
        "metin": "Sistem yalnız nominal bir su debisine indirgenemez. Tasarımın geçerliliği, korumaya konu ürünün sınıfı, yerleşimi, depolama yüksekliği, tavan koşulları, sprinkler başlık tipi/konumu ve su kaynağı gibi girdilerin bir bütün olarak kontrol edilmesine bağlıdır. Mevcut sistemin bugünkü ürünler için yeterli olup olmadığı ancak bu girdiler bilindikten sonra incelenebilir."
      },
      {
        "tip": "h3",
        "metin": "Yanlış kısa yollar"
      },
      {
        "tip": "p",
        "metin": "“Depo yüksekliği artmadı, koruma değişmez” çıkarımı yanlıştır. Benzer şekilde “plastik geldi, tüm başlıkları değiştirelim” sonucu da mühendislik incelemesi yapılmadan savunulamaz. Gerçek sınıflandırma ve mevcut tasarım belirlendikten sonra değişikliğin koruma gereksinimine etkisi hesaplanmalıdır."
      },
      {
        "tip": "h2",
        "id": "tasarim-stok-karsilastirma-kontrol-tablosu",
        "metin": "Tasarım–stok karşılaştırma kontrol tablosu"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Alan",
          "Belge / veri",
          "Karar için sorulacak soru"
        ],
        "satirlar": [
          [
            "Başlangıç tasarımı",
            "Onaylı proje, hesap raporu",
            "Hangi stok varsayımıyla yapıldı?"
          ],
          [
            "Güncel ürün",
            "Ürün ağacı, güvenilir sınıflandırma",
            "Mevcut ürün standarda göre hangi sınıfta?"
          ],
          [
            "Depolama şekli",
            "Raf yerleşimi, yükseklik, fotoğraf",
            "Yerleşim ve engeller aynı mı?"
          ],
          [
            "Sprinkler altyapısı",
            "Başlık bilgisi, hatlar, hidrolik hesap",
            "Gerekli kriterler sağlanıyor mu?"
          ],
          [
            "Su kaynağı",
            "Debi/basınç kayıtları, pompa eğrisi",
            "Tasarım noktasında yeterli mi?"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç"
      },
      {
        "tip": "p",
        "metin": "Depolama yüksekliği sabit olsa da sprinkler sisteminin uygunluğu otomatik olarak sabit kalmaz. Teknik kontrolün hedefi, sistemin ilk tasarımının güncel stokla hâlâ örtüşüp örtüşmediğini kanıtlamaktır."
      }
    ],
    "kaynakBaslik": "Kaynaklar ve teknik çerçeve",
    "kaynaklar": [
      {
        "metin": "NFPA 13, Standard for the Installation of Sprinkler Systems (2025)",
        "url": "https://www.nfpa.org/codes-and-standards/nfpa-standard-development-process/13"
      },
      {
        "metin": "BYKHY, sprinkler sistemlerinin ulusal mevzuat bağlamı",
        "url": "https://mevzuat.adalet.gov.tr/mevzuat/116939"
      },
      {
        "metin": "EN 12845: Uygulanacak ulusal kabul/baskı ve projede atıf yapılan metin, teknik dosyadan doğrulanmalıdır."
      }
    ],
    "sonNotlar": [
      {
        "tip": "not",
        "etiket": "Uygulama notu",
        "metin": "Buradaki teknik senaryolar örnektir. Bağlayıcı hüküm, onaylı proje, geçerli standart baskısı ve gerçek saha koşulları ayrı ayrı doğrulanmadan uygunluk kararı verilemez."
      }
    ]
  },
  {
    "kod": "YGR-003",
    "yol": "ayni-yangin-yuku-farkli-yangin-davranisi",
    "baslik": "Aynı Yangın Yükü, Farklı Yangın Davranışı",
    "ozet": "Eşit MJ/m² değeri, eşit yangın büyümesi veya eşit sprinkler performansı demek değildir. Bu farkın anahtarı ısı salım hızının zamanla nasıl değiştiğidir.",
    "etiketler": [
      "Yangın Yükü"
    ],
    "yayin": "2026-10-15",
    "bloklar": [
      {
        "tip": "p",
        "metin": "İki ayrı 200 m² depoda aynı potansiyel enerji stoklandığını kabul edelim: 40.000 MJ. Depo A’da kompakt ahşap malzeme; Depo B’de plastik ve karton ambalajlı raflı ürünler bulunmaktadır. Geometri ve havalandırma koşulları gerçek hayatta farklı olabileceği için bu tanım tek başına daha tehlikeli depoyu seçmeye yetmez."
      },
      {
        "tip": "denklem",
        "metin": "qf,A = qf,B = 40.000 / 200 = 200 MJ/m²"
      },
      {
        "tip": "h2",
        "id": "toplam-enerji-ile-isi-salim-hizi-ayni-kavram-degildir",
        "metin": "Toplam enerji ile ısı salım hızı aynı kavram değildir"
      },
      {
        "tip": "p",
        "metin": "Yangın yükü potansiyel enerjiyi tanımlar. Isı salım hızı (HRR), birim zamanda açığa çıkan enerjiye karşılık gelir. İki yangın aynı toplam enerjiyi açığa çıkarırken farklı anlık güç seviyelerine erişebilir. Gerçek bir yangında depolanan enerjinin tümü mutlaka açığa çıkmayabileceğinden, aşağıdaki örnek ayrıca tam yanma varsayımına sahiptir."
      },
      {
        "tip": "denklem",
        "metin": "Q = ∫ HRR(t) dt   [MJ = MW × saniye]"
      },
      {
        "tip": "p",
        "metin": "Farkı sayısal olarak görebilmek için iki dikdörtgen biçimli, idealize ısı salım hızı profili kuralım. A profili 5 MW gücünü 133,33 dakika; B profili 10 MW gücünü 66,67 dakika sürdürsün. İki profil de 40.000 MJ enerji üretir. Eğriler gerçek depo yangını tahmini değil, integral ilkesini anlatan matematiksel örneklerdir."
      },
      {
        "tip": "denklem",
        "metin": "QA = 5 × 133,33 × 60 ≈ 40.000 MJ"
      },
      {
        "tip": "denklem",
        "metin": "QB = 10 × 66,67 × 60 ≈ 40.000 MJ"
      },
      {
        "tip": "gorsel",
        "genislik": 2128,
        "yukseklik": 664,
        "aciklama": "Şekil 3. Aynı toplam enerjiye sahip iki idealize HRR profili. Gerçek yangınların büyüme/sönme geçişleri bu kadar keskin değildir.",
        "src": "/img/makale/ygr-003-1.png"
      },
      {
        "tip": "h2",
        "id": "farkli-profiller-neden-onemli",
        "metin": "Farklı profiller neden önemli?"
      },
      {
        "tip": "p",
        "metin": "Daha yüksek anlık HRR, belirli geometri ve koşullarda daha yüksek duman üretimi, ısıl etki veya sprinkler algılama/aktivasyon koşullarıyla ilişki kurabilir. Ancak bu ilişkiyi otomatik olarak “iki kat HRR = iki kat tehlike” diye okumak da yanlıştır. Özellikle tavan yüksekliği, havalandırma, yanma verimi, malzeme bileşimi ve müdahale etkisi incelenmelidir."
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Karşılaştırılan kavram",
          "Ne söyler?",
          "Neyi tek başına söylemez?"
        ],
        "satirlar": [
          [
            "Yangın yükü (MJ/m²)",
            "Potansiyel enerji yoğunluğu",
            "Alev büyüme hızı, pik güç"
          ],
          [
            "HRR (kW veya MW)",
            "Anlık enerji salım gücü",
            "Tüm yangın boyunca toplam enerji"
          ],
          [
            "Duman üretimi",
            "Görüş ve toksisite açısından girdi",
            "Yalnız yangın yükünden çıkarsanamaz"
          ],
          [
            "Sprinkler uygunluğu",
            "Tasarıma göre farklı teknik kontrol",
            "Sadece HRR grafik alanıyla belirlenemez"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "saha-degerlendirmesinde-ikinci-boyut",
        "metin": "Saha değerlendirmesinde ikinci boyut"
      },
      {
        "tip": "p",
        "metin": "Yangın yükü envanterine malzemenin fiziksel formu, yüzey-hacim ilişkisi, depolama aralıkları, raf boşlukları, tavan/istif yüksekliği ve havalandırma koşulları eklenmelidir. Bu kayıtlar, deneysel verinin yerine geçmez; hangi yangın senaryosunun incelenmesi gerektiğini belirlemeye yardım eder."
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç"
      },
      {
        "tip": "p",
        "metin": "Aynı yangın yükü yoğunluğundan hareketle iki depoyu eşdeğer risk veya eşdeğer koruma ihtiyacı olarak değerlendirmek teknik olarak savunulamaz. Yangın mühendisliği kararı, toplam enerji ile enerjinin açığa çıkma karakterini birlikte ele almalıdır."
      }
    ],
    "kaynakBaslik": "Kaynaklar ve teknik çerçeve",
    "kaynaklar": [
      {
        "metin": "SFPE Foundation, HRR verilerinin yorumlanmasına ilişkin araştırma",
        "url": "https://www.sfpe.org/foundationtest/foundationresearch/impact"
      },
      {
        "metin": "SFPE Handbook of Fire Protection Engineering, 6. basım (2026), fire scenarios ve fire load density",
        "url": "https://link.springer.com/book/10.1007/978-3-031-59212-6"
      },
      {
        "metin": "SFPE, yangın modeli uygulama varsayımları",
        "url": "https://www.sfpe.org/publications/fpemagazine/fpeextra/etarchives2/fpeetissue54"
      }
    ],
    "sonNotlar": [
      {
        "tip": "not",
        "etiket": "Uygulama notu",
        "metin": "Buradaki teknik senaryolar örnektir. Bağlayıcı hüküm, onaylı proje, geçerli standart baskısı ve gerçek saha koşulları ayrı ayrı doğrulanmadan uygunluk kararı verilemez."
      }
    ]
  },
  {
    "kod": "YGR-002",
    "yol": "yangin-yuku-arttiginda-mevcut-koruma-sistemi-yeterli-kalir-mi",
    "baslik": "Yangın Yükü Arttığında Mevcut Koruma Sistemi Yeterli Kalır mı?",
    "ozet": "Bir üretim veya depolama alanının yapı geometrisi aynı kalırken yanıcı malzeme miktarı değişebilir. Yangın yükü hesabı değişimin büyüklüğünü gösterir; sistem yeterliliğine tek başına karar vermez.",
    "etiketler": [
      "Yangın Yükü"
    ],
    "yayin": "2026-10-15",
    "bloklar": [
      {
        "tip": "p",
        "metin": "200 m² büyüklüğündeki bir depo, başlangıçta ahşap palet, karton ve sınırlı miktarda plastik içermektedir. Yeni faaliyet sonucunda ahşap ve karton sabit kalırken plastik miktarı 100 kg’dan 500 kg’a yükselmiştir. Burada amaç bir tasarım sınıfı atamak değil, enerji hesabıyla değişimi görünür hâle getirmektir."
      },
      {
        "tip": "h2",
        "id": "malzeme-esasli-ornek-hesap",
        "metin": "Malzeme esaslı örnek hesap"
      },
      {
        "tip": "p",
        "metin": "Örnek alt ısıl değerler: ahşap 17 MJ/kg, karton 16 MJ/kg, plastik 35 MJ/kg. Bunlar belirli bir ürüne ait teyitli ölçüm değildir; gerçek çalışmada malzeme bileşimi, nem ve doğrulanmış alt ısıl değer kullanılmalıdır."
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Malzeme",
          "Isıl değer",
          "İlk kütle",
          "Yeni kütle"
        ],
        "satirlar": [
          [
            "Ahşap",
            "17 MJ/kg",
            "1.000 kg",
            "1.000 kg"
          ],
          [
            "Karton",
            "16 MJ/kg",
            "500 kg",
            "500 kg"
          ],
          [
            "Plastik (örnek)",
            "35 MJ/kg",
            "100 kg",
            "500 kg"
          ]
        ]
      },
      {
        "tip": "denklem",
        "metin": "E = Σ(mᵢ × Hᵢ)   ve   qf = E / A"
      },
      {
        "tip": "p",
        "metin": "E: toplam potansiyel yanma enerjisi (MJ); mᵢ: malzeme kütlesi (kg); Hᵢ: alt ısıl değer (MJ/kg); qf: yangın yükü yoğunluğu (MJ/m²); A: değerlendirme alanı (m²)."
      },
      {
        "tip": "p",
        "metin": "İlk durumda E = 1.000×17 + 500×16 + 100×35 = 28.500 MJ; yeni durumda E = 1.000×17 + 500×16 + 500×35 = 42.500 MJ."
      },
      {
        "tip": "denklem",
        "metin": "qf,ilk = 28.500 / 200 = 142,5 MJ/m²"
      },
      {
        "tip": "denklem",
        "metin": "qf,yeni = 42.500 / 200 = 212,5 MJ/m²"
      },
      {
        "tip": "denklem",
        "metin": "Artış = (212,5 − 142,5) / 142,5 × 100 ≈ %49,1"
      },
      {
        "tip": "gorsel",
        "genislik": 2128,
        "yukseklik": 675,
        "aciklama": "Şekil 2. Temsili stokların potansiyel enerji bileşimi. Plastik miktarı artarken diğer bileşenler sabittir.",
        "src": "/img/makale/ygr-002-1.png"
      },
      {
        "tip": "h2",
        "id": "bu-artis-neyi-kanitlar-neyi-kanitlamaz",
        "metin": "Bu artış neyi kanıtlar, neyi kanıtlamaz?"
      },
      {
        "tip": "p",
        "metin": "Bu işlem depoda birim alan başına potansiyel yanma enerjisinin arttığını gösterir. Buna karşılık ısı salım hızının, sprinkler için gerekli debinin veya çıkış süresinin %49,1 arttığını göstermez. Yangın gelişimi; malzemenin formuna, havalandırmaya, yüzey alanına, istiflemeye, tutuşma koşullarına ve söndürme etkisine bağlıdır."
      },
      {
        "tip": "h2",
        "id": "tasarim-gecerliligi-icin-kontrol-basliklari",
        "metin": "Tasarım geçerliliği için kontrol başlıkları"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Kontrol",
          "Neden gerekli?"
        ],
        "satirlar": [
          [
            "Ürün ve ambalajın gerçek niteliği",
            "Yanıcılık ve depolama sınıflandırması etkilenebilir"
          ],
          [
            "Raf, palet ve istif geometrisi",
            "Alev yayılımı ve sprinkler uygulaması değişebilir"
          ],
          [
            "İlk sprinkler tasarım esası",
            "Sistem yalnız ilk stok kabulü için projelendirilmiş olabilir"
          ],
          [
            "Algılama ve duman senaryosu",
            "Yangın gelişimi ve duman oluşumu farklılaşabilir"
          ],
          [
            "Yangın bölmesi ve kullanım değişikliği",
            "Mevzuattaki kullanım ve teknik gerekler değişebilir"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "sahada-karar-nasil-verilmelidir",
        "metin": "Sahada karar nasıl verilmelidir?"
      },
      {
        "tip": "p",
        "metin": "Önce gerçek malzeme envanteri doğrulanır; ardından tasarım projesinin malzeme ve depolama kabulleri belirlenir. Bu veriler uyuşmuyorsa ilgili sprinkler, algılama ve bina koruma tasarımları yeniden mühendislik incelemesine alınır. Uygunsuzluk kararı, yalnız hesaplanan enerji artışına değil, uygulanabilir teknik gereğin karşılanmadığını gösteren kanıta dayanmalıdır."
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç"
      },
      {
        "tip": "p",
        "metin": "Yangın yükü hesabı güçlü bir değişiklik göstergesidir; fakat sistem uygunluğu için yeterlilik testi değildir. Bir yangın güvenliği uzmanının değeri yalnız rakam üretmekte değil, rakamın hangi tasarım kararını sorgulamayı gerektirdiğini saptamaktadır."
      }
    ],
    "kaynakBaslik": "Kaynaklar ve teknik çerçeve",
    "kaynaklar": [
      {
        "metin": "BYKHY ve ekleri",
        "url": "https://mevzuat.adalet.gov.tr/mevzuat/116939"
      },
      {
        "metin": "SFPE Handbook of Fire Protection Engineering, 6. basım (2026), Fire Load Density bölümü",
        "url": "https://link.springer.com/book/10.1007/978-3-031-59212-6"
      },
      {
        "metin": "SFPE, yangın yükü yoğunluğu kavramının mühendislik bağlamı",
        "url": "https://www.sfpe.org/publications/fpemagazine/fpeextra/etarchives3/fpeetissue79"
      }
    ],
    "sonNotlar": [
      {
        "tip": "not",
        "etiket": "Uygulama notu",
        "metin": "Buradaki teknik senaryolar örnektir. Bağlayıcı hüküm, onaylı proje, geçerli standart baskısı ve gerçek saha koşulları ayrı ayrı doğrulanmadan uygunluk kararı verilemez."
      }
    ]
  },
  {
    "kod": "YGR-001",
    "yol": "bir-bolme-duvarin-tasinmasi-yangin-guvenligini-nasil-etkiler",
    "baslik": "Bir Bölme Duvarın Taşınması Yangın Güvenliğini Nasıl Etkiler?",
    "ozet": "Bir mimari değişiklik yalnızca plan çizgisini değil; kaçış, algılama, söndürme ve yangın bölümlendirmesinin tasarım varsayımlarını da değiştirebilir.",
    "etiketler": [
      "Mimari Değişiklik"
    ],
    "yayin": "2026-10-15",
    "bloklar": [
      {
        "tip": "p",
        "metin": "Bir üretim tesisinde yardımcı mahali genişletmek için bölme duvar taşınıyor ve kapı yeniden konumlandırılıyor. İmalat açısından küçük görünen değişikliğin yangın güvenliği açısından etkisi, duvarın kendi başına güvenli veya güvensiz olmasından değil, başlangıçtaki tasarım kabullerinin değişip değişmediğinden kaynaklanır."
      },
      {
        "tip": "h2",
        "id": "ornek-plan-ve-degisiklik",
        "metin": "Örnek plan ve değişiklik"
      },
      {
        "tip": "p",
        "metin": "Tek katlı üretim alanı 30 × 20 m boyutundadır (600 m²). Üst sol köşedeki yardımcı mahal ilk durumda 10 × 8 m (80 m²); değişiklik sonrasında 13 × 8 m (104 m²) olur. Yeni sınır duvarın konumu ve kapı yeri değişmiştir. Aynı kat içinde kalan toplam alan değişmez."
      },
      {
        "tip": "gorsel",
        "genislik": 2132,
        "yukseklik": 757,
        "aciklama": "Şekil 1. Temsili planlar. Sarı çizgi bölme duvarını, çizgi üzerindeki boşluk kapıyı gösterir. Şekil ölçekli proje veya kaçış hesabı değildir.",
        "src": "/img/makale/ygr-001-1.png"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Büyüklük",
          "İlk durum",
          "Yeni durum"
        ],
        "satirlar": [
          [
            "Yardımcı mahal alanı",
            "80 m²",
            "104 m²"
          ],
          [
            "Üretim alanı",
            "520 m²",
            "496 m²"
          ],
          [
            "Değişiklik",
            "—",
            "+24 m² (+%30)"
          ],
          [
            "Duvar konumu",
            "x = 10 m",
            "x = 13 m"
          ]
        ]
      },
      {
        "tip": "h2",
        "id": "degisiklik-dogrudan-uygunsuzluk-mudur",
        "metin": "Değişiklik doğrudan uygunsuzluk mudur?"
      },
      {
        "tip": "p",
        "metin": "Hayır. Öncelikle bölme duvarının yangın ayırıcı işlevi olup olmadığı, değişikliğin hangi onaylı projeye göre gerçekleştirildiği ve mahallerin gerçek kullanım sınıfı belirlenir. Yangın dayanımı gerektiren bir sınırın değiştirilmesi ile sıradan bölme duvarının değiştirilmesi aynı teknik ve hukuki sonuca götürmez."
      },
      {
        "tip": "h3",
        "metin": "Kaçış düzeni"
      },
      {
        "tip": "p",
        "metin": "Kapının yer değiştirmesi kişi hareketine yeni bir güzergâh kazandırabilir veya mevcut güzergâhı uzatabilir. Varsayımsal saha ölçümünde belirli bir başlangıç noktasından ilgili kapıya erişim yolu 12 m yerine 17 m ise fark 5 m, artış %41,7’dir. Bu tek ölçüm, mevzuata uygun veya aykırı hükmü için yeterli değildir; söz konusu kapının kaçış kapısı olup olmadığı, alternatif çıkışlar, ölçüm yöntemi, kullanıcı yükü ve geçerli sınırlar bilinmelidir."
      },
      {
        "tip": "denklem",
        "metin": "ΔL = 17 − 12 = 5 m   |   Değişim = (5 / 12) × 100 = %41,7"
      },
      {
        "tip": "h3",
        "metin": "Algılama sistemi"
      },
      {
        "tip": "p",
        "metin": "Dedektörlerin eski duvar için oluşturulmuş algılama bölgeleri yeni geometrinin ardından aynı etkiyi vermeyebilir. Yeni bölme, dumanın yayılımını engelleyebilir, ayrı bir hacim oluşturabilir ya da tavan altındaki hava hareketlerini değiştirebilir. Başlık sayısını alan artışıyla orantılı artırmak doğru bir tasarım yöntemi değildir. Dedektör türü, tavan geometrisi, mahallerin kullanım koşulu ve sistemin esas aldığı tasarım standardı kontrol edilmelidir."
      },
      {
        "tip": "h3",
        "metin": "Sprinkler koruması"
      },
      {
        "tip": "p",
        "metin": "Tavana kadar uzanan yeni bölme duvarı sprinkler su dağılımını değiştirebilir. Yeni mahallerin ayrı ayrı uygun biçimde korunduğu; başlık mesafesi, engel koşulları, tehlike sınıfı ve gerektiğinde hidrolik hesap üzerinden incelenmelidir. Sadece bir başlık ilave etmek, tasarımın geçerliliğini ispatlamaz."
      },
      {
        "tip": "h3",
        "metin": "Yangın bölümlendirmesi ve sistem etkileşimi"
      },
      {
        "tip": "p",
        "metin": "Duvar yangın dayanımlı bir ayırıcıysa taşınma, kapı niteliği, birleşim detayları, geçiş sızdırmazlığı ve duman kontrol sınırını etkileyebilir. Ayrıca yeni kapının erişim kontrolü, otomatik kapanma veya alarm senaryosu ile ilişkisi bulunabilir. Değişiklik tespit edilirken yalnız mimari plan değil, yangın tesisatı ve elektrik projeleri ile saha fiilî durumu karşılaştırılmalıdır."
      },
      {
        "tip": "h2",
        "id": "degisiklik-etki-dogrulama-yontemi",
        "metin": "Değişiklik–Etki–Doğrulama yöntemi"
      },
      {
        "tip": "tablo",
        "basliklar": [
          "Soru",
          "Aranan kanıt"
        ],
        "satirlar": [
          [
            "Neyin yeri ve işlevi değişti?",
            "Revizyon planı, ölçü ve mahal kullanım bilgisi"
          ],
          [
            "İlk tasarım neyi kabul ediyordu?",
            "Geçerli onaylı proje, as-built, hesap ve senaryolar"
          ],
          [
            "Hangi sistemler etkilenebilir?",
            "Kaçış, algılama, sprinkler, bölümlendirme, yönlendirme"
          ],
          [
            "Etki nasıl doğrulanacak?",
            "Yerinde ölçüm, standart kontrolü, hesap, gerekiyorsa test"
          ],
          [
            "Teknik karar nedir?",
            "Doğrulandı / uygunsuzluk kanıtlandı / ek inceleme gerekli"
          ]
        ]
      },
      {
        "tip": "p",
        "metin": "Yöntemin adı bu yayın için oluşturulmuş bir değerlendirme çerçevesidir; mevzuat tarafından tanımlanmış resmî sınıflandırma değildir."
      },
      {
        "tip": "h2",
        "id": "sonuc",
        "metin": "Sonuç"
      },
      {
        "tip": "p",
        "metin": "Bir duvarın taşınmasında asıl soru “değişiklik yapıldı mı?” değil, “yangın güvenliği tasarımının hangi kabulü artık yeniden doğrulanmalı?” sorusudur. Ölçülebilir bir değişiklik her zaman uygunsuzluk değildir; ancak doğrulanmamış bir değişiklik de sırf sistemler çalışır görünüyor diye uygun kabul edilemez."
      }
    ],
    "kaynakBaslik": "Kaynaklar ve teknik çerçeve",
    "kaynaklar": [
      {
        "metin": "Binaların Yangından Korunması Hakkında Yönetmelik (BYKHY)",
        "url": "https://mevzuat.adalet.gov.tr/mevzuat/116939"
      },
      {
        "metin": "NFPA 13, Standard for the Installation of Sprinkler Systems (2025)",
        "url": "https://www.nfpa.org/codes-and-standards/nfpa-standard-development-process/13"
      },
      {
        "metin": "SFPE Handbook of Fire Protection Engineering, 6. basım (2026), yangın senaryoları ve mühendislik tasarımı",
        "url": "https://link.springer.com/book/10.1007/978-3-031-59212-6"
      }
    ],
    "sonNotlar": [
      {
        "tip": "not",
        "etiket": "Uygulama notu",
        "metin": "Buradaki teknik senaryolar örnektir. Bağlayıcı hüküm, onaylı proje, geçerli standart baskısı ve gerçek saha koşulları ayrı ayrı doğrulanmadan uygunluk kararı verilemez."
      }
    ]
  }
]
// SON
