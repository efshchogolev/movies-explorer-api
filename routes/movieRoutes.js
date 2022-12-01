const cardRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movie');

cardRouter.get('/', getMovies);
cardRouter.post('/', createMovie);
cardRouter.delete('/:movieId', deleteMovie);

module.exports = cardRouter;
