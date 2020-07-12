const express = require('express');
const mongoose = require('mongoose');

// local imports
const apiHelper = require('./helpers/api.helper');
const { PORT, DB_URI } = require('./configs/env.config');
const { NOT_FOUND } = require('./constants/http-status-codes.constant');
const { COMMON_MESSAGES } = require('./constants/messages.constant');

// create the express server
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
mongoose.set('useFindAndModify', false);
mongoose.connect(
  DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to database!');
  }
);

// import all the routes
app.use(require('./routes/index.route'));

// import all the models
require('./models/index.model');

// base url
app.get('/', async (req, res) => {
  res.send('Server up and running!');
});

// catch 404 route and pass it to error handler
app.use((req, res, next) => {
  const error = new Error(COMMON_MESSAGES.ROUTE_NOT_EXISTS);
  (error.status = NOT_FOUND), next(error);
});

// error handlers
app.use((err, req, res, next) => {
  apiHelper.failure(res, err.message, {}, {}, [], err.status);
});

app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}
    http://localhost:${PORT}/`);
});
