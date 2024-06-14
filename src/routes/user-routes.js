const express = require('express');
const { registerUser, loginUser } = require('../controllers/user-controllers');
const { registrationValidation, loginValidation, validate } = require('../middleware/validation');

const router = express.Router();

router.post('/register', registrationValidation, validate, registerUser);
router.post('/login', loginValidation, validate, loginUser);

module.exports = router;


