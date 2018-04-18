import App from './Components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import {  applyMiddleware, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'Clone Media',
  articles: null
};

const reducer = function(state = defaultState, action) {
   switch(action.type) {
      case 'HOME_PAGE_LOADED':
       return { ...state, articles: action.payload.articles };
     }
   return state;
 };
//  const store = createStore(reducer);
 const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
