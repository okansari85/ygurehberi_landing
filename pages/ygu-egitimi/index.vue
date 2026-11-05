<script setup lang="ts">
// YGU Eğitim Rehberi (menü: Eğitim Süreci): design/egitim-sayfa.jpeg (Oğuz, 5 Kasım 2026). Üst menü ve alt bilgi sitenin kendisinden.
// Görseller tasarımdan kesildi (egitim-rehberi-hero, egitim-bilgi-1…9, egitim-kaydol; düşük çözünürlük). Metinler data/egitim.ts.
import { SITE, ON_KAYIT } from '~/data/icerik'
import { EGITIM_REHBERI as E, EGITIM_MAKALELERI, EGITIM_BILGILERI, egitimMakaleYolu } from '~/data/egitim'

const YOL = E.yol
const bilgiler = EGITIM_BILGILERI.map((k) => ({ ...k, to: egitimMakaleYolu(k) }))

useSayfaSeo({
  baslik: E.seo.baslik,
  aciklama: E.seo.aciklama,
  yol: YOL,
  gorsel: '/img/egitim-rehberi-hero.webp',
  gorselBoyut: [814, 392],
  jsonLd: [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: `${E.hero.baslik} ${E.hero.vurgu}`,
      description: E.hero.metin,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` },
      mainEntity: {
        '@type': 'ItemList',
        name: `${E.bilgiler.baslik} ve ${E.makaleler.baslik}`,
        itemListElement: [...EGITIM_BILGILERI, ...EGITIM_MAKALELERI].map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.baslik, url: `${SITE.url}${egitimMakaleYolu(m)}` }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Eğitimi', item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/egitim-rehberi-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="e-hero" aria-labelledby="sayfa-baslik">
    <img class="e-hero-foto" src="/img/egitim-rehberi-hero.webp" alt="Sarı cepheli eğitim binası önünde yangın tesisatı planları ve YGU logolu baret" width="814" height="392" fetchpriority="high">
    <div class="wrap e-hero-ic">
      <span class="e-ust">{{ E.hero.ust }}</span>
      <h1 id="sayfa-baslik">{{ E.hero.baslik }} <span class="vurgu">{{ E.hero.vurgu }}</span></h1>
      <p>{{ E.hero.metin }}</p>
      <div class="e-dugmeler">
        <a :href="E.hero.dugmeler[0].to" class="btn btn-amber e-btn">{{ E.hero.dugmeler[0].ad }} <Ikon ad="ok" /></a>
        <a :href="E.hero.dugmeler[1].to" class="btn e-btn e-btn-cizgi">{{ E.hero.dugmeler[1].ad }} <Ikon ad="ok" /></a>
      </div>
    </div>
  </section>

  <nav class="e-serit" aria-label="Sayfa içerikleri">
    <div class="wrap e-serit-ic">
      <ol>
        <li v-for="(o, i) in E.serit.ogeler" :key="o.to"><a :href="o.to"><span>{{ i + 1 }}</span> {{ o.ad }}</a></li>
      </ol>
      <p>{{ E.serit.not }}</p>
    </div>
  </nav>

  <section id="bilgiler" class="e-bolum" aria-labelledby="bilgi-baslik">
    <div class="wrap">
      <span class="e-bolum-ust koyu">{{ E.bilgiler.ust }}</span>
      <h2 id="bilgi-baslik" class="e-baslik">{{ E.bilgiler.baslik }}</h2>
      <p class="e-giris">{{ E.bilgiler.metin }}</p>
      <ul class="e-bilgiler">
        <li v-for="(k, i) in bilgiler" :key="k.no">
          <NuxtLink :to="k.to" class="e-bilgi">
            <img :src="`/img/egitim-bilgi-${i + 1}.webp`" alt="" width="250" height="245" loading="lazy">
            <span class="e-no">{{ k.no }}</span>
            <h3>{{ k.baslik }}</h3>
            <p>{{ k.aciklama }}</p>
            <span class="e-incele"><span class="e-ok"><Ikon ad="ok" /></span> İçeriği İncele</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>

  <section id="makaleler" class="e-bolum e-bolum-makale" aria-labelledby="makale-baslik">
    <div class="wrap">
      <span class="e-bolum-ust">{{ E.makaleler.ust }}</span>
      <h2 id="makale-baslik" class="e-baslik">{{ E.makaleler.baslik }}</h2>
      <p class="e-giris">{{ E.makaleler.metin }}</p>
      <ul class="e-makaleler">
        <li v-for="m in EGITIM_MAKALELERI" :key="m.no"><EgitimMakaleKart :makale="m" /></li>
      </ul>
    </div>
  </section>

  <section class="e-kayit-bolum" aria-labelledby="kayit-baslik">
    <div class="wrap">
      <div class="e-kayit">
        <img src="/img/egitim-kaydol.webp" alt="" width="975" height="351" loading="lazy">
        <div class="e-kayit-metin">
          <h2 id="kayit-baslik">{{ E.kayit.baslik }} <span class="vurgu">{{ E.kayit.vurgu }}</span></h2>
          <p>{{ E.kayit.metin }}</p>
          <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber e-btn">{{ E.kayit.dugme }} <Ikon ad="ok" /></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tasarımın lacivertimsi koyu zemini */
.e-hero,.e-bilgi,.e-kayit{--lacivert:#141C23}

.e-hero{position:relative;overflow:hidden;background:var(--lacivert);color:#fff;border-bottom:4px solid var(--amber)}
.e-hero-foto{position:absolute;right:0;top:0;height:100%;width:62%;object-fit:cover;object-position:left center;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 22%);mask-image:linear-gradient(90deg,transparent 0,#000 22%)}
.e-hero-ic{position:relative;padding-top:clamp(40px,5vw,64px);padding-bottom:clamp(44px,5.4vw,72px)}
.e-ust{display:block;font-size:13px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--amber)}
.e-hero h1{max-width:560px;margin-top:14px;font-family:var(--body);font-size:clamp(34px,3.9vw,56px);font-weight:700;line-height:1.08;letter-spacing:-.015em}
.e-hero p{max-width:560px;margin:22px 0 0;font-size:15.5px;line-height:1.7;color:#E4E7EA}
.e-dugmeler{display:flex;flex-wrap:wrap;gap:14px;margin-top:30px}
.e-btn{font-family:var(--body);font-size:15.5px;min-height:52px;padding:0 26px}
.e-btn-cizgi{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.7)}
.e-btn-cizgi:hover{border-color:var(--amber);color:var(--amber)}

.e-serit{background:#F0F1F3;border-bottom:1px solid var(--line)}
.e-serit-ic{display:flex;align-items:center;justify-content:space-between;gap:12px 32px;flex-wrap:wrap;padding-top:14px;padding-bottom:14px}
.e-serit ol{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:10px 34px}
.e-serit a{display:inline-flex;align-items:center;gap:10px;font-size:14px;font-weight:600;color:#111;text-decoration:none}
.e-serit a:hover{color:var(--amber-ink)}
.e-serit a span{display:grid;place-items:center;width:28px;height:28px;border:2px solid var(--amber);border-radius:50%;font-size:13px;font-weight:700}
.e-serit p{margin:0;max-width:400px;font-size:12.5px;line-height:1.5;color:var(--muted);text-align:right}

.e-bolum{padding:clamp(40px,5vw,64px) 0 clamp(20px,3vw,32px)}
.e-bolum-makale{padding-bottom:clamp(44px,5vw,72px)}
.e-bolum-ust{display:block;font-size:12.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:var(--amber-2)}
.e-bolum-ust.koyu{color:#111}
.e-baslik{margin-top:10px;padding-left:20px;border-left:5px solid var(--amber);font-family:var(--body);font-size:clamp(28px,2.8vw,38px);font-weight:700;line-height:1.15;letter-spacing:-.01em;color:#111}
.e-giris{max-width:780px;margin:14px 0 0;font-size:15.5px;line-height:1.65;color:var(--muted)}

.e-bilgiler{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.e-bilgi{position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:flex-start;height:100%;min-height:210px;padding:22px 24px;border:2px solid var(--amber);border-radius:14px;
  background:radial-gradient(circle at 80% 40%,#2A3138,var(--lacivert) 70%);color:#fff;text-decoration:none;box-shadow:0 14px 26px -18px rgba(0,0,0,.5);transition:transform .2s ease,box-shadow .2s ease}
.e-bilgi:hover{transform:translateY(-3px);box-shadow:0 20px 34px -18px rgba(0,0,0,.55)}
.e-bilgi img{position:absolute;right:0;bottom:0;height:100%;width:auto;max-width:48%;object-fit:contain;object-position:right bottom;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 18%);mask-image:linear-gradient(90deg,transparent 0,#000 18%)}
.e-bilgi > :not(img){position:relative;max-width:58%}
.e-no{font-size:24px;font-weight:700;line-height:1;color:var(--amber)}
.e-bilgi h3{margin-top:6px;font-family:var(--body);font-size:19px;font-weight:700;line-height:1.2}
.e-bilgi p{margin:10px 0 18px;font-size:13px;line-height:1.5;color:#D3D7DB}
.e-incele{display:inline-flex;align-items:center;gap:10px;margin-top:auto;font-size:14px;font-weight:600;white-space:nowrap}
.e-ok{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--amber);color:#111;font-size:16px}

.e-makaleler{list-style:none;margin:28px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 22px}

.e-kayit-bolum{padding:0 0 clamp(48px,6vw,80px)}
.e-kayit{position:relative;overflow:hidden;min-height:250px;display:flex;align-items:center;border:2px solid var(--amber);border-radius:18px;background:var(--lacivert);color:#fff}
.e-kayit img{position:absolute;right:0;bottom:0;height:100%;width:auto;max-width:54%;object-fit:cover;object-position:right center;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 20%);mask-image:linear-gradient(90deg,transparent 0,#000 20%)}
.e-kayit-metin{position:relative;padding:clamp(28px,4vw,48px) clamp(24px,4vw,56px)}
.e-kayit h2{font-family:var(--body);font-size:clamp(28px,3.2vw,44px);font-weight:700;line-height:1.1}
.e-kayit p{margin:14px 0 26px;font-size:16px;line-height:1.6;color:#E4E7EA}

@media (max-width:1100px){
  .e-bilgiler{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:900px){
  .e-hero-foto{position:static;width:100%;height:auto;-webkit-mask-image:none;mask-image:none}
  .e-hero{display:flex;flex-direction:column-reverse}
  .e-serit p{text-align:left}
  .e-makaleler{grid-template-columns:1fr}
  .e-kayit{flex-direction:column;align-items:stretch}
  .e-kayit img{position:static;max-width:100%;width:100%;height:auto;-webkit-mask-image:none;mask-image:none}
}
@media (max-width:600px){
  .e-bilgiler{grid-template-columns:1fr}
  .e-bilgi{min-height:190px}
}
</style>
