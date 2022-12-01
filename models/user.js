const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const AuthorizationError = require('../utils/errors/authError');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
      default: 'Жак-Ив Кусто',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: (value) => {
        if (validator.isEmail(value)) {
          return true;
        }
        return false;
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
  },
);

// // eslint-disable-next-line func-names
// userSchema.statics.checkUserAuth = function (email, password) {
//   return this.findOne({ email }).select('+password')
//     .then((user) => {
//       if (!user) {
//         return Promise.reject(new AuthorizationError('Неправильные почта или пароль'));
//       }

//       return bcrypt.compare(password, user.password)
//         .then((matched) => {
//           if (!matched) {
//             return Promise.reject(new AuthorizationError('Неправильные почта или пароль'));
//           }
//           return user;
//         });
//     });
// };

module.exports = mongoose.model('user', userSchema);
