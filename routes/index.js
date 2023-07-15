import { Router } from 'express';
import userRoutes from './users';
import moviesRoutes from './movies';
import NotFoundError from '../errors/NotFoundError';

const router = Router();

router.use('/users', userRoutes);
router.use('/cards', moviesRoutes);
router.use('*', (req, res, next) => next(new NotFoundError('Указан несуществующий маршрут')));

export default router;
