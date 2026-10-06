<script setup lang="ts">
// YGU Rehberi landing (design/ygurehberi-landing.html birebir). Hero video slider: HeroSlider (Swiper).
// Kaydırma efektleri (hero küçülmesi, sayaçlar, yapışkan hikâye videosu, kelime kelime yanan cümle, yatay rehber şeridi,
// paralaks video bandı, üst ilerleme çizgisi) tasarımın kendi kodundan taşındı; sayfadan çıkınca temizlenir.
// Kontrol aracının adresi (tasarımda [ARAC-LINKI]): varsayılan sitedeki /kontrol sayfası.
const aracUrl = String(useRuntimeConfig().public.aracUrl || '/kontrol')
const mixkit = (id: number, q: number) => `https://assets.mixkit.co/videos/${id}/${id}-${q}.mp4`

const facts = [
  { to: 9, suffix: '', text: "BYKHY'deki kullanım sınıfının tamamı (Md. 9–17) tek araçta" },
  { to: 2, suffix: ' dk', text: 'Binanızın periyodik kontrol süresini öğrenmek için yeterli' },
  { to: 0, suffix: ' ₺', text: 'Ön değerlendirme tamamen ücretsiz' }
]

const steps = [
  { tag: 'Yapı düzeni', video: 49220, title: 'Yapı düzenini seçin', text: "Konut, konaklama, büro, ticaret, toplanma, depolama… Binanızın esas kullanımını BYKHY'deki 9 sınıf arasından seçin.", icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>' },
  { tag: 'Kullanımlar', video: 47675, title: 'İçindeki işletmeleri ekleyin', text: 'Zemin kattaki market, restoran ya da büro… Binadaki diğer kullanımları alanlarıyla birlikte ekleyin; şema anında güncellensin.', icon: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><path d="M17 14v6M14 17h6"/>' },
  { tag: 'Yükseklik', video: 48788, title: 'Bina yüksekliğini girin', text: 'Değerlendirmede kat sayısı değil, yapı yüksekliği esas alınır. Eşikleri ve tanımı araç içinde açıklıyoruz.', icon: '<path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4"/>' },
  { tag: 'Sonuç', video: 47316, title: 'Kontrol periyodunuzu görün', text: 'Tabi olup olmadığınızı, kaç yılda bir kontrol gerektiğini ve sonucu belirleyen bilgileri tek ekranda görün.', icon: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>' }
]
const activeStep = ref(0)

const statement = 'Periyodik kontrol zorunlu olmasa bile yangın riski ortadan kalkmaz. Hazırlık, kontrol gününden önce başlar.'
const highlight = ['yangın', 'riski']
const words = statement.split(/\s+/).map((w) => ({ w, hl: highlight.includes(w.replace(/[.,]/g, '').toLowerCase()) }))

const cards = [
  { tone: 'dark', n: 'Araç', title: 'Ücretsiz periyodik kontrol', text: 'Binanızın kontrol süresini 2 dakikada öğrenin.', icon: '<path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5"/>' },
  { tone: '', n: 'Mevzuat', title: 'Yönetmelikler, madde madde', text: 'BYKHY ve ilgili düzenlemelerin açıklamalı, güncel özetleri.', icon: '<path d="M5 3h10l4 4v14H5z"/><path d="M9 12h6M9 16h4"/>' },
  { tone: '', n: 'Ekipman', title: 'Söndürme ve algılama', text: 'Söndürücü, sprinkler, dedektör ve hidrant seçimi, bakım aralıkları.', icon: '<rect x="8" y="7" width="8" height="14" rx="2"/><path d="M10 7V4h4v3M14 4h4"/>' },
  { tone: '', n: 'Saha', title: 'Kontrol listeleri', text: 'Sahada kullanılabilir denetim ve periyodik kontrol formları.', icon: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11"/>' },
  { tone: '', n: 'Tahliye', title: 'Kaçış yolları', text: 'Kaçış yolu, acil durum planlaması ve tahliye senaryoları.', icon: '<path d="M14 4a1.5 1.5 0 1 0 0 .01M9 21l3-7 3 3v4M8 11l4-3 3 3 3 1"/>' },
  { tone: 'amber', n: 'Kariyer', title: 'Sınav ve meslek', text: 'YGU belgelendirme sürecine hazırlık notları ve meslek rehberi.', icon: '<path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/>' }
]

const audience = [
  { title: 'Yangın Güvenlik Uzmanları', text: 'Günlük işte hızlı başvuru kaynağı.', icon: '<path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5"/>' },
  { title: 'Uzman adayları', text: 'Belgelendirmeye hazırlananlar.', icon: '<path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/>' },
  { title: "İSG profesyonelleri ve OSGB'ler", text: 'Yangın tarafını güçlendirmek isteyenler.', icon: '<path d="M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z"/>' },
  { title: 'Tesis ve bina yöneticileri', text: 'Yükümlülüklerini net görmek isteyenler.', icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/>' }
]

// Bülten: henüz bir kayıt ucu yok (tasarımdaki TODO); teşekkür mesajı gösterilir.
const subscribed = ref(false)
const year = new Date().getFullYear()

const cleanups: (() => void)[] = []
onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const root = document.documentElement
  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
  // 0: bölümün üstü ekranın üstünde, 1: bölümün altı ekranın altında
  const pinProgress = (el: HTMLElement) => {
    const r = el.getBoundingClientRect(), span = r.height - window.innerHeight
    return span > 0 ? clamp(-r.top / span, 0, 1) : 0
  }
  const play = (v: HTMLVideoElement) => { const p = v.play(); if (p?.catch) p.catch(() => {}) }

  // Görünürken beliren öğeler
  const revealIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target) }
  }), { threshold: 0.15 })
  document.querySelectorAll('.rv').forEach((el) => (reduce ? el.classList.add('in') : revealIO.observe(el)))

  // Sayaçlar
  const countIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    const el = e.target as HTMLElement, to = +(el.dataset.to || 0), dur = 1200
    let t0 = 0
    countIO.unobserve(el)
    if (reduce || to === 0) { el.textContent = String(to); return }
    requestAnimationFrame(function step(t) {
      t0 = t0 || t
      const k = clamp((t - t0) / dur, 0, 1)
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) requestAnimationFrame(step)
    })
  }), { threshold: 0.6 })
  document.querySelectorAll('.count').forEach((el) => countIO.observe(el))

  // Hikâye ve bant videoları yalnız görünürken oynar (hero videolarını HeroSlider yönetir)
  const vidIO = new IntersectionObserver((es) => es.forEach((e) => {
    const v = e.target as HTMLVideoElement
    if (e.isIntersecting && (!v.closest('.story-media') || v.classList.contains('on'))) play(v)
    else v.pause()
  }), { threshold: 0.05 })
  document.querySelectorAll<HTMLVideoElement>('.story-media video, .band video').forEach((v) => vidIO.observe(v))

  // Hikâye: ekrandaki adım yapışkan videoyu değiştirir
  const stepIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    activeStep.value = +((e.target as HTMLElement).dataset.step || 0)
    document.querySelectorAll<HTMLVideoElement>('.story-media video').forEach((v, i) => {
      if (i === activeStep.value) play(v); else v.pause()
    })
  }), { rootMargin: '-45% 0px -45% 0px' })
  document.querySelectorAll('.step').forEach((s) => stepIO.observe(s))

  // Kaydırmaya bağlı efektler
  const hero = document.getElementById('hero')!, stmt = document.getElementById('statement')!, band = document.getElementById('band')!
  const hs = document.getElementById('rehber')!, track = document.getElementById('track')!, hdr = document.getElementById('hdr')!
  const bandVid = band.querySelector('video')!, wordEls = stmt.querySelectorAll('.w')
  let hMax = 0, ticking = false
  const sizeH = () => {
    if (window.innerWidth <= 760) { hs.style.height = ''; hMax = 0; track.style.setProperty('--tx', '0px'); return }
    hMax = Math.max(0, track.scrollWidth - window.innerWidth)
    hs.style.height = `${hMax + window.innerHeight * 1.15}px`
  }
  const frame = () => {
    ticking = false
    const y = window.scrollY, docH = document.documentElement.scrollHeight - window.innerHeight
    root.style.setProperty('--sp', docH > 0 ? (y / docH).toFixed(4) : '0')
    hdr.classList.toggle('solid', y > window.innerHeight * 0.6)
    if (reduce) return
    hero.style.setProperty('--hp', pinProgress(hero).toFixed(4))
    const lit = Math.round(pinProgress(stmt) * 1.25 * wordEls.length)
    wordEls.forEach((w, i) => w.classList.toggle('lit', i < lit))
    if (hMax) track.style.setProperty('--tx', `${(-pinProgress(hs) * hMax).toFixed(1)}px`)
    const br = band.getBoundingClientRect()
    if (br.bottom > 0 && br.top < window.innerHeight) {
      const k = (br.top + br.height / 2 - window.innerHeight / 2) / window.innerHeight
      bandVid.style.setProperty('--py', `${(k * -120).toFixed(1)}px`)
    }
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame) } }
  const onResize = () => { sizeH(); onScroll() }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('load', onResize)
  sizeH(); frame()

  cleanups.push(() => {
    revealIO.disconnect(); countIO.disconnect(); vidIO.disconnect(); stepIO.disconnect()
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('load', onResize)
  })
})
onBeforeUnmount(() => cleanups.forEach((fn) => fn()))
</script>

<template>
  <div>
    <div class="progress" aria-hidden="true"><span /></div>

    <header id="hdr" class="hdr">
      <div class="wrap">
        <a class="logo" href="#top" aria-label="YGU Rehberi ana sayfa"><BrandLogo /></a>
        <nav class="nav" aria-label="Ana menü">
          <a href="#nasil">Ücretsiz kontrol</a>
          <a href="#rehber">Rehber</a>
          <a href="#kimler">Kimler için</a>
          <a href="#bulten">Bülten</a>
        </nav>
        <a class="btn btn-amber" :href="aracUrl">Ücretsiz kontrol et</a>
      </div>
    </header>

    <main id="top">
      <!-- HERO -->
      <section id="hero" class="hero" aria-label="Giriş">
        <div class="hero-pin">
          <HeroSlider />
          <div class="hero-copy">
            <span class="eyebrow">Yangın Güvenlik Uzmanlığı</span>
            <h1>Yangın güvenliğinde <em>tek</em> rehber.</h1>
            <p>Mevzuat, ekipman, tasarım ve denetim — Yangın Güvenlik Uzmanları ve bu mesleğe hazırlananlar için sade, güncel ve uygulamaya dönük bilgi.</p>
            <div class="hero-ctas">
              <a class="btn btn-amber" :href="aracUrl">Binanızı ücretsiz kontrol edin
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              <a class="btn btn-ghost" href="#rehber">Rehberi keşfedin</a>
            </div>
          </div>
          <div class="hero-after" aria-hidden="true"><h2>Binanızın kontrolü <span>ne zaman?</span></h2></div>
          <div class="scroll-hint" aria-hidden="true">Kaydırın<i /></div>
        </div>
      </section>

      <!-- FACTS -->
      <section class="facts" aria-label="Kısaca">
        <div class="wrap">
          <div v-for="(f, i) in facts" :key="i" class="fact rv" :class="i ? `d${i}` : ''"><b><span class="count" :data-to="f.to">0</span>{{ f.suffix }}</b><span>{{ f.text }}</span></div>
        </div>
      </section>

      <!-- STORY -->
      <section id="nasil" class="story" aria-label="Ücretsiz kontrol nasıl çalışır">
        <div class="wrap">
          <div class="story-head rv">
            <span class="eyebrow">Ücretsiz periyodik kontrol aracı</span>
            <h2>Binanızı tanıtın, süreyi biz hesaplayalım.</h2>
            <p>Birkaç bilgiyle binanızın periyodik yangın kontrolüne tabi olup olmadığını ve kaç yılda bir kontrol yapılması gerektiğini görün.</p>
          </div>
          <div class="story-media" aria-hidden="true">
            <video v-for="(s, i) in steps" :key="s.video" :class="{ on: i === activeStep }" muted loop playsinline preload="metadata">
              <source :src="mixkit(s.video, 720)" type="video/mp4">
              <source :src="mixkit(s.video, 360)" type="video/mp4">
            </video>
            <span class="tag">{{ steps[activeStep]!.tag }}</span>
          </div>
          <div class="steps">
            <article v-for="(s, i) in steps" :key="s.tag" class="step" :class="{ on: i === activeStep }" :data-step="i">
              <span class="ico"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="s.icon" /></span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- STATEMENT -->
      <section id="statement" class="statement" aria-label="Neden önemli">
        <div class="statement-pin">
          <p><template v-for="(w, i) in words" :key="i"><span class="w" :class="{ hl: w.hl }">{{ w.w }}</span>{{ i < words.length - 1 ? ' ' : '' }}</template></p>
        </div>
      </section>

      <!-- HORIZONTAL GUIDE -->
      <section id="rehber" class="hscroll" aria-label="Rehberde neler var">
        <div class="hscroll-pin">
          <div class="wrap hscroll-head">
            <div>
              <span class="eyebrow" style="color: var(--amber-d)">Rehber</span>
              <h2>Rehberde neler var?</h2>
            </div>
            <p>Dağınık mevzuatı ve saha deneyimini tek yerde, anlaşılır başlıklar altında topluyoruz.</p>
          </div>
          <div id="track" class="track">
            <article v-for="c in cards" :key="c.n" class="card" :class="c.tone">
              <span class="n" :style="c.tone === 'amber' ? 'color:#3D2D00' : undefined">{{ c.n }}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="c.icon" />
              <div><h3>{{ c.title }}</h3><p>{{ c.text }}</p></div>
            </article>
          </div>
        </div>
      </section>

      <!-- PARALLAX BAND -->
      <section id="band" class="band" aria-label="Uzmanlar için">
        <video autoplay muted loop playsinline preload="metadata" aria-hidden="true">
          <source :src="mixkit(47315, 720)" type="video/mp4">
          <source :src="mixkit(47315, 360)" type="video/mp4">
        </video>
        <div class="inner rv">
          <span class="eyebrow">Sahadan, uzmanlar için</span>
          <h2>Bilgi, en çok ihtiyaç anında değerlidir.</h2>
          <p>Yangın Güvenlik Uzmanlarının günlük işinde hızlıca başvurabileceği, uygulamaya dönük bir kaynak.</p>
          <a class="btn btn-amber" href="#bulten">Erken erişime katılın</a>
        </div>
      </section>

      <!-- AUDIENCE -->
      <section id="kimler" class="aud" aria-label="Kimler için">
        <div class="wrap">
          <span class="eyebrow rv">Kimler için?</span>
          <h2 class="rv d1">Yangın güvenliğiyle ilgilenen herkes için.</h2>
          <div class="aud-grid">
            <div v-for="(a, i) in audience" :key="a.title" class="aud-item rv" :class="i ? `d${i}` : ''">
              <span class="dot"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" v-html="a.icon" /></span>
              <h3>{{ a.title }}</h3>
              <p>{{ a.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- TOOL CTA -->
      <section id="arac" class="tool" aria-label="Ücretsiz kontrol aracı">
        <div class="wrap">
          <div class="tool-box rv">
            <div>
              <span class="eyebrow">Ücretsiz ön değerlendirme</span>
              <h2>Binanızın kontrol süresini 2 dakikada öğrenin.</h2>
              <p>Periyodik yangın kontrolüne tabi olup olmadığınızı, kaç yılda bir kontrol gerektiğini ve sonucu belirleyen bilgileri görün.</p>
              <a class="btn btn-dark" :href="aracUrl">Ücretsiz kontrol et
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <ul class="tool-list">
              <li>Periyodik kontrole tabi misiniz?</li>
              <li>Kaç yılda bir kontrol yapılmalı?</li>
              <li>Hangi kullanım sınıfındasınız?</li>
              <li>Sonucu hangi bilgiler belirliyor?</li>
            </ul>
          </div>
          <p class="rv" style="color: var(--muted); font-size: 14px; margin: 18px 4px 0">Bu çalışma, verdiğiniz bilgilere göre hazırlanan ücretsiz bir ön değerlendirmedir; resmî periyodik yangın kontrolü veya Yangın Güvenlik Raporu yerine geçmez.</p>
        </div>
      </section>

      <!-- NEWSLETTER -->
      <section id="bulten" class="news" aria-label="Bülten">
        <div class="wrap">
          <div class="news-box rv">
            <div>
              <h2>Yayına girdiğinde ilk siz haberdar olun.</h2>
              <p>Yeni içerikler ve mevzuat değişiklikleri e-postanıza gelsin.</p>
            </div>
            <p v-if="subscribed" style="margin: 0; font-weight: 600">Teşekkürler, listeye eklendiniz.</p>
            <form v-else class="news-form" @submit.prevent="subscribed = true">
              <label for="eposta" class="sr">E-posta adresi</label>
              <input id="eposta" type="email" required placeholder="ornek@firma.com">
              <button class="btn btn-amber" type="submit">Kaydol</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="ftr">
      <div class="wrap">
        <span style="display: flex; align-items: center; gap: 14px"><a href="#top" aria-label="YGU Rehberi ana sayfa" style="display: flex"><BrandLogo height="34px" /></a>© {{ year }} ygurehberi.com</span>
        <span>[İLETİŞİM E-POSTASI]</span>
      </div>
    </footer>
  </div>
</template>
