const {
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY,
} = require('../constants/http-status-codes.constant');
const { COMMON_MESSAGES } = require('../constants/messages.constant');
const apiHelper = require('../helpers/api.helper');

const middleware = (schemas = [], properties = []) => {
  return (req, res, next) => {
    if (schemas.length === properties.length) {
      const errors = [];
      for (let [index, schema] of schemas.entries()) {
        const property = properties[index];
        const { error } = schema.validate(req[property], { abortEarly: false });
        if (error) {
          const { details } = error;
          errors.push(...details);
        }
      }

      if (errors.length) {
        return apiHelper.failure(
          res,
          COMMON_MESSAGES.DATA_VALIDATION,
          {},
          {},
          [errors],
          UNPROCESSABLE_ENTITY
        );
      }
      next();
    } else {
      return apiHelper.failure(
        res,
        COMMON_MESSAGES.UNKNOWN_ERROR,
        {},
        {},
        [],
        BAD_REQUEST
      );
    }
  };
};
module.exports = middleware;
