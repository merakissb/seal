const express = require('express');
const { createUser, getAllUsers, deleteUser } = require('./controllers/userController');
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

module.exports = router;