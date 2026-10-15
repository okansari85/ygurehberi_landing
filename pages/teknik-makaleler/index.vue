<script setup lang="ts">
// Teknik Makaleler listesi: tasarım yok; sitenin hero kalıbı + etikete göre süzülen kart ızgarası (MakaleKart).
// Makaleler data/makaleler.ts (en yeni kod en başta).
import { SITE } from '~/data/icerik'
import { MAKALELER } from '~/data/makaleler'

const YOL = '/teknik-makaleler'

const ETIKETLER = [...new Set(MAKALELER.flatMap((m) => m.etiketler))].sort((a, b) => a.localeCompare(b, 'tr'))
const sayi = (e: string) => MAKALELER.filter((m) => m.etiketler.includes(e)).length
const secili = ref('')
const liste = computed(() => (secili.value ? MAKALELER.filter((m) => m.etiketler.includes(secili.value)) : MAKALELER))

useSayfaSeo({
  baslik: 'Yangın Güvenliği Teknik Makaleler | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanları için teknik makaleler: sprinkler, depolama, yangın güvenliği tasarımı ve sahada karşılaşılan uygulama soruları.',
  yol: YOL,
  gorsel: '/img/surec-proje.webp',
  jsonLd: [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Teknik Makaleler',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: MAKALELER.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}${YOL}/${m.yol}`, name: m.baslik }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Teknik Makaleler', item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Teknik Makaleler</span>
      </nav>
      <span class="cizgi" />
      <h1 id="sayfa-baslik"><span class="h1-ust">Yangın Güvenlik Uzmanı İçin</span> Teknik <span class="vurgu">Makaleler</span></h1>
      <p>Yangın güvenliği tasarımı ve uygulamasında karşılaşılan teknik sorular, örnek senaryolar ve kontrol tablolarıyla.</p>
      <span class="hero-sayi"><strong>{{ MAKALELER.length }}</strong> makale</span>
    </div>
  </section>

  <section class="bolum" aria-label="Makaleler">
    <div class="wrap">
      <div v-if="ETIKETLER.length" class="suzgec" role="group" aria-label="Konuya göre süz">
        <button type="button" :class="{ secili: !secili }" :aria-pressed="!secili" @click="secili = ''">Tümü <span>{{ MAKALELER.length }}</span></button>
        <button v-for="e in ETIKETLER" :key="e" type="button" :class="{ secili: secili === e }" :aria-pressed="secili === e" @click="secili = secili === e ? '' : e">
          {{ e }} <span>{{ sayi(e) }}</span>
        </button>
      </div>

      <ul class="makaleler">
        <li v-for="m in liste" :key="m.kod"><MakaleKart :makale="m" /></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;overflow:hidden;background:var(--ink);color:#fff;padding:26px 0 clamp(52px,6vw,76px);
  background-image:radial-gradient(circle at 85% 20%,rgba(255,193,7,.16),transparent 45%),repeating-linear-gradient(135deg,rgba(255,193,7,.05) 0 2px,transparent 2px 18px)}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(44px,6vw,84px);font-weight:800}
.sayfa-hero p{font-size:clamp(17px,1.6vw,21px);margin:16px 0 0;max-width:620px;color:#ECE8E1}
.hero-sayi{display:inline-flex;align-items:baseline;gap:8px;margin-top:22px;padding:8px 16px;border:1px solid var(--line-d);border-radius:99px;font-size:14px;color:var(--muted-d)}
.hero-sayi strong{font-family:var(--display);font-size:22px;color:var(--amber)}

.suzgec{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.suzgec button{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border:1px solid var(--line);border-radius:99px;background:#fff;font:inherit;font-size:14.5px;font-weight:500;color:#3A3835;cursor:pointer;transition:border-color .2s ease,background .2s ease}
.suzgec button span{font-size:12px;font-weight:600;color:var(--muted);background:var(--paper-2);border-radius:99px;padding:1px 8px}
.suzgec button:hover{border-color:var(--amber)}
.suzgec button.secili{background:var(--ink);border-color:var(--ink);color:#fff}
.suzgec button.secili span{background:var(--amber);color:#111}

.makaleler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:20px}
</style>
