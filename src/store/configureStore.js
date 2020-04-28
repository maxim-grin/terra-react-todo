import { compose, createStore } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import rootReducer from '../reducers/index';

/**
 *
 * Configuring the redux state storage
 * @param {object} initialState initial state of the app
 * @returns redux store
 */
export default function configureStore(initialState) {
  const reducer = compose(
    mergePersistedState(),
  )(rootReducer, initialState);

  const storage = adapter(window.localStorage);

  // creating persistent store with localStorage
  const createPersistentStore = compose(
    persistState(storage, 'state'),
  )(createStore);

  const store = createPersistentStore(reducer);
  return store;
}
