# Server Maintenance

Dokumen ini menjelaskan prosedur operasional dan maintenance server production website **KMI Company Profile**.

Seluruh aktivitas maintenance dilakukan setelah deployment selesai dan server berada pada kondisi production.

---

# Overview

Dokumen ini mencakup aktivitas operasional harian, antara lain:

1. Deployment aplikasi
2. Monitoring service
3. Monitoring resource server
4. Update sistem
5. SSL Maintenance
6. Backup
7. Recovery
8. Health Check

---

# Maintenance Schedule

| Activity | Frequency |
|----------|-----------|
| Deploy Application | As Needed |
| Check PM2 Status | Daily |
| Check Nginx Status | Daily |
| Check Disk Usage | Weekly |
| Check Memory Usage | Weekly |
| Ubuntu Security Update | Automatic |
| SSL Renewal Verification | Monthly |
| Backup Configuration | Before Major Changes |

---

# 1. Deploy Application Update

## Concept

Deployment update digunakan ketika terdapat perubahan source code.

Deployment dilakukan menggunakan script:

```
deploy.sh
```

Seluruh proses deployment dilakukan tanpa perlu menjalankan command satu per satu.

---

## Implementation

Masuk ke project.

```bash
cd ~/kmi-compro-site
```

Jalankan deployment.

```bash
./deploy.sh
```

---

## Deployment Flow

Deploy script akan menjalankan proses berikut.

```text
Git Pull
    │
    ▼
npm install
    │
    ▼
Build Application
    │
    ▼
Copy Static Assets
    │
    ▼
Restart PM2
```

---

## Verification

Pastikan aplikasi berjalan.

```bash
pm2 list
```

Website juga dapat diakses melalui browser.

---

# 2. Monitoring PM2

## Concept

PM2 merupakan process manager utama.

Monitoring dilakukan untuk memastikan aplikasi tetap berjalan.

---

## Check Status

```bash
pm2 list
```

Expected.

```text
kmi-compro-site
online
```

---

## View Logs

```bash
pm2 logs kmi-compro-site
```

Realtime.

```bash
pm2 logs
```

---

## Restart Application

```bash
pm2 restart kmi-compro-site
```

---

## Reload Application

```bash
pm2 reload kmi-compro-site
```

Gunakan reload apabila memungkinkan karena lebih minim downtime dibanding restart.

---

# 3. Monitoring Nginx

## Check Status

```bash
sudo systemctl status nginx
```

---

## Test Configuration

Sebelum reload konfigurasi.

```bash
sudo nginx -t
```

---

## Reload

```bash
sudo systemctl reload nginx
```

---

## Restart

Gunakan hanya apabila diperlukan.

```bash
sudo systemctl restart nginx
```

---

# 4. Resource Monitoring

## Disk Usage

```bash
df -h
```

Idealnya penggunaan storage tidak melebihi 80%.

---

## Memory

```bash
free -h
```

Pastikan swap tidak digunakan secara berlebihan.

---

## CPU

```bash
top
```

atau

```bash
htop
```

---

## Uptime

```bash
uptime
```

---

## Storage terbesar

```bash
du -sh *
```

atau

```bash
du -sh ~/.pm2/logs
```

---

# 5. SSL Maintenance

## Concept

Let's Encrypt memiliki masa berlaku 90 hari.

Certbot akan melakukan proses renewal secara otomatis.

---

## Verification

Lihat sertifikat.

```bash
sudo certbot certificates
```

---

## Test Renewal

```bash
sudo certbot renew --dry-run
```

Expected.

```text
Congratulations
```

---

# 6. Backup

## Configuration Backup

Backup file konfigurasi sebelum melakukan perubahan besar.

Disarankan membackup:

```
ecosystem.config.cjs

deploy.sh

/etc/nginx/

/etc/fail2ban/

/etc/letsencrypt/
```

---

## Source Code

Source code menggunakan Git sehingga tidak perlu dibackup secara manual.

Pastikan seluruh perubahan telah di-push ke repository.

---

## Environment File

Backup.

```
.env.production
```

Secara terpisah.

Jangan commit ke Git.

---

# 7. System Update

## Package Repository

```bash
sudo apt update
```

---

## Installed Package

```bash
sudo apt upgrade
```

Security update akan dipasang otomatis oleh:

```
unattended-upgrades
```

---

# 8. Health Check

Lakukan pemeriksaan berikut sebelum dan sesudah deployment.

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

# Rollback

Apabila deployment gagal.

```bash
git checkout <previous-tag>
```

atau.

```bash
git reset --hard HEAD
```

Kemudian jalankan.

```bash
./deploy.sh
```

---

# Troubleshooting

## PM2 Offline

Restart.

```bash
pm2 restart kmi-compro-site
```

---

## Nginx Error

Verifikasi.

```bash
sudo nginx -t
```

---

## Disk Penuh

Periksa.

```bash
du -sh ~/.pm2/logs
```

Pastikan PM2 Log Rotation aktif.

---

## SSL Expired

Test.

```bash
sudo certbot renew --dry-run
```

---

## Memory Penuh

```bash
free -h
```

Periksa penggunaan swap.

---

# References

- PM2 Documentation
- Nginx Documentation
- Certbot Documentation
- Ubuntu Server Guide

---

# Maintenance Checklist

## Daily

- [ ] PM2 Online
- [ ] Website Accessible
- [ ] Nginx Running

---

## Weekly

- [ ] Disk Usage
- [ ] Memory Usage
- [ ] PM2 Logs

---

## Monthly

- [ ] SSL Renewal Test
- [ ] Review Server Resource
- [ ] Backup Configuration

---

# Operational Notes

Seluruh deployment production dilakukan menggunakan:

```bash
./deploy.sh
```

Perubahan konfigurasi server (Nginx, Firewall, Fail2Ban, SSL) wajib dilakukan di luar jam operasional apabila memungkinkan.

Sebelum melakukan perubahan konfigurasi server:

- Backup konfigurasi.
- Jalankan verifikasi.
- Dokumentasikan perubahan pada `CHANGELOG.md`.

---

# Next Document

➡️ **06-troubleshooting.md**

Dokumen berikutnya berisi seluruh permasalahan yang pernah ditemukan selama deployment beserta penyebab, analisis, dan solusi yang telah terbukti berhasil.