// IndexNow: sitemap'teki tüm adresleri Bing, Yandex ve diğer IndexNow arama motorlarına bildirir (ChatGPT arama ve Copilot Bing dizinini kullanır).
// Yayından SONRA çalıştırılır (cPanel Deploy HEAD Commit'ten sonra): npm run indexnow
// Anahtar dosyası public/<anahtar>.txt; sitede https://ygurehberi.com/<anahtar>.txt olarak erişilebilir olmalı.
import { readdirSync, readFileSync } from 'node:fs'

const HOST = 'ygurehberi.com'
const dosya = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f))
if (!dosya) throw new Error('public/ içinde IndexNow anahtar dosyası yok.')
const key = dosya.slice(0, -4)
const urlList = [...readFileSync('deploy/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

const yanit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${dosya}`, urlList })
})
console.log(`IndexNow: ${urlList.length} adres gönderildi → HTTP ${yanit.status} ${yanit.statusText}`)
if (!yanit.ok) console.log(await yanit.text())
