import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import MainReducer from './MainReducer';

import thunkMiddleware from 'redux-thunk';
// import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  main: MainReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
