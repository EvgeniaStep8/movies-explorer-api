const { Router } = require('express');
const userRoutes = require('./users');
const moviesRoutes = require('./movies');
const authRoutes = require('./auth');
const auth = require('../middleware/auth');
const NotFoundError = require('../errors/NotFoundError');

const router = Router();

router.use('/users', auth, userRoutes);
router.use('/movies', auth, moviesRoutes);
router.use('/', authRoutes);
router.use('*', (req, res, next) => next(new NotFoundError('Указан несуществующий маршрут')));

module.exports = router;
