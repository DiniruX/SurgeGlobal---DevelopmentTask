const express = require('express');
const router = new express.Router();
const { createNote, getNotes, getNoteById,updateNote, deleteNote } = require('../Controller/NotesController');

router.post('/', createNote);
router.get('/', getNotes);
router.get('/:id', getNoteById);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;