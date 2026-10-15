<script setup lang="ts">
// Alt bilgi + ön kayıt bandı (ön kayıt sayfasına yönlendirir; o sayfanın kendisinde gizli). Tasarımda alt bilgi yok; sitenin koyu/amber diliyle eklendi.
import { MENU, SITE, HIZLI_KARTLAR, ON_KAYIT } from '~/data/icerik'

const route = useRoute()
const yil = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <section v-if="route.path !== ON_KAYIT.to" id="on-kayit" class="ftr-kayit" aria-labelledby="on-kayit-baslik">
      <div class="wrap ftr-kayit-ic">
        <div class="ftr-kayit-metin">
          <span class="ftr-alev"><Ikon ad="alev" /></span>
          <div>
            <h2 id="on-kayit-baslik">YGU olmak için ön kayıt</h2>
            <p>Yeni bir uzmanlık dönemi başlıyor. Eğitim, sınav ve belgelendirme gelişmelerinden ilk sen haberdar ol.</p>
          </div>
        </div>
        <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
      </div>
    </section>

    <div class="wrap ftr-alt">
      <div class="ftr-marka">
        <NuxtLink to="/" aria-label="YGU Rehberi ana sayfa"><BrandLogo height="64px" /></NuxtLink>
        <p>{{ SITE.aciklama }}</p>
      </div>
      <nav aria-label="Alt menü">
        <h3>Site</h3>
        <NuxtLink to="/">Ana Sayfa</NuxtLink>
        <NuxtLink v-for="m in MENU" :key="m.to" :to="m.to">{{ m.ad }}</NuxtLink>
      </nav>
      <nav aria-label="Konular">
        <h3>Konular</h3>
        <NuxtLink v-for="k in HIZLI_KARTLAR" :key="k.baslik" :to="k.to">{{ k.baslik }}</NuxtLink>
      </nav>
    </div>
    <div class="wrap ftr-telif">
      <span>© {{ yil }} YGU Rehberi</span>
      <span>Bu sitedeki bilgiler bilgilendirme amaçlıdır; yürürlükteki mevzuatın yerine geçmez.</span>
    </div>
  </footer>
</template>

<style scoped>
.ftr{background:var(--ink);color:#fff}
.ftr-kayit{background:var(--ink-3);border-bottom:1px solid var(--line-d)}
.ftr-kayit-ic{display:flex;align-items:center;justify-content:space-between;gap:28px;padding-top:36px;padding-bottom:36px;flex-wrap:wrap}
.ftr-kayit-metin{display:flex;gap:18px;align-items:center;max-width:620px}
.ftr-alev{font-size:44px;color:var(--amber);display:flex}
.ftr-kayit h2{font-size:30px;text-transform:uppercase}
.ftr-kayit p{margin:6px 0 0;color:var(--muted-d)}
.ftr-alt{display:grid;grid-template-columns:2fr 1fr 1fr;gap:32px;padding-top:48px;padding-bottom:36px}
.ftr-marka p{color:var(--muted-d);max-width:380px;margin:14px 0 0}
.ftr nav{display:flex;flex-direction:column;gap:8px}
.ftr nav h3{font-size:16px;letter-spacing:.06em;text-transform:uppercase;color:var(--amber);margin-bottom:6px}
.ftr nav a{color:var(--muted-d);text-decoration:none;font-size:15px}
.ftr nav a:hover{color:#fff}
.ftr-telif{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-top:1px solid var(--line-d);padding-top:18px;padding-bottom:24px;font-size:13px;color:#8F8A82}
@media (max-width:760px){.ftr-alt{grid-template-columns:1fr 1fr}.ftr-marka{grid-column:1/-1}}
</style>
