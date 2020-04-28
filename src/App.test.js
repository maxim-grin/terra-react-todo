/* global it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from './reducers';

it('App renders without crashing', () => {
  const addTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();
  const toggleCompletedFilterMock = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      todos={[]}
      hideCompleted={false}
      addTodo={addTodoMock}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
      toggleCompletedFilter={toggleCompletedFilterMock}
    />,
  );

  expect(component.exists()).toEqual(true);
});
