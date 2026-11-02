<script setup lang="ts">
// Metindeki **...** bölümlerini kalın yazar; v-html kullanılmaz.
defineProps<{ metin: string }>()
</script>

<template>
  <template v-for="(parca, i) in metin.split('**')" :key="i"><strong v-if="i % 2">{{ parca }}</strong><template v-else>{{ parca }}</template></template>
</template>
