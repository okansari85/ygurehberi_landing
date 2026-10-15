<script setup lang="ts">
// Konu metin blokları (data/konular.ts): konu sayfalarında ve SSS yanıtlarında aynı görünüm.
import { CALISMA_ALANLARI } from '~/data/icerik'
import type { KonuBlok } from '~/data/konular'

defineProps<{ bloklar: KonuBlok[] }>()
</script>

<template>
  <div class="makale">
    <template v-for="(b, i) in bloklar" :key="i">
      <p v-if="b.tip === 'giris'" class="giris">{{ b.metin }}</p>
      <p v-else-if="b.tip === 'p'">{{ b.metin }}</p>
      <h2 v-else-if="b.tip === 'h2'" :id="b.id">{{ b.metin }}</h2>
      <h3 v-else-if="b.tip === 'h3'">{{ b.metin }}</h3>
      <aside v-else-if="b.tip === 'not'" class="not"><Ikon ad="bilgi" /><p><strong>{{ b.etiket }}:</strong> {{ b.metin }}</p></aside>
      <div v-else-if="b.tip === 'tablo'" class="tablo-kap">
        <table>
          <thead><tr><th v-for="h in b.basliklar" :key="h" scope="col">{{ h }}</th></tr></thead>
          <tbody><tr v-for="s in b.satirlar" :key="s[0]"><th scope="row">{{ s[0] }}</th><td>{{ s[1] }}</td></tr></tbody>
        </table>
      </div>
      <ol v-else-if="b.tip === 'adimlar'" class="adimlar">
        <li v-for="(a, j) in b.liste" :key="a.baslik">
          <span class="adim-no">{{ String(j + 1).padStart(2, '0') }}</span>
          <div><strong>{{ a.baslik }}</strong><p v-if="a.metin">{{ a.metin }}</p></div>
        </li>
      </ol>
      <component :is="b.numarali ? 'ol' : 'ul'" v-else-if="b.tip === 'altlar'" class="altlar" :class="{ numarali: b.numarali }">
        <li v-for="a in b.liste" :key="a.baslik" class="kart">
          <h3>{{ a.baslik }}</h3>
          <p>{{ a.metin }}</p>
        </li>
      </component>
      <ul v-else-if="b.tip === 'yapilar'" class="yapilar">
        <li v-for="y in CALISMA_ALANLARI.yapilar" :key="y.ad" class="kart">
          <img :src="`/img/${y.gorsel}.webp`" :alt="`${y.ad} ${y.alt}`" width="1536" height="1024" loading="lazy">
          <span><strong>{{ y.ad }}</strong> {{ y.alt }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.makale{font-size:17px;line-height:1.7;color:#33312E}
.makale > p{margin:0 0 18px}
.makale .giris{font-size:clamp(19px,1.7vw,22px);line-height:1.55;color:var(--text);font-weight:500}
.makale h2{font-size:clamp(28px,2.8vw,38px);margin:48px 0 16px;scroll-margin-top:100px}
.makale h3{font-size:22px;margin:28px 0 10px}
.makale h2::before{content:"";display:block;width:46px;height:5px;border-radius:3px;background:var(--amber);margin-bottom:16px}

.not{display:flex;gap:14px;align-items:flex-start;background:#FFF8E1;border-left:4px solid var(--amber);border-radius:6px;padding:16px 18px;margin:24px 0}
.not .ikon{flex:none;font-size:22px;color:var(--amber-ink);margin-top:2px}
.not p{margin:0;font-size:15.5px;line-height:1.6}

.tablo-kap{overflow-x:auto;margin:20px 0 24px;border:1px solid var(--line);border-radius:var(--r)}
table{width:100%;border-collapse:collapse;font-size:15.5px;line-height:1.5}
thead th{background:var(--ink);color:#fff;font-family:var(--display);font-size:17px;letter-spacing:.02em;text-align:left;padding:12px 16px}
tbody th,tbody td{padding:14px 16px;border-top:1px solid var(--line);text-align:left;vertical-align:top}
tbody th{font-weight:600;color:var(--text);width:38%}
tbody tr:nth-child(even){background:var(--paper-2)}

.adimlar{list-style:none;margin:20px 0 28px;padding:0;display:grid;gap:10px}
.adimlar li{display:flex;gap:16px;align-items:flex-start;background:var(--paper-2);border-radius:var(--r);padding:16px 18px}
.adim-no{flex:none;display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--amber);color:#111;font-family:var(--display);font-weight:800;font-size:19px}
.adimlar strong{display:block;font-size:17px;line-height:1.4;padding-top:10px}
.adimlar p{margin:4px 0 0;color:var(--muted);font-size:15.5px;line-height:1.55}

.altlar{list-style:none;margin:20px 0 28px;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:14px;counter-reset:alt}
.altlar li{padding:20px 22px}
.altlar h3{font-size:20px;margin:0 0 8px;line-height:1.15}
.altlar p{margin:0;color:var(--muted);font-size:15.5px;line-height:1.6}
.altlar.numarali{grid-template-columns:1fr}
.altlar.numarali li{counter-increment:alt;position:relative;padding-left:72px}
.altlar.numarali li::before{content:counter(alt);position:absolute;left:22px;top:18px;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ink);color:var(--amber);font-family:var(--display);font-weight:800;font-size:17px}
@media (max-width:640px){.altlar{grid-template-columns:1fr}.altlar.numarali li{padding-left:22px;padding-top:62px}}

.yapilar{list-style:none;margin:20px 0 28px;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.yapilar li{overflow:hidden}
.yapilar img{width:100%;aspect-ratio:3/2;object-fit:cover}
.yapilar span{display:block;padding:10px 12px 12px;font-size:14px;line-height:1.4;color:var(--muted)}
.yapilar strong{display:block;color:var(--text);font-family:var(--display);font-size:18px}
@media (max-width:640px){.yapilar{grid-template-columns:1fr 1fr}}
.makale > :first-child{margin-top:0}
</style>
