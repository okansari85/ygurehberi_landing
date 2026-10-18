<script setup lang="ts">
// Vakalarla Öğren: kullanıcının 18 Ekim 2026 tasarımı (design/vakalarla-ogren.jpeg), metin/görsel birebir; veri data/vakalar.ts.
// Süzgeç istemci tarafında; statik çıktıda tüm vakalar listelenir. Detay sayfası yok, kartlar bağlantısız.
import { SITE } from '~/data/icerik'
import { VAKA_SAYFA, VAKA_SUZGECLER, type VakaEtiket } from '~/data/vakalar'

const YOL = '/vakalarla-ogren'
const secili = ref<VakaEtiket | null>(null)
const ekAcik = ref(false)
const suzgecler = VAKA_SUZGECLER.filter((s) => !s.ek)
const ekler = VAKA_SUZGECLER.filter((s) => s.ek) // "⋯" açılır menüsünde
const ekSecili = computed(() => ekler.some((s) => s.id === secili.value))
function sec(id: VakaEtiket | null) {
  secili.value = secili.value === id ? null : id
  ekAcik.value = false
}
const liste = computed(() => (secili.value ? VAKA_SAYFA.liste.filter((v) => v.etiketler.includes(secili.value!)) : VAKA_SAYFA.liste))
// Son satırda tek kalan kart tasarımdaki 10. kart gibi yatay ve tam genişlik
const genis = (i: number) => i === liste.value.length - 1 && liste.value.length % 3 === 1

function tumu() {
  secili.value = null
  document.getElementById('vaka-listesi')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

useSayfaSeo({
  baslik: VAKA_SAYFA.seoBaslik,
  aciklama: VAKA_SAYFA.seoAciklama,
  yol: YOL,
  gorsel: '/img/vakalar-hero.webp',
  jsonLd: [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Vakalarla Öğren',
      description: VAKA_SAYFA.seoAciklama,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: VAKA_SAYFA.liste.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.baslik, description: v.ozet }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Vakalarla Öğren', item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})
</script>

<template>
  <section class="vk-hero" aria-labelledby="sayfa-baslik">
    <img class="vk-hero-bg" src="/img/vakalar-hero.webp" alt="" width="494" height="281" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Vakalarla Öğren</span>
      </nav>
      <h1 id="sayfa-baslik">{{ VAKA_SAYFA.baslik }}<span class="vurgu">{{ VAKA_SAYFA.vurgu }}</span></h1>
      <p>{{ VAKA_SAYFA.metin }}</p>
    </div>
  </section>

  <div class="vk-govde">
    <div class="wrap">
      <div class="vk-suzgec" role="group" aria-label="Vakaları konuya göre süz">
        <button type="button" class="cip" :class="{ secili: !secili }" :aria-pressed="!secili" @click="sec(null)">
          <Ikon ad="izgara" /> Tümü
        </button>
        <button
          v-for="s in suzgecler" :key="s.id" type="button" class="cip" :class="{ secili: secili === s.id }"
          :aria-pressed="secili === s.id" @click="sec(s.id)"
        >
          <Ikon :ad="s.ikon" /> {{ s.ad }}
        </button>
        <div class="daha">
          <button
            type="button" class="cip cip-daha" :class="{ secili: ekSecili }" :aria-expanded="ekAcik" aria-controls="vaka-ek-suzgec"
            aria-label="Diğer konular" @click="ekAcik = !ekAcik"
          >
            <Ikon ad="noktalar" />
          </button>
          <div v-show="ekAcik" id="vaka-ek-suzgec" class="daha-menu">
            <button
              v-for="s in ekler" :key="s.id" type="button" class="cip" :class="{ secili: secili === s.id }"
              :aria-pressed="secili === s.id" @click="sec(s.id)"
            >
              <Ikon :ad="s.ikon" /> {{ s.ad }}
            </button>
          </div>
        </div>
      </div>

      <ul id="vaka-listesi" class="vk-liste" aria-live="polite">
        <li v-for="(v, i) in liste" :key="v.no" class="vk-kart" :class="{ genis: genis(i) }">
          <img :src="`/img/${v.gorsel}.webp`" :alt="v.alt" width="311" height="131" loading="lazy">
          <div class="vk-ic">
            <div class="vk-bas">
              <span class="vk-no">{{ v.no }}</span>
              <h2>{{ v.baslik }}</h2>
              <span class="vk-ok" aria-hidden="true"><Ikon ad="ok" /></span>
            </div>
            <p class="vk-yer"><Ikon ad="konum" /> {{ v.yer }}</p>
            <p class="vk-ozet">{{ v.ozet }}</p>
          </div>
        </li>
      </ul>

      <aside class="vk-cta">
        <span class="vk-cta-ikon"><Ikon ad="belge" /></span>
        <div>
          <h2>{{ VAKA_SAYFA.cta.baslik }}</h2>
          <p>{{ VAKA_SAYFA.cta.metin }}</p>
        </div>
        <button type="button" class="btn btn-amber" @click="tumu">{{ VAKA_SAYFA.cta.dugme }} <Ikon ad="ok" /></button>
      </aside>
    </div>
  </div>
</template>

<style scoped>
/* Hero: solda siyah zemin üzerinde metin, sağda görsel (sola doğru siyaha erir) */
.vk-hero{position:relative;overflow:hidden;background:#000;color:#fff;padding:26px 0 clamp(36px,4.5vw,56px)}
.vk-hero-bg{position:absolute;top:0;right:0;width:min(58%,860px);height:100%;object-fit:cover;object-position:60% 50%;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 30%);mask-image:linear-gradient(90deg,transparent 0%,#000 30%)}
.vk-hero .wrap{position:relative;z-index:1}
.kirinti{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px;margin-bottom:clamp(22px,3vw,34px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.vk-hero h1{font-size:clamp(44px,5.6vw,80px);font-weight:800;line-height:1}
.vk-hero h1 .vurgu{display:block}
.vk-hero p{max-width:560px;font-size:clamp(15px,1.25vw,17px);line-height:1.5;margin:18px 0 0;text-shadow:0 1px 8px rgba(0,0,0,.6)}

.vk-govde{background:#FAFAF9;padding:20px 0 clamp(40px,5vw,64px)}

/* Süzgeç çipleri */
.vk-suzgec{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}
.cip{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:44px;padding:0 10px;border:1px solid var(--line);border-radius:6px;background:#fff;
  box-shadow:0 2px 6px -3px rgba(0,0,0,.12);font:500 12.5px var(--body);color:#2A2825;white-space:nowrap;cursor:pointer;transition:border-color .15s ease, background .15s ease}
.cip .ikon{font-size:17px;color:#3A3733}
.cip:hover{border-color:#CFCBC4}
.cip.secili{background:var(--amber);border-color:var(--amber);font-weight:700;color:#111}
.cip.secili .ikon{color:#111}
.daha{position:relative;flex:none;display:flex}
.cip-daha{flex:none;padding:0 12px}
.daha-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:20;display:flex;flex-direction:column;gap:6px;min-width:200px;padding:8px;
  background:#fff;border:1px solid var(--line);border-radius:8px;box-shadow:0 14px 30px -14px rgba(0,0,0,.35)}
.daha-menu .cip{justify-content:flex-start}
.cip-daha .ikon{font-size:20px}

/* Kartlar */
.vk-liste{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.vk-kart{display:flex;flex-direction:column;background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.06),0 6px 18px -12px rgba(0,0,0,.22)}
.vk-kart img{width:100%;aspect-ratio:311/131;object-fit:cover}
.vk-ic{padding:12px 14px 16px}
.vk-bas{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:14px;align-items:start}
.vk-no{display:grid;place-items:center;width:38px;height:38px;border-radius:4px;background:var(--amber);font:800 21px var(--display);color:#111}
.vk-kart h2{font-size:clamp(17px,1.45vw,20px);font-weight:700;line-height:1.12;color:#111}
.vk-ok{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--amber);color:#111;margin-top:4px}
.vk-ok .ikon{font-size:16px}
.vk-yer{display:flex;align-items:center;gap:7px;margin:8px 0 0 52px;font-size:13px;color:#4A4741}
.vk-yer .ikon{font-size:15px;flex:none}
.vk-ozet{margin:8px 0 0;font-size:13.5px;line-height:1.5;color:#55524C}
/* Yatay kart (son satırda tek kalan) */
.vk-kart.genis{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,2fr);align-items:stretch}
.vk-kart.genis img{height:100%;aspect-ratio:auto;min-height:190px}
.vk-kart.genis .vk-ic{padding:18px 26px 18px 30px;align-self:center}
.vk-kart.genis .vk-ozet{max-width:620px;margin-left:52px}

/* Alt çağrı bandı */
.vk-cta{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:22px;margin-top:22px;padding:18px 32px;
  background:#FFF8E5;border-radius:6px}
.vk-cta-ikon .ikon{font-size:46px;color:var(--amber-2)}
.vk-cta h2{font-size:clamp(20px,1.8vw,24px);font-weight:700;color:#111}
.vk-cta p{margin:4px 0 0;font-size:13px;color:#4A4741}
.vk-cta .btn{min-width:210px}

@media (max-width:1000px){
  .vk-liste{grid-template-columns:repeat(2,minmax(0,1fr))}
  .vk-kart.genis{grid-column:auto;display:flex}
  .vk-kart.genis img{height:auto;aspect-ratio:311/131;min-height:0}
  .vk-kart.genis .vk-ic{padding:12px 14px 16px;align-self:auto}
  .vk-kart.genis .vk-ozet{margin-left:0}
  .vk-hero-bg{width:100%;opacity:.45;-webkit-mask-image:none;mask-image:none}
}
@media (max-width:760px){
  .vk-cta{grid-template-columns:auto minmax(0,1fr);padding:18px}
  .vk-cta .btn{grid-column:1/-1;min-width:0}
}
@media (max-width:640px){
  .vk-liste{grid-template-columns:minmax(0,1fr)}
  .cip{min-height:38px;padding:0 12px;font-size:12.5px;gap:7px}
  .vk-cta-ikon .ikon{font-size:36px}
}
</style>
