<script setup lang="ts">
// Site içi arama: site metinleri data/icerik.ts'den tarayıcıda, teknik makaleler backend'de (ygu_backend) aranır; sonuç ilgili bölüme götürür.
import { HIZLI_KARTLAR, CALISMA_ALANLARI, YGU_YOLU, GOREVLER, SEVIYELER, REHBERLER, KONTROL_SURELERI, SSS, EGITIM_SAYFA, SERBEST_SAYFA } from '~/data/icerik'
import { KONULAR } from '~/data/konular'
import { konuYolu } from '~/data/yguBilgi'
import { VAKA_SAYFA } from '~/data/vakalar'
import { YGU_KATEGORILER, YGU_MAKALELER, yguKategori } from '~/data/yguBilgi'

const props = defineProps<{ otomatikOdak?: boolean; buyuk?: boolean }>()

const DIZIN = [
  ...HIZLI_KARTLAR.map((k) => ({ baslik: k.baslik, metin: k.metin, to: k.to })),
  ...CALISMA_ALANLARI.yapilar.map((y) => ({ baslik: `${y.ad} ${y.alt}`, metin: 'Çalışma alanları', to: '/calisma-alanlari' })),
  { baslik: 'YGU Çalışma Alanları', metin: 'YGU çalışma alanı nasıl belirlenir, hangi yapılarda görev alır?', to: '/calisma-alanlari' },
  ...YGU_YOLU.adimlar.map((a) => ({ baslik: a.baslik, metin: a.metin, to: '/#ygu-olma-yolu' })),
  ...GOREVLER.liste.map((g) => ({ baslik: g.baslik, metin: g.metin, to: '/ygu-hakkinda#gorevler' })),
  ...SEVIYELER.liste.map((s) => ({ baslik: s.ad, metin: s.metin, to: '/ygu-hakkinda#seviyeler' })),
  ...KONTROL_SURELERI.sureler.map((s) => ({ baslik: `${s.sure} — ${s.metin}`, metin: 'Periyodik kontrol süreleri (taslak)', to: '/#kontrol-sureleri' })),
  ...VAKA_SAYFA.liste.map((v) => ({ baslik: v.baslik, metin: `${v.yer} · ${v.ozet}`, to: '/vakalarla-ogren' })),
  ...REHBERLER.liste.map((r) => ({ baslik: r.baslik, metin: 'Kısa rehber', to: '/#rehberler' })),
  ...Object.entries(KONULAR).flatMap(([y, k]) => [
    { baslik: k.baslik, metin: k.aciklama, to: konuYolu(y) },
    ...k.bloklar.flatMap((b) => (b.tip === 'h2' ? [{ baslik: b.metin, metin: k.kart, to: `${konuYolu(y)}#${b.id}` }] : []))
  ]),
  { baslik: 'YGU Eğitim, Sınav ve Belgelendirme', metin: EGITIM_SAYFA.metin, to: '/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme' },
  ...(['basvuru', 'egitim', 'sinav', 'belge', 'gorev'] as const).map((k) => ({
    baslik: `YGU ${EGITIM_SAYFA[k].baslik.toLocaleLowerCase('tr')}`,
    metin: EGITIM_SAYFA[k].alt,
    to: `/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme#${k === 'belge' ? 'belgelendirme' : k === 'gorev' ? 'gorevlendirme' : k}`
  })),
  { baslik: 'YGU Serbest Çalışma', metin: SERBEST_SAYFA.kendi.baslik, to: '/ygu-hakkinda/merak-edilenler/ygu-serbest-calisma' },
  ...SERBEST_SAYFA.hizmetler.liste.map((h) => ({ baslik: h.baslik, metin: 'Serbest çalışma: bağımsız hizmetler', to: '/ygu-hakkinda/merak-edilenler/ygu-serbest-calisma#hizmetler' })),
  ...YGU_KATEGORILER.map((k) => ({ baslik: k.ad, metin: `YGU Hakkında · ${k.kisa}`, to: `/ygu-hakkinda/${k.yol}` })),
  ...YGU_MAKALELER.flatMap((m) => [
    { baslik: m.baslik, metin: `${yguKategori(m.kategori)?.ad} · ${m.ozet}`, to: `/ygu-hakkinda/${m.kategori}/${m.yol}` },
    ...m.bloklar.flatMap((b) => (b.tip === 'h2' ? [{ baslik: b.metin, metin: m.baslik, to: `/ygu-hakkinda/${m.kategori}/${m.yol}#${b.id}` }] : []))
  ]),
  ...SSS.liste.map((s) => ({ baslik: s.soru, metin: 'Sık sorulan sorular', to: '/sss' })),
  { baslik: 'Mevzuat', metin: 'YGU yönetmelik taslağı ve ilgili düzenlemeler', to: '/ygu-hakkinda/mevzuat' }
]

const kucult = (s: string) => s.toLocaleLowerCase('tr')
const sorgu = ref('')
const odak = ref(false)
const girdi = ref<HTMLInputElement>()
// Teknik makaleler backend'de aranır; backend yanıt vermezse site metinleri aranmaya devam eder.
const { apiUrl } = useRuntimeConfig().public
const makaleSonuclari = shallowRef<{ baslik: string; metin: string; to: string }[]>([])
let zamanlayici: ReturnType<typeof setTimeout> | undefined
let istekNo = 0
watch(sorgu, (deger) => {
  clearTimeout(zamanlayici)
  const no = ++istekNo
  const q = deger.trim()
  if (q.length < 2) {
    makaleSonuclari.value = []
    return
  }
  zamanlayici = setTimeout(async () => {
    try {
      const yanit = await $fetch<{ sonuclar: typeof makaleSonuclari.value }>(`${apiUrl}/api/arama`, { query: { q } })
      if (no === istekNo) makaleSonuclari.value = yanit.sonuclar
    } catch {
      if (no === istekNo) makaleSonuclari.value = []
    }
  }, 250)
})

const sonuclar = computed(() => {
  const q = kucult(sorgu.value.trim())
  if (q.length < 2) return []
  const kelimeler = q.split(/\s+/)
  const siteden = DIZIN.filter((d) => {
    const t = kucult(`${d.baslik} ${d.metin}`)
    return kelimeler.every((k) => t.includes(k))
  })
  // Başlığında aranan kelimelerin hepsi geçen site sayfası önce, sonra makaleler, kalan site sonuçları en sonda.
  const baslikta = (d: { baslik: string }) => kelimeler.every((k) => kucult(d.baslik).includes(k))
  return [...siteden.filter(baslikta), ...makaleSonuclari.value, ...siteden.filter((d) => !baslikta(d))].slice(0, 7)
})

onMounted(() => { if (props.otomatikOdak) girdi.value?.focus() })

function gonder() {
  const ilk = sonuclar.value[0]
  if (ilk) navigateTo(ilk.to)
}
</script>

<template>
  <form class="arama" :class="{ buyuk }" role="search" @submit.prevent="gonder">
    <label for="site-arama" class="sr-only">Sitede ara</label>
    <input
      id="site-arama" ref="girdi" v-model="sorgu" type="search" autocomplete="off"
      placeholder="Mevzuat, yapı türü, sistem veya konu başlığı ara..."
      @focus="odak = true" @blur="odak = false"
    >
    <button type="submit" class="btn btn-amber">Ara <Ikon ad="ara" /></button>
    <ul v-if="odak && sorgu.trim().length >= 2" class="arama-sonuc">
      <li v-for="s in sonuclar" :key="s.baslik + s.to">
        <NuxtLink :to="s.to" @mousedown.prevent @click="sorgu = ''">
          <strong>{{ s.baslik }}</strong><span>{{ s.metin }}</span>
        </NuxtLink>
      </li>
      <li v-if="!sonuclar.length" class="bos">Sonuç bulunamadı.</li>
    </ul>
  </form>
</template>

<style scoped>
.arama{position:relative;display:flex;gap:6px;background:#fff;border-radius:10px;padding:5px;box-shadow:0 10px 30px -18px rgba(0,0,0,.6)}
.arama input{flex:1;min-width:0;border:0;outline:0;background:none;padding:0 14px;font:inherit;font-size:15px;color:#111;min-height:44px}
.arama input::placeholder{color:#8A867F}
.arama .btn{min-height:44px;padding:0 18px}
.arama.buyuk input{min-height:48px}
.arama-sonuc{position:absolute;left:0;right:0;top:calc(100% + 8px);z-index:20;list-style:none;margin:0;padding:6px;background:#fff;border-radius:10px;box-shadow:0 24px 50px -20px rgba(0,0,0,.55);color:#111}
.arama-sonuc a{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border-radius:8px;text-decoration:none}
.arama-sonuc a:hover,.arama-sonuc a:focus-visible{background:var(--paper-2)}
.arama-sonuc strong{font-size:15px}
.arama-sonuc span{font-size:13px;color:var(--muted)}
.arama-sonuc .bos{padding:10px 12px;color:var(--muted);font-size:14px}
</style>
