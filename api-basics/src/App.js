import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apicall from './Apicall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
				Welcome to Api Call 
          </p>
        </header>
		<Apicall />
      </div>
    );
  }
}

export default App;