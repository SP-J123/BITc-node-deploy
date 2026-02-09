#!/bin/bash
set -e

# Domain: bit.hackridge.online

# 1. Install Docker if missing
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    if [ -f /etc/almalinux-release ] || [ -f /etc/redhat-release ]; then
        echo "Detected AlmaLinux/RHEL/CentOS..."
        dnf install -y dnf-plugins-core
        dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
        dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        systemctl start docker
        systemctl enable docker
    else
        # Fallback for Ubuntu/Debian
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
        rm get-docker.sh
    fi
fi

# 2. Stop any existing process on port 80
if lsof -Pi :80 -sTCP:LISTEN -t >/dev/null ; then
    echo "Warning: Port 80 is busy. Attempting to stop conflicting services..."
    systemctl stop nginx || true
    systemctl stop apache2 || true
    systemctl stop httpd || true # For CentOS/Alma
fi

# 3. Setup Directory
# The script is running from: /root/bitconnect/Coolify Deploy/install_and_run.sh
# We need to be in the directory containing docker-compose.yml
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# 4. Cleanup old containers
docker compose down || true
docker system prune -f

# 5. Start App
echo "Starting application on Port 80..."
docker compose up -d --build

echo "Success! Application deployed at http://bit.hackridge.online (or http://$(curl -s ifconfig.me))"
