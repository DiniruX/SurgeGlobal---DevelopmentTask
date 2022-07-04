const express = require('express');
const router = new express.Router();
const { createUser, getUsers, getUserById, updateUser, loginUser } = require('../Controller/UserController');
const { userLogin, registerUser } = require('../Controller/Authentication')

router.post('/', registerUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.post('/signin', userLogin);

module.exports = router;

