// Sayfa başına SEO: başlık, açıklama, canonical, Open Graph/Twitter ve schema.org JSON-LD (arama motorları + yapay zekâ yanıt motorları için).
import { SITE } from '~/data/icerik'

type Secenek = {
  baslik: string
  aciklama: string
  yol: string
  gorsel?: string
  // Paylaşım görselinin ölçüleri (site görselleri 1536×1024).
  gorselBoyut?: [number, number]
  // Makale sayfaları: og:type article + yayın tarihi.
  makaleTarihi?: string
  jsonLd?: Record<string, unknown>[]
}

export const KURULUS = {
  '@type': 'Organization',
  '@id': `${SITE.url}/#kurulus`,
  name: SITE.ad,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
  description: SITE.aciklama,
  knowsAbout: ['Yangın güvenlik uzmanı', 'Yangın güvenlik uzmanlığı', 'Yangın güvenliği', 'Binaların Yangından Korunması Hakkında Yönetmelik', 'Yangın güvenliği periyodik kontrolü']
}

export function useSayfaSeo({ baslik, aciklama, yol, gorsel = '/img/hero-ana.webp', gorselBoyut = [1536, 1024], makaleTarihi, jsonLd = [] }: Secenek) {
  const url = `${SITE.url}${yol}`
  const resim = `${SITE.url}${gorsel}`

  useSeoMeta({
    title: baslik,
    description: aciklama,
    ogType: makaleTarihi ? 'article' : 'website',
    ...(makaleTarihi ? { articlePublishedTime: makaleTarihi, articleModifiedTime: makaleTarihi } : {}),
    ogLocale: 'tr_TR',
    ogSiteName: SITE.ad,
    ogUrl: url,
    ogTitle: baslik,
    ogDescription: aciklama,
    ogImage: resim,
    ogImageWidth: gorselBoyut[0],
    ogImageHeight: gorselBoyut[1],
    ogImageAlt: baslik,
    twitterCard: 'summary_large_image',
    twitterTitle: baslik,
    twitterDescription: aciklama,
    twitterImage: resim
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          KURULUS,
          {
            '@type': 'WebSite',
            '@id': `${SITE.url}/#site`,
            url: SITE.url,
            name: SITE.ad,
            alternateName: 'YGU Rehberi — Yangın Güvenlik Uzmanlığı',
            inLanguage: 'tr-TR',
            publisher: { '@id': `${SITE.url}/#kurulus` }
          },
          ...jsonLd
        ]
      })
    }]
  })
}

// Sık sorulan sorular (FAQPage): yanıtlar sayfadaki metinle birebir aynı olmalı.
export function sssSema(sorular: { soru: string; yanit: string }[], yol: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}${yol}#sss`,
    mainEntity: sorular.map((s) => ({
      '@type': 'Question',
      name: s.soru,
      acceptedAnswer: { '@type': 'Answer', text: s.yanit }
    }))
  }
}
