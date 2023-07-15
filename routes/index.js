const { Router } = require('express');
const userRoutes = require('./users');
const moviesRoutes = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

const router = Router();

router.use('/users', userRoutes);
router.use('/cards', moviesRoutes);
router.use('*', (req, res, next) => next(new NotFoundError('Указан несуществующий маршрут')));

module.exports = router;
