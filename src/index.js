import React from 'react';
import { render } from 'react-dom'
import PassportContainer from './PassportContainer';
import { Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/page'
import logger from 'redux-logger'


const store = createStore(rootReducer, applyMiddleware(logger))
/*const store = createStore(
  rootReducer, /* preloadedState, */
/*+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/


render(
  <Provider store={store}>
    <PassportContainer country='switzerland' name='Nikolay X' DoB='21/08/96' id='2783717823'/>
  </Provider>,
  document.getElementById('app')
)
