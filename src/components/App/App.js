import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { Router as BrowserRouter } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import './App.scss';
import Main from '../../routes/route';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter history={ history }>
          <Main />
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
