const express = require('express');
const router = express.Router();

router.use('/todos', require('./api/todo.route'));

module.exports = router;
