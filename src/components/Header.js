import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/components/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">PAGE NAME</Link>
      </header>
    );
  }
}

export default Header;
