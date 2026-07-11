# ADR-001: Production Infrastructure Architecture

| Item | Value |
|------|-------|
| Status | Accepted |
| Version | 1.0 |
| Date | July 2026 |
| Environment | Production |
| Decision Makers | KMI Engineering Team |

---

# Overview

Dokumen ini mendokumentasikan keputusan arsitektur yang digunakan pada **First Production Release (v1.0)** website **Konsultan Manajemen Indonesia (KMI)**.

Tujuan ADR ini adalah menjelaskan **mengapa** arsitektur production dibangun seperti saat ini, bukan hanya **bagaimana** cara mengimplementasikannya.

Seluruh keputusan pada dokumen ini menjadi dasar dari deployment, operasional, dan maintenance server production.

---

# Context

Website KMI merupakan website company profile yang memiliki karakteristik sebagai berikut:

- Traffic relatif rendah hingga menengah.
- Tidak memiliki kebutuhan High Availability pada tahap awal.
- Tim operasional berukuran kecil.
- Infrastruktur harus mudah dipelihara.
- Biaya operasional perlu dijaga tetap efisien.
- Deployment harus sederhana dan mudah direplikasi.
- Layanan email perusahaan harus tetap tersedia meskipun website mengalami gangguan.

Berdasarkan kebutuhan tersebut, dipilih arsitektur production yang mengutamakan **simplicity, maintainability, reliability,** dan **cost efficiency**.

---

# Decision

Production Infrastructure menggunakan arsitektur berikut.

```text
                        Internet
                            │
                            ▼
       konsultanmanajemenindonesia.com
                            │
                     DNS (Rumahweb)
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼                               ▼
        Website                        Email Service
       (A Record)                      (MX Record)
            │                               │
            ▼                               ▼
 Domainesia Cloud VPS             Domainesia MailSpace
            │
            ▼
Ubuntu Server 24.04 LTS
            │
            ▼
Nginx Reverse Proxy
            │
            ▼
PM2 Process Manager
            │
            ▼
Next.js Standalone
```

---

# Architecture Decisions

## 1. Hosting Platform

### Decision

Menggunakan **Domainesia Cloud VPS Lite 2 GB** sebagai server production.

### Rationale

- Biaya operasional sesuai kebutuhan website company profile.
- Resource cukup untuk trafik awal.
- Deployment berbasis Ubuntu tersedia.
- Infrastruktur sederhana dan mudah dipelihara.
- Mendukung peningkatan spesifikasi apabila dibutuhkan di masa depan.

---

## 2. Operating System

### Decision

Menggunakan **Ubuntu Server 24.04 LTS**.

### Rationale

- Long Term Support (LTS).
- Stabil untuk lingkungan production.
- Dokumentasi dan komunitas luas.
- Kompatibel dengan Node.js, Nginx, dan PM2.

---

## 3. Deployment Strategy

### Decision

Menggunakan **Next.js Standalone Output**.

### Rationale

- Deployment lebih sederhana.
- Tidak memerlukan Docker.
- Startup lebih cepat.
- Mudah dijalankan menggunakan PM2.
- Ukuran deployment lebih kecil dibanding menjalankan seluruh source project.

### Consequences

Folder berikut harus disalin setelah proses build:

- `public`
- `.next/static`

---

## 4. Process Management

### Decision

Menggunakan **PM2** sebagai process manager.

### Rationale

- Restart otomatis ketika aplikasi berhenti.
- Startup otomatis setelah server reboot.
- Monitoring proses lebih mudah.
- Mendukung log management.
- Mudah diintegrasikan dengan Next.js Standalone.

---

## 5. Reverse Proxy

### Decision

Menggunakan **Nginx** sebagai reverse proxy.

### Rationale

- Menyediakan SSL termination.
- Reverse proxy menuju aplikasi Node.js.
- Mendukung HTTP Compression.
- Mendukung Security Header.
- Konfigurasi sederhana dan stabil.

---

## 6. Domain & DNS

### Decision

Menggunakan:

- Domain Provider : Rumahweb
- DNS Management : Rumahweb

Canonical domain ditetapkan sebagai:

```
https://konsultanmanajemenindonesia.com
```

Seluruh request menuju:

```
https://www.konsultanmanajemenindonesia.com
```

akan diarahkan ke canonical domain.

### Rationale

- Branding lebih konsisten.
- Menghindari duplicate content.
- Mempermudah SEO.
- Konsisten pada Analytics dan Search Console.

---

## 7. Email Architecture

### Decision

Website dan email dipisahkan menjadi dua layanan yang berbeda.

Website:

```
Domainesia Cloud VPS
```

Email:

```
Domainesia MailSpace
```

### Rationale

Layanan email memiliki tingkat kritikal yang lebih tinggi dibanding website.

Dengan memisahkan kedua layanan tersebut:

- Migrasi website tidak memengaruhi email.
- Maintenance website tidak menyebabkan downtime email.
- Risiko operasional menjadi lebih kecil.
- Infrastruktur lebih fleksibel untuk dikembangkan.

---

## 8. Security Strategy

### Decision

Keamanan server menggunakan pendekatan bertingkat yang terdiri dari:

- UFW Firewall
- Fail2Ban
- PM2 Log Rotation
- Let's Encrypt SSL
- Automatic Security Updates

### Rationale

Pendekatan ini dipilih karena memberikan perlindungan yang memadai dengan kompleksitas operasional yang rendah.

---

# Alternatives Considered

Selama proses perancangan infrastruktur, beberapa alternatif dievaluasi.

## VPS Provider

Alternatif yang dipertimbangkan:

- IDCloudHost
- Biznet GioCloud
- Domainesia

Dipilih Domainesia karena memberikan keseimbangan terbaik antara biaya, kemudahan pengelolaan, dan kebutuhan website saat ini.

---

## Deployment Model

Alternatif yang dipertimbangkan:

- Docker
- Next.js Standalone

Dipilih Next.js Standalone karena deployment lebih sederhana dan belum terdapat kebutuhan orkestrasi container.

---

## Process Manager

Alternatif yang dipertimbangkan:

- systemd
- PM2

Dipilih PM2 karena menyediakan monitoring, restart otomatis, startup management, dan log management tanpa konfigurasi tambahan yang kompleks.

---

# Consequences

## Positive

- Infrastruktur sederhana.
- Deployment mudah dipahami.
- Maintenance relatif mudah.
- Cost operasional rendah.
- Website dan email terpisah.
- Mudah direplikasi pada server baru.
- Dokumentasi deployment lebih sederhana.

---

## Negative

- Seluruh website bergantung pada satu VPS.
- Belum memiliki High Availability.
- Belum menggunakan containerization.
- Build Next.js pada VPS 2 GB memerlukan Swap Memory.

---

# Risks

| Risk | Mitigation |
|------|------------|
| VPS Failure | Disaster Recovery Procedure |
| Build Out of Memory | 2 GB Swap Memory |
| SSL Expired | Certbot Auto Renewal |
| Process Crash | PM2 Auto Restart |
| SSH Brute Force | Fail2Ban |
| Unauthorized Access | UFW Firewall |

---

# Future Considerations

Arsitektur ini akan ditinjau kembali apabila:

- Trafik website meningkat secara signifikan.
- Dibutuhkan deployment tanpa downtime.
- Dibutuhkan High Availability.
- Website berkembang menjadi aplikasi dengan beban kerja yang lebih tinggi.
- Infrastruktur membutuhkan containerization atau orchestration.

Kemungkinan evolusi arsitektur pada versi berikutnya meliputi:

- Docker
- CI/CD Pipeline
- Reverse Proxy Load Balancer
- Redis Cache
- Monitoring Dashboard
- Multi-Server Deployment

---

# Related Documents

| Document | Description |
|----------|-------------|
| README.md | Documentation Index |
| 01-server-setup.md | Server Provisioning |
| 02-project-deployment.md | Application Deployment |
| 03-nginx-ssl.md | Nginx, DNS & SSL |
| 04-security-hardening.md | Security Configuration |
| 05-maintenance.md | Operational Runbook |
| 06-troubleshooting.md | Knowledge Base |
| 07-disaster-recovery.md | Disaster Recovery |
| 08-server-inventory.md | Production Inventory |

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | July 2026 | Initial Production Infrastructure Architecture |