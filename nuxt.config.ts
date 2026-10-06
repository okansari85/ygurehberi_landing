// YGU Rehberi tanıtım sitesi: `npm run build:deploy` ile statik çıktı `deploy/` klasörüne alınır (cPanel Git ile yayın).
const site = 'https://ygurehberi.com'
const title = 'YGU Rehberi — Yangın Güvenlik Uzmanlığı'
const description =
  'Yangın Güvenlik Uzmanları ve adayları için mevzuat, ekipman, kontrol listeleri ve ücretsiz periyodik yangın kontrolü aracı.'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Ücretsiz kontrol aracının adresi; boşsa "Ücretsiz kontrol et" düğmesi bülten bölümüne gider.
      aracUrl: process.env.NUXT_PUBLIC_ARAC_URL || ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#141414' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'tr_TR' },
        { property: 'og:url', content: site },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${site}/logo.png` }
      ],
      link: [
        { rel: 'canonical', href: site },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})
