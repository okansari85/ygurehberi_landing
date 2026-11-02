// /sitemap.xml: sayfalar ve sayfalarda görünen içerik görselleri (Google görsel site haritası). `nuxt generate` ile statik dosya olur.
// Görsel listeleri data/icerik.ts'den gelir; sayfaya yeni görsel eklenince burası kendiliğinden güncellenir.
// Konu sayfaları (data/konular.ts) kendiliğinden eklenir. Başka yeni sayfa: SAYFALAR'a ekle (ayrıca nitro.prerender.routes ve llms.txt).
import { SITE, SUREC, CALISMA_ALANLARI, ANA_CALISMA, VAKALAR, REHBERLER, SEVIYELER, SERBEST_SAYFA } from '../../data/icerik'
import { KONULAR } from '../../data/konular'
import { GOREVLER_SAYFA } from '../../data/gorevler'
import { MAKALELER } from '../../data/makaleler'
import { VAKA_SAYFA } from '../../data/vakalar'
import { YGU_KATEGORILER, YGU_MAKALELER, kategoriMakaleleri, konuYolu } from '../../data/yguBilgi'

type Sayfa = { yol: string; guncelleme: string; gorseller: string[] }

const SAYFALAR: Sayfa[] = [
  {
    yol: '/',
    guncelleme: '2026-10-14',
    gorseller: [
      'hero-ygu',
      ...SUREC.adimlar.map((a) => a.gorsel),
      ...ANA_CALISMA.yapilar.map((y) => y.gorsel),
      ...VAKALAR.liste.map((v) => v.gorsel),
      ...REHBERLER.liste.map((r) => r.gorsel)
    ]
  },
  {
    yol: '/ygu-hakkinda',
    guncelleme: '2026-10-13',
    gorseller: ['hakkinda-hero', 'hakkinda-ygu-nedir', ...SEVIYELER.liste.map((s) => s.gorsel)]
  },
  {
    yol: '/vakalarla-ogren',
    guncelleme: '2026-10-18',
    gorseller: ['vakalar-hero', ...VAKA_SAYFA.liste.map((v) => v.gorsel)]
  },
  {
    yol: '/calisma-alanlari',
    guncelleme: '2026-11-01',
    gorseller: ['ca-hero', ...ANA_CALISMA.yapilar.map((y) => y.gorsel)]
  },
  {
    yol: '/yangin-guvenligi-yasam-dongusu',
    guncelleme: '2026-11-01',
    gorseller: ['yd-hero', 'yd-neden', 'yd-proje', 'yd-uygulama', 'yd-dogrulama', 'yd-sureklilik', 'yd-tesis']
  },
  {
    yol: '/on-kayit',
    guncelleme: '2026-10-14',
    gorseller: ['on-kayit-hero', 'on-kayit-form']
  },
  {
    yol: '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme',
    guncelleme: '2026-11-01',
    gorseller: ['egitim-hero-baret']
  },
  {
    yol: '/yangin-guvenlik-uzmani-gorevleri',
    guncelleme: '2026-11-02',
    gorseller: ['gorevler-hero', ...GOREVLER_SAYFA.gorevler.map((g) => g.gorsel)]
  },
  {
    yol: '/serbest-calisma',
    guncelleme: '2026-11-02',
    gorseller: ['serbest-sayfa-hero', 'serbest-sayfa-kendi', ...SERBEST_SAYFA.modeller.liste.map((m) => m.gorsel), 'serbest-sayfa-bedel', 'serbest-sayfa-bagimsizlik']
  },
  {
    yol: '/kvkk-aydinlatma-metni',
    guncelleme: '2026-10-31',
    gorseller: []
  },
  {
    yol: '/sss',
    guncelleme: '2026-10-15',
    gorseller: []
  },
  {
    yol: '/teknik-makaleler',
    guncelleme: MAKALELER.map((m) => m.yayin).filter(Boolean).sort().at(-1) ?? '2026-10-15',
    gorseller: []
  },
  ...YGU_KATEGORILER.map((k) => ({
    yol: `/ygu-hakkinda/${k.yol}`,
    guncelleme: kategoriMakaleleri(k.yol).map((m) => m.guncelleme ?? m.yayin).sort().at(-1) ?? '2026-10-18',
    gorseller: []
  })),
  ...YGU_MAKALELER.map((m) => ({ yol: `/ygu-hakkinda/${m.kategori}/${m.yol}`, guncelleme: m.guncelleme ?? m.yayin, gorseller: [] })),
  ...MAKALELER.map((m) => ({ yol: `/teknik-makaleler/${m.yol}`, guncelleme: m.yayin || '2026-10-15', gorseller: [] })),
  ...Object.entries(KONULAR).map(([yol, k]) => ({
    yol: konuYolu(yol),
    guncelleme: '2026-10-15',
    gorseller: [k.gorsel, ...(k.bloklar.some((b) => b.tip === 'yapilar') ? CALISMA_ALANLARI.yapilar.map((y) => y.gorsel) : [])]
  }))
]

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  const urller = SAYFALAR.map((s) => {
    const gorseller = [...new Set(s.gorseller)]
      .map((g) => `    <image:image><image:loc>${SITE.url}/img/${g}.webp</image:loc></image:image>`)
      .join('\n')
    return `  <url>
    <loc>${SITE.url}${s.yol}</loc>
    <lastmod>${s.guncelleme}</lastmod>
${gorseller}
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urller}
</urlset>
`
})
