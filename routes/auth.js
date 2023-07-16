const { Router } = require('express');
const { createUser, login, logout } = require('../controllers/users');
const { validateCreateUser, validateLogin } = require('../middleware/validation');

const authRoutes = Router();

authRoutes.post('/signup', validateCreateUser, createUser);
authRoutes.post('/signin', validateLogin, login);
authRoutes.post('/signout', logout);

module.exports = authRoutes;
