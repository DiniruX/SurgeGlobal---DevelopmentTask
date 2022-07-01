const Note = require('../Model/Note');

const createNote = async (req, res) => {

    const note = req.body;

    const newNote = new Note({ ...note, creater: req.title });
    console.log("Saved Note: ", newNote);

    try {

        await newNote.save();
        res.status(200).json({ newNote });
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const getNotes = async (req, res) => {

    try {

        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

const getNoteById = async (req, res) => {

    const id = req.params.id;

    try {

        const notes = await Note.findById(id);
        res.status(200).json(notes);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }

}

const updateNote = async (req, res) => {

    const { id } = req.params;
    const { title, description } = req.body;

    try {

        const updatedNote = ({ title, description, _id: id });
        await Note.findByIdAndUpdate(id, updatedNote, { new: true });
        res.json(updatedNote);
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }

}

const deleteNote = async (req, res) => {

    const { id } = req.params;

    try {

        await Note.findByIdAndRemove(id);
        res.status(200).json({message: "Note deleted successfully..."});
    }

    catch (err) {

        res.status(400).json({ message: err.message });
    }
}

module.exports = { createNote, getNotes, getNoteById, updateNote, deleteNote }