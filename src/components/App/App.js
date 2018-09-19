import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.scss';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Dashboard/>
        
      </div>
    );
  }
}

export default App;
