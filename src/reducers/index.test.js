/* global expect, it, describe */

import * as ActionTypes from '../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const loremText = 'Lorem ipsum';

  it('Should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Add todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: ActionTypes.ADD_TODO,
        text: loremText,
      };

      const expectedState = {
        todos: [
          {
            text: loremText,
            isCompleted: false,
            id: 0,
          },
        ],
        hideCompleted: false,
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Delete todo', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: loremText,
            isCompleted: false,
          },
        ],
        hideCompleted: false,
      };

      const action = {
        type: ActionTypes.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
        hideCompleted: false,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Toggle todo completed', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: loremText,
            isCompleted: false,
          },
        ],
        hideCompleted: false,
      };

      const action = {
        type: ActionTypes.TOGGLE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: loremText,
            isCompleted: true,
          },
        ],
        hideCompleted: false,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Toggle todo non-completed', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [
          {
            id: 1,
            text: loremText,
            isCompleted: true,
          },
        ],
        hideCompleted: false,
      };

      const action = {
        type: ActionTypes.TOGGLE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: loremText,
            isCompleted: false,
          },
        ],
        hideCompleted: false,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Toggle completed filter on', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [],
        hideCompleted: false,
      };

      const action = {
        type: ActionTypes.TOGGLE_COMPLETED_FILTER,
      };

      const expectedState = {
        todos: [],
        hideCompleted: true,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe('Toggle completed filter off', () => {
    it('Should return the correct state', () => {
      const startingState = {
        todos: [],
        hideCompleted: true,
      };

      const action = {
        type: ActionTypes.TOGGLE_COMPLETED_FILTER,
      };

      const expectedState = {
        todos: [],
        hideCompleted: false,
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
