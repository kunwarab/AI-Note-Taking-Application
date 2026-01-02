import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import noteRoutes from './routes/noteRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

connectDB()

console.log(`Request came till here`);

app.use('/api/notes', noteRoutes);

app.get('/ping', (req,res) => {
    res.send('Pong');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})