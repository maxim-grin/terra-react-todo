/* global describe, it, expect, beforeEach, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {
  let component;
  const todo = {
    id: 1,
    text: 'Lorem ipsum',
    isCompleted: false,
  };

  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <TodoItem todo={todo} toggleTodo={toggleTodoMock} deleteTodo={deleteTodoMock} />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have a single input', () => {
    const toggleCheckbox = component.find('.toggle-todo');
    expect(toggleCheckbox.length).toEqual(1);
  });

  it('Should call the toggleTodo function when toggle checkbox is changed', () => {
    component = mount(<TodoItem
      todo={todo}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
    />);
    const toggleCheckbox = component.find('.toggle-todo');
    expect(toggleTodoMock.mock.calls.length).toEqual(0);
    toggleCheckbox.props().onChange({});
    expect(toggleTodoMock.mock.calls.length).toEqual(1);
  });

  it('Should call the deleteTodo function when delete button is clicked', () => {
    component = mount(<TodoItem
      todo={todo}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
    />);
    const deleteBtn = component.find('.delete-todo');
    expect(deleteTodoMock.mock.calls.length).toEqual(0);
    deleteBtn.props().onClick({});
    expect(deleteTodoMock.mock.calls.length).toEqual(1);
  });
});
