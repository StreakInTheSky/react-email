import React from 'react';
import EMAILS from '../emails';
import Mailbox from './mailbox';

export default function MailboxContainer(props) {
  function renderMailbox() {
    if(props.params.mailbox) {
      return <Mailbox emails={EMAILS[props.params.mailbox]} mailbox={props.params.mailbox} />;
    }

    return "Select a mailbox";
  }

  return (
    <div>
      {renderMailbox()}
      {props.children}
    </div>
  )
}
