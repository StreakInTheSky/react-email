import React from 'react';
import Email from './email';
import {Link} from 'react-router';

export default function Mailbox(props) {
  function renderEmails() {
    return Object.keys(props.emails).map(key => {
      const email = props.emails[key];
      return <li><Link key={email.id} to={`/${props.mailbox}/${email.id}`}>{email.title}</Link></li>})
  }

  return (
    <ul>
      {renderEmails()}
    </ul>
  );
}
