<script setup lang="ts">
// Numaralı bölüm başlığı (01, 02…): amber numara, başlık + alt başlık, sağda ikonlu kısa not.
// Eğitim/Sınav/Belgelendirme ve Serbest Çalışma sayfalarında ortak.
import type { Ikon } from '~/data/icerik'

defineProps<{ no: number; id: string; baslik: string; alt?: string; not?: string; ikon?: Ikon }>()
</script>

<template>
  <header class="nb">
    <span class="nb-no">{{ String(no).padStart(2, '0') }}</span>
    <div>
      <h2 :id="id">{{ baslik }}</h2>
      <p v-if="alt" class="nb-alt">{{ alt }}</p>
    </div>
    <p v-if="not" class="nb-not"><Ikon v-if="ikon" :ad="ikon" /><span>{{ not }}</span></p>
  </header>
</template>

<style scoped>
.nb{display:grid;grid-template-columns:auto 1fr minmax(0,420px);gap:clamp(16px,2.4vw,28px);align-items:center;margin-bottom:clamp(28px,3.4vw,44px)}
.nb-no{display:grid;place-items:center;width:clamp(58px,6vw,76px);aspect-ratio:1;border-radius:10px;background:var(--amber);font-family:var(--display);font-weight:800;font-size:clamp(30px,3.2vw,42px);color:#111}
.nb h2{font-size:clamp(34px,4vw,56px)}
.nb-alt{margin:4px 0 0;font-family:var(--display);font-weight:600;font-size:clamp(19px,1.9vw,25px);color:var(--amber-ink)}
.nb-not{display:flex;gap:14px;align-items:flex-start;margin:0;color:var(--muted);font-size:15px;line-height:1.55}
.nb-not .ikon{flex:none;font-size:34px;color:var(--text)}
@media (max-width:900px){.nb{grid-template-columns:auto 1fr}.nb-not{grid-column:1/-1}}
</style>
