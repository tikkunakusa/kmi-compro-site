# Security Hardening

Dokumen ini menjelaskan konfigurasi keamanan server production untuk website **KMI Company Profile**.

Tujuan utama hardening adalah meningkatkan keamanan server tanpa mengubah arsitektur aplikasi maupun mengganggu proses deployment.

---

# Overview

Tahapan hardening yang diterapkan pada server production meliputi:

1. UFW Firewall
2. PM2 Startup
3. PM2 Log Rotation
4. Fail2Ban
5. Automatic Security Updates

Dokumen ini mengasumsikan deployment aplikasi telah selesai sesuai:

> **03-nginx-ssl.md**

---

# Security Overview

Server production hanya membuka port yang benar-benar diperlukan.

```text
Internet
    │
    ▼
┌───────────────┐
│     UFW       │
└───────────────┘
        │
        ▼
22    SSH
80    HTTP
443   HTTPS

Semua port lainnya ditolak.
```

---

# 1. UFW Firewall

## Concept

Firewall berfungsi membatasi akses masuk ke server.

Hanya port yang digunakan aplikasi yang diizinkan.

Untuk server KMI, port yang dibuka adalah:

- SSH
- HTTP
- HTTPS

Seluruh port lainnya menggunakan kebijakan **deny**.

---

## Implementation

Install UFW apabila belum tersedia.

```bash
sudo apt install ufw -y
```

Izinkan SSH.

```bash
sudo ufw allow 22/tcp
```

Izinkan HTTP.

```bash
sudo ufw allow 80/tcp
```

Izinkan HTTPS.

```bash
sudo ufw allow 443/tcp
```

Aktifkan firewall.

```bash
sudo ufw enable
```

---

## Verification

```bash
sudo ufw status verbose
```

Expected.

```text
Status: active

Default: deny (incoming)

22/tcp
80/tcp
443/tcp
```

---

# 2. PM2 Startup

## Concept

Secara default aplikasi yang dijalankan menggunakan PM2 tidak otomatis berjalan kembali setelah server reboot.

PM2 Startup memastikan aplikasi akan aktif kembali setiap kali VPS dinyalakan.

---

## Implementation

Simpan konfigurasi PM2.

```bash
pm2 save
```

Generate startup script.

```bash
pm2 startup
```

Jalankan command yang diberikan PM2.

Kemudian simpan kembali.

```bash
pm2 save
```

---

## Verification

Restart server.

```bash
sudo reboot
```

Login kembali.

```bash
pm2 list
```

Expected.

```text
kmi-compro-site
online
```

---

# 3. PM2 Log Rotation

## Concept

Log aplikasi akan terus bertambah selama server berjalan.

Tanpa log rotation, file log dapat memenuhi storage VPS.

PM2 Log Rotation digunakan untuk:

- membatasi ukuran log;
- menghapus log lama;
- mengompresi log.

---

## Implementation

Install module.

```bash
pm2 install pm2-logrotate
```

Konfigurasi.

```bash
pm2 set pm2-logrotate:max_size 10M

pm2 set pm2-logrotate:retain 30

pm2 set pm2-logrotate:compress true

pm2 set pm2-logrotate:workerInterval 30

pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss

pm2 save
```

---

## Verification

```bash
pm2 conf pm2-logrotate
```

Pastikan seluruh konfigurasi berhasil diterapkan.

---

# 4. Fail2Ban

## Concept

Fail2Ban melindungi server dari percobaan login SSH berulang (brute-force attack).

Ketika sebuah IP melakukan login gagal berulang kali, Fail2Ban akan memblokir IP tersebut untuk sementara.

Hardening ini **hanya melindungi VPS** dan **tidak memengaruhi layanan email**, karena email KMI menggunakan **Domainesia MailSpace** yang berjalan pada server terpisah.

---

## Implementation

Install.

```bash
sudo apt install fail2ban -y
```

Buat konfigurasi.

```bash
sudo nano /etc/fail2ban/jail.local
```

Isi konfigurasi.

```ini
[DEFAULT]

bantime = 1h
findtime = 10m
maxretry = 5

bantime.increment = true
bantime.factor = 2

backend = systemd

[sshd]

enabled = true
mode = aggressive
port = 22
```

Restart.

```bash
sudo systemctl restart fail2ban
```

---

## Verification

Lihat jail.

```bash
sudo fail2ban-client status
```

Kemudian.

```bash
sudo fail2ban-client status sshd
```

Expected.

```text
Jail list: sshd
Currently banned: 0
```

---

# 5. Automatic Security Updates

## Concept

Ubuntu menyediakan package keamanan secara berkala.

Automatic Security Updates memastikan patch keamanan dipasang secara otomatis tanpa perlu melakukan update manual.

Fitur ini hanya memasang **security update**, bukan upgrade major version.

---

## Implementation

Install.

```bash
sudo apt install unattended-upgrades -y
```

Aktifkan.

```bash
sudo dpkg-reconfigure unattended-upgrades
```

Pilih.

```text
Yes
```

---

## Verification

```bash
systemctl status unattended-upgrades
```

Pastikan service aktif.

---

# Rollback

## Disable UFW

```bash
sudo ufw disable
```

---

## Disable Fail2Ban

```bash
sudo systemctl stop fail2ban

sudo systemctl disable fail2ban
```

---

## Disable PM2 Log Rotation

```bash
pm2 uninstall pm2-logrotate
```

---

## Disable Automatic Updates

```bash
sudo dpkg-reconfigure unattended-upgrades
```

Pilih.

```text
No
```

---

# Troubleshooting

## SSH tidak dapat diakses setelah UFW aktif

### Penyebab

Port SSH belum diizinkan sebelum menjalankan:

```bash
sudo ufw enable
```

### Solusi

Pastikan port SSH diizinkan terlebih dahulu.

```bash
sudo ufw allow 22/tcp
```

---

## Rule UFW ganda

Contoh.

```text
80/tcp
443/tcp
Nginx Full
```

### Solusi

Hapus rule **Nginx Full** agar konfigurasi lebih bersih.

---

## PM2 tidak berjalan setelah reboot

### Penyebab

PM2 Startup belum dikonfigurasi.

### Solusi

Jalankan kembali.

```bash
pm2 startup

pm2 save
```

---

## Fail2Ban tidak aktif

Periksa service.

```bash
sudo systemctl status fail2ban
```

Kemudian.

```bash
sudo journalctl -u fail2ban
```

---

# References

- UFW Documentation
- PM2 Documentation
- Fail2Ban Documentation
- Ubuntu Security Documentation

---

# Verification Checklist

- [ ] UFW aktif
- [ ] SSH tetap dapat diakses
- [ ] PM2 Startup aktif
- [ ] PM2 Log Rotation aktif
- [ ] Fail2Ban aktif
- [ ] Automatic Security Updates aktif

---

# Next Document

➡️ **05-maintenance.md**

Dokumen berikutnya menjelaskan operasional harian server production, seperti deployment update aplikasi, monitoring, maintenance rutin, serta prosedur backup dan recovery.