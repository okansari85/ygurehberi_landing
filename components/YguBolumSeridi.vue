<script setup lang="ts">
// YGU Hakkında bölüm şeridi (kullanıcı 18 Ekim). Hero'nun altında, üst menünün altında yapışkan sekmeler: YGU Hakkında +
// kategoriler (tam adlar). Sayfa genişliğine sığar, kaydırma yok (kullanıcı: "menüyü sayfa genişliğine sığdır"):
// masaüstünde içerikle aynı hizada, sekmeler kenardan kenara eşit aralıklı; 1180 px altında YGU Hakkında + kategoriler 3'erli.
import { YGU_KATEGORILER } from '~/data/yguBilgi'

const props = defineProps<{ kategori?: string }>() // kategori yoksa (YGU Hakkında sayfası) ilk sekme seçili
</script>

<template>
  <nav class="ygu-serit" aria-label="YGU Hakkında bölümleri">
    <div class="wrap ys-ic">
      <NuxtLink to="/ygu-hakkinda" class="ys-oge ys-ana" :class="{ secili: !props.kategori }" :aria-current="!props.kategori ? 'page' : undefined"><Ikon ad="evIcon" /> YGU Hakkında</NuxtLink>
      <span class="ys-ayrac" aria-hidden="true" />
      <NuxtLink
        v-for="k in YGU_KATEGORILER" :key="k.yol" :to="`/ygu-hakkinda/${k.yol}`"
        class="ys-oge" :class="{ secili: k.yol === props.kategori }" :aria-current="k.yol === props.kategori ? 'page' : undefined"
      >{{ k.ad }}</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.ygu-serit{position:sticky;top:76px;z-index:40;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 10px 24px -22px rgba(0,0,0,.5)}
.ys-ic{display:flex;justify-content:space-between;gap:8px}
.ys-oge{position:relative;display:flex;align-items:center;justify-content:center;padding:17px 0;white-space:nowrap;text-decoration:none;font-weight:600;font-size:15px;color:#55524C;transition:color .15s ease}
.ys-oge:hover{color:#000}
.ys-oge::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;border-radius:3px 3px 0 0;background:transparent;transition:background .15s ease}
.ys-oge:hover::after{background:var(--line)}
.ys-oge.secili{color:#000}
.ys-oge.secili::after{background:var(--amber)}
/* YGU Hakkında = bölümün ana sayfası: ev ikonu ve ardından ayraç (kullanıcı 18 Ekim: "anasayfa olduğu belli olsun, araya | koy") */
.ys-ana{gap:8px}
.ys-ana .ikon{font-size:18px;color:var(--amber-2)}
.ys-ayrac{flex:none;align-self:center;width:1px;height:22px;background:var(--line)}
/* Dar ekranda tek satıra sığmaz: üstte tam genişlik YGU Hakkında, altında kategoriler 3'erli; yüksek olduğu için yapışkan değil */
@media (max-width:1180px){
  .ygu-serit{position:static}
  .ys-ic{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;padding:0}
  .ys-oge{padding:12px 8px;font-size:14px;line-height:1.25;white-space:normal;text-align:center;border-right:1px solid var(--line);border-top:1px solid var(--line)}
  .ys-ayrac{display:none}
  .ys-ana{grid-column:1/-1;border-top:0;border-right:0}
  .ys-oge:nth-child(3n+2){border-right:0}
  .ys-oge::after{left:14px;right:14px}
}
@media (max-width:520px){.ys-oge{font-size:12.5px;padding:10px 4px}}
</style>
