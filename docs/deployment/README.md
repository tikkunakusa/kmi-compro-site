# KMI Company Profile

# Production Infrastructure Documentation

> Standard Operating Procedures (SOP), Operational Runbook, Disaster Recovery, Infrastructure Inventory, dan Architecture Decision Records (ADR) untuk website **Konsultan Manajemen Indonesia (KMI)**.

---

# Overview

Dokumentasi ini menjadi **Single Source of Truth (SSOT)** untuk seluruh proses deployment, konfigurasi, operasional, keamanan, dan pemulihan server production website KMI.

Dokumentasi disusun berdasarkan implementasi aktual pada lingkungan production sehingga dapat digunakan sebagai referensi utama dalam:

- Server Provisioning
- Application Deployment
- Infrastructure Configuration
- Security Hardening
- Maintenance
- Troubleshooting
- Disaster Recovery
- Architecture Decision

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

## Deployment SOP

Panduan membangun server production dari awal.

| Document | Description |
|----------|-------------|
| 01-server-setup.md | Persiapan VPS dan instalasi software |
| 02-project-deployment.md | Deployment aplikasi Next.js |
| 03-nginx-ssl.md | Nginx, DNS, dan SSL |
| 04-security-hardening.md | Hardening server production |

---

## Operational Runbook

| Document | Description |
|----------|-------------|
| 05-maintenance.md | Deployment, monitoring, backup, dan maintenance rutin |

---

## Knowledge Base

| Document | Description |
|----------|-------------|
| 06-troubleshooting.md | Troubleshooting & Lessons Learned |

---

## Disaster Recovery

| Document | Description |
|----------|-------------|
| 07-disaster-recovery.md | Recovery Procedure & Server Migration |

---

## Infrastructure Inventory

| Document | Description |
|----------|-------------|
| 08-server-inventory.md | Production Infrastructure Inventory |

---

## Architecture Decision Records

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

# Production Scripts

Script operasional production disimpan pada root project.

```text
scripts/
├── deploy.sh
├── build.sh
├── restart.sh
├── rollback.sh
├── health-check.sh
├── logs.sh
├── backup.sh
└── permissions.sh
```

## Available Scripts

| Script | Description |
|---------|-------------|
| deploy.sh | Full deployment ke production |
| build.sh | Build aplikasi dan menyiapkan standalone output |
| restart.sh | Restart aplikasi menggunakan PM2 |
| rollback.sh | Rollback ke commit sebelumnya |
| health-check.sh | Pemeriksaan kondisi server |
| logs.sh | Melihat log aplikasi |
| backup.sh | Backup konfigurasi server |
| permissions.sh | Memberikan executable permission pada seluruh script |

---

# Configuration Management

Seluruh konfigurasi production harus mengacu pada folder `configs/`.

| Configuration | Location |
|---------------|----------|
| PM2 | configs/ecosystem.config.cjs |
| Nginx | configs/nginx/kmi-compro-site.conf |
| Fail2Ban | configs/fail2ban/jail.local |
| Environment Template | configs/environment/production.env.example |

> Script operasional berada pada folder `scripts/` di root project dan **bukan** di dalam folder `configs/`.

---

# Operational Workflow

```text
Developer
      │
      ▼
Git Push
      │
      ▼
SSH Production Server
      │
      ▼
./scripts/deploy.sh
      │
      ▼
Health Check
      │
      ▼
Production Ready
```

---

# Documentation Principles

Dokumentasi ini mengikuti prinsip berikut:

- **Single Source of Truth** untuk konfigurasi production.
- **Infrastructure as Code & Documentation**.
- **Knowledge Preservation**.
- **Operational Consistency**.
- **Continuous Improvement**.

---

# Production Status

| Component | Status |
|-----------|:------:|
| Ubuntu Server | ✅ |
| Node.js | ✅ |
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

---

# Change Management

Seluruh perubahan production mengikuti alur berikut.

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
Deploy
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
| /README.md | Project Overview & Development Guide |
| docs/deployment/README.md | Production Infrastructure Documentation |

---

# License

Internal Documentation

**Konsultan Manajemen Indonesia (KMI)**

Version **1.0.0**