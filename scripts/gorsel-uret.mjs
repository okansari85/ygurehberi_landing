// Sitedeki fotoğrafları OpenAI (gpt-image-1) ile üretir ve public/img/<ad>.webp olarak kaydeder.
// Kullanım: .env içine OPENAI_API_KEY=... yazın, sonra `node scripts/gorsel-uret.mjs` (var olanları atlar).
//   Tek görsel yeniden: `node scripts/gorsel-uret.mjs yapi-konut`   Hepsini yeniden: `--hepsi`
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'

const env = existsSync('.env') ? readFileSync('.env', 'utf8') : ''
const key = process.env.OPENAI_API_KEY || env.match(/^OPENAI_API_KEY=(.+)$/m)?.[1]?.trim()
if (!key) throw new Error('.env dosyasında OPENAI_API_KEY yok.')

const STIL = 'Photorealistic editorial photograph, natural realistic lighting, high detail, no watermark, no captions, no extra text.'
const YATAY = '1536x1024'
const DIKEY = '1024x1536'
const KARE = '1024x1024'

// ad → [boyut, istem]. yapi-ticaret ve yapi-toplanma şu an CC0 fotoğraf (design/gorsel-kaynaklari.md); ad verilmeden üzerine yazılmaz.
const GORSELLER = {
  'hero-ana': [YATAY, 'A fire safety engineer seen from behind, wearing a white hard hat and a black work jacket with "YANGIN GÜVENLİK UZMANI" printed in white bold letters on the back, standing inside a steel-frame building under construction at sunset, warm orange backlight, glowing haze. The person stands in the right half of the frame; the left half is dark and calm for text overlay. Black and amber-gold palette, cinematic.'],
  'surec-proje': [DIKEY, 'Close-up of an engineer\'s hand drawing on large architectural fire safety blueprints with a pencil and ruler on a desk, cool daylight.'],
  'surec-uygulama': [DIKEY, 'A technician in a white hard hat and hi-vis vest on a ladder installing red fire sprinkler pipes on the ceiling of a building under construction.'],
  'surec-dogrulama': [DIKEY, 'A fire safety inspector seen from behind wearing a white hard hat and a neon yellow hi-vis vest with large black letters "YGU" on the back, holding a clipboard and inspecting a red fire hose cabinet in a building corridor.'],
  'surec-sureklilik': [DIKEY, 'A red wall-mounted fire extinguisher cabinet with a glass door and a periodic inspection tag, next to a red fire alarm call point, in a clean modern corridor.'],
  'yapi-konut': [YATAY, 'Modern mid-rise residential apartment blocks in a housing complex with balconies, blue sky, daylight.'],
  'yapi-konaklama': [YATAY, 'Interior of an elegant hotel lobby with warm lighting, sofas and a chandelier, evening ambience.'],
  'yapi-kurumsal': [YATAY, 'A modern hospital building with white and glass facade and entrance canopy, daylight.'],
  'yapi-buro': [YATAY, 'Looking up at modern glass office towers and a business center, blue sky reflections, daylight.'],
  'yapi-ticaret': [YATAY, 'Exterior of a modern shopping mall and retail street with illuminated shop fronts and glass entrance, people walking, early evening.'],
  'yapi-endustriyel': [YATAY, 'A large industrial production plant with steel structures, chimneys and pipelines at dusk.'],
  'yapi-toplanma': [YATAY, 'Interior of a large modern conference hall and auditorium with rows of seats and a stage, warm lighting.'],
  'yapi-depolama': [YATAY, 'Interior of a large logistics warehouse with tall pallet racks full of boxes, long aisle perspective, industrial lighting.'],
  'yapi-yuksek-tehlikeli': [YATAY, 'A petrochemical refinery with distillation towers, storage tanks and pipes, lit up at golden hour.'],
  'bg-ygu-yolu': [YATAY, 'A white safety hard hat resting on rolled blueprints on a dark workbench, low-key lighting, mostly dark background with soft warm rim light, lots of empty dark space on the left.'],
  'bg-vakalar': [YATAY, 'Dark night scene of an industrial building with intense orange flames and smoke in the distance, mostly dark, dramatic, empty dark space on the left.'],
  'vaka-yuksek-bina': [YATAY, 'A high-rise residential tower with fire and smoke on upper floors at dusk, city skyline.'],
  'rehber-yangin-kapisi': [YATAY, 'A grey steel fire door with a push bar and door closer in a stairwell corridor, clean, realistic.'],
  'rehber-acil-aydinlatma': [YATAY, 'A green illuminated emergency exit sign with a running man pictogram above a door in a dim corridor.'],
  'rehber-tatbikat': [YATAY, 'Firefighters in red-yellow protective gear and helmets planning a fire drill, holding a fire hose, outdoors.'],
  'rehber-endustriyel': [YATAY, 'Industrial facility with tanks and steel pipe structures under a cloudy sky, daylight.'],
  'hakkinda-hero': [YATAY, 'A fire safety engineer seen from behind wearing a white hard hat and a neon yellow hi-vis vest with large black letters "YGU" on the back, holding blueprints, standing at a construction site at sunset with building frames. The person is on the right; the left side is darker and calm for text overlay.'],
  'hakkinda-ygu-nedir': [YATAY, 'A white safety hard hat with the black letters "YGU" on the front, lying on architectural blueprints next to a yellow tape measure, construction site softly blurred in the background at sunset.'],
  'on-kayit-hero': [YATAY, 'A cutaway 3D architectural visualization of a multi-storey modern building at night showing floors, red fire sprinkler pipes, fire alarm devices and emergency exit signs, glowing interior lights, city skyline behind, with a transparent holographic floor plan with red fire exit icons floating on the right. Dark left side for text overlay.'],
  'on-kayit-form': [YATAY, 'A yellow safety hard hat with a black "YGU" flame logo resting on architectural blueprints with a pen, on a desk in front of a dark office window with a blurred city at dusk. Hard hat in the lower center-left, moody dark lighting.'],
  'egitim-hero': [YATAY, 'On a dark desk at night: a stack of thick dark leather-bound books with gold spine titles "BYKHY", "MEVZUAT", "UYGULAMA KILAVUZU", "TEKNİK STANDARTLAR", an open laptop showing a technical cutaway drawing of a multi-storey building with red escape routes and green exit signs, a red fire alarm call point and rolled architectural blueprints. Objects in the right two-thirds; the left third is very dark and empty for text overlay. Black and amber-gold palette, cinematic low-key lighting.'],
  'serbest-hero': [YATAY, 'A desk by a large office window at dusk with a city skyline and construction cranes outside: a stack of dark books with gold spine titles "BYKHY", "YGU DÜZENLEMESİ", "TEKNİK STANDARTLAR", "UYGULAMA KILAVUZLARI", an open laptop showing a 3D cutaway drawing of a building with red fire sprinkler pipes, rolled blueprints and a black mug with a small amber flame logo and "YGU". Objects on the right; the left third is dark and calm for text overlay. Black and amber-gold palette.'],
  'hakkinda-cta': [YATAY, 'A white safety hard hat with a small black flame icon and the text "YANGIN GÜVENLİK UZMANI" on the front, on a table with rolled blueprints and a pen, blurred construction site at sunset behind. The hard hat is on the right; left side dark for text overlay.']
}

const istenen = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const hepsi = process.argv.includes('--hepsi')
mkdirSync('public/img', { recursive: true })

const isler = Object.entries(GORSELLER).filter(([ad]) => {
  if (istenen.length) return istenen.includes(ad)
  return hepsi || !gercekVar(ad)
})

// Geçici yer tutucular küçük dosyalardır; gerçek fotoğraf 40 KB'tan büyüktür.
function gercekVar(ad) {
  const f = `public/img/${ad}.webp`
  return existsSync(f) && statSync(f).size > 40_000
}
if (!isler.length) {
  console.log('Üretilecek görsel yok (hepsi var). Yeniden üretmek için ad verin ya da --hepsi.')
  process.exit(0)
}

async function uret([ad, [size, istem]]) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: `${istem} ${STIL}`,
      size,
      quality: 'high',
      output_format: 'webp',
      output_compression: 82
    })
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`${ad}: ${json.error?.message || res.status}`)
  writeFileSync(`public/img/${ad}.webp`, Buffer.from(json.data[0].b64_json, 'base64'))
  console.log(`✓ ${ad}`)
}

// Aynı anda 4 istek (API hız sınırı için).
const hatalar = []
for (let i = 0; i < isler.length; i += 4) {
  const sonuc = await Promise.allSettled(isler.slice(i, i + 4).map(uret))
  for (const s of sonuc) if (s.status === 'rejected') hatalar.push(s.reason.message)
}
if (hatalar.length) {
  console.error(`\n${hatalar.length} görsel üretilemedi:\n- ${hatalar.join('\n- ')}`)
  process.exit(1)
}
console.log(`\n${isler.length} görsel public/img/ klasörüne kaydedildi.`)
