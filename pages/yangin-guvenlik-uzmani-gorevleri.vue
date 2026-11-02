<script setup lang="ts">
// Görevler: design/yangin-guvenlik-uzmani-gorevleri.pdf (2 Kasım 2026). Üst menü, ön kayıt bandı ve alt bilgi sitenin kendisinden.
import { SITE } from '~/data/icerik'
import { GOREVLER_SAYFA as G, duzMetin } from '~/data/gorevler'

const YOL = '/yangin-guvenlik-uzmani-gorevleri'
const metinler = (m: string[]) => m.map(duzMetin).join(' ')

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanının (YGU) Görevleri Nelerdir? | YGU Rehberi',
  aciklama: 'YGU proje inceleme, yapı kullanma izni, periyodik kontrol ve tatbikat süreçlerinde ne yapar? Görevler, belgeler, yetki seviyeleri ve sınırlar.',
  yol: YOL,
  gorsel: '/img/gorevler-hero.webp',
  gorselBoyut: [1920, 902],
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: G.baslik,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Görevleri', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema([
      { soru: G.baslik, yanit: `${G.metin} ${G.ozet.liste.map((l) => `${l.baslik}: ${l.metin}`).join(' ')}` },
      ...G.gorevler.flatMap((g) => [
        { soru: g.giris.baslik, yanit: metinler(g.giris.metin) },
        ...g.kartlar.filter((k) => k.baslik.endsWith('?')).map((k) => ({ soru: k.baslik, yanit: metinler(k.metin) }))
      ])
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/gorevler-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="g-hero" aria-labelledby="sayfa-baslik">
    <img class="g-hero-foto" src="/img/gorevler-hero.webp" alt="Yangın güvenlik uzmanı, yangın pompa dairesinde projeyi tablette inceliyor" width="1920" height="902" fetchpriority="high">
    <div class="wrap">
      <span class="ust g-hero-ust">{{ G.ust }}</span>
      <span class="cizgi" />
      <h1 id="sayfa-baslik">{{ G.baslik }}</h1>
      <p>{{ G.metin }}</p>
      <p class="g-rehber"><strong>{{ G.rehber.etiket }}:</strong> {{ G.rehber.metin }}</p>
    </div>
  </section>

  <section id="gorevler" class="bolum" aria-labelledby="ozet-baslik">
    <div class="wrap">
      <span class="ust g-koyu-ust">{{ G.ozet.ust }}</span>
      <h2 id="ozet-baslik" class="g-baslik">{{ G.ozet.baslik }}</h2>
      <p class="g-giris">{{ G.ozet.metin }}</p>
      <ul class="g-ozetler">
        <li v-for="o in G.ozet.liste" :key="o.id">
          <NuxtLink :to="`#${o.id}`" class="kart g-ozet">
            <img :src="`/img/${o.gorsel}.webp`" alt="" width="800" height="547" loading="lazy">
            <div class="g-ozet-ic">
              <h3>{{ o.baslik }}</h3>
              <p>{{ o.metin }}</p>
              <span class="g-ozet-dugme">{{ G.ozet.dugme }} <span class="g-ok"><Ikon ad="ok" /></span></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <p class="g-not"><strong>{{ G.ozet.not.etiket }}:</strong> {{ G.ozet.not.metin }}</p>
    </div>
  </section>

  <section v-for="g in G.gorevler" :id="g.id" :key="g.id" class="g-gorev" :aria-labelledby="`${g.id}-baslik`">
    <div class="wrap">
      <header class="g-bas">
        <span class="g-no" aria-hidden="true">{{ g.no }}</span>
        <div>
          <span class="g-bas-ust">{{ g.ust }}</span>
          <h2 :id="`${g.id}-baslik`" class="g-baslik">{{ g.baslik }}</h2>
        </div>
      </header>

      <div class="g-acilis" :class="{ 'g-acilis-ters': g.fotoSagda }">
        <img class="g-foto" :src="`/img/${g.gorsel}.webp`" :alt="g.alt" width="1200" height="750" loading="lazy">
        <div class="g-kutu">
          <h3>{{ g.giris.baslik }}</h3>
          <p v-for="m in g.giris.metin" :key="m"><VurguluMetin :metin="m" /></p>
          <div class="g-etiketler">
            <span v-for="e in g.giris.etiketler" :key="e.metin" class="g-etiket" :class="{ 'g-etiket-vurgu': e.vurgu }">{{ e.metin }}</span>
          </div>
        </div>
      </div>

      <ul class="g-kartlar">
        <li v-for="k in g.kartlar" :key="k.baslik" class="g-kart" :class="{ 'g-kart-vurgu': k.vurgu }">
          <h3>{{ k.baslik }}</h3>
          <p v-for="m in k.metin" :key="m"><VurguluMetin :metin="m" /></p>
        </li>
      </ul>

      <p v-if="g.not" class="g-not"><strong>{{ g.not.etiket }}:</strong> {{ g.not.metin }}</p>
    </div>
  </section>

  <section id="yetki-sinirlari" class="g-gorev g-son" aria-labelledby="ortak-baslik">
    <div class="wrap">
      <header class="g-bas">
        <span class="g-no" aria-hidden="true">✓</span>
        <div>
          <span class="g-bas-ust">{{ G.ortak.ust }}</span>
          <h2 id="ortak-baslik" class="g-baslik">{{ G.ortak.baslik }}</h2>
        </div>
      </header>
      <ul class="g-kartlar">
        <li v-for="k in G.ortak.kartlar" :key="k.baslik" class="g-kart">
          <h3>{{ k.baslik }}</h3>
          <p v-for="m in k.metin" :key="m">{{ m }}</p>
        </li>
      </ul>
      <p class="g-not"><strong>{{ G.ortak.not.etiket }}:</strong> {{ G.ortak.not.metin }}</p>
    </div>
  </section>
</template>

<style scoped>
.g-hero{position:relative;overflow:hidden;background:#111317;color:#fff;padding:clamp(40px,5.5vw,76px) 0}
.g-hero-foto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 40%}
.g-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,19,23,.97) 0%,rgba(17,19,23,.9) 36%,rgba(17,19,23,.2) 62%,rgba(17,19,23,0) 100%)}
.g-hero .wrap{position:relative;z-index:1}
.g-hero-ust{color:var(--amber);font-size:clamp(15px,1.3vw,18px)}
.g-hero .cizgi{height:4px;margin-bottom:18px}
.g-hero h1{max-width:12.5em;font-size:clamp(36px,4.3vw,62px);font-weight:700;line-height:1.05}
.g-hero h1 + p{max-width:600px;margin:18px 0 0;font-size:clamp(15px,1.25vw,18px);color:#ECE8E1}
.g-rehber{max-width:600px;margin:20px 0 0;padding:12px 16px;border:1px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(17,19,23,.55);font-size:14.5px;line-height:1.5;color:#ECE8E1}
.g-rehber strong{color:var(--amber)}

.g-koyu-ust{color:var(--amber-ink)}
.g-baslik{font-size:clamp(30px,3.2vw,44px);line-height:1.08}
.g-giris{max-width:820px;margin:14px 0 0;font-size:clamp(15px,1.2vw,17px);color:var(--muted)}

.g-ozetler{list-style:none;margin:26px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.g-ozet{display:flex;flex-direction:column;height:100%;overflow:hidden;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}
.g-ozet:hover{transform:translateY(-3px);box-shadow:0 12px 26px -16px rgba(0,0,0,.45)}
.g-ozet img{width:100%;aspect-ratio:16/10;object-fit:cover}
.g-ozet-ic{flex:1;display:flex;flex-direction:column;padding:16px 18px 18px}
.g-ozet h3{font-size:clamp(20px,1.65vw,23px);line-height:1.1}
.g-ozet p{flex:1;margin:10px 0 14px;font-size:14px;line-height:1.55;color:var(--muted)}
.g-ozet-dugme{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:12px;border-top:1px solid var(--line);font-family:var(--display);font-size:16px;font-weight:700;color:var(--amber-ink)}
.g-ok{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:50%;background:var(--amber);color:#111;font-size:16px}

.g-not{margin:20px 0 0;padding:14px 18px;border:1px solid #F4E3B5;border-left:4px solid var(--amber-2);border-radius:8px;background:#FFF9EA;font-size:14.5px;line-height:1.55;color:#3A3835}

.g-gorev{scroll-margin-top:90px;padding:clamp(36px,4vw,56px) 0;border-top:1px solid var(--line)}
.g-son{padding-bottom:clamp(48px,5vw,72px)}
.g-bas{display:flex;align-items:flex-start;gap:14px}
.g-no{display:grid;place-items:center;flex:none;width:46px;height:42px;border-radius:7px;background:var(--amber);font-family:var(--display);font-size:24px;font-weight:800;color:#111}
.g-bas > div{min-width:0}
.g-bas-ust{display:block;width:fit-content;margin-bottom:8px;padding:3px 12px;border-left:3px solid var(--amber);background:#FFF6DB;font-family:var(--display);font-size:clamp(15px,1.45vw,19px);font-weight:700;line-height:1.25;letter-spacing:.03em;text-transform:uppercase;color:var(--amber-ink)}

.g-acilis{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:22px;align-items:stretch;margin-top:22px}
.g-acilis-ters{grid-template-columns:minmax(0,1.15fr) minmax(0,1fr)}
.g-acilis-ters .g-foto{order:2}
.g-foto{width:100%;height:100%;min-height:260px;object-fit:cover;border:1px solid var(--line);border-radius:12px}
.g-kutu{display:flex;flex-direction:column;padding:clamp(20px,2.2vw,28px);border:1px solid var(--line);border-radius:12px;background:#F5F7F6}
.g-kutu h3{font-size:clamp(22px,1.9vw,27px);line-height:1.12}
.g-kutu p{margin:12px 0 0;font-size:clamp(14.5px,1.1vw,16px);line-height:1.65;color:#3A3835}
.g-etiketler{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.g-etiket{padding:4px 12px;border-radius:99px;background:#E9EBEA;font-size:13px;font-weight:600;color:#3A3835}
.g-etiket-vurgu{background:#FFDD8F;color:#111}

.g-kartlar{list-style:none;margin:14px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.g-bas + .g-kartlar{margin-top:22px}
.g-kart{padding:clamp(16px,1.6vw,20px);border:1px solid var(--line);border-radius:10px;background:#fff}
.g-kart h3{font-size:clamp(20px,1.6vw,23px);line-height:1.15}
.g-kart p{margin:8px 0 0;font-size:14.5px;line-height:1.6;color:#4B4843}
.g-kart strong,.g-kutu strong,.g-not strong{font-weight:600;color:#1B1B1B}
.g-kart-vurgu{border-color:#F2D58F;background:#FFFBF0}

@media (max-width:1060px){
  .g-ozetler{grid-template-columns:repeat(2,minmax(0,1fr))}
  .g-hero::after{background:linear-gradient(90deg,rgba(17,19,23,.96) 0%,rgba(17,19,23,.86) 60%,rgba(17,19,23,.35) 100%)}
}
@media (max-width:820px){
  .g-acilis,.g-acilis-ters{grid-template-columns:minmax(0,1fr)}
  .g-acilis-ters .g-foto{order:0}
  .g-foto{height:auto;min-height:0;aspect-ratio:16/10}
  .g-kartlar{grid-template-columns:minmax(0,1fr)}
}
@media (max-width:560px){
  .g-ozetler{grid-template-columns:minmax(0,1fr)}
  .g-hero::after{background:rgba(17,19,23,.84)}
  .g-no{width:40px;height:38px;font-size:21px}
}
</style>
