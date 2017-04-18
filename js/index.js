require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import MailboxContainer from './components/mailbox-container';
import Email from './components/email';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MailboxContainer} />
      <Route path=":mailbox" component={MailboxContainer}>
        <Route path=":emailId" component={Email} />
      </Route>
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(routes, document.getElementById('app'))
);
