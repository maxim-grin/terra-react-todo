import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import * as TodoActions from './actions';
import './App.scss';

export const App = ({
  todos,
  hideCompleted,
  addTodo,
  toggleTodo,
  deleteTodo,
  toggleCompletedFilter,
}) => {
  /**
   * Calculating the count of active (non-completed) todos
   */
  const activeCount = () => {
    let activeTodos = 0;
    if (todos && todos.length > 0) {
      activeTodos = todos.reduce((count, todo) => count + (todo.isCompleted ? 0 : 1), 0);
    }
    return activeTodos;
  };

  /**
   * Filtering out completed todos if hideCompleted checkbox is checked
   */
  const filterTodos = () => {
    let filtered = [];
    if (todos && todos.length > 0) {
      filtered = todos.filter((todo) => !hideCompleted || !todo.isCompleted);
    }
    return filtered;
  };

  return (
    <div className="tasker">
      <Header
        activeCount={activeCount()}
        hideCompleted={hideCompleted}
        toggleCompletedFilter={toggleCompletedFilter}
      />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filterTodos()}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    },
  )).isRequired,
  hideCompleted: PropTypes.bool.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleCompletedFilter: PropTypes.func.isRequired,
};

// Mapping app state to props
const mapStateToProps = (state) => ({
  todos: state.todos,
  hideCompleted: state.hideCompleted,
});

// Mapping dispatched methods to props
const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => {
    if (text) {
      dispatch(TodoActions.addTodo(text));
    }
  },

  toggleTodo: (id) => {
    dispatch(TodoActions.toggleTodo(id));
  },

  deleteTodo: (id) => {
    dispatch(TodoActions.deleteTodo(id));
  },

  toggleCompletedFilter: () => {
    dispatch(TodoActions.toggleCompletedFilter());
  },
});

// connecting the app to redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
