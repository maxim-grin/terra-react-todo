import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
  <li
    className="task"
    style={{
      textDecoration: todo.isCompleted ? 'line-through' : 'none',
    }}
  >
    <div className="view">
      <input
        className="toggle-todo"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        className="todo-text"
      >
        {todo.text}
      </span>
      <button
        type="button"
        className="delete-todo"
        onClick={() => deleteTodo(todo.id)}
      >
        x
      </button>
    </div>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    },
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
