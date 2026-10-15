// Teknik makale yardımcıları (Nuxt utils: otomatik içe aktarılır).
import type { Makale } from '~/data/makaleler'

// Okuma süresi: dakikada ~200 kelime, en az 1 dk.
export function makaleOkumaSuresi(m: Makale) {
  const parcalar: string[] = [m.ozet]
  for (const b of [...m.bloklar, ...m.sonNotlar]) {
    if ('metin' in b) parcalar.push(b.metin)
    if (b.tip === 'tablo') parcalar.push(...b.basliklar, ...b.satirlar.flat())
  }
  parcalar.push(...m.kaynaklar.map((k) => k.metin))
  const kelime = parcalar.join(' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(kelime / 200))
}

// "2026-10-15" → "15 Ekim 2026"
export function tarihMetni(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}
