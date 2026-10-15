<script setup lang="ts">
// YGU Ön Kayıt: design/on-kayit.jpeg (içerik yerleşimi aynı; üst menü/alt bilgi sitenin kendisi).
// TODO: form henüz bir yere gönderilmiyor (statik site, sunucu yok). Gönderim yolu kullanıcıdan bekleniyor; KVKK metni de.
import { SITE, ON_KAYIT_SAYFA as S, ILLER } from '~/data/icerik'

const YOL = '/on-kayit'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı Olmak İçin Ön Kayıt | YGU Rehberi',
  aciklama:
    'Yangın güvenlik uzmanı (YGU) olmak için ön kaydınızı yapın; eğitim, sınav ve belgelendirme süreciyle ilgili güncel bilgilendirmeleri ilk siz alın.',
  yol: YOL,
  gorsel: '/img/on-kayit-hero.webp',
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'YGU Ön Kayıt',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` },
      breadcrumb: { '@id': `${SITE.url}${YOL}#yol` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}${YOL}#yol`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'YGU Ön Kayıt', item: `${SITE.url}${YOL}` }
      ]
    }
  ]
})

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/on-kayit-hero.webp', fetchpriority: 'high' }] })

const form = reactive({ ad: '', eposta: '', telefon: '', il: '', kvkk: false })
const gonderildi = ref(false)

function gonder() {
  // TODO: gönderim yolu belirlenince buraya bağlanacak.
  gonderildi.value = true
}
</script>

<template>
  <section class="ok-hero" aria-labelledby="sayfa-baslik">
    <img class="ok-hero-bg" src="/img/on-kayit-hero.webp" alt="" width="1536" height="1024" fetchpriority="high">
    <div class="wrap">
      <span class="cizgi" />
      <h1 id="sayfa-baslik"><span class="h1-ust">Yangın Güvenlik Uzmanı Olmak İçin</span> {{ S.baslik }} <span class="vurgu">{{ S.vurgu }}</span></h1>
      <p class="ok-hero-alt">{{ S.alt }}</p>
      <p class="ok-hero-metin">{{ S.metin }}</p>
    </div>
  </section>

  <section class="bolum" aria-labelledby="neden-baslik">
    <div class="wrap">
      <span class="cizgi" />
      <h2 id="neden-baslik" class="b-baslik">{{ S.neden.baslik }}</h2>
      <p class="b-alt">{{ S.neden.metin }}</p>
      <ul class="neden">
        <li v-for="m in S.neden.maddeler" :key="m.baslik">
          <span class="neden-ikon"><Ikon :ad="m.ikon" /></span>
          <h3>{{ m.baslik }}</h3>
          <p>{{ m.metin }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="form-bolum" aria-labelledby="form-baslik">
    <div class="wrap">
      <div class="form-kutu">
        <img class="form-bg" src="/img/on-kayit-form.webp" alt="" width="1536" height="1024" loading="lazy">
        <div class="form-sol">
          <span class="cizgi" />
          <h2>{{ S.form.sol }}</h2>
          <p>{{ S.form.solMetin }}</p>
        </div>

        <div class="form-kart">
          <h2 id="form-baslik">{{ S.form.baslik }}</h2>
          <p class="form-aciklama">{{ S.form.metin }}</p>

          <form v-if="!gonderildi" @submit.prevent="gonder">
            <label class="alan">
              <Ikon ad="kullanici" />
              <span class="sr-only">Ad Soyad</span>
              <input v-model.trim="form.ad" type="text" name="ad" autocomplete="name" placeholder="Ad Soyad" required>
            </label>
            <label class="alan">
              <Ikon ad="eposta" />
              <span class="sr-only">E-posta adresi</span>
              <input v-model.trim="form.eposta" type="email" name="eposta" autocomplete="email" placeholder="E-posta Adresi" required>
            </label>
            <label class="alan">
              <Ikon ad="telefon" />
              <span class="sr-only">Telefon numarası</span>
              <input
                v-model.trim="form.telefon" type="tel" name="telefon" autocomplete="tel" inputmode="tel"
                placeholder="Telefon Numarası" pattern="[0-9 +()\-]{10,20}" required
              >
            </label>
            <label class="alan">
              <Ikon ad="konum" />
              <span class="sr-only">İl</span>
              <select v-model="form.il" name="il" required :class="{ bos: !form.il }">
                <option value="" disabled>İl Seçiniz</option>
                <option v-for="il in ILLER" :key="il" :value="il">{{ il }}</option>
              </select>
              <Ikon ad="asagi" class="alan-ok" />
            </label>
            <label class="onay">
              <input v-model="form.kvkk" type="checkbox" name="kvkk" required>
              <!-- TODO: KVKK Aydınlatma Metni sayfası/dosyası gelince bağlanacak. -->
              <span><a href="#" class="kvkk" @click.prevent>KVKK Aydınlatma Metni <Ikon ad="disLink" /></a>'ni okudum, anladım.</span>
            </label>
            <button type="submit" class="btn btn-amber form-dugme">{{ S.form.dugme }} <Ikon ad="ok" /></button>
          </form>
          <p v-else class="form-tesekkur" role="status">
            Teşekkürler {{ form.ad.split(' ')[0] }}! Ön kayıt sistemi çok yakında açılıyor; açıldığında {{ form.eposta }} adresine bilgi vereceğiz.
          </p>
          <p class="gizlilik"><Ikon ad="kilit" />{{ S.form.gizlilik }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="slogan" aria-label="Slogan">
    <img class="slogan-bg" src="/img/yapi-buro.webp" alt="" width="1536" height="1024" loading="lazy">
    <div class="wrap slogan-ic">
      <BrandLogo koyu height="78px" />
      <p>{{ S.slogan }}</p>
    </div>
  </section>
</template>

<style scoped>
/* Hero */
.ok-hero{position:relative;background:var(--ink);color:#fff;overflow:hidden;padding:clamp(44px,5vw,64px) 0 clamp(48px,6vw,72px)}
.ok-hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:75% 40%}
.ok-hero::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.96) 0%,rgba(14,14,14,.82) 34%,rgba(14,14,14,.15) 65%)}
.ok-hero .wrap{position:relative;z-index:2}
.ok-hero h1{font-size:clamp(56px,7vw,100px);font-weight:800;line-height:.95}
.ok-hero h1 .vurgu{display:block}
.ok-hero-alt{font-family:var(--display);font-weight:700;font-size:clamp(20px,1.9vw,26px);line-height:1.2;max-width:380px;margin:22px 0 14px}
.ok-hero-metin{max-width:430px;margin:0;color:#E4E0D9;font-size:15px}

.b-baslik{font-size:clamp(34px,3.6vw,48px)}
.b-alt{margin:10px 0 0;color:var(--muted);font-size:17px;max-width:620px}

/* Neden */
.neden{list-style:none;margin:36px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,1fr)}
.neden li{padding:0 24px;border-left:1px solid var(--line)}
.neden li:first-child{padding-left:0;border-left:0}
.neden-ikon{display:grid;place-items:center;width:58px;height:58px;border-radius:50%;background:var(--amber);color:#111;font-size:28px}
.neden h3{font-size:22px;margin-top:14px}
.neden p{margin:8px 0 0;color:var(--muted);font-size:15px;line-height:1.5}
@media (max-width:900px){.neden{grid-template-columns:1fr 1fr;row-gap:28px}.neden li:nth-child(3){padding-left:0;border-left:0}}
@media (max-width:520px){.neden{grid-template-columns:1fr}.neden li{padding-left:0;border-left:0}}

/* Form bloğu */
.form-bolum{padding:0 0 clamp(48px,6vw,80px)}
.form-kutu{position:relative;display:grid;grid-template-columns:1fr minmax(320px,440px);gap:32px;align-items:center;background:var(--ink);border-radius:14px;overflow:hidden;padding:clamp(24px,3vw,36px)}
.form-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:30% 60%}
.form-kutu::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(14,14,14,.85) 0%,rgba(14,14,14,.45) 55%,rgba(14,14,14,.2) 100%)}
.form-sol,.form-kart{position:relative;z-index:2}
.form-sol{color:#fff;align-self:start;padding:24px 12px}
.form-sol h2{font-size:clamp(32px,3.3vw,44px);max-width:360px}
.form-sol p{max-width:360px;color:#ECE8E1;margin:16px 0 0}
.form-kart{background:#fff;border-radius:12px;padding:28px 28px 22px}
.form-kart h2{font-size:30px}
.form-aciklama{margin:8px 0 20px;color:var(--muted);font-size:14.5px}
.form-kart form{display:grid;gap:10px}
.alan{position:relative;display:flex;align-items:center;gap:12px;border:1px solid var(--line);border-radius:8px;padding:0 14px;transition:border-color .2s}
.alan:focus-within{border-color:var(--amber-2)}
.alan > .ikon{font-size:19px;color:#4A4640}
.alan input,.alan select{flex:1;min-width:0;border:0;outline:0;background:none;font:inherit;font-size:15px;color:#111;min-height:46px;appearance:none}
.alan select.bos{color:#8A867F}
.alan-ok{position:absolute;right:14px;font-size:16px;pointer-events:none;color:#4A4640}
.onay{display:flex;gap:10px;align-items:center;font-size:14px;color:var(--muted);margin:6px 0 4px}
.onay input{width:18px;height:18px;accent-color:var(--amber-2)}
.kvkk{color:#1D4ED8;display:inline-flex;align-items:center;gap:4px}
.form-dugme{width:100%;min-height:52px;font-size:18px}
.form-tesekkur{background:#FFF8E1;border:1px solid #FBE3A0;border-radius:8px;padding:16px;margin:0;font-weight:600}
.gizlilik{display:flex;align-items:center;gap:10px;margin:14px 0 0;font-size:13px;color:var(--muted)}
.gizlilik .ikon{font-size:16px;color:#111}
@media (max-width:900px){.form-kutu{grid-template-columns:1fr}.form-sol{padding:8px 4px}}

/* Slogan bandı */
.slogan{position:relative;background:var(--paper-2);overflow:hidden}
.slogan-bg{position:absolute;right:0;top:0;width:52%;height:100%;object-fit:cover;opacity:.9;-webkit-mask-image:linear-gradient(90deg,transparent,#000 45%);mask-image:linear-gradient(90deg,transparent,#000 45%)}
.slogan-ic{position:relative;display:flex;align-items:center;gap:32px;min-height:170px}
.slogan-ic p{margin:0;padding-left:32px;border-left:1px solid #CFCAC3;font-size:clamp(22px,2.2vw,30px);line-height:1.25;max-width:440px;color:#1B1B1B}
@media (max-width:640px){.slogan-bg{display:none}.slogan-ic{flex-direction:column;align-items:flex-start;gap:16px;padding-top:28px;padding-bottom:28px}.slogan-ic p{padding-left:0;border-left:0}}
</style>
