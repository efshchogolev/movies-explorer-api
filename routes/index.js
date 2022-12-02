const router = require('express').Router();
const userRouter = require('./userRoutes');
const movieRouter = require('./movieRoutes');
const { tokenAuth } = require('../middlewares/auth');
const NotFoundError = require('../utils/errors/notFoundError');
// const { NOT_FOUND_ERROR_CODE } = require('../utils/constants');
const { login, createUser } = require('../controllers/user');
// const { validateLogin, validateRegistration } = require('../utils/validators/userValidator');

router.post('/signin', login);
router.post('/signup', createUser);
router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

router.use('/users', tokenAuth, userRouter);
router.use('/movies', tokenAuth, movieRouter);
router.use('*', tokenAuth, (req, res, next) => {
  next(new NotFoundError('Неверный адрес'));
});

module.exports = router;
