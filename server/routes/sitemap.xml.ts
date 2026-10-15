// /sitemap.xml: sayfalar ve sayfalarda görünen içerik görselleri (Google görsel site haritası). `nuxt generate` ile statik dosya olur.
// Görsel listeleri data/icerik.ts'den gelir; sayfaya yeni görsel eklenince burası kendiliğinden güncellenir.
// Yeni sayfa: SAYFALAR'a ekle (ayrıca nitro.prerender.routes ve llms.txt).
import { SITE, SUREC, CALISMA_ALANLARI, VAKALAR, REHBERLER, SEVIYELER } from '../../data/icerik'

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
  }
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
