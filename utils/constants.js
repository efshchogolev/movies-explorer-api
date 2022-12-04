const DATA_ERROR_CODE = 400;
const NOT_FOUND_ERROR_CODE = 404;
const DEFAULT_ERROR_CODE = 500;
const AUTHORIZATION_ERROR_CODE = 401;
const MONGO_DB_CODE = 11000;
const FORBIDDEN_ERROR_CODE = 403;
const CONFLICT_ERROR_CODE = 409;
const URL_REG_EXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const CONFLICT_ERROR_TEXT = 'Такой пользователь уже зарегестрирован';
const DATA_ERROR_TEXT = 'Ошибка валидации';
const AUTHORIZATION_SUCCESS = 'Авторизация успешна';
const FORBIDDEN_ERROR_TEXT = 'Нельзя удалить чужой фильм';
const FILM_NOT_FOUND_ERROR_TEXT = 'Нет фильма с таким id';
const FILM_DELETE_TEXT = 'Фильм удален';
const NOT_AUTHORIZED_ERROR_TEXT = 'Необходима авторизация';
const DEFAULT_ERROR_TEXT = 'На сервере произошла ошибка';
const AUTHORIZATION_ERROR_TEXT = 'Неправильные почта или пароль';
const NOT_FOUND_ERROR_TEXT = 'Неверный адрес';
const SIGNOUT_TEXT = 'Выход';

module.exports = {
  DATA_ERROR_CODE,
  DATA_ERROR_TEXT,
  NOT_FOUND_ERROR_CODE,
  DEFAULT_ERROR_CODE,
  MONGO_DB_CODE,
  FORBIDDEN_ERROR_CODE,
  AUTHORIZATION_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  CONFLICT_ERROR_TEXT,
  URL_REG_EXP,
  AUTHORIZATION_SUCCESS,
  FORBIDDEN_ERROR_TEXT,
  FILM_NOT_FOUND_ERROR_TEXT,
  FILM_DELETE_TEXT,
  NOT_AUTHORIZED_ERROR_TEXT,
  DEFAULT_ERROR_TEXT,
  AUTHORIZATION_ERROR_TEXT,
  NOT_FOUND_ERROR_TEXT,
  SIGNOUT_TEXT,
};
