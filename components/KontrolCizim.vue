<script setup lang="ts">
// Ana sayfa kontrol süreleri bölümünün iki renkli çizimleri (Oğuz'un tasarımı, 4 Kasım 2026): siyah çizgi + amber vurgu.
defineProps<{ ad: string }>()
</script>

<template>
  <svg v-if="ad === 'takvim'" class="cizim" viewBox="0 0 120 120" aria-hidden="true">
    <rect x="6" y="20" width="84" height="84" rx="12" fill="#fff" stroke="#E8E2D2" stroke-width="2" />
    <path d="M6 32a12 12 0 0 1 12-12h60a12 12 0 0 1 12 12v8H6z" fill="#FFC107" />
    <rect v-for="x in [22, 44, 66]" :key="x" :x="x" y="10" width="8" height="20" rx="4" fill="#E0A200" />
    <path d="M28 68l13 13 25-27" fill="none" stroke="#FFC107" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M90 64l24 9v17c0 15-10 25-24 29-14-4-24-14-24-29V73z" fill="#FFC107" stroke="#fff" stroke-width="3" />
    <path d="M90 108c6 0 10-4 10-10 0-6-5-9-5-15-3 2-5 5-5 8-1.500-1.500-2-3-2-5-4 3-8 7-8 12 0 6 4 10 10 10z" fill="#fff" />
  </svg>
  <svg v-else class="cizim" viewBox="0 0 64 64" fill="none" stroke="#111" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="ad === 'dusuk'">
      <path d="M10 56V8h18v48M28 22h14v34M4 56h40" />
      <path d="M15 15h2M21 15h2M15 22h2M21 22h2M15 29h2M21 29h2M15 36h2M21 36h2M15 43h2M21 43h2M33 29h2M33 36h2M33 43h2" />
      <circle cx="48" cy="44" r="12" fill="#FFC107" />
      <path d="M48 37v7l5 3" />
    </template>
    <template v-else-if="ad === 'orta'">
      <path d="M4 56V30l11 7v-7l11 7v-7l11 7v-7h7V8h7v22h5v26zM2 56h60" />
      <rect x="10" y="43" width="40" height="7" fill="#FFC107" />
      <path d="M20 43v7M30 43v7M40 43v7" />
    </template>
    <template v-else-if="ad === 'yuksek'">
      <path d="M8 56V26h8v30M18 56V12h7v44M27 56V24a5 5 0 0 1 10 0v32M20 12V6M2 56h28" />
      <path d="M11 32h2M11 40h2M21 20h1M21 28h1M21 36h1" />
      <path d="M46 28l15 26H31z" fill="#FFC107" />
      <path d="M46 37v8M46 49.5h.01" />
    </template>
    <template v-else>
      <path d="M18 4h30a3 3 0 0 1 3 3v46a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <path d="M12 10v44a4 4 0 0 0 4 4h28M31 16h14M31 28h14M31 40h14" />
      <path d="M22 16l3 3 4-5M22 28l3 3 4-5M22 40l3 3 4-5" stroke="#F5B000" stroke-width="3" />
    </template>
  </svg>
</template>

<style scoped>
.cizim { display: block; width: 1em; height: 1em; }
</style>
