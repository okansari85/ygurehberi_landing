<script setup lang="ts">
// Hero arka plan video slider'ı (tasarım: .hero-media + .hero-dots). Geçiş ve otomatik oynatma Swiper'dan (fade, 7 sn);
// alttaki sekmelerin çubuğu Swiper'ın kalan süresiyle dolar. Yalnızca görünen video oynar; hareket azaltma açıksa durur.
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

const slides = [
  { label: 'Yangın', id: 48497 },
  { label: 'Söndürme', id: 49220 },
  { label: 'Algılama', id: 47675 },
  { label: 'Müdahale', id: 47316 }
]
const src = (id: number, q: number) => `https://assets.mixkit.co/videos/${id}/${id}-${q}.mp4`

const swiper = shallowRef<SwiperType | null>(null)
const current = ref(0)
const progress = ref(0)
const videos = ref<HTMLVideoElement[]>([])
let visible = true
let io: IntersectionObserver | null = null

function syncVideos() {
  videos.value.forEach((v, k) => {
    if (k === current.value && visible) {
      v.preload = 'auto'
      const p = v.play()
      if (p?.catch) p.catch(() => {})
    } else {
      // Solma bitene kadar önceki video oynamaya devam eder
      setTimeout(() => { if (k !== current.value || !visible) v.pause() }, 1500)
    }
  })
  const next = videos.value[(current.value + 1) % slides.length]
  if (next && next.preload !== 'auto') next.preload = 'auto'
}

function onInit(s: SwiperType) {
  swiper.value = s
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) s.autoplay?.stop()
}

function onChange(s: SwiperType) {
  current.value = s.realIndex
  progress.value = 0
  const v = videos.value[current.value]
  if (v) try { v.currentTime = 0 } catch {}
  syncVideos()
}

// Swiper kalan süreyi 1 → 0 verir; çubuk 0 → 1 dolar
const onTimeLeft = (_s: SwiperType, _ms: number, left: number) => { progress.value = 1 - left }
const go = (i: number) => swiper.value?.slideToLoop(i)

onMounted(() => {
  const el = document.getElementById('heroMedia')
  if (!el) return
  io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; syncVideos() }, { threshold: 0.05 })
  io.observe(el)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <div id="heroMedia" class="hero-media">
    <Swiper
      :modules="[Autoplay, EffectFade]"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :speed="1400"
      :loop="true"
      :allow-touch-move="false"
      :autoplay="{ delay: 7000, disableOnInteraction: false }"
      @swiper="onInit"
      @slide-change="onChange"
      @autoplay-time-left="onTimeLeft"
    >
      <SwiperSlide v-for="(s, i) in slides" :key="s.id">
        <video
          :ref="(el) => { if (el) videos[i] = el as HTMLVideoElement }"
          :autoplay="i === 0"
          muted
          loop
          playsinline
          :preload="i === 0 ? 'auto' : 'metadata'"
          aria-hidden="true"
        >
          <source :src="src(s.id, 720)" type="video/mp4">
          <source :src="src(s.id, 360)" type="video/mp4">
        </video>
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="hero-dots" role="tablist" aria-label="Arka plan videoları">
    <button
      v-for="(s, i) in slides"
      :key="s.id"
      type="button"
      class="hd"
      :class="{ on: i === current, done: i < current }"
      role="tab"
      :aria-selected="i === current"
      @click="go(i)"
    >
      <span class="hd-l">{{ s.label }}</span>
      <span class="hd-bar"><i :style="{ transform: `scaleX(${i < current ? 1 : i === current ? progress.toFixed(3) : 0})` }" /></span>
    </button>
  </div>
</template>
