const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const {
  MONGO_DB_CODE,
} = require('../utils/constants');
// const NotFoundError = require('../utils/errors/notFoundError');
const DataError = require('../utils/errors/dataError');
const ConflictError = require('../utils/errors/conflictError');

module.exports.getMe = (req, res, next) => {
  User.findOne({ _id: req.user._id }).then((user) => res.send(user))
    .catch((err) => next(err));
};

module.exports.updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new DataError('Ошибка валидации'));
      } else {
        next(err);
      }
    });
};

module.exports.createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt.hash(password, 10).then((hash) => User.create({
    email, password: hash, name,
  }))
    .then(() => res.status(200).send({
      data: {
        name, email,
      },
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new DataError('Ошибка валидации'));
      } else if (err.code === MONGO_DB_CODE) {
        next(new ConflictError('Такой пользователь уже зарегестрирован'));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.checkUserAuth(email, password).then((user) => {
    const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
    res.cookie('jwt', token, {
      maxAge: 3600000 * 24 * 7,
      httpOnly: true,
    });
  })
    .then(() => {
      res.send({ messgae: 'Авторизация успешна' });
    })
    .catch((err) => next(err));
};
