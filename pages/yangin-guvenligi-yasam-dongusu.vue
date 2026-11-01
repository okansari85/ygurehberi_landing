<script setup lang="ts">
// Ana sayfadaki "Süreci Detaylı İncele": design/yasam-dongusu.jpeg (üst menü ve alt bilgi sitenin kendisi).
import { SITE } from '~/data/icerik'
import { YASAM_DONGUSU as Y } from '~/data/yasamDongusu'

const YOL = '/yangin-guvenligi-yasam-dongusu'

useSayfaSeo({
  baslik: 'Yangın Güvenliğinde Süreklilik ve Yaşam Döngüsü | YGU Rehberi',
  aciklama:
    'Projeden kullanıma yangın güvenliğinin dört aşaması: proje, uygulama, doğrulama, süreklilik. YGU’nun süreçteki rolü ve üretim tesisi örneği.',
  yol: YOL,
  gorsel: '/img/yd-hero.webp',
  gorselBoyut: [594, 231],
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Yangın Güvenliğinde Süreklilik',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Yangın Güvenliğinde Süreklilik', item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})
</script>

<template>
  <section class="yd-hero" aria-labelledby="yd-baslik">
    <img class="yd-hero-bg" src="/img/yd-hero.webp" alt="" width="594" height="231" fetchpriority="high">
    <div class="wrap yd-hero-ic">
      <span class="ust">{{ Y.ust }}</span>
      <h1 id="yd-baslik">{{ Y.baslik }} <span class="vurgu">{{ Y.vurgu }}</span></h1>
      <p class="yd-alt-baslik">{{ Y.altBaslik }}</p>
      <p class="yd-hero-metin">{{ Y.metin }}</p>
    </div>
  </section>

  <section class="yd-ozet" aria-label="Sayfa özeti">
    <div class="wrap yd-ozet-izgara">
      <div v-for="o in Y.ozet" :key="o.baslik" class="yd-ozet-oge">
        <Ikon :ad="o.ikon" />
        <div>
          <strong>{{ o.baslik }}</strong>
          <span>{{ o.metin }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="yd-neden" aria-labelledby="yd-neden-baslik">
    <div class="wrap yd-neden-izgara">
      <div>
        <h2 id="yd-neden-baslik" class="yd-cubuklu">{{ Y.neden.baslik }}</h2>
        <p>{{ Y.neden.metin }}</p>
      </div>
      <img src="/img/yd-neden.webp" alt="Yangın güvenliği sistemleri görünen üretim ve depolama yapısı" width="351" height="125" loading="lazy">
      <aside class="yd-kutu">
        <h2><Ikon ad="kalkan" />{{ Y.neden.kartBaslik }}</h2>
        <ul class="yd-tikli">
          <li v-for="m in Y.neden.kartMaddeler" :key="m">{{ m }}</li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="yd-dort" aria-labelledby="yd-dort-baslik">
    <div class="wrap">
      <h2 id="yd-dort-baslik">{{ Y.asamaBaslik }}</h2>
      <p class="yd-dort-alt">{{ Y.asamaAlt }}</p>
      <ol class="yd-oklar" aria-hidden="true">
        <li v-for="(a, i) in Y.asamalar" :key="a.baslik">
          <div class="yd-ok">
            <Ikon :ad="a.ikon" />
            <div><strong>{{ a.baslik }}</strong><span>{{ a.kisa }}</span></div>
          </div>
          <span v-if="i < Y.asamalar.length - 1" class="yd-cift"><Ikon ad="ciftOk" /></span>
        </li>
      </ol>
      <ol class="yd-kartlar">
        <li v-for="(a, i) in Y.asamalar" :key="a.baslik" class="yd-kart">
          <div class="yd-kart-gorsel">
            <img :src="`/img/${a.gorsel}.webp`" :alt="`${a.baslik}: ${a.alt}`" width="222" height="93" loading="lazy">
            <span class="yd-kart-no">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h3>{{ a.baslik }}</h3>
          <p class="yd-kart-alt">{{ a.alt }}</p>
          <ul class="yd-tikli">
            <li v-for="m in a.maddeler" :key="m">{{ m }}</li>
          </ul>
          <div class="yd-rol">
            <strong><Ikon ad="isci" />YGU'nun Rolü</strong>
            <p>{{ a.rol }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="yd-alt-bolum" aria-labelledby="yd-ornek-baslik">
    <div class="wrap">
      <div class="yd-ornek">
        <img src="/img/yd-tesis.webp" alt="Üretim tesisinin havadan görünümü" width="293" height="136" loading="lazy">
        <div>
          <h2 id="yd-ornek-baslik" class="yd-cubuklu">{{ Y.ornek.baslik }}</h2>
          <p class="yd-ornek-alt">{{ Y.ornek.alt }}</p>
          <ol class="yd-adimlar">
            <li v-for="(a, i) in Y.ornek.adimlar" :key="a.baslik">
              <div class="yd-adim-ust">
                <span class="yd-no">{{ String(i + 1).padStart(2, '0') }}</span>
                <strong>{{ a.baslik }}</strong>
                <span v-if="i < Y.ornek.adimlar.length - 1" class="yd-cift"><Ikon ad="ciftOk" /></span>
              </div>
              <p>{{ a.metin }}</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="yd-uclu">
        <article class="yd-kutu">
          <h2><Ikon ad="isci" />{{ Y.yer.baslik }}</h2>
          <p>{{ Y.yer.metin }}</p>
        </article>
        <article class="yd-kutu">
          <h2><Ikon ad="ekip" />{{ Y.paydaslar.baslik }}</h2>
          <div class="yd-paydas">
            <ul class="yd-tikli">
              <li v-for="p in Y.paydaslar.liste" :key="p">{{ p }}</li>
            </ul>
            <svg viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true"><path d="M2 1C8 1 8 6 8 20V40C8 46 10 50 14 50C10 50 8 54 8 60V80C8 94 8 99 2 99" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" /></svg>
            <p>{{ Y.paydaslar.yan }}</p>
          </div>
        </article>
        <article class="yd-kutu yd-kutu-sari">
          <h2><Ikon ad="grafik" />{{ Y.saglar.baslik }}</h2>
          <ul class="yd-tikli">
            <li v-for="s in Y.saglar.liste" :key="s">{{ s }}</li>
          </ul>
        </article>
      </div>

      <div class="yd-ikili">
        <article class="yd-kutu yd-yatay">
          <Ikon ad="terazi" />
          <div>
            <h2>{{ Y.mevzuat.baslik }}</h2>
            <p>{{ Y.mevzuat.metin }}</p>
          </div>
        </article>
        <article class="yd-kutu yd-yatay">
          <Ikon ad="hedef" />
          <div>
            <h2>{{ Y.sonuc.baslik }}</h2>
            <p>{{ Y.sonuc.metin }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.yd-hero{position:relative;overflow:hidden;background:#12161A;color:#fff}
.yd-hero-bg{position:absolute;top:0;right:0;width:54%;height:100%;object-fit:cover;object-position:50% 20%;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 22%);mask-image:linear-gradient(90deg,transparent 0,#000 22%)}
.yd-hero-ic{position:relative;z-index:1;padding-top:clamp(36px,4.5vw,60px);padding-bottom:clamp(36px,4.5vw,60px)}
.yd-hero h1{font-family:var(--body);font-size:clamp(30px,3.2vw,44px);font-weight:700;line-height:1.14;max-width:560px}
.yd-hero h1 .vurgu{display:block;font-size:1.3em;line-height:1.1}
.yd-alt-baslik{max-width:520px;margin:12px 0 14px;font-size:clamp(17px,1.5vw,20px);font-weight:500;line-height:1.35}
.yd-hero-metin{max-width:500px;margin:0;padding-left:14px;border-left:3px solid var(--amber);font-size:14.5px;line-height:1.55;color:#E4E0D9}

/* ÖZET */
.yd-ozet{background:#F4F5F6;border-bottom:1px solid var(--line)}
.yd-ozet-izgara{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding-top:14px;padding-bottom:14px}
.yd-ozet-oge{display:flex;align-items:center;gap:12px;font-size:13px;line-height:1.35}
.yd-ozet-oge + .yd-ozet-oge{border-left:1px solid #D9D7D3;padding-left:16px}
.yd-ozet-oge .ikon{font-size:42px;color:var(--amber-2)}
.yd-ozet-oge strong{display:block;font-family:var(--display);font-size:17px}

/* ORTAK */
.yd-cubuklu{position:relative;padding-left:16px;font-size:clamp(23px,2.2vw,29px)}
.yd-cubuklu::before{content:"";position:absolute;left:0;top:2px;bottom:2px;width:6px;border-radius:2px;background:var(--amber)}
.yd-tikli{list-style:none;margin:0;padding:0;display:grid;gap:7px;font-size:13px;line-height:1.4}
.yd-tikli li{position:relative;padding-left:22px}
.yd-tikli li::before{content:"";position:absolute;left:0;top:2px;width:14px;height:14px;border-radius:50%;background:var(--amber) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12.5l4 4 8-9'/%3E%3C/svg%3E") center/10px no-repeat}
.yd-kutu{background:#fff;border:1px solid var(--line);border-radius:10px;padding:16px 18px;box-shadow:0 8px 22px -18px rgba(0,0,0,.45)}
.yd-kutu h2{display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:21px}
.yd-kutu h2 .ikon{flex:none;font-size:32px;color:var(--amber-2)}
.yd-kutu p{margin:0;font-size:13.5px;line-height:1.5}
.yd-no{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:50%;background:var(--amber);font-family:var(--display);font-weight:800;font-size:16px;color:#111}
.yd-cift{display:flex;color:var(--amber-2);font-size:22px}
.yd-cift .ikon{stroke-width:3}

/* NEDEN */
.yd-neden{background:#fff;padding:22px 0}
.yd-neden-izgara{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr) 320px;gap:20px;align-items:center}
.yd-neden p{margin:12px 0 0;font-size:14px;line-height:1.55}
.yd-neden img{width:100%;height:auto}

/* DÖRT AŞAMA */
.yd-dort{background:#141618;color:#fff;padding:clamp(24px,3vw,36px) 0}
.yd-dort > .wrap > h2{font-family:var(--body);font-size:clamp(23px,2.3vw,30px);font-weight:600;text-align:center}
.yd-dort-alt{margin:6px 0 20px;font-size:14px;text-align:center;color:#E4E0D9}
.yd-oklar{list-style:none;margin:0 0 16px;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.yd-oklar li{display:flex;align-items:center;gap:4px;min-width:0}
.yd-ok{flex:1;min-width:0;display:flex;align-items:center;justify-content:center;gap:12px;min-height:58px;padding:6px 26px 6px 12px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 50' preserveAspectRatio='none'%3E%3Cpath d='M10 1H218L239 25L218 49H10Q1 49 1 40V10Q1 1 10 1Z' fill='none' stroke='%23F5B000' stroke-width='2' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E") center/100% 100% no-repeat}
.yd-ok .ikon{flex:none;font-size:36px}
.yd-oklar li:nth-child(2) .yd-ok .ikon{color:var(--amber)}
.yd-ok strong{display:block;font-family:var(--display);font-size:20px;line-height:1.1;text-transform:uppercase}
.yd-ok span{display:block;font-size:11.5px;line-height:1.25;color:#E4E0D9}
.yd-kartlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.yd-kart{display:flex;flex-direction:column;background:#fff;color:var(--text);border-radius:16px;padding:8px}
.yd-kart-gorsel{position:relative}
.yd-kart-gorsel img{width:100%;height:auto;aspect-ratio:222/93;object-fit:cover;border-radius:10px}
/* Görselin içindeki numarayı örter: boyutu görselle orantılı. */
.yd-kart-no{position:absolute;left:-1%;top:-1%;display:grid;place-items:center;width:18%;height:36%;border-radius:8px 2px 10px 2px;background:var(--amber);font-family:var(--display);font-weight:800;font-size:clamp(15px,1.5vw,21px);color:#111}
.yd-kart h3{margin:10px 6px 0;font-size:24px;text-transform:uppercase}
.yd-kart-alt{margin:2px 6px 10px;font-family:var(--display);font-size:16.5px;font-weight:700}
.yd-kart .yd-tikli{margin:0 6px 12px}
.yd-rol{margin-top:auto;min-height:118px;padding:10px 12px;border-radius:10px;background:#FFF1CC}
.yd-rol strong{display:flex;align-items:center;gap:8px;font-family:var(--display);font-size:18px}
.yd-rol strong .ikon{font-size:24px;color:var(--amber-ink)}
.yd-rol p{margin:4px 0 0;font-size:13px;line-height:1.4}

/* ÖRNEK + KUTULAR */
.yd-alt-bolum{background:#F7F8F8;padding:clamp(20px,2.5vw,30px) 0}
.yd-ornek{display:grid;grid-template-columns:minmax(220px,29%) 1fr;gap:20px;align-items:center}
.yd-ornek > img{width:100%;height:auto;border-radius:12px}
.yd-ornek-alt{margin:6px 0 14px;font-size:13.5px}
.yd-adimlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.yd-adim-ust{display:flex;align-items:center;gap:10px}
.yd-adim-ust strong{font-family:var(--display);font-size:17px}
.yd-adim-ust .yd-cift{margin-left:auto}
.yd-adimlar p{margin:8px 0 0;font-size:13px;line-height:1.45}
.yd-uclu{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}
.yd-paydas{display:grid;grid-template-columns:auto 14px minmax(90px,1fr);gap:10px;align-items:center}
.yd-paydas svg{width:14px;height:100%;min-height:110px;color:#333}
.yd-kutu-sari{background:#FFF8E5;padding-top:0;overflow:hidden}
.yd-kutu-sari h2{margin:0 -18px 12px;padding:10px 18px;background:#FFE7A3}
.yd-ikili{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:14px}
.yd-yatay{display:flex;gap:16px;align-items:flex-start}
.yd-yatay > .ikon{font-size:44px;color:var(--amber-2)}
.yd-yatay h2{margin-bottom:6px;font-size:20px}

@media (max-width:1100px){
  .yd-ozet-izgara{grid-template-columns:repeat(2,1fr)}
  .yd-ozet-oge:nth-child(3){border-left:0;padding-left:0}
  .yd-neden-izgara{grid-template-columns:1fr 1fr}
  .yd-neden-izgara > div{grid-column:1 / -1}
  .yd-oklar,.yd-kartlar,.yd-adimlar{grid-template-columns:repeat(2,1fr)}
  .yd-oklar{gap:8px}
  .yd-oklar .yd-cift,.yd-adim-ust .yd-cift{display:none}
  .yd-ornek{grid-template-columns:1fr}
  .yd-uclu{grid-template-columns:1fr}
}
@media (max-width:720px){
  .yd-hero-bg{width:100%;opacity:.28;-webkit-mask-image:none;mask-image:none}
  .yd-ozet-izgara,.yd-neden-izgara,.yd-kartlar,.yd-ikili{grid-template-columns:1fr}
  .yd-ozet-oge + .yd-ozet-oge{border-left:0;padding-left:0}
  .yd-oklar{grid-template-columns:1fr}
  .yd-adimlar{grid-template-columns:1fr}
}
</style>
