const router = require('express').Router();
const userRouter = require('./userRoutes');
const movieRouter = require('./movieRoutes');
// const { tokenAuth } = require('../middlewares/auth');
const NotFoundError = require('../utils/errors/notFoundError');
// const { NOT_FOUND_ERROR_CODE } = require('../utils/constants');
// const { login } = require('../controllers/user');
// const { validateLogin, validateRegistration } = require('../utils/validators/userValidator');

// router.post('/signin', login);
// router.post('/signup', createUser);
// router.get('/signout', (req, res) => {
//   res.clearCookie('jwt').send({ message: 'Выход' });
// });

router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес'));
});

module.exports = router;
