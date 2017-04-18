require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/app';
import MailboxContainer from './components/mailbox-container';

const routes = (
  <Router history={hashHistory}>
    <Route path="/email" component={App}>
      <IndexRoute component={MailboxContainer} />
      {/* <Route path="/inbox" component={MaiboxContainer} /> */}
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(routes, document.getElementById('app'))
);
