<script setup lang="ts">
// Eğitim, Sınav ve Belgelendirme: design/egitim-sinav-belgelendirme.jpeg (kullanıcının 15 Ekim görseli).
// Tasarım sıkışık olduğu için kullanıcı uyarlamaya izin verdi: aynı bölümler ve metinler, daha geniş yerleşim; mavi tonlar sitenin siyah/amber diline çevrildi.
// Sertifika görseli temsilî: Bakanlık amblemi yerine nötr alev mührü, karekod süsleme amaçlı.
import { SITE, EGITIM_SAYFA as E } from '~/data/icerik'

const YOL = '/ygu-egitim-sinav-belgelendirme'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı Eğitimi, Sınavı ve Belgesi (YGU) | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) eğitimine kimler katılabilir, eğitim süreleri ne kadar? YGU sınavı nasıl yapılır, YGU belgesi nasıl alınır ve kaç yıl geçerlidir?',
  yol: YOL,
  gorsel: '/img/egitim-hero.webp',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Yangın Güvenlik Uzmanı (YGU) Eğitim, Sınav ve Belgelendirme',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Eğitim, Sınav ve Belgelendirme', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema([
      { soru: 'YGU eğitimlerine kimler katılabilir?', yanit: `${E.egitim.kimler.metin} ${E.egitim.seviyeler.map((s) => `${s.ad}: ${s.kimler}.`).join(' ')}` },
      { soru: 'YGU eğitim süreleri ne kadardır?', yanit: `${E.egitim.sureler.metin} ${E.egitim.seviyeler.map((s) => `${s.ad}: ${s.sure}`).join(', ')}.` },
      { soru: 'YGU sınavı nasıl yapılır?', yanit: E.sinav.adimlar.map((a) => [a.metin, a.vurgu, a.son].filter(Boolean).join(' ')).join(' ') },
      { soru: 'YGU belgesi nasıl alınır, kaç yıl geçerlidir?', yanit: `${E.belge.not} ${E.belge.gecerlilik.metin} ${E.belge.maddeler.map((m) => m.metin).join(' ')}` }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/egitim-hero.webp', fetchpriority: 'high' }] })

// Süsleme karekodu: 21×21, köşe kareleri + sabit tohumlu desen (her derlemede aynı).
const QR = (() => {
  const n = 21
  const kose = (x: number, y: number) => {
    for (const [ox, oy] of [[0, 0], [n - 7, 0], [0, n - 7]]) {
      const dx = x - ox, dy = y - oy
      if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) return dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx > 1 && dx < 5 && dy > 1 && dy < 5) ? 1 : 0
      if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) return 0
    }
    return -1
  }
  let t = 7
  const kareler: [number, number][] = []
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const k = kose(x, y)
    t = (t * 1103515245 + 12345) % 2147483648
    if (k === 1 || (k === -1 && t % 7 < 3)) kareler.push([x, y])
  }
  return kareler
})()
</script>

<template>
  <section class="sayfa-hero" aria-labelledby="sayfa-baslik">
    <img class="sayfa-hero-bg" src="/img/egitim-hero.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Eğitim, Sınav ve Belgelendirme</span>
      </nav>
      <span class="cizgi" />
      <h1 id="sayfa-baslik">
        <span class="h1-ust">{{ E.ust }}</span>
        {{ E.baslik }}
        <span class="vurgu satir">{{ E.vurgu }}</span>
        <span class="satir">{{ E.baslik2 }}</span>
      </h1>
      <p>{{ E.metin }}</p>
    </div>
  </section>

  <!-- 01 Eğitim -->
  <section id="egitim" class="bolum" aria-labelledby="egitim-baslik">
    <div class="wrap">
      <header class="b-ust">
        <span class="no">01</span>
        <div class="b-ad">
          <h2 id="egitim-baslik">{{ E.egitim.baslik }}</h2>
          <p class="b-alt">{{ E.egitim.alt }}</p>
        </div>
        <p class="b-not"><Ikon ad="kitap" /><span>{{ E.egitim.not }}</span></p>
      </header>

      <div class="egitim-izgara">
        <article class="kart panel">
          <h3 class="panel-baslik"><Ikon ad="kullanici" /> {{ E.egitim.kimler.baslik }}</h3>
          <p class="panel-metin">{{ E.egitim.kimler.metin }}</p>
          <ul class="kimler">
            <li v-for="s in E.egitim.seviyeler" :key="s.ad">
              <span class="rozet" :class="{ k: s.ad === 'YGU-K' }">{{ s.ad }}</span>
              <span>{{ s.kimler }}</span>
            </li>
          </ul>
        </article>

        <article class="kart panel">
          <h3 class="panel-baslik"><Ikon ad="saat" /> {{ E.egitim.sureler.baslik }}</h3>
          <p class="panel-metin">{{ E.egitim.sureler.metin }}</p>
          <ul class="sureler">
            <li v-for="s in E.egitim.seviyeler" :key="s.ad">
              <span class="rozet" :class="{ k: s.ad === 'YGU-K' }">{{ s.ad }}</span>
              <strong>{{ s.sure }}</strong>
            </li>
          </ul>
        </article>

        <article class="kart panel icerik">
          <h3 class="panel-baslik"><Ikon ad="kitap" /> {{ E.egitim.icerik.baslik }}</h3>
          <div class="icerik-metin">
            <p v-for="m in E.egitim.icerik.paragraflar" :key="m">{{ m }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 02 Sınav -->
  <section id="sinav" class="bolum bolum-gri" aria-labelledby="sinav-baslik">
    <div class="wrap">
      <header class="b-ust">
        <span class="no">02</span>
        <div class="b-ad">
          <h2 id="sinav-baslik">{{ E.sinav.baslik }}</h2>
          <p class="b-alt">{{ E.sinav.alt }}</p>
        </div>
        <p class="b-not"><Ikon ad="pano" /><span>{{ E.sinav.not }}</span></p>
      </header>

      <ol class="adimlar">
        <li v-for="(a, i) in E.sinav.adimlar" :key="a.baslik" class="kart adim">
          <div class="adim-ust">
            <span class="adim-no">{{ i + 1 }}</span>
            <h3>{{ a.baslik }}</h3>
          </div>
          <Ikon :ad="a.ikon" class="adim-ikon" />
          <p>{{ a.metin }} <template v-if="a.vurgu"><strong>{{ a.vurgu }}</strong> {{ a.son }}</template></p>
        </li>
      </ol>
    </div>
  </section>

  <!-- 03 Belgelendirme -->
  <section id="belgelendirme" class="bolum" aria-labelledby="belge-baslik">
    <div class="wrap">
      <header class="b-ust">
        <span class="no">03</span>
        <div class="b-ad">
          <h2 id="belge-baslik">{{ E.belge.baslik }}</h2>
          <p class="b-alt">{{ E.belge.alt }}</p>
        </div>
        <p class="b-not"><Ikon ad="rozet" /><span>{{ E.belge.not }}</span></p>
      </header>

      <div class="belge-izgara">
        <figure class="sertifika" aria-label="Temsilî YGU belgesi">
          <div class="sertifika-ic">
            <span class="muhur"><Ikon ad="alev" /></span>
            <span class="s-ust">{{ E.belge.sertifika.ust }}</span>
            <span class="s-kurum">{{ E.belge.sertifika.kurum }}</span>
            <strong class="s-ad">{{ E.belge.sertifika.ad }}</strong>
            <div class="s-alt">
              <dl>
                <template v-for="a in E.belge.sertifika.alanlar" :key="a">
                  <dt>{{ a }}</dt><dd />
                </template>
              </dl>
              <svg class="qr" viewBox="-1 -1 23 23" aria-hidden="true">
                <rect v-for="[x, y] in QR" :key="`${x}-${y}`" :x="x" :y="y" width="1" height="1" />
              </svg>
            </div>
            <Ikon ad="alev" class="filigran" />
          </div>
        </figure>

        <div class="belge-bilgi">
          <article class="kart bilgi gecerlilik">
            <Ikon ad="takvim" class="bilgi-ikon" />
            <div>
              <h3>{{ E.belge.gecerlilik.baslik }}</h3>
              <p class="gecerlilik-deger"><strong>{{ E.belge.gecerlilik.deger }}</strong> <span>{{ E.belge.gecerlilik.metin }}</span></p>
            </div>
          </article>
          <article v-for="m in E.belge.maddeler" :key="m.baslik" class="kart bilgi">
            <Ikon :ad="m.ikon" class="bilgi-ikon" />
            <div>
              <h3>{{ m.baslik }}</h3>
              <p>{{ m.metin }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sayfa-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:26px 0 clamp(56px,7vw,88px)}
.sayfa-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 50%}
.sayfa-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.95) 0%,rgba(14,14,14,.78) 45%,rgba(14,14,14,.15) 85%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;gap:10px;font-size:13px;margin-bottom:clamp(30px,4vw,48px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-size:clamp(44px,6vw,86px);font-weight:800;line-height:.98}
.sayfa-hero h1 .satir{display:block}
.sayfa-hero p{font-size:clamp(17px,1.6vw,21px);margin:18px 0 0;max-width:600px;color:#ECE8E1}

/* Bölüm başlığı: numara, başlık + alt başlık, sağda kısa not */
.b-ust{display:grid;grid-template-columns:auto 1fr minmax(0,420px);gap:clamp(16px,2.4vw,28px);align-items:center;margin-bottom:clamp(28px,3.4vw,44px)}
.no{display:grid;place-items:center;width:clamp(58px,6vw,76px);aspect-ratio:1;border-radius:10px;background:var(--amber);font-family:var(--display);font-weight:800;font-size:clamp(30px,3.2vw,42px);color:#111}
.b-ad h2{font-size:clamp(38px,4.2vw,58px)}
.b-alt{margin:4px 0 0;font-family:var(--display);font-weight:600;font-size:clamp(19px,1.9vw,25px);color:var(--amber-ink)}
.b-not{display:flex;gap:14px;align-items:flex-start;margin:0;color:var(--muted);font-size:15px;line-height:1.55}
.b-not .ikon{flex:none;font-size:34px;color:var(--text)}
@media (max-width:900px){.b-ust{grid-template-columns:auto 1fr}.b-not{grid-column:1/-1}}

/* 01 Eğitim */
.egitim-izgara{display:grid;grid-template-columns:1.35fr 1fr;gap:18px}
.panel{padding:clamp(20px,2.4vw,30px)}
.panel-baslik{display:flex;align-items:center;gap:12px;font-size:clamp(23px,2.2vw,28px)}
.panel-baslik .ikon{font-size:30px;color:var(--amber-2)}
.panel-metin{margin:10px 0 20px;color:var(--muted);font-size:15.5px}
.kimler,.sureler{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.kimler li{display:grid;grid-template-columns:96px 1fr;gap:16px;align-items:center;background:var(--paper-2);border-radius:8px;padding:8px 16px 8px 8px;font-size:14.5px;line-height:1.45;color:#3A3835}
.rozet{display:grid;place-items:center;min-height:52px;border-radius:7px;background:var(--ink);color:#fff;font-family:var(--display);font-weight:800;font-size:22px;letter-spacing:.01em}
.rozet.k{background:var(--amber);color:#111}
.sureler li{display:grid;grid-template-columns:110px 1fr;align-items:center;background:var(--paper-2);border-radius:8px;padding:8px}
.sureler strong{text-align:center;font-family:var(--display);font-size:26px}
.icerik{grid-column:1/-1}
.icerik-metin{display:grid;grid-template-columns:1.4fr 1fr;gap:clamp(18px,3vw,40px);margin-top:14px}
.icerik-metin p{margin:0;color:#3A3835;font-size:16px;line-height:1.65}
.icerik-metin p + p{border-left:3px solid var(--amber);padding-left:clamp(16px,2vw,24px)}
@media (max-width:980px){.egitim-izgara{grid-template-columns:1fr}.icerik-metin{grid-template-columns:1fr}.icerik-metin p + p{border-left:0;padding-left:0}}
@media (max-width:520px){.kimler li{grid-template-columns:1fr;padding:8px}.kimler li > span:last-child{padding:0 6px 4px}}

/* 02 Sınav */
.adimlar{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(18px,2.4vw,34px)}
.adim{position:relative;display:flex;flex-direction:column;padding:clamp(20px,2vw,26px)}
.adim-ust{display:flex;align-items:center;gap:12px}
.adim-no{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:7px;background:var(--amber);font-family:var(--display);font-weight:800;font-size:22px}
.adim h3{font-size:21px;line-height:1.1}
.adim-ikon{font-size:52px;color:var(--text);margin:22px 0 18px}
.adim p{margin:0;color:var(--muted);font-size:15.5px;line-height:1.6}
.adim p strong{color:var(--text)}
.adim:not(:last-child)::after{content:"";position:absolute;top:50%;right:calc(-1 * clamp(18px,2.4vw,34px) / 2 - 7px);width:14px;height:14px;border-top:2.5px solid var(--amber-2);border-right:2.5px solid var(--amber-2);transform:translateY(-50%) rotate(45deg)}
@media (max-width:1060px){.adimlar{grid-template-columns:repeat(2,1fr)}.adim:nth-child(2)::after{display:none}}
@media (max-width:560px){.adimlar{grid-template-columns:1fr}.adim::after{display:none}}

/* 03 Belgelendirme */
.belge-izgara{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:clamp(22px,3vw,40px);align-items:start}
.sertifika{margin:0;padding:12px;background:linear-gradient(135deg,#E9C46A,#B98A2C 45%,#F2D488);border-radius:6px;box-shadow:0 30px 50px -30px rgba(0,0,0,.55)}
.sertifika-ic{position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;text-align:center;padding:clamp(22px,3vw,34px) clamp(18px,3vw,36px);background:#FFFDF6;border:1px solid #D9C28B;border-radius:3px}
.muhur{display:grid;place-items:center;width:62px;height:62px;border-radius:50%;background:#C8102E;color:#fff;font-size:34px;box-shadow:0 0 0 4px #FFFDF6,0 0 0 6px #C8102E}
.s-ust{margin-top:14px;font-weight:700;font-size:14px}
.s-kurum{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;color:#3A3835}
.s-ad{margin-top:14px;font-family:var(--display);font-size:clamp(22px,2.4vw,30px);line-height:1.1;text-transform:uppercase}
.s-alt{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;width:100%;margin-top:22px;text-align:left}
.s-alt dl{display:grid;grid-template-columns:auto 1fr;gap:9px 12px;margin:0;flex:1;font-size:13.5px}
.s-alt dt{font-weight:500}
.s-alt dt::after{content:":";margin-left:10px}
.s-alt dd{margin:0;border-bottom:1.5px dotted #A9A49B;min-width:80px;align-self:end;height:12px}
.qr{flex:none;width:78px;height:78px;background:#fff;fill:#111}
.filigran{position:absolute;right:-30px;bottom:-30px;font-size:220px;color:#F3E6C4;z-index:0}

.belge-bilgi{display:grid;gap:14px}
.bilgi{display:flex;gap:18px;align-items:flex-start;padding:clamp(18px,2vw,24px)}
.bilgi-ikon{flex:none;font-size:40px;color:var(--text)}
.bilgi h3{font-size:22px}
.bilgi p{margin:8px 0 0;color:var(--muted);font-size:15.5px;line-height:1.6}
.gecerlilik-deger{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.gecerlilik-deger strong{font-family:var(--display);font-size:46px;line-height:1;color:var(--text)}
@media (max-width:980px){.belge-izgara{grid-template-columns:1fr}.sertifika{max-width:620px}}
@media (max-width:480px){.s-alt{flex-direction:column;align-items:stretch}.qr{align-self:flex-end}}
</style>
