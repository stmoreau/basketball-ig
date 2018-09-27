import React, { Component } from 'react';
import logo from './logo.png';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img style={{width: '150px', verticalAlign:'middle'}} src={logo} alt="logo"/>
            <span className="App-title" style={{verticalAlign:'middle'}}>Players who are interested</span>
        </header>
        <div className="App-intro">
            <Table/>
        </div>
      </div>
    );
  }
}

export default App;
