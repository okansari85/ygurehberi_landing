<script setup lang="ts">
// Çalışma Alanları: içerik design/calisma-alanlari.jpeg, yerleşim design/calisma-alanlari-yerlesim.jpeg. Üst menü ve alt bilgi sitenin kendisi.
import { SITE } from '~/data/icerik'
import { CALISMA_SAYFA as C, CA_YONETMELIK } from '~/data/calismaAlanlari'

const YOL = '/calisma-alanlari'

useSayfaSeo({
  baslik: 'YGU Çalışma Alanları: Hangi Yapılarda Görev Alır? | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) hangi yapılarda görev alır? Çalışma alanı nasıl belirlenir, YGU seviyelerinin kapsamı ve kullanım sınıflarına göre değerlendirmeler.',
  yol: YOL,
  gorsel: '/img/ca-hero.webp',
  gorselBoyut: [584, 198],
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: C.baslik,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Çalışma Alanları', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema([
      { soru: 'YGU çalışma alanı nasıl belirlenir?', yanit: `${C.nasil.metin} ${C.sonuc}` },
      { soru: 'YGU seviyelerine göre çalışma alanları nelerdir?', yanit: `${C.seviye.satirlar.map((s) => `${s.ad}: ${s.metin}`).join(' ')} ${C.seviye.onemli}` }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/ca-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="ca-hero" aria-labelledby="ca-baslik">
    <img class="ca-hero-bg" src="/img/ca-hero.webp" alt="" width="584" height="198" fetchpriority="high">
    <div class="wrap">
      <h1 id="ca-baslik">{{ C.baslik }}</h1>
      <p>{{ C.metin }}</p>
    </div>
  </section>

  <section class="ca-nasil" aria-labelledby="ca-nasil-baslik">
    <div class="wrap">
      <h2 id="ca-nasil-baslik" class="ca-cizgili">{{ C.nasil.baslik }}</h2>
      <p class="ca-giris">{{ C.nasil.metin }}</p>

      <div class="ca-iki">
        <div class="ca-sol">
          <h3>{{ C.nasil.giris }}</h3>
          <ol class="ca-adimlar">
            <li v-for="(a, i) in C.nasil.adimlar" :key="a.baslik">
              <span class="ca-no">{{ i + 1 }}</span>
              <p><strong>{{ a.baslik }}</strong> {{ a.metin }}</p>
            </li>
          </ol>
        </div>
        <div>
          <h3 class="ca-tablo-baslik ca-cizgili">{{ C.seviye.baslik }}</h3>
          <table class="ca-tablo">
            <thead>
              <tr><th scope="col">{{ C.seviye.sutun1 }}</th><th scope="col">{{ C.seviye.sutun2 }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="s in C.seviye.satirlar" :key="s.ad">
                <th scope="row">{{ s.ad }}</th>
                <td>{{ s.metin }}</td>
              </tr>
            </tbody>
          </table>
          <p class="ca-onemli">
            <span class="ca-i" aria-hidden="true">i</span>
            <span><strong>Önemli:</strong> {{ C.seviye.onemli }}</span>
          </p>
        </div>
      </div>

      <div class="ca-sonuc">
        <strong><span class="ca-tik" aria-hidden="true" />Sonuç</strong>
        <p>{{ C.sonuc }}</p>
      </div>
    </div>
  </section>

  <section class="ca-liste" aria-labelledby="ca-liste-baslik">
    <div class="wrap">
      <h2 id="ca-liste-baslik" class="ca-cizgili">{{ C.listeBaslik }}</h2>
      <ol class="ca-kartlar">
        <li v-for="(a, i) in C.alanlar" :key="a.ad" class="ca-kart">
          <div v-if="a.gorsel" class="ca-gorsel">
            <img :src="`/img/${a.gorsel}.webp`" :alt="a.ad" width="371" height="165" loading="lazy">
          </div>
          <div v-else class="ca-gorsel ca-gorsel-ikon"><Ikon ad="katman" /></div>
          <div class="ca-icerik">
            <h3><span class="ca-sira">{{ i + 1 }}</span>{{ a.ad }}</h3>
            <div class="ca-sutunlar">
              <div>
                <h4><Ikon ad="katman" />{{ C.etiketler.kapsam }}</h4>
                <p>{{ a.kapsam }}</p>
              </div>
              <div>
                <h4><Ikon ad="kalkan" />{{ C.etiketler.ozellik }}</h4>
                <p>{{ a.ozellik }}</p>
              </div>
              <div>
                <h4><Ikon ad="kullanici" />{{ C.etiketler.ygu }}</h4>
                <p>{{ a.ygu }}</p>
              </div>
            </div>
            <p class="ca-dayanak"><Ikon ad="belge" /><span><strong>{{ C.etiketler.dayanak }}</strong> {{ CA_YONETMELIK }} – Madde {{ a.madde }}</span></p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.ca-hero{position:relative;overflow:hidden;background:#17191C;color:#fff;padding:clamp(48px,5.4vw,84px) 0}
.ca-hero-bg{position:absolute;top:0;right:0;width:58%;height:100%;object-fit:cover;object-position:60% 40%;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 18%);mask-image:linear-gradient(90deg,transparent 0,#000 18%)}
.ca-hero .wrap{position:relative;z-index:1}
.ca-hero h1{max-width:560px;padding-left:18px;border-left:5px solid var(--amber);font-size:clamp(34px,3.6vw,50px);font-weight:800;line-height:1.06;text-transform:uppercase}
.ca-hero p{max-width:540px;margin:22px 0 0;font-size:16px;line-height:1.65;color:#ECE8E1}

/* ORTAK */
.ca-cizgili{position:relative;padding-bottom:14px;color:#10233F;font-size:clamp(28px,2.7vw,38px)}
.ca-cizgili::after{content:"";position:absolute;left:0;bottom:0;width:72px;height:4px;border-radius:2px;background:var(--amber)}

/* NASIL */
.ca-nasil{background:#fff;padding:clamp(44px,5vw,72px) 0 clamp(32px,3.6vw,48px)}
.ca-giris{max-width:1080px;margin:20px 0 0;font-size:16.5px;line-height:1.7}
.ca-iki{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:clamp(28px,3.4vw,48px);margin-top:36px}
.ca-sol{padding-right:clamp(0px,3.4vw,48px);border-right:1px solid var(--line)}
.ca-sol > h3{color:#10233F;font-family:var(--body);font-size:18px;font-weight:700;line-height:1.4}
.ca-adimlar{list-style:none;margin:24px 0 0;padding:0;display:grid;gap:20px}
.ca-adimlar li{display:flex;gap:16px;align-items:flex-start}
.ca-no{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:50%;background:#FFD667;font-family:var(--display);font-weight:800;font-size:21px}
.ca-adimlar p{margin:0;font-size:15px;line-height:1.6}
.ca-tablo-baslik{font-size:clamp(24px,2.2vw,30px)}
.ca-tablo{width:100%;margin-top:22px;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid var(--line);border-radius:10px;font-size:15px}
.ca-tablo thead th{padding:13px 22px;background:#10233F;color:#fff;font-family:var(--display);font-size:18px;font-weight:700;text-align:left}
.ca-tablo thead th:first-child{text-align:center;border-right:2px solid #fff}
.ca-tablo tbody th{width:24%;padding:14px 10px;background:#FFEDB8;font-family:var(--display);font-size:22px;font-weight:800;text-align:center}
.ca-tablo td{padding:14px 22px;line-height:1.5}
.ca-tablo tbody tr + tr > *{border-top:1px solid var(--line)}
.ca-onemli{display:flex;gap:16px;align-items:center;margin:24px 0 0;padding:20px 24px;border-radius:12px;background:#F2F2F3;font-size:15.5px;line-height:1.6}
.ca-i{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:50%;background:var(--amber);font-family:Georgia,serif;font-weight:700;font-size:20px}
.ca-sonuc{display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(20px,3vw,40px);align-items:center;margin-top:36px;padding:26px clamp(22px,3vw,36px);border-radius:14px;background:#FFF4D6}
.ca-sonuc strong{display:flex;align-items:center;gap:14px;font-family:var(--display);font-size:28px}
.ca-tik{position:relative;flex:none;width:36px;height:36px;border-radius:50%;background:var(--amber)}
.ca-tik::after{content:"";position:absolute;left:10px;top:11px;width:16px;height:8px;border-left:3px solid #fff;border-bottom:3px solid #fff;transform:rotate(-45deg)}
.ca-sonuc p{margin:0;padding-left:clamp(20px,3vw,40px);border-left:1px solid #D9C89A;font-size:16px;line-height:1.65}

/* LİSTE */
.ca-liste{background:#fff;padding:clamp(24px,3vw,40px) 0 clamp(52px,6vw,88px)}
.ca-kartlar{list-style:none;margin:30px 0 0;padding:0;display:grid;gap:22px}
.ca-kart{display:grid;grid-template-columns:minmax(220px,24%) minmax(0,1fr);gap:clamp(18px,2vw,28px);padding:14px;border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 26px -22px rgba(0,0,0,.45)}
.ca-gorsel{min-height:220px;overflow:hidden;border-radius:10px}
.ca-gorsel img{display:block;width:100%;height:100%;object-fit:cover}
.ca-gorsel-ikon{display:grid;place-items:center;background:#FFF4D6;font-size:92px;color:var(--amber-2)}
.ca-icerik{display:flex;flex-direction:column;min-width:0;padding:6px 8px 0 0}
.ca-icerik > h3{display:flex;align-items:center;gap:12px;color:#10233F;font-size:clamp(24px,2vw,28px)}
.ca-sira{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:50%;background:#10233F;color:#fff;font-family:var(--body);font-size:15px;font-weight:600}
.ca-sutunlar{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:16px}
.ca-sutunlar > div{padding:0 clamp(14px,1.6vw,22px)}
.ca-sutunlar > div:first-child{padding-left:0}
.ca-sutunlar > div:last-child{padding-right:0}
.ca-sutunlar > div + div{border-left:1px solid var(--line)}
.ca-sutunlar h4{display:flex;align-items:center;gap:10px;min-height:44px;margin:0;color:#10233F;font-family:var(--display);font-size:18px;font-weight:700;line-height:1.15}
.ca-sutunlar h4 .ikon{flex:none;font-size:28px;color:var(--amber-2)}
.ca-sutunlar p{margin:8px 0 0;font-size:14px;line-height:1.6}
.ca-sutunlar{margin-bottom:18px}
.ca-dayanak{display:flex;align-items:center;gap:10px;margin:auto 0 0;padding:9px 14px;border-radius:7px;background:#FFF4D6;font-size:13.5px;line-height:1.4}
.ca-dayanak .ikon{flex:none;font-size:20px}

@media (max-width:1100px){
  .ca-iki{grid-template-columns:1fr}
  .ca-sol{padding-right:0;padding-bottom:32px;border-right:0;border-bottom:1px solid var(--line)}
  .ca-kart{grid-template-columns:1fr}
  .ca-gorsel{min-height:0;aspect-ratio:371/165}
  .ca-gorsel-ikon{font-size:72px}
}
@media (max-width:760px){
  .ca-hero-bg{width:100%;opacity:.3;-webkit-mask-image:none;mask-image:none}
  .ca-sutunlar{grid-template-columns:1fr;gap:18px}
  .ca-sutunlar > div{padding:0}
  .ca-sutunlar > div + div{border-left:0}
  .ca-sutunlar h4{min-height:0}
  .ca-sonuc{grid-template-columns:1fr}
  .ca-sonuc p{padding-left:0;border-left:0}
  .ca-tablo td,.ca-tablo thead th{padding:12px}
  .ca-onemli{align-items:flex-start;padding:16px}
}
</style>
