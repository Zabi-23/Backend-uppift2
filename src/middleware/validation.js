const { body, validationResult } = require('express-validator');

const registrationValidation = [
  body('username').notEmpty().isLength({ min: 5 }),
  body('password').notEmpty().isLength({ min: 6 }),
  body('email').notEmpty().isEmail(),
];

const loginValidation = [
  body('username').notEmpty(),
  body('password').notEmpty(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { registrationValidation, loginValidation, validate };



