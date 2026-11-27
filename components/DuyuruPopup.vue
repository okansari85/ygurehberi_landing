<script setup lang="ts">
// Site geneli duyuru: ziyaretçiye bir kez gösterilir (tarayıcıda `duyuru-goruldu` = DUYURU.kod). Yeni duyuruda kod değişir, yeniden çıkar.
// Duyurunun bağlandığı sayfada gösterilmez. Statik sayfa: yalnız tarayıcıda (onMounted) açılır.
import { DUYURU } from '~/data/icerik'

const kutu = ref<HTMLDialogElement>()
const route = useRoute()

onMounted(() => {
  if (route.path === DUYURU.to) return gorulduYap()
  try { if (localStorage.getItem('duyuru-goruldu') === DUYURU.kod) return } catch { /* gizli pencere: göster */ }
  kutu.value?.showModal()
})

function gorulduYap() {
  try { localStorage.setItem('duyuru-goruldu', DUYURU.kod) } catch { /* gizli pencere */ }
}

function kapat() {
  gorulduYap()
  kutu.value?.close()
}
</script>

<template>
  <dialog ref="kutu" class="duyuru" aria-labelledby="duyuru-baslik" @close="gorulduYap" @click.self="kapat">
    <div class="ic">
      <button type="button" class="x" aria-label="Kapat" @click="kapat">×</button>
      <span class="ust">{{ DUYURU.ust }}</span>
      <h2 id="duyuru-baslik">{{ DUYURU.baslik }}</h2>
      <p class="kunye">{{ DUYURU.kunye }}</p>
      <p>{{ DUYURU.metin }}</p>
      <div class="dugmeler">
        <NuxtLink :to="DUYURU.to" class="btn btn-amber" @click="kapat">{{ DUYURU.dugme }}</NuxtLink>
        <button type="button" class="btn sonra" @click="kapat">Kapat</button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.duyuru{border:0;padding:0;max-width:560px;width:calc(100% - 32px);border-radius:var(--r);background:var(--ink);color:#fff;box-shadow:0 24px 70px rgba(0,0,0,.5)}
.duyuru::backdrop{background:rgba(14,14,14,.6)}
.ic{position:relative;padding:30px 28px 26px;border-top:5px solid var(--amber)}
.x{position:absolute;top:10px;right:12px;width:40px;height:40px;border:0;background:transparent;color:#fff;font-size:28px;line-height:1;cursor:pointer;border-radius:8px}
.x:hover{color:var(--amber)}
h2{font-size:clamp(28px,4vw,36px);margin:0 36px 8px 0}
.kunye{margin:0 0 14px;font-size:13.5px;color:var(--amber)}
p{margin:0 0 20px;font-size:15px;line-height:1.6;color:#ECE8E1}
.dugmeler{display:flex;gap:10px;flex-wrap:wrap}
.sonra{background:transparent;color:#fff;border:1px solid var(--line-d)}
.sonra:hover{border-color:var(--amber)}
</style>
