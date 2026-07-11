#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

set -e

APP_NAME="kmi-compro-site"
PROJECT_DIR="/root/kmi-compro-site"

echo "========================================="
echo "KMI Company Profile Deployment"
echo "========================================="

cd "$PROJECT_DIR"

echo ""
echo "1. Pull latest source..."
git pull

echo ""
echo "2. Install dependencies..."
npm install

echo ""
echo "3. Build application..."
npm run build

echo ""
echo "4. Copy standalone assets..."

mkdir -p .next/standalone/.next

cp -R .next/static .next/standalone/.next/
cp -R public .next/standalone/

echo ""
echo "5. Restart PM2..."

pm2 restart "$APP_NAME"

echo ""
echo "========================================="
echo "Deployment completed successfully."
echo "========================================="