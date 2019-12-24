import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/components/Content.css';

const MainContent = () => (
  <span>
    Home
  </span>
);

const FirstContent = () => (
  <span>
    First
  </span>
);

const SecondContent = () => (
  <span>
    Second
  </span>
);

const ThirdContent = () => (
  <span>
    Third
  </span>
);

class Content extends Component {
  render() {
    return (
      <article>
        <Route path="/" exact component={MainContent} />
        <Route path="/first" component={FirstContent}/>
        <Route path="/second" component={SecondContent}/>
        <Route path="/third" component={ThirdContent}/>
      </article>
    );
  }
}

export default Content;
