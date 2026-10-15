// /sitemap.xml: sayfalar ve sayfalarda görünen içerik görselleri (Google görsel site haritası). `nuxt generate` ile statik dosya olur.
// Görsel listeleri data/icerik.ts'den gelir; sayfaya yeni görsel eklenince burası kendiliğinden güncellenir.
// Konu sayfaları (data/konular.ts) kendiliğinden eklenir. Başka yeni sayfa: SAYFALAR'a ekle (ayrıca nitro.prerender.routes ve llms.txt).
import { SITE, SUREC, CALISMA_ALANLARI, VAKALAR, REHBERLER, SEVIYELER, SERBEST_SAYFA } from '../../data/icerik'
import { KONULAR } from '../../data/konular'
import { MAKALELER } from '../../data/makaleler'

type Sayfa = { yol: string; guncelleme: string; gorseller: string[] }

const SAYFALAR: Sayfa[] = [
  {
    yol: '/',
    guncelleme: '2026-10-14',
    gorseller: [
      'hero-ana',
      ...SUREC.adimlar.map((a) => a.gorsel),
      ...CALISMA_ALANLARI.yapilar.map((y) => y.gorsel),
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
    yol: '/on-kayit',
    guncelleme: '2026-10-14',
    gorseller: ['on-kayit-hero', 'on-kayit-form']
  },
  {
    yol: '/ygu-egitim-sinav-belgelendirme',
    guncelleme: '2026-10-15',
    gorseller: ['egitim-hero']
  },
  {
    yol: '/ygu-serbest-calisma',
    guncelleme: '2026-10-15',
    gorseller: ['serbest-hero', ...SERBEST_SAYFA.hizmetler.liste.map((h) => h.gorsel)]
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
  ...MAKALELER.map((m) => ({ yol: `/teknik-makaleler/${m.yol}`, guncelleme: m.yayin || '2026-10-15', gorseller: [] })),
  ...Object.entries(KONULAR).map(([yol, k]) => ({
    yol: `/${yol}`,
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
