<script setup lang="ts">
// Teknik makale kartı: koyu üst şerit (makale kodu), etiketler, başlık, özet, tarih ve okuma süresi.
// Makale listesinde ve makale sayfasının altındaki "Diğer Makaleler"de kullanılır.
import type { Makale } from '~/data/makaleler'

const props = defineProps<{ makale: Makale; baslikDuzeyi?: 'h2' | 'h3' }>()
const okuma = computed(() => makaleOkumaSuresi(props.makale))
</script>

<template>
  <NuxtLink :to="`/teknik-makaleler/${makale.yol}`" class="kart mk">
    <div class="mk-ust">
      <span class="mk-kod">{{ makale.kod }}</span>
      <span class="mk-tur">Teknik Makale</span>
      <Ikon ad="alev" class="mk-alev" />
    </div>
    <div class="mk-ic">
      <ul v-if="makale.etiketler.length" class="mk-etiketler">
        <li v-for="e in makale.etiketler" :key="e">{{ e }}</li>
      </ul>
      <component :is="baslikDuzeyi ?? 'h2'" class="mk-baslik">{{ makale.baslik }}</component>
      <p class="mk-ozet">{{ makale.ozet }}</p>
      <div class="mk-alt">
        <span><template v-if="makale.yayin">{{ tarihMetni(makale.yayin) }} · </template>{{ okuma }} dk okuma</span>
        <span class="mk-oku">Oku <Ikon ad="ok" /></span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.mk{display:flex;flex-direction:column;overflow:hidden;height:100%}
.mk-ust{position:relative;overflow:hidden;display:flex;align-items:baseline;gap:12px;padding:22px 22px 20px;background:var(--ink);color:#fff;
  background-image:repeating-linear-gradient(135deg,rgba(255,193,7,.07) 0 2px,transparent 2px 14px)}
.mk-kod{font-family:var(--display);font-weight:800;font-size:30px;line-height:1;color:var(--amber)}
.mk-tur{font-family:var(--display);font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-d)}
.mk-alev{position:absolute;right:-6px;top:50%;transform:translateY(-50%);font-size:84px;color:rgba(255,193,7,.16);transition:color .2s ease,transform .3s ease}
.mk-ic{display:flex;flex-direction:column;flex:1;padding:20px 22px 22px}
.mk-etiketler{list-style:none;margin:0 0 12px;padding:0;display:flex;flex-wrap:wrap;gap:6px}
.mk-etiketler li{font-size:12.5px;font-weight:600;color:var(--amber-ink);background:#FFF4D1;border-radius:99px;padding:3px 10px}
.mk-baslik{font-size:clamp(23px,2vw,27px);line-height:1.08}
.mk-ozet{margin:12px 0 18px;color:var(--muted);font-size:15px;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.mk-alt{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:auto;padding-top:14px;border-top:1px solid var(--line);font-size:13.5px;color:var(--muted)}
.mk-oku{display:inline-flex;align-items:center;gap:6px;font-family:var(--display);font-weight:700;font-size:16px;color:var(--text)}
.mk-oku .ikon{color:var(--amber-2);font-size:18px;transition:transform .2s ease}
.mk:hover{border-color:var(--amber)}
.mk:hover .mk-alev{color:rgba(255,193,7,.32);transform:translateY(-50%) scale(1.06)}
.mk:hover .mk-oku .ikon{transform:translateX(4px)}
</style>
