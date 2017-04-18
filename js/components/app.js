import React from 'react';
import {Link} from 'react-router';

export default function App(props) {
  return (
    <div class="container">
      <div class="sidebar">
        <ul>
          <li>
            <Link to={'/inbox'}>Inbox</Link>
          </li>
          <li>
            <Link to={'/spam'}>Spam</Link>
          </li>
        </ul>
      </div>
      <div class="content">
        {props.children}
      </div>
    </div>
  );
};
