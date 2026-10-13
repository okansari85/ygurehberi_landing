// /llms.txt (llmstxt.org): yapay zekâ yanıt motorları için sitenin düz metin özeti. `nuxt generate` ile statik dosya olur.
// İçerik data/icerik.ts'den gelir; sayfalardaki metinle aynıdır.
import {
  SITE, HIZLI_KARTLAR, SUREC, CALISMA_ALANLARI, YGU_YOLU, KONTROL_SURELERI, VAKALAR, REHBERLER,
  YGU_NEDIR, GOREVLER, SEVIYELER, NASIL_OLUNUR
} from '../../data/icerik'

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

## Vakalarla öğren (gerçek vakalar)

${VAKALAR.liste.map((v) => `### ${v.baslik}: ${v.altBaslik}\n\nYer: ${v.yer} · Tarih: ${v.tarihMetin}\n\n${v.ozet}`).join('\n\n')}

## Yakında

- Kısa rehberler: ${REHBERLER.liste.map((r) => r.baslik).join('; ')}
`
})
