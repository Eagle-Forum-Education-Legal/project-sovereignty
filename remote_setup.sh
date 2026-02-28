#!/bin/bash
set -e
# Prepare directory
mkdir -p /home/ec2-user/project-sovereignty
tar -xzf /home/ec2-user/project-sovereignty-full.tar.gz -C /home/ec2-user/project-sovereignty/
cd /home/ec2-user/project-sovereignty/

# Install NVM and Node
export NVM_DIR="$HOME/.nvm"
if [ ! -d "$NVM_DIR" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20

# Python setup
python3 -m pip install --user -r backend/requirements.txt --quiet

# Frontend setup
cd frontend
npm install --quiet

# Build frontend (required for next start, bakes in NEXT_PUBLIC_* env vars)
echo "Building Next.js frontend..."
npm run build

# Stop old processes
pkill -f "backend/main.py" || true
pkill -f "next-server" || true

sleep 2

# Start backend
cd ..
nohup python3 backend/main.py > backend.log 2>&1 &
echo "Backend process ID: $!"

# Start frontend
cd frontend
nohup npm run start -- -p 3000 > ../frontend.log 2>&1 &
echo "Frontend process ID: $!"

echo "Deployment complete on http://ec2-3-144-231-148.us-east-2.compute.amazonaws.com:3000"
