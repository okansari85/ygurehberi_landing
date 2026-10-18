<script setup lang="ts">
// YGU Hakkında › kategori: data/yguBilgi.ts. Tasarım yok: görselli hero + bölüm şeridi (YguBolumSeridi) + kartlar (önce makaleler,
// zaten olan sayfalar "Rehber" olarak sonda). İlk kart öne çıkan (iki sütun). Bilinmeyen kategori 404.
import { SITE } from '~/data/icerik'
import { yguKategori, kategoriMakaleleri } from '~/data/yguBilgi'

const route = useRoute()
const kategori = yguKategori(String(route.params.kategori))
if (!kategori) throw createError({ statusCode: 404, statusMessage: 'Sayfa bulunamadı', fatal: true })

const YOL = `/ygu-hakkinda/${kategori.yol}`
const makaleler = kategoriMakaleleri(kategori.yol)
const tumu = [
  ...makaleler.map((m) => ({ to: `${YOL}/${m.yol}`, baslik: m.baslik, ozet: m.ozet, tur: 'Makale', okuma: makaleOkumaSuresi(m) })),
  ...kategori.mevcut.map((m) => ({ to: m.to, baslik: m.baslik, ozet: m.ozet, tur: 'Rehber' }))
]

useSayfaSeo({
  baslik: kategori.seoBaslik,
  aciklama: kategori.aciklama,
  yol: YOL,
  gorsel: `/img/${kategori.gorsel}.webp`,
  jsonLd: [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: kategori.ad,
      description: kategori.aciklama,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: tumu.map((m, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}${m.to}`, name: m.baslik }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Hakkında', item: `${SITE.url}/ygu-hakkinda` },
        { '@type': 'ListItem', position: 3, name: kategori.ad, item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" :src="`/img/${kategori.gorsel}.webp`" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink to="/ygu-hakkinda">YGU Hakkında</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">{{ kategori.ad }}</span>
      </nav>
      <h1 id="sayfa-baslik"><span class="h1-ust">Yangın Güvenlik Uzmanı Hakkında</span> {{ kategori.ad }}</h1>
      <p>{{ kategori.kisa }}</p>
    </div>
  </section>

  <YguBolumSeridi :kategori="kategori.yol" />

  <div class="bolum icerik">
    <img class="icerik-bg" :src="`/img/${kategori.gorsel}.webp`" alt="" width="1536" height="1024" loading="lazy">
    <div class="wrap">
      <div>
        <ul v-if="tumu.length" class="kartlar">
          <li v-for="(m, i) in tumu" :key="m.to" :class="{ one: i === 0 && tumu.length > 2 }">
            <YguMakaleKart v-bind="m" :ikon="kategori.ikon" :sira="i + 1" :one="i === 0 && tumu.length > 2" />
          </li>
        </ul>
        <p v-else class="bos"><Ikon ad="saat" /> Bu bölümün yazıları hazırlanıyor.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero: YGU Hakkında sayfasıyla aynı ölçüler (kullanıcı 18 Ekim) */
.sayfa-hero{position:relative;overflow:hidden;background:var(--ink);color:#fff;padding:26px 0 clamp(48px,6vw,72px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 40%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.95) 0%,rgba(14,14,14,.8) 42%,rgba(14,14,14,.25) 85%)}
.sayfa-hero .wrap{position:relative;z-index:2}
/* İçerik alanı: kategori görseli sağda, soluk ve sola doğru eriyen arka plan (kullanıcı 18 Ekim: "boşluk kötü duruyor, arka plana resim") */
.icerik{position:relative;overflow:hidden;background:var(--paper-2)}
.icerik-bg{position:absolute;top:0;right:0;width:62%;height:100%;object-fit:cover;opacity:.16;filter:grayscale(1);pointer-events:none;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 55%);mask-image:linear-gradient(90deg,transparent 0%,#000 55%)}
.icerik .wrap{position:relative;z-index:1}
.kirinti{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(46px,6vw,84px);font-weight:800}
.sayfa-hero p{font-size:clamp(18px,1.7vw,23px);margin:12px 0 0}

@media (max-width:980px){.icerik-bg{width:100%}}
.kartlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.kartlar li.one{grid-column:span 2}
@media (max-width:1000px){.kartlar{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.kartlar{grid-template-columns:minmax(0,1fr)}.kartlar li.one{grid-column:auto}}
.bos{display:flex;align-items:center;gap:10px;padding:18px 20px;border:1px dashed var(--line);border-radius:var(--r);color:var(--muted)}
.bos .ikon{font-size:20px;color:var(--amber-2)}
</style>
