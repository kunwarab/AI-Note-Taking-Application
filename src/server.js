import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import noteRoutes from './routes/noteRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

connectDB()

app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

app.get('/ping', (req,res) => {
    res.send('Pong');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})