# CLAUDE.md

YGU Rehberi (ygurehberi.com) tanıtım sitesi: Yangın Güvenlik Uzmanlığı rehberi + ücretsiz periyodik yangın kontrolü ön değerlendirme aracı.

## Tasarım (onaylı, birebir uygulanır)
- **Landing:** `design/ygurehberi-landing.html` (4 videolu hero slider'lı son sürüm; Claude'da hazırlanan `ygurehberi-landing_8.html`). Uygulaması `pages/index.vue` + `components/HeroSlider.vue` + `assets/css/main.css`.
- **Kontrol aracı (henüz yapılmadı):** `design/kontrol/*.dc.html` ekranları, `design/canvas.json` (Claude Design tuvali "YGU Rehberi Landing"). Tuvalin eski landing'i (Main.dc.html) kullanılmıyor, depodan çıkarıldı.
- Görseller: `public/logo.png` (koyu zemin logosu, tasarımdaki gömülü PNG), `design/assets/logo.png` (açık zemin), `design/assets/bina-yukseklik.svg` (kontrol aracı).
- Videolar mixkit.co'dan doğrudan yükleniyor (tasarımdaki gibi).
- Metin, bölüm sırası, renk ve yazı tipi değiştirilmez; değişiklik gerekirse önce sorulur.
- Yazı tipleri: Archivo (başlık), IBM Plex Sans (metin). Renkler `assets/css/main.css` başındaki değişkenlerde.

## Teknik
- Nuxt 4, `nuxt generate` ile statik çıktı. Hero slider: Swiper (kullanıcı hazır bileşen istedi). Yeni npm paketi ancak sorarak.
- Yayın: `npm run build:deploy` → `deploy/` (depoda tutulur) → GitHub → cPanel › Git Version Control › Update from Remote + Deploy HEAD Commit → `.cpanel.yml` `deploy/`'u public_html'e kopyalar.
- Kontrol aracı: `pages/kontrol.vue` (design/kontrol/BinaBilgileri.dc.html; sonuç ekranı BinaSonuc henüz yok). "Ücretsiz kontrol et" düğmeleri `/kontrol`'e gider (`NUXT_PUBLIC_ARAC_URL` ile değiştirilebilir).
- Bülten formu henüz bir yere kaydetmiyor (tasarımdaki TODO).
- Telefon genişliğinde (≈400 px) düzgün çalışır; SEO metinleri Türkçe.

## İçerik
- Mevzuat bilgisi uydurulmaz; kontrol aracındaki kurallar tasarımdaki metinlerden gelir, eksikse sorulur.
- Yer tutucular ([İLETİŞİM E-POSTASI] vb.) bilgi gelene kadar olduğu gibi kalır.

## Çalışma biçimi
- Commit/push kullanıcıda (kullanıcı istediğinde yapılır).
