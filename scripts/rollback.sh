#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$PROJECT_DIR"

git reset --hard HEAD~1

npm install

npm run build

mkdir -p .next/standalone/.next

cp -R .next/static .next/standalone/.next/
cp -R public .next/standalone/

pm2 restart kmi-compro-site

echo "Rollback Finished"