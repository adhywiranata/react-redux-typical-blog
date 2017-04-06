import React from 'react';
import { connect } from 'react-redux';

import { setPostSearchKey } from '../actions';
import logo from '../logo.svg';
import '../App.css';

const Header = props => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>REACT-REDUX TYPICAL BLOG</h2>
    <input
      type="text"
      placeholder="Search for awesome news..."
      onChange={props.setSearchKey}
      value={props.searchKey}
      style={{ width: '50%', margin: 10, padding: 10, fontSize: 20, outline: 'none' }}
    />
  </div>
);

const mapStateToProps = state => ({
  searchKey: state.postSearchKey,
});

const mapDispatchToProps = dispatch => ({
  setSearchKey: event => dispatch(setPostSearchKey(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
