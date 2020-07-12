const apiHelper = require('../helpers/api.helper');
const { BAD_REQUEST } = require('../constants/http-status-codes.constant');
const {
  TODO_MESSAGES,
  COMMON_MESSAGES,
} = require('../constants/messages.constant');
const todoService = require('../services/todo.service');

const createTask = async (req, res) => {
  try {
    const { body } = req;
    const todo = await todoService.createTodo(body);
    console.log('todo', todo);
    if (todo && Object.keys(todo).length) {
      return apiHelper.success(res, TODO_MESSAGES.CREATE, { todo });
    }
    return apiHelper.failure(
      res,
      TODO_MESSAGES.CREATE_ERROR,
      {},
      {},
      [],
      BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { params, body } = req;
    const { id: _id } = params;
    const todo = await todoService.updateTodo({ _id }, { ...body });
    if (todo && Object.keys(todo).length) {
      return apiHelper.success(res, TODO_MESSAGES.UPDATE, { todo });
    }
    return apiHelper.failure(
      res,
      TODO_MESSAGES.UPDATE_ERROR,
      {},
      {},
      [],
      BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = await todoService.deleteTodo({ _id });
    if (todo && Object.keys(todo).length) {
      return apiHelper.success(res, TODO_MESSAGES.DELETE, { todo });
    }
    return apiHelper.failure(
      res,
      TODO_MESSAGES.DELETE_ERROR,
      {},
      {},
      [],
      BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = await todoService.getTodo({ _id });
    if (todo && Object.keys(todo).length) {
      return apiHelper.success(res, TODO_MESSAGES.GET, { todo });
    }
    return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, { todo: {} });
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const todos = await todoService.getAllTodos(query);
    if (todos && todos.length) {
      return apiHelper.success(res, TODO_MESSAGES.GET_ALL, { todos });
    }
    return apiHelper.success(res, COMMON_MESSAGES.NO_DATA_FOUND, { todos: [] });
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTask,
  getAllTasks,
};
