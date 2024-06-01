import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">My Fashion Blog</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#trends">Trends</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default TopBar;
