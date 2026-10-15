# Teknik makale .docx dosyalarını data/makaleler.ts'ye düz metin olarak aktarır (site docx okumaz; çıktı elle düzenlenebilir).
# Kullanım: python -I scripts/makale-aktar.py <makale1.docx> [makale2.docx ...]
# Var olan makaleler (aynı kod) güncellenir, yenileri eklenir; elle girilen etiketler/tarih korunur.
# docx stilleri: Small (ilk satır "YGR-004 / TEKNİK MAKALE", "•" kaynaklar, "Uygulama notu:"), Title, Deck (özet),
# Heading1 → h2, Heading2 → h3, Equation → denklem, tablo → tablo, görsel → public/img/makale/<kod>-<n>.png (ardındaki
# "Şekil …" satırı açıklaması olur), diğer → paragraf.
import io, json, os, re, struct, sys, zipfile

KOK = os.path.join(os.path.dirname(__file__), '..')
HEDEF = os.path.join(KOK, 'data', 'makaleler.ts')
GORSEL_DIZIN = os.path.join(KOK, 'public', 'img', 'makale')
TR = str.maketrans('çğıöşüÇĞİÖŞÜâîû²³', 'cgiosuCGIOSUaiu23')


def slug(s):
    s = s.translate(TR).lower()
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def metin(x):
    t = ''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', x))
    for a, b in (('&lt;', '<'), ('&gt;', '>'), ('&quot;', '"'), ('&apos;', "'"), ('&amp;', '&')):
        t = t.replace(a, b)
    return t.strip()


def oku(yol):
    z = zipfile.ZipFile(yol)
    x = z.read('word/document.xml').decode('utf8').split('<w:body>')[1]
    rels = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', z.read('word/_rels/document.xml.rels').decode('utf8')))
    m = {'kod': '', 'baslik': '', 'ozet': '', 'bloklar': [], 'kaynaklar': [], 'sonNotlar': []}
    for p in re.finditer(r'<w:tbl>.*?</w:tbl>|<w:p[ >].*?</w:p>', x, re.S):
        b = p.group(0)
        if b.startswith('<w:tbl>'):
            satirlar = [[metin(c) for c in re.findall(r'<w:tc>.*?</w:tc>', r, re.S)]
                        for r in re.findall(r'<w:tr[ >].*?</w:tr>', b, re.S)]
            m['bloklar'].append({'tip': 'tablo', 'basliklar': satirlar[0], 'satirlar': satirlar[1:]})
            continue
        t = metin(b)
        st = (re.search(r'<w:pStyle w:val="([^"]+)"', b) or [None, '-'])[1]
        resim = re.search(r'r:embed="(rId\d+)"', b)
        if resim:
            veri = z.read('word/' + rels[resim.group(1)])
            g, y = struct.unpack('>II', veri[16:24]) if veri[1:4] == b'PNG' else (1600, 900)
            m['bloklar'].append({'tip': 'gorsel', 'veri': veri, 'uzanti': rels[resim.group(1)].rsplit('.', 1)[1], 'genislik': g, 'yukseklik': y, 'aciklama': ''})
            continue
        if not t:
            continue
        onceki = m['bloklar'][-1] if m['bloklar'] else None
        if st == 'Small' and onceki and onceki['tip'] == 'gorsel' and not onceki['aciklama']:
            onceki['aciklama'] = t
            continue
        if st == 'Equation':
            m['bloklar'].append({'tip': 'denklem', 'metin': re.sub(r' {2,}', '   ', t)})
            continue
        if st == 'Small' and not m['kod']:
            m['kod'] = t.split('/')[0].strip()
        elif st == 'Title':
            m['baslik'] = t
        elif st == 'Deck':
            m['ozet'] = t
        elif st == 'Heading1':
            m['bloklar'].append({'tip': 'h2', 'id': slug(t), 'metin': t})
        elif st == 'Heading2':
            m['bloklar'].append({'tip': 'h3', 'metin': t})
        elif st == 'Small' and t.startswith('•'):
            t = t.lstrip('• ').strip()
            u = re.search(r':\s*(https?://\S+)$', t)
            m['kaynaklar'].append({'metin': t[:u.start()].strip(), 'url': u.group(1)} if u else {'metin': t})
        elif st == 'Small' and ':' in t[:40]:
            etiket, kalan = t.split(':', 1)
            # Kaynaklardan sonra gelen not (ör. "Uygulama notu") sayfada da kaynak listesinin altında durur.
            (m['sonNotlar'] if m['kaynaklar'] else m['bloklar']).append({'tip': 'not', 'etiket': etiket.strip(), 'metin': kalan.strip()})
        else:
            m['bloklar'].append({'tip': 'p', 'metin': t})
    # Son bölüm başlığı "Kaynaklar…" ise kaynak listesi ayrı gösterilir; başlık bloklardan çıkar, adı korunur.
    for i, bl in enumerate(m['bloklar']):
        if bl['tip'] == 'h2' and bl['metin'].lower().startswith('kaynaklar'):
            m['kaynakBaslik'] = bl['metin']
            del m['bloklar'][i]
            break
    assert m['kod'] and m['baslik'], yol
    # Görseller public/img/makale/'ye yazılır; blokta yalnız yol kalır.
    os.makedirs(GORSEL_DIZIN, exist_ok=True)
    n = 0
    for bl in m['bloklar']:
        if bl['tip'] == 'gorsel':
            n += 1
            ad = f"{m['kod'].lower()}-{n}.{bl.pop('uzanti')}"
            io.open(os.path.join(GORSEL_DIZIN, ad), 'wb').write(bl.pop('veri'))
            bl['src'] = f'/img/makale/{ad}'
    return m


def mevcut():
    if not os.path.exists(HEDEF):
        return []
    s = io.open(HEDEF, encoding='utf8').read()
    return json.loads(s.split('export const MAKALELER: Makale[] = ', 1)[1].rsplit('\n// SON', 1)[0])


liste = mevcut()
for yol in sys.argv[1:]:
    yeni = oku(yol)
    eski = next((e for e in liste if e['kod'] == yeni['kod']), None)
    kayit = {
        'kod': yeni['kod'],
        'yol': eski['yol'] if eski else slug(yeni['baslik']),
        'baslik': yeni['baslik'],
        'ozet': yeni['ozet'],
        'etiketler': eski['etiketler'] if eski else [],
        'yayin': eski['yayin'] if eski else '',
        'bloklar': yeni['bloklar'],
        'kaynakBaslik': yeni.get('kaynakBaslik', 'Kaynaklar'),
        'kaynaklar': yeni['kaynaklar'],
        'sonNotlar': yeni['sonNotlar'],
    }
    if eski:
        liste[liste.index(eski)] = kayit
    else:
        liste.append(kayit)
    print(('güncellendi ' if eski else 'eklendi ') + kayit['kod'], kayit['yol'])

liste.sort(key=lambda m: m['kod'], reverse=True)
ts = '''// Teknik makaleler (/teknik-makaleler, /teknik-makaleler/<yol>). Metinler kullanıcının makale dosyalarından birebir;
// düz metin, doğrudan burada düzenlenir. Yeni makale: python -I scripts/makale-aktar.py <dosya.docx>, sonra etiketler ve yayin doldurulur.
// Mevzuat/teknik bilgi uydurulmaz; metin değişikliği önce kullanıcıya sorulur.
import type { KonuBlok } from './konular'

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

export const MAKALELER: Makale[] = ''' + json.dumps(liste, ensure_ascii=False, indent=2) + '''
// SON
'''
io.open(HEDEF, 'w', encoding='utf8', newline='\n').write(ts)
