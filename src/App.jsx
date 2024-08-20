import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (mailbox) => {
    setMailboxes([...mailboxes, { ...mailbox, _id: mailboxes.length + 1 }]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
