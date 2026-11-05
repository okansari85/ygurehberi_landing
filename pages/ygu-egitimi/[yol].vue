<script setup lang="ts">
// YGU eğitim makalesi: metin data/egitim-makaleler/NN.json (kullanıcının docx'inden birebir), kart bilgisi data/egitim.ts.
// Görünüm teknik makale sayfasıyla aynı dil: koyu hero + KonuBloklar + yan "Bu makalede". Bilinmeyen yol 404.
// Gövde yalnız prerender'da okunur; tarayıcıya yalnız bu sayfanın payload'ı gider.
import { SITE, ON_KAYIT } from '~/data/icerik'
import { EGITIM_MAKALELERI, EGITIM_REHBERI, EGITIM_YAYIN, egitimMakaleYolu } from '~/data/egitim'

const route = useRoute()
const yolAdi = String(route.params.yol)
const kart = EGITIM_MAKALELERI.find((m) => m.yol === yolAdi)
if (!kart) throw createError({ statusCode: 404, statusMessage: 'Makale bulunamadı', fatal: true })

const { data } = await useAsyncData(`egitim:${yolAdi}`, async () => {
  const { EGITIM_ICERIK } = await import('~/data/egitimMakaleIcerik')
  const icerik = EGITIM_ICERIK.find((m) => m.no === kart.no)
  return icerik ? { icerik, okuma: makaleOkumaSuresi(icerik) } : null
})
if (!data.value) throw createError({ statusCode: 404, statusMessage: 'Makale bulunamadı', fatal: true })
const { icerik: m, okuma } = data.value

// Sıradaki dört makale (dönerek): her makaleden diğerlerine iç bağlantı.
const sira = EGITIM_MAKALELERI.indexOf(kart)
const digerleri = [1, 2, 3, 4].map((i) => EGITIM_MAKALELERI[(sira + i) % EGITIM_MAKALELERI.length])

const YOL = egitimMakaleYolu(kart)
const basliklar = [
  ...(m.bloklar.filter((b) => b.tip === 'h2') as { id: string; metin: string }[]),
  ...(m.kaynaklar.length ? [{ id: 'kaynaklar', metin: m.kaynakBaslik }] : [])
]

useSayfaSeo({
  // Uzun soru başlığı arama sonucunda kesilir: sayfa başlığında kartın kısa başlığı, H1'de makalenin tam başlığı.
  baslik: `${kart.baslik} | YGU Rehberi`,
  aciklama: metaAciklama(`${kart.aciklama} ${m.ozet}`),
  yol: YOL,
  gorsel: '/img/egitim-rehberi-hero.webp',
  gorselBoyut: [814, 392],
  makaleTarihi: EGITIM_YAYIN,
  jsonLd: [
    {
      '@type': 'Article',
      '@id': `${SITE.url}${YOL}#makale`,
      headline: m.baslik,
      alternativeHeadline: kart.baslik,
      description: kart.aciklama,
      inLanguage: 'tr-TR',
      image: `${SITE.url}/img/egitim-rehberi-hero.webp`,
      articleSection: EGITIM_REHBERI.makaleler.baslik,
      about: { '@type': 'Thing', name: 'Yangın güvenlik uzmanlığı eğitimi' },
      datePublished: EGITIM_YAYIN,
      dateModified: EGITIM_YAYIN,
      author: { '@id': `${SITE.url}/#kurulus` },
      publisher: { '@id': `${SITE.url}/#kurulus` },
      mainEntityOfPage: `${SITE.url}${YOL}`,
      isPartOf: { '@id': `${SITE.url}/#site` },
      citation: m.kaynaklar.map((k) => ({ '@type': 'CreativeWork', name: k.metin }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Eğitimi', item: `${SITE.url}${EGITIM_REHBERI.yol}` },
        { '@type': 'ListItem', position: 3, name: kart.baslik, item: `${SITE.url}${YOL}` }
      ]
    },
    ...(m.sss.length ? [sssSema(m.sss, YOL)] : [])
  ]
})
</script>

<template>
  <section class="mk-hero" aria-labelledby="sayfa-baslik">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink :to="EGITIM_REHBERI.yol">YGU Eğitimi</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Makale {{ kart.no }}</span>
      </nav>
      <p class="mk-ust"><span class="mk-kod">{{ kart.no }}</span> {{ EGITIM_REHBERI.makaleler.baslik }}</p>
      <h1 id="sayfa-baslik">{{ m.baslik }}</h1>
      <p class="mk-ozet">{{ m.ozet }}</p>
      <ul class="kunye">
        <li><Ikon ad="takvim" /> <time :datetime="EGITIM_YAYIN">{{ tarihMetni(EGITIM_YAYIN) }}</time></li>
        <li><Ikon ad="saat" /> {{ okuma }} dk okuma</li>
      </ul>
    </div>
  </section>

  <div class="bolum">
    <div class="wrap mk-izgara">
      <article>
        <KonuBloklar :bloklar="m.bloklar" />
        <section v-if="m.kaynaklar.length" class="kaynaklar" aria-labelledby="kaynaklar">
          <h2 id="kaynaklar">{{ m.kaynakBaslik }}</h2>
          <ul>
            <li v-for="k in m.kaynaklar" :key="k.metin">{{ k.metin }}</li>
          </ul>
        </section>
      </article>

      <aside class="yan">
        <nav v-if="basliklar.length > 1" class="icindekiler" aria-label="Bu makalede">
          <span class="ust">Bu makalede</span>
          <a v-for="h in basliklar" :key="h.id" :href="`#${h.id}`">{{ h.metin }}</a>
        </nav>
        <NuxtLink :to="`${EGITIM_REHBERI.yol}#makaleler`" class="tum"><Ikon ad="kep" /> Tüm eğitim makaleleri</NuxtLink>
        <div class="yan-kayit">
          <strong>Yangın güvenlik uzmanı olmak mı istiyorsunuz?</strong>
          <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber">Ön Kayıt <Ikon ad="ok" /></NuxtLink>
        </div>
      </aside>
    </div>
  </div>

  <section class="bolum bolum-gri" aria-labelledby="diger-baslik">
    <div class="wrap">
      <div class="diger-ust">
        <h2 id="diger-baslik">Diğer Eğitim Makaleleri</h2>
        <NuxtLink :to="`${EGITIM_REHBERI.yol}#makaleler`" class="btn btn-amber">Tüm Makaleler <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="diger">
        <li v-for="d in digerleri" :key="d.no"><EgitimMakaleKart :makale="d" /></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Teknik makale sayfasıyla aynı görünüm (pages/teknik-makaleler/[yol].vue) */
.mk-hero{position:relative;overflow:hidden;background:#141C23;color:#fff;padding:26px 0 clamp(44px,5vw,64px);border-bottom:4px solid var(--amber);
  background-image:radial-gradient(circle at 85% 20%,rgba(255,193,7,.14),transparent 45%),repeating-linear-gradient(135deg,rgba(255,193,7,.05) 0 2px,transparent 2px 18px)}
.kirinti{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px;margin-bottom:clamp(28px,4vw,44px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.mk-ust{display:flex;align-items:baseline;gap:12px;margin:0 0 14px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-d)}
.mk-kod{font-size:24px;letter-spacing:0;color:var(--amber)}
.mk-hero h1{font-family:var(--body);font-size:clamp(28px,3.4vw,46px);font-weight:700;max-width:980px;line-height:1.15;letter-spacing:-.01em}
.mk-ozet{margin:18px 0 0;max-width:820px;font-size:clamp(16px,1.4vw,18px);line-height:1.65;color:#E4E7EA}
.kunye{list-style:none;margin:26px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;font-size:14px;color:var(--muted-d)}
.kunye li{display:inline-flex;align-items:center;gap:8px}
.kunye .ikon{font-size:18px;color:var(--amber)}

.mk-izgara{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:clamp(32px,5vw,72px);align-items:start}
@media (max-width:980px){.mk-izgara{grid-template-columns:minmax(0,1fr)}.yan{position:static}}
/* Makale başlıkları rehber sayfasındaki gibi Poppins */
article :deep(h2),article :deep(h3){font-family:var(--body);letter-spacing:-.01em;line-height:1.25}
article :deep(.makale h2){font-size:clamp(22px,2.1vw,28px)}
article :deep(.makale h3){font-size:18.5px}

.kaynaklar{margin-top:48px;padding-top:28px;border-top:1px solid var(--line)}
.kaynaklar h2{font-size:clamp(22px,2vw,26px);scroll-margin-top:100px}
.kaynaklar ul{margin:14px 0 0;padding-left:20px;display:grid;gap:8px;font-size:15.5px;line-height:1.55;color:#3A3835}

.yan{position:sticky;top:100px;display:grid;gap:16px}
.icindekiler{display:grid;gap:2px;border-left:3px solid var(--line);padding-left:16px;max-height:calc(100vh - 300px);overflow-y:auto}
.icindekiler a{text-decoration:none;color:var(--muted);font-size:14px;line-height:1.4;padding:6px 0}
.icindekiler a:hover{color:var(--text)}
.tum{display:flex;align-items:center;gap:10px;padding:14px 16px;border:1px solid var(--line);border-radius:var(--r);text-decoration:none;font-weight:600;font-size:15px}
.tum .ikon{font-size:20px;color:var(--amber-2)}
.tum:hover{border-color:var(--amber)}
.yan-kayit{background:#141C23;color:#fff;border-radius:var(--r);padding:20px;display:grid;gap:14px}
.yan-kayit strong{font-size:18px;line-height:1.3}

.diger-ust{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:22px}
.diger-ust h2{font-family:var(--body);font-size:clamp(24px,2.6vw,34px)}
.diger{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 22px}
@media (max-width:900px){.diger{grid-template-columns:1fr}}
</style>
