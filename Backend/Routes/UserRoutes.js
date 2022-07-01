const express = require('express');
const router = new express.Router();
const { createUser, getUsers, getUserById, updateUser } = require('../Controller/UserController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);

module.exports = router;

