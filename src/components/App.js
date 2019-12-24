import React, { Component } from 'react';
import '../css/components/App.css';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
