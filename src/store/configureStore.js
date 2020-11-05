import { createStore, combineReducers } from 'redux';
import candidatesReducer from '../reducers/candidates';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      candidates: candidatesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
