// Teknik makaleler (/teknik-makaleler, /teknik-makaleler/<yol>). Metinler kullanıcının makale dosyalarından birebir;
// makale başına bir dosya: data/makaleler/<kod>.json (düz metin, tablolar ve görseller dahil), doğrudan orada düzenlenir. Yeni makale: python -I scripts/makale-aktar.py <dosya.docx>, sonra etiketler ve yayin doldurulur.
// Mevzuat/teknik bilgi uydurulmaz; metin değişikliği önce kullanıcıya sorulur.
import type { KonuBlok } from './konular'
import { VERI } from './makaleler-dizin'

export type Makale = {
  kod: string
  yol: string
  baslik: string
  ozet: string
  etiketler: string[]
  yayin: string
  bloklar: KonuBlok[]
  kaynakBaslik: string
  kaynaklar: { metin: string; url?: string }[]
  sonNotlar: KonuBlok[]
}

export const MAKALELER = VERI as unknown as Makale[]
