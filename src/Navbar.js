import React from 'react';
import './Navbar.css';

const Navbar = ({ userName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Fashion</span>
      </div>
      <div className="navbar-user">
        <span>{userName}</span>
      </div>
    </nav>
  );
};

export default Navbar;
