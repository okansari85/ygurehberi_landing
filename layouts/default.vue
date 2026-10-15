<template>
  <a href="#icerik" class="atla">İçeriğe geç</a>
  <SiteHeader />
  <main id="icerik">
    <slot />
  </main>
  <SiteFooter />
  <CerezBildirimi />
</template>

<style scoped>
.atla{position:absolute;left:12px;top:-60px;z-index:100;background:var(--amber);color:#111;padding:10px 14px;border-radius:8px;font-weight:700}
.atla:focus{top:12px}
</style>
