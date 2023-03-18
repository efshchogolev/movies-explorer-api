const cardRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');
const { validateMovie, validateMovieId } = require('../utils/validators/movieValidator');

cardRouter.get('/', getMovies);
cardRouter.post('/', validateMovie, createMovie);
cardRouter.delete('/:_id', validateMovieId, deleteMovie);

module.exports = cardRouter;
