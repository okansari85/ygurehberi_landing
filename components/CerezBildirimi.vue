<script setup lang="ts">
// Çerez bildirimi (KVKK): karar verilmemişse sayfanın altında bant. Kabul → Analytics çerezleri açılır; Ret → kapalı kalır.
// Karar tarayıcıda `cerez-onay`; sayfa statik olduğu için bant yalnız tarayıcıda (onMounted) gösterilir.
import { CEREZ } from '~/data/icerik'

const goster = ref(false)

onMounted(() => {
  try { goster.value = !localStorage.getItem('cerez-onay') } catch { goster.value = true }
})

function karar(kabul: boolean) {
  try { localStorage.setItem('cerez-onay', kabul ? 'kabul' : 'ret') } catch { /* gizli pencere */ }
  const w = window as unknown as { gtag?: (...a: unknown[]) => void }
  if (kabul) w.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  goster.value = false
}
</script>

<template>
  <div v-if="goster" class="cerez" role="region" aria-label="Çerez bildirimi">
    <p>{{ CEREZ.metin }}</p>
    <div class="dugmeler">
      <button type="button" class="btn ret" @click="karar(false)">{{ CEREZ.ret }}</button>
      <button type="button" class="btn btn-amber" @click="karar(true)">{{ CEREZ.kabul }}</button>
    </div>
  </div>
</template>

<style scoped>
.cerez{position:fixed;z-index:60;left:16px;right:16px;bottom:16px;margin:0 auto;max-width:760px;display:flex;align-items:center;gap:16px 24px;flex-wrap:wrap;
  background:var(--ink);color:#fff;border:1px solid var(--line-d);border-radius:var(--r);padding:16px 20px;box-shadow:0 12px 40px rgba(0,0,0,.35)}
.cerez p{margin:0;flex:1 1 320px;font-size:14.5px;line-height:1.5;color:#ECE8E1}
.dugmeler{display:flex;gap:10px;margin-left:auto}
.dugmeler .btn{min-height:42px;padding:0 20px}
.ret{background:transparent;color:#fff;border:1px solid var(--line-d)}
.ret:hover{border-color:var(--amber)}
</style>
