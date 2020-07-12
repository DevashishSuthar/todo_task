const { TODO_MESSAGES } = require('../constants/messages.constant');
const Todo = require('../models/todo.model');

const createTodo = async (body) => {
  try {
    const todoInstance = new Todo({ ...body });
    return await todoInstance.save();
  } catch (error) {
    throw Error(TODO_MESSAGES.CREATE_ERROR);
  }
};

const updateTodo = async (query, body) => {
  try {
    return await Todo.findOneAndUpdate(
      { ...query },
      { ...body },
      { new: true }
    );
  } catch (error) {
    throw Error(TODO_MESSAGES.UPDATE_ERROR);
  }
};

const deleteTodo = async (query) => {
  try {
    return await Todo.findOneAndDelete({ ...query });
  } catch (error) {
    throw Error(TODO_MESSAGES.DELETE_ERROR);
  }
};

const getTodo = async (query) => {
  try {
    return await Todo.findOne({ ...query });
  } catch (error) {
    throw Error(TODO_MESSAGES.GET_ERROR);
  }
};

const getAllTodos = async (query) => {
  try {
    return await Todo.find({ ...query });
  } catch (error) {
    throw Error(TODO_MESSAGES.GET_ALL_ERROR);
  }
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getAllTodos,
};
