import React, { Component } from 'react';
import logo from './logo.png';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <img style={{width: '150px', verticalAlign:'middle'}} src={logo} alt="logo"/>
        </header> */}
        <div className="App-table">
            <Table/>
        </div>
      </div>
    );
  }
}

export default App;
