# Server Setup

Dokumen ini menjelaskan proses provisioning dan konfigurasi awal VPS hingga siap digunakan sebagai server production untuk website **KMI Company Profile**.

---

# Overview

Tahapan ini bertujuan untuk mempersiapkan lingkungan server sebelum proses deployment aplikasi dilakukan.

Pada tahap ini server akan dikonfigurasi agar memenuhi kebutuhan minimum aplikasi Next.js yang berjalan menggunakan PM2 dan Nginx.

Dokumen ini **belum mencakup deployment aplikasi**.

---

# Prerequisites

Pastikan telah tersedia:

- Cloud VPS Domainesia Lite 2 GB
- Ubuntu Server 24.04 LTS
- Akses SSH sebagai `root`
- Public IP VPS

---

# Server Specification

| Item | Value |
|------|-------|
| Provider | Domainesia |
| Package | Cloud VPS Lite |
| Operating System | Ubuntu Server 24.04 LTS |
| CPU | 2 Core |
| Memory | 2 GB |
| Storage | SSD |

---

# 1. Operating System Update

## Concept

Server baru umumnya masih menggunakan package yang tersedia saat image dibuat.

Melakukan update package sebelum deployment bertujuan untuk:

- memperoleh patch keamanan terbaru;
- memperbaiki bug pada package bawaan;
- memastikan dependency menggunakan versi terbaru yang kompatibel.

Langkah ini hanya perlu dilakukan satu kali setelah VPS selesai dibuat.

---

## Implementation

Perbarui repository package.

```bash
sudo apt update
```

Kemudian upgrade seluruh package.

```bash
sudo apt upgrade -y
```

Apabila muncul prompt:

```text
Configuration file '/etc/needrestart/needrestart.conf'
```

Pilih:

```text
Keep the local version currently installed
```

---

## Verification

Pastikan proses upgrade selesai tanpa error.

Kemudian jalankan:

```bash
sudo apt update
```

Expected:

```text
All packages are up to date.
```

---

# 2. Install Git

## Concept

Repository aplikasi disimpan pada Git sehingga server memerlukan Git untuk:

- clone repository;
- pull update terbaru;
- menjalankan deployment.

---

## Implementation

Install Git.

```bash
sudo apt install git -y
```

---

## Verification

```bash
git --version
```

Expected:

```text
git version x.x.x
```

---

# 3. Verify Node.js Runtime

## Concept

Website KMI menggunakan Next.js sehingga memerlukan runtime Node.js.

Image VPS Domainesia telah menyediakan Node.js menggunakan **mise**, sehingga pada tahap ini cukup dilakukan verifikasi.

---

## Implementation

```bash
node -v
```

```bash
npm -v
```

---

## Verification

Expected:

```text
Node.js v24.x.x
```

dan

```text
npm x.x.x
```

---

# 4. Install PM2

## Concept

PM2 berfungsi sebagai process manager.

Keuntungan menggunakan PM2:

- aplikasi tetap berjalan ketika terminal ditutup;
- restart otomatis apabila aplikasi crash;
- startup otomatis setelah server reboot;
- menyediakan monitoring dan logging.

---

## Implementation

Install PM2.

```bash
npm install -g pm2
```

---

## Verification

```bash
pm2 -v
```

Pastikan versi PM2 berhasil ditampilkan.

---

# 5. Configure Swap Memory

## Concept

Next.js membutuhkan memori cukup besar ketika menjalankan proses build.

Pada VPS dengan RAM 2 GB, proses build dapat berhenti dengan pesan:

```text
Killed
```

karena sistem kehabisan memori (Out of Memory).

Swap Memory digunakan sebagai memori virtual untuk mengurangi kemungkinan proses build dihentikan oleh kernel Linux.

---

## Implementation

Buat swap file sebesar 2 GB.

```bash
sudo fallocate -l 2G /swapfile
```

Atur permission.

```bash
sudo chmod 600 /swapfile
```

Format swap.

```bash
sudo mkswap /swapfile
```

Aktifkan swap.

```bash
sudo swapon /swapfile
```

Simpan konfigurasi.

```bash
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## Verification

```bash
free -h
```

Expected:

```text
Swap: 2.0Gi
```

---

# Rollback

Apabila swap ingin dihapus.

```bash
sudo swapoff /swapfile
```

```bash
sudo rm /swapfile
```

Kemudian hapus konfigurasi swap pada:

```text
/etc/fstab
```

---

# Troubleshooting

## Build berhenti dengan pesan

```text
Killed
```

### Penyebab

RAM server tidak mencukupi.

### Solusi

Tambahkan Swap Memory sebesar 2 GB.

---

## PM2 tidak dikenali

### Penyebab

PM2 belum terinstal.

### Solusi

```bash
npm install -g pm2
```

---

# References

- Ubuntu Server Documentation
- Node.js Documentation
- PM2 Documentation

---

# Verification Checklist

- [ ] Ubuntu berhasil diperbarui
- [ ] Git terinstal
- [ ] Node.js tersedia
- [ ] npm tersedia
- [ ] PM2 terinstal
- [ ] Swap Memory aktif

---

# Next Document

➡️ **02-project-deployment.md**