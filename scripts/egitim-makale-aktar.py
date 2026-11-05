# YGU Eğitim Makaleleri (/ygu-egitimi/<yol>): kullanıcının "NN-Başlık.docx" dosyalarını data/egitim-makaleler/NN.json'a düz metin aktarır.
# Kullanım: python -I scripts/egitim-makale-aktar.py <NN-Başlık.docx> [...]   (aynı numara yeniden aktarılınca üzerine yazılır)
# Kart bilgileri (kısa başlık, açıklama, ikon, adres) data/egitimMakaleleri.ts'de elle durur; bu betik yalnız makale gövdesini yazar.
# docx: Title → başlık, Subtitle atlanır, girişin ilk paragrafı → özet, Heading1 → h2, Heading2 → h3, kalın etiketle başlayan
# paragraf ("MEVZUAT SÜRÜM NOTU (…) —", "TASLAK:" …) → not, tamamı kalın kısa paragraf → h3, ListBullet/ListNumber → liste,
# "Kaynakça" altındaki maddeler → kaynaklar, "Sık Sorulan Sorular" bölümündeki h3 + yanıt → sss (şema için).
import json, os, re, sys, zipfile

KOK = os.path.join(os.path.dirname(__file__), '..')
HEDEF = os.path.join(KOK, 'data', 'egitim-makaleler')
TR = str.maketrans('çğıöşüÇĞİÖŞÜâîû', 'cgiosuCGIOSUaiu')


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', s.translate(TR).lower()).strip('-')


def coz(t):
    for a, b in (('&lt;', '<'), ('&gt;', '>'), ('&quot;', '"'), ('&apos;', "'"), ('&amp;', '&')):
        t = t.replace(a, b)
    return t


def kosular(p):
    # (metin, kalın mı) parçaları
    out = []
    for r in re.findall(r'<w:r[ >].*?</w:r>', p, re.S):
        t = coz(''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', r)))
        if t:
            out.append((t, bool(re.search(r'<w:b/>|<w:b w:val="(1|true)"/>', r))))
    return out


def oku(yol):
    x = zipfile.ZipFile(yol).read('word/document.xml').decode('utf8').split('<w:body>')[1]
    m = {'no': '', 'baslik': '', 'ozet': '', 'bloklar': [], 'kaynakBaslik': 'Kaynakça', 'kaynaklar': [], 'sss': []}
    no = re.match(r'(\d+)', os.path.basename(yol))
    if not no:
        sys.exit(f'Dosya adı numarayla başlamalı: {yol}')
    m['no'] = no.group(1).zfill(2)
    bolum = ''  # 'kaynak' | 'sss' | ''
    for e in re.finditer(r'<w:tbl>.*?</w:tbl>|<w:p[ >].*?</w:p>', x, re.S):
        b = e.group(0)
        if b.startswith('<w:tbl>'):
            satirlar = [[coz(''.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', c))).strip() for c in re.findall(r'<w:tc>.*?</w:tc>', r, re.S)]
                        for r in re.findall(r'<w:tr[ >].*?</w:tr>', b, re.S)]
            m['bloklar'].append({'tip': 'tablo', 'basliklar': satirlar[0], 'satirlar': satirlar[1:]})
            continue
        stil = (re.search(r'<w:pStyle w:val="([^"]+)"', b) or [None, ''])[1]
        k = kosular(b)
        t = ''.join(s for s, _ in k).strip()
        if not t:
            continue
        if stil == 'Title':
            m['baslik'] = t
        elif stil == 'Subtitle' or re.search(r'\|\s*Makale \d+', t):
            continue  # seri satırı ("… Rehberi | Makale 02 – Revizyon 2")
        elif stil == 'Heading1' and re.match(r'(\d+\.\s*)?kaynak', t.lower()):
            bolum, m['kaynakBaslik'] = 'kaynak', t
        elif stil == 'Heading1':
            bolum = 'sss' if 'sık sorulan sorular' in t.lower() else ''
            m['bloklar'].append({'tip': 'h2', 'id': slug(t), 'metin': t})
        elif stil == 'Heading2':
            if t.lower().startswith('kaynak'):
                bolum, m['kaynakBaslik'] = 'kaynak', t
                continue
            m['bloklar'].append({'tip': 'h3', 'metin': t})
            if bolum == 'sss':
                m['sss'].append({'soru': t, 'yanit': ''})
        elif stil in ('ListBullet', 'ListNumber'):
            if bolum == 'kaynak':
                m['kaynaklar'].append({'metin': t})
                continue
            numarali = stil == 'ListNumber'
            son = m['bloklar'][-1] if m['bloklar'] else None
            if son and son['tip'] == 'liste' and son['numarali'] == numarali:
                son['maddeler'].append(t)
            else:
                m['bloklar'].append({'tip': 'liste', 'numarali': numarali, 'maddeler': [t]})
        elif k[0][1] and re.search(r'[:—–]\s*$', k[0][0]) and len(k[0][0]) < 80 and len(k) > 1:
            etiket = re.sub(r'\s*[:—–]\s*$', '', k[0][0]).strip()
            govde = t[len(k[0][0]):].strip()
            # Mevzuat/taslak uyarıları kutu; "YGU-1:", "Birinci aşama:" gibi kalın girişler paragraf başında kalın kalır
            if re.match(r'[A-ZÇĞİÖŞÜ]{4,}\b', etiket) or re.search(r'(notu|durumu|durum|uyarısı|örneği|farkı|eşleşmiyor|farklıdır)$', etiket):
                m['bloklar'].append({'tip': 'not', 'etiket': etiket, 'metin': govde})
            else:
                m['bloklar'].append({'tip': 'p', 'vurgu': k[0][0].strip(), 'metin': govde})
        elif all(kalin for _, kalin in k) and len(t) < 90:
            m['bloklar'].append({'tip': 'h3', 'metin': t})
        elif not m['ozet'] and not m['bloklar']:
            m['ozet'] = t
        elif bolum == 'sss' and m['bloklar'][-1]['tip'] != 'h3' and '? ' in t:
            # 05–20: soru ve yanıt aynı paragrafta ("… mi? Hayır; …")
            soru, yanit = t.split('? ', 1)
            m['bloklar'] += [{'tip': 'h3', 'metin': soru + '?'}, {'tip': 'p', 'metin': yanit}]
            m['sss'].append({'soru': soru + '?', 'yanit': yanit})
        else:
            m['bloklar'].append({'tip': 'p', 'metin': t})
            if bolum == 'sss' and m['sss'] and m['bloklar'][-2]['tip'] == 'h3':
                m['sss'][-1]['yanit'] = t
    m['sss'] = [s for s in m['sss'] if s['yanit']]
    return m


os.makedirs(HEDEF, exist_ok=True)
for yol in sys.argv[1:]:
    m = oku(yol)
    assert m['baslik'] and m['ozet'] and m['bloklar'], f'Eksik okundu: {yol}'
    with open(os.path.join(HEDEF, f"{m['no']}.json"), 'w', encoding='utf8') as f:
        json.dump(m, f, ensure_ascii=False, indent=2)
        f.write('\n')
    tipler = {}
    for b in m['bloklar']:
        tipler[b['tip']] = tipler.get(b['tip'], 0) + 1
    print(m['no'], m['baslik'][:60], tipler, 'kaynak', len(m['kaynaklar']), 'sss', len(m['sss']))

# Dizin: tüm makale gövdeleri tek modülde (sunucu rotaları ve sayfaların useAsyncData'sı dinamik içe aktarır; tarayıcıya toplu gitmez).
dosyalar = sorted(f for f in os.listdir(HEDEF) if f.endswith('.json'))
with open(os.path.join(KOK, 'data', 'egitimMakaleIcerik.ts'), 'w', encoding='utf8') as f:
    f.write('// scripts/egitim-makale-aktar.py üretir, elle düzenlenmez.\nimport type { EgitimMakaleIcerik } from \'./egitim\'\n')
    for i, d in enumerate(dosyalar):
        f.write(f"import m{i} from './egitim-makaleler/{d}'\n")
    f.write(f"\nexport const EGITIM_ICERIK = [{', '.join(f'm{i}' for i in range(len(dosyalar)))}] as unknown as EgitimMakaleIcerik[]\n")
