<script setup lang="ts">
// YGU eğitim makalesi kartı (design/egitim-sayfa.jpeg): solda koyu panel (MAKALE / NN + ikon), sağda başlık, açıklama, "Makaleyi Oku".
// Eğitim rehberindeki listede ve makale sayfasının altındaki "Diğer Eğitim Makaleleri"nde kullanılır.
import { egitimMakaleYolu, type EgitimMakalesi } from '~/data/egitim'

// etiket: panelde "Makale / 01" ya da bilgi sayfalarında "Bilgi / 01"
defineProps<{ makale: EgitimMakalesi; baslikDuzeyi?: 'h3' | 'h2'; etiket?: string }>()
</script>

<template>
  <NuxtLink :to="egitimMakaleYolu(makale)" class="em">
    <span class="em-panel">
      <span class="em-no">{{ etiket ?? 'Makale' }} / {{ makale.no }}</span>
      <Ikon :ad="makale.ikon" class="em-ikon" />
    </span>
    <span class="em-ic">
      <component :is="baslikDuzeyi ?? 'h3'" class="em-baslik">{{ makale.baslik }}</component>
      <span class="em-metin">{{ makale.aciklama }}</span>
      <span class="em-oku">Makaleyi Oku <Ikon ad="ok" /></span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.em{display:flex;height:100%;min-height:118px;overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:12px;text-decoration:none;color:inherit;
  box-shadow:0 10px 22px -18px rgba(0,0,0,.35);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.em:hover{transform:translateY(-2px);border-color:var(--amber);box-shadow:0 16px 28px -18px rgba(0,0,0,.4)}
.em-panel{position:relative;flex:none;width:clamp(112px,22%,150px);display:flex;flex-direction:column;align-items:center;padding:10px 10px 14px;background:#1E242A;color:#fff}
.em-panel::after{content:"";position:absolute;left:14px;bottom:10px;width:24px;height:3px;border-radius:2px;background:var(--amber)}
.em-no{align-self:stretch;text-align:center;font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--amber)}
.em-ikon{margin:auto 0;font-size:42px}
.em-ic{display:flex;flex-direction:column;justify-content:center;gap:6px;padding:14px 18px 14px 20px;min-width:0}
.em-baslik{font-family:var(--body);font-size:16.5px;font-weight:700;line-height:1.3;color:#111}
.em-metin{font-size:13.5px;line-height:1.5;color:var(--muted)}
.em-oku{display:inline-flex;align-items:center;gap:10px;margin-top:4px;font-size:13.5px;font-weight:700;color:#111}
.em-oku .ikon{font-size:17px;color:var(--amber-2);transition:transform .2s ease}
.em:hover .em-oku .ikon{transform:translateX(3px)}
</style>
