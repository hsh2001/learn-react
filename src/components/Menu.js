import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/components/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <div>
          <Link to="/first">First</Link>
        </div>
        <div>
          <Link to="/second">Second</Link>
        </div>
        <div>
          <Link to="/third">Third</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
