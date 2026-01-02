# AI Note-Taking Application - Frontend

A modern, responsive frontend for the AI-powered note-taking application built with React, Vite, and Tailwind CSS.

## ✨ Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Note Management**: Create, read, update, and delete notes
- **AI-Powered Search**: Semantic search using AI embeddings to find relevant notes
- **Beautiful UI**: Modern, clean interface with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Feedback**: Toast notifications for user actions

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon set
- **React Toastify** - Toast notifications

## 📋 Prerequisites

- Node.js 18+ and npm
- Backend server running on port 5000

## 🚀 Getting Started

### Development Mode

1. **Install dependencies:**
   ```bash
   cd Frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

### Docker Deployment

From the root directory:

```bash
docker-compose up -d
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/        # Reusable components
│   │   └── PrivateRoute.jsx
│   ├── context/          # React context providers
│   │   └── AuthContext.jsx
│   ├── pages/            # Page components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/         # API services
│   │   └── api.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
├── Dockerfile          # Docker configuration
└── nginx.conf          # Nginx configuration for production
```

## 🎨 UI Components

### Pages

- **Login** - User authentication page
- **Register** - New user registration
- **Dashboard** - Main application interface with notes management

### Features

- **Search Bar** - AI-powered semantic search
- **Note Cards** - Display notes with edit and delete actions
- **Modal** - Create and edit notes
- **Responsive Navigation** - Header with logout functionality

## 🔧 Configuration

### API Endpoint

The frontend communicates with the backend through `/api` proxy. Update `vite.config.js` if your backend runs on a different port:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:YOUR_PORT',
      changeOrigin: true,
    },
  },
}
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Authentication Flow
- JWT token stored in localStorage
- Protected routes using PrivateRoute component
- Automatic token injection in API requests

### AI Search
- Uses backend's semantic search endpoint
- Displays relevance scores for search results
- Fallback to regular search if no AI results

### Note Management
- Rich text editing in modal
- Real-time updates
- Optimistic UI updates

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Change port in vite.config.js
   server: { port: 3001 }
   ```

2. **API connection issues:**
   - Ensure backend is running
   - Check proxy configuration
   - Verify CORS settings on backend

3. **Build errors:**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📝 License

This project is part of the AI Note-Taking Application.
