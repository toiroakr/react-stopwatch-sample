import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/stopwatch/stopwatch';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
