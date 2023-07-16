const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const LINK_REGEX = require('../utils/constants');

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.required().custom((value, helper) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helper.message('Некорректный id');
    }),
  }),
});

const validatePatchUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(LINK_REGEX),
    trailerLink: Joi.string().required().regex(LINK_REGEX),
    thumbnail: Joi.string().required().regex(LINK_REGEX),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  validateCreateUser,
  validateLogin,
  validateId,
  validatePatchUser,
  validateCreateMovie,
};
