/* global describe, it, expect, beforeEach, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {
  let component;

  const todos = [
    {
      id: 1,
      text: 'Lorem ipsum',
      isCompleted: false,
    },
    /*{
      id: 2,
      text: 'Lorem ipsum 2',
      isCompleted: true,
    },*/
  ];

  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should render todos', () => {
    component = mount(<TodoList
      todos={todos}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
    />);

    expect(component.children().length).toEqual(1);
  });
});
