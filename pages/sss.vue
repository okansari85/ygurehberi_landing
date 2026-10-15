<script setup lang="ts">
// SSS: tasarım yok; YGU Hakkında sayfasının hero + kırıntı kalıbı, sorular açılır kapanır liste. Metinler data/icerik.ts › SSS.
import { SITE, SSS, ON_KAYIT } from '~/data/icerik'

const YOL = '/sss'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı (YGU) Sık Sorulan Sorular | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) nedir, ne iş yapar, nasıl olunur? YGU seviyeleri, çalışma alanları ve yangın güvenliği kontrol süreleri hakkında sık sorulan sorular.',
  yol: YOL,
  gorsel: '/img/bg-ygu-yolu.webp',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Yangın Güvenlik Uzmanı (YGU) Sık Sorulan Sorular',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'SSS', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema(SSS.liste, YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/bg-ygu-yolu.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" src="/img/bg-ygu-yolu.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">SSS</span>
      </nav>
      <h1 id="sayfa-baslik"><span class="h1-ust">{{ SSS.baslik }}</span> {{ SSS.vurgu }}</h1>
      <p>{{ SSS.metin }}</p>
    </div>
  </section>

  <section class="bolum" aria-label="Sorular ve yanıtlar">
    <div class="wrap">
      <details v-for="(s, i) in SSS.liste" :key="s.soru" class="sss-madde" :open="i === 0">
        <summary><h2>{{ s.soru }}</h2><Ikon ad="sag" /></summary>
        <div v-if="s.bloklar" class="sss-yanit">
          <KonuBloklar :bloklar="s.bloklar" />
          <NuxtLink v-if="s.to" :to="s.to" class="devam">Konunun tamamı <Ikon ad="ok" /></NuxtLink>
        </div>
        <p v-else>{{ s.yanit }}</p>
      </details>
    </div>
  </section>

  <section class="bolum bolum-gri sss-son">
    <div class="wrap">
      <h2>Yangın güvenlik uzmanı olmak mı istiyorsunuz?</h2>
      <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(48px,6vw,72px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.94) 0%,rgba(14,14,14,.75) 45%,rgba(14,14,14,.2) 80%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(42px,5.4vw,76px);font-weight:800;max-width:760px}
.sayfa-hero p{font-size:clamp(18px,1.7vw,23px);margin:12px 0 0;max-width:620px}

.sss-madde{border-bottom:1px solid var(--line)}
.sss-madde summary{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 0;cursor:pointer;list-style:none}
.sss-madde summary::-webkit-details-marker{display:none}
.sss-madde summary h2{font-size:clamp(21px,2vw,26px);font-weight:700;line-height:1.15}
.sss-madde summary .ikon{flex:none;font-size:22px;color:var(--amber-2);transition:transform .2s ease}
.sss-madde[open] summary .ikon{transform:rotate(90deg)}
.sss-madde summary:hover h2{color:var(--amber-ink)}
.sss-madde > p{margin:0 0 24px;color:var(--muted);font-size:16.5px;line-height:1.65;max-width:1080px}
.sss-yanit{padding-bottom:28px;max-width:1080px}
.devam{display:inline-flex;align-items:center;gap:8px;font-weight:600;color:var(--amber-ink);text-decoration:none}
.devam:hover{text-decoration:underline}

.sss-son .wrap{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
.sss-son h2{font-size:clamp(28px,3vw,40px)}
</style>
