// `nuxt generate` çıktısını (.output/public) depoda tutulan deploy/ klasörüne kopyalar; cPanel Git bunu public_html'e alır.
import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const src = '.output/public'
if (!existsSync(`${src}/index.html`)) throw new Error('Önce `nuxt generate` çalışmalı: .output/public/index.html yok.')
rmSync('deploy', { recursive: true, force: true })
cpSync(src, 'deploy', { recursive: true })

// 404 ve SPA yedek sayfası dizine girmesin: robots noindex, canonical yok.
for (const f of ['404.html', '200.html']) {
  const yol = `deploy/${f}`
  if (!existsSync(yol)) continue
  const html = readFileSync(yol, 'utf8')
    .replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, follow">')
    .replace(/<link rel="canonical"[^>]*>/, '')
  writeFileSync(yol, html)
}
console.log('deploy/ güncellendi.')
