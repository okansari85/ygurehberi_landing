<script setup lang="ts">
// Konu sayfaları (YGU Nedir?, Nasıl Olunur?, Seviyeler, Görevler, Çalışma Alanları): data/konular.ts.
// Tasarım yok; YGU Hakkında hero kalıbı + makale sütunu ve yan "Bu sayfada" listesi. Bilinmeyen yol 404.
import { SITE, ON_KAYIT } from '~/data/icerik'
import { KONULAR } from '~/data/konular'

const route = useRoute()
const yolAdi = String(route.params.konu)
const konu = KONULAR[yolAdi]
if (!konu) throw createError({ statusCode: 404, statusMessage: 'Sayfa bulunamadı', fatal: true })

const YOL = `/${yolAdi}`
const basliklar = konu.bloklar.filter((b) => b.tip === 'h2') as { id: string; metin: string }[]
const digerleri = Object.entries(KONULAR).filter(([y]) => y !== yolAdi)

useSayfaSeo({
  baslik: konu.seoBaslik,
  aciklama: konu.aciklama,
  yol: YOL,
  gorsel: `/img/${konu.gorsel}.webp`,
  jsonLd: [
    {
      '@type': 'Article',
      '@id': `${SITE.url}${YOL}#makale`,
      headline: konu.baslik,
      description: konu.aciklama,
      image: `${SITE.url}/img/${konu.gorsel}.webp`,
      inLanguage: 'tr-TR',
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      author: { '@id': `${SITE.url}/#kurulus` },
      publisher: { '@id': `${SITE.url}/#kurulus` },
      mainEntityOfPage: `${SITE.url}${YOL}`,
      isPartOf: { '@id': `${SITE.url}/#site` },
      about: { '@type': 'Thing', name: 'Yangın güvenlik uzmanı (YGU)' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: konu.kart, item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: `/img/${konu.gorsel}.webp`, fetchpriority: 'high' }] })
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" :src="`/img/${konu.gorsel}.webp`" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">{{ konu.kart }}</span>
      </nav>
      <h1 id="sayfa-baslik"><span class="h1-ust">{{ konu.ust }}</span> {{ konu.baslik }}</h1>
    </div>
  </section>

  <div class="bolum">
    <div class="wrap konu-izgara">
      <article><KonuBloklar :bloklar="konu.bloklar" /></article>

      <aside class="yan">
        <nav v-if="basliklar.length > 1" class="icindekiler" aria-label="Bu sayfada">
          <span class="ust">Bu sayfada</span>
          <a v-for="h in basliklar" :key="h.id" :href="`#${h.id}`">{{ h.metin }}</a>
        </nav>
        <div class="yan-kayit">
          <strong>Yangın güvenlik uzmanı olmak mı istiyorsunuz?</strong>
          <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber">Ön Kayıt <Ikon ad="ok" /></NuxtLink>
        </div>
      </aside>
    </div>
  </div>

  <section class="bolum bolum-gri" aria-labelledby="diger-baslik">
    <div class="wrap">
      <h2 id="diger-baslik" class="diger-baslik">Diğer Konular</h2>
      <ul class="diger">
        <li v-for="[y, k] in digerleri" :key="y">
          <NuxtLink :to="`/${y}`" class="kart"><strong>{{ k.kart }}</strong><Ikon ad="ok" /></NuxtLink>
        </li>
        <li><NuxtLink to="/ygu-egitim-sinav-belgelendirme" class="kart"><strong>Eğitim, Sınav ve Belgelendirme</strong><Ikon ad="ok" /></NuxtLink></li>
        <li><NuxtLink to="/sss" class="kart"><strong>Sık Sorulan Sorular</strong><Ikon ad="ok" /></NuxtLink></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(48px,6vw,72px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.95) 0%,rgba(14,14,14,.78) 45%,rgba(14,14,14,.2) 85%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(40px,5vw,72px);font-weight:800;max-width:820px}

.konu-izgara{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:clamp(32px,5vw,72px);align-items:start}
@media (max-width:980px){.konu-izgara{grid-template-columns:1fr}.yan{position:static}}


.yan{position:sticky;top:100px;display:grid;gap:16px}
.icindekiler{display:grid;gap:2px;border-left:3px solid var(--line);padding-left:16px}
.icindekiler a{text-decoration:none;color:var(--muted);font-size:14.5px;line-height:1.4;padding:6px 0}
.icindekiler a:hover{color:var(--text)}
.yan-kayit{background:var(--ink);color:#fff;border-radius:var(--r);padding:20px;display:grid;gap:14px}
.yan-kayit strong{font-family:var(--display);font-size:22px;line-height:1.1}

.diger-baslik{font-size:clamp(28px,3vw,38px);margin-bottom:20px}
.diger{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
.diger .kart{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:18px 20px;height:100%}
.diger strong{font-family:var(--display);font-size:20px}
.diger .ikon{color:var(--amber-2);font-size:20px;flex:none}
.diger .kart:hover{border-color:var(--amber)}
</style>
