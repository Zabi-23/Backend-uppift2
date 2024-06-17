const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user-controllers');
const { registrationValidation, loginValidation, validate } = require('../middleware/validation');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', registrationValidation, validate, createUser);
router.put('/:id', registrationValidation, validate, updateUser);
router.delete('/:id', deleteUser);

router.post('/register', registrationValidation, validate, createUser);
router.post('/login', loginValidation, validate, require('../controllers/user-controllers').loginUser);

module.exports = router;
