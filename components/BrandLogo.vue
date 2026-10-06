<script setup lang="ts">
// YGU Rehberi logosu iki katman: yazı (logo-yazi.png) + alev (logo-alev.png, public/logo.png'den ayrıldı).
// Alev her zaman hafifçe titreşir; logonun bağlantısına fare gelince kızarıp parlar. Hareket azaltma açıksa durur.
defineProps<{ height?: string }>()
</script>

<template>
  <span class="brand-logo" :style="height ? { height } : undefined">
    <img src="/logo-yazi.png" alt="YGU Rehberi — Yangın Güvenlik Uzmanlığı" class="brand-logo__text">
    <img src="/logo-alev.png" alt="" aria-hidden="true" class="brand-logo__flame">
  </span>
</template>

<style scoped>
.brand-logo {
  position: relative;
  display: inline-block;
  height: 72px;
  aspect-ratio: 412 / 228;
}

.brand-logo__text {
  display: block;
  width: 100%;
  height: 100%;
}

/* Konum: alevin logodaki yeri (412×228 içinde 259,2 – 320,92) */
.brand-logo__flame {
  position: absolute;
  left: 62.864%;
  top: 0.877%;
  width: 14.806%;
  height: auto;
  transform-origin: 50% 100%;
  animation: ygu-flicker 2.6s ease-in-out infinite;
  transition: filter 0.35s ease;
}

a:hover .brand-logo__flame,
a:focus-visible .brand-logo__flame {
  filter: hue-rotate(-32deg) saturate(1.7) brightness(1.05) drop-shadow(0 0 6px rgba(255, 72, 0, 0.75));
  animation-duration: 0.7s;
}

@keyframes ygu-flicker {
  0%, 100% { transform: scale(1, 1) skewX(0deg); }
  25% { transform: scale(1.03, 1.07) skewX(-2deg); }
  50% { transform: scale(0.98, 1.02) skewX(1.5deg); }
  75% { transform: scale(1.02, 1.05) skewX(-1deg); }
}

@media (prefers-reduced-motion: reduce) {
  .brand-logo__flame {
    animation: none;
  }
}
</style>
