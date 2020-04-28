import { compose, createStore } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  const reducer = compose(
    mergePersistedState(),
  )(rootReducer, initialState);

  const storage = adapter(window.localStorage);

  const createPersistentStore = compose(
    persistState(storage, 'state'),
  )(createStore);

  const store = createPersistentStore(reducer);
  return store;
}
