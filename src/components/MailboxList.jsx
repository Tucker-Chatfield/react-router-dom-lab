import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox, index) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mailbox-link">
            Mailbox {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;