# Troubleshooting

Dokumen ini berisi seluruh permasalahan yang ditemukan selama proses deployment website **KMI Company Profile**, beserta penyebab, solusi, dan langkah pencegahannya.

Seluruh kasus pada dokumen ini merupakan pengalaman deployment aktual dan telah berhasil diselesaikan.

---

# Overview

Dokumen ini berfungsi sebagai **Knowledge Base (KB)** deployment.

Setiap kasus terdiri dari:

- Symptoms
- Root Cause
- Resolution
- Verification
- Prevention

---

# Case 01

# Next.js Build Stopped (Killed)

## Symptoms

Saat menjalankan:

```bash
npm run build
```

proses build berhenti dengan pesan:

```text
Killed
```

Tidak terdapat stack trace ataupun error tambahan.

---

## Root Cause

VPS dengan RAM 2 GB kehabisan memori ketika proses build Next.js.

Kernel Linux menghentikan proses (Out of Memory Killer).

---

## Resolution

Buat Swap Memory sebesar 2 GB.

```bash
sudo fallocate -l 2G /swapfile

sudo chmod 600 /swapfile

sudo mkswap /swapfile

sudo swapon /swapfile
```

---

## Verification

```bash
free -h
```

Expected.

```text
Swap
2.0Gi
```

Kemudian jalankan kembali.

```bash
npm run build
```

---

## Prevention

Aktifkan Swap Memory sebelum deployment pertama.

---

# Case 02

# PM2 Status Errored

## Symptoms

```bash
pm2 list
```

Menampilkan.

```text
errored
```

---

## Root Cause

PM2 menjalankan aplikasi melalui:

```bash
pm2 start npm
```

Image Node.js Domainesia menggunakan **mise**, sehingga script npm tidak dapat dijalankan dengan pendekatan tersebut.

---

## Resolution

Gunakan.

```text
ecosystem.config.cjs
```

Kemudian jalankan.

```bash
pm2 start ecosystem.config.cjs
```

---

## Verification

```bash
pm2 list
```

Expected.

```text
online
```

---

## Prevention

Gunakan ecosystem configuration sebagai standar deployment.

---

# Case 03

# Unexpected identifier 'pipefail'

## Symptoms

PM2 log.

```text
Unexpected identifier 'pipefail'
```

---

## Root Cause

PM2 mencoba menjalankan file shell sebagai JavaScript.

Hal ini terjadi karena script npm menggunakan shell wrapper bawaan **mise**.

---

## Resolution

Jangan menjalankan.

```bash
pm2 start npm
```

Gunakan.

```bash
pm2 start ecosystem.config.cjs
```

atau langsung menjalankan.

```text
.next/standalone/server.js
```

---

## Verification

```bash
pm2 logs
```

Tidak ada lagi error.

---

## Prevention

Gunakan konfigurasi PM2 berbasis ecosystem.

---

# Case 04

# Website Without CSS

## Symptoms

Website berhasil dibuka.

Namun:

- CSS hilang.
- Gambar tidak tampil.
- Font tidak termuat.

---

## Root Cause

Folder.

```text
.next/static
```

belum dicopy ke standalone output.

---

## Resolution

```bash
cp -R .next/static .next/standalone/.next/

cp -R public .next/standalone/
```

---

## Verification

Refresh browser.

Pastikan CSS telah termuat.

---

## Prevention

Tambahkan proses copy asset ke dalam:

```text
deploy.sh
```

---

# Case 05

# next start Warning

## Symptoms

```text
next start does not work with output standalone
```

---

## Root Cause

Project menggunakan.

```text
output: 'standalone'
```

Mode ini tidak menggunakan.

```bash
next start
```

---

## Resolution

Gunakan.

```bash
node .next/standalone/server.js
```

atau.

```bash
pm2 start ecosystem.config.cjs
```

---

## Verification

Website berjalan melalui PM2.

---

## Prevention

Selalu gunakan Standalone Server.

---

# Case 06

# Nginx HTTP2 Error

## Symptoms

```text
unknown directive "http2"
```

---

## Root Cause

Sintaks konfigurasi tidak sesuai dengan versi Nginx.

Server menggunakan:

```text
Nginx 1.24
```

---

## Resolution

Gunakan.

```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

Bukan.

```nginx
http2 on;
```

---

## Verification

```bash
sudo nginx -t
```

Expected.

```text
syntax is ok

test is successful
```

---

## Prevention

Sesuaikan konfigurasi dengan versi Nginx yang digunakan.

---

# Case 07

# Root Domain Cannot Use "@"

## Symptoms

Panel DNS Rumahweb menampilkan error.

```text
Record name @ must not contain special characters
```

---

## Root Cause

Panel DNS Rumahweb tidak menggunakan simbol `@` untuk root domain.

---

## Resolution

Kosongkan field Host/Domain.

---

## Verification

Pastikan A Record berhasil dibuat.

---

## Prevention

Gunakan host kosong untuk root domain pada panel DNS Rumahweb.

---

# Case 08

# HTTP Redirect Not Requested by Certbot

## Symptoms

Saat menjalankan.

```bash
sudo certbot --nginx
```

Tidak muncul pertanyaan mengenai redirect HTTP.

---

## Root Cause

Certbot mendeteksi konfigurasi Nginx tertentu dan langsung membuat konfigurasi redirect otomatis.

---

## Resolution

Verifikasi konfigurasi Nginx.

Pastikan HTTP tetap diarahkan ke HTTPS.

---

## Verification

```text
http://konsultanmanajemenindonesia.com
```

↓

```text
https://konsultanmanajemenindonesia.com
```

---

## Prevention

Selalu lakukan pengujian setelah proses instalasi SSL.

---

# Common Verification Commands

## PM2

```bash
pm2 list
```

---

## Nginx

```bash
sudo nginx -t
```

---

## Firewall

```bash
sudo ufw status
```

---

## Fail2Ban

```bash
sudo fail2ban-client status sshd
```

---

## SSL

```bash
sudo certbot certificates
```

---

## Memory

```bash
free -h
```

---

## Disk

```bash
df -h
```

---

# Lessons Learned

Beberapa hal penting yang diperoleh selama deployment KMI:

- VPS 2 GB memerlukan Swap Memory untuk proses build.
- Next.js Standalone tidak menggunakan `next start`.
- Asset statis harus disalin ke folder standalone.
- PM2 lebih stabil menggunakan `ecosystem.config.cjs`.
- DNS Rumahweb menggunakan host kosong untuk root domain.
- Konfigurasi Nginx harus disesuaikan dengan versi yang digunakan.
- HTTPS sebaiknya dikonfigurasi sebelum website dipublikasikan.

---

# References

- Next.js Documentation
- PM2 Documentation
- Nginx Documentation
- Certbot Documentation
- Ubuntu Documentation