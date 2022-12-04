const { celebrate, Joi } = require('celebrate');
const { URL_REG_EXP } = require('../constants');

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_REG_EXP),
    trailerLink: Joi.string().required().pattern(URL_REG_EXP),
    thumbnail: Joi.string().required().pattern(URL_REG_EXP),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    movieId: Joi.number().required(),
  }),
});

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
});
