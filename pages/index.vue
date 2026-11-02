<script setup lang="ts">
// Ana sayfa: design/ana-sayfa.jpeg (bölüm sırası ve metinler birebir).
import {
  SITE, ON_KAYIT, HERO_ETIKETLER, HERO_KART_MADDELER, HIZLI_KARTLAR, SUREC, CALISMA_ALANLARI, ANA_CALISMA,
  YGU_YOLU, ANA_GOREVLER, ANA_SERBEST, KONTROL_SURELERI, KONTROL_ARACI, VAKALAR, REHBERLER, YGU_NEDIR, NASIL_OLUNUR
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
      primaryImageOfPage: `${SITE.url}/img/hero-ygu.webp`
    },
    sssSema([
      { soru: 'Yangın güvenlik uzmanı (YGU) nedir?', yanit: YGU_NEDIR },
      { soru: 'Nasıl YGU olunur?', yanit: `${NASIL_OLUNUR} ${YGU_YOLU.metinVurgu}` },
      {
        soru: 'Yangın güvenliği kontrolleri kaç yılda bir yapılır?',
        yanit: `${KONTROL_SURELERI.metin} ${KONTROL_SURELERI.sureler.map((s) => `${s.metin}: ${sure(s.sure)}`).join('; ')}. ${KONTROL_SURELERI.not}`
      },
      { soru: 'YGU hangi yapılarda görev alır?', yanit: `${ANA_CALISMA.metin} ${ANA_CALISMA.yapilar.map((y) => `${y.ad} (${y.alt})`).join(', ')}.` }
    ], '/')
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/hero-ygu.webp', fetchpriority: 'high' }] })

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
    <img class="hero-bg" src="/img/hero-ygu.webp" alt="" width="1600" height="900" fetchpriority="high">
    <div class="wrap hero-ic">
      <div class="hero-sol">
        <h1 id="hero-baslik"><span class="h1-ust">Yangın Güvenlik Uzmanı (YGU) Rehberi</span> Yangın Güvenliğinde <span class="vurgu">Tek ve Güvenilir Rehber</span></h1>
        <p>YGU'nun görevleri, yetki sınırları, mevzuat, çalışma alanları, eğitim ve belgelendirme süreçleri ile gerçek yangın vakalarına dayalı teknik içeriklere tek bir yerden ulaşın.</p>
        <SiteArama buyuk />
        <ul class="hero-etiket">
          <li v-for="e in HERO_ETIKETLER" :key="e.ad"><NuxtLink :to="e.to"><Ikon :ad="e.ikon" />{{ e.ad }}</NuxtLink></li>
        </ul>
      </div>
      <aside class="hero-kart" aria-labelledby="hero-kart-baslik">
        <div class="hero-kart-ust">
          <span class="hero-kart-alev"><Ikon ad="alev" /></span>
          <div>
            <h2 id="hero-kart-baslik">YGU ile Güvenli Yapılar</h2>
            <p>Tasarımdan kullanıma, yangın güvenliğinin tüm aşamalarında rehberiniz.</p>
          </div>
        </div>
        <ul>
          <li v-for="m in HERO_KART_MADDELER" :key="m.metin"><Ikon :ad="m.ikon" />{{ m.metin }}</li>
        </ul>
        <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber hero-kart-btn">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
      </aside>
    </div>
  </section>

  <!-- HIZLI KARTLAR -->
  <section class="hizli" aria-label="Öne çıkan konular">
    <div class="wrap hizli-slider">
      <button type="button" class="hizli-ok onceki" aria-label="Önceki konular" :disabled="basta" @click="kaydir(-1)"><Ikon ad="ok" /></button>
      <div ref="serit" class="hizli-izgara" @scroll.passive="uclariGuncelle">
      <NuxtLink v-for="k in HIZLI_KARTLAR" :key="k.baslik" :to="k.to" class="kart hizli-kart">
        <span class="hizli-gorsel">
          <img :src="k.gorsel" alt="" width="241" height="173" loading="lazy">
          <span v-if="k.rozet" class="hizli-ikon"><Ikon :ad="k.ikon" /></span>
        </span>
        <h2>{{ k.baslik }}</h2>
        <p>{{ k.metin }}</p>
        <span class="hizli-dugme">Detayları İncele <Ikon ad="ok" /></span>
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
        <span class="surec-cizgi" aria-hidden="true"></span>
        <p class="surec-p1">{{ SUREC.metin }}</p>
        <p>{{ SUREC.metin2 }}</p>
        <NuxtLink to="/yangin-guvenligi-yasam-dongusu" class="btn btn-amber">Süreci Detaylı İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <ol class="surec">
        <li v-for="(a, i) in SUREC.adimlar" :key="a.baslik" class="surec-kart">
          <img :src="`/img/${a.gorsel}.webp`" :alt="`${a.baslik}: ${a.metin}`" width="245" height="238" loading="lazy">
          <div class="surec-alt">
            <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="surec-ikon"><Ikon :ad="a.ikon" /></span>
            <h3>{{ a.baslik }}</h3>
            <p>{{ a.metin }}</p>
          </div>
          <span v-if="i < SUREC.adimlar.length - 1" class="surec-ok" aria-hidden="true"><Ikon ad="ciftOk" /></span>
        </li>
      </ol>
    </div>
  </section>

  <!-- ÇALIŞMA ALANLARI -->
  <section id="calisma-alanlari" class="bolum" aria-labelledby="alan-baslik">
    <img class="yapi-dekor" src="/img/ana-yapi-dekor.webp" alt="" width="400" height="208" loading="lazy">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust yapi-ust">{{ CALISMA_ALANLARI.ust }}</span>
        <h2 id="alan-baslik">{{ CALISMA_ALANLARI.baslik }}</h2>
        <p>{{ ANA_CALISMA.metin }}</p>
        <NuxtLink to="/calisma-alanlari" class="btn btn-amber">Tüm Çalışma Alanlarını Gör <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="yapilar">
        <li v-for="y in ANA_CALISMA.yapilar" :key="y.ad">
          <NuxtLink to="/calisma-alanlari" class="kart yapi-kart">
            <img :src="`/img/${y.gorsel}.webp`" :alt="`${y.ad}: ${y.alt}`" width="371" height="165" loading="lazy">
            <div class="yapi-alt">
              <span class="yapi-ad"><strong>{{ y.ad }}</strong> {{ y.alt }}</span>
              <Ikon ad="asagi" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>

  <!-- YGU OLMA YOLU -->
  <section id="ygu-olma-yolu" class="bolum bolum-koyu" aria-labelledby="yol-baslik">
    <div class="bolum-arka"><img src="/img/bg-ygu-olma-yolu.webp" alt="" width="1600" height="589" loading="lazy"></div>
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ YGU_YOLU.ust }}</span>
        <h2 id="yol-baslik" class="buyuk">{{ YGU_YOLU.baslik }} <span class="vurgu">{{ YGU_YOLU.vurgu }}</span></h2>
        <p class="yol-giris"><strong>{{ YGU_YOLU.soru }}</strong> {{ YGU_YOLU.metin }} <strong class="vurgu">{{ YGU_YOLU.metinVurgu }}</strong></p>
        <NuxtLink to="/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme" class="btn btn-amber">{{ YGU_YOLU.dugme }} <Ikon ad="ok" /></NuxtLink>
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

  <!-- YGU'NUN GÖREVLERİ -->
  <section id="gorevler" class="bolum bolum-gri" aria-labelledby="gorev-baslik">
    <div class="wrap">
      <div class="gorev-ust">
        <span class="cizgi" />
        <h2 id="gorev-baslik" class="gorev-baslik">{{ ANA_GOREVLER.baslik }}</h2>
        <p>{{ ANA_GOREVLER.metin }}<br>{{ ANA_GOREVLER.metin2 }}</p>
        <NuxtLink to="/ygu-hakkinda/merak-edilenler/yangin-guvenlik-uzmani-gorevleri" class="btn btn-amber">Tüm Görevleri İncele <Ikon ad="ok" /></NuxtLink>
      </div>
      <ul class="gorevler">
        <li v-for="g in ANA_GOREVLER.liste" :key="g.baslik">
          <NuxtLink to="/ygu-hakkinda/merak-edilenler/yangin-guvenlik-uzmani-gorevleri" class="kart gorev-kart">
            <img :src="`/img/${g.gorsel}.webp`" alt="" :width="g.genislik" height="241" loading="lazy">
            <div class="gorev-ic">
              <h3><span class="gorev-ikon"><Ikon :ad="g.ikon" /></span>{{ g.baslik }}</h3>
              <p>{{ g.metin }}</p>
              <span class="gorev-ok" aria-hidden="true"><Ikon ad="ok" /></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>

  <!-- SERBEST ÇALIŞMA İMKÂNI -->
  <section id="serbest-calisma" class="bolum bolum-koyu serbest" aria-labelledby="serbest-baslik">
    <div class="bolum-arka"><img src="/img/bg-serbest-calisma.webp" alt="" width="1600" height="609" loading="lazy"></div>
    <div class="wrap">
      <span class="ust">{{ ANA_SERBEST.ust }}</span>
      <h2 id="serbest-baslik">{{ ANA_SERBEST.baslik }}</h2>
      <p>{{ ANA_SERBEST.metin }}</p>
      <NuxtLink to="/serbest-calisma" class="btn btn-amber">Serbest Çalışmayı İncele <Ikon ad="ok" /></NuxtLink>
    </div>
  </section>

  <!-- KONTROL SÜRELERİ -->
  <section id="kontrol-sureleri" class="bolum" aria-labelledby="kontrol-baslik">
    <div class="wrap iki-kolon">
      <div class="sol">
        <span class="ust">{{ KONTROL_SURELERI.ust }}</span>
        <h2 id="kontrol-baslik">{{ KONTROL_SURELERI.baslik }} <span class="vurgu">{{ KONTROL_SURELERI.vurgu }}</span></h2>
        <p>{{ KONTROL_SURELERI.metin }}</p>
        <NuxtLink to="/calisma-alanlari" class="btn btn-amber">Tüm Yapı Türleri ve Süreleri Gör <Ikon ad="ok" /></NuxtLink>
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
        <NuxtLink to="/vakalarla-ogren" class="btn btn-amber">Tüm Vaka Analizlerini Gör <Ikon ad="ok" /></NuxtLink>
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
.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:100% 30%}
.hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.94) 0%,rgba(14,14,14,.8) 36%,rgba(14,14,14,0) 60%)}
.hero-ic{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:32px;align-items:center;padding-top:clamp(40px,5vw,64px);padding-bottom:clamp(36px,4.5vw,56px);min-height:560px}
.hero-sol{max-width:640px}
.hero h1{font-family:var(--body);font-size:clamp(32px,3.5vw,48px);font-weight:700;letter-spacing:-.01em;line-height:1.14}
.hero h1 .vurgu{display:block;color:var(--amber)}
.hero-sol > p{font-size:clamp(15px,1.15vw,17px);font-weight:400;margin:16px 0 22px;max-width:580px}
.hero-etiket{list-style:none;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;margin:16px 0 0;padding:0}
.hero-etiket a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;height:100%;min-height:84px;padding:10px 6px;border:1px solid rgba(255,194,14,.45);border-radius:10px;background:rgba(14,14,14,.55);color:#fff;font-size:12px;font-weight:600;line-height:1.25;text-align:center;text-decoration:none;transition:border-color .2s, background .2s}
.hero-etiket a .ikon{font-size:24px;color:var(--amber)}
.hero-etiket a:hover{border-color:var(--amber);background:rgba(14,14,14,.85)}
@media (max-width:560px){.hero-etiket{grid-template-columns:repeat(3,minmax(0,1fr))}}
.hero-kart{background:rgba(14,14,14,.88);border:1px solid var(--line-d);border-radius:14px;padding:22px 20px;backdrop-filter:blur(6px)}
.hero-kart-ust{display:flex;gap:14px;align-items:flex-start}
.hero-kart-alev{font-size:46px;color:var(--amber);display:flex}
.hero-kart h2{font-size:22px}
.hero-kart-ust p{margin:6px 0 0;font-size:13.5px;color:var(--muted-d)}
.hero-kart-btn{width:100%;margin:18px 0 0}
.hero-kart ul{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:12px;font-size:13px;color:#E4E0D9}
.hero-kart li{display:flex;gap:12px;align-items:center}
.hero-kart li .ikon{font-size:22px;color:var(--amber)}
/* Geniş ekranda fotoğraf sola kayar: uzman, sağdaki kartın arkasında kalmaz (tasarımdaki gibi). */
@media (min-width:961px){.hero-ic{min-height:clamp(560px,36vw,720px)}.hero-bg{left:-18%;right:auto;width:118%;max-width:none;object-position:50% 42%}}
@media (max-width:960px){.hero-ic{grid-template-columns:1fr;min-height:0}.hero::before{background:linear-gradient(180deg,rgba(14,14,14,.86),rgba(14,14,14,.92))}}

/* HIZLI KARTLAR */
.hizli{padding:22px 0 44px;border-bottom:4px solid #F5B000}
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
.hizli-kart{position:relative;padding:0 0 16px;display:flex;flex-direction:column;overflow:hidden}
.hizli-gorsel{position:relative;display:block;aspect-ratio:241/173}
.hizli-gorsel img{display:block;width:100%;height:100%;object-fit:cover}
.hizli-ikon{position:absolute;left:14px;bottom:6px;width:46px;height:46px;display:grid;place-items:center;border-radius:12px;background:#fff;font-size:26px;color:var(--amber-2);box-shadow:0 6px 14px -8px rgba(0,0,0,.5)}
.hizli-kart h2{font-size:24px;margin:8px 16px 0}
.hizli-kart p{margin:8px 16px 14px;font-size:13.5px;color:var(--muted);line-height:1.45}
.hizli-dugme{display:flex;align-items:center;justify-content:center;gap:10px;min-height:40px;margin:auto 16px 0;border:1px solid var(--amber);border-radius:10px;font-family:var(--display);font-size:16px;font-weight:700;color:#111;transition:background .2s}
.hizli-dugme .ikon{font-size:18px;color:var(--amber-2)}
a.hizli-kart:hover .hizli-dugme{background:var(--amber)}
@media (max-width:1100px){.hizli-izgara{grid-auto-columns:calc((100% - 2 * 14px) / 3)}}
@media (max-width:560px){.hizli-izgara{grid-auto-columns:calc((100% - 14px) / 2)}.hizli-kart h2{font-size:19px}}

/* SÜREÇ */
#surec{background:#0D1115;padding-bottom:calc(clamp(48px,6vw,80px) + 40px)}
/* En alttaki boydan boya şerit ve sağda yükselen köşe (tasarım). */
#surec::after{content:"";position:absolute;left:0;right:0;bottom:0;height:56px;pointer-events:none;background:linear-gradient(#F5B000,#F5B000) left bottom/100% 6px no-repeat,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130 56'%3E%3Cpath fill='%23F5B000' d='M0 50C22 50 34 47 48 41L130 0V56H0Z'/%3E%3C/svg%3E") right bottom/130px 56px no-repeat}
.surec-cizgi{display:block;width:96px;height:2px;margin-top:18px;background:var(--amber)}
#surec .sol p{color:#E4E0D9;font-size:15px}
#surec .sol p.surec-p1{margin-bottom:14px}
.surec{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.surec-kart{position:relative;background:#16191C;border:1px solid rgba(255,255,255,.28);border-radius:14px;overflow:visible;display:flex;flex-direction:column}
.surec-kart::after{content:"";position:absolute;left:-1px;right:-1px;bottom:-1px;height:18px;border-radius:0 0 14px 14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 18' preserveAspectRatio='none'%3E%3Cpath fill='%23F5B000' d='M0 1C70 11 170 15 250 3V18H0Z'/%3E%3C/svg%3E") center/100% 100% no-repeat}
.surec-kart img{width:100%;height:auto;aspect-ratio:245/238;object-fit:cover;border-radius:13px 13px 0 0}
.surec-alt{position:relative;padding:14px 9% 36px}
/* Numara, görselin içindeki rozetin üstüne oturur; boyutu bu yüzden kart genişliğine bağlı. */
.surec-alt .no{position:absolute;top:0;left:7%;width:23%;height:auto;aspect-ratio:1;transform:translateY(-50%);font-size:clamp(15px,1.4vw,20px)}
.no{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--amber);color:#111;font-family:var(--display);font-weight:800;font-size:18px}
.surec-ikon{display:flex;justify-content:center;font-size:44px;color:#fff;margin-bottom:8px}
.surec-kart h3{font-size:25px;text-transform:uppercase;text-align:center}
.surec-kart p{margin:12px 0 0;font-size:13.5px;color:#E4E0D9;line-height:1.5}
.surec-ok{position:absolute;right:-24px;top:56%;z-index:2;color:#F5B000;font-size:28px;display:flex}
.surec-ok .ikon{stroke-width:3}
@media (max-width:1100px){.surec{grid-template-columns:repeat(2,1fr)}.surec-ok{display:none}}
@media (max-width:480px){.surec{grid-template-columns:1fr}.surec-alt .no{font-size:26px}#surec::after{height:36px;background-size:100% 4px,84px 36px}}

/* ÇALIŞMA ALANLARI: design/ana-sayfa-yapilar.jpeg */
#calisma-alanlari{position:relative;overflow:hidden;background:#fff}
#calisma-alanlari > .wrap{position:relative;z-index:1}
.yapi-dekor{position:absolute;left:0;bottom:0;width:min(26%,400px);height:auto;pointer-events:none}
.yapi-ust{display:inline-block;margin-bottom:0;padding:8px 18px;border-radius:999px;background:#0B0B0B;color:var(--amber);font-size:15px}
#calisma-alanlari .sol h2{position:relative;margin-top:22px;padding:20px 0;color:#0F1B3D;font-size:clamp(32px,3.2vw,46px);line-height:1.08}
#calisma-alanlari .sol h2::before,#calisma-alanlari .sol h2::after{content:"";position:absolute;left:0;width:72px;height:5px;border-radius:3px;background:var(--amber)}
#calisma-alanlari .sol h2::before{top:0}
#calisma-alanlari .sol h2::after{bottom:0}
#calisma-alanlari .sol p{margin:22px 0 28px;color:#20263A;font-size:16px;line-height:1.65}
.yapilar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.yapi-kart{display:block;overflow:hidden;height:100%;border-radius:14px;border-color:#EEEDEB;box-shadow:0 12px 26px -20px rgba(0,0,0,.4)}
.yapi-kart img{display:block;width:100%;height:auto;aspect-ratio:371/165;object-fit:cover}
.yapi-alt{display:flex;align-items:center;gap:10px;padding:14px 16px 16px;font-size:13.5px;line-height:1.35}
.yapi-alt > .ikon{flex:none;font-size:22px;color:#0F1B3D}
.yapi-alt > .ikon{stroke-width:2.4}
.yapi-ad{flex:1;min-width:0;color:#20263A}
.yapi-ad strong{display:block;margin-bottom:3px;font-family:var(--display);font-size:21px;font-weight:700;line-height:1.1;color:#0F1B3D}
@media (max-width:1100px){.yapi-dekor{display:none}}
@media (max-width:640px){.yapilar{grid-template-columns:repeat(2,minmax(0,1fr))}.yapi-alt{padding:12px}.yapi-ad strong{font-size:18px}}
@media (max-width:420px){.yapilar{grid-template-columns:1fr}}

/* YGU OLMA YOLU */
/* YGU'NUN GÖREVLERİ: design/ana-sayfa-gorevler.jpeg */
#gorevler{background:#FAFAFA}
.gorev-ust{margin-bottom:28px}
.gorev-ust .cizgi{width:56px;margin-bottom:14px}
.gorev-baslik{font-size:clamp(34px,3.4vw,48px);font-weight:800}
.gorev-ust p{margin:10px 0 26px;color:#1B1B1B;font-size:clamp(15px,1.2vw,16.5px);line-height:1.65}
.gorevler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.gorev-kart{position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:12px;border-color:#ECEBE9;box-shadow:0 12px 26px -20px rgba(0,0,0,.4)}
.gorev-kart img{display:block;width:100%;height:auto;aspect-ratio:356/241;object-fit:cover}
.gorev-ic{display:flex;flex-direction:column;flex:1;padding:18px 18px 62px}
.gorev-ic h3{display:flex;gap:12px;align-items:center;min-height:50px;font-size:clamp(20px,1.65vw,22px);font-weight:800;line-height:1.15}
.gorev-ikon{display:grid;place-items:center;flex:none;width:46px;height:46px;border-radius:50%;border:2px solid var(--amber);background:#FFF8DC;color:#6B5200;font-size:24px}
.gorev-ic p{margin:14px 0 0;color:#26231F;font-size:14.5px;line-height:1.6}
.gorev-ok{position:absolute;right:16px;bottom:16px;display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:var(--amber);color:#111;font-size:20px;transition:transform .2s ease}
.gorev-kart:hover .gorev-ok{transform:translateX(3px)}
@media (max-width:1060px){.gorevler{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.gorevler{grid-template-columns:1fr}}
/* SERBEST ÇALIŞMA: design/ana-sayfa-serbest.jpeg; arka plan aynı görselden, gömülü yazıları silinerek. */
.serbest{display:flex;align-items:center;min-height:clamp(420px,38vw,640px);background:#050505}
.serbest .wrap{width:100%}
.serbest .bolum-arka img{opacity:1;object-position:100% 50%}
.serbest .bolum-arka::after{display:none}
.serbest .ust{width:fit-content;padding-left:12px;border-left:3px solid var(--amber);color:var(--amber);font-size:clamp(15px,1.4vw,20px);line-height:1.2}
.serbest h2{font-size:clamp(34px,3.8vw,56px);text-transform:none}
.serbest p{max-width:540px;margin:12px 0 24px;font-size:clamp(16px,1.3vw,20px);color:#ECE8E1}
.serbest .btn{padding:14px 26px;font-size:clamp(16px,1.3vw,20px)}
@media (max-width:1280px){
  .serbest .bolum-arka::after{display:block;background:linear-gradient(90deg,#050505 0%,rgba(5,5,5,.86) 42%,rgba(5,5,5,0) 72%)}
}
/* Telefonda baret yazının altında: görsel bölümün dibine iner, üstü zemine karışır. */
@media (max-width:760px){
  .serbest{display:block;padding-bottom:calc(68vw + 8px)}
  .serbest .bolum-arka{top:auto;height:72vw}
  .serbest .bolum-arka img{object-position:88% 50%}
  .serbest .bolum-arka::after{background:linear-gradient(180deg,#050505 0%,rgba(5,5,5,0) 32%)}
}
/* YGU OLMA YOLU: design/ana-sayfa-yol.jpeg; genişlik diğer bölümlerle aynı (.wrap). */
#ygu-olma-yolu{background:#0B0B0B}
#ygu-olma-yolu .bolum-arka img{opacity:1;object-position:100% 50%}
#ygu-olma-yolu .bolum-arka::after{display:none}
#ygu-olma-yolu .iki-kolon{grid-template-columns:minmax(0,33%) minmax(0,1fr);gap:clamp(24px,2.4vw,32px)}
#ygu-olma-yolu .sol h2{font-size:clamp(28px,2.6vw,35px)}
#ygu-olma-yolu .sol h2 .vurgu{margin-top:8px;font-size:1.13em}
#ygu-olma-yolu .sol .yol-giris{margin:22px 0 28px;padding-left:18px;border-left:4px solid var(--amber);font-size:clamp(16px,1.3vw,18px);line-height:1.45;color:#D9D6D0}
.yol-giris strong{display:block;font-weight:600;color:#fff}
.yol-giris strong.vurgu{color:var(--amber)}
.yol{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;position:relative}
.yol::before{content:"";position:absolute;left:4%;right:4%;top:24px;height:2px;background:var(--amber)}
.yol li{display:flex;flex-direction:column;align-items:center;gap:14px;position:relative}
.yol .no{width:48px;height:48px;font-size:20px}
.yol-kart{width:100%;flex:1;background:rgba(14,14,14,.72);border:1px solid var(--line-d);border-radius:12px;padding:16px 10px}
.yol-kart .ikon{font-size:34px;color:var(--amber)}
.yol-kart h3{font-size:17.5px;margin-top:14px}
.yol-kart p{margin:10px 0 0;font-size:13.5px;color:var(--muted-d);line-height:1.45}
@media (max-width:1180px){#ygu-olma-yolu .iki-kolon{grid-template-columns:1fr}}
@media (max-width:760px){.yol{grid-template-columns:repeat(2,1fr);row-gap:24px}.yol::before{display:none}.yol-kart{padding:16px 14px}.yol-kart h3{font-size:20px}}
@media (max-width:400px){.yol{grid-template-columns:1fr}}

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
