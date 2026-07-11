# Server Inventory

Dokumen ini berisi inventaris dan konfigurasi aktual server production website **Konsultan Manajemen Indonesia (KMI)**.

Dokumen ini menjadi **Single Source of Truth (SSOT)** mengenai lingkungan production dan harus selalu diperbarui apabila terjadi perubahan infrastruktur maupun konfigurasi server.

---

# Overview

Server Inventory digunakan untuk:

- Mendokumentasikan konfigurasi production.
- Mempermudah proses maintenance.
- Mempermudah proses audit.
- Mempermudah proses migrasi server.
- Mempermudah proses onboarding administrator baru.

---

# Server Information

| Item | Value |
|------|-------|
| Environment | Production |
| Provider | Domainesia |
| VPS Package | Cloud VPS Lite |
| Operating System | Ubuntu Server 24.04 LTS |
| Hostname | kmi-compro-site *(sesuaikan jika berubah)* |
| Public IP | xxx.xxx.xxx.xxx |
| Deployment Mode | Next.js Standalone |

---

# Domain Information

| Item | Value |
|------|-------|
| Primary Domain | konsultanmanajemenindonesia.com |
| Canonical URL | https://konsultanmanajemenindonesia.com |
| WWW Redirect | Enabled |
| HTTP Redirect | HTTPS |

---

# DNS Provider

| Item | Value |
|------|-------|
| Provider | Rumahweb |
| DNS Management | Rumahweb |

---

# Email Service

| Item | Value |
|------|-------|
| Provider | Domainesia MailSpace |
| MX Record | MailSpace |
| SPF | MailSpace |
| DKIM | MailSpace |
| DMARC | MailSpace |

> Website dan Email menggunakan server yang berbeda.
>
> Website berjalan pada VPS Domainesia.
>
> Email berjalan menggunakan Domainesia MailSpace.

---

# Server Specification

| Item | Value |
|------|-------|
| CPU | 2 Core |
| RAM | 2 GB |
| Swap | 2 GB |
| Storage | SSD |

---

# Software Inventory

| Software | Version |
|-----------|----------|
| Ubuntu | 24.04 LTS |
| Node.js | 24.x |
| npm | Latest Compatible |
| PM2 | Latest Stable |
| Nginx | 1.24.x |
| Certbot | Latest Stable |
| Git | Latest Stable |

---

# Application Information

| Item | Value |
|------|-------|
| Framework | Next.js App Router |
| Runtime | Node.js |
| Deployment | Standalone |
| Process Manager | PM2 |
| PM2 Application Name | kmi-compro-site |
| Internal Port | 3434 |

---

# Directory Structure

## Project

```text
/root/kmi-compro-site
```

---

## Deployment Documentation

```text
/root/kmi-compro-site/docs/deployment
```

---

## Nginx

```text
/etc/nginx/
```

---

## SSL

```text
/etc/letsencrypt/
```

---

## Fail2Ban

```text
/etc/fail2ban/
```

---

## PM2 Logs

```text
~/.pm2/logs/
```

---

# Network Configuration

## Public Access

| Port | Service |
|------|----------|
| 80 | HTTP |
| 443 | HTTPS |

---

## Management

| Port | Service |
|------|----------|
| 22 | SSH |

---

## Internal Service

| Port | Service |
|------|----------|
| 3434 | Next.js Standalone |

---

# Firewall

Firewall menggunakan:

```
UFW
```

Rule production.

```text
22/tcp
80/tcp
443/tcp
```

Default Policy.

```text
deny incoming

allow outgoing
```

---

# Running Services

| Service | Status |
|----------|--------|
| PM2 | Enabled |
| Nginx | Enabled |
| Fail2Ban | Enabled |
| UFW | Enabled |
| Automatic Security Updates | Enabled *(jika sudah dikonfigurasi)* |

---

# PM2 Configuration

Application.

```text
kmi-compro-site
```

Configuration File.

```text
docs/deployment/configs/ecosystem.config.cjs
```

---

# Deployment Script

```text
docs/deployment/configs/deploy.sh
```

Deployment.

```bash
./deploy.sh
```

---

# Configuration Files

| Configuration | Location |
|---------------|----------|
| Nginx | configs/nginx/kmi-compro-site.conf |
| PM2 | configs/ecosystem.config.cjs |
| Deploy Script | configs/deploy.sh |
| Fail2Ban | configs/fail2ban/jail.local |

---

# SSL

Provider.

```
Let's Encrypt
```

Managed by.

```
Certbot
```

Verification.

```bash
sudo certbot certificates
```

---

# Backup Required

File berikut wajib dibackup.

```text
.env.production

deploy.sh

ecosystem.config.cjs

/etc/nginx/

/etc/fail2ban/

/etc/letsencrypt/
```

---

# Health Check Commands

PM2

```bash
pm2 list
```

Nginx

```bash
sudo systemctl status nginx
```

Firewall

```bash
sudo ufw status
```

Fail2Ban

```bash
sudo fail2ban-client status sshd
```

SSL

```bash
sudo certbot certificates
```

Disk

```bash
df -h
```

Memory

```bash
free -h
```

---

# Operational Checklist

## Daily

- [ ] Website Online
- [ ] PM2 Online
- [ ] Nginx Running

---

## Weekly

- [ ] Disk Usage
- [ ] Memory Usage
- [ ] PM2 Log Size

---

## Monthly

- [ ] SSL Renewal
- [ ] Review Firewall
- [ ] Review Fail2Ban
- [ ] Review Automatic Updates

---

# Related Documents

- README.md
- 01-server-setup.md
- 02-project-deployment.md
- 03-nginx-ssl.md
- 04-security-hardening.md
- 05-maintenance.md
- 06-troubleshooting.md
- 07-disaster-recovery.md

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0.0 | July 2026 | Initial Production Deployment |