import React, { Component } from 'react';
// import logo from './logo.svg';

import Tabnav from "./Tabnav";
import SelectGenre from "./SelectGenre";

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusTabnav: "list",
      focusSelectGenre: null
    };
  }

  componentDidMount() {
    const { focusTabnav, focusSelectGenre } = this.state

    console.log(focusSelectGenre, focusTabnav);
  }

  handlerSelect = (value) => { console.log(value) }

  handlerTabnav = (value) => { console.log(value) }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BeezyBook - BB</h1>
          <SelectGenre onChange={this.handlerSelect} />
          <Tabnav onChange={this.handlerTabnav} />
        </header>
      </div>
    );
  }
}

export default App;
