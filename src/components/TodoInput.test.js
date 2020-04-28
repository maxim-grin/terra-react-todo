/* global describe, it, expect, beforeEach, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoInput from './TodoInput';

describe('TodoInput component', () => {
  const addTodoMock = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <TodoInput addTodo={addTodoMock} />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have a single input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  it('Should call the addTodo function when Enter is pressed', () => {
    component = mount(<TodoInput addTodo={addTodoMock} />);
    const input = component.find('.todo-input');
    expect(addTodoMock.mock.calls.length).toEqual(0);
    input.props().onKeyDown({ which: 13, target: { value: 'Lorem ipsum' } });
    expect(addTodoMock.mock.calls.length).toEqual(1);
  });
});
