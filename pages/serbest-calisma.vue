<script setup lang="ts">
// Serbest Çalışma: design/serbest-calisma-2.jpeg (2 Kasım 2026). Üst menü ve alt bilgi sitenin kendisinden.
// Görseller tasarımdan kesildi (düşük çözünürlük).
import { SITE, SERBEST_SAYFA as S } from '~/data/icerik'

const YOL = '/serbest-calisma'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı (YGU) Serbest Çalışabilir mi? | YGU Rehberi',
  aciklama:
    'YGU kendi adına veya şirket üzerinden çalışabilir mi? Serbest çalışmanın iki modeli, görevlendirme, hizmet bedeli, bağımsızlık ve bilinmesi gerekenler.',
  yol: YOL,
  gorsel: '/img/serbest-sayfa-hero.webp',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: S.baslik,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Serbest Çalışma', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema([
      { soru: S.baslik, yanit: S.metin },
      { soru: S.kendi.baslik, yanit: S.kendi.metin },
      { soru: S.gorevlendirme.baslik, yanit: S.gorevlendirme.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join(' ') },
      { soru: S.isletme.baslik, yanit: `${S.isletme.metin} ${S.isletme.liste.map((l) => `${l.baslik}: ${l.metin}`).join(' ')}` },
      { soru: S.bilinmesi.baslik, yanit: S.bilinmesi.liste.map((l) => `${l.baslik}: ${l.metin}`).join(' ') }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/serbest-sayfa-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="s-hero" aria-labelledby="sayfa-baslik">
    <img class="s-hero-foto" src="/img/serbest-sayfa-hero.webp" alt="Şantiyede proje inceleyen yangın güvenlik uzmanı" width="1008" height="576" fetchpriority="high">
    <div class="wrap">
      <span class="ust s-ust">{{ S.ust }}</span>
      <h1 id="sayfa-baslik">{{ S.baslik }}</h1>
      <p>{{ S.metin }}</p>
    </div>
  </section>

  <div class="wrap">
    <aside class="s-bilgi">
      <Ikon ad="kalkan" />
      <div>
        <strong>{{ S.bilgi.baslik }}</strong>
        <p>{{ S.bilgi.metin }}</p>
      </div>
    </aside>
  </div>

  <section id="kendi-adina" class="s-bolum" aria-labelledby="kendi-baslik">
    <div class="wrap s-iki">
      <div>
        <h2 id="kendi-baslik" class="s-baslik">{{ S.kendi.baslik }}</h2>
        <p class="s-metin">{{ S.kendi.metin }}</p>
      </div>
      <img class="s-foto" src="/img/serbest-sayfa-kendi.webp" alt="Şantiyede kontrol listesi inceleyen yangın güvenlik uzmanı" width="894" height="384" loading="lazy">
    </div>
  </section>

  <section id="modeller" class="s-bolum" aria-labelledby="model-baslik">
    <div class="wrap">
      <h2 id="model-baslik" class="s-baslik">{{ S.modeller.baslik }}</h2>
      <ul class="s-modeller">
        <li v-for="m in S.modeller.liste" :key="m.baslik" class="s-model">
          <img :src="`/img/${m.gorsel}.webp`" :alt="m.alt" width="399" height="339" loading="lazy">
          <div>
            <Ikon :ad="m.ikon" class="s-ikon" />
            <h3>{{ m.baslik }}</h3>
            <p>{{ m.metin }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section id="gorevlendirme" class="s-bolum" aria-labelledby="gorev-baslik">
    <div class="wrap">
      <h2 id="gorev-baslik" class="s-baslik">{{ S.gorevlendirme.baslik }}</h2>
      <ol class="s-adimlar">
        <li v-for="a in S.gorevlendirme.adimlar" :key="a.baslik" class="s-adim">
          <Ikon :ad="a.ikon" class="s-ikon" />
          <h3>{{ a.baslik }}</h3>
          <p>{{ a.metin }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section id="hizmet-bedeli" class="s-bolum" aria-labelledby="bedel-baslik">
    <div class="wrap s-iki">
      <div>
        <h2 id="bedel-baslik" class="s-baslik">{{ S.bedel.baslik }}</h2>
        <p class="s-metin">{{ S.bedel.metin }}</p>
        <ul class="s-bedel">
          <li v-for="b in S.bedel.liste" :key="b.metin"><Ikon :ad="b.ikon" class="s-ikon" /> {{ b.metin }}</li>
        </ul>
      </div>
      <img class="s-foto" src="/img/serbest-sayfa-bedel.webp" alt="Masada hesap makinesi, proje çizimi ve YGU Rehberi logolu baret" width="876" height="408" loading="lazy">
    </div>
  </section>

  <section id="bagimsizlik" class="s-bolum" aria-labelledby="bagimsiz-baslik">
    <div class="wrap">
      <h2 id="bagimsiz-baslik" class="s-baslik">{{ S.bagimsizlik.baslik }}</h2>
      <div class="s-iki s-bagimsiz">
        <img class="s-foto" src="/img/serbest-sayfa-bagimsizlik.webp" alt="Yangın güvenlik uzmanı proje üzerinde değerlendirme yapıyor" width="861" height="381" loading="lazy">
        <ul class="s-tikler">
          <li v-for="m in S.bagimsizlik.maddeler" :key="m"><Ikon ad="tik" /> {{ m }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="isletmeler" class="s-bolum" aria-labelledby="isletme-baslik">
    <div class="wrap">
      <h2 id="isletme-baslik" class="s-baslik">{{ S.isletme.baslik }}</h2>
      <p class="s-metin s-metin-genis">{{ S.isletme.metin }}</p>
      <ul class="s-karsilastir">
        <li v-for="l in S.isletme.liste" :key="l.baslik">
          <Ikon :ad="l.ikon" class="s-ikon" />
          <div>
            <h3>{{ l.baslik }}</h3>
            <p>{{ l.metin }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section id="bilinmesi-gerekenler" class="s-bolum s-son" aria-labelledby="bilinmesi-baslik">
    <div class="wrap">
      <h2 id="bilinmesi-baslik" class="s-baslik">{{ S.bilinmesi.baslik }}</h2>
      <ul class="s-bilinmesi">
        <li v-for="l in S.bilinmesi.liste" :key="l.baslik">
          <Ikon :ad="l.ikon" class="s-ikon" />
          <h3>{{ l.baslik }}</h3>
          <p>{{ l.metin }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h1,h2,h3{font-family:var(--body)}
.s-ikon{font-size:34px;color:var(--amber-2)}

.s-hero{position:relative;overflow:hidden;background:#0B0B0B;color:#fff;padding:clamp(44px,6vw,88px) 0}
.s-hero-foto{position:absolute;top:0;right:0;width:52%;height:100%;object-fit:cover;object-position:60% 30%;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 26%);mask-image:linear-gradient(90deg,transparent 0,#000 26%)}
.s-hero .wrap{position:relative;z-index:1}
.s-ust{width:fit-content;padding-left:12px;border-left:3px solid var(--amber);color:var(--amber);font-size:clamp(15px,1.3vw,18px);line-height:1.2}
.s-hero h1{max-width:15.5em;font-size:clamp(30px,3.1vw,46px);font-weight:700;line-height:1.14;letter-spacing:-.015em}
.s-hero p{max-width:600px;margin:18px 0 0;font-size:clamp(15px,1.25vw,18px);color:#ECE8E1}

.s-bilgi{display:flex;align-items:center;gap:20px;margin-top:24px;padding:18px 26px;border-radius:12px;background:#FBF3E0}
.s-bilgi > .ikon{flex:none;font-size:36px;color:var(--amber-2)}
.s-bilgi div{padding-left:20px;border-left:2px solid var(--amber)}
.s-bilgi strong{font-size:17px;font-weight:600}
.s-bilgi p{margin:2px 0 0;font-size:15px;color:#3A3835}

.s-bolum{padding-top:clamp(40px,4.6vw,64px)}
.s-son{padding-bottom:clamp(48px,5vw,72px)}
.s-baslik{padding-left:16px;border-left:6px solid var(--amber);font-size:clamp(25px,2.7vw,36px);font-weight:700;line-height:1.2;letter-spacing:-.015em}
.s-metin{margin:18px 0 0;max-width:640px;font-size:clamp(15px,1.2vw,17px);line-height:1.7;color:#3A3835}
.s-metin-genis{max-width:none}
.s-iki{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,56px);align-items:center}
.s-foto{width:100%;border-radius:14px;box-shadow:0 8px 24px -14px rgba(0,0,0,.45)}

.s-modeller{list-style:none;margin:24px 0 0;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.s-model{display:grid;grid-template-columns:minmax(0,45%) minmax(0,1fr);gap:20px;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 4px 14px -10px rgba(0,0,0,.3)}
.s-model img{width:100%;height:100%;min-height:210px;object-fit:cover;border-radius:10px}
.s-model h3{margin-top:8px;font-size:clamp(18px,1.6vw,21px);font-weight:700;line-height:1.2}
.s-model p{margin:10px 0 0;font-size:15px;line-height:1.6;color:#3A3835}

.s-adimlar{list-style:none;margin:24px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(22px,2.6vw,36px)}
.s-adim{position:relative;padding:20px 22px;border-radius:12px;background:var(--paper-2)}
.s-adim h3{margin-top:8px;font-size:clamp(17px,1.45vw,20px);font-weight:700;line-height:1.2}
.s-adim p{margin:8px 0 0;font-size:14.5px;line-height:1.55;color:#3A3835}
.s-adim:not(:last-child)::after{content:"";position:absolute;top:50%;right:calc(-1 * clamp(22px,2.6vw,36px) / 2 - 5px);width:10px;height:10px;border-top:2.5px solid var(--amber-2);border-right:2.5px solid var(--amber-2);transform:translateY(-50%) rotate(45deg)}

.s-bedel{list-style:none;margin:20px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.s-bedel li{display:flex;flex-direction:column;gap:8px;padding:2px 18px;font-size:14.5px;line-height:1.35}
.s-bedel li:first-child{padding-left:0}
.s-bedel li + li{border-left:1px solid var(--line)}

.s-bagimsiz{margin-top:24px;align-items:stretch}
.s-bagimsiz .s-foto{height:100%;object-fit:cover}
.s-tikler{list-style:none;margin:0;padding:clamp(20px,2.4vw,30px);display:flex;flex-direction:column;justify-content:center;gap:18px;border-radius:14px;background:#FBF3E0}
.s-tikler li{display:flex;gap:14px;font-size:clamp(14.5px,1.15vw,16px);line-height:1.5}
.s-tikler .ikon{flex:none;margin-top:2px;font-size:22px;color:var(--amber-2)}

.s-karsilastir{list-style:none;margin:20px 0 0;padding:20px 0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-radius:12px;background:var(--paper-2)}
.s-karsilastir li{display:flex;gap:18px;padding:0 clamp(18px,2.4vw,30px)}
.s-karsilastir li + li{border-left:2px solid var(--amber)}
.s-karsilastir .s-ikon{flex:none;font-size:38px}
.s-karsilastir h3{font-size:clamp(17px,1.45vw,20px);font-weight:700;line-height:1.2}
.s-karsilastir p{margin:6px 0 0;font-size:14.5px;line-height:1.55;color:#3A3835}

.s-bilinmesi{list-style:none;margin:24px 0 0;padding:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
.s-bilinmesi li{padding:18px 18px 20px;border:1px solid var(--line);border-radius:12px;background:#fff;box-shadow:0 4px 14px -10px rgba(0,0,0,.3)}
.s-bilinmesi h3{margin-top:10px;font-size:clamp(16px,1.3vw,18px);font-weight:700;line-height:1.2}
.s-bilinmesi p{margin:10px 0 0;font-size:14px;line-height:1.55;color:#3A3835}

@media (max-width:1100px){
  .s-bilinmesi{grid-template-columns:repeat(3,minmax(0,1fr))}
  .s-model{grid-template-columns:minmax(0,1fr)}
  .s-model img{height:auto;min-height:0;aspect-ratio:16/10}
}
@media (max-width:980px){
  .s-iki{grid-template-columns:minmax(0,1fr)}
  .s-metin{max-width:none}
  .s-adimlar{grid-template-columns:repeat(2,minmax(0,1fr))}
  .s-adim:nth-child(2)::after{display:none}
  .s-karsilastir{grid-template-columns:minmax(0,1fr);gap:20px}
  .s-karsilastir li + li{border-left:0;border-top:2px solid var(--amber);padding-top:20px}
  .s-hero-foto{width:72%;opacity:.55}
}
/* Telefonda fotoğraf yazının altına iner, yazı fotoğrafın üstüne binmez. */
@media (max-width:640px){
  .s-hero{padding-bottom:0}
  .s-hero-foto{position:static;width:100%;height:auto;margin-top:26px;opacity:1;object-position:50% 50%;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 22%);mask-image:linear-gradient(180deg,transparent 0,#000 22%)}
  .s-hero{display:flex;flex-direction:column-reverse}
  .s-bilgi{flex-direction:column;align-items:flex-start;gap:10px;padding:16px 18px}
  .s-bilgi div{padding-left:0;border-left:0}
  .s-modeller,.s-adimlar,.s-bilinmesi{grid-template-columns:minmax(0,1fr)}
  .s-adim::after{display:none}
}
@media (max-width:420px){
  .s-bedel{grid-template-columns:minmax(0,1fr);gap:14px}
  .s-bedel li{flex-direction:row;align-items:center;padding:0}
  .s-bedel li + li{border-left:0}
}
</style>
