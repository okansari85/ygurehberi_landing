# Teknik makale .docx dosyalarını makale başına bir JSON olarak data/makaleler/<kod>.json'a düz metin aktarır (site docx okumaz; çıktı elle düzenlenebilir).
# Kullanım: python -I scripts/makale-aktar.py <makale1.docx> [makale2.docx ...]
# Var olan makaleler (aynı kod) güncellenir, yenileri eklenir; elle girilen etiketler/tarih korunur.
# docx stilleri: Small (ilk satır "YGR-004 / TEKNİK MAKALE", "•" kaynaklar, "Uygulama notu:"), Title, Deck (özet),
# Heading1 → h2, Heading2 → h3, Equation → denklem, tablo → tablo, görsel → public/img/makale/<kod>-<n>.png (ardındaki
# "Şekil …" satırı açıklaması olur), diğer → paragraf.
import io, json, os, re, struct, sys, zipfile
from datetime import date

KOK = os.path.join(os.path.dirname(__file__), '..')
HEDEF = os.path.join(KOK, 'data', 'makaleler')
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
    return gorselleri_yaz(m)


def gorselleri_yaz(m):
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


# "NNN-Başlık.docx" serisi (YGR-K001…): stil adları dosyadan dosyaya değişir, bu yüzden rol sırayla bulunur.
# İlk satır seri etiketi (bazılarında yok, bazıları iç not içerir; alınmaz), sonra başlık, ilk paragraf özet, sonra bölümler.
BOLUM_STILLERI = {'Heading1', 'Heading2', 'SectionHeading', 'YGRSection', 'YGUHeading', 'SectionTitle'}
BASLIK_STILLERI = {'Title', 'ArticleTitle'}
K_ETIKETLER = (
    (5, 'Mevzuat'), (10, 'Kullanım Sınıfı'), (14, 'Yerleşim ve İtfaiye'), (20, 'Yangın Bölmeleri'),
    (25, 'Cephe ve Çatı'), (36, 'Kaçış'), (40, 'Kullanım Sınıfı'), (52, 'Bina Sistemleri'),
    (55, 'Yangın Alarmı'), (56, 'Duman Kontrolü'),
)


def k_metin(x):
    t = ''.join(re.findall(r'<w:t(?: [^>]*)?>([^<]*)</w:t>', x))
    for a, b in (('&lt;', '<'), ('&gt;', '>'), ('&quot;', '"'), ('&apos;', "'"), ('&amp;', '&')):
        t = t.replace(a, b)
    return t.strip()


def oku_k(yol, no):
    z = zipfile.ZipFile(yol)
    x = z.read('word/document.xml').decode('utf8').split('<w:body>')[1]
    rels = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="([^"]+)"', z.read('word/_rels/document.xml.rels').decode('utf8')))
    ogeler = []
    for p in re.finditer(r'<w:tbl>.*?</w:tbl>|<w:p[ >].*?</w:p>', x, re.S):
        b = p.group(0)
        st = (re.search(r'<w:pStyle w:val="([^"]+)"', b) or [None, '-'])[1]
        if b.startswith('<w:tbl>') or 'r:embed' in b or k_metin(b):
            ogeler.append((st, k_metin(b), b))
    stiller = {s for s, _, _ in ogeler}
    baslik_i = next((i for i, o in enumerate(ogeler) if o[0] in BASLIK_STILLERI), 1)
    # Heading1 ve Heading2 birlikte varsa alt düzey; tek başına hangisi varsa bölüm başlığıdır.
    alt = 'Heading2' if 'Heading1' in stiller and 'Heading2' in stiller else None
    m = {'kod': f'YGR-K{no}', 'baslik': ogeler[baslik_i][1], 'ozet': '', 'bloklar': [], 'kaynaklar': [], 'sonNotlar': [], 'kaynakBaslik': 'Kaynakça'}
    kaynakta = False
    for st, t, b in ogeler[baslik_i + 1:]:
        if b.startswith('<w:tbl>'):
            satirlar = [[' '.join(filter(None, (k_metin(q) for q in re.findall(r'<w:p[ >].*?</w:p>', c, re.S))))
                         for c in re.findall(r'<w:tc>.*?</w:tc>', r, re.S)]
                        for r in re.findall(r'<w:tr[ >].*?</w:tr>', b, re.S)]
            m['bloklar'].append({'tip': 'tablo', 'basliklar': satirlar[0], 'satirlar': satirlar[1:]})
        elif 'r:embed' in b:
            kimlik = re.search(r'r:embed="(rId\d+)"', b).group(1)
            veri = z.read('word/' + rels[kimlik])
            g, y = struct.unpack('>II', veri[16:24])
            m['bloklar'].append({'tip': 'gorsel', 'veri': veri, 'uzanti': rels[kimlik].rsplit('.', 1)[1], 'genislik': g, 'yukseklik': y, 'aciklama': ''})
        elif st in BOLUM_STILLERI:
            kaynakta = t.lower().startswith('kaynak')
            if kaynakta:
                m['kaynakBaslik'] = t
            elif st == alt:
                m['bloklar'].append({'tip': 'h3', 'metin': t})
            else:
                m['bloklar'].append({'tip': 'h2', 'id': slug(t), 'metin': t})
        elif kaynakta:
            t = t.lstrip('•· ').strip()
            u = re.search(r':\s*(https?://\S+)$', t)
            m['kaynaklar'].append({'metin': t[:u.start()].strip(), 'url': u.group(1)} if u else {'metin': t})
        elif not m['ozet']:
            m['ozet'] = t
        elif m['bloklar'] and m['bloklar'][-1]['tip'] == 'gorsel' and not m['bloklar'][-1]['aciklama'] and t.startswith('Şekil'):
            m['bloklar'][-1]['aciklama'] = t
        else:
            madde = st == 'ListBullet' or '<w:numPr>' in b
            m['bloklar'].append({'tip': 'p', 'metin': ('• ' + t.lstrip('• ')) if madde else t})
    assert m['baslik'] and m['ozet'] and m['kaynaklar'], yol
    # Aynı başlık birden çok makalede var ama h2 kimliği makale içinde tekildir; yine de denetlenir.
    kimlikler = [bl['id'] for bl in m['bloklar'] if bl['tip'] == 'h2']
    assert len(kimlikler) == len(set(kimlikler)), yol
    return gorselleri_yaz(m)


def mevcut():
    if not os.path.isdir(HEDEF):
        return []
    return [json.load(io.open(os.path.join(HEDEF, ad), encoding='utf8')) for ad in os.listdir(HEDEF) if ad.endswith('.json')]


liste = mevcut()
for yol in sys.argv[1:]:
    seri = re.match(r'(\d{3})-', os.path.basename(yol))
    yeni = oku_k(yol, seri.group(1)) if seri else oku(yol)
    eski = next((e for e in liste if e['kod'] == yeni['kod']), None)
    k_etiket = next((e for s, e in K_ETIKETLER if int(seri.group(1)) <= s), None) if seri else None
    kayit = {
        'kod': yeni['kod'],
        'yol': eski['yol'] if eski else slug(yeni['baslik']),
        'baslik': yeni['baslik'],
        'ozet': yeni['ozet'],
        'etiketler': eski['etiketler'] if eski else ([k_etiket] if k_etiket else []),
        'yayin': eski['yayin'] if eski else (date.today().isoformat() if seri else ''),
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
os.makedirs(HEDEF, exist_ok=True)
for m in liste:
    io.open(os.path.join(HEDEF, m['kod'].lower() + '.json'), 'w', encoding='utf8', newline='\n').write(json.dumps(m, ensure_ascii=False, indent=2) + '\n')
# Nitro ve nuxt.config import.meta.glob desteklemez; bu yüzden dizin dosyası üretilir (sıra: en yeni kod başta).
adlar = [(f"m{i}", m['kod'].lower()) for i, m in enumerate(liste)]
dizin = '// scripts/makale-aktar.py üretir, elle düzenlenmez.\n' \
    + ''.join(f"import {d} from './makaleler/{k}.json'\n" for d, k in adlar) \
    + '\nexport const VERI = [' + ', '.join(d for d, _ in adlar) + ']\n'
io.open(os.path.join(KOK, 'data', 'makaleler-dizin.ts'), 'w', encoding='utf8', newline='\n').write(dizin)
