// /llms.txt (llmstxt.org): yapay zekâ yanıt motorları için sitenin düz metin özeti. `nuxt generate` ile statik dosya olur.
// İçerik data/icerik.ts'den gelir; sayfalardaki metinle aynıdır.
import {
  SITE, HIZLI_KARTLAR, SUREC, CALISMA_ALANLARI, YGU_YOLU, KONTROL_SURELERI, REHBERLER,
  YGU_NEDIR, GOREVLER, SEVIYELER, NASIL_OLUNUR, SSS, EGITIM_SAYFA as E, SERBEST_SAYFA as S
} from '../../data/icerik'
import { KONULAR, type KonuBlok } from '../../data/konular'
import { MAKALELER } from '../../data/makaleler'
import { VAKA_SAYFA } from '../../data/vakalar'
import { YASAM_DONGUSU as Y } from '../../data/yasamDongusu'
import { CALISMA_SAYFA as CS, CA_YONETMELIK } from '../../data/calismaAlanlari'
import { YGU_KATEGORILER, YGU_MAKALELER, YAZARLAR, konuYolu } from '../../data/yguBilgi'

// Konu sayfasının metni markdown olarak; yapay zekâ yanıt motorları sayfayı açmadan da okuyabilsin.
const konuMetni = (bloklar: KonuBlok[]) => bloklar.map((b) => {
  if (b.tip === 'h2') return `### ${b.metin}`
  if (b.tip === 'h3') return `#### ${b.metin}`
  if (b.tip === 'not') return `> ${b.etiket}: ${b.metin}`
  if (b.tip === 'tablo') return [`| ${b.basliklar.join(' | ')} |`, `|${' --- |'.repeat(b.basliklar.length)}`, ...b.satirlar.map((r) => `| ${r.join(' | ')} |`)].join('\n')
  if (b.tip === 'adimlar') return b.liste.map((a, i) => `${i + 1}. ${a.baslik}${a.metin ? ` ${a.metin}` : ''}`).join('\n')
  if (b.tip === 'altlar') return b.liste.map((a, i) => `- ${b.numarali ? `${i + 1}. ` : ''}${a.baslik}: ${a.metin}`).join('\n')
  if (b.tip === 'denklem') return `    ${b.metin}`
  if (b.tip === 'gorsel') return `![${b.aciklama}](https://ygurehberi.com${b.src})`
  if (b.tip === 'yapilar') return CALISMA_ALANLARI.yapilar.map((y) => `- ${y.ad} ${y.alt}`).join('\n')
  return b.metin
}).join('\n\n')

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  const u = SITE.url
  return `# ${SITE.ad}

> ${SITE.ad}, Türkiye'de yangın güvenlik uzmanlığı (YGU) hakkında Türkçe bir bilgi sitesidir: YGU nedir, nasıl olunur, YGU seviyeleri ve görevleri, çalışma alanları, periyodik yangın güvenliği kontrol süreleri, vaka analizleri ve teknik rehberler. ${SITE.aciklama}

Önemli: Sitedeki bilgiler bilgilendirme amaçlıdır; yürürlükteki mevzuatın yerine geçmez. YGU düzenlemesi taslak aşamasındadır; kontrol süreleri taslaktaki örnek değerlerdir.

## Sayfalar

- [Ana Sayfa](${u}/): YGU rehberinin özeti, çalışma yaklaşımı, çalışma alanları, YGU olma yolu, kontrol süreleri
- [YGU Hakkında](${u}/ygu-hakkinda): YGU tanımı, dört temel görev, YGU seviyeleri
- [YGU Ön Kayıt](${u}/on-kayit): YGU olmak isteyenler için ön kayıt; eğitim, sınav ve belgelendirme sürecine dair bilgilendirme
- [YGU Eğitim, Sınav ve Belgelendirme](${u}/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme): YGU eğitimine kimler katılabilir, seviyelere göre eğitim süreleri, sınav ve YGU belgesi
- [YGU Serbest Çalışma](${u}/serbest-calisma): YGU kendi adına veya şirket üzerinden çalışabilir mi, görevlendirme, hizmet bedeli, bağımsızlık ve bilinmesi gerekenler
${Object.entries(KONULAR).map(([y, k]) => `- [${k.baslik}](${u}${konuYolu(y)}): ${k.aciklama}`).join('\n')}
${YGU_KATEGORILER.map((k) => `- [YGU Hakkında › ${k.ad}](${u}/ygu-hakkinda/${k.yol}): ${k.aciklama}`).join('\n')}
${YGU_MAKALELER.map((m) => `- [${m.baslik}](${u}/ygu-hakkinda/${m.kategori}/${m.yol}): ${m.ozetle}`).join('\n')}
- [Vakalarla Öğren](${u}/vakalarla-ogren): Türkiye'den ve dünyadan gerçek yangın vakaları; mevzuat, teknik analiz, bilirkişi raporları ve yargı süreçleri ışığında
- [Teknik Makaleler](${u}/teknik-makaleler): yangın güvenliği tasarımı ve uygulamasına yönelik teknik makaleler
${MAKALELER.map((m) => `- [${m.kod}: ${m.baslik}](${u}/teknik-makaleler/${m.yol}): ${m.ozet}`).join('\n')}
- [Sık Sorulan Sorular](${u}/sss): yangın güvenlik uzmanı (YGU) hakkında sık sorulan sorular ve kısa yanıtları

## YGU nedir?

${YGU_NEDIR}

## YGU'nun görevleri

${GOREVLER.metin}
${GOREVLER.liste.map((g) => `- ${g.baslik}: ${g.metin}`).join('\n')}

## YGU seviyeleri

${SEVIYELER.metin}
${SEVIYELER.liste.map((s) => `- ${s.ad}: ${s.metin}`).join('\n')}

## YGU nasıl olunur?

${NASIL_OLUNUR} ${YGU_YOLU.soru} ${YGU_YOLU.metin} ${YGU_YOLU.metinVurgu}
${YGU_YOLU.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

## YGU eğitim, sınav ve belgelendirme

Kaynak sayfa: ${u}/ygu-hakkinda/egitim-ve-belgelendirme/ygu-egitim-sinav-belgelendirme

${E.metin}

### ${E.basvuru.baslik}: ${E.basvuru.alt}

${E.basvuru.metin}

| Seviye | Kimler başvurabilir? | Eğitim süresi |
| --- | --- | --- |
${E.basvuru.seviyeler.map((s) => `| ${s.ad} | ${s.kimler} | ${s.sure} |`).join('\n')}

${E.basvuru.not}

### ${E.egitim.baslik}

${E.egitim.icerik.baslik}: ${E.egitim.icerik.maddeler.join(', ')}.

${E.egitim.uygulama.baslik}: ${E.egitim.uygulama.metin}

${E.egitim.odak.baslik}: ${E.egitim.odak.metin}

### ${E.sinav.baslik}: ${E.sinav.alt}

${E.sinav.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${[a.metin, ...(a.maddeler ?? [])].join(' ')}`).join('\n')}

${E.sinav.not}

### ${E.belge.baslik}: ${E.belge.alt}

- ${E.belge.gecerlilik.baslik}: ${E.belge.gecerlilik.deger}. ${E.belge.gecerlilik.metin}
${E.belge.maddeler.map((m) => `- ${m.baslik}: ${m.metin}`).join('\n')}

### ${E.gorev.baslik}: ${E.gorev.alt}

${E.gorev.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

${E.gorev.not}

${E.dayanak.join(' ')}

## YGU serbest çalışma

Kaynak sayfa: ${u}/serbest-calisma

${S.baslik} ${S.metin}

${S.bilgi.metin}

### ${S.kendi.baslik}

${S.kendi.metin}

### ${S.modeller.baslik}

${S.modeller.liste.map((m) => `- ${m.baslik}: ${m.metin}`).join('\n')}

### ${S.gorevlendirme.baslik}

${S.gorevlendirme.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

### ${S.bedel.baslik}

${S.bedel.metin}

### ${S.bagimsizlik.baslik}

${S.bagimsizlik.maddeler.map((m) => `- ${m}`).join('\n')}

### ${S.isletme.baslik}

${S.isletme.metin}
${S.isletme.liste.map((l) => `- ${l.baslik}: ${l.metin}`).join('\n')}

### ${S.bilinmesi.baslik}

${S.bilinmesi.liste.map((l) => `- ${l.baslik}: ${l.metin}`).join('\n')}

## Yangın güvenliği süreci: ${SUREC.baslik} ${SUREC.vurgu.toLocaleLowerCase('tr')}

${SUREC.metin} ${SUREC.metin2}
${SUREC.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

## ${CS.baslik}

Sayfa: ${u}/calisma-alanlari

${CS.metin}

${CS.nasil.baslik} ${CS.nasil.metin} ${CS.nasil.giris}
${CS.nasil.adimlar.map((a, i) => `${i + 1}. ${a.baslik} ${a.metin}`).join('\n')}

${CS.seviye.baslik}:
${CS.seviye.satirlar.map((s) => `- ${s.ad}: ${s.metin}`).join('\n')}

Önemli: ${CS.seviye.onemli}

Sonuç: ${CS.sonuc}

${CS.alanlar.map((a) => `### ${a.ad}

${CS.etiketler.kapsam}: ${a.kapsam}

${CS.etiketler.ozellik}: ${a.ozellik}

${CS.etiketler.ygu}: ${a.ygu}

${CS.etiketler.dayanak} ${CA_YONETMELIK}, Madde ${a.madde}`).join('\n\n')}

## ${Y.baslik} ${Y.vurgu.toLocaleLowerCase('tr')}: ${Y.altBaslik}

Sayfa: ${u}/yangin-guvenligi-yasam-dongusu

${Y.metin}

${Y.neden.baslik}: ${Y.neden.metin}

${Y.asamalar.map((a, i) => `${i + 1}. ${a.baslik} (${a.alt}): ${a.maddeler.join(' ')} YGU'nun rolü: ${a.rol}`).join('\n')}

${Y.ornek.baslik}: ${Y.ornek.adimlar.map((a) => `${a.baslik}: ${a.metin}`).join(' ')}

${Y.yer.baslik}: ${Y.yer.metin}

${Y.paydaslar.baslik}: ${Y.paydaslar.liste.join(', ')}. ${Y.paydaslar.yan}

${Y.saglar.baslik} ${Y.saglar.liste.join(' ')}

${Y.mevzuat.baslik}: ${Y.mevzuat.metin}

${Y.sonuc.baslik}: ${Y.sonuc.metin}

## YGU hangi yapılarda görev alır?

${CALISMA_ALANLARI.metin}
${CALISMA_ALANLARI.yapilar.map((y) => `- ${y.ad} ${y.alt}`).join('\n')}

## Yangın güvenliği kontrolleri kaç yılda bir yapılır?

${KONTROL_SURELERI.metin}
${KONTROL_SURELERI.sureler.map((s) => `- ${s.metin}: ${s.sure}`).join('\n')}
- ${KONTROL_SURELERI.diger.baslik}: ${KONTROL_SURELERI.diger.metin}

Not: ${KONTROL_SURELERI.not}

## Konular

${HIZLI_KARTLAR.map((k) => `- [${k.baslik}](${u}${k.to}): ${k.metin}`).join('\n')}

${Object.entries(KONULAR).map(([y, k]) => `## ${k.baslik}

Kaynak sayfa: ${u}${konuYolu(y)}

${konuMetni(k.bloklar)}`).join('\n\n')}

## YGU Hakkında makaleleri

Yazarlar: ${YAZARLAR.map((y) => `${y.ad} (${y.unvan})`).join(', ')}. Kaynak: Yangın Güvenlik Uzmanlığı ve Periyodik Kontrol Usul ve Esasları Hakkında Yönetmelik Taslağı ve ekleri; taslak henüz Resmî Gazete'de yayımlanmamıştır.

${YGU_KATEGORILER.map((kat) => `### ${kat.ad}

${YGU_MAKALELER.filter((m) => m.kategori === kat.yol).map((m) => `#### ${m.baslik}

Kaynak sayfa: ${u}/ygu-hakkinda/${m.kategori}/${m.yol} · Yayın: ${m.guncelleme ?? m.yayin}

Kısaca: ${m.ozetle}

${konuMetni(m.bloklar)}

Dayanak: ${m.dayanak.join('; ')}`).join('\n\n')}`).join('\n\n')}

## Teknik makaleler

${MAKALELER.map((m) => `### ${m.kod}: ${m.baslik}

Kaynak sayfa: ${u}/teknik-makaleler/${m.yol}${m.etiketler.length ? ` · Konular: ${m.etiketler.join(', ')}` : ''}

${m.ozet}

${konuMetni(m.bloklar)}

${m.kaynakBaslik}:
${m.kaynaklar.map((k) => `- ${k.metin}${k.url ? `: ${k.url}` : ''}`).join('\n')}

${konuMetni(m.sonNotlar)}`).join('\n\n')}

## Sık sorulan sorular

${SSS.liste.map((s) => `### ${s.soru}

${s.yanit}`).join('\n\n')}

## Vakalarla öğren (gerçek vakalar)

Sayfa: ${u}/vakalarla-ogren

${VAKA_SAYFA.liste.map((v) => `### ${v.no}. ${v.baslik}\n\nYer: ${v.yer}\n\n${v.ozet}`).join('\n\n')}

## Yakında

- Kısa rehberler: ${REHBERLER.liste.map((r) => r.baslik).join('; ')}
`
})
