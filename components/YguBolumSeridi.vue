<script setup lang="ts">
// YGU Hakkında bölüm şeridi. Hero'nun altında, üst menünün altında yapışkan: YGU Hakkında + kategoriler (tam adlar).
// Görünüm Vakalarla Öğren süzgeç çipleriyle aynı (kullanıcı 18 Ekim: "ygu hakkında üst menüsünü de böyle yap"): ikonlu çipler,
// seçili olan amber. Sayfa genişliğine sığar, kaydırma yok; sığmayınca alt satıra iner (dar ekranda yapışkan değil).
import { YGU_KATEGORILER } from '~/data/yguBilgi'

const props = defineProps<{ kategori?: string }>() // kategori yoksa (YGU Hakkında sayfası) ilk çip seçili
</script>

<template>
  <nav class="ygu-serit" aria-label="YGU Hakkında bölümleri">
    <div class="wrap ys-ic">
      <NuxtLink to="/ygu-hakkinda" class="cip ys-ana" :class="{ secili: !props.kategori }" :aria-current="!props.kategori ? 'page' : undefined"><Ikon ad="evIcon" /> YGU Hakkında</NuxtLink>
      <span class="ys-ayrac" aria-hidden="true" />
      <NuxtLink
        v-for="k in YGU_KATEGORILER" :key="k.yol" :to="`/ygu-hakkinda/${k.yol}`"
        class="cip" :class="{ secili: k.yol === props.kategori }" :aria-current="k.yol === props.kategori ? 'page' : undefined"
      ><Ikon :ad="k.ikon" /> {{ k.ad }}</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.ygu-serit{position:sticky;top:76px;z-index:40;background:#FAFAF9;border-bottom:1px solid var(--line);box-shadow:0 10px 24px -22px rgba(0,0,0,.5)}
.ys-ic{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding-top:12px;padding-bottom:12px}
.cip{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 10px;border:1px solid var(--line);
  border-radius:6px;background:#fff;box-shadow:0 2px 6px -3px rgba(0,0,0,.12);font:500 13px var(--body);color:#2A2825;white-space:nowrap;
  text-decoration:none;transition:border-color .15s ease, background .15s ease}
.cip .ikon{font-size:17px;color:#3A3733}
.cip:hover{border-color:#CFCBC4}
.cip.secili{background:var(--amber);border-color:var(--amber);font-weight:700;color:#111}
.cip.secili .ikon{color:#111}
/* YGU Hakkında = bölümün ana sayfası; ardından ayraç (kullanıcı 18 Ekim: "anasayfa olduğu belli olsun, araya | koy") */
.ys-ana .ikon{color:var(--amber-2)}
.ys-ayrac{flex:none;width:1px;height:26px;background:#D6D2CB}
@media (max-width:1180px){.ygu-serit{position:static}}
@media (max-width:640px){
  .ys-ic{gap:6px}
  .cip{min-height:38px;padding:0 10px;font-size:12.5px;gap:6px}
  .cip .ikon{font-size:16px}
  .ys-ana{flex-basis:100%}
  .ys-ayrac{display:none}
}
</style>
