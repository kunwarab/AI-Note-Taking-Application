import Note from "../models/notesSchema.js";
import generateEmbedding from "../utils/ai.js";
import cosineSimilarity from "../utils/cosine.js";
import Settings from "../models/settingsSchema.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userEmail = req.user.email;

    const embedding = await generateEmbedding(content + title);

    const newNote = await Note.create({
      title,
      content,
      userEmail,
      embedding,
    });

    res.status(201).json(newNote);
  } catch (error) {
    console.log(`Error occured: ${error.message}`);
    res.status(500).json(`Internal Server error: ${error.message}`);
  }
};

export const getNotes = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const notes = await Note.find({ userEmail });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json(`Internal Server error: ${error.message}`);
  }
};

export const updateNote = async (req, res) => {
  try {
    const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(201).json({ message: "Note editied successfully" });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchNotes = async (req, res) => {
  try {
    const { queryText } = req.query;
    const queryVector = await generateEmbedding(queryText);
    const cutoff = await getAISearchCutoff();

    const userNotes = await Note.find({ userEmail: req.user.email });
    const results = userNotes
      .map((note) => {
        let score = cosineSimilarity(queryVector, note.embedding);
        if (note.content.toLowerCase().includes(queryText.toLowerCase())) {
          score += 0.2;
        }
        return { ...note._doc, score };
      })
      .sort((a, b) => b.score - a.score);

    const filteredResults = results
      .filter((note) => note.score > cutoff) // Only keep notes with 80%+ similarity
      .slice(0, 10); // Limit to top 10 results

    res.json(filteredResults);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAISearchCutoff = async () => {
  try {
    const settings = await Settings.findOne({ name: "AI Search" });
    return settings?.config?.ai_search_cutoff ?? 0.6;
  } catch (error) {
    console.error("Error fetching AI Search cutoff:", error);
    return 0.8;
  }
};
