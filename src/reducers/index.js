import * as ActionTypes from '../constants';

export const initialState = {
  todos: [],
  hideCompleted: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
            text: action.text,
            isCompleted: false,
          },
        ],
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => (
            (todo.id === action.id)
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo
          )),
        ],
      };

    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => (
            todo.id !== action.id
          )),
        ],
      };

    case ActionTypes.TOGGLE_COMPLETED_FILTER:
      return {
        ...state,
        hideCompleted: !state.hideCompleted,
      };

    default:
      return state;
  }
};

export default reducer;
