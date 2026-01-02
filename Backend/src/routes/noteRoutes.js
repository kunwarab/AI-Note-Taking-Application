import express from 'express';
import { createNote,  getNotes, updateNote, deleteNote, searchNotes } from '../controller/noteController.js';
import authenticate from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authenticate, createNote);
router.get('/', authenticate, getNotes);
router.put('/:id', authenticate, updateNote);
router.delete('/:id', authenticate, deleteNote);
router.get('/search', authenticate, searchNotes);

export default router;
