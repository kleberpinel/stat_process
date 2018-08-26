import React           from 'react'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import { createStore,
         applyMiddleware,
         compose }     from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger    from 'redux-logger';
import NetworkService  from './network-service'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers'
import App     from './app/appContainer'

import 'bootstrap/dist/css/bootstrap.css';

let logger;

logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return state;
  }
});

const enhancer = composeWithDevTools(compose(
  applyMiddleware(require('redux-immutable-state-invariant').default(), thunkMiddleware, logger),
))

const store = createStore(reducer, enhancer)
NetworkService.setupInterceptors(store);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));