import App from './Components/App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Home from './Components/Home';
import Login from './Components/Login';
// import {Route} from 'react-router';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <Provider store={store}>
    <Router history={HashRouter}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
