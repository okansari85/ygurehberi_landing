<script setup lang="ts">
// YGU Hakkında kategori sayfasındaki makale kartı (kullanıcı 18 Ekim: "makale kartlarına daha iyi bir tasarım").
// Üstte kategori ikonu + tür (Makale / Rehber = sitede zaten olan sayfa) ve soluk sıra numarası; başlık, özet; altta okuma
// süresi ve yuvarlak ok. `one` = öne çıkan kart (koyu zemin, iki sütun).
import type { Ikon } from '~/data/icerik'

const props = defineProps<{ to: string; baslik: string; ozet: string; ikon: Ikon; sira: number; tur: string; okuma?: number; one?: boolean; baslikDuzeyi?: 'h2' | 'h3' }>()
const no = computed(() => String(props.sira).padStart(2, '0'))
</script>

<template>
  <NuxtLink :to="to" class="ymk" :class="{ one }">
    <div class="ymk-ust">
      <span class="ymk-ikon"><Ikon :ad="ikon" /></span>
      <span class="ymk-tur">{{ tur }}</span>
      <span class="ymk-no" aria-hidden="true">{{ no }}</span>
    </div>
    <component :is="baslikDuzeyi ?? 'h2'" class="ymk-baslik">{{ baslik }}</component>
    <p class="ymk-ozet">{{ ozet }}</p>
    <div class="ymk-alt">
      <span v-if="okuma" class="ymk-sure"><Ikon ad="saat" /> {{ okuma }} dk okuma</span>
      <span v-else class="ymk-sure"><Ikon ad="kitap" /> Rehber sayfası</span>
      <span class="ymk-ok" aria-hidden="true"><Ikon ad="ok" /></span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.ymk{position:relative;display:flex;flex-direction:column;height:100%;padding:24px 24px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;text-decoration:none;color:inherit;overflow:hidden;
  transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.ymk::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--amber);transform:scaleY(0);transform-origin:top;transition:transform .25s ease}
.ymk:hover{transform:translateY(-3px);border-color:#E9D9A6;box-shadow:0 22px 40px -28px rgba(0,0,0,.45)}
.ymk:hover::before{transform:scaleY(1)}
.ymk-ust{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.ymk-ikon{display:grid;place-items:center;width:40px;height:40px;border-radius:10px;background:#FFF4D1;color:var(--amber-ink);font-size:21px;flex:none}
.ymk-tur{font-family:var(--display);font-weight:700;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.ymk-no{margin-left:auto;font-family:var(--display);font-weight:800;font-size:34px;line-height:1;color:#EFEBE3}
.ymk-baslik{font-size:clamp(21px,1.8vw,24px);line-height:1.15}
.ymk-ozet{margin:10px 0 20px;color:var(--muted);font-size:14.5px;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.ymk-alt{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:auto}
.ymk-sure{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;color:var(--muted)}
.ymk-sure .ikon{font-size:17px;color:var(--amber-2)}
.ymk-ok{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;border:1px solid var(--line);font-size:18px;color:var(--text);transition:background .2s ease,border-color .2s ease,transform .2s ease}
.ymk:hover .ymk-ok{background:var(--amber);border-color:var(--amber);color:#111;transform:translateX(3px)}

/* Öne çıkan kart: koyu zemin, büyük başlık */
.ymk.one{background:var(--ink);border-color:var(--ink);color:#fff;padding:30px 30px 24px;
  background-image:radial-gradient(circle at 90% 10%,rgba(255,193,7,.18),transparent 50%),repeating-linear-gradient(135deg,rgba(255,193,7,.05) 0 2px,transparent 2px 16px)}
.ymk.one .ymk-ikon{background:rgba(255,193,7,.16);color:var(--amber)}
.ymk.one .ymk-tur{color:var(--amber)}
.ymk.one .ymk-no{color:rgba(255,255,255,.12);font-size:48px}
.ymk.one .ymk-baslik{font-size:clamp(26px,2.6vw,34px);color:#fff}
.ymk.one .ymk-ozet{color:#D8D3CB;font-size:16px;-webkit-line-clamp:4}
.ymk.one .ymk-sure{color:#BDB7AE}
.ymk.one .ymk-ok{border-color:rgba(255,255,255,.25);color:#fff}
.ymk.one:hover{border-color:var(--amber)}
</style>
