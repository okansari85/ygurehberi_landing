// scripts/egitim-makale-aktar.py üretir, elle düzenlenmez.
import type { EgitimMakaleIcerik } from './egitim'
import m0 from './egitim-bilgileri/01.json'
import m1 from './egitim-bilgileri/02.json'
import m2 from './egitim-bilgileri/03.json'
import m3 from './egitim-bilgileri/04.json'
import m4 from './egitim-bilgileri/05.json'
import m5 from './egitim-bilgileri/06.json'
import m6 from './egitim-bilgileri/07.json'
import m7 from './egitim-bilgileri/08.json'
import m8 from './egitim-bilgileri/09.json'

export const EGITIM_BILGI_ICERIK = [m0, m1, m2, m3, m4, m5, m6, m7, m8] as unknown as EgitimMakaleIcerik[]
