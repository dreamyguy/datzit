import {applyMiddleware, createStore, compose} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import throttle from 'lodash/throttle';

import reducer from '../reducers';
// import {loadState, saveState} from './localStorage';


import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware'
//  applyMiddleware(createPromise(), thunk, createLogger())


// const middleware = applyMiddleware(promise(), thunk, logger);
const middleware = applyMiddleware(createPromise(), thunk, createLogger())
// const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // persistedState,
  composeEnhancers(middleware)
);

// store.subscribe(
//   throttle(() => {
//     // current state is saved to localStorage
//     saveState({
//       frontend: store.getState().frontend
//     });
//   }, 3000) // ...every 3rd second
// );

export default store;
