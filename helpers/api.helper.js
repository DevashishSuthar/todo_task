const {
  SUCCESS,
  INTERNAL_SERVER_ERROR,
} = require('../constants/http-status-codes.constant');

const success = (res, message = '', data = {}, meta = {}) => {
  return res.status(SUCCESS).json({
    success: true,
    message,
    data,
    meta,
    errors: [],
  });
};

const failure = (
  res,
  message = '',
  data = {},
  meta = {},
  errors = [],
  statusCode = INTERNAL_SERVER_ERROR
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data,
    meta,
    errors,
  });
};

module.exports = {
  success,
  failure,
};
