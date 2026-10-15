<script setup lang="ts">
// Teknik makale sayfası: data/makaleler.ts. Tasarım yok; koyu hero (kod, başlık, özet, künye) + konu sayfalarının
// makale sütunu (KonuBloklar) ve yan "Bu makalede" listesi. Bilinmeyen yol 404.
import { SITE, ON_KAYIT } from '~/data/icerik'
import { MAKALELER } from '~/data/makaleler'

const route = useRoute()
const makale = MAKALELER.find((m) => m.yol === String(route.params.yol))
if (!makale) throw createError({ statusCode: 404, statusMessage: 'Makale bulunamadı', fatal: true })

const YOL = `/teknik-makaleler/${makale.yol}`
const okuma = makaleOkumaSuresi(makale)
const basliklar = [
  ...(makale.bloklar.filter((b) => b.tip === 'h2') as { id: string; metin: string }[]),
  ...(makale.kaynaklar.length ? [{ id: 'kaynaklar', metin: makale.kaynakBaslik }] : [])
]
// Aynı etiketi taşıyanlar önce, sonra diğerleri; en fazla 3.
const digerleri = MAKALELER.filter((m) => m.kod !== makale.kod)
  .sort((a, b) => Number(b.etiketler.some((e) => makale.etiketler.includes(e))) - Number(a.etiketler.some((e) => makale.etiketler.includes(e))))
  .slice(0, 3)

useSayfaSeo({
  baslik: `${makale.baslik} | YGU Rehberi`,
  aciklama: makale.ozet,
  yol: YOL,
  jsonLd: [
    {
      '@type': 'TechArticle',
      '@id': `${SITE.url}${YOL}#makale`,
      headline: makale.baslik,
      description: makale.ozet,
      inLanguage: 'tr-TR',
      identifier: makale.kod,
      ...(makale.yayin ? { datePublished: makale.yayin, dateModified: makale.yayin } : {}),
      keywords: makale.etiketler.join(', '),
      author: { '@id': `${SITE.url}/#kurulus` },
      publisher: { '@id': `${SITE.url}/#kurulus` },
      mainEntityOfPage: `${SITE.url}${YOL}`,
      isPartOf: { '@id': `${SITE.url}/#site` },
      citation: makale.kaynaklar.filter((k) => k.url).map((k) => ({ '@type': 'CreativeWork', name: k.metin, url: k.url }))
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Teknik Makaleler', item: `${SITE.url}/teknik-makaleler` },
        { '@type': 'ListItem', position: 3, name: makale.baslik, item: `${SITE.url}${YOL}` }
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
        <NuxtLink to="/teknik-makaleler">Teknik Makaleler</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">{{ makale.kod }}</span>
      </nav>
      <p class="mk-ust"><span class="mk-kod">{{ makale.kod }}</span> Teknik Makale</p>
      <h1 id="sayfa-baslik">{{ makale.baslik }}</h1>
      <p class="mk-ozet">{{ makale.ozet }}</p>
      <ul class="kunye">
        <li v-if="makale.yayin"><Ikon ad="takvim" /> <time :datetime="makale.yayin">{{ tarihMetni(makale.yayin) }}</time></li>
        <li><Ikon ad="saat" /> {{ okuma }} dk okuma</li>
        <li v-for="e in makale.etiketler" :key="e" class="etiket">{{ e }}</li>
      </ul>
    </div>
  </section>

  <div class="bolum">
    <div class="wrap mk-izgara">
      <article>
        <KonuBloklar :bloklar="makale.bloklar" />
        <section v-if="makale.kaynaklar.length" class="kaynaklar" aria-labelledby="kaynaklar">
          <h2 id="kaynaklar">{{ makale.kaynakBaslik }}</h2>
          <ul>
            <li v-for="k in makale.kaynaklar" :key="k.metin">
              <a v-if="k.url" :href="k.url" target="_blank" rel="noopener">{{ k.metin }} <Ikon ad="disLink" /></a>
              <span v-else>{{ k.metin }}</span>
            </li>
          </ul>
        </section>
        <KonuBloklar v-if="makale.sonNotlar.length" :bloklar="makale.sonNotlar" />
      </article>

      <aside class="yan">
        <nav v-if="basliklar.length > 1" class="icindekiler" aria-label="Bu makalede">
          <span class="ust">Bu makalede</span>
          <a v-for="h in basliklar" :key="h.id" :href="`#${h.id}`">{{ h.metin }}</a>
        </nav>
        <NuxtLink to="/teknik-makaleler" class="tum"><Ikon ad="kitap" /> Tüm teknik makaleler</NuxtLink>
        <div class="yan-kayit">
          <strong>Yangın güvenlik uzmanı olmak mı istiyorsunuz?</strong>
          <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber">Ön Kayıt <Ikon ad="ok" /></NuxtLink>
        </div>
      </aside>
    </div>
  </div>

  <section v-if="digerleri.length" class="bolum bolum-gri" aria-labelledby="diger-baslik">
    <div class="wrap">
      <div class="diger-ust">
        <h2 id="diger-baslik">Diğer Makaleler</h2>
        <NuxtLink to="/teknik-makaleler" class="btn btn-amber">Tüm Makaleler <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="diger">
        <li v-for="m in digerleri" :key="m.kod"><MakaleKart :makale="m" baslik-duzeyi="h3" /></li>
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
.mk-ust{display:flex;align-items:baseline;gap:12px;margin:0 0 14px;font-family:var(--display);font-weight:700;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-d)}
.mk-kod{font-size:26px;letter-spacing:0;color:var(--amber)}
.mk-hero h1{font-size:clamp(36px,4.6vw,64px);font-weight:800;max-width:980px;line-height:1.02}
.mk-ozet{margin:18px 0 0;max-width:780px;font-size:clamp(17px,1.6vw,21px);line-height:1.55;color:#ECE8E1}
.kunye{list-style:none;margin:26px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:10px 22px;align-items:center;font-size:14px;color:var(--muted-d)}
.kunye li{display:inline-flex;align-items:center;gap:8px}
.kunye .ikon{font-size:18px;color:var(--amber)}
.kunye .etiket{font-size:12.5px;font-weight:600;color:#111;background:var(--amber);border-radius:99px;padding:3px 10px}

.mk-izgara{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:clamp(32px,5vw,72px);align-items:start}
@media (max-width:980px){.mk-izgara{grid-template-columns:1fr}.yan{position:static}}

.kaynaklar{margin-top:48px;padding-top:28px;border-top:1px solid var(--line)}
.kaynaklar h2{font-size:clamp(24px,2.2vw,30px);scroll-margin-top:100px}
.kaynaklar ul{margin:14px 0 0;padding-left:20px;display:grid;gap:8px;font-size:15.5px;line-height:1.55;color:#3A3835}
.kaynaklar a{color:var(--text);text-decoration-color:var(--amber);text-underline-offset:3px}
.kaynaklar a .ikon{font-size:14px;vertical-align:-2px;color:var(--amber-ink)}
article :deep(.makale + .makale){margin-top:24px}

.yan{position:sticky;top:100px;display:grid;gap:16px}
.icindekiler{display:grid;gap:2px;border-left:3px solid var(--line);padding-left:16px}
.icindekiler a{text-decoration:none;color:var(--muted);font-size:14.5px;line-height:1.4;padding:6px 0}
.icindekiler a:hover{color:var(--text)}
.tum{display:flex;align-items:center;gap:10px;padding:14px 16px;border:1px solid var(--line);border-radius:var(--r);text-decoration:none;font-weight:600;font-size:15px}
.tum .ikon{font-size:20px;color:var(--amber-2)}
.tum:hover{border-color:var(--amber)}
.yan-kayit{background:var(--ink);color:#fff;border-radius:var(--r);padding:20px;display:grid;gap:14px}
.yan-kayit strong{font-family:var(--display);font-size:22px;line-height:1.1}

.diger-ust{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:22px}
.diger-ust h2{font-size:clamp(28px,3vw,40px)}
.diger{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:20px}
</style>
