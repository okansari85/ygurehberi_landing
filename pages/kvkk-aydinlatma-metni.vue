<script setup lang="ts">
// Ön Kayıt KVKK Aydınlatma Metni. Metin Oğuz'dan (WhatsApp, 31 Ekim 2026); hukuki metin, onaysız değiştirilmez.
// Oğuz'un metninden iki fark: unvan ve adres Ticaret Sicili Gazetesi'nden (12 Ekim 2026, sayı 11685), metindeki
// "[KVKK başvuru e-posta adresi]" boştu ve kurumsal e-posta olmadığı için şirket adresi yazıldı. E-posta açılınca eklenecek.
import { SITE } from '~/data/icerik'

const YOL = '/kvkk-aydinlatma-metni'

useSayfaSeo({
  baslik: 'Ön Kayıt KVKK Aydınlatma Metni | YGU Rehberi',
  aciklama: 'YGU Rehberi ön kayıt formunda paylaşılan kişisel verilerin 6698 sayılı Kanun kapsamında işlenmesine ilişkin aydınlatma metni.',
  yol: YOL,
  jsonLd: [
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}${YOL}#sayfa`,
      url: `${SITE.url}${YOL}`,
      name: 'Ön Kayıt KVKK Aydınlatma Metni',
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE.url}/#site` }
    }
  ]
})
</script>

<template>
  <section class="bolum">
    <div class="wrap metin">
      <span class="cizgi" />
      <h1>YGU Rehberi – Ön Kayıt KVKK Aydınlatma Metni</h1>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, ygurehberi.com internet sitesi üzerinden gerçekleştirilen ön kayıt işlemlerinde paylaşılan kişisel veriler, veri sorumlusu FIRETECH YANGIN TEKNOLOJİLERİ YAZILIM ARAŞTIRMA GELİŞTİRME MÜHENDİSLİK EĞİTİM VE DANIŞMANLIK SANAYİ VE TİCARET LİMİTED ŞİRKETİ tarafından aşağıda açıklanan kapsamda işlenmektedir.</p>

      <h2>1. İşlenen Kişisel Veriler</h2>
      <p>Ön kayıt formunda belirtilen ad, soyad, e-posta adresi, telefon numarası ve il bilgisi işlenmektedir.</p>

      <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
      <p>Kişisel verileriniz yalnızca ön kayıt talebinizin alınması, kayıtların yönetilmesi ve yangın güvenlik uzmanlığına ilişkin eğitim, sınav, belgelendirme ve başvuru süreçleri hakkında talep ettiğiniz bilgilendirmelerin yapılması amacıyla işlenmektedir.</p>

      <h2>3. Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
      <p>Kişisel verileriniz, internet sitesindeki ön kayıt formunun doldurulması yoluyla elektronik ortamda ve otomatik yöntemlerle toplanmaktadır. Verileriniz, Kanun’un 5/2-f maddesi kapsamında, temel hak ve özgürlüklerinize zarar vermemek kaydıyla veri sorumlusunun meşru menfaati hukuki sebebine dayanılarak işlenmektedir.</p>

      <h2>4. Kişisel Verilerin Aktarılması ve Saklanması</h2>
      <p>Kişisel verileriniz ticari amaçlarla üçüncü kişilere satılmaz. Verileriniz, ön kayıt sisteminin işletilmesi için gerekli teknik hizmet sağlayıcılarıyla ve hukuki zorunluluk hâlinde yetkili kamu kurumlarıyla, ilgili amaçlarla sınırlı olarak paylaşılabilir.</p>
      <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır; işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde mevzuata uygun şekilde silinir, yok edilir veya anonim hâle getirilir.</p>

      <h2>5. Kişisel Veri Sahibinin Hakları</h2>
      <p>6698 sayılı Kanun’un 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenen verileriniz hakkında bilgi talep etme, işleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, yanlış veya eksik bilgilerin düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini ve bu işlemlerin aktarım yapılan üçüncü kişilere bildirilmesini isteme, yalnızca otomatik analiz sonucu aleyhinize çıkan sonuçlara itiraz etme ve hukuka aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme haklarına sahipsiniz.</p>
      <p>Bu haklarınıza ilişkin taleplerinizi Kiremitçi Mah. Tamer Sk. Kiremitçi Sinan Bey Konutları 4. Etap Sitesi D1 Blok No: 29 İç Kapı No: 4 Osmangazi/Bursa adresine yazılı olarak veri sorumlusuna iletebilirsiniz.</p>
    </div>
  </section>
</template>

<style scoped>
.metin{max-width:820px}
.metin h1{font-size:clamp(32px,4vw,48px);font-weight:800;line-height:1.08;margin:0 0 20px}
.metin h2{font-size:clamp(22px,2.2vw,28px);margin:32px 0 10px}
.metin p{margin:0 0 14px;font-size:16.5px;line-height:1.65;color:#3A3835}
.metin a{color:var(--text);text-decoration-color:var(--amber);text-underline-offset:3px}
</style>
