import App from './Components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React, {Component } from 'react';
import { createStore } from 'redux';

const defaultState = {
  appName: 'Clone Media',
  articles: null
};

const reducer = function(state = defaultState, action) {
   return state;
 };
 const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
