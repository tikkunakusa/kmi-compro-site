#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_DIR"

echo "=================================="
echo "Building Application"
echo "=================================="

git pull

npm install

npm run build

mkdir -p .next/standalone/.next

cp -R .next/static .next/standalone/.next/
cp -R public .next/standalone/

echo "Build Completed"