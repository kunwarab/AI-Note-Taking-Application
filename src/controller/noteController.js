import Note from "../models/notesSchema.js";

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userEmail = req.user.email;     
        
        const newNote = await Note.create({
            title,
            content,
            userEmail
        })

        res.status(201).json(newNote)
    }
    catch(error) {
        console.log(`Error occured: ${error.message}`);
        res.status(500).json(`Internal Server error: ${error.message}`)
    }
}

export const getNotes = async (req, res) => {
    try {
        const userEmail = req.user.email;        
        const notes = await Note.find({ userEmail });

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json(`Internal Server error: ${error.message}`);
    }
}

export const updateNote = async (req, res) => {
    try {
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );

        if (!updateNote) {
            return res.status(404).json({ message: "Note not found"});
        }

        res.status(201).json({ message: "Note editied successfully"});
    }
    catch(error) {
        return res.status(404).json({ message: error.message});
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({ message : 'Note not found'});
        }

        res.json({ message: 'Note deleted successfully'});
    }
    catch (error) {
        res.status(500).json({ message : error.message });
    }
}