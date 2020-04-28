import * as actionTypes from '../constants';

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  text,
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  id,
});

export const toggleCompletedFilter = () => ({
  type: actionTypes.TOGGLE_COMPLETED_FILTER,
});
