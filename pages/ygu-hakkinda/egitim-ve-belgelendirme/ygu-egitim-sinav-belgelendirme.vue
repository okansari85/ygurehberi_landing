<script setup lang="ts">
// Eğitim, Sınav ve Belgelendirme: design/egitim-sinav-belgelendirme-2.jpeg (1 Kasım 2026). Metinler tasarımdan; yerleşim ferah tutuldu.
// Üst menü, bölüm şeridi ve alt bilgi sitenin kendisi. Sertifika görseli temsilî: Bakanlık amblemi yerine nötr alev mührü, karekod süsleme amaçlı.
import { SITE, EGITIM_SAYFA as E } from '~/data/icerik'

const YOL = '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı Eğitimi, Sınavı ve Belgesi (YGU) | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) eğitimine kimler katılabilir, eğitim süreleri ne kadar? YGU sınavı nasıl yapılır, YGU belgesi nasıl alınır ve kaç yıl geçerlidir?',
  yol: YOL,
  gorsel: '/img/egitim-hero-baret.webp',
  gorselBoyut: [510, 207],
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
        { '@type': 'ListItem', position: 2, name: 'YGU Hakkında', item: `${SITE.url}/ygu-hakkinda` },
        { '@type': 'ListItem', position: 3, name: 'Eğitim ve Belgelendirme', item: `${SITE.url}/ygu-hakkinda/egitim-ve-belgelendirme` },
        { '@type': 'ListItem', position: 4, name: 'Eğitim, Sınav ve Belgelendirme', item: `${SITE.url}${YOL}` }
      ]
    },
    sssSema([
      { soru: 'YGU eğitimlerine kimler başvurabilir?', yanit: `${E.basvuru.metin} ${E.basvuru.seviyeler.map((s) => `${s.ad}: ${s.kimler}`).join(' ')} ${E.basvuru.not}` },
      { soru: 'YGU eğitim süreleri ne kadardır?', yanit: `${E.basvuru.seviyeler.map((s) => `${s.ad}: ${s.sure}`).join(', ')}.` },
      { soru: 'YGU sınavı nasıl yapılır?', yanit: `${E.sinav.adimlar.map((a) => [a.metin, ...(a.maddeler ?? [])].join(' ')).join(' ')} ${E.sinav.not}` },
      { soru: 'YGU belgesi kaç yıl geçerlidir, nasıl yenilenir?', yanit: `${E.belge.gecerlilik.metin} ${E.belge.maddeler.map((m) => m.metin).join(' ')}` },
      { soru: 'Hangi YGU, hangi yapıda görev alabilir?', yanit: `${E.gorev.adimlar.map((a) => a.metin).join(' ')} ${E.gorev.not}` }
    ], YOL)
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/egitim-hero-baret.webp', fetchpriority: 'high' }] })

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
    <img class="sayfa-hero-bg" src="/img/egitim-hero-baret.webp" alt="" width="510" height="207" fetchpriority="high">
    <div class="wrap">
      <nav class="kirinti" aria-label="Sayfa yolu">
        <NuxtLink to="/"><Ikon ad="evIcon" /> Ana Sayfa</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink to="/ygu-hakkinda">YGU Hakkında</NuxtLink>
        <Ikon ad="sag" />
        <NuxtLink to="/ygu-hakkinda/egitim-ve-belgelendirme">Eğitim ve Belgelendirme</NuxtLink>
        <Ikon ad="sag" />
        <span aria-current="page">Eğitim, Sınav ve Belgelendirme</span>
      </nav>
      <h1 id="sayfa-baslik">
        <span class="h1-ust">{{ E.ust }}</span>
        {{ E.baslik }}
        <span class="vurgu satir">{{ E.vurgu }}</span>
        <span class="satir">{{ E.baslik2 }}</span>
      </h1>
      <p>{{ E.metin }}</p>
    </div>
  </section>

  <YguBolumSeridi kategori="egitim-ve-belgelendirme" />

  <!-- 01 Başvuru -->
  <section id="basvuru" class="eg-bolum" aria-labelledby="basvuru-baslik">
    <div class="wrap">
      <div class="basvuru-izgara">
        <div>
          <header class="eg-baslik">
            <span class="eg-no">01</span>
            <div>
              <h2 id="basvuru-baslik">{{ E.basvuru.baslik }}</h2>
              <p class="eg-alt">{{ E.basvuru.alt }}</p>
            </div>
          </header>
          <div class="basvuru-metin">
            <Ikon ad="liste" />
            <p>{{ E.basvuru.metin }}</p>
          </div>
        </div>
        <ul class="seviyeler">
          <li v-for="s in E.basvuru.seviyeler" :key="s.ad">
            <span class="seviye" :class="{ k: s.ad === 'YGU-K' }">{{ s.ad }}</span>
            <Ikon :ad="s.ikon" />
            <p>{{ s.kimler }}</p>
          </li>
        </ul>
      </div>
      <p class="eg-not"><Ikon ad="bilgi" />{{ E.basvuru.not }}</p>
    </div>
  </section>

  <!-- 02 Eğitim -->
  <section id="egitim" class="eg-bolum" aria-labelledby="egitim-baslik">
    <div class="wrap">
      <div class="sure-izgara">
        <header class="eg-baslik">
          <span class="eg-no">02</span>
          <h2 id="egitim-baslik">{{ E.egitim.baslik }}</h2>
        </header>
        <ul class="sureler">
          <li v-for="s in E.basvuru.seviyeler" :key="s.ad" :class="{ k: s.ad === 'YGU-K' }">
            <span>{{ s.ad }}</span>
            <strong>{{ s.sure }}</strong>
          </li>
        </ul>
      </div>

      <div class="icerik-kutu">
        <h3><Ikon ad="liste" />{{ E.egitim.icerik.baslik }}</h3>
        <ul class="tikli iki-sutun">
          <li v-for="m in E.egitim.icerik.maddeler" :key="m">{{ m }}</li>
        </ul>
      </div>

      <div class="mavi-izgara">
        <article class="mavi-kutu">
          <Ikon ad="katman" />
          <div>
            <h3>{{ E.egitim.uygulama.baslik }}</h3>
            <p>{{ E.egitim.uygulama.metin }}</p>
          </div>
        </article>
        <article class="mavi-kutu">
          <Ikon ad="sise" />
          <div>
            <h3>{{ E.egitim.odak.baslik }}</h3>
            <p>{{ E.egitim.odak.metin }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 03 Sınav -->
  <section id="sinav" class="eg-bolum" aria-labelledby="sinav-baslik">
    <div class="wrap">
      <header class="eg-baslik">
        <span class="eg-no">03</span>
        <div>
          <h2 id="sinav-baslik">{{ E.sinav.baslik }}</h2>
          <p class="eg-alt">{{ E.sinav.alt }}</p>
        </div>
      </header>
      <ol class="adimlar">
        <li v-for="(a, i) in E.sinav.adimlar" :key="a.baslik" class="adim">
          <div class="adim-ust">
            <span class="adim-no">{{ i + 1 }}</span>
            <h3>{{ a.baslik }}</h3>
          </div>
          <Ikon :ad="a.ikon" class="adim-ikon" />
          <p>{{ a.metin }}</p>
          <ul v-if="a.maddeler" class="tikli">
            <li v-for="m in a.maddeler" :key="m">{{ m }}</li>
          </ul>
        </li>
      </ol>
      <p class="eg-not"><Ikon ad="bilgi" />{{ E.sinav.not }}</p>
    </div>
  </section>

  <!-- 04 Belgelendirme -->
  <section id="belgelendirme" class="eg-bolum" aria-labelledby="belge-baslik">
    <div class="wrap">
      <header class="eg-baslik">
        <span class="eg-no">04</span>
        <div>
          <h2 id="belge-baslik">{{ E.belge.baslik }}</h2>
          <p class="eg-alt">{{ E.belge.alt }}</p>
        </div>
      </header>
      <div class="belge-izgara">
        <figure class="sertifika-kap">
          <div class="sertifika">
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
            </div>
          </div>
          <figcaption>{{ E.belge.sertifika.not }}</figcaption>
        </figure>

        <div class="belge-bilgi">
          <article class="bilgi">
            <Ikon ad="takvim" class="bilgi-ikon" />
            <div>
              <h3>{{ E.belge.gecerlilik.baslik }}</h3>
              <p class="gecerlilik"><strong>{{ E.belge.gecerlilik.deger }}</strong> <span>{{ E.belge.gecerlilik.metin }}</span></p>
            </div>
          </article>
          <article v-for="m in E.belge.maddeler" :key="m.baslik" class="bilgi">
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

  <!-- 05 Görevlendirme -->
  <section id="gorevlendirme" class="eg-bolum" aria-labelledby="gorev-baslik">
    <div class="wrap">
      <header class="eg-baslik">
        <span class="eg-no">05</span>
        <div>
          <h2 id="gorev-baslik">{{ E.gorev.baslik }}</h2>
          <p class="eg-alt">{{ E.gorev.alt }}</p>
        </div>
      </header>
      <ol class="adimlar">
        <li v-for="(a, i) in E.gorev.adimlar" :key="a.baslik" class="adim">
          <div class="adim-ust">
            <span class="adim-no">{{ i + 1 }}</span>
            <h3>{{ a.baslik }}</h3>
          </div>
          <Ikon :ad="a.ikon" class="adim-ikon" />
          <p>{{ a.metin }}</p>
        </li>
      </ol>
      <p class="eg-not"><Ikon ad="bilgi" />{{ E.gorev.not }}</p>
    </div>
  </section>

  <aside class="dayanak" aria-label="Bilgilendirme">
    <div class="wrap">
      <Ikon ad="bilgi" />
      <p>{{ E.dayanak[0] }} <span>{{ E.dayanak[1] }}</span></p>
    </div>
  </aside>
</template>

<style scoped>
/* HERO */
.sayfa-hero{position:relative;background:#0B0B0D;color:#fff;overflow:hidden;padding:22px 0 clamp(52px,6vw,84px)}
.sayfa-hero-bg{position:absolute;top:0;right:0;width:56%;height:100%;object-fit:cover;object-position:60% 50%;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 24%);mask-image:linear-gradient(90deg,transparent 0,#000 24%)}
.sayfa-hero .wrap{position:relative;z-index:2}
.kirinti{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px;margin-bottom:clamp(28px,3.4vw,44px)}
.kirinti a{display:inline-flex;align-items:center;gap:8px;text-decoration:none}
.kirinti .ikon{font-size:16px}
.sayfa-hero h1{font-family:var(--body);font-size:clamp(36px,3.9vw,56px);font-weight:700;line-height:1.1;max-width:640px}
.sayfa-hero h1 .satir{display:block}
.sayfa-hero p{font-size:clamp(16px,1.25vw,18px);line-height:1.6;margin:20px 0 0;max-width:560px;color:#ECE8E1}

/* ORTAK */
.eg-bolum{padding:clamp(44px,5.2vw,72px) 0;background:#fff}
.eg-bolum + .eg-bolum{border-top:1px solid var(--line)}
.eg-baslik{display:flex;align-items:flex-start;gap:clamp(16px,1.6vw,22px)}
.eg-no{display:grid;place-items:center;flex:none;width:62px;height:62px;border-radius:12px;background:linear-gradient(180deg,#FFC93C,#F5B000);font-family:var(--display);font-weight:800;font-size:32px;color:#111}
.eg-baslik h2{font-size:clamp(30px,2.8vw,40px);font-weight:800;line-height:1.05}
.eg-alt{margin:6px 0 0;font-family:var(--display);font-size:clamp(20px,1.7vw,24px);font-weight:700;line-height:1.15;color:#A8560F}
.eg-not{display:flex;align-items:center;gap:16px;margin:28px 0 0;padding:18px 24px;border-radius:12px;background:#FFF6DF;font-size:15.5px;line-height:1.6}
.eg-not .ikon{flex:none;font-size:30px;color:var(--amber-2)}
.tikli{list-style:none;margin:0;padding:0;display:grid;gap:10px;font-size:15px;line-height:1.5}
.tikli li{position:relative;padding-left:28px}
.tikli li::before{content:"";position:absolute;left:2px;top:6px;width:14px;height:7px;border-left:3px solid var(--amber-2);border-bottom:3px solid var(--amber-2);transform:rotate(-45deg)}

/* 01 */
.basvuru-izgara{display:grid;grid-template-columns:minmax(280px,340px) minmax(0,1fr);gap:clamp(28px,3.4vw,48px);align-items:start}
.basvuru-metin{margin:20px 0 0 84px}
.basvuru-metin .ikon{display:block;font-size:44px}
.basvuru-metin p{margin:12px 0 0;font-size:16px;line-height:1.6}
.seviyeler{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.seviyeler li{display:grid;grid-template-columns:116px 34px minmax(0,1fr);gap:18px;align-items:center;padding:10px 22px 10px 12px;border-radius:12px;background:#F4F4F4}
.seviye{display:grid;place-items:center;min-height:58px;border-radius:9px;background:#141414;color:#fff;font-family:var(--display);font-weight:800;font-size:24px}
.seviye.k{background:var(--amber);color:#111}
.seviyeler .ikon{font-size:32px}
.seviyeler p{margin:0;font-size:15.5px;line-height:1.5}

/* 02 */
.sure-izgara{display:grid;grid-template-columns:minmax(280px,340px) minmax(0,1fr);gap:clamp(28px,3.4vw,48px);align-items:center}
.sureler{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
.sureler li{overflow:hidden;border-radius:12px;text-align:center;box-shadow:0 12px 22px -16px rgba(0,0,0,.45)}
.sureler span{display:block;padding:9px 6px;background:#141414;color:#fff;font-family:var(--display);font-weight:800;font-size:22px}
.sureler .k span{background:var(--amber);color:#111}
.sureler strong{display:block;padding:18px 6px;background:linear-gradient(180deg,#FFF3C9,#FFE08A);font-family:var(--display);font-weight:800;font-size:clamp(30px,3vw,42px);line-height:1}
.icerik-kutu{display:grid;grid-template-columns:minmax(220px,300px) minmax(0,1fr);gap:32px;align-items:center;margin-top:28px;padding:26px 30px;border:1px solid var(--line);border-radius:14px}
.icerik-kutu h3{display:flex;align-items:center;gap:16px;font-size:26px;padding-right:24px}
.icerik-kutu h3 .ikon{flex:none;font-size:44px;color:var(--amber-2)}
.icerik-kutu .tikli{padding-left:32px;border-left:2px solid var(--amber)}
.iki-sutun{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:28px}
.mavi-izgara{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;margin-top:22px}
.mavi-kutu{display:flex;gap:20px;padding:26px 28px;border-radius:14px;background:#EEF3FA}
.mavi-kutu > .ikon{flex:none;font-size:50px;color:var(--amber-2)}
.mavi-kutu h3{font-size:24px}
.mavi-kutu p{margin:8px 0 0;font-size:15.5px;line-height:1.6}

/* 03 + 05 */
.adimlar{list-style:none;margin:30px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(24px,2.8vw,40px)}
.adim{position:relative;padding:22px;border:1px solid var(--line);border-radius:14px;background:#fff}
.adim-ust{display:flex;align-items:flex-start;gap:12px;min-height:48px}
.adim-no{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:7px;background:var(--amber);font-family:var(--display);font-weight:800;font-size:21px}
.adim h3{font-size:20px;line-height:1.15}
.adim-ikon{display:block;margin:14px 0 12px;font-size:38px}
.adim p{margin:0;font-size:15px;line-height:1.6}
.adim .tikli{margin-top:10px;font-size:14.5px}
.adim:not(:last-child)::after{content:"";position:absolute;top:50%;right:calc(-1 * clamp(24px,2.8vw,40px) / 2 - 6px);width:12px;height:12px;border-top:3px solid var(--amber-2);border-right:3px solid var(--amber-2);transform:translateY(-50%) rotate(45deg)}

/* 04 */
.belge-izgara{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:clamp(28px,3.4vw,48px);align-items:start;margin-top:30px}
.sertifika-kap{margin:0}
.sertifika-kap figcaption{margin-top:12px;font-size:14px;font-weight:600;text-align:center}
.sertifika{padding:10px;border-radius:8px;background:linear-gradient(135deg,#E9C46A,#B98A2C 45%,#F2D488);box-shadow:0 26px 44px -28px rgba(0,0,0,.55)}
.sertifika-ic{display:flex;flex-direction:column;align-items:center;text-align:center;padding:clamp(20px,2.4vw,30px) clamp(18px,2.4vw,32px);border-radius:3px;background:#FFFDF6}
.muhur{display:grid;place-items:center;width:58px;height:58px;border-radius:50%;background:#C8102E;color:#fff;font-size:32px;box-shadow:0 0 0 3px #FFFDF6,0 0 0 5px #C8102E}
.s-ust{margin-top:12px;font-weight:700;font-size:13px}
.s-kurum{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;color:#3A3835}
.s-ad{margin-top:12px;max-width:340px;font-family:var(--display);font-size:clamp(21px,2vw,27px);line-height:1.12;text-transform:uppercase}
.s-alt{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;width:100%;margin-top:20px;text-align:left}
.s-alt dl{display:grid;grid-template-columns:auto 1fr;gap:9px 12px;margin:0;flex:1;font-size:13.5px}
.s-alt dt{font-weight:500}
.s-alt dt::after{content:":";margin-left:8px}
.s-alt dd{margin:0;min-width:70px;height:14px;align-self:end;border-bottom:1.5px solid #A9A49B}
.qr{flex:none;width:76px;height:76px;background:#fff;fill:#111}
.belge-bilgi{display:grid;gap:16px}
.bilgi{display:flex;gap:20px;align-items:flex-start;padding:20px 24px;border:1px solid var(--line);border-radius:14px}
.bilgi-ikon{flex:none;font-size:38px}
.bilgi h3{font-size:22px}
.bilgi p{margin:8px 0 0;font-size:15px;line-height:1.6}
.gecerlilik{display:flex;align-items:center;gap:18px}
.gecerlilik strong{flex:none;font-family:var(--display);font-weight:800;font-size:44px;line-height:1}

/* DAYANAK */
.dayanak{padding:22px 0;background:#141414;color:#D9D6D0}
.dayanak .wrap{display:flex;align-items:center;gap:18px}
.dayanak .ikon{flex:none;font-size:28px;color:#fff}
.dayanak p{margin:0;font-size:14px;line-height:1.55}
.dayanak span{display:block;font-size:13px;color:#B9B5AE}

@media (max-width:1100px){
  .adimlar{grid-template-columns:repeat(2,minmax(0,1fr))}
  .adim:nth-child(2)::after{display:none}
  .basvuru-izgara,.sure-izgara,.icerik-kutu{grid-template-columns:1fr}
  .belge-izgara{grid-template-columns:1fr}
  .sertifika-kap{max-width:560px}
  .icerik-kutu .tikli{padding-left:0;padding-top:18px;border-left:0;border-top:2px solid var(--amber)}
}
@media (max-width:760px){
  .sayfa-hero-bg{width:100%;opacity:.3;-webkit-mask-image:none;mask-image:none}
  .mavi-izgara,.iki-sutun{grid-template-columns:1fr}
  .sureler{grid-template-columns:repeat(2,minmax(0,1fr))}
  .seviyeler li{grid-template-columns:96px minmax(0,1fr);padding-right:14px}
  .seviyeler .ikon{display:none}
  .basvuru-metin{margin-left:0}
  .eg-not{align-items:flex-start;padding:16px}
}
@media (max-width:560px){
  .adimlar{grid-template-columns:1fr}
  .adim::after{display:none}
  .gecerlilik{flex-direction:column;align-items:flex-start;gap:8px}
  .s-alt{flex-direction:column;align-items:stretch}
  .qr{align-self:flex-end}
}
</style>
