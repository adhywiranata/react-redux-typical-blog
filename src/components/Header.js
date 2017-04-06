import React from 'react';

import logo from '../logo.svg';
import '../App.css';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>REACT-REDUX TYPICAL BLOG</h2>
    <input
      type="text"
      placeholder="Search for awesome news..."
      style={{ width: '50%', margin: 10, padding: 10, fontSize: 20, outline: 'none' }}
    />
  </div>
);

export default Header;
