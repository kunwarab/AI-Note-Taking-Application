# 🚀 AI Note-Taking Application

A full-stack note-taking application powered by AI for intelligent search and organization. Built with React, Node.js, Express, MongoDB, and Google's Generative AI.

![AI Notes Banner](https://img.shields.io/badge/AI-Powered-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Version](https://img.shields.io/badge/version-1.0.0-orange)

## ✨ Features

- 🔐 **Secure Authentication** - JWT-based user authentication
- 📝 **Rich Note Management** - Create, read, update, and delete notes
- 🤖 **AI-Powered Search** - Semantic search using embeddings for intelligent note discovery
- 🎨 **Beautiful UI** - Modern, responsive interface with Tailwind CSS
- 🐳 **Docker Ready** - Full Docker support for easy deployment
- 📊 **MongoDB Database** - Scalable NoSQL database for data persistence
- ⚡ **Fast Development** - Vite for lightning-fast frontend development

## 🏗️ Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│   React UI      │─────▶│  Express API    │─────▶│    MongoDB      │
│   (Frontend)    │      │   (Backend)     │      │   (Database)    │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
                               │
                               ▼
                         ┌─────────────┐
                         │  Google AI  │
                         │  Embeddings │
                         └─────────────┘
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide Icons
- React Toastify

### Backend
- Node.js
- Express
- MongoDB & Mongoose
- JWT Authentication
- Google Generative AI
- bcrypt

## 📋 Prerequisites

- Node.js 18+ and npm
- Docker & Docker Compose (for containerized deployment)
- MongoDB (if running locally without Docker)
- Google AI API Key

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd AI-Note-Taking-Application
   ```

2. **Create Backend environment file:**
   ```bash
   cd Backend
   cp .env.example .env
   ```

3. **Add your environment variables in `Backend/.env`:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://mongo:27017/ai-notes
   JWT_SECRET=your_jwt_secret_here
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Start all services:**
   ```bash
   cd ..
   docker-compose up -d
   ```

5. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 2: Local Development

#### Backend Setup

1. **Navigate to Backend:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ai-notes
   JWT_SECRET=your_jwt_secret_here
   GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Start MongoDB** (if not using Docker):
   ```bash
   mongod
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. **Navigate to Frontend:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open http://localhost:3000 in your browser

## 📁 Project Structure

```
AI-Note-Taking-Application/
├── Backend/
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controller/       # Route controllers
│   │   ├── middleware/       # Authentication middleware
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utility functions (AI, tokens)
│   │   └── server.js        # Express server entry point
│   ├── Dockerfile
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── context/         # React Context providers
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── Dockerfile
│   ├── nginx.conf           # Nginx configuration
│   └── package.json
└── docker-compose.yml        # Docker Compose configuration
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Notes (Protected)
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note
- `GET /api/notes/search?queryText=query` - AI-powered search

## 🎯 Usage

1. **Register an account** at `/register`
2. **Login** with your credentials
3. **Create notes** using the "New Note" button
4. **Search notes** using natural language queries
5. **Edit or delete** notes using the card actions

## 🤖 AI Search Features

The AI search uses Google's Generative AI to create embeddings for notes. When searching:
- Semantic similarity is calculated using cosine similarity
- Results are ranked by relevance
- Keyword matching boosts search scores
- Configurable similarity cutoff threshold

## 🐳 Docker Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up -d --build

# Stop and remove volumes
docker-compose down -v
```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://mongo:27017/ai-notes
JWT_SECRET=your_secret_key
GOOGLE_AI_API_KEY=your_api_key
```

## 🎨 UI Screenshots

The application features:
- Clean, modern login/register pages
- Responsive dashboard with note cards
- AI-powered search with relevance scores
- Modal for creating/editing notes
- Smooth animations and transitions

## 🧪 Testing

```bash
# Backend tests
cd Backend
npm test

# Frontend tests
cd Frontend
npm test
```

## 📝 Development

### Adding New Features

1. Backend: Add routes in `/Backend/src/routes`
2. Backend: Add controllers in `/Backend/src/controller`
3. Frontend: Add pages in `/Frontend/src/pages`
4. Frontend: Add services in `/Frontend/src/services`

### Code Style

- ESLint for JavaScript/React
- Follow existing patterns
- Use meaningful variable names
- Add comments for complex logic

## 🚀 Deployment

### Production Build

```bash
# Build frontend
cd Frontend
npm run build

# The build output will be in Frontend/dist
```

### Docker Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB connection failed:**
   - Ensure MongoDB is running
   - Check MONGODB_URI in .env

2. **AI search not working:**
   - Verify GOOGLE_AI_API_KEY is set
   - Check API quota limits

3. **CORS errors:**
   - Backend CORS is configured for all origins
   - Check proxy settings in vite.config.js

4. **Port conflicts:**
   - Change ports in docker-compose.yml
   - Update proxy configuration accordingly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Created with ❤️ for efficient note-taking

## 🙏 Acknowledgments

- Google Generative AI for embeddings
- React team for the amazing framework
- Tailwind CSS for utility-first styling
- MongoDB for flexible data storage

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Happy Note Taking! 📝✨**
