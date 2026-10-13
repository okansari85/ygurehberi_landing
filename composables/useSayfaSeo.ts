// Sayfa başına SEO: başlık, açıklama, canonical, Open Graph/Twitter ve schema.org JSON-LD (arama motorları + yapay zekâ yanıt motorları için).
import { SITE } from '~/data/icerik'

type Secenek = {
  baslik: string
  aciklama: string
  yol: string
  gorsel?: string
  jsonLd?: Record<string, unknown>[]
}

export const KURULUS = {
  '@type': 'Organization',
  '@id': `${SITE.url}/#kurulus`,
  name: SITE.ad,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description: SITE.aciklama
}

export function useSayfaSeo({ baslik, aciklama, yol, gorsel = '/img/hero-ana.webp', jsonLd = [] }: Secenek) {
  const url = `${SITE.url}${yol}`
  const resim = `${SITE.url}${gorsel}`

  useSeoMeta({
    title: baslik,
    description: aciklama,
    ogType: 'website',
    ogLocale: 'tr_TR',
    ogSiteName: SITE.ad,
    ogUrl: url,
    ogTitle: baslik,
    ogDescription: aciklama,
    ogImage: resim,
    ogImageWidth: 1536,
    ogImageHeight: 1024,
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
