<script setup lang="ts">
// YGU Hakkında: Oğuz'un 4 Kasım 2026 tasarımı (WhatsApp, 4 görsel; eski sayfa design/ygu-hakkinda.jpeg idi).
// Metinler data/yguHakkinda.ts'de birebir; hero ve bölüm çizimleri tasarımdan kesildi (hakkinda2-*.webp, düşük çözünürlük).
import { SITE } from '~/data/icerik'
import { YGU_HAKKINDA_SAYFA as S } from '~/data/yguHakkinda'

const YOL = '/ygu-hakkinda'
const bolum = (id: string) => S.bolumler.find((b) => b.id === id)!
// SSS şeması yalnız sayfada görünen metinden kurulur (yanıtlar sayfa metniyle aynı olmalı)
const duzMetin = (id: string) =>
  bolum(id).bloklar.map((b) => (b.tip === 'm' ? `${b.etiket} ${b.metin}` : b.tip === 'p' ? b.metin + (b.kalin ?? '') : b.metin)).join(' ')

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı (YGU) Nedir? Görevleri ve Seviyeleri | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) nedir, ne iş yapar? YGU\'nun dört temel görevi ve YGU-1, YGU-2, YGU-3, YGU-K seviyeleri.',
  yol: YOL,
  gorsel: '/img/hakkinda2-hero.webp',
  jsonLd: [
    {
      '@type': 'AboutPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'YGU Hakkında',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Hakkında', item: `${SITE.url}${YOL}` }
      ]
    },
    {
      '@type': 'DefinedTerm',
      name: 'Yangın güvenlik uzmanı (YGU)',
      description: S.giris.paragraflar[1],
      inDefinedTermSet: `${SITE.url}${YOL}`
    },
    sssSema([
      { soru: 'Yangın güvenlik uzmanı kimdir?', yanit: duzMetin('kimdir') },
      { soru: 'YGU\'nun görevleri nelerdir?', yanit: duzMetin('gorevler') },
      { soru: 'Yangın güvenlik uzmanı (YGU) nasıl olunur?', yanit: duzMetin('nasil-olunur') },
      { soru: 'YGU seviyeleri nelerdir?', yanit: duzMetin('seviyeler') }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/hakkinda2-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" src="/img/hakkinda2-hero.webp" alt="" width="1600" height="658" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">YGU Hakkında</span>
      </nav>
      <h1 id="sayfa-baslik">{{ S.hero.baslik }} <span class="vurgu">{{ S.hero.vurgu }}</span></h1>
      <p>{{ S.hero.metin }}</p>
    </div>
  </section>

  <YguBolumSeridi />

  <section class="bolum hk" aria-labelledby="giris-baslik">
    <div class="wrap">
      <h2 id="giris-baslik" class="hk-giris-baslik">{{ S.giris.baslik }}</h2>
      <p v-for="p in S.giris.paragraflar" :key="p" class="hk-giris">{{ p }}</p>
      <aside class="hk-not">
        <strong>{{ S.giris.not.baslik }}</strong>
        <p>{{ S.giris.not.metin }}</p>
      </aside>

      <section v-for="b in S.bolumler" :id="b.id" :key="b.id" class="hk-bolum" :aria-labelledby="`${b.id}-baslik`">
        <div class="hk-yan">
          <div class="hk-etiket"><span class="hk-no">{{ b.no }}</span><span>{{ b.etiket }}</span></div>
          <img :src="`/img/${b.gorsel}.webp`" :alt="b.gorselAlt" width="276" height="209" loading="lazy">
        </div>
        <div class="hk-icerik">
          <h2 :id="`${b.id}-baslik`">{{ b.baslik }}</h2>
          <template v-for="(k, i) in b.bloklar" :key="i">
            <p v-if="k.tip === 'p'">{{ k.metin }}<strong v-if="k.kalin">{{ k.kalin }}</strong></p>
            <p v-else-if="k.tip === 'm'"><strong>{{ k.etiket }}</strong> {{ k.metin }}</p>
            <h3 v-else-if="k.tip === 'kutu'" class="hk-kutu">{{ k.metin }}</h3>
            <h3 v-else-if="k.tip === 'h'" class="hk-h">{{ k.metin }}</h3>
            <p v-else-if="k.tip === 'link'"><NuxtLink :to="k.to" class="hk-link">{{ k.metin }}</NuxtLink></p>
          </template>
          <NuxtLink v-if="b.dugme" :to="b.dugme.to" class="hk-dugme">{{ b.dugme.metin }} <Ikon ad="ok" /></NuxtLink>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(48px,6vw,72px)}
.sayfa-hero-bg{position:absolute;top:0;right:0;width:min(62%,1000px);height:100%;object-fit:cover;object-position:60% 30%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,1) 0%,rgba(14,14,14,.96) 38%,rgba(14,14,14,.35) 62%,rgba(14,14,14,0) 80%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(40px,5vw,68px);font-weight:800;max-width:640px;line-height:1.02;padding-left:18px;border-left:6px solid var(--amber)}
.sayfa-hero p{font-size:clamp(17px,1.6vw,21px);margin:16px 0 0;max-width:560px;color:#ECE8E1}
@media (max-width:760px){.sayfa-hero-bg{width:100%;opacity:.35}}

.hk-giris-baslik{font-size:clamp(28px,3vw,38px);padding-left:16px;border-left:5px solid var(--amber)}
.hk-giris{margin:18px 0 0;max-width:1040px;font-size:16.5px;line-height:1.7;color:var(--text)}
.hk-not{margin:28px 0 0;padding:22px 26px;border-left:5px solid var(--amber);border-radius:0 var(--r) var(--r) 0;background:linear-gradient(90deg,#FFF8E6,#FFFDF7)}
.hk-not strong{font-size:15.5px}
.hk-not p{margin:8px 0 0;font-size:14.5px;line-height:1.65;color:var(--text)}

.hk-bolum{display:grid;grid-template-columns:276px 1fr;gap:clamp(24px,3.4vw,44px);padding:clamp(36px,4vw,48px) 0;border-top:1px solid var(--line);margin-top:clamp(36px,4vw,48px);scroll-margin-top:90px}
.hk-bolum + .hk-bolum{margin-top:0}
.hk-etiket{display:flex;align-items:center;gap:12px;font-family:var(--display);font-weight:700;font-size:15px;letter-spacing:.06em;text-transform:uppercase;line-height:1.3}
.hk-etiket span:last-child{padding-left:12px;border-left:3px solid var(--amber)}
.hk-no{display:grid;place-items:center;min-width:48px;height:40px;border-radius:6px;background:var(--amber);color:#111;font-size:24px;letter-spacing:0}
.hk-yan img{display:block;width:100%;height:auto;margin-top:16px;border-radius:var(--r)}
.hk-icerik{max-width:760px}
.hk-icerik h2{font-size:clamp(26px,2.6vw,34px)}
.hk-icerik p{margin:14px 0 0;font-size:16px;line-height:1.7}
.hk-kutu{margin:18px 0 0;padding:14px 16px;border-left:4px solid var(--amber);background:var(--paper-2);border-radius:0 6px 6px 0;font-family:var(--body);font-size:16px;font-weight:700}
.hk-h{margin:20px 0 0;font-family:var(--body);font-size:16.5px;font-weight:700}
.hk-link{font-weight:700;color:var(--text)}
.hk-link:hover{color:var(--amber-ink)}
.hk-dugme{display:inline-flex;align-items:center;gap:10px;margin-top:22px;padding:12px 18px;border:1.5px solid var(--amber-2);border-radius:6px;font-weight:700;font-size:14.5px;color:var(--text);text-decoration:none;transition:background .2s ease}
.hk-dugme:hover{background:#FFF4D1}
.hk-dugme .ikon{font-size:17px}
@media (max-width:820px){.hk-bolum{grid-template-columns:1fr}.hk-yan img{max-width:320px}}
</style>
