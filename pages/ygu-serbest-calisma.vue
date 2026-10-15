<script setup lang="ts">
// Serbest Çalışma: design/serbest-calisma.jpeg (kullanıcının 15 Ekim görseli). Eğitim sayfası gibi uyarlandı:
// aynı bölümler ve metinler, daha geniş yerleşim. Hizmet kartı görselleri sitede var olan fotoğraflardan.
import { SITE, ON_KAYIT, SERBEST_SAYFA as S } from '~/data/icerik'

const YOL = '/ygu-serbest-calisma'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı Serbest Çalışabilir mi? YGU Serbest Çalışma | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) kendi adına çalışabilir mi? Bağımsız olarak verebileceği hizmetler, işletmelerle nasıl çalıştığı ve serbest çalışmanın avantajları.',
  yol: YOL,
  gorsel: '/img/serbest-hero.webp',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Yangın Güvenlik Uzmanı (YGU) Serbest Çalışma',
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
      { soru: S.kendi.baslik, yanit: `${S.kendi.not} ${S.kendi.metin}` },
      { soru: S.hizmetler.baslik, yanit: `${S.hizmetler.not} ${S.hizmetler.liste.map((h) => `${h.baslik}: ${h.metin}`).join(' ')}` },
      { soru: `YGU ${S.isletme.baslik.toLocaleLowerCase('tr')}`, yanit: `${S.isletme.not} ${S.isletme.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join(' ')}` }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/serbest-hero.webp', fetchpriority: 'high' }] })
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" src="/img/serbest-hero.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Serbest Çalışma</span>
      </nav>
      <span class="cizgi" />
      <h1 id="sayfa-baslik">
        <span class="h1-ust">{{ S.ust }}</span>
        {{ S.baslik }}
        <span class="vurgu satir">{{ S.vurgu }}</span>
        <span class="satir">{{ S.baslik2 }}</span>
      </h1>
      <p>{{ S.metin }}</p>
    </div>
  </section>

  <!-- 01 Kendi adına çalışma -->
  <section id="kendi-adina" class="bolum" aria-labelledby="kendi-baslik">
    <div class="wrap">
      <NumaraliBaslik :no="1" id="kendi-baslik" :baslik="S.kendi.baslik" :not="S.kendi.not" ikon="belge" />
      <div class="kendi">
        <p class="kendi-metin">{{ S.kendi.metin }}</p>
        <div class="kart kosullar">
          <ul>
            <li v-for="m in S.kendi.maddeler" :key="m"><span class="tik" aria-hidden="true">✓</span>{{ m }}</li>
          </ul>
          <Ikon ad="rozet" class="kosul-rozet" />
        </div>
      </div>
    </div>
  </section>

  <!-- 02 Bağımsız hizmetler -->
  <section id="hizmetler" class="bolum bolum-gri" aria-labelledby="hizmet-baslik">
    <div class="wrap">
      <NumaraliBaslik :no="2" id="hizmet-baslik" :baslik="S.hizmetler.baslik" :not="S.hizmetler.not" ikon="pano" />
      <ul class="hizmetler">
        <li v-for="h in S.hizmetler.liste" :key="h.baslik" class="kart hizmet">
          <img :src="`/img/${h.gorsel}.webp`" :alt="h.alt" width="1536" height="1024" loading="lazy">
          <div class="hizmet-ic">
            <h3><Ikon :ad="h.ikon" /> {{ h.baslik }}</h3>
            <p>{{ h.metin }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- 03 İşletmelerde çalışma -->
  <section id="isletmeler" class="bolum" aria-labelledby="isletme-baslik">
    <div class="wrap">
      <NumaraliBaslik :no="3" id="isletme-baslik" :baslik="S.isletme.baslik" :not="S.isletme.not" ikon="bina" />
      <ol class="adimlar">
        <li v-for="(a, i) in S.isletme.adimlar" :key="a.baslik" class="kart adim">
          <div class="adim-ust">
            <span class="adim-no">{{ i + 1 }}</span>
            <Ikon :ad="a.ikon" class="adim-ikon" />
          </div>
          <h3>{{ a.baslik }}</h3>
          <p>{{ a.metin }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- 04 Avantajlar -->
  <section id="avantajlar" class="bolum bolum-gri" aria-labelledby="avantaj-baslik">
    <div class="wrap">
      <NumaraliBaslik :no="4" id="avantaj-baslik" :baslik="S.avantajlar.baslik" :not="S.avantajlar.not" ikon="grafik" />
      <div class="avantaj-izgara">
        <ul class="avantajlar">
          <li v-for="a in S.avantajlar.liste" :key="a.baslik" class="kart avantaj">
            <Ikon :ad="a.ikon" class="avantaj-ikon" />
            <h3>{{ a.baslik }}</h3>
            <p>{{ a.metin }}</p>
          </li>
        </ul>
        <NuxtLink :to="ON_KAYIT.to" class="kayit-kutu" aria-label="YGU Ön Kayıt">
          <strong>YGU<span>Ön Kayıt</span></strong>
          <span class="kayit-ok"><Ikon ad="ok" /></span>
          <Ikon ad="alev" class="kayit-alev" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(56px,7vw,88px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.96) 0%,rgba(14,14,14,.82) 45%,rgba(14,14,14,.3) 85%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(44px,6vw,86px);font-weight:800;line-height:.98}
.sayfa-hero h1 .satir{display:block}
.sayfa-hero p{font-size:clamp(16px,1.5vw,20px);margin:18px 0 0;max-width:640px;color:#ECE8E1}

/* 01 */
.kendi{display:grid;grid-template-columns:1fr minmax(0,560px);gap:clamp(24px,4vw,56px);align-items:center}
.kendi-metin{margin:0;font-size:clamp(17px,1.5vw,19px);line-height:1.7;color:#3A3835}
.kosullar{position:relative;overflow:hidden;padding:clamp(20px,2.4vw,28px)}
.kosullar ul{position:relative;z-index:1;list-style:none;margin:0;padding:0;display:grid;gap:4px}
.kosullar li{display:flex;align-items:center;gap:14px;padding:12px 0;font-size:16px;font-weight:500}
.kosullar li + li{border-top:1px solid var(--line)}
.tik{display:grid;place-items:center;flex:none;width:28px;height:28px;border-radius:50%;background:var(--amber);font-size:15px;font-weight:700;color:#111}
.kosul-rozet{position:absolute;right:-14px;bottom:-18px;font-size:150px;color:var(--paper-2)}
@media (max-width:900px){.kendi{grid-template-columns:1fr}}

/* 02 */
.hizmetler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.hizmet{overflow:hidden;display:flex;flex-direction:column}
.hizmet img{width:100%;aspect-ratio:16/10;object-fit:cover}
.hizmet-ic{padding:20px 20px 24px}
.hizmet h3{display:flex;gap:10px;align-items:flex-start;font-size:21px;line-height:1.1}
.hizmet h3 .ikon{flex:none;font-size:26px;color:var(--amber-2)}
.hizmet p{margin:12px 0 0;color:var(--muted);font-size:15px;line-height:1.6}
@media (max-width:1060px){.hizmetler{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.hizmetler{grid-template-columns:1fr}}

/* 03 */
.adimlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(18px,2.4vw,34px)}
.adim{position:relative;padding:clamp(20px,2vw,26px)}
.adim-ust{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.adim-no{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:50%;background:var(--amber);font-family:var(--display);font-weight:800;font-size:22px}
.adim-ikon{font-size:38px;color:var(--text)}
.adim h3{font-size:22px;line-height:1.1}
.adim p{margin:10px 0 0;color:var(--muted);font-size:15.5px;line-height:1.6}
.adim:not(:last-child)::after{content:"";position:absolute;top:50%;right:calc(-1 * clamp(18px,2.4vw,34px) / 2 - 7px);width:14px;height:14px;border-top:2.5px solid var(--amber-2);border-right:2.5px solid var(--amber-2);transform:translateY(-50%) rotate(45deg)}
@media (max-width:1060px){.adimlar{grid-template-columns:repeat(2,1fr)}.adim:nth-child(2)::after{display:none}}
@media (max-width:560px){.adimlar{grid-template-columns:1fr}.adim::after{display:none}}

/* 04 */
.avantaj-izgara{display:grid;grid-template-columns:1fr 210px;gap:18px}
.avantajlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.avantaj{padding:clamp(20px,2vw,26px)}
.avantaj-ikon{font-size:42px;color:var(--text)}
.avantaj h3{font-size:21px;line-height:1.1;margin-top:14px}
.avantaj p{margin:10px 0 0;color:var(--muted);font-size:15px;line-height:1.6}
.kayit-kutu{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;gap:18px;padding:24px 22px;border-radius:var(--r);background:var(--amber);color:#111;text-decoration:none;transition:transform .2s ease,background .2s ease}
.kayit-kutu:hover{background:#FFCD2E;transform:translateY(-4px)}
.kayit-kutu strong{position:relative;z-index:1;font-family:var(--display);font-size:46px;line-height:.95}
.kayit-kutu strong span{display:block;font-size:28px}
.kayit-ok{position:relative;z-index:1;display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:#111;color:var(--amber);font-size:22px}
.kayit-alev{position:absolute;right:-18px;bottom:-14px;font-size:120px;color:#E3A500}
@media (max-width:1180px){.avantaj-izgara{grid-template-columns:1fr}.avantajlar{grid-template-columns:repeat(2,1fr)}.kayit-kutu{flex-direction:row;align-items:center}.kayit-kutu strong{font-size:38px}.kayit-kutu strong span{display:inline;margin-left:10px;font-size:38px}}
@media (max-width:560px){.avantajlar{grid-template-columns:1fr}.kayit-kutu strong,.kayit-kutu strong span{font-size:30px}}
</style>
