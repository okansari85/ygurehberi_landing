<script setup lang="ts">
// Üst menü (beyaz). Etkin sayfa amber alt çizgiyle; telefonda menü düğmesiyle açılır.
// Alt öğeli menü (Kaynaklar) masaüstünde açılır kutu (fare üstüne gelince ya da tıklayınca), telefonda alt alta liste.
import { MENU, ON_KAYIT } from '~/data/icerik'

const route = useRoute()
const acik = ref(false)
const aramaAcik = ref(false)
const grupAcik = ref('')
watch(() => route.fullPath, () => { acik.value = false; aramaAcik.value = false; grupAcik.value = '' })

// Açılır kutu dışına tıklanınca kapanır (dokunmatik ekranlı geniş cihazlar için).
const disTik = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest('.hdr-grup')) grupAcik.value = '' }
onMounted(() => document.addEventListener('click', disTik))
onBeforeUnmount(() => document.removeEventListener('click', disTik))

const etkin = (to: string) => (to === '/' ? route.path === '/' && !route.hash : to === route.path)
</script>

<template>
  <header class="hdr">
    <div class="wrap hdr-ic">
      <NuxtLink to="/" class="hdr-logo" aria-label="YGU Rehberi ana sayfa">
        <BrandLogo koyu height="58px" />
      </NuxtLink>

      <nav class="hdr-nav" :class="{ acik }" aria-label="Ana menü">
        <template v-for="m in MENU" :key="m.ad">
          <div
            v-if="m.alt" class="hdr-grup" :class="{ acik: grupAcik === m.ad }"
            @mouseenter="grupAcik = m.ad" @mouseleave="grupAcik = ''" @keydown.esc="grupAcik = ''"
          >
            <button type="button" class="hdr-grup-btn" :aria-expanded="grupAcik === m.ad" @click="grupAcik = grupAcik === m.ad ? '' : m.ad">
              {{ m.ad }} <Ikon ad="asagi" />
            </button>
            <div class="hdr-alt">
              <template v-for="a in m.alt" :key="a.ad">
                <span v-if="a.yakinda" class="hdr-alt-oge yakinda" aria-disabled="true">{{ a.ad }} <em>Yakında</em></span>
                <NuxtLink v-else :to="a.to" class="hdr-alt-oge">{{ a.ad }}</NuxtLink>
              </template>
            </div>
          </div>
          <NuxtLink v-else :to="m.to" :class="{ etkin: etkin(m.to) }" :aria-current="etkin(m.to) ? 'page' : undefined">
            {{ m.ad }}
          </NuxtLink>
        </template>
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
.hdr-nav a:not(.btn){position:relative;text-decoration:none;color:#3A3835;padding:26px 0;white-space:nowrap}
.hdr-nav a:not(.btn):hover{color:#000}
.hdr-nav a.etkin{color:#000;font-weight:700}
.hdr-nav a.etkin::after{content:"";position:absolute;left:-6px;right:-6px;bottom:14px;height:3px;border-radius:2px;background:var(--amber)}
.hdr-nav-cta{display:none}
.hdr-grup{position:relative}
.hdr-grup-btn{display:inline-flex;align-items:center;gap:4px;border:0;background:none;padding:26px 0;font:inherit;color:#3A3835;cursor:pointer;white-space:nowrap}
.hdr-grup-btn .ikon{font-size:16px;transition:transform .2s ease}
.hdr-grup-btn:hover,.hdr-grup.acik .hdr-grup-btn{color:#000}
.hdr-grup.acik .hdr-grup-btn .ikon{transform:rotate(180deg)}
.hdr-alt{display:none;position:absolute;top:calc(100% - 10px);left:-14px;min-width:230px;padding:6px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 22px 40px -22px rgba(0,0,0,.35)}
.hdr-grup.acik .hdr-alt{display:grid}
.hdr-nav a.hdr-alt-oge,.hdr-alt-oge{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 14px;border-radius:8px;white-space:nowrap;text-decoration:none;color:#3A3835}
.hdr-nav a.hdr-alt-oge:hover{background:var(--paper-2);color:#000}
.hdr-alt-oge.yakinda{color:#9A968F;cursor:default}
.hdr-alt-oge em{font-style:normal;font-size:12px;font-weight:600;color:var(--amber-ink);background:#FFF4D1;border-radius:99px;padding:2px 8px}
.hdr-sag{display:flex;align-items:center;gap:6px}
.hdr-ikon{display:grid;place-items:center;width:42px;height:42px;border:0;background:none;border-radius:8px;font-size:21px;color:#111;cursor:pointer}
.hdr-ikon:hover{background:var(--paper-2)}
.hdr-cta{margin-left:10px;white-space:nowrap}
.hdr-menu{display:none;flex-direction:column;justify-content:center;gap:5px;width:44px;height:44px;border:0;background:none;cursor:pointer;padding:10px}
.hdr-menu span{display:block;height:2px;background:#111;border-radius:2px}
.hdr-arama{border-top:1px solid var(--line);padding:14px 0;background:#fff}

@media (max-width:1220px){
  .hdr-cta{display:none}
  .hdr-menu{display:flex}
  .hdr-nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#fff;border-bottom:1px solid var(--line);padding:8px var(--gutter) 20px;box-shadow:0 20px 30px -20px rgba(0,0,0,.25)}
  .hdr-nav.acik{display:flex}
  .hdr-nav a:not(.btn){padding:14px 0;border-bottom:1px solid var(--line)}
  .hdr-nav a.etkin::after{display:none}
  .hdr-grup-btn{width:100%;padding:14px 0;border-bottom:1px solid var(--line);cursor:default}
  .hdr-grup-btn .ikon{display:none}
  .hdr-alt,.hdr-grup.acik .hdr-alt{display:grid;position:static;min-width:0;padding:0 0 0 16px;border:0;border-radius:0;box-shadow:none}
  .hdr-nav a.hdr-alt-oge,.hdr-alt-oge{padding:12px 0;border-radius:0;border-bottom:1px solid var(--line)}
  .hdr-nav-cta{display:inline-flex;margin-top:16px}
  .hdr-sag{margin-left:auto}
}
</style>
