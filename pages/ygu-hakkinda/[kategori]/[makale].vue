<script setup lang="ts">
// /ygu-hakkinda/<kategori>/<yol>: YGU Hakkında makalesi (YguMakaleSayfasi) ya da bu kategoriye taşınmış eski konu sayfası
// (KonuSayfasi; 18 Ekim'e kadar kök adresteydi, eski adresler .htaccess'te 301). İkisi de değilse 404.
import { KONU_KATEGORI, YGU_MAKALELER } from '~/data/yguBilgi'

const route = useRoute()
const kategori = String(route.params.kategori)
const yol = String(route.params.makale)
const konu = KONU_KATEGORI[yol] === kategori
if (!konu && !YGU_MAKALELER.some((m) => m.kategori === kategori && m.yol === yol)) {
  throw createError({ statusCode: 404, statusMessage: 'Sayfa bulunamadı', fatal: true })
}
</script>

<template>
  <KonuSayfasi v-if="konu" :yol="yol" />
  <YguMakaleSayfasi v-else />
</template>
