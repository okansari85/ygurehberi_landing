<script setup lang="ts">
// YGU Hakkında › kategori › makale sayfası (pages/ygu-hakkinda/[kategori]/[makale].vue çağırır): data/yguBilgi.ts. Teknik makale sayfası kalıbı:
// solda "Kısaca" kutusu + metin + dayanak maddeleri + yazarlar, sağda "Bu makalede"; hero altında bölüm şeridi (YguBolumSeridi). Yazarlar şemada Person.
import { SITE } from '~/data/icerik'
import { MEVZUAT_NOTU, YAZARLAR, YGU_MAKALELER, yguKategori, kategoriMakaleleri } from '~/data/yguBilgi'

const route = useRoute()
const kategori = yguKategori(String(route.params.kategori))
const makale = YGU_MAKALELER.find((m) => m.kategori === kategori?.yol && m.yol === String(route.params.makale))
if (!kategori || !makale) throw createError({ statusCode: 404, statusMessage: 'Makale bulunamadı', fatal: true })

const KAT = `/ygu-hakkinda/${kategori.yol}`
const YOL = `${KAT}/${makale.yol}`
const okuma = makaleOkumaSuresi(makale)
const guncel = makale.guncelleme ?? makale.yayin
const basliklar = [...(makale.bloklar.filter((b) => b.tip === 'h2') as { id: string; metin: string }[]), { id: 'dayanak', metin: 'Dayanak' }]
const digerleri = kategoriMakaleleri(kategori.yol).filter((m) => m.yol !== makale.yol).slice(0, 3)

useSayfaSeo({
  baslik: `${makale.baslik} | YGU Rehberi`,
  aciklama: makale.ozet,
  yol: YOL,
  makaleTarihi: makale.yayin,
  jsonLd: [
    {
      '@type': 'Article',
      '@id': `${SITE.url}${YOL}#makale`,
      headline: makale.baslik,
      description: makale.ozet,
      abstract: makale.ozetle,
      inLanguage: 'tr-TR',
      image: `${SITE.url}/img/hero-ygu.webp`,
      articleSection: kategori.ad,
      datePublished: makale.yayin,
      dateModified: guncel,
      author: YAZARLAR.map((y) => ({ '@type': 'Person', name: y.ad, jobTitle: y.unvan })),
      publisher: { '@id': `${SITE.url}/#kurulus` },
      mainEntityOfPage: `${SITE.url}${YOL}`,
      isPartOf: { '@id': `${SITE.url}/#site` },
      about: { '@type': 'Thing', name: 'Yangın güvenlik uzmanlığı ve periyodik yangın kontrolü' },
      citation: makale.dayanak.map((d) => ({ '@type': 'Legislation', name: d }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Hakkında', item: `${SITE.url}/ygu-hakkinda` },
        { '@type': 'ListItem', position: 3, name: kategori.ad, item: `${SITE.url}${KAT}` },
        { '@type': 'ListItem', position: 4, name: makale.baslik, item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})
</script>

<template>
  <section class="mk-hero" aria-labelledby="sayfa-baslik">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink to="/ygu-hakkinda">YGU Hakkında</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink :to="KAT">{{ kategori.ad }}</NuxtLink>
      </nav>
      <p class="mk-ust"><Ikon :ad="kategori.ikon" /> {{ kategori.ad }}</p>
      <h1 id="sayfa-baslik">{{ makale.baslik }}</h1>
      <p class="mk-ozet">{{ makale.ozet }}</p>
      <ul class="kunye">
        <li><Ikon ad="kullanici" /> {{ YAZARLAR.map((y) => y.ad).join(' · ') }}</li>
        <li><Ikon ad="takvim" /> <time :datetime="guncel">{{ makale.guncelleme ? 'Güncellendi: ' : '' }}{{ tarihMetni(guncel) }}</time></li>
        <li><Ikon ad="saat" /> {{ okuma }} dk okuma</li>
      </ul>
    </div>
  </section>

  <YguBolumSeridi :kategori="kategori.yol" />

  <div class="bolum">
    <div class="wrap ygu-izgara">
      <article>
        <aside class="kisaca" aria-label="Kısaca">
          <span class="kisaca-ust"><Ikon ad="bilgi" /> Kısaca</span>
          <p>{{ makale.ozetle }}</p>
        </aside>

        <KonuBloklar :bloklar="makale.bloklar" />

        <p v-if="makale.bakiniz" class="bakiniz"><strong>Bakınız:</strong> <NuxtLink :to="makale.bakiniz.to">{{ makale.bakiniz.metin }}</NuxtLink></p>

        <a v-if="makale.arac" :href="makale.arac.url" target="_blank" rel="noopener" class="arac">
          <span><strong>{{ makale.arac.baslik }}</strong>{{ makale.arac.metin }}</span>
          <span class="btn btn-amber">{{ makale.arac.dugme }} <Ikon ad="disLink" /></span>
        </a>

        <section class="dayanak" aria-labelledby="dayanak">
          <h2 id="dayanak">Dayanak</h2>
          <ul><li v-for="d in makale.dayanak" :key="d">{{ d }}</li></ul>
        </section>

        <section class="yazarlar" aria-label="Yazarlar">
          <span class="yazarlar-ust">Yazarlar</span>
          <ul>
            <li v-for="y in YAZARLAR" :key="y.ad"><span class="yazar-ikon"><Ikon ad="kask" /></span><span><strong>{{ y.ad }}</strong>{{ y.unvan }}</span></li>
          </ul>
        </section>

        <KonuBloklar :bloklar="[MEVZUAT_NOTU]" class="en-alt" />
      </article>

      <aside class="yan">
        <nav class="icindekiler" aria-label="Bu makalede">
          <span class="ust">Bu makalede</span>
          <a v-for="h in basliklar" :key="h.id" :href="`#${h.id}`">{{ h.metin }}</a>
        </nav>
      </aside>
    </div>
  </div>

  <section v-if="digerleri.length" class="bolum bolum-gri" aria-labelledby="diger-baslik">
    <div class="wrap">
      <div class="diger-ust">
        <h2 id="diger-baslik">{{ kategori.ad }}: diğer yazılar</h2>
        <NuxtLink :to="KAT" class="btn btn-amber">Tümü <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="diger">
        <li v-for="(m, i) in digerleri" :key="m.yol">
          <YguMakaleKart :to="`${KAT}/${m.yol}`" :baslik="m.baslik" :ozet="m.ozet" :ikon="kategori.ikon" :sira="i + 1" tur="Makale" :okuma="makaleOkumaSuresi(m)" baslik-duzeyi="h3" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.mk-hero{position:relative;overflow:hidden;background:var(--ink);color:#fff;padding:26px 0 clamp(44px,5vw,64px);
  background-image:radial-gradient(circle at 85% 20%,rgba(255,193,7,.14),transparent 45%),repeating-linear-gradient(135deg,rgba(255,193,7,.05) 0 2px,transparent 2px 18px)}
.kirinti{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px;margin-bottom:clamp(28px,4vw,44px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.mk-ust{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-family:var(--display);font-weight:700;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:var(--amber)}
.mk-ust .ikon{font-size:22px}
.mk-hero h1{font-size:clamp(36px,4.6vw,64px);font-weight:800;max-width:980px;line-height:1.02}
.mk-ozet{margin:18px 0 0;max-width:780px;font-size:clamp(17px,1.6vw,20px);line-height:1.55;color:#ECE8E1}
.kunye{list-style:none;margin:26px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;font-size:14px;color:var(--muted-d)}
.kunye li{display:inline-flex;align-items:center;gap:8px}
.kunye .ikon{font-size:18px;color:var(--amber)}

.ygu-izgara{display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:clamp(32px,5vw,72px);align-items:start}
/* Telefonda Bölümler kutusu metnin üstünde (kapalı başlar), "Bu makalede" gizlenir */

.kisaca{margin-bottom:28px;padding:20px 22px;background:#FFF8E1;border-left:4px solid var(--amber);border-radius:0 var(--r) var(--r) 0}
.kisaca-ust{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:var(--amber-ink)}
.kisaca-ust .ikon{font-size:18px}
.kisaca p{margin:8px 0 0;font-size:17px;line-height:1.65;color:#2A2825}

.bakiniz{margin:28px 0 0;padding:14px 18px;border-left:4px solid var(--amber);border-radius:0 var(--r) var(--r) 0;background:#FBF3E0;font-size:16px}
.bakiniz a{font-weight:600;color:var(--amber-ink);text-underline-offset:3px}
.arac{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;margin-top:36px;padding:22px 24px;border-radius:var(--r);background:var(--ink);color:#ECE8E1;text-decoration:none;font-size:15px;line-height:1.5}
.arac strong{display:block;font-family:var(--display);font-size:24px;line-height:1.1;color:#fff;margin-bottom:6px}
.arac > span:first-child{flex:1 1 320px}

.dayanak{margin-top:44px;padding-top:26px;border-top:1px solid var(--line)}
.dayanak h2{font-size:clamp(24px,2.2vw,30px);scroll-margin-top:100px}
.dayanak ul{margin:14px 0 0;padding-left:20px;display:grid;gap:8px;font-size:15px;line-height:1.55;color:#3A3835}

.yazarlar{margin-top:32px;padding:20px 22px;border:1px solid var(--line);border-radius:var(--r)}
.yazarlar-ust{font-family:var(--display);font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.yazarlar ul{list-style:none;margin:12px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:16px 36px}
.yazarlar li{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--muted)}
.yazarlar strong{display:block;font-family:var(--display);font-size:20px;color:var(--text)}
.yazar-ikon{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--paper-2);color:var(--amber-2);font-size:24px}

.en-alt{margin-top:28px}
/* Üst menü + bölüm şeridi altında kalmasın */
article :deep(h2),.dayanak h2{scroll-margin-top:150px}

.yan{position:sticky;top:150px;display:grid;gap:24px}
.icindekiler{display:grid;gap:2px;border-left:3px solid var(--line);padding-left:16px}
.icindekiler .ust{font-family:var(--display);font-weight:700;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.icindekiler a{text-decoration:none;color:var(--muted);font-size:14px;line-height:1.4;padding:5px 0}
.icindekiler a:hover{color:var(--text)}
@media (max-width:980px){.ygu-izgara{grid-template-columns:minmax(0,1fr)}.yan{display:none}}

.diger-ust{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:22px}
.diger-ust h2{font-size:clamp(26px,2.8vw,36px)}
.diger{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:18px}
</style>
