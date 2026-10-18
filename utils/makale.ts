// Teknik makale yardımcıları (Nuxt utils: otomatik içe aktarılır).
import type { KonuBlok } from '~/data/konular'

// Okuma süresi: dakikada ~200 kelime, en az 1 dk. Teknik makaleler ve YGU Hakkında makaleleri.
type Okunur = { ozet: string; bloklar: KonuBlok[]; sonNotlar?: KonuBlok[]; kaynaklar?: { metin: string }[] }
export function makaleOkumaSuresi(m: Okunur) {
  const parcalar: string[] = [m.ozet]
  for (const b of [...m.bloklar, ...(m.sonNotlar ?? [])]) {
    if ('metin' in b) parcalar.push(b.metin)
    if (b.tip === 'tablo') parcalar.push(...b.basliklar, ...b.satirlar.flat())
    if (b.tip === 'altlar' || b.tip === 'adimlar') parcalar.push(...b.liste.flatMap((x) => [x.baslik, x.metin]))
  }
  parcalar.push(...(m.kaynaklar ?? []).map((k) => k.metin))
  const kelime = parcalar.join(' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(kelime / 200))
}

// "2026-10-15" → "15 Ekim 2026"
export function tarihMetni(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}
