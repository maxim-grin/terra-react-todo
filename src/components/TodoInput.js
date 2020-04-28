import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleKeyDown = (event) => {
    const newText = event.target.value.trim();
    if (event.which === 13) { // char code for "Enter" key
      addTodo(newText);
      setText('');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      className="todo-input"
      placeholder="Type to add a new task"
      value={text}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
