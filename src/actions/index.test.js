/* global expect, it, describe */

import * as TodoActions from '.';
import * as actionTypes from '../constants';

describe('Actions', () => {
  const loremText = 'Lorem ipsum';

  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: actionTypes.ADD_TODO,
      text: loremText,
    };

    expect(TodoActions.addTodo(loremText)).toEqual(expectedAction);
  });

  it('Should create an action to toggle a todo', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_TODO,
      id: 1,
    };

    expect(TodoActions.toggleTodo(1)).toEqual(expectedAction);
  });

  it('Should create an action to delete a todo', () => {
    const expectedAction = {
      type: actionTypes.DELETE_TODO,
      id: 1,
    };

    expect(TodoActions.deleteTodo(1)).toEqual(expectedAction);
  });

  it('Should create an action to toggle filter', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_COMPLETED_FILTER,
    };

    expect(TodoActions.toggleCompletedFilter()).toEqual(expectedAction);
  });
});
