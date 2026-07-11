# Disaster Recovery

Dokumen ini menjelaskan prosedur pemulihan layanan (Disaster Recovery) apabila terjadi gangguan pada server production website **KMI Company Profile**.

Tujuan utama dokumen ini adalah meminimalkan downtime dan memastikan website dapat dipulihkan dengan cepat menggunakan prosedur yang terdokumentasi.

---

# Overview

Dokumen ini mencakup skenario berikut:

1. VPS Failure
2. Application Failure
3. PM2 Failure
4. Nginx Failure
5. SSL Failure
6. DNS Failure
7. Environment Recovery
8. Full Server Migration

---

# Recovery Priority

Ketika terjadi insiden, lakukan recovery berdasarkan urutan berikut.

```text
Infrastructure
        │
        ▼
Operating System
        │
        ▼
Application
        │
        ▼
Web Server
        │
        ▼
SSL
        │
        ▼
DNS
```

---

# Recovery Checklist

Pastikan informasi berikut tersedia.

- Repository Git
- File `.env.production`
- `deploy.sh`
- `ecosystem.config.cjs`
- Konfigurasi Nginx
- Konfigurasi Fail2Ban
- Domain DNS
- SSL Certificate (akan dibuat ulang apabila diperlukan)

---

# Scenario 01

# VPS Failure

## Symptoms

Server tidak dapat diakses.

- SSH gagal.
- Website offline.
- Ping gagal.

---

## Recovery

Buat VPS baru.

Ikuti:

```
01-server-setup.md
```

Kemudian.

```
02-project-deployment.md
```

Lanjutkan.

```
03-nginx-ssl.md
```

Kemudian.

```
04-security-hardening.md
```

Restore.

```
.env.production
```

Deploy aplikasi.

```bash
./deploy.sh
```

---

## Verification

Website dapat diakses.

```
https://konsultanmanajemenindonesia.com
```

---

# Scenario 02

# PM2 Failure

## Symptoms

```bash
pm2 list
```

Status.

```text
errored
```

atau.

```text
stopped
```

---

## Recovery

Restart.

```bash
pm2 restart kmi-compro-site
```

Apabila masih gagal.

```bash
pm2 delete kmi-compro-site

pm2 start ecosystem.config.cjs

pm2 save
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

# Scenario 03

# Nginx Failure

## Symptoms

```text
502 Bad Gateway
```

atau.

```text
Welcome to nginx
```

---

## Recovery

Test konfigurasi.

```bash
sudo nginx -t
```

Reload.

```bash
sudo systemctl reload nginx
```

Restart.

```bash
sudo systemctl restart nginx
```

Apabila konfigurasi rusak.

Restore.

```
configs/nginx/kmi-compro-site.conf
```

---

## Verification

```bash
sudo nginx -t
```

Expected.

```text
syntax is ok
```

---

# Scenario 04

# SSL Failure

## Symptoms

Browser menampilkan.

```text
Connection Not Secure
```

atau.

```text
Certificate Expired
```

---

## Recovery

Test renewal.

```bash
sudo certbot renew --dry-run
```

Generate ulang apabila diperlukan.

```bash
sudo certbot --nginx
```

---

## Verification

```bash
sudo certbot certificates
```

---

# Scenario 05

# DNS Failure

## Symptoms

Domain tidak mengarah ke VPS.

---

## Recovery

Verifikasi.

A Record

```
Host

(kosong)
```

↓

```
VPS Public IP
```

WWW.

```
www
```

↓

```
CNAME

konsultanmanajemenindonesia.com
```

Pastikan.

MX

SPF

DKIM

DMARC

tetap mengarah ke MailSpace.

---

## Verification

```bash
dig +short konsultanmanajemenindonesia.com
```

---

# Scenario 06

# Environment File Missing

## Symptoms

Website gagal berjalan.

Error.

```text
Missing Environment Variable
```

---

## Recovery

Restore.

```
.env.production
```

Restart.

```bash
pm2 restart kmi-compro-site
```

---

## Verification

Website berjalan normal.

---

# Scenario 07

# Standalone Build Missing Assets

## Symptoms

Website berjalan.

Namun.

- CSS hilang.
- Font hilang.
- Image hilang.

---

## Recovery

```bash
cp -R .next/static .next/standalone/.next/

cp -R public .next/standalone/
```

Restart PM2.

---

## Verification

Refresh browser.

---

# Full Server Migration

Apabila migrasi ke VPS baru.

Lakukan langkah berikut.

```text
Provision VPS
        │
        ▼
Server Setup
        │
        ▼
Clone Repository
        │
        ▼
Restore .env.production
        │
        ▼
npm install
        │
        ▼
Build
        │
        ▼
Standalone
        │
        ▼
PM2
        │
        ▼
Nginx
        │
        ▼
SSL
        │
        ▼
DNS
        │
        ▼
Firewall
        │
        ▼
Fail2Ban
        │
        ▼
Production Ready
```

---

# Estimated Recovery Time

| Scenario | Estimated Time |
|----------|---------------:|
| Restart PM2 | < 2 Minutes |
| Restart Nginx | < 2 Minutes |
| SSL Renewal | 5–10 Minutes |
| Deploy Update | 5–10 Minutes |
| New VPS Provisioning | 30–60 Minutes |
| Full Disaster Recovery | 60–90 Minutes |

---

# Recovery Validation

Setelah recovery selesai, lakukan pemeriksaan berikut.

## Website

```
https://konsultanmanajemenindonesia.com
```

---

## PM2

```bash
pm2 list
```

---

## Nginx

```bash
sudo systemctl status nginx
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

# Recovery Checklist

- [ ] VPS Online
- [ ] SSH Accessible
- [ ] Repository Available
- [ ] Environment Restored
- [ ] Build Successful
- [ ] PM2 Running
- [ ] Nginx Running
- [ ] SSL Active
- [ ] DNS Verified
- [ ] Firewall Active
- [ ] Fail2Ban Active
- [ ] Website Accessible

---

# References

- 01-server-setup.md
- 02-project-deployment.md
- 03-nginx-ssl.md
- 04-security-hardening.md
- 05-maintenance.md
- 06-troubleshooting.md