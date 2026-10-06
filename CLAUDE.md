# CLAUDE.md

YGU Rehberi (ygurehberi.com) tanıtım sitesi: Yangın Güvenlik Uzmanlığı rehberi + ücretsiz periyodik yangın kontrolü ön değerlendirme aracı.

## Tasarım (onaylı, birebir uygulanır)
- `design/Main.dc.html`: landing. `design/kontrol/*.dc.html`: ücretsiz kontrol aracı ekranları. `design/canvas.json`: tasarım dizini (Claude Design tuvali "YGU Rehberi Landing").
- Görseller: `/_blob/c08b224b8e6a483624f038079a216de0` = `design/assets/logo.png`, `/_blob/c74208a754d180c56627ccb7b20ba66e` = `design/assets/bina-yukseklik.svg`.
- `.dc.html` tasarım aracının biçimidir (`<x-dc>`, `{{…}}`); Vue bileşenlerine çevrilir, olduğu gibi kopyalanmaz.
- Metin, bölüm sırası, renk ve yazı tipi değiştirilmez; değişiklik gerekirse önce sorulur.
- Yazı tipleri: Archivo (başlık), IBM Plex Sans (metin). Renkler: #141414 koyu zemin, #F6F4F1 açık zemin, #1A1A1A metin, #4A4640 ikincil metin, #E2DDD5 çizgi, #F5B400 vurgu (sarı), #8A5F00 sarı üstü koyu metin/bağlantı.

## Teknik
- Nuxt, `nuxt generate` ile statik çıktı. Yeni npm paketi ancak sorarak.
- Telefon genişliğinde (≈400 px) düzgün çalışır; SEO metinleri Türkçe.

## İçerik
- Mevzuat bilgisi uydurulmaz; kontrol aracındaki kurallar tasarımdaki metinlerden gelir, eksikse sorulur.
- Yer tutucular ([İLETİŞİM E-POSTASI] vb.) bilgi gelene kadar olduğu gibi kalır.

## Çalışma biçimi
- Commit/push kullanıcıda.
