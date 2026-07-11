#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

set -euo pipefail

APP_NAME="kmi-compro-site"

echo "=================================="
echo "Restart PM2"
echo "=================================="

pm2 restart "$APP_NAME"

pm2 save

echo "Restart Completed"