#!/bin/bash

# AI Note-Taking Application - Quick Start Script
# This script helps you set up and run the application

echo "🚀 AI Note-Taking Application - Quick Start"
echo "=========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker and Docker Compose are installed"
echo ""

# Check if .env file exists in Backend
if [ ! -f "Backend/.env" ]; then
    echo "⚠️  Backend .env file not found!"
    echo "Creating .env file from template..."
    
    cat > Backend/.env << EOF
PORT=5000
MONGODB_URI=mongodb://mongo:27017/ai-notes
JWT_SECRET=your_jwt_secret_key_change_this_in_production
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
EOF

    echo "✅ .env file created at Backend/.env"
    echo ""
    echo "⚠️  IMPORTANT: Please edit Backend/.env and add your:"
    echo "   - JWT_SECRET (use a strong random string)"
    echo "   - GOOGLE_AI_API_KEY (get it from Google AI Studio)"
    echo ""
    read -p "Press Enter to continue after updating the .env file..."
fi

echo "📦 Starting Docker containers..."
echo ""

# Start Docker Compose
docker-compose up -d

# Check if containers started successfully
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Application started successfully!"
    echo ""
    echo "📝 Access the application:"
    echo "   Frontend: http://localhost:3000"
    echo "   Backend API: http://localhost:5000"
    echo "   MongoDB: localhost:27017"
    echo ""
    echo "📊 View logs:"
    echo "   docker-compose logs -f"
    echo ""
    echo "🛑 Stop the application:"
    echo "   docker-compose down"
    echo ""
    echo "🎉 Happy note-taking!"
else
    echo ""
    echo "❌ Failed to start containers. Please check the logs:"
    echo "   docker-compose logs"
fi
