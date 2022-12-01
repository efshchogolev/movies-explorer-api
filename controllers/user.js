const User = require('../models/user');

module.exports.getMe = (req, res, next) => {
  User.findOne({ _id: req.user._id }).then((user) => res.send(user))
    .catch((err) => next(err));
};
// const NotFoundError = require('../utils/errors/notFoundError');
const DataError = require('../utils/errors/dataError');
// const ConflictError = require('../utils/errors/conflictError');

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
