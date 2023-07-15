const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const { _id: owner } = req.user;
  Movie.create({ ...req.body, owner })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err.message.includes('validation failed')) {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(() => new NotFoundError('Фильм с переаднным id не найден'))
    .then((movie) => {
      if (movie.owner.equals(req.user._id)) {
        movie.deleteOne();
        return movie;
      }
      throw new ForbiddenError('Удалить фильм может только его владелец');
    })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.message.includes('Cast to ObjectId failed')) {
        next(new BadRequestError('Передан некорректный id'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
