import React, { Component } from 'react';
// import logo from './logo.svg';

import Tabnav from "./Tabnav";
import SelectGenre from "./SelectGenre";

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">BeezyBook - BB</h1>
          <SelectGenre/>
          <Tabnav/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
