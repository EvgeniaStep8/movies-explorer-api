const { Router } = require('express');
const { createUser, login, logout } = require('../controllers/users');

const authRoutes = Router();

authRoutes.post('/signup', createUser);
authRoutes.post('/signin', login);
authRoutes.post('/signout', logout);

module.exports = authRoutes;
