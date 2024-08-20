import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/mailboxes" className="nav-link">Mailboxes</Link></li>
        <li><Link to="/new-mailbox" className="nav-link">New Mailbox</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;