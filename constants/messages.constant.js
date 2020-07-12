const TODO_MESSAGES = {
  CREATE: 'Todo created successfully!',
  CREATE_ERROR: 'Unable to create todo!',
  UPDATE: 'Todo updated successfully!',
  UPDATE_ERROR: 'Unable to update todo!',
  DELETE: 'Todo deleted successfully!',
  DELETE_ERROR: 'Unable to delete todo!',
  GET: 'Requested todo fetch successfully!',
  GET_ERROR: 'Unable to fetch requested todo!',
  GET_ALL: 'All todos fetched successfully!',
  GET_ALL_ERROR: 'Unable to fetch all todos!',
};

const COMMON_MESSAGES = {
  NO_DATA_FOUND: 'No data found!',
  DATA_VALIDATION: 'Data validation failed!',
  ROUTE_NOT_EXISTS: 'Requested route does not exists!',
  UNKNOWN_ERROR: 'Something went wrong, please try again later!',
};

module.exports = {
  TODO_MESSAGES,
  COMMON_MESSAGES,
};
