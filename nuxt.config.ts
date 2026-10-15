// YGU Rehberi sitesi: `npm run build:deploy` ile statik çıktı `deploy/` klasörüne alınır (cPanel Git ile yayın).
// Sayfa başına başlık/açıklama/canonical/JSON-LD: composables/useSayfaSeo.ts.
import { KONULAR } from './data/konular'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  // Derlenmiş çıktı klasörleri dev sunucusunda izlenmesin.
  ignore: ['deploy/**', 'dist/**'],
  nitro: {
    prerender: { routes: ['/', '/ygu-hakkinda', '/on-kayit', '/sss', '/ygu-egitim-sinav-belgelendirme', ...Object.keys(KONULAR).map((y) => `/${y}`), '/llms.txt', '/sitemap.xml'], crawlLinks: true }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0E0E0E' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLM özet' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap' }
      ]
    }
  }
})
