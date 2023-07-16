const { Router } = require('express');
const { getUserMe, patchUser } = require('../controllers/users');

const userRoutes = Router();

userRoutes.get('/me', getUserMe);
userRoutes.patch('/me', patchUser);

module.exports = userRoutes;
