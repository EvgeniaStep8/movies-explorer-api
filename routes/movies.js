import { Router } from 'express';
import { getMovies, createMovie, deleteMovie } from '../controllers/movies';

const moviesRoutes = Router();

moviesRoutes.get('/', getMovies);
moviesRoutes.post('/', createMovie);
moviesRoutes.delete('/:id', deleteMovie);

export default moviesRoutes;
