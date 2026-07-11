#!/usr/bin/env bash

###############################################################################
#
# KMI Company Profile
#
# Production Deployment Script
#
###############################################################################

echo ""
echo "=================================="
echo "Server Health Check"
echo "=================================="

echo ""
echo "PM2"
pm2 list

echo ""
echo "Nginx"
sudo systemctl status nginx --no-pager

echo ""
echo "Disk"

df -h

echo ""
echo "Memory"

free -h

echo ""
echo "SSL"

sudo certbot certificates

echo ""
echo "Firewall"

sudo ufw status