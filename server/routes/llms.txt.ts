// /llms.txt (llmstxt.org): yapay zekâ yanıt motorları için sitenin düz metin özeti. `nuxt generate` ile statik dosya olur.
// İçerik data/icerik.ts'den gelir; sayfalardaki metinle aynıdır.
import {
  SITE, HIZLI_KARTLAR, SUREC, CALISMA_ALANLARI, YGU_YOLU, KONTROL_SURELERI, VAKALAR, REHBERLER,
  YGU_NEDIR, GOREVLER, SEVIYELER, NASIL_OLUNUR, SSS, EGITIM_SAYFA as E, SERBEST_SAYFA as S
} from '../../data/icerik'
import { KONULAR, type KonuBlok } from '../../data/konular'

// Konu sayfasının metni markdown olarak; yapay zekâ yanıt motorları sayfayı açmadan da okuyabilsin.
const konuMetni = (bloklar: KonuBlok[]) => bloklar.map((b) => {
  if (b.tip === 'h2') return `### ${b.metin}`
  if (b.tip === 'h3') return `#### ${b.metin}`
  if (b.tip === 'not') return `> ${b.etiket}: ${b.metin}`
  if (b.tip === 'tablo') return [`| ${b.basliklar.join(' | ')} |`, `| --- | --- |`, ...b.satirlar.map((r) => `| ${r.join(' | ')} |`)].join('\n')
  if (b.tip === 'adimlar') return b.liste.map((a, i) => `${i + 1}. ${a.baslik}${a.metin ? ` ${a.metin}` : ''}`).join('\n')
  if (b.tip === 'altlar') return b.liste.map((a, i) => `- ${b.numarali ? `${i + 1}. ` : ''}${a.baslik}: ${a.metin}`).join('\n')
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
- [YGU Eğitim, Sınav ve Belgelendirme](${u}/ygu-egitim-sinav-belgelendirme): YGU eğitimine kimler katılabilir, seviyelere göre eğitim süreleri, sınav ve YGU belgesi
- [YGU Serbest Çalışma](${u}/ygu-serbest-calisma): YGU kendi adına çalışabilir mi, bağımsız olarak verebileceği hizmetler, işletmelerle çalışma ve serbest çalışmanın avantajları
${Object.entries(KONULAR).map(([y, k]) => `- [${k.baslik}](${u}/${y}): ${k.aciklama}`).join('\n')}
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

${NASIL_OLUNUR} ${YGU_YOLU.metin}
${YGU_YOLU.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

## YGU eğitim, sınav ve belgelendirme

Kaynak sayfa: ${u}/ygu-egitim-sinav-belgelendirme

${E.metin}

### ${E.egitim.baslik}: ${E.egitim.alt}

${E.egitim.not}

${E.egitim.kimler.metin} ${E.egitim.sureler.metin}

| Seviye | Kimler katılabilir? | Eğitim süresi |
| --- | --- | --- |
${E.egitim.seviyeler.map((s) => `| ${s.ad} | ${s.kimler} | ${s.sure} |`).join('\n')}

${E.egitim.icerik.baslik}: ${E.egitim.icerik.paragraflar.join(' ')}

### ${E.sinav.baslik}: ${E.sinav.alt}

${E.sinav.not}

${E.sinav.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${[a.metin, a.vurgu, a.son].filter(Boolean).join(' ')}`).join('\n')}

### ${E.belge.baslik}: ${E.belge.alt}

${E.belge.not}

- ${E.belge.gecerlilik.baslik}: ${E.belge.gecerlilik.deger}. ${E.belge.gecerlilik.metin}
${E.belge.maddeler.map((m) => `- ${m.baslik}: ${m.metin}`).join('\n')}

## YGU serbest çalışma

Kaynak sayfa: ${u}/ygu-serbest-calisma

${S.metin}

### ${S.kendi.baslik}

${S.kendi.not} ${S.kendi.metin}
${S.kendi.maddeler.map((m) => `- ${m}`).join('\n')}

### ${S.hizmetler.baslik}

${S.hizmetler.not}
${S.hizmetler.liste.map((h) => `- ${h.baslik}: ${h.metin}`).join('\n')}

### ${S.isletme.baslik}

${S.isletme.not}
${S.isletme.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

### ${S.avantajlar.baslik}

${S.avantajlar.not}
${S.avantajlar.liste.map((a) => `- ${a.baslik}: ${a.metin}`).join('\n')}

## Yangın güvenliği süreci: ${SUREC.baslik} ${SUREC.vurgu.toLocaleLowerCase('tr')}

${SUREC.metin}
${SUREC.adimlar.map((a, i) => `${i + 1}. ${a.baslik}: ${a.metin}`).join('\n')}

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

Kaynak sayfa: ${u}/${y}

${konuMetni(k.bloklar)}`).join('\n\n')}

## Sık sorulan sorular

${SSS.liste.map((s) => `### ${s.soru}

${s.yanit}`).join('\n\n')}

## Vakalarla öğren (gerçek vakalar)

${VAKALAR.liste.map((v) => `### ${v.baslik}: ${v.altBaslik}\n\nYer: ${v.yer} · Tarih: ${v.tarihMetin}\n\n${v.ozet}`).join('\n\n')}

## Yakında

- Kısa rehberler: ${REHBERLER.liste.map((r) => r.baslik).join('; ')}
`
})
