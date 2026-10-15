// YGU Rehberi sitesi: `npm run build:deploy` ile statik çıktı `deploy/` klasörüne alınır (cPanel Git ile yayın).
// Sayfa başına başlık/açıklama/canonical/JSON-LD: composables/useSayfaSeo.ts.
import { KONULAR } from './data/konular'
import { MAKALELER } from './data/makaleler'
import { ANALYTICS_ID } from './data/icerik'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  devtools: { enabled: false },
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  // Derlenmiş çıktı klasörleri dev sunucusunda izlenmesin.
  ignore: ['deploy/**', 'dist/**'],
  nitro: {
    prerender: { routes: ['/', '/ygu-hakkinda', '/on-kayit', '/sss', '/ygu-egitim-sinav-belgelendirme', '/ygu-serbest-calisma', ...Object.keys(KONULAR).map((y) => `/${y}`), '/teknik-makaleler', ...MAKALELER.map((m) => `/teknik-makaleler/${m.yol}`), '/llms.txt', '/sitemap.xml'], crawlLinks: true }
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
      // Google Analytics + Consent Mode v2: onay verilene kadar çerez yok (CerezBildirimi.vue onayı günceller).
      script: [
        {
          key: 'gtag-onay',
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
try{if(localStorage.getItem('cerez-onay')==='kabul')gtag('consent','update',{analytics_storage:'granted'})}catch(e){}
gtag('js',new Date());gtag('config','${ANALYTICS_ID}');`
        },
        { key: 'gtag', src: `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`, async: true }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'LLM özet' },
        // Yazı tipleri yerel (assets/css/fonts.css, public/fonts); ilk ekrandaki başlık ve metin yazı tipi önden yüklenir.
        ...['barlow-condensed-800-latin', 'barlow-condensed-700-latin', 'poppins-400-latin'].map((f) => ({ rel: 'preload', as: 'font', type: 'font/woff2', href: `/fonts/${f}.woff2`, crossorigin: '' }))
      ]
    }
  }
})
