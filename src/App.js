import React, { Component } from 'react';
import logo from './logo.png';
import Table from './Table';
import {emails} from './players';
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
        <div className="App-table">
            <Table/>
        </div>
        <div className="App-emails">
          <h2>Emails</h2>
          {emails.map((data) => (<span>{data}, </span>))}
        </div>
      </div>
    );
  }
}

export default App;
