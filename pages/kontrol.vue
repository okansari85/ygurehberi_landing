<script setup lang="ts">
// Ücretsiz kontrol aracı — "Bina bilgilerini oluşturun" (design/kontrol/BinaBilgileri.dc.html birebir).
// Adım 1: yapı düzeni (BYKHY Md. 8), adım 2: binadaki kullanımlar + yükseklik; sağda canlı bina görünümü ve özet.
// Eklenen her kullanım binanın altına renkli bant olarak eklenir. Sonuç ekranı (BinaSonuc) henüz yok.
useSeoMeta({
  title: 'Ücretsiz periyodik yangın kontrolü — YGU Rehberi',
  description: 'Binanızdaki kullanımları girin, periyodik yangın kontrolü ön değerlendirmesini bina görünümünde izleyin.'
})

type Cls = { id: string; label: string; madde: string; icon: string }
type Use = { id: number; cls: string; detail: string; alan: string; kat: string; ana?: boolean }

const CLASSES: Cls[] = [
  { id: 'konut', label: 'Konut', madde: 'Md. 9', icon: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z' },
  { id: 'konaklama', label: 'Konaklama', madde: 'Md. 10', icon: 'M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10M16 3c-2 1-3 4-3 7h3v11' },
  { id: 'kurumsal', label: 'Kurumsal', madde: 'Md. 11', icon: 'M3 21h18M5 21V10M19 21V10M9 21v-6h6v6M2 10l10-6 10 6' },
  { id: 'buro', label: 'Büro', madde: 'Md. 12', icon: 'M4 7h16v13H4zM9 7V4h6v3M4 12h16' },
  { id: 'ticaret', label: 'Ticaret', madde: 'Md. 13', icon: 'M4 9l1-5h14l1 5M4 9h16v11H4zM9 20v-6h6v6' },
  { id: 'endustri', label: 'Endüstriyel', madde: 'Md. 14', icon: 'M3 21V10l6 4V10l6 4V5h6v16z' },
  { id: 'toplanma', label: 'Toplanma', madde: 'Md. 15', icon: 'M5 3h14v18H5zM9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2' },
  { id: 'depolama', label: 'Depolama', madde: 'Md. 16', icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5M12 12v9' },
  { id: 'yuksek', label: 'Yüksek tehlikeli', madde: 'Md. 17', icon: 'M12 3l10 18H2zM12 10v5M12 18v.01' }
]
const DESC: Record<string, string> = {
  konut: '1–2 bağımsız bölümlü evler, apartmanlar, rezidanslar, siteler.',
  konaklama: 'Otel, motel, pansiyon, yurt, tatil köyü, kamp.',
  kurumsal: 'Eğitim ve sağlık tesisleri, ceza infaz kurumları.',
  buro: 'Banka, kamu binası, genel büro, muayenehane.',
  ticaret: 'Mağaza, market, AVM, pasaj, hal, tamirhane.',
  endustri: 'Üretim, işleme, montaj, paketleme, onarım tesisleri.',
  toplanma: '50+ kişilik ibadet, eğlence, yeme-içme, bekleme yerleri.',
  depolama: 'Depolar, antrepolar ve otoparklar.',
  yuksek: 'Parlayıcı, patlayıcı, yanıcı madde ve akaryakıt yerleri.'
}
// Bina görünümünde kullanım renkleri (Toplanma mavi)
const UCOL: Record<string, string> = { konut: '#D9D4CC', konaklama: '#F28C28', kurumsal: '#8E7CC3', buro: '#4FA3B8', ticaret: '#F5B400', endustri: '#7D8B6A', toplanma: '#3B9BE6', depolama: '#C97B3A', yuksek: '#E05252' }
const PILL = 'justify-self: start; white-space: nowrap; font-size: 15px; font-weight: 700; padding: 7px 14px; border-radius: 999px; '
const find = (id: string | null) => CLASSES.find((c) => c.id === id) ?? null
const num = (v: string) => { const n = parseFloat(String(v || '').replace(/\./g, '').replace(',', '.')); return isNaN(n) ? 0 : n }

const stage = ref<'tip' | 'detay'>('tip')
const main = ref<string | null>(null)
const height = ref('')
const uses = ref<Use[]>([])
const adding = ref(false)
const dCls = ref<string | null>(null)
const dDetail = ref('')
let nextId = 5

function pickMain(id: string) {
  const rest = uses.value.filter((u) => !u.ana)
  main.value = id
  uses.value = [{ id: 0, cls: id, detail: 'Ana kullanım', alan: '', kat: 'all', ana: true }, ...rest]
}
const toDetay = () => { if (main.value) stage.value = 'detay' }
const toTip = () => { stage.value = 'tip'; adding.value = false }
const remove = (id: number) => { uses.value = uses.value.filter((u) => u.id !== id) }
const cancel = () => { adding.value = false; dCls.value = null; dDetail.value = '' }
function save() {
  if (!dCls.value) return
  uses.value = [...uses.value, { id: nextId++, cls: dCls.value, detail: dDetail.value, alan: '', kat: '0' }]
  cancel()
}

const mainLabel = computed(() => find(main.value)?.label ?? '—')
const mainCards = computed(() => CLASSES.map((c) => ({
  ...c,
  desc: DESC[c.id],
  style: 'font: inherit; text-align: left; cursor: pointer; border-radius: 10px; padding: 14px; display: flex; flex-direction: column; gap: 8px; min-height: 100px; color: #1A1A1A; ' + (main.value === c.id ? 'background: #FFF4D1; border: 2px solid #F5B400;' : 'background: #FFFFFF; border: 1px solid #D9D4CC;')
})))
const nextStyle = computed(() => 'font: inherit; font-size: 19px; font-weight: 700; border: 0; border-radius: 10px; padding: 0 26px; min-height: 58px; cursor: pointer; ' + (main.value ? 'background: #141414; color: #FFFFFF;' : 'background: #E2DDD5; color: #5E5850; cursor: not-allowed;'))

const rows = computed(() => uses.value.map((u) => {
  const c = find(u.cls) ?? CLASSES[0]!
  const diff = !u.ana && u.cls !== main.value
  return {
    u, label: c.label, madde: c.madde, icon: c.icon, detail: u.detail || (u.ana ? 'Ana kullanım' : ''),
    durum: u.ana ? 'Ana kullanım' : diff ? 'Farklı kullanım' : 'Ana kullanım bölümü',
    badge: PILL + (u.ana ? 'background: #141414; color: #FFFFFF;' : diff ? 'background: #F5B400; color: #141414;' : 'background: #FFFFFF; color: #141414; border: 1.5px solid #141414;')
  }
}))

const callouts = computed(() => [...uses.value].sort((a, b) => (b.ana ? 1 : 0) - (a.ana ? 1 : 0)).map((u) => {
  const c = find(u.cls) ?? CLASSES[0]!, col = UCOL[u.cls] || '#F5B400'
  return {
    id: u.id,
    kat: u.ana ? 'Ana kullanım' : u.cls === main.value ? 'Bölüm' : 'Farklı kullanım',
    name: c.label + (u.detail && !u.ana ? ` · ${u.detail}` : ''),
    area: num(u.alan) ? `${num(u.alan)} m²` : '',
    style: `display: flex; flex-direction: column; gap: 2px; width: 100%; box-sizing: border-box; background: rgba(20,20,20,0.92); color: #F6F4F1; border: 1.5px solid ${col}; border-left: 6px solid ${col}; border-radius: 8px; padding: 8px 12px; font-size: 14px; line-height: 1.35;`
  }
}))

// Düz (2B) bina: ana gövde + eklenen her kullanım altta renkli bir bant
const fb = computed(() => {
  const nonAna = uses.value.filter((u) => !u.ana)
  const BH = 30, bandsH = nonAna.length * BH, groundY = 350
  let anaH = Math.max(110, Math.min(250, 290 - bandsH))
  const anaBottom = groundY - bandsH, anaY = Math.max(40, anaBottom - anaH)
  anaH = anaBottom - anaY
  const wins: { x: number; y: number; f: string }[] = []
  for (let wy = anaY + 14, r = 0; wy + 16 <= anaBottom - 10; wy += 30, r++) for (let ci = 0; ci < 3; ci++) wins.push({ x: 88 + ci * 50, y: wy, f: (r * 3 + ci) % 5 === 1 ? '#F5B400' : '#B9B2A7' })
  const bands = nonAna.map((u, i) => {
    const y = anaBottom + i * BH
    return { id: u.id, y, h: BH, f: UCOL[u.cls] || '#F5B400', edge: 'rgba(20,20,20,0.35)', gy: y + 8, gh: BH - 8, glass: 'rgba(255,255,255,0.45)' }
  })
  const towerY = 120, towerWins: { x: number; y: number }[] = []
  for (let ty = towerY + 14; ty < groundY - 20; ty += 24) towerWins.push({ x: 244, y: ty }, { x: 272, y: ty })
  const hv = String(height.value || '').trim()
  return {
    anaY, anaH, roofY: anaY - 8, anaFill: main.value ? '#F6F4F1' : '#3A3631', wins: main.value ? wins : [], bands,
    towerY, towerH: groundY - towerY, towerWins, hLabel: `${hv || '—'} m`,
    pillStyle: `position: absolute; left: ${(44 / 340 * 100).toFixed(2)}%; top: ${(((anaY - 8 + groundY) / 2) / 380 * 100).toFixed(2)}%; transform: translate(-50%, -50%); background: #F5B400; color: #141414; font-size: 14px; font-weight: 700; line-height: 1; white-space: nowrap; padding: 7px 12px; border-radius: 999px;`
  }
})

const totalArea = computed(() => uses.value.reduce((t, u) => t + num(u.alan), 0).toLocaleString('tr-TR'))
const heightLabel = computed(() => (String(height.value || '').trim() ? `${String(height.value).trim()} m` : '—'))
const diffCount = computed(() => uses.value.filter((u) => !u.ana && u.cls !== main.value).length)
const classChips = computed(() => CLASSES.map((c) => ({
  ...c,
  style: 'font: inherit; font-size: 14px; border-radius: 6px; padding: 8px 12px; min-height: 44px; cursor: pointer; ' + (dCls.value === c.id ? 'background: #141414; color: #FFFFFF; border: 1px solid #141414;' : 'background: #FFFFFF; color: #1A1A1A; border: 1px solid #D9D4CC;')
})))
const saveStyle = computed(() => 'font: inherit; font-size: 15px; font-weight: 700; border: 0; border-radius: 8px; padding: 0 22px; min-height: 44px; cursor: pointer; ' + (dCls.value ? 'background: #F5B400; color: #141414;' : 'background: #E2DDD5; color: #5E5850; cursor: not-allowed;'))
</script>

<template>
  <div class="kontrol" style="font-family: 'IBM Plex Sans', system-ui, sans-serif; color: #1A1A1A; background: #F6F4F1; min-height: 100vh;">
    <main style="max-width: 1520px; margin: 0 auto; padding: 24px; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; box-sizing: border-box;">
      <div style="flex: 999 1 640px; min-width: 0; display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <NuxtLink to="/" aria-label="YGU Rehberi ana sayfa" style="align-self: flex-start; display: flex; background: #141414; border-radius: 8px; padding: 6px 12px;"><BrandLogo height="40px" /></NuxtLink>
          <h1 style="margin: 0; font-family: Archivo, sans-serif; font-weight: 800; font-size: clamp(30px, 3.2vw, 42px); letter-spacing: -0.01em;">Bina bilgilerini oluşturun</h1>
          <p style="margin: 0; font-size: 18px; color: #4A4640;">Binadaki tüm kullanımları tek seferde girin; sonucu anlık olarak bina görünümünde izleyin.</p>
        </div>

        <template v-if="stage === 'tip'">
          <section style="background: #FFFFFF; border: 1px solid #EDE8E1; border-radius: 14px; padding: 24px 22px; display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <h2 style="margin: 0; font-size: 22px; font-weight: 700;">Yapı düzeni</h2>
              <span style="font-size: 15px; color: #4A4640;">BYKHY Madde 8 · Binanın esas kullanımına en uygun olanı seçin. Diğer kullanımları sonraki adımda ekleyeceksiniz.</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px;">
              <button v-for="m in mainCards" :key="m.id" type="button" :style="m.style" :aria-pressed="main === m.id" @click="pickMain(m.id)">
                <span style="display: flex; justify-content: space-between; align-items: center; gap: 8px;"><span style="display: flex; align-items: center; gap: 10px;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="m.icon" /></svg><strong style="font-size: 16px;">{{ m.label }}</strong></span><span style="font-size: 12px; font-weight: 600; background: #EDE8E1; color: #4A4640; padding: 2px 7px; border-radius: 4px;">{{ m.madde }}</span></span>
                <span style="font-size: 13px; line-height: 1.45; color: #4A4640;">{{ m.desc }}</span>
              </button>
            </div>
          </section>
          <div style="display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <NuxtLink to="/" style="text-decoration: none; color: #1A1A1A; font-size: 18px; font-weight: 700; background: #FFFFFF; border: 1px solid #D9D4CC; border-radius: 10px; padding: 0 26px; min-height: 58px; display: inline-flex; align-items: center;">← Geri</NuxtLink>
            <button type="button" :style="nextStyle" :disabled="!main" @click="toDetay">İleri: Kullanımlar →</button>
          </div>
        </template>

        <template v-else>
          <section style="background: #FFFFFF; border: 1px solid #EDE8E1; border-radius: 14px; padding: 24px 22px; display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
              <h2 style="margin: 0; font-size: 22px; font-weight: 700;">Binadaki kullanımlar</h2>
              <span style="font-size: 14px; color: #5E5850;">Yapı düzeni: <strong style="color: #1A1A1A;">{{ mainLabel }}</strong> · {{ uses.length }} kayıt</span>
            </div>
            <div style="overflow-x: auto;">
              <div style="min-width: 680px; display: flex; flex-direction: column; gap: 12px;">
                <div style="display: grid; grid-template-columns: minmax(0, 2.3fr) 130px minmax(150px, 1.2fr) 40px; gap: 14px; padding: 0 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #4A4640;"><span>Kullanım</span><span>Alan (m²)</span><span>Durum</span><span /></div>
                <div v-for="r in rows" :key="r.u.id" style="display: grid; grid-template-columns: minmax(0, 2.3fr) 130px minmax(150px, 1.2fr) 40px; gap: 14px; align-items: center; background: #F6F4F1; border-radius: 10px; padding: 14px 10px;">
                  <div style="display: flex; gap: 14px; align-items: center; min-width: 0;">
                    <span style="width: 40px; flex: none; display: inline-flex; justify-content: center; color: #1A1A1A;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="r.icon" /></svg></span>
                    <span style="display: flex; flex-direction: column; gap: 3px; min-width: 0;"><span style="font-size: 17px;"><strong>{{ r.label }}</strong> <span style="color: #4A4640;">· {{ r.madde }}</span></span><span style="font-size: 14px; color: #4A4640;">{{ r.detail }}</span></span>
                  </div>
                  <span v-if="r.u.ana" style="font-size: 18px; color: #4A4640; padding-left: 4px;">—</span>
                  <input v-else v-model="r.u.alan" aria-label="Alan (m²)" type="text" inputmode="decimal" style="font: inherit; font-size: 16px; width: 100%; box-sizing: border-box; padding: 10px 12px; min-height: 44px; border: 1px solid #D9D4CC; border-radius: 8px; background: #FFFFFF;">
                  <span :style="r.badge">{{ r.durum }}</span>
                  <button type="button" aria-label="Kullanımı sil" style="width: 40px; height: 40px; border: 0; background: transparent; color: #4A4640; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;" @click="remove(r.u.id)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
                </div>
              </div>
            </div>

            <div v-if="adding" style="border: 2px solid #141414; border-radius: 10px; padding: 16px; display: flex; flex-direction: column; gap: 12px;">
              <strong style="font-size: 16px;">Binaya kullanım ekle</strong>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button v-for="c in classChips" :key="c.id" type="button" :style="c.style" :aria-pressed="dCls === c.id" @click="dCls = c.id">{{ c.label }} <span style="opacity: 0.7;">{{ c.madde }}</span></button>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-end;">
                <label style="flex: 1 1 200px; display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600;">Açıklama<input v-model="dDetail" type="text" placeholder="Örn. Restoran" style="font: inherit; font-weight: 400; font-size: 15px; padding: 10px 12px; min-height: 44px; border: 1px solid #B9B2A7; border-radius: 8px; box-sizing: border-box;"></label>
                <button type="button" :style="saveStyle" :disabled="!dCls" @click="save">Ekle</button>
                <button type="button" style="font: inherit; font-size: 15px; font-weight: 600; background: #FFFFFF; border: 1px solid #D9D4CC; border-radius: 8px; padding: 0 16px; min-height: 44px; cursor: pointer;" @click="cancel">Vazgeç</button>
              </div>
            </div>
            <button v-else type="button" style="align-self: flex-start; font: inherit; font-size: 18px; font-weight: 700; color: #8A5F00; background: #FFFFFF; border: 1.5px dashed #C99400; border-radius: 8px; padding: 14px 24px; min-height: 52px; cursor: pointer;" @click="adding = true">+ Kullanım ekle</button>

            <div style="height: 1px; background: #EDE8E1; margin: 10px 0;" />
            <h3 style="margin: 0; font-size: 19px; font-weight: 700;">Bina genel bilgileri</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
              <label style="display: flex; flex-direction: column; gap: 8px; font-size: 15px; color: #4A4640;">Bina yüksekliği
                <span style="display: flex; border: 1px solid #D9D4CC; border-radius: 8px; overflow: hidden; background: #FFFFFF;"><input v-model="height" type="text" inputmode="decimal" style="font: inherit; font-size: 16px; color: #1A1A1A; flex: 1; min-width: 0; border: 0; padding: 12px 14px; min-height: 44px;"><span style="border-left: 1px solid #D9D4CC; padding: 0 16px; display: flex; align-items: center; color: #4A4640;">m</span></span></label>
            </div>
          </section>

          <div style="display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <button type="button" style="font: inherit; color: #1A1A1A; font-size: 18px; font-weight: 700; background: #FFFFFF; border: 1px solid #D9D4CC; border-radius: 10px; padding: 0 26px; min-height: 58px; cursor: pointer;" @click="toTip">← Geri</button>
            <!-- Sonuç ekranı (design/kontrol/BinaSonuc.dc.html) henüz yapılmadı -->
            <button type="button" disabled title="Sonuç ekranı yakında" style="font: inherit; color: #5E5850; font-size: 19px; font-weight: 700; background: #E2DDD5; border: 0; border-radius: 10px; padding: 0 26px; min-height: 58px; cursor: not-allowed;">İleri: Kontrol ve sonuç →</button>
          </div>
        </template>
      </div>

      <aside style="flex: 1 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 22px;">
        <section style="background: #141414; border-radius: 14px; overflow: hidden; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 18px 20px 8px;">
            <span style="font-size: 16px; font-weight: 700; letter-spacing: 0.06em; color: #F5B400;">BİNA GÖRÜNÜMÜ</span>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 8px 20px 22px;">
            <div style="position: relative; flex: 1 1 280px; max-width: 340px;">
              <svg width="340" height="380" viewBox="0 0 340 380" role="img" aria-label="Bina görünümü" style="width: 100%; height: auto; display: block;">
                <circle cx="250" cy="90" r="52" fill="#F5B400" opacity="0.14" />
                <rect x="190" :y="fb.towerY" width="110" :height="fb.towerH" fill="#2A2724" />
                <rect v-for="(w, i) in fb.towerWins" :key="`t${i}`" :x="w.x" :y="w.y" width="16" height="10" fill="#3A3631" />
                <rect x="66" :y="fb.roofY" width="168" height="8" fill="#D9D4CC" />
                <rect x="70" :y="fb.anaY" width="160" :height="fb.anaH" :fill="fb.anaFill" />
                <rect v-for="(w, i) in fb.wins" :key="`w${i}`" :x="w.x" :y="w.y" width="22" height="16" rx="1" :fill="w.f" />
                <g v-for="bd in fb.bands" :key="bd.id">
                  <rect x="70" :y="bd.y" width="160" :height="bd.h" :fill="bd.f" />
                  <rect x="70" :y="bd.y" width="160" height="4" :fill="bd.edge" />
                  <rect x="80" :y="bd.gy" width="92" :height="bd.gh" :fill="bd.glass" />
                  <rect x="182" :y="bd.gy" width="38" :height="bd.gh" fill="#141414" opacity="0.8" />
                </g>
                <line x1="30" y1="352" x2="320" y2="352" stroke="#3A3631" stroke-width="3" />
                <rect x="244" y="316" width="16" height="34" rx="4" fill="#F5B400" />
                <rect x="248" y="309" width="8" height="8" rx="2" fill="#F5B400" />
                <path d="M290 290c3 12 16 19 16 34a16 16 0 0 1-32 0c0-10 6-13 6-21 6 3 10 9 10 15" fill="none" stroke="#F5B400" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <g>
                  <line x1="44" :y1="fb.roofY" x2="44" y2="350" stroke="#F5B400" stroke-width="2" />
                  <line x1="36" :y1="fb.roofY" x2="52" :y2="fb.roofY" stroke="#F5B400" stroke-width="2" />
                  <line x1="36" y1="350" x2="52" y2="350" stroke="#F5B400" stroke-width="2" />
                </g>
              </svg>
              <span :style="fb.pillStyle">{{ fb.hLabel }}</span>
            </div>
            <div style="flex: 1 1 180px; display: flex; flex-direction: column; gap: 10px; max-height: 380px; overflow-y: auto;">
              <div v-for="co in callouts" :key="co.id" :style="co.style"><span style="font-size: 12px; color: #CFC9BF; text-transform: uppercase; letter-spacing: 0.06em;">{{ co.kat }}</span><span style="font-weight: 700;">{{ co.name }}</span><span style="font-size: 14px; color: #CFC9BF;">{{ co.area }}</span></div>
            </div>
          </div>
        </section>

        <section style="background: #FFFFFF; border: 1px solid #EDE8E1; border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Bina Özeti</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px;">
            <div style="border: 1px solid #EDE8E1; border-radius: 10px; padding: 14px; display: flex; gap: 12px; align-items: center;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z M3 13l9 5 9-5 M3 17l9 5 9-5" /></svg><span style="display: flex; flex-direction: column;"><span style="font-size: 12px; color: #4A4640;">Toplam kullanım alanı</span><strong style="font-size: 20px;">{{ totalArea }} m²</strong></span></div>
            <div style="border: 1px solid #EDE8E1; border-radius: 10px; padding: 14px; display: flex; gap: 12px; align-items: center;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" /></svg><span style="display: flex; flex-direction: column;"><span style="font-size: 12px; color: #4A4640;">Bina yüksekliği</span><strong style="font-size: 20px;">{{ heightLabel }}</strong></span></div>
            <div style="border: 1px solid #EDE8E1; border-radius: 10px; padding: 14px; display: flex; gap: 12px; align-items: center;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" stroke-width="1.8" aria-hidden="true"><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></svg><span style="display: flex; flex-direction: column;"><span style="font-size: 12px; color: #4A4640;">Farklı kullanım</span><strong style="font-size: 20px;">{{ diffCount }}</strong></span></div>
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>

<style scoped>
/* Landing'in genel başlık/metin stilleri bu ekranı etkilemesin (tasarımda düz metin yazı tipi) */
.kontrol {
  font-size: 16px;
  line-height: normal;
}

.kontrol h2,
.kontrol h3 {
  font-family: inherit;
  letter-spacing: normal;
  line-height: normal;
}

.kontrol button:disabled {
  cursor: not-allowed;
}
</style>
