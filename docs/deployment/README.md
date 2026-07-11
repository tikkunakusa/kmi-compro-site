# KMI Company Profile

> **Production Infrastructure Documentation**
>
> Standard Operating Procedures (SOP), Operational Runbook, Disaster Recovery, dan Architecture Decision Records untuk website **Konsultan Manajemen Indonesia (KMI)**.

---

# 📖 Overview

Repository ini berisi seluruh dokumentasi yang berkaitan dengan deployment, operasional, maintenance, keamanan, serta arsitektur website **KMI Company Profile**.

Dokumentasi disusun berdasarkan implementasi aktual pada lingkungan **Production**, sehingga dapat digunakan sebagai:

- Standard Operating Procedure (SOP)
- Operational Runbook
- Knowledge Base
- Disaster Recovery Guide
- Infrastructure Inventory
- Architecture Decision Records (ADR)

---

# 📦 Infrastructure Overview

| Component | Technology |
|-----------|------------|
| Framework | Next.js (App Router) |
| Runtime | Node.js 24.x |
| Deployment | Next.js Standalone |
| Process Manager | PM2 |
| Reverse Proxy | Nginx |
| SSL | Let's Encrypt |
| VPS | Domainesia Cloud VPS Lite 2 GB |
| Domain | Rumahweb |
| DNS | Rumahweb DNS Management |
| Email | Domainesia MailSpace |

---

# 🏗 Production Architecture

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
          Nginx
            │
            ▼
 PM2 (kmi-compro-site)
            │
            ▼
 Next.js Standalone
```

---

# 📚 Documentation Structure

## 1. Deployment SOP

Panduan untuk membangun server production dari awal hingga website dapat diakses.

| Document | Description |
|----------|-------------|
| **01-server-setup.md** | Persiapan VPS dan instalasi software |
| **02-project-deployment.md** | Deployment aplikasi Next.js |
| **03-nginx-ssl.md** | Reverse Proxy, DNS, dan SSL |
| **04-security-hardening.md** | Firewall, Fail2Ban, PM2 Log Rotation, Security Updates |

---

## 2. Operational Runbook

Panduan operasional server setelah website berada pada lingkungan production.

| Document | Description |
|----------|-------------|
| **05-maintenance.md** | Deployment update, monitoring, backup, maintenance rutin |

---

## 3. Knowledge Base

Dokumentasi seluruh masalah yang pernah ditemukan beserta solusi yang telah terbukti berhasil.

| Document | Description |
|----------|-------------|
| **06-troubleshooting.md** | Troubleshooting & Lessons Learned |

---

## 4. Disaster Recovery

Panduan pemulihan apabila terjadi kegagalan layanan.

| Document | Description |
|----------|-------------|
| **07-disaster-recovery.md** | Recovery Procedure & Migration Guide |

---

## 5. Infrastructure Inventory

Inventaris konfigurasi server production.

| Document | Description |
|----------|-------------|
| **08-server-inventory.md** | Production Server Inventory |

---

## 6. Architecture Decision Records (ADR)

Dokumentasi keputusan arsitektur yang diambil selama pengembangan dan deployment.

| Document | Description |
|----------|-------------|
| **adr/README.md** | ADR Index |
| **ADR-001** | VPS Provider Selection |
| **ADR-002** | Next.js Standalone |
| **ADR-003** | PM2 Process Manager |
| **ADR-004** | Email Architecture |
| **ADR-005** | Nginx Reverse Proxy |
| **ADR-006** | Domain Strategy |
| **ADR-007** | Security Architecture |

---

# 📂 Repository Structure

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
    │   ├── README.md
    │   ├── ADR-001-vps-provider.md
    │   ├── ADR-002-nextjs-standalone.md
    │   ├── ADR-003-pm2.md
    │   ├── ADR-004-email-architecture.md
    │   ├── ADR-005-nginx.md
    │   ├── ADR-006-domain-strategy.md
    │   └── ADR-007-security.md
    │
    ├── configs/
    │   ├── deploy.sh
    │   ├── ecosystem.config.cjs
    │   ├── nginx/
    │   ├── fail2ban/
    │   └── ufw/
    │
    └── assets/
        ├── architecture.drawio
        ├── architecture.png
        └── deployment-flow.png
```

---

# ⚙️ Production Configuration

| Component | Configuration |
|-----------|---------------|
| PM2 | `configs/ecosystem.config.cjs` |
| Deployment Script | `configs/deploy.sh` |
| Nginx | `configs/nginx/kmi-compro-site.conf` |
| Fail2Ban | `configs/fail2ban/jail.local` |

Seluruh konfigurasi production harus mengacu pada file yang terdapat di dalam repository ini.

---

# 🔄 Infrastructure Lifecycle

```text
                 Planning
                     │
                     ▼
            Architecture Decision
                     │
                     ▼
              Server Provisioning
                     │
                     ▼
              Application Deployment
                     │
                     ▼
           Nginx, DNS & SSL Configuration
                     │
                     ▼
            Security Hardening
                     │
                     ▼
              Production Release
                     │
                     ▼
         Monitoring & Maintenance
                     │
                     ▼
             Troubleshooting
                     │
                     ▼
            Disaster Recovery
                     │
                     ▼
            Infrastructure Review
```

---

# 📋 Production Status

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
| Automatic Security Updates | ⏳ *(Enable setelah verifikasi)* |

---

# 📝 Documentation Principles

Dokumentasi ini mengikuti beberapa prinsip berikut:

- **Single Source of Truth** untuk konfigurasi production.
- **Infrastructure as Documentation**, yaitu seluruh konfigurasi penting disimpan di dalam repository.
- **Knowledge Preservation**, sehingga pengalaman deployment tidak hilang ketika terjadi pergantian administrator.
- **Operational Consistency**, agar seluruh proses deployment dan maintenance dilakukan dengan prosedur yang sama.

---

# 📄 License

Internal Documentation

**Konsultan Manajemen Indonesia (KMI)**

Version **1.0.0**