const express = require('express');
const router = express.Router();
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const {
  BODY,
  PARAMS,
  QUERY,
} = require('../../constants/request-properties.constant');
const {
  idParam,
  statusQuery,
  createTask: createTaskSchema,
  updateTask: updateTaskSchema,
} = require('../../validators/todo.validator');

const {
  createTask,
  updateTask,
  getTask,
  getAllTasks,
  deleteTask,
} = require('../../controllers/todo.controller');

router.post(
  '/',
  requestValidatorMiddleware([createTaskSchema], [BODY]),
  createTask
);
router.put(
  '/:id',
  requestValidatorMiddleware([updateTaskSchema, idParam], [BODY, PARAMS]),
  updateTask
);
router.get('/:id', requestValidatorMiddleware([idParam], [PARAMS]), getTask);
router.get(
  '/',
  requestValidatorMiddleware([statusQuery], [QUERY]),
  getAllTasks
);
router.delete(
  '/:id',
  requestValidatorMiddleware([idParam], [PARAMS]),
  deleteTask
);

module.exports = router;
