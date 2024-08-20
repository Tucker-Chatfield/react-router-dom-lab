import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === parseInt(mailboxId));

  if (!selectedBox) {
    return (
      <div className="mailbox-details">
        <h2>Mailbox Not Found!</h2>
        <p>We couldn't find the mailbox you're looking for. Please check the ID and try again.</p>
        <Link to="/mailboxes" className="back-link">Back to Mailboxes</Link>
      </div>
    );
  }

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;