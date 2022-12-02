require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
// const cors = require('./middlewares/cors');
const routes = require('./routes');
const errorsHandler = require('./middlewares/errorsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001, MONGO_URL = 'mongodb://localhost:27017/moviedb' } = process.env;

const app = express();
// app.use(cors);
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(MONGO_URL, { autoIndex: true });

app.use(requestLogger);
// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервер сейчас упадёт');
//   }, 0);
// });
// // временная авторизация///////////////////////////////////////////////
// app.use((req, res, next) => {
//   req.user = {
//     _id: '6389ea5de4c4253be96411f9',
//   };

//   next();
// });
// // временная авторизация///////////////////////////////////////////////
app.use(routes);

app.use(errorLogger);
app.use(errors());

app.use(errorsHandler);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
