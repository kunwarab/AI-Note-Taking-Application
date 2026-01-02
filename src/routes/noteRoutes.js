import express from 'express';
const router = express.Router();
import Note from '../models/Note.js';

router.post('/', async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const newNote = await Note.create({
            title,
            content,
            userId
        })

        res.status(201).json(newNote)
    }
    catch(error) {
        console.log(`Error occured: ${error.message}`);
        res.status(500).json(`Internal Server error: ${error.message}`)
    }
});

router.get('/', async (req, res) => {
    try {
        const { userId } = req.query;
        const notes = await Note.find({ userId });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json(`Internal Server error: ${error.message}`);
    }
})

router.put('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
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
});

export default router;
