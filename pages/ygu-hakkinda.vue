<script setup lang="ts">
// YGU Hakkında: design/ygu-hakkinda.jpeg.
import { SITE, YGU_NEDIR, GOREVLER, SEVIYELER, NASIL_OLUNUR } from '~/data/icerik'

const YOL = '/ygu-hakkinda'

useSayfaSeo({
  baslik: 'YGU Nedir? Yangın Güvenlik Uzmanının Görevleri ve Seviyeleri | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) nedir, ne iş yapar? YGU\'nun dört temel görevi ve YGU-1, YGU-2, YGU-3, YGU-K seviyeleri.',
  yol: YOL,
  gorsel: '/img/hakkinda-hero.webp',
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
      description: YGU_NEDIR,
      inDefinedTermSet: `${SITE.url}${YOL}`
    },
    sssSema([
      { soru: 'YGU nedir?', yanit: YGU_NEDIR },
      { soru: 'YGU\'nun görevleri nelerdir?', yanit: `${GOREVLER.metin} ${GOREVLER.liste.map((g) => `${g.baslik}: ${g.metin}`).join(' ')}` },
      { soru: 'YGU seviyeleri nelerdir?', yanit: `${SEVIYELER.metin} ${SEVIYELER.liste.map((s) => `${s.ad}: ${s.metin}`).join(' ')}` },
      { soru: 'YGU nasıl olunur?', yanit: NASIL_OLUNUR }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/hakkinda-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" src="/img/hakkinda-hero.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">YGU Hakkında</span>
      </nav>
      <h1 id="sayfa-baslik">YGU <span class="vurgu">Hakkında</span></h1>
      <p>Yangın güvenlik uzmanlığını tanıyın.</p>
    </div>
  </section>

  <section id="ygu-nedir" class="bolum" aria-labelledby="nedir-baslik">
    <div class="wrap nedir">
      <div>
        <span class="cizgi" />
        <h2 id="nedir-baslik" class="b-baslik">YGU Nedir?</h2>
        <p class="nedir-metin">{{ YGU_NEDIR }}</p>
        <NuxtLink to="#gorevler" class="btn btn-amber">YGU'nun Görevlerini İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <img src="/img/hakkinda-ygu-nedir.webp" alt="Mimari projelerin üzerinde YGU yazılı beyaz baret ve şerit metre" width="1536" height="1024" loading="lazy" class="nedir-gorsel">
    </div>
  </section>

  <section id="gorevler" class="bolum bolum-gri" aria-labelledby="gorev-baslik">
    <div class="wrap">
      <span class="cizgi" />
      <h2 id="gorev-baslik" class="b-baslik">YGU'nun Görevleri</h2>
      <p class="b-alt">{{ GOREVLER.metin }}</p>
      <ul class="gorevler">
        <li v-for="g in GOREVLER.liste" :key="g.baslik" class="kart gorev-kart">
          <Ikon :ad="g.ikon" />
          <h3>{{ g.baslik }}</h3>
          <p>{{ g.metin }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section id="seviyeler" class="bolum" aria-labelledby="seviye-baslik">
    <div class="wrap">
      <div class="seviye-ust">
        <div>
          <span class="cizgi" />
          <h2 id="seviye-baslik" class="b-baslik">YGU Seviyeleri</h2>
          <p class="b-alt">{{ SEVIYELER.metin }}</p>
        </div>
        <NuxtLink to="/#ygu-olma-yolu" class="btn btn-amber">YGU Seviyelerini Detaylı İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="seviyeler">
        <li v-for="s in SEVIYELER.liste" :key="s.ad" class="seviye-kart">
          <img :src="`/img/${s.gorsel}.webp`" alt="" width="1536" height="1024" loading="lazy">
          <div class="seviye-alt">
            <Ikon :ad="s.ikon" class="seviye-ikon" />
            <h3>{{ s.ad }}</h3>
            <p>{{ s.metin }}</p>
            <span class="seviye-ok" aria-hidden="true"><Ikon ad="sag" /></span>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section id="nasil-olunur" class="bolum bolum-koyu cta" aria-labelledby="cta-baslik">
    <div class="bolum-arka"><img src="/img/hakkinda-cta.webp" alt="" width="1536" height="1024" loading="lazy"></div>
    <div class="wrap">
      <h2 id="cta-baslik"><span class="vurgu">YGU</span> Nasıl Olunur?</h2>
      <p>{{ NASIL_OLUNUR }}</p>
      <NuxtLink to="/#ygu-olma-yolu" class="btn btn-amber">YGU Olma Süreci Detayları <Ikon ad="ok" /></NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(48px,6vw,72px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 30%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.94) 0%,rgba(14,14,14,.7) 40%,rgba(14,14,14,.1) 75%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(46px,6vw,84px);font-weight:800}
.sayfa-hero p{font-size:clamp(18px,1.7vw,23px);margin:12px 0 0}

.b-baslik{font-size:clamp(34px,3.6vw,48px)}
.b-alt{margin:10px 0 0;color:var(--muted);font-size:17px}

.nedir{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,56px);align-items:center}
.nedir-metin{font-size:17.5px;color:var(--muted);margin:18px 0 26px;line-height:1.6}
.nedir-gorsel{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:6px;box-shadow:0 22px 40px -28px rgba(0,0,0,.6)}
@media (max-width:860px){.nedir{grid-template-columns:1fr}}

.gorevler{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.gorev-kart{text-align:center;padding:26px 22px 28px}
.gorev-kart .ikon{font-size:58px;color:var(--amber-2)}
.gorev-kart h3{font-size:20px;margin-top:14px}
.gorev-kart p{margin:12px 0 0;color:var(--muted);font-size:15px;line-height:1.5}
@media (max-width:980px){.gorevler{grid-template-columns:repeat(2,1fr)}}
@media (max-width:520px){.gorevler{grid-template-columns:1fr}}

.seviye-ust{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap}
.seviyeler{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.seviye-kart{position:relative;border-radius:var(--r);overflow:hidden;background:var(--ink);color:#fff;min-height:240px;display:flex;flex-direction:column;justify-content:flex-end}
.seviye-kart img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.seviye-kart::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,14,14,0) 25%,rgba(14,14,14,.92) 72%)}
.seviye-alt{position:relative;z-index:1;padding:16px 16px 18px}
.seviye-ikon{font-size:34px;color:var(--amber)}
.seviye-kart h3{font-size:30px;margin-top:6px}
.seviye-kart p{margin:6px 0 0;font-size:14px;color:#E4E0D9;padding-right:36px}
.seviye-ok{position:absolute;right:14px;top:50px;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--amber);color:#111;font-size:18px}
@media (max-width:980px){.seviyeler{grid-template-columns:repeat(2,1fr)}}
@media (max-width:520px){.seviyeler{grid-template-columns:1fr}}

.cta .bolum-arka img{opacity:.85;object-position:80% 50%}
.cta h2{font-size:clamp(36px,4vw,52px)}
.cta p{font-size:clamp(17px,1.6vw,21px);max-width:520px;margin:12px 0 24px;color:#ECE8E1}
</style>
