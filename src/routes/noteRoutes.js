import express from 'express';
import { createNote,  getNotes, updateNote, deleteNote } from '../controller/noteController.js';
import authenticate from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authenticate, createNote);
router.get('/', authenticate, getNotes);
router.put('/:id', authenticate, updateNote);
router.delete('/:id', authenticate, deleteNote);

export default router;
