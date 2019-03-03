import React, { Component } from 'react';
import HackerNewsContainer  from './containers/HackerNewsContainer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      <HackerNewsContainer/>
      </div>
    )
  }
}

export default App;
