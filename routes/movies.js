const { Router } = require('express');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateCreateMovie, validateId } = require('../middleware/validation');

const moviesRoutes = Router();

moviesRoutes.get('/', getMovies);
moviesRoutes.post('/', validateCreateMovie, createMovie);
moviesRoutes.delete('/:id', validateId, deleteMovie);

module.exports = moviesRoutes;
