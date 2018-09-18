import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { BrowserRouter } from 'react-router-dom'

import './App.scss';
import Main from '../../routes/route';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
