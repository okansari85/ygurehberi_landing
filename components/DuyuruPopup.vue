<script setup lang="ts">
// Site geneli duyurular: popup ziyaretçiye bir kez kendiliğinden açılır (tarayıcıda `duyuru-goruldu` = kodlar). Yeni duyuru
// eklenince kodlar değişir, yeniden açılır. Sağ kenardaki sabit megafon düğmesi popup'ı her zaman açar.
// Duyurunun bağlandığı sayfada kendiliğinden açılmaz. Statik sayfa: yalnız tarayıcıda (onMounted) açılır.
import { DUYURULAR } from '~/data/icerik'

const kutu = ref<HTMLDialogElement>()
const route = useRoute()
const kod = DUYURULAR.map((d) => d.kod).join('|')

onMounted(() => {
  if (DUYURULAR.some((d) => d.to === route.path)) return
  try { if (localStorage.getItem('duyuru-goruldu') === kod) return } catch { /* gizli pencere: göster */ }
  ac()
})

function ac() {
  kutu.value?.showModal()
}

function gorulduYap() {
  try { localStorage.setItem('duyuru-goruldu', kod) } catch { /* gizli pencere */ }
}

function kapat() {
  kutu.value?.close()
}
</script>

<template>
  <button type="button" class="megafon" aria-label="Duyurular" title="Duyurular" @click="ac">
    <Ikon ad="megafon" />
    <span class="sayi" aria-hidden="true">{{ DUYURULAR.length }}</span>
  </button>

  <dialog ref="kutu" class="duyuru" aria-labelledby="duyuru-baslik" @close="gorulduYap" @click.self="kapat">
    <div class="ic">
      <button type="button" class="x" aria-label="Kapat" @click="kapat">×</button>
      <span class="ust"><Ikon ad="megafon" /> Duyurular</span>
      <h2 id="duyuru-baslik" class="sr-only">Duyurular</h2>
      <ul>
        <li v-for="d in DUYURULAR" :key="d.kod">
          <span class="tarih">{{ d.tarih }}</span>
          <h3>{{ d.baslik }}</h3>
          <p class="kunye">{{ d.kunye }}</p>
          <p>{{ d.metin }}</p>
          <NuxtLink :to="d.to" class="btn btn-amber" @click="kapat">{{ d.dugme }}</NuxtLink>
        </li>
      </ul>
    </div>
  </dialog>
</template>

<style scoped>
.megafon{position:fixed;z-index:55;right:16px;top:50%;transform:translateY(-50%);width:54px;height:54px;border-radius:50%;border:0;cursor:pointer;
  display:grid;place-items:center;background:var(--amber);color:#111;font-size:26px;box-shadow:0 8px 24px -6px rgba(0,0,0,.45);animation:yanip 1.6s ease-in-out infinite}
.megafon:hover{background:#FFCD2E}
.sayi{position:absolute;top:-4px;right:-4px;min-width:22px;height:22px;padding:0 6px;border-radius:11px;background:var(--ink);color:#fff;font:700 12px/22px var(--body)}
@keyframes yanip{0%,100%{box-shadow:0 0 0 0 rgba(255,193,7,.75),0 8px 24px -6px rgba(0,0,0,.45);opacity:1}50%{box-shadow:0 0 0 14px rgba(255,193,7,0),0 8px 24px -6px rgba(0,0,0,.45);opacity:.6}}
@media (prefers-reduced-motion: reduce){.megafon{animation:none}}

.duyuru{border:0;padding:0;max-width:620px;width:calc(100% - 32px);max-height:calc(100% - 32px);border-radius:var(--r);background:var(--ink);color:#fff;box-shadow:0 24px 70px rgba(0,0,0,.5)}
.duyuru::backdrop{background:rgba(14,14,14,.6)}
.ic{position:relative;padding:26px 28px 24px;border-top:5px solid var(--amber)}
.x{position:absolute;top:10px;right:12px;width:40px;height:40px;border:0;background:transparent;color:#fff;font-size:28px;line-height:1;cursor:pointer;border-radius:8px}
.x:hover{color:var(--amber)}
.ust{display:flex;align-items:center;gap:8px;font-size:15px;margin-bottom:14px}
ul{list-style:none;margin:0;padding:0;display:grid;gap:14px}
li{border:1px solid var(--line-d);border-radius:var(--r);padding:18px 20px}
.tarih{font-size:12.5px;color:var(--muted-d)}
h3{font-size:clamp(24px,3.2vw,30px);margin:4px 0 6px}
.kunye{margin:0 0 10px;font-size:13.5px;color:var(--amber)}
p{margin:0 0 14px;font-size:14.5px;line-height:1.6;color:#ECE8E1}
.btn{min-height:42px;padding:0 18px;font-size:16px}
</style>
