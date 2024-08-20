import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addMailbox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMailbox = { boxholder, boxSize };
    addMailbox(newMailbox);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input
          type="text"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
        />
      </label>
      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;