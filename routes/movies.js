import { Router } from 'express';
import { getMovies, createMovie, deleteMovie } from '../controllers/movies';

const userRoutes = Router();

userRoutes.get('/', getMovies);
userRoutes.post('/', createMovie);
userRoutes.delete('/:id', deleteMovie);

export default userRoutes;
