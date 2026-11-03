<script setup lang="ts">
// YGU Ön Kayıt: design/on-kayit-2.jpeg (3 Kasım 2026; kullanıcı: tasarım dar, dikeyde ferah yapılsın). Üst menü/alt bilgi sitenin kendisi.
// Form backend'e (ygu_backend) kaydedilir, başvurular panelden görülür; mail gönderilmez.
import { SITE, ON_KAYIT_SAYFA as S } from '~/data/icerik'

const YOL = '/on-kayit'

useSayfaSeo({
  baslik: 'Yangın Güvenlik Uzmanı Olmak İçin Ön Kayıt | YGU Rehberi',
  aciklama:
    'YGU eğitimleri için ön kaydınızı oluşturun; eğitim takvimi, başvuru süreci ve önemli bilgilendirmelerden ilk siz haberdar olun.',
  yol: YOL,
  gorsel: '/img/on-kayit-hero-2.webp',
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

useHead({ link: [{ rel: 'preload', as: 'image', href: '/img/on-kayit-hero-2.webp', fetchpriority: 'high' }] })

const { apiUrl } = useRuntimeConfig().public
// web_sitesi: ekranda görünmeyen alan; yalnız botlar doldurur.
const form = reactive({ ad: '', eposta: '', telefon: '', mezuniyet: '', seviye: '', kvkk: false, web_sitesi: '' })
const gonderildi = ref(false)
const gonderiliyor = ref(false)
const hata = ref('')

async function gonder() {
  if (gonderiliyor.value) return
  gonderiliyor.value = true
  hata.value = ''
  try {
    await $fetch(`${apiUrl}/api/on-kayit`, { method: 'POST', body: form })
    gonderildi.value = true
  } catch (e) {
    const yanit = e as { status?: number; data?: { message?: string } }
    if (yanit.status === 422) hata.value = yanit.data?.message ?? 'Lütfen bilgilerinizi kontrol edin.'
    else if (yanit.status === 429) hata.value = 'Kısa sürede çok fazla deneme yapıldı. Lütfen bir dakika sonra tekrar deneyin.'
    else hata.value = 'Ön kaydınız şu anda alınamadı. Lütfen biraz sonra tekrar deneyin.'
  } finally {
    gonderiliyor.value = false
  }
}
</script>

<template>
  <section class="ok-hero" aria-labelledby="sayfa-baslik">
    <img class="ok-hero-foto" src="/img/on-kayit-hero-2.webp" alt="" width="1508" height="486" fetchpriority="high">
    <div class="wrap">
      <div class="ok-hero-ic">
        <span class="ust">{{ S.ust }}</span>
        <h1 id="sayfa-baslik">{{ S.baslik }} <span class="vurgu">{{ S.vurgu }}</span></h1>
        <p>{{ S.metin }}</p>
        <a href="#on-kayit-formu" class="btn btn-amber ok-hero-dugme">{{ S.heroDugme }} <Ikon ad="ok" /></a>
      </div>
    </div>
  </section>

  <div class="wrap">
    <section class="bant" aria-label="İlk YGU eğitimi">
      <span class="bant-ikon"><Ikon ad="takvim" /></span>
      <h2>{{ S.bant.baslik }} <span class="vurgu">{{ S.bant.vurgu }}</span></h2>
      <p>{{ S.bant.metin }}</p>
      <img class="bant-foto" src="/img/on-kayit-bant.webp" alt="" width="502" height="138" loading="lazy">
    </section>
  </div>

  <section class="kayit" aria-labelledby="form-baslik">
    <div class="wrap kayit-izgara">
      <ul class="maddeler">
        <li v-for="m in S.maddeler" :key="m.baslik">
          <Ikon :ad="m.ikon" />
          <div>
            <h3>{{ m.baslik }}</h3>
            <p>{{ m.metin }}</p>
          </div>
        </li>
      </ul>

      <div id="on-kayit-formu" class="form-kart">
        <div class="form-bas">
          <Ikon ad="belge" />
          <div>
            <h2 id="form-baslik">{{ S.form.baslik }}</h2>
            <p>{{ S.form.metin }}</p>
          </div>
        </div>

        <form v-if="!gonderildi" @submit.prevent="gonder">
          <div class="cift">
            <label class="alan">
              <Ikon ad="kullanici" />
              <span class="alan-ic">
                <span class="etiket">Adınız Soyadınız <b aria-hidden="true">*</b></span>
                <input v-model.trim="form.ad" type="text" name="ad" autocomplete="name" required>
              </span>
            </label>
            <label class="alan">
              <Ikon ad="eposta" />
              <span class="alan-ic">
                <span class="etiket">E-posta Adresiniz <b aria-hidden="true">*</b></span>
                <input v-model.trim="form.eposta" type="email" name="eposta" autocomplete="email" required>
              </span>
            </label>
          </div>
          <label class="alan">
            <Ikon ad="telefon" />
            <span class="alan-ic">
              <span class="etiket">Telefon Numaranız <b aria-hidden="true">*</b></span>
              <input
                v-model.trim="form.telefon" type="tel" name="telefon" autocomplete="tel" inputmode="tel"
                placeholder="(5XX) XXX XX XX" pattern="[0-9 +\(\)\-]{10,20}" required
              >
            </span>
          </label>
          <label class="alan">
            <Ikon ad="kep" />
            <span class="alan-ic">
              <span class="etiket">Mezuniyet Alanınız / Bölümünüz <b aria-hidden="true">*</b></span>
              <input v-model.trim="form.mezuniyet" type="text" name="mezuniyet" placeholder="Örn. Makine Mühendisliği" minlength="2" maxlength="120" required>
            </span>
          </label>

          <fieldset class="seviye">
            <legend><Ikon ad="katman" /> İlgilendiğiniz YGU Seviyesi <b aria-hidden="true">*</b></legend>
            <div class="seviye-izgara">
              <label v-for="s in S.form.seviyeler" :key="s" class="seviye-kutu">
                <input v-model="form.seviye" type="radio" name="seviye" :value="s" required>
                <span>{{ s }}</span>
              </label>
            </div>
          </fieldset>

          <div class="bilgi">
            <Ikon ad="soru" />
            <div>
              <strong>{{ S.form.bilgiBaslik }}</strong>
              <span>{{ S.form.bilgiMetin }}</span>
            </div>
            <NuxtLink :to="S.form.bilgiTo" target="_blank" class="bilgi-dugme">{{ S.form.bilgiDugme }} <Ikon ad="disLink" /></NuxtLink>
          </div>

          <label class="onay">
            <input v-model="form.kvkk" type="checkbox" name="kvkk" required>
            <span>Kişisel verilerimin belirtilen amaçlarla işlenmesine ilişkin <NuxtLink to="/kvkk-aydinlatma-metni" target="_blank" class="kvkk">Aydınlatma Metni</NuxtLink>’ni okudum, kabul ediyorum. <b aria-hidden="true">*</b></span>
          </label>
          <input v-model="form.web_sitesi" type="text" name="web_sitesi" class="bot-alani" tabindex="-1" autocomplete="off" aria-hidden="true">
          <p v-if="hata" class="form-hata" role="alert">{{ hata }}</p>
          <button type="submit" class="btn btn-amber form-dugme" :disabled="gonderiliyor"><Ikon ad="gonder" /> {{ gonderiliyor ? 'Gönderiliyor…' : S.form.dugme }}</button>
        </form>
        <p v-else class="form-tesekkur" role="status">
          Teşekkürler {{ form.ad.split(' ')[0] }}! Ön kaydınız alındı. Gelişmeler olduğunda {{ form.eposta }} adresine bilgi vereceğiz.
        </p>
      </div>
    </div>
  </section>

  <section class="wrap kartlar" aria-label="Öğrenme kaynakları">
    <NuxtLink v-for="k in S.kartlar" :key="k.to" :to="k.to" class="kaynak">
      <img :src="k.gorsel" alt="" width="1088" height="336" loading="lazy">
      <div class="kaynak-alt">
        <div>
          <h2><Ikon :ad="k.ikon" /> {{ k.baslik }}</h2>
          <p>{{ k.metin }}</p>
        </div>
        <span class="kaynak-dugme">{{ k.dugme }} <Ikon ad="ok" /></span>
      </div>
    </NuxtLink>
  </section>

  <div class="wrap">
    <section class="takip" aria-labelledby="takip-baslik">
      <span class="takip-ikon"><Ikon ad="megafon" /></span>
      <div class="takip-metin">
        <h2 id="takip-baslik">{{ S.takip.baslik }}</h2>
        <p>{{ S.takip.metin }}</p>
      </div>
      <ul class="takip-ogeler">
        <li v-for="o in S.takip.ogeler" :key="o.ad"><Ikon :ad="o.ikon" />{{ o.ad }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
/* Hero: tasarımda dar; dikeyde ferah (kullanıcı 3 Kasım) */
.ok-hero{position:relative;background:#0B1220;color:#fff;overflow:hidden;min-height:clamp(440px,38vw,560px);display:flex;align-items:center}
.ok-hero-foto{position:absolute;right:0;top:0;width:64%;height:100%;object-fit:cover;object-position:40% 40%;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 32%);mask-image:linear-gradient(90deg,transparent 0%,#000 32%)}
.ok-hero .wrap{position:relative;z-index:1;width:100%}
.ok-hero-ic{max-width:560px;padding:clamp(56px,6vw,88px) 0}
.ok-hero .ust{color:var(--amber);font-size:clamp(14px,1.2vw,17px)}
.ok-hero h1{font-size:clamp(46px,5.4vw,78px);font-weight:800;line-height:.98}
.ok-hero h1 .vurgu{display:inline}
.ok-hero-ic p{margin:22px 0 32px;color:#E4E0D9;font-size:clamp(16px,1.3vw,18px);max-width:500px}
.ok-hero-dugme{min-height:56px;padding:0 30px;border-radius:999px;font-size:20px}
@media (max-width:860px){
  .ok-hero-foto{width:100%;opacity:.35;-webkit-mask-image:none;mask-image:none}
  .ok-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,18,32,.55),rgba(11,18,32,.9))}
}

/* Bant */
.bant{position:relative;display:grid;grid-template-columns:auto auto 1fr;align-items:center;gap:28px;margin-top:32px;background:#121212;color:#fff;border-radius:16px;padding:30px 36px;overflow:hidden;min-height:120px}
.bant-ikon{display:grid;place-items:center;width:64px;height:64px;border:2px solid var(--amber);border-radius:12px;color:var(--amber);font-size:34px}
.bant h2{font-size:clamp(28px,2.8vw,40px);padding-right:28px;border-right:2px solid rgba(255,255,255,.5)}
.bant p{position:relative;z-index:1;margin:0;color:#E4E0D9;font-size:15.5px;max-width:420px}
.bant-foto{position:absolute;right:0;top:0;height:100%;width:34%;object-fit:cover;-webkit-mask-image:linear-gradient(90deg,transparent,#000 45%);mask-image:linear-gradient(90deg,transparent,#000 45%)}
@media (max-width:980px){.bant{grid-template-columns:auto 1fr}.bant h2{border-right:0;padding-right:0}.bant p{grid-column:1/-1;max-width:none}.bant-foto{opacity:.35;width:50%}}
@media (max-width:520px){.bant{padding:24px 20px;gap:18px}.bant-ikon{width:52px;height:52px;font-size:28px}}

/* Maddeler + form */
.kayit{padding:clamp(40px,5vw,64px) 0}
.kayit-izgara{display:grid;grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);gap:clamp(24px,3vw,40px);align-items:stretch}
.maddeler{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:20px}
.maddeler li{flex:1;display:flex;align-items:center;gap:24px;background:#F3F4F6;border-radius:14px;padding:32px 30px}
.maddeler li > .ikon{font-size:50px;color:#111}
.maddeler h3{font-size:clamp(24px,2vw,28px);line-height:1.08}
.maddeler p{margin:8px 0 0;color:#3F3C38;font-size:15.5px;line-height:1.5}

.form-kart{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 18px 44px -26px rgba(0,0,0,.35);padding:clamp(24px,3vw,40px)}
.form-bas{display:flex;align-items:flex-start;gap:16px;margin-bottom:26px}
.form-bas > .ikon{font-size:46px;color:var(--amber-2)}
.form-bas h2{font-size:clamp(28px,2.6vw,36px)}
.form-bas p{margin:6px 0 0;color:var(--muted);font-size:15px}
.form-kart form{display:grid;gap:16px}
.cift{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.alan{display:flex;align-items:center;gap:14px;border:1px solid #D6D3CE;border-radius:10px;padding:10px 16px;min-height:68px;transition:border-color .2s}
.alan:focus-within{border-color:var(--amber-2)}
.alan > .ikon{font-size:22px;color:#2B2926}
.alan-ic{flex:1;min-width:0;display:flex;flex-direction:column}
.etiket{font-weight:600;font-size:15px;color:#1B1B1B}
b{color:#D92D20}
.alan input{border:0;outline:0;background:none;font:inherit;font-size:15px;color:#111;padding:4px 0 0;min-height:28px}
.alan input::placeholder{color:#8A867F}

.seviye{border:0;margin:6px 0 0;padding:0}
.seviye legend{display:flex;align-items:center;gap:10px;font-weight:600;font-size:16px;padding:0;margin-bottom:12px}
.seviye legend .ikon{font-size:24px;color:var(--amber-2)}
.seviye-izgara{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.seviye-kutu{display:flex;align-items:center;gap:12px;border:1px solid #D6D3CE;border-radius:10px;padding:0 16px;min-height:56px;cursor:pointer;font-weight:600;font-size:17px;transition:border-color .2s,background .2s}
.seviye-kutu input{width:20px;height:20px;margin:0;accent-color:var(--amber-2)}
.seviye-kutu:has(input:checked){border-color:var(--amber-2);background:#FFF8E1}
.seviye-kutu:focus-within{border-color:var(--amber-2)}

.bilgi{display:flex;align-items:center;gap:16px;background:#EAF4FB;border-radius:10px;padding:18px 20px;margin-top:4px}
.bilgi > .ikon{font-size:30px;color:#0E9384}
.bilgi > div{flex:1;display:flex;flex-direction:column;font-size:14.5px;line-height:1.45}
.bilgi strong{font-weight:600}
.bilgi span{color:#3F3C38}
.bilgi-dugme{display:inline-flex;align-items:center;gap:8px;border:1.5px solid #1D4ED8;color:#1D4ED8;border-radius:8px;padding:10px 14px;font-size:14px;font-weight:600;text-decoration:none;white-space:nowrap;background:#fff}
.bilgi-dugme:hover{background:#1D4ED8;color:#fff}

.onay{display:flex;gap:14px;align-items:flex-start;font-size:15px;color:#2B2926;margin:6px 0 2px;line-height:1.5}
.onay input{width:22px;height:22px;flex:none;margin-top:1px;accent-color:var(--amber-2)}
.kvkk{color:#1D4ED8}
.form-dugme{width:100%;min-height:62px;font-size:22px;margin-top:4px}
.form-dugme:disabled{opacity:.65;cursor:wait}
.form-hata{margin:0;padding:12px 14px;border-radius:8px;background:#FDECEA;color:#B42318;font-size:14.5px}
.bot-alani{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}
.form-tesekkur{background:#FFF8E1;border:1px solid #FBE3A0;border-radius:10px;padding:20px;margin:0;font-weight:600}

@media (max-width:1060px){.kayit-izgara{grid-template-columns:1fr}.maddeler{display:grid;grid-template-columns:1fr 1fr}.form-kart{order:-1}}
@media (max-width:640px){
  .maddeler{grid-template-columns:1fr}.maddeler li{padding:24px 20px;gap:18px}.maddeler li > .ikon{font-size:40px}
  .cift{grid-template-columns:1fr}.seviye-izgara{grid-template-columns:1fr 1fr}
  .bilgi{flex-wrap:wrap}.bilgi-dugme{width:100%;justify-content:center}
}

/* Kaynak kartları */
.kartlar{display:grid;grid-template-columns:1fr 1fr;gap:clamp(20px,2.4vw,32px);padding-bottom:clamp(40px,5vw,64px)}
.kaynak{display:flex;flex-direction:column;background:#121212;color:#fff;border-radius:16px;overflow:hidden;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}
.kaynak:hover{transform:translateY(-4px);box-shadow:0 22px 40px -24px rgba(0,0,0,.5)}
.kaynak img{width:100%;height:clamp(200px,20vw,280px);object-fit:cover}
.kaynak-alt{flex:1;display:flex;align-items:center;gap:24px;padding:28px 30px 32px}
.kaynak h2{display:flex;align-items:center;gap:12px;font-size:clamp(28px,2.6vw,38px)}
.kaynak h2 .ikon{color:var(--amber);font-size:.9em}
.kaynak p{margin:10px 0 0;color:#D9D5CE;font-size:15px;line-height:1.5}
.kaynak-dugme{display:inline-flex;align-items:center;gap:10px;flex:none;padding-left:24px;border-left:1px solid rgba(255,255,255,.3);align-self:stretch;color:var(--amber);font-family:var(--display);font-weight:700;font-size:20px;white-space:nowrap}
@media (max-width:900px){.kartlar{grid-template-columns:1fr}}
@media (max-width:520px){.kaynak-alt{flex-direction:column;align-items:flex-start;padding:22px 20px 26px}.kaynak-dugme{padding-left:0;border-left:0}}

/* Takip bandı */
.takip{display:flex;align-items:center;gap:28px;background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 14px 36px -26px rgba(0,0,0,.35);padding:32px 36px;margin-bottom:clamp(48px,6vw,80px)}
.takip-ikon{display:grid;place-items:center;flex:none;width:84px;height:84px;border-radius:12px;background:#FFE08A;color:#111;font-size:46px}
.takip-metin{flex:1;padding-right:28px;border-right:1px solid var(--line)}
.takip-metin h2{font-size:clamp(28px,2.8vw,40px)}
.takip-metin p{margin:10px 0 0;color:#3F3C38;font-size:15.5px;max-width:520px}
.takip-ogeler{list-style:none;margin:0;padding:0;display:flex;gap:clamp(20px,3vw,44px)}
.takip-ogeler li{display:flex;flex-direction:column;align-items:center;gap:10px;font-family:var(--display);font-weight:700;font-size:22px;white-space:nowrap}
.takip-ogeler li::after{content:"";width:72px;height:5px;border-radius:3px;background:var(--amber)}
.takip-ogeler .ikon{font-size:38px}
@media (max-width:1060px){.takip{flex-wrap:wrap}.takip-metin{flex-basis:calc(100% - 112px);border-right:0;padding-right:0}.takip-ogeler{width:100%;justify-content:space-around}}
@media (max-width:520px){.takip{padding:24px 20px}.takip-ikon{width:64px;height:64px;font-size:34px}.takip-metin{flex-basis:100%}.takip-ogeler li{font-size:18px}}
</style>
