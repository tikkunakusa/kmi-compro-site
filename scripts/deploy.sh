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

"$SCRIPT_DIR/build.sh"

"$SCRIPT_DIR/restart.sh"

"$SCRIPT_DIR/health-check.sh"

echo ""
echo "========================================="
echo "Deployment completed successfully."
echo "========================================="