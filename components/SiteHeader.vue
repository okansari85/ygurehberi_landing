<script setup lang="ts">
// Üst menü (beyaz). Etkin sayfa amber alt çizgiyle; telefonda menü düğmesiyle açılır.
import { MENU, ON_KAYIT } from '~/data/icerik'

const route = useRoute()
const acik = ref(false)
const aramaAcik = ref(false)
watch(() => route.fullPath, () => { acik.value = false; aramaAcik.value = false })

const etkin = (to: string) => (to === '/' ? route.path === '/' && !route.hash : to === route.path)
</script>

<template>
  <header class="hdr">
    <div class="wrap hdr-ic">
      <NuxtLink to="/" class="hdr-logo" aria-label="YGU Rehberi ana sayfa">
        <BrandLogo koyu height="58px" />
      </NuxtLink>

      <nav class="hdr-nav" :class="{ acik }" aria-label="Ana menü">
        <NuxtLink v-for="m in MENU" :key="m.to" :to="m.to" :class="{ etkin: etkin(m.to) }" :aria-current="etkin(m.to) ? 'page' : undefined">
          {{ m.ad }}
        </NuxtLink>
        <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber hdr-nav-cta">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
      </nav>

      <div class="hdr-sag">
        <button type="button" class="hdr-ikon" aria-label="Sitede ara" :aria-expanded="aramaAcik" @click="aramaAcik = !aramaAcik"><Ikon ad="ara" /></button>
        <NuxtLink :to="ON_KAYIT.to" class="hdr-ikon" aria-label="Ön kayıt"><Ikon ad="kullanici" /></NuxtLink>
        <NuxtLink :to="ON_KAYIT.to" class="btn btn-amber hdr-cta">{{ ON_KAYIT.ad }} <Ikon ad="ok" /></NuxtLink>
        <button type="button" class="hdr-menu" :aria-expanded="acik" aria-label="Menüyü aç" @click="acik = !acik">
          <span /><span /><span />
        </button>
      </div>
    </div>
    <div v-if="aramaAcik" class="hdr-arama">
      <div class="wrap"><SiteArama otomatik-odak /></div>
    </div>
  </header>
</template>

<style scoped>
.hdr{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}
.hdr-ic{display:flex;align-items:center;gap:24px;min-height:76px}
.hdr-logo{display:flex;align-items:center;flex:none}
.hdr-nav{display:flex;align-items:center;gap:clamp(16px,2.4vw,34px);margin:0 auto;font-size:15px;font-weight:500}
.hdr-nav a:not(.btn){position:relative;text-decoration:none;color:#3A3835;padding:26px 0}
.hdr-nav a:not(.btn):hover{color:#000}
.hdr-nav a.etkin{color:#000;font-weight:700}
.hdr-nav a.etkin::after{content:"";position:absolute;left:-6px;right:-6px;bottom:14px;height:3px;border-radius:2px;background:var(--amber)}
.hdr-nav-cta{display:none}
.hdr-sag{display:flex;align-items:center;gap:6px}
.hdr-ikon{display:grid;place-items:center;width:42px;height:42px;border:0;background:none;border-radius:8px;font-size:21px;color:#111;cursor:pointer}
.hdr-ikon:hover{background:var(--paper-2)}
.hdr-cta{margin-left:10px}
.hdr-menu{display:none;flex-direction:column;justify-content:center;gap:5px;width:44px;height:44px;border:0;background:none;cursor:pointer;padding:10px}
.hdr-menu span{display:block;height:2px;background:#111;border-radius:2px}
.hdr-arama{border-top:1px solid var(--line);padding:14px 0;background:#fff}

@media (max-width:1100px){
  .hdr-cta{display:none}
  .hdr-menu{display:flex}
  .hdr-nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#fff;border-bottom:1px solid var(--line);padding:8px var(--gutter) 20px;box-shadow:0 20px 30px -20px rgba(0,0,0,.25)}
  .hdr-nav.acik{display:flex}
  .hdr-nav a:not(.btn){padding:14px 0;border-bottom:1px solid var(--line)}
  .hdr-nav a.etkin::after{display:none}
  .hdr-nav-cta{display:inline-flex;margin-top:16px}
  .hdr-sag{margin-left:auto}
}
</style>
