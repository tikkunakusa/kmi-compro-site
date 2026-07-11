# KMI Company Profile

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-24-green)
![License](https://img.shields.io/badge/License-Internal-red)
![Deployment](https://img.shields.io/badge/Deployment-PM2%20%2B%20Nginx-success)

Website resmi **Konsultan Manajemen Indonesia (KMI)** yang dibangun menggunakan **Next.js App Router** dengan fokus pada performa, maintainability, dan kemudahan deployment.

---

## Overview

Project ini merupakan website company profile yang menyediakan informasi mengenai layanan, profil perusahaan, artikel, serta media komunikasi dengan calon klien.

Website dikembangkan dengan pendekatan modern menggunakan Next.js dan dirancang agar mudah dipelihara serta mudah dikembangkan di masa mendatang.

---

## Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Runtime

- Node.js

### Deployment

- Next.js Standalone
- PM2
- Nginx

### Infrastructure

- Ubuntu Server 24.04 LTS
- Domainesia Cloud VPS
- Let's Encrypt SSL

---

## Features

- Responsive Company Profile Website
- SEO Friendly
- Server Side Rendering (SSR)
- Static Asset Optimization
- Standalone Production Deployment
- HTTPS
- Security Hardening
- Automated Deployment Script

---

## Project Structure

```text
.
├── app/
├── components/
├── public/
├── lib/
├── docs/
│   └── deployment/
├── package.json
└── next.config.ts
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Production

```bash
npm run start
```

---

## Environment Variables

Salin template environment.

```bash
cp docs/deployment/configs/environment/production.env.example .env.production
```

Kemudian sesuaikan seluruh nilai environment sesuai kebutuhan.

---

## Documentation

Seluruh dokumentasi teknis tersedia pada folder berikut.

```text
docs/deployment/
```

Dokumentasi meliputi:

- Server Setup
- Project Deployment
- Nginx, DNS & SSL
- Security Hardening
- Maintenance
- Troubleshooting
- Disaster Recovery
- Server Inventory
- Architecture Decision Records (ADR)

---

## Deployment Architecture

```text
Internet
    │
    ▼
Nginx
    │
    ▼
PM2
    │
    ▼
Next.js Standalone
```

Dokumentasi lengkap mengenai deployment tersedia pada:

```text
docs/deployment/
```

---

## Scripts

Folder `scripts/` berisi kumpulan utility script yang digunakan untuk operasional dan deployment website pada lingkungan production.

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

### Available Scripts

| Script | Description |
|---------|-------------|
| `deploy.sh` | Melakukan deployment penuh (build, copy assets, restart PM2, dan health check). |
| `build.sh` | Melakukan build aplikasi production dan menyiapkan output standalone. |
| `restart.sh` | Merestart aplikasi menggunakan PM2. |
| `rollback.sh` | Melakukan rollback ke commit sebelumnya dan melakukan redeploy. |
| `health-check.sh` | Menampilkan status PM2, Nginx, Firewall, SSL, penggunaan disk, dan memori. |
| `logs.sh` | Menampilkan log aplikasi melalui PM2. |
| `backup.sh` | Membuat backup konfigurasi penting server. |
| `permissions.sh` | Memberikan permission executable pada seluruh script di folder `scripts/`. |

### Common Usage

Deployment:

```bash
./scripts/deploy.sh
```

Health Check:

```bash
./scripts/health-check.sh
```

Application Logs:

```bash
./scripts/logs.sh
```

Restart Application:

```bash
./scripts/restart.sh
```

Rollback Deployment:

```bash
./scripts/rollback.sh
```

> Seluruh script dirancang untuk lingkungan **Production** dan sebaiknya dijalankan dari root project. Dokumentasi lengkap mengenai proses deployment dan operasional server tersedia pada `docs/deployment/`.

---

## Contributing

Seluruh perubahan mengikuti standar coding project.

Sebelum membuat Pull Request pastikan:

- Build berhasil.
- Linter berjalan tanpa error.
- Dokumentasi diperbarui apabila terdapat perubahan arsitektur atau deployment.

---

## License

Copyright © Konsultan Manajemen Indonesia (KMI)

Internal Project.