# CLAUDE.md

YGU Rehberi (ygurehberi.com): Yangın Güvenlik Uzmanlığı (YGU) bilgi sitesi. Statik Nuxt sitesi.

## Tasarım (onaylı, birebir uygulanır)
- `design/ana-sayfa.jpeg` → `pages/index.vue`; `design/ygu-hakkinda.jpeg` → `pages/ygu-hakkinda.vue`. Diğer menü sayfaları (Çalışma Alanları, Vakalarla Öğren, Kısa Rehberler) için tasarım yok; menü şimdilik ana sayfadaki bölümlere gider.
- `design/on-kayit.jpeg` → `pages/on-kayit.vue` (içerik yerleşimi aynı, üst menü/alt bilgi sitenin). Form henüz bir yere göndermiyor (TODO: gönderim yolu + KVKK Aydınlatma Metni kullanıcıdan). Görseller `on-kayit-hero`/`on-kayit-form` şimdilik kopya (hero-ana / bg-ygu-yolu); istemleri script'te.
- Tüm "Ön Kayıt" düğmeleri `/on-kayit`'e gider; alt bilgideki ön kayıt bandı o sayfada gizlenir.
- "Hangi Yapılarda Görev Alır?" = BYKHY'nin 9 kullanım sınıfı, 3×3 kart; metinler kullanıcının 13 Ekim'de gönderdiği 9 kartlı görselden.
- "Kontrol Süreleri / Kaç Yılda Bir Yapılır?" bölümünün altında kontrol süresi aracı bandı (`KONTROL_ARACI`, 14 Ekim örneği): araç yok, düğme pasif + "Yakında". Araç yapılınca düğme ona bağlanır.
- Metinlerin tamamı `data/icerik.ts`'de (sayfalar, site içi arama, SEO şemaları ve `/llms.txt` buradan beslenir). Metin, bölüm sırası, renk, yazı tipi değiştirilmez; değişiklik önce sorulur.
- Yazı tipleri: Barlow Condensed (başlık), Poppins (metin; kullanıcı seçti, 13 Ekim). Renkler `assets/css/main.css` başındaki değişkenlerde. İkonlar `components/Ikon.vue` (elle çizilmiş SVG).
- Logo: `BrandLogo` (yazı + titreşen alev katmanı); açık zeminde `koyu` (logo-yazi-koyu.png).

## Görseller
- `public/img/<ad>.webp`, OpenAI gpt-image-1 ile üretilir: `npm run gorsel` (eksik/yer tutucu olanları üretir; anahtar `.env` → `OPENAI_API_KEY`, git'e girmez). Tek görsel yeniden: `npm run gorsel -- <ad>`. İstemler `scripts/gorsel-uret.mjs` içinde.
- 13 Ekim 2026: 4 görsel kredi bitince üretilemedi; geçici olarak benzerleri kopyalandı: `hakkinda-hero` (= hero-ana), `hakkinda-ygu-nedir` (= surec-proje), `hakkinda-cta` (= bg-ygu-yolu), `rehber-endustriyel` (= yapi-endustriyel). Kredi gelince: `npm run gorsel -- hakkinda-hero hakkinda-ygu-nedir hakkinda-cta rehber-endustriyel`.
- `yapi-ticaret` CC0 fotoğraf, `yapi-toplanma` kullanıcının ürettiği görsel (kaynaklar `design/gorsel-kaynaklari.md`).

## SEO ve yapay zekâ (GEO)
- Sayfa başına `useSayfaSeo` (composables/useSayfaSeo.ts): başlık, açıklama, canonical, OG/Twitter, JSON-LD (Organization, WebSite, WebPage/AboutPage, BreadcrumbList, FAQPage). FAQ yanıtları sayfa metniyle aynı olmalı.
- `public/robots.txt` yapay zekâ tarayıcılarına açık; `/sitemap.xml` = `server/routes/sitemap.xml.ts` (sayfa listesi orada, görseller `data/icerik.ts`ten); `/llms.txt` = `server/routes/llms.txt.ts` (generate'te statik dosya).
- Yeni sayfa: `nitro.prerender.routes`'a, sitemap'e ve llms.txt'ye ekle.
- `public/.htaccess`: tek adres biçimi `https://ygurehberi.com/yol` (www→çıplak, http→https, sondaki / kaldırılır, klasörün index.html'i sunulur). Sitemap ve canonical bu biçimde kalmalı.

## İçerik
- Mevzuat bilgisi uydurulmaz; YGU düzenlemesi taslak — kontrol süreleri "taslaktaki örnek değerler" notuyla gösterilir.
- Vakalar: 3 gerçek vaka (Grand Kartal, Gayrettepe, Davutpaşa); başlık/alt başlık/yer/tarih/özet kullanıcının metinleri, `data/icerik.ts` VAKALAR. Detay sayfası İSTENMİYOR (kullanıcı: "vaka ayrıntı sayfasını yapma"). Özetler yalnız llms.txt'de. Haber ajansı fotoğrafı kullanılmaz; serbest lisanslı yoksa temsili.
- Rehberler henüz yazılmadı: kartlar "PDF · Yakında".
- Ön kayıt formu (`SiteFooter`, `#on-kayit`) henüz bir yere kaydetmiyor (sunucu yok); gönderince bilgi mesajı gösterir.
- Site içi arama (`SiteArama`) istemci tarafında `data/icerik.ts`'i tarar.

## Teknik
- Nuxt 4, `nuxt generate` ile statik çıktı. Yeni npm paketi ancak sorarak.
- Yayın: `npm run build:deploy` (dev açıkken: `NUXT_BUILD_DIR=.nuxt-deploy npx nuxt generate && node scripts/deploy.mjs`) → `deploy/` (depoda tutulur) → GitHub → cPanel › Git Version Control › Update from Remote + Deploy HEAD Commit → `.cpanel.yml` `deploy/`'u public_html'e kopyalar.
- Telefon genişliğinde (≈400 px) düzgün çalışır; metinler Türkçe.

## Çalışma biçimi
- Commit/push kullanıcıda (kullanıcı istediğinde yapılır).
