const { Router } = require('express');
const { getUserMe, patchUser } = require('../controllers/users');
const { validatePatchUser } = require('../middleware/validation');

const userRoutes = Router();

userRoutes.get('/me', getUserMe);
userRoutes.patch('/me', validatePatchUser, patchUser);

module.exports = userRoutes;
