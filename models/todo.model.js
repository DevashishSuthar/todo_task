const mongoose = require('mongoose');
const { Schema } = mongoose;
const { TODO } = require('../constants/model.constant');
const GLOBAL = require('../constants/global.constant');
const STATUS = require('../constants/status.constant');

const stringTypeSchema = {
  type: String,
  required: true,
};
const todoSchema = new Schema({
  title: { ...stringTypeSchema },
  description: { ...stringTypeSchema },
  status: {
    type: String,
    enum: GLOBAL.STATUS,
    default: STATUS.ACTIVE,
  },
});

module.exports = mongoose.model(TODO, todoSchema);
