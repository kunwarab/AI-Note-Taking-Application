import mongoose from 'mongoose';

const connectDB = async () => {
    try {        
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);  // Exit the process with failuree !!!! Study for interview
    }
}

export default connectDB;