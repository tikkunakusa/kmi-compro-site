# Project Deployment

Dokumen ini menjelaskan proses deployment aplikasi **KMI Company Profile** ke server production menggunakan **Next.js Standalone** dan **PM2**.

---

# Overview

Tahapan deployment aplikasi terdiri dari:

1. Clone repository
2. Konfigurasi environment
3. Install dependency
4. Build aplikasi
5. Standalone deployment
6. Konfigurasi PM2
7. Deploy Script

Dokumen ini mengasumsikan server telah selesai dipersiapkan sesuai pada:

> **01-server-setup.md**

---

# Prerequisites

Pastikan server telah memenuhi persyaratan berikut.

- Ubuntu Server telah dikonfigurasi.
- Node.js tersedia.
- PM2 telah terinstal.
- Git telah terinstal.
- Swap Memory telah aktif.

---

# Application Information

| Item | Value |
|------|-------|
| Framework | Next.js App Router |
| Runtime | Node.js |
| Deployment Mode | Standalone |
| Process Manager | PM2 |
| Application Port | 3434 |

---

# 1. Clone Repository

## Concept

Source code aplikasi disimpan pada Git repository.

Repository hanya perlu di-clone satu kali pada saat deployment awal.

Selanjutnya deployment dilakukan menggunakan proses update (`git pull`).

---

## Implementation

Clone repository.

```bash
git clone <REPOSITORY_URL>
```

Masuk ke project.

```bash
cd kmi-compro-site
```

---

## Verification

Pastikan struktur project berhasil dibuat.

```bash
ls
```

Expected:

```text
app/
components/
public/
package.json
next.config.ts
...
```

---

# 2. Configure Environment

## Concept

Aplikasi production menggunakan file environment terpisah.

Seluruh credential production harus disimpan pada:

```text
.env.production
```

File ini **tidak boleh** disimpan ke repository Git.

---

## Implementation

Buat file.

```bash
nano .env.production
```

Masukkan seluruh environment production.

---

## Verification

Pastikan file tersedia.

```bash
ls -la
```

Expected:

```text
.env.production
```

---

# 3. Install Dependencies

## Concept

Install seluruh dependency yang diperlukan aplikasi.

---

## Implementation

```bash
npm install
```

---

## Verification

Pastikan proses selesai tanpa error.

---

# 4. Build Application

## Concept

Deployment menggunakan mode:

```text
output: "standalone"
```

Sehingga proses build akan menghasilkan server Node.js mandiri.

---

## Implementation

```bash
npm run build
```

---

## Verification

Pastikan folder berikut berhasil dibuat.

```text
.next/
```

dan

```text
.next/standalone/
```

---

# 5. Standalone Deployment

## Concept

Next.js Standalone **tidak otomatis** menyertakan asset statis.

Oleh karena itu folder berikut perlu disalin secara manual.

- public
- .next/static

Tanpa langkah ini website akan tampil tanpa CSS maupun asset.

---

## Implementation

Copy static assets.

```bash
cp -R .next/static .next/standalone/.next/
```

Copy public assets.

```bash
cp -R public .next/standalone/
```

---

## Verification

Pastikan struktur menjadi.

```text
.next/
└── standalone/
    ├── public/
    ├── server.js
    └── .next/
        └── static/
```

---

# 6. PM2 Configuration

## Concept

PM2 digunakan sebagai process manager production.

Deployment KMI menggunakan file konfigurasi:

```text
ecosystem.config.cjs
```

Pendekatan ini dipilih karena image Node.js Domainesia menggunakan **mise**, sehingga menjalankan aplikasi melalui `npm` dapat menimbulkan error.

---

## Implementation

Jalankan aplikasi.

```bash
pm2 start ecosystem.config.cjs
```

Simpan konfigurasi.

```bash
pm2 save
```

Aktifkan auto startup.

```bash
pm2 startup
```

Jalankan kembali command yang diberikan PM2.

Kemudian simpan kembali.

```bash
pm2 save
```

---

## Verification

```bash
pm2 list
```

Expected.

```text
kmi-compro-site
online
```

---

# 7. Deploy Script

## Concept

Deploy Script digunakan untuk mempercepat proses update aplikasi.

Seluruh proses deployment dapat dijalankan menggunakan satu command.

---

## Implementation

Buat file.

```text
deploy.sh
```

Berikan permission.

```bash
chmod +x deploy.sh
```

Deployment.

```bash
./deploy.sh
```

---

## Deployment Flow

Deploy script menjalankan proses berikut.

```text
Git Pull
      │
      ▼
npm install
      │
      ▼
npm run build
      │
      ▼
Copy public
      │
      ▼
Copy .next/static
      │
      ▼
PM2 Restart
```

---

# Rollback

Apabila deployment gagal.

Kembalikan repository.

```bash
git reset --hard HEAD
```

atau checkout ke commit sebelumnya.

```bash
git checkout <commit>
```

Kemudian jalankan kembali deploy script.

---

# Troubleshooting

## Build berhenti

```text
Killed
```

### Penyebab

Server kehabisan RAM.

### Solusi

Aktifkan Swap Memory.

---

## PM2 Error

```text
Unexpected identifier 'pipefail'
```

### Penyebab

NodeJS Image Domainesia menggunakan **mise**.

### Solusi

Jangan menggunakan.

```bash
pm2 start npm
```

Gunakan.

```bash
pm2 start ecosystem.config.cjs
```

---

## Website tampil tanpa CSS

### Penyebab

Folder.

```text
.next/static
```

belum dicopy.

### Solusi

```bash
cp -R .next/static .next/standalone/.next/
```

---

## PM2 Status

```text
errored
```

### Penyebab

Konfigurasi PM2 tidak menggunakan standalone server.

### Solusi

Gunakan.

```text
.next/standalone/server.js
```

sebagai script utama.

---

## Next.js Warning

```text
next start does not work with output standalone
```

### Penyebab

Aplikasi dijalankan menggunakan.

```bash
next start
```

### Solusi

Gunakan.

```bash
node .next/standalone/server.js
```

atau melalui PM2 ecosystem.

---

# References

- Next.js Standalone Documentation
- PM2 Documentation
- Node.js Documentation

---

# Verification Checklist

- [ ] Repository berhasil di-clone
- [ ] Environment tersedia
- [ ] npm install berhasil
- [ ] Build berhasil
- [ ] Standalone folder tersedia
- [ ] Static Assets berhasil dicopy
- [ ] PM2 berjalan
- [ ] PM2 Startup aktif
- [ ] Deploy Script berhasil dijalankan

---

# Next Document

➡️ **03-nginx-ssl.md**

Dokumen berikutnya menjelaskan konfigurasi Nginx, DNS, SSL Let's Encrypt, HTTP → HTTPS Redirect, dan WWW → Non-WWW Redirect.