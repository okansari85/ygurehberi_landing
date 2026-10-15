# CLAUDE.md

YGU Rehberi (ygurehberi.com): Yangın Güvenlik Uzmanlığı (YGU) bilgi sitesi. Statik Nuxt sitesi.

## Tasarım (onaylı, birebir uygulanır)
- `design/ana-sayfa.jpeg` → `pages/index.vue`; `design/ygu-hakkinda.jpeg` → `pages/ygu-hakkinda.vue`. Diğer menü sayfaları için tasarım yok; Vakalarla Öğren ve Kısa Rehberler şimdilik ana sayfadaki bölümlere gider (Çalışma Alanları artık konu sayfası, aşağıda).
- `design/on-kayit.jpeg` → `pages/on-kayit.vue` (içerik yerleşimi aynı, üst menü/alt bilgi sitenin). Form henüz bir yere göndermiyor (TODO: gönderim yolu + KVKK Aydınlatma Metni kullanıcıdan). Görseller `on-kayit-hero`/`on-kayit-form` şimdilik kopya (hero-ana / bg-ygu-yolu); istemleri script'te.
- Üst menüde "Ana Sayfa" yok (logo gider; alt bilgide var). "Kaynaklar" açılır menü: Kısa Rehberler + Teknik Makaleler (kullanıcı 15 Ekim). Menü verisi `MENU` (`alt` = açılır öğeler). `/sss` (SSS) menüde; tasarımı yok, YGU Hakkında kalıbında, metinler `data/icerik.ts` › SSS. Menü 1220 px altında hamburger.
- Konu sayfaları (15 Ekim 2026): `/yangin-guvenlik-uzmani-nedir`, `/yangin-guvenlik-uzmani-nasil-olunur`, `/ygu-seviyeleri`, `/yangin-guvenlik-uzmani-gorevleri`, `/calisma-alanlari` → `pages/[konu].vue` + `data/konular.ts`. Metinler kullanıcının YGU.docx'inden BİREBİR ve EKSİKSİZ (kullanıcı: "her satırını biz özgün yazdık, eksik verme"); docx'in SSS bölümü `SSS_DOCX` ile /sss'de. Ana sayfa kartları, hero etiketleri ve menüdeki Çalışma Alanları bu sayfalara gider. Sitemap, prerender, llms.txt (tam metin) ve site içi arama `KONULAR`'dan kendiliğinden beslenir.
- `design/egitim-sinav-belgelendirme.jpeg` → `pages/ygu-egitim-sinav-belgelendirme.vue`, metinler `EGITIM_SAYFA`. Kullanıcı "ChatGPT sıkışık yapmış, uyarla" dedi: yerleşim genişletildi, mavi tonlar siyah/amber yapıldı; sertifika temsilî (Bakanlık amblemi yok, nötr alev mührü). Hero görseli `egitim-hero` şimdilik bg-ygu-yolu kopyası (OpenAI kredisi yok; istem script'te). Hero etiketi "Eğitim ve Sınav" buraya gider.
- `design/serbest-calisma.jpeg` → `pages/ygu-serbest-calisma.vue`, metinler `SERBEST_SAYFA`; eğitim sayfası gibi uyarlandı. Hero `serbest-hero` şimdilik yapi-buro kopyası. Ana sayfadaki Serbest Çalışma kartı ve hero etiketi buraya gider. Numaralı bölüm başlıkları ortak: `components/NumaraliBaslik.vue`.
- Teknik makaleler: `/teknik-makaleler` (kart listesi, etikete göre süzgeç) + `/teknik-makaleler/<yol>` → `data/makaleler.ts` (`MAKALELER`, düz metin). Kullanıcının makale .docx'leri `python -I scripts/makale-aktar.py <dosya.docx>` ile aktarılır (aynı kod güncellenir), sonra `etiketler` ve `yayin` elle doldurulur. Sitemap/prerender/llms.txt/arama kendiliğinden. İlk makale YGR-004 (15 Ekim); docx'teki 4 grafik metinde kullanılmıyordu, alınmadı.
- Ana sayfada "YGU'nun Görevleri" (4 görselli kart → görevler sayfası) ve "Serbest Çalışma İmkânı" bandı (→ serbest çalışma) YGU Olma Yolu ile Kontrol Süreleri arasında (kullanıcı 15 Ekim ekran görüntüsü; `ANA_GOREVLER`, `ANA_SERBEST`).
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
- Yazı tipleri yerel: `public/fonts/*.woff2` + `assets/css/fonts.css` (Google Fonts bağlantısı yok, hız için; 15 Ekim). Başlık 800/700 ve Poppins 400 önden yüklenir (nuxt.config).
- Makale ve konu sayfaları `og:type=article` + yayın tarihi; makalenin paylaşım görseli ilk şekli (`useSayfaSeo` › `gorsel`, `gorselBoyut`, `makaleTarihi`).
- Google Analytics `G-BKK8WPW9Q5` (`ANALYTICS_ID`, nuxt.config head) + Consent Mode v2: onay yokken çerez yok. Çerez bandı `components/CerezBildirimi.vue`, metin `CEREZ` (kullanıcı onayladı 15 Ekim). Çerez Politikası metni kullanıcıdan bekleniyor; gelince sayfa + banda bağlantı.
- `scripts/deploy.mjs` 404.html ve 200.html'e `noindex` koyar.
- IndexNow (Bing/Yandex; ChatGPT arama Bing dizinini kullanır): anahtar `public/<32 hex>.txt`; cPanel yayınından SONRA `npm run indexnow` sitemap'teki tüm adresleri bildirir.
- `public/.htaccess`: tek adres biçimi `https://ygurehberi.com/yol` (www→çıplak, http→https, sondaki / kaldırılır, klasörün index.html'i sunulur); `_nuxt/` ve `fonts/` 1 yıl önbellek, HTML her istekte doğrulanır. Sitemap ve canonical bu biçimde kalmalı.

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
