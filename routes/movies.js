const { Router } = require('express');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

const moviesRoutes = Router();

moviesRoutes.get('/', getMovies);
moviesRoutes.post('/', createMovie);
moviesRoutes.delete('/:id', deleteMovie);

module.exports = moviesRoutes;
