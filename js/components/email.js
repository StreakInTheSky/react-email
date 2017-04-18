import React from 'react';
import EMAILS from '../emails';

export default function Email(props) {
  const email = EMAILS[props.params.mailbox][props.params.emailId];
  console.log(props);

  return (
    <div>
      <strong>{email.title}</strong><br />
      <small>from: {email.from}</small><br />
      <small>to: {email.to}</small>
      <p>{email.content}</p>
    </div>
  );
}
