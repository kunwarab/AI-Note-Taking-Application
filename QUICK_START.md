# 🚀 Quick Start Guide

## Prerequisites Checklist

- [ ] Docker and Docker Compose installed
- [ ] Google AI API Key obtained from [Google AI Studio](https://makersuite.google.com/app/apikey)
- [ ] Port 3000, 5000, and 27017 available

## Setup in 3 Steps

### Step 1: Configure Environment

```bash
cd Backend
cp .env.example .env
# Edit .env and add your GOOGLE_AI_API_KEY
```

### Step 2: Start the Application

```bash
cd ..
./start.sh
# Or manually: docker-compose up -d
```

### Step 3: Access the App

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## First Time User Flow

1. **Register Account**
   - Go to http://localhost:3000
   - Click "Create one now"
   - Fill in your details
   - Click "Create Account"

2. **Create Your First Note**
   - Click "New Note" button
   - Add a title (e.g., "My First Note")
   - Add content (e.g., "This is my first AI-powered note!")
   - Click "Create Note"

3. **Try AI Search**
   - Type a search query in the search bar
   - Click "Search" or press Enter
   - See AI-ranked results with relevance scores!

## Development Mode

### Run Frontend Only

```bash
cd Frontend
npm install
npm run dev
# Open http://localhost:3000
```

### Run Backend Only

```bash
cd Backend
npm install
npm run dev
# API available at http://localhost:5000
```

## Useful Commands

### Docker

```bash
# View logs
docker-compose logs -f

# Stop application
docker-compose down

# Rebuild and start
docker-compose up -d --build

# Clean everything (including database!)
docker-compose down -v
```

### Frontend Development

```bash
cd Frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

### Backend Development

```bash
cd Backend
npm run dev      # Start with nodemon
npm start        # Start normally
```

## Testing Features

### 1. Authentication
- ✅ Register with email/password
- ✅ Login with credentials
- ✅ Logout functionality

### 2. Notes Management
- ✅ Create new note
- ✅ View all notes
- ✅ Edit existing note
- ✅ Delete note

### 3. AI Search
- ✅ Search using natural language
- ✅ View relevance scores
- ✅ See matching results

## Common Issues & Solutions

### Issue: Port already in use
**Solution**: Change ports in docker-compose.yml

```yaml
services:
  frontend:
    ports:
      - "3001:80"  # Change 3000 to 3001
```

### Issue: Cannot connect to backend
**Solution**: Check if backend is running
```bash
curl http://localhost:5000/ping
# Should return: Pong
```

### Issue: AI search not working
**Solution**: Verify GOOGLE_AI_API_KEY in Backend/.env
```bash
cd Backend
cat .env | grep GOOGLE_AI_API_KEY
```

### Issue: MongoDB connection error
**Solution**: Restart MongoDB container
```bash
docker-compose restart mongo
```

## Environment Variables Reference

### Backend/.env

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Backend server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://mongo:27017/ai-notes |
| JWT_SECRET | JWT signing secret | your_secret_key_here |
| GOOGLE_AI_API_KEY | Google AI API key | AIzaSy... |

## Project Structure Quick Reference

```
AI-Note-Taking-Application/
├── Frontend/              # React application
│   ├── src/
│   │   ├── pages/        # Login, Register, Dashboard
│   │   ├── components/   # Reusable components
│   │   ├── context/      # Auth context
│   │   └── services/     # API calls
│   └── package.json
├── Backend/              # Express API
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controller/   # Business logic
│   │   ├── models/       # MongoDB schemas
│   │   └── middleware/   # Auth middleware
│   └── package.json
├── docker-compose.yml    # Docker orchestration
└── start.sh             # Quick start script
```

## API Endpoints Quick Reference

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/auth/register | Register new user | No |
| POST | /api/auth/login | Login user | No |
| GET | /api/notes | Get all notes | Yes |
| POST | /api/notes | Create note | Yes |
| PUT | /api/notes/:id | Update note | Yes |
| DELETE | /api/notes/:id | Delete note | Yes |
| GET | /api/notes/search | Search notes | Yes |

## Tips for Best Experience

1. **Use descriptive note titles** - Makes searching easier
2. **Write detailed content** - AI search works better with more context
3. **Try natural language queries** - "meeting notes from last week"
4. **Check relevance scores** - Higher scores = better matches
5. **Keep notes organized** - Use consistent formatting

## Next Steps

- ✨ Try creating different types of notes
- 🔍 Experiment with AI search queries
- 📝 Add detailed content to see AI in action
- 🚀 Deploy to production (see README.md)

## Getting Help

- Check `README.md` for detailed documentation
- Check `FRONTEND_SUMMARY.md` for UI details
- View logs: `docker-compose logs -f`
- Check backend status: `curl http://localhost:5000/ping`

---

**Happy Note Taking! 📝✨**

Made with ❤️ for productive note-taking
