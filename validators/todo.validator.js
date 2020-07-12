const Joi = require('@hapi/joi');
const GLOBAL = require('../constants/global.constant');

const taskSchema = {
  title: Joi.string().required(),
  description: Joi.string().required(),
};
const createTask = Joi.object().keys({
  ...taskSchema,
});
const updateTask = Joi.object().keys({
  ...taskSchema,
  status: Joi.string()
    .valid(...GLOBAL.STATUS)
    .required(),
});

const idParam = Joi.object().keys({
  id: Joi.string().length(24).required(),
});

const statusQuery = Joi.object().keys({
  status: Joi.string().valid(...GLOBAL.STATUS),
});

module.exports = {
  createTask,
  updateTask,
  idParam,
  statusQuery,
};
