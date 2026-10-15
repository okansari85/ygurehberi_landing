<script setup lang="ts">
// Ana sayfa: design/ana-sayfa.jpeg (bölüm sırası ve metinler birebir).
import {
  SITE, ON_KAYIT, HERO_ETIKETLER, HERO_KART_MADDELER, HIZLI_KARTLAR, SUREC, CALISMA_ALANLARI,
  YGU_YOLU, KONTROL_SURELERI, KONTROL_ARACI, VAKALAR, REHBERLER, YGU_NEDIR, NASIL_OLUNUR
} from '~/data/icerik'

const sure = (s: string) => s.replace(' Yıl', ' yılda bir')

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı (YGU) Nedir, Nasıl Olunur? | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) nedir, nasıl olunur? YGU seviyeleri, görevleri, çalışma alanları, periyodik yangın güvenliği kontrol süreleri, vaka analizleri ve teknik rehberler.',
  yol: '/',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}/#sayfa`,
      url: `${SITE.url}/`,
      name: 'YGU Rehberi — Yangın Güvenliğinde Tek Rehber',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      about: { '@type': 'Thing', name: 'Yangın güvenlik uzmanlığı (YGU)' },
      primaryImageOfPage: `${SITE.url}/img/hero-ana.webp`
    },
    sssSema([
      { soru: 'Yangın güvenlik uzmanı (YGU) nedir?', yanit: YGU_NEDIR },
      { soru: 'Nasıl YGU olunur?', yanit: `${NASIL_OLUNUR} ${YGU_YOLU.metin}` },
      {
        soru: 'Yangın güvenliği kontrolleri kaç yılda bir yapılır?',
        yanit: `${KONTROL_SURELERI.metin} ${KONTROL_SURELERI.sureler.map((s) => `${s.metin}: ${sure(s.sure)}`).join('; ')}. ${KONTROL_SURELERI.not}`
      },
      { soru: 'YGU hangi yapılarda görev alır?', yanit: `${CALISMA_ALANLARI.metin} ${CALISMA_ALANLARI.yapilar.map((y) => `${y.ad} ${y.alt}`).join(', ')}.` }
    ], '/')
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/hero-ana.webp', fetchpriority: 'high' }] })

// Konu kutuları slider'ı: tarayıcının yatay kaydırması (scroll-snap); oklar birer kutu kaydırır.
const serit = ref<HTMLElement>()
const basta = ref(true)
const sonda = ref(false)
function uclariGuncelle() {
  const el = serit.value
  if (!el) return
  basta.value = el.scrollLeft <= 2
  sonda.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
}
function kaydir(yon: number) {
  const el = serit.value
  const kart = el?.firstElementChild as HTMLElement | null
  if (!el || !kart) return
  el.scrollBy({ left: yon * (kart.offsetWidth + 14), behavior: 'smooth' })
}
onMounted(() => {
  uclariGuncelle()
  window.addEventListener('resize', uclariGuncelle)
})
onBeforeUnmount(() => window.removeEventListener('resize', uclariGuncelle))
</script>

<template>
  <!-- HERO -->
  <section class="hero" aria-labelledby="hero-baslik">
    <img class="hero-bg" src="/img/hero-ana.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap hero-ic">
      <div class="hero-sol">
        <h1 id="hero-baslik"><span class="h1-ust">Yangın Güvenlik Uzmanı (YGU) Rehberi</span> Yangın Güvenliğinde <span class="vurgu">Tek Rehber</span></h1>
        <p>YGU hakkında güvenilir bilgiler, gerçek yangın vakaları ve uygulamaya yönelik teknik rehberler.</p>
        <SiteArama buyuk />
        <ul class="hero-etiket">
          <li v-for="e in HERO_ETIKETLER" :key="e.ad"><NuxtLink :to="e.to">{{ e.ad }}</NuxtLink></li>
        </ul>
      </div>
      <aside class="hero-kart" aria-labelledby="hero-kart-baslik">
        <div class="hero-kart-ust">
          <span class="hero-kart-alev"><Ikon ad="alev" /></span>
          <div>
            <h2 id="hero-kart-baslik">Yangın Güvenlik Uzmanlığı</h2>
            <p>Yeni bir uzmanlık dönemi başlıyor. İlk sen haberdar ol.</p>
          </div>
        </div>
        <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber hero-kart-btn">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
        <ul>
          <li v-for="m in HERO_KART_MADDELER" :key="m.metin"><Ikon :ad="m.ikon" />{{ m.metin }}</li>
        </ul>
      </aside>
    </div>
  </section>

  <!-- HIZLI KARTLAR -->
  <section class="hizli" aria-label="Öne çıkan konular">
    <div class="wrap hizli-slider">
      <button type="button" class="hizli-ok onceki" aria-label="Önceki konular" :disabled="basta" @click="kaydir(-1)"><Ikon ad="ok" /></button>
      <div ref="serit" class="hizli-izgara" @scroll.passive="uclariGuncelle">
      <NuxtLink v-for="k in HIZLI_KARTLAR" :key="k.baslik" :to="k.to" class="kart hizli-kart">
        <span class="hizli-ikon"><Ikon :ad="k.ikon" /></span>
        <h2>{{ k.baslik }}</h2>
        <p>{{ k.metin }}</p>
        <span class="ok-sag"><Ikon ad="ok" /></span>
      </NuxtLink>
      </div>
      <button type="button" class="hizli-ok sonraki" aria-label="Sonraki konular" :disabled="sonda" @click="kaydir(1)"><Ikon ad="ok" /></button>
    </div>
  </section>

  <!-- ÇALIŞMA YAKLAŞIMI -->
  <section id="surec" class="bolum bolum-koyu" aria-labelledby="surec-baslik">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ SUREC.ust }}</span>
        <h2 id="surec-baslik" class="buyuk">{{ SUREC.baslik }} <span class="vurgu">{{ SUREC.vurgu }}</span></h2>
        <p>{{ SUREC.metin }}</p>
        <NuxtLink to="/ygu-hakkinda#gorevler" class="btn btn-amber">Süreci Detaylı İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <ol class="surec">
        <li v-for="(a, i) in SUREC.adimlar" :key="a.baslik" class="surec-kart">
          <img :src="`/img/${a.gorsel}.webp`" :alt="`${a.baslik}: ${a.metin}`" width="1024" height="1536" loading="lazy">
          <div class="surec-alt">
            <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ a.baslik }}</h3>
            <p>{{ a.metin }}</p>
          </div>
          <span v-if="i < SUREC.adimlar.length - 1" class="surec-ok" aria-hidden="true"><Ikon ad="ok" /></span>
        </li>
      </ol>
    </div>
  </section>

  <!-- ÇALIŞMA ALANLARI -->
  <section id="calisma-alanlari" class="bolum" aria-labelledby="alan-baslik">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ CALISMA_ALANLARI.ust }}</span>
        <h2 id="alan-baslik">{{ CALISMA_ALANLARI.baslik }}</h2>
        <p>{{ CALISMA_ALANLARI.metin }}</p>
        <NuxtLink to="/ygu-hakkinda#seviyeler" class="btn btn-amber">Tüm Çalışma Alanlarını Gör <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="yapilar">
        <li v-for="y in CALISMA_ALANLARI.yapilar" :key="y.ad" class="kart yapi-kart">
          <img :src="`/img/${y.gorsel}.webp`" :alt="`${y.ad} ${y.alt}`" width="1536" height="1024" loading="lazy">
          <div class="yapi-alt">
            <span class="yapi-ikon"><Ikon :ad="y.ikon" /></span>
            <span class="yapi-ad"><strong>{{ y.ad }}</strong> {{ y.alt }}</span>
            <Ikon ad="ok" />
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- YGU OLMA YOLU -->
  <section id="ygu-olma-yolu" class="bolum bolum-koyu" aria-labelledby="yol-baslik">
    <div class="bolum-arka"><img src="/img/bg-ygu-yolu.webp" alt="" width="1536" height="1024" loading="lazy"></div>
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ YGU_YOLU.ust }}</span>
        <h2 id="yol-baslik" class="buyuk">{{ YGU_YOLU.baslik }} <span class="vurgu">{{ YGU_YOLU.vurgu }}</span></h2>
        <p>{{ YGU_YOLU.metin }}</p>
        <NuxtLink to="/ygu-hakkinda#nasil-olunur" class="btn btn-amber">Tüm Süreci İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <ol class="yol">
        <li v-for="(a, i) in YGU_YOLU.adimlar" :key="a.baslik">
          <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="yol-kart">
            <Ikon :ad="a.ikon" />
            <h3>{{ a.baslik }}</h3>
            <p>{{ a.metin }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- KONTROL SÜRELERİ -->
  <section id="kontrol-sureleri" class="bolum" aria-labelledby="kontrol-baslik">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ KONTROL_SURELERI.ust }}</span>
        <h2 id="kontrol-baslik">{{ KONTROL_SURELERI.baslik }} <span class="vurgu">{{ KONTROL_SURELERI.vurgu }}</span></h2>
        <p>{{ KONTROL_SURELERI.metin }}</p>
        <NuxtLink to="/#calisma-alanlari" class="btn btn-amber">Tüm Yapı Türleri ve Süreleri Gör <Ikon ad="ok" /></NuxtLink>
      </div>
      <div>
        <ul class="sureler">
          <li v-for="s in KONTROL_SURELERI.sureler" :key="s.sure" class="kart sure-kart">
            <Ikon ad="takvim" />
            <strong>{{ s.sure }}</strong>
            <span>{{ s.metin }}</span>
          </li>
          <li class="kart sure-kart diger">
            <Ikon ad="belge" />
            <strong>{{ KONTROL_SURELERI.diger.baslik }}</strong>
            <span>{{ KONTROL_SURELERI.diger.metin }}</span>
          </li>
        </ul>
        <p class="sure-not"><Ikon ad="bilgi" /><span>{{ KONTROL_SURELERI.not }}<br>{{ KONTROL_SURELERI.not2 }}</span></p>
      </div>
    </div>
    <div class="wrap">
      <aside class="arac-bant" aria-labelledby="arac-baslik">
        <span class="arac-ikon"><Ikon ad="takvimOnay" /></span>
        <div class="arac-metin">
          <h2 id="arac-baslik">{{ KONTROL_ARACI.ust }}<br>{{ KONTROL_ARACI.baslik }}</h2>
          <p>{{ KONTROL_ARACI.metin }}</p>
        </div>
        <img :src="`/img/${KONTROL_ARACI.gorsel}.webp`" alt="" width="1536" height="1024" loading="lazy" class="arac-gorsel">
        <div class="arac-eylem">
          <span class="arac-yakinda">Yakında</span>
          <button type="button" class="btn arac-dugme" disabled>{{ KONTROL_ARACI.dugme }} <Ikon ad="ok" /></button>
          <small>{{ KONTROL_ARACI.not }}</small>
        </div>
      </aside>
    </div>
  </section>

  <!-- VAKALAR -->
  <section id="vakalar" class="bolum bolum-koyu" aria-labelledby="vaka-baslik">
    <div class="bolum-arka"><img src="/img/bg-vakalar.webp" alt="" width="1536" height="1024" loading="lazy"></div>
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ VAKALAR.ust }}</span>
        <h2 id="vaka-baslik">{{ VAKALAR.baslik }}</h2>
        <p>{{ VAKALAR.metin }}</p>
        <NuxtLink to="/on-kayit" class="btn btn-amber">Tüm Vaka Analizlerini Gör <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="vakalar">
        <li v-for="v in VAKALAR.liste" :key="v.baslik" class="kart vaka-kart">
          <div class="vaka-gorsel">
            <img :src="`/img/${v.gorsel}.webp`" :alt="v.alt" width="1536" height="1024" loading="lazy">
            <a v-if="v.kaynakUrl" :href="v.kaynakUrl" class="vaka-kaynak" target="_blank" rel="noopener license">{{ v.kaynak }}</a>
            <span v-else class="vaka-kaynak">{{ v.kaynak }}</span>
          </div>
          <div class="vaka-alt">
            <span class="etiket">{{ v.etiket }}</span>
            <h3>{{ v.baslik }}</h3>
            <p>{{ v.altBaslik }}</p>
            <span class="yakinda"><span class="vaka-yer"><Ikon ad="konum" />{{ v.yer }} | <time :datetime="v.tarih">{{ v.tarihMetin }}</time></span><Ikon ad="ok" /></span>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- KISA REHBERLER -->
  <section id="rehberler" class="bolum" aria-labelledby="rehber-baslik">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ REHBERLER.ust }}</span>
        <h2 id="rehber-baslik">{{ REHBERLER.baslik }}</h2>
        <NuxtLink to="/on-kayit" class="btn btn-amber rehber-btn">Tüm Rehberleri Gör <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="rehberler">
        <li v-for="r in REHBERLER.liste" :key="r.baslik" class="kart rehber-kart">
          <img :src="`/img/${r.gorsel}.webp`" :alt="r.baslik" width="1536" height="1024" loading="lazy">
          <div class="rehber-alt">
            <h3>{{ r.baslik }}</h3>
            <span class="pdf">PDF · Yakında</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.hero{position:relative;background:var(--ink);color:#fff;overflow:hidden}
.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:64% 12%}
.hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.94) 0%,rgba(14,14,14,.78) 34%,rgba(14,14,14,.15) 62%,rgba(14,14,14,.55) 100%)}
.hero-ic{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:32px;align-items:center;padding-top:clamp(40px,5vw,64px);padding-bottom:clamp(36px,4.5vw,56px);min-height:480px}
.hero-sol{max-width:600px}
.hero h1{font-size:clamp(40px,4.6vw,64px);font-weight:800;text-transform:uppercase;line-height:.98}
.hero h1 .vurgu{display:block;font-size:1.32em}
.hero-sol > p{font-size:clamp(16px,1.35vw,19px);font-weight:500;margin:16px 0 22px;max-width:520px}
.hero-etiket{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 0;padding:0}
.hero-etiket a{display:inline-flex;align-items:center;min-height:34px;padding:0 14px;border-radius:999px;background:#fff;color:#111;font-size:13px;font-weight:600;text-decoration:none;transition:background .2s}
.hero-etiket a:hover{background:var(--amber)}
.hero-kart{background:rgba(14,14,14,.88);border:1px solid var(--line-d);border-radius:14px;padding:22px 20px;backdrop-filter:blur(6px)}
.hero-kart-ust{display:flex;gap:14px;align-items:flex-start}
.hero-kart-alev{font-size:46px;color:var(--amber);display:flex}
.hero-kart h2{font-size:20px;text-transform:uppercase}
.hero-kart-ust p{margin:6px 0 0;font-size:13.5px;color:var(--muted-d)}
.hero-kart-btn{width:100%;margin:18px 0 16px}
.hero-kart ul{list-style:none;margin:0;padding:0;display:grid;gap:12px;font-size:13px;color:#E4E0D9}
.hero-kart li{display:flex;gap:12px;align-items:center}
.hero-kart li .ikon{font-size:22px;color:var(--amber)}
@media (max-width:960px){.hero-ic{grid-template-columns:1fr}.hero::before{background:linear-gradient(180deg,rgba(14,14,14,.86),rgba(14,14,14,.92))}}

/* HIZLI KARTLAR */
.hizli{padding:22px 0 44px}
.hizli-slider{position:relative}
.hizli-izgara{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 5 * 14px) / 6);gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:6px 0 10px;margin:-6px 0 -10px}
.hizli-izgara::-webkit-scrollbar{display:none}
.hizli-izgara .hizli-kart{scroll-snap-align:start}
.hizli-ok{position:absolute;top:50%;z-index:2;display:grid;place-items:center;width:40px;height:40px;margin-top:-20px;border-radius:50%;border:1px solid var(--line);background:#fff;color:#111;font-size:18px;cursor:pointer;box-shadow:0 8px 20px -10px rgba(0,0,0,.45);transition:opacity .2s, background .2s}
.hizli-ok:hover{background:var(--amber)}
.hizli-ok:disabled{opacity:0;pointer-events:none}
.hizli-ok.onceki{left:calc(var(--gutter) - 20px)}
.hizli-ok.onceki .ikon{transform:rotate(180deg)}
.hizli-ok.sonraki{right:calc(var(--gutter) - 20px)}
.hizli-kart{position:relative;padding:20px 18px 44px;display:flex;flex-direction:column}
.hizli-ikon{font-size:46px;color:var(--amber-2);display:flex;margin-bottom:14px}
.hizli-kart h2{font-size:22px}
.hizli-kart p{margin:8px 0 0;font-size:14px;color:var(--muted);line-height:1.45}
.hizli-kart .ok-sag{position:absolute;right:16px;bottom:14px;font-size:18px}
@media (max-width:1100px){.hizli-izgara{grid-auto-columns:calc((100% - 2 * 14px) / 3)}}
@media (max-width:560px){.hizli-izgara{grid-auto-columns:calc((100% - 14px) / 2)}.hizli-kart h2{font-size:19px}}

/* SÜREÇ */
.surec{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.surec-kart{position:relative;background:var(--ink-2);border:1px solid var(--line-d);border-radius:var(--r);overflow:visible;display:flex;flex-direction:column}
.surec-kart img{width:100%;aspect-ratio:4/3.3;object-fit:cover;border-radius:var(--r) var(--r) 0 0}
.surec-alt{position:relative;padding:30px 16px 18px}
.surec-alt .no{position:absolute;top:-22px;left:14px}
.no{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--amber);color:#111;font-family:var(--display);font-weight:800;font-size:18px}
.surec-kart h3{font-size:19px;text-transform:uppercase}
.surec-kart p{margin:8px 0 0;font-size:14px;color:var(--muted-d);line-height:1.45}
.surec-ok{position:absolute;right:-15px;top:62%;z-index:2;color:var(--amber);font-size:22px;display:flex}
@media (max-width:1100px){.surec{grid-template-columns:repeat(2,1fr)}.surec-ok{display:none}}
@media (max-width:480px){.surec{grid-template-columns:1fr}}

/* ÇALIŞMA ALANLARI */
.yapilar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.yapi-kart{overflow:hidden}
.yapi-kart img{width:100%;aspect-ratio:16/8;object-fit:cover}
.yapi-alt{display:flex;align-items:center;gap:12px;padding:12px 14px;font-size:13.5px;line-height:1.3}
.yapi-ikon{font-size:32px;color:var(--amber-2);display:flex}
.yapi-ad{flex:1;color:var(--muted)}
.yapi-ad strong{display:block;color:#111;font-size:16px}
@media (max-width:640px){.yapilar{grid-template-columns:repeat(2,1fr)}}

/* YGU OLMA YOLU */
.yol{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(6,1fr);gap:10px;position:relative}
.yol::before{content:"";position:absolute;left:4%;right:4%;top:22px;height:2px;background:linear-gradient(90deg,var(--amber),rgba(255,193,7,.5))}
.yol li{display:flex;flex-direction:column;align-items:center;gap:16px;position:relative}
.yol-kart{width:100%;flex:1;background:rgba(14,14,14,.78);border:1px solid var(--line-d);border-radius:var(--r);padding:16px 14px;backdrop-filter:blur(4px)}
.yol-kart .ikon{font-size:34px;color:var(--amber)}
.yol-kart h3{font-size:18px;margin-top:10px}
.yol-kart p{margin:6px 0 0;font-size:13.5px;color:var(--muted-d);line-height:1.4}
@media (max-width:1100px){.yol{grid-template-columns:repeat(3,1fr);row-gap:24px}.yol::before{display:none}}
@media (max-width:520px){.yol{grid-template-columns:repeat(2,1fr)}}

/* KONTROL SÜRELERİ */
.sureler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sure-kart{display:flex;flex-direction:column;align-items:center;text-align:center;padding:22px 14px;gap:6px}
.sure-kart .ikon{font-size:48px;color:var(--amber-2);margin-bottom:6px}
.sure-kart strong{font-family:var(--display);font-size:30px;line-height:1}
.sure-kart span{color:var(--muted);font-size:14.5px;line-height:1.35}
.sure-kart.diger strong{font-size:20px;line-height:1.1}
.sure-not{display:flex;gap:12px;align-items:flex-start;margin:18px 0 0;font-size:13px;color:var(--muted)}
.sure-not .ikon{font-size:28px;color:var(--amber-2)}
@media (max-width:760px){.sureler{grid-template-columns:repeat(2,1fr)}}

/* KONTROL SÜRESİ ARACI BANDI */
.arac-bant{display:grid;grid-template-columns:auto minmax(0,1fr) 170px 280px;gap:28px;align-items:center;margin-top:clamp(32px,4vw,48px);padding:22px 30px;background:#FFF8E1;border:1.5px solid #FBE3A0;border-radius:14px}
.arac-ikon{display:flex;font-size:120px;color:var(--amber-2)}
.arac-metin h2{font-size:clamp(26px,2.3vw,34px);line-height:1.08}
.arac-metin p{margin:10px 0 0;font-size:14.5px;color:#3E3B36;max-width:640px}
.arac-gorsel{width:170px;height:150px;object-fit:cover;border-radius:10px;box-shadow:0 12px 24px -16px rgba(0,0,0,.6)}
.arac-eylem{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center}
.arac-yakinda{align-self:flex-end;border:1.5px solid #D93025;color:#D93025;border-radius:999px;padding:2px 12px;font-size:13px;font-weight:700}
.arac-dugme{width:100%;background:#E3E1DD;color:#9A968F;cursor:not-allowed}
.arac-eylem small{font-size:11.5px;color:var(--muted);line-height:1.45}
@media (max-width:1100px){.arac-bant{grid-template-columns:auto minmax(0,1fr) 240px}.arac-gorsel{display:none}}
@media (max-width:760px){.arac-bant{grid-template-columns:1fr;gap:18px;padding:22px}.arac-ikon{font-size:72px}.arac-yakinda{align-self:center}}

/* VAKALAR */
.vakalar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.vaka-kart{overflow:hidden;display:flex;flex-direction:column;color:#111}
.vaka-gorsel{position:relative}
.vaka-kart img{width:100%;aspect-ratio:16/10;object-fit:cover}
.vaka-kaynak{position:absolute;right:6px;bottom:6px;font-size:10px;line-height:1.3;color:#fff;background:rgba(0,0,0,.55);padding:2px 6px;border-radius:4px;text-decoration:none}
.vaka-alt p{margin:0;font-size:13.5px;color:var(--muted);line-height:1.45}
.vaka-yer{display:inline-flex;align-items:center;gap:5px}
.vaka-alt{padding:14px 16px 16px;display:flex;flex-direction:column;gap:8px;flex:1}
.etiket{align-self:flex-start;background:var(--amber);color:#111;font-size:12px;font-weight:700;padding:3px 9px;border-radius:5px}
.vaka-kart h3{font-size:19px;flex:1}
.yakinda{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--muted)}
@media (max-width:860px){.vakalar{grid-template-columns:1fr 1fr}}
@media (max-width:520px){.vakalar{grid-template-columns:1fr}}

/* REHBERLER */
.rehber-btn{margin-top:22px}
.rehberler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.rehber-kart{overflow:hidden;display:flex;flex-direction:column}
.rehber-kart img{width:100%;aspect-ratio:16/10;object-fit:cover}
.rehber-alt{padding:12px 14px;display:flex;flex-direction:column;gap:10px;flex:1}
.rehber-kart h3{font-family:var(--body);font-size:14.5px;font-weight:600;line-height:1.35;flex:1}
.pdf{align-self:flex-end;font-size:11px;font-weight:700;border:1px solid var(--line);border-radius:4px;padding:2px 7px;color:var(--muted)}
@media (max-width:1100px){.rehberler{grid-template-columns:repeat(2,1fr)}}
</style>
