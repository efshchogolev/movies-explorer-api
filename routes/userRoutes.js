const userRouter = require('express').Router();
const {
  //   getUsers,
  //   getUserById,
  updateUserInfo,
  //   updateUserAvatar,
  getMe,
} = require('../controllers/user');
// const {
//   validateUserInfo,
// } = require('../utils/validators/userValidator');

userRouter.get('/me', getMe);
userRouter.patch('/me', updateUserInfo);

module.exports = userRouter;
