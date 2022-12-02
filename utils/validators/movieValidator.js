const { celebrate, Joi } = require('celebrate');
const { URL_REG_EXP } = require('../constants');

module.exports.validateMovie = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    country: Joi.string().required(),
    director: Joi.string().required(),
    dureation: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_REG_EXP),
    trailerLink: Joi.string().required().pattern(URL_REG_EXP),
    thumbnail: Joi.string().required().pattern(URL_REG_EXP),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().required().length(24),
  }),
});
