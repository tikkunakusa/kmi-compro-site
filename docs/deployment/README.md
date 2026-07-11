# KMI Company Profile

# Production Infrastructure Documentation

> Standard Operating Procedures (SOP), Operational Runbook, Disaster Recovery, Infrastructure Inventory, dan Architecture Decision Records (ADR) untuk website **Konsultan Manajemen Indonesia (KMI)**.

---

# Overview

Dokumentasi ini berisi seluruh informasi yang diperlukan untuk membangun, mengelola, memelihara, dan memulihkan lingkungan **Production** website KMI.

Dokumentasi disusun berdasarkan implementasi aktual pada lingkungan production dan menjadi **Single Source of Truth (SSOT)** bagi seluruh konfigurasi dan prosedur operasional server.

---

# Documentation Scope

Dokumentasi ini mencakup:

- Server Provisioning
- Application Deployment
- Nginx, DNS & SSL Configuration
- Security Hardening
- Operational Runbook
- Troubleshooting Knowledge Base
- Disaster Recovery
- Infrastructure Inventory
- Architecture Decision Records (ADR)

---

# Production Architecture

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

# Documentation Guide

Seluruh dokumentasi dibagi berdasarkan lifecycle operasional server.

## 1. Deployment SOP

Panduan membangun server production dari awal.

| Document | Description |
|----------|-------------|
| 01-server-setup.md | Persiapan VPS dan instalasi software |
| 02-project-deployment.md | Deployment aplikasi Next.js |
| 03-nginx-ssl.md | Konfigurasi Nginx, DNS, dan SSL |
| 04-security-hardening.md | Konfigurasi keamanan server |

---

## 2. Operational Runbook

Panduan operasional server setelah website berada pada lingkungan production.

| Document | Description |
|----------|-------------|
| 05-maintenance.md | Monitoring, deployment update, backup, dan maintenance rutin |

---

## 3. Knowledge Base

Dokumentasi seluruh masalah yang pernah ditemukan beserta solusi yang telah terbukti berhasil.

| Document | Description |
|----------|-------------|
| 06-troubleshooting.md | Troubleshooting & Lessons Learned |

---

## 4. Disaster Recovery

Panduan pemulihan apabila terjadi gangguan pada server production.

| Document | Description |
|----------|-------------|
| 07-disaster-recovery.md | Recovery Procedure & Server Migration |

---

## 5. Infrastructure Inventory

Inventaris konfigurasi production yang sedang digunakan.

| Document | Description |
|----------|-------------|
| 08-server-inventory.md | Production Infrastructure Inventory |

---

## 6. Architecture Decision Records (ADR)

Dokumentasi keputusan arsitektur yang digunakan pada production.

| Document | Description |
|----------|-------------|
| adr/ADR-001-production-infrastructure-architecture.md | Production Infrastructure Architecture |

---

# Repository Structure

```text
docs/
└── deployment/
    ├── README.md
    │
    ├── 01-server-setup.md
    ├── 02-project-deployment.md
    ├── 03-nginx-ssl.md
    ├── 04-security-hardening.md
    ├── 05-maintenance.md
    ├── 06-troubleshooting.md
    ├── 07-disaster-recovery.md
    ├── 08-server-inventory.md
    ├── CHANGELOG.md
    │
    ├── adr/
    │   └── ADR-001-production-infrastructure-architecture.md
    │
    ├── configs/
    │   ├── deploy.sh
    │   ├── ecosystem.config.cjs
    │   ├── nginx/
    │   │   └── kmi-compro-site.conf
    │   ├── fail2ban/
    │   │   └── jail.local
    │   ├── ufw/
    │   │   └── README.md
    │   ├── systemd/
    │   │   └── README.md
    │   └── environment/
    │       └── production.env.example
    │
    └── assets/
        ├── architecture.drawio
        ├── architecture.png
        └── deployment-flow.png
```

---

# Configuration Management

Seluruh konfigurasi production yang digunakan pada server harus berasal dari folder `configs/`.

| Configuration | Location |
|---------------|----------|
| Deployment Script | configs/deploy.sh |
| PM2 | configs/ecosystem.config.cjs |
| Nginx | configs/nginx/kmi-compro-site.conf |
| Fail2Ban | configs/fail2ban/jail.local |
| Environment Template | configs/environment/production.env.example |

Konfigurasi pada server production harus selalu disinkronkan dengan repository apabila terdapat perubahan.

---

# Documentation Principles

Dokumentasi ini mengikuti prinsip-prinsip berikut:

- **Single Source of Truth** untuk seluruh konfigurasi production.
- **Infrastructure as Documentation**, yaitu konfigurasi penting disimpan bersama dokumentasi.
- **Knowledge Preservation**, agar pengalaman deployment tidak hilang ketika terjadi pergantian administrator.
- **Operational Consistency**, sehingga deployment dan maintenance dilakukan dengan prosedur yang sama.
- **Continuous Improvement**, dokumentasi diperbarui setiap kali terdapat perubahan arsitektur atau proses operasional.

---

# Production Status

| Component | Status |
|-----------|:------:|
| Ubuntu Server 24.04 LTS | ✅ |
| Node.js 24.x | ✅ |
| Next.js Standalone | ✅ |
| PM2 | ✅ |
| PM2 Startup | ✅ |
| Nginx | ✅ |
| HTTPS | ✅ |
| HTTP → HTTPS Redirect | ✅ |
| WWW → Non-WWW Redirect | ✅ |
| UFW Firewall | ✅ |
| PM2 Log Rotation | ✅ |
| Fail2Ban | ✅ |
| Automatic Security Updates | ⏳ |

> **Catatan:** Status di atas mencerminkan kondisi saat dokumentasi ini dibuat. Perbarui apabila terdapat perubahan pada lingkungan production.

---

# Change Management

Setiap perubahan pada lingkungan production harus mengikuti alur berikut:

```text
Architecture Decision
        │
        ▼
Update Documentation
        │
        ▼
Update Configuration
        │
        ▼
Deploy to Production
        │
        ▼
Verification
        │
        ▼
Update CHANGELOG
```

---

# Related Documents

| Document | Purpose |
|----------|---------|
| `/README.md` | Project Overview & Development Guide |
| `docs/deployment/README.md` | Production Infrastructure Documentation |

---

# License

Internal Documentation

**Konsultan Manajemen Indonesia (KMI)**

Version **1.0.0**