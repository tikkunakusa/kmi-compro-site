# Nginx, DNS & SSL Configuration

Dokumen ini menjelaskan proses konfigurasi web server **Nginx**, **DNS**, dan **SSL** hingga website KMI dapat diakses melalui domain production menggunakan HTTPS.

---

# Overview

Setelah aplikasi berhasil dijalankan menggunakan PM2, langkah berikutnya adalah menghubungkan aplikasi dengan domain production.

Tahapan yang dilakukan meliputi:

1. Konfigurasi Reverse Proxy Nginx
2. Konfigurasi DNS
3. Instalasi SSL Let's Encrypt
4. Redirect HTTP → HTTPS
5. Redirect WWW → Non-WWW

Dokumen ini mengasumsikan aplikasi telah berhasil dideploy sesuai:

> **02-project-deployment.md**

---

# Prerequisites

Pastikan kondisi berikut telah terpenuhi.

- PM2 berjalan
- Website dapat diakses melalui:

```
http://SERVER_IP:3434
```

- Domain telah aktif
- DNS dapat dikelola

---

# Production Architecture

```text
Internet
     │
     ▼
konsultanmanajemenindonesia.com
     │
     ▼
DNS (Rumahweb)
     │
     ▼
116.xxx.xxx.xxx
     │
     ▼
Nginx
     │
     ▼
127.0.0.1:3434
     │
     ▼
PM2
     │
     ▼
Next.js Standalone
```

---

# 1. Install Nginx

## Concept

Nginx digunakan sebagai reverse proxy.

Keuntungan:

- SSL Termination
- Reverse Proxy
- Compression
- Security Header
- Static File Handling

---

## Implementation

Install.

```bash
sudo apt update

sudo apt install nginx -y
```

Enable service.

```bash
sudo systemctl enable nginx

sudo systemctl start nginx
```

---

## Verification

```bash
sudo systemctl status nginx
```

Expected.

```text
active (running)
```

---

# 2. Reverse Proxy Configuration

## Concept

Aplikasi Next.js berjalan pada:

```
127.0.0.1:3434
```

Nginx bertugas menerima request dari internet dan meneruskannya ke aplikasi.

---

## Configuration File

```
/etc/nginx/sites-available/kmi-compro-site
```

Aktifkan.

```bash
sudo ln -s \
/etc/nginx/sites-available/kmi-compro-site \
/etc/nginx/sites-enabled/
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

Reload.

```bash
sudo systemctl reload nginx
```

---

# 3. DNS Configuration

## Concept

Domain KMI dikelola menggunakan DNS Rumahweb.

Website diarahkan ke VPS menggunakan **A Record**.

Sedangkan email tetap menggunakan **MailSpace** melalui MX Record.

---

## Website

| Type | Host | Value |
|------|------|-------|
| A | *(kosong)* | VPS Public IP |

> **Catatan**
>
> Pada panel DNS Rumahweb, root domain menggunakan **host kosong**, bukan `@`.

---

## WWW

| Type | Host | Value |
|------|------|-------|
| CNAME | www | konsultanmanajemenindonesia.com |

---

## Email

Email tetap menggunakan konfigurasi MailSpace.

Jangan mengubah record berikut.

- MX
- SPF
- DKIM
- DMARC

---

## Verification

Pastikan domain telah mengarah ke VPS.

```bash
dig +short konsultanmanajemenindonesia.com
```

atau

```bash
nslookup konsultanmanajemenindonesia.com
```

Expected.

```
116.xxx.xxx.xxx
```

---

# 4. SSL Let's Encrypt

## Concept

SSL digunakan agar website dapat diakses melalui HTTPS.

Sertifikat menggunakan Let's Encrypt.

---

## Implementation

Install.

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Generate.

```bash
sudo certbot --nginx
```

Verifikasi.

```bash
sudo certbot certificates
```

---

## Verification

Buka.

```
https://konsultanmanajemenindonesia.com
```

Pastikan browser menampilkan ikon 🔒.

---

# 5. HTTP → HTTPS Redirect

## Concept

Seluruh request HTTP harus diarahkan ke HTTPS.

Hal ini memastikan seluruh traffic terenkripsi.

---

## Verification

Akses.

```
http://konsultanmanajemenindonesia.com
```

Expected.

```
301 Redirect

↓

https://konsultanmanajemenindonesia.com
```

---

# 6. WWW → Non-WWW Redirect

## Concept

Website KMI menggunakan canonical domain:

```
https://konsultanmanajemenindonesia.com
```

Seluruh request menuju:

```
https://www.konsultanmanajemenindonesia.com
```

akan diarahkan ke domain utama.

Keuntungan:

- SEO lebih baik
- Tidak terjadi duplicate content
- Konsisten untuk Analytics dan Search Console

---

## Verification

Akses.

```
https://www.konsultanmanajemenindonesia.com
```

Expected.

```
301 Redirect

↓

https://konsultanmanajemenindonesia.com
```

---

# Production Configuration

File konfigurasi production.

```
docs/deployment/configs/nginx/kmi-compro-site.conf
```

Konfigurasi meliputi:

- Reverse Proxy
- HTTP/2
- SSL
- Security Header
- Gzip
- HTTP Redirect
- WWW Redirect

---

# Rollback

Apabila konfigurasi Nginx gagal.

Nonaktifkan konfigurasi.

```bash
sudo rm /etc/nginx/sites-enabled/kmi-compro-site
```

Aktifkan kembali konfigurasi sebelumnya.

```bash
sudo ln -s \
/etc/nginx/sites-available/<backup-config> \
/etc/nginx/sites-enabled/
```

Reload.

```bash
sudo systemctl reload nginx
```

---

# Troubleshooting

## CSS tidak muncul

### Penyebab

Folder:

```
.next/static
```

belum dicopy.

### Solusi

```bash
cp -R .next/static .next/standalone/.next/

cp -R public .next/standalone/
```

---

## HTTPS tidak aktif

### Penyebab

DNS belum propagasi.

### Solusi

Tunggu propagasi selesai sebelum menjalankan Certbot.

---

## Root Domain tidak dapat dibuat

### Penyebab

Panel DNS Rumahweb tidak menggunakan `@`.

### Solusi

Kosongkan field **Host/Domain**.

---

## unknown directive "http2"

### Penyebab

Sintaks tidak sesuai dengan versi Nginx.

### Solusi

Untuk Nginx 1.24 gunakan.

```nginx
listen 443 ssl http2;
listen [::]:443 ssl http2;
```

---

## nginx -t gagal

Periksa.

- typo konfigurasi
- lokasi SSL Certificate
- lokasi SSL Key

---

# References

- Nginx Documentation
- Let's Encrypt Documentation
- Certbot Documentation

---

# Verification Checklist

- [ ] Nginx berhasil diinstall
- [ ] Reverse Proxy aktif
- [ ] Website dapat diakses melalui domain
- [ ] DNS mengarah ke VPS
- [ ] SSL berhasil dibuat
- [ ] HTTPS aktif
- [ ] HTTP redirect aktif
- [ ] WWW redirect aktif

---

# Next Document

➡️ **04-security-hardening.md**

Dokumen berikutnya membahas konfigurasi keamanan server, meliputi:

- UFW Firewall
- PM2 Log Rotation
- Fail2Ban
- Automatic Security Updates