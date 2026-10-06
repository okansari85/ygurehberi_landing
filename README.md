# YGU Rehberi

ygurehberi.com tanıtım sitesi (Nuxt 4, statik çıktı).

## Geliştirme
```
npm install
npm run dev
```

## Yayın (cPanel Git)
1. `npm run build:deploy` — siteyi derler, çıktıyı `deploy/` klasörüne koyar.
2. Değişiklikleri commit'leyip GitHub'a gönderin.
3. cPanel › Git Version Control › depo › **Pull or Deploy**: "Update from Remote", sonra "Deploy HEAD Commit".
   `.cpanel.yml` `deploy/` içeriğini `public_html`'e kopyalar (alan adı başka klasördeyse `.cpanel.yml`'deki `DEPLOYPATH`'i değiştirin).
