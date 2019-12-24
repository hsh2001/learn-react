import React, { Component } from 'react';
import '../css/components/App.css';
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Menu />
          <Content />
        </div>
      </HashRouter>
    );
  }
}

export default App;
