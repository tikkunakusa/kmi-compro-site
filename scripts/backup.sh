#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

BACKUP_DIR="$HOME/backups/$(date +%Y%m%d-%H%M%S)"

mkdir -p "$BACKUP_DIR"

cp .env.production "$BACKUP_DIR"

cp -R /etc/nginx "$BACKUP_DIR"

cp -R /etc/fail2ban "$BACKUP_DIR"

echo "Backup Saved"

echo "$BACKUP_DIR"