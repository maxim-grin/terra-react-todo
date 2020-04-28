import * as ActionTypes from '../constants';

// Initial state of the app
export const initialState = {
  todos: [],
  hideCompleted: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // adding a new todo to the list
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            // picking the maximum id of todos array and incrementing by 1
            id: state.todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
            text: action.text,
            isCompleted: false,
          },
        ],
      };

    // toggling the state of current todo to mark it completed(non-completed)
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

    // deleting the current todo from the list
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => (
            todo.id !== action.id
          )),
        ],
      };

    // toggling the state of filter to show all or only non-completed todos
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
