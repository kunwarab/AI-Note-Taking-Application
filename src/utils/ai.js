import { GoogleGenerativeAI } from '@google/generative-ai'

const generateEmbedding = async (text) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
        const result = await model.embedContent(text);

        return result.embedding.values; 
    }
    catch(error) {
        console.error(` Gemini Embedding Error: ${error.message}`);
        throw error;
    }
}

export default generateEmbedding;