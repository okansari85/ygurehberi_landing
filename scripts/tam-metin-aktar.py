"""Resmî Gazete'den birebir yazıya geçirilmiş mevzuat metnini (Markdown) data/tam-metin/<ad>.json bloklarına çevirir.
Kullanım: python -I scripts/tam-metin-aktar.py <ad> <parca1.md> [parca2.md ...]
Biçim: "# " kısım (h2, içindekiler), "## " bölüm veya EK başlığı (h3), "### " madde başlığı (kalın satır), "| ... |" tablo,
diğer satırlar paragraf. "[DEVAM]" ile başlayan satır önceki paragrafa, "[SÜRER]" ile biten satır sonrakine eklenir.
Metin değiştirilmez; yalnız "MADDE n-" / "GEÇİCİ MADDE n-" başı kalın gösterilir.
"""
import json
import re
import sys
from pathlib import Path

TR = str.maketrans('çğıöşüÇĞİÖŞÜâîûÂÎÛ', 'cgiosucgiosuaiuaiu')
MADDE = re.compile(r'^((?:GEÇİCİ )?MADDE\s+\d+\s*[-–—])\s*(.*)$')


def kimlik(metin, kullanilan):
    k = re.sub(r'[^a-z0-9]+', '-', metin.lower().translate(TR)).strip('-')[:60] or 'bolum'
    aday, i = k, 2
    while aday in kullanilan:
        aday, i = f'{k}-{i}', i + 1
    kullanilan.add(aday)
    return aday


def satirlar(dosyalar):
    """Parçaları birleştirir; [DEVAM]/[SÜRER] işaretli yarım paragrafları tek satıra getirir."""
    out = []
    surer = False
    for d in dosyalar:
        for ham in Path(d).read_text(encoding='utf-8').splitlines():
            s = ham.strip()
            if not s:
                continue
            devam = s.startswith('[DEVAM]')
            s = s.removeprefix('[DEVAM]').strip()
            if (devam or surer) and out and not s.startswith(('#', '|')):
                out[-1] = out[-1].rstrip() + ' ' + s
            else:
                out.append(s)
            surer = out[-1].endswith('[SÜRER]')
            if surer:
                out[-1] = out[-1].removesuffix('[SÜRER]').rstrip()
    return out


def hucreler(s):
    return [h.strip() for h in s.strip().strip('|').split('|')]


def bloklar(lines):
    b, kullanilan, i = [], set(), 0
    while i < len(lines):
        s = lines[i]
        if s.startswith('### '):
            b.append({'tip': 'p', 'vurgu': s[4:].strip(), 'metin': ''})
        elif s.startswith('## '):
            b.append({'tip': 'h3', 'metin': s[3:].strip()})
        elif s.startswith('# '):
            t = s[2:].strip()
            b.append({'tip': 'h2', 'id': kimlik(t, kullanilan), 'metin': t})
        elif s.startswith('|'):
            tablo = []
            while i < len(lines) and lines[i].startswith('|'):
                if not re.fullmatch(r'\|[\s:|-]+\|?', lines[i]):  # ayırıcı satır
                    tablo.append(hucreler(lines[i]))
                i += 1
            n = max(len(r) for r in tablo)
            tablo = [r + [''] * (n - len(r)) for r in tablo]
            b.append({'tip': 'tablo', 'basliklar': tablo[0], 'satirlar': tablo[1:]})
            continue
        else:
            m = MADDE.match(s)
            b.append({'tip': 'p', 'vurgu': m.group(1), 'metin': m.group(2)} if m else {'tip': 'p', 'metin': s})
        i += 1
    return b


if __name__ == '__main__':
    ad, *dosyalar = sys.argv[1:]
    sonuc = bloklar(satirlar(dosyalar))
    assert sonuc and all('[okunamadı]' not in json.dumps(x, ensure_ascii=False) for x in sonuc), 'okunamayan yer var, önce düzelt'
    hedef = Path(__file__).resolve().parent.parent / 'data' / 'tam-metin' / f'{ad}.json'
    hedef.write_text(json.dumps(sonuc, ensure_ascii=False, indent=0), encoding='utf-8')
    print(f'{hedef}: {len(sonuc)} blok, {sum(1 for x in sonuc if x.get("vurgu", "").startswith(("MADDE", "GEÇİCİ")))} madde')
