const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user-controllers');
const { registrationValidation, loginValidation, validate } = require('../middleware/validation');

const router = express.Router();

router.get('/', getUsers); // Route for fetching all users
router.get('/:id', getUser); // Route for fetching a specific user
router.post('/', registrationValidation, validate, createUser);
router.put('/:id', registrationValidation, validate, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


