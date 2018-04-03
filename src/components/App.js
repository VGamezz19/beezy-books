import React, { Component } from 'react';

import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Tabnav from "./Tabnav";
import Select from "./Select";
import List from "./List";
import Create from "./Crate";

import logic from "../logic";

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusTabnav: "list",
      focusSelectGenre: null,
      loader: true,
      genre: []
    };
  }

  createBook = (title, price, genre, resume = null) => { console.log(title, price, genre, resume) }

  createGenre = (name) => { console.log(name) }


  wichDataList = (focus, select) => {

    const { genre } = this.state;

    if (focus !== "list") return false;

    if (!select) {

      return logic.genre.extractBooksFrom(genre)
    }

    return logic.genre.extractBooksFrom(genre, select)
  }

  componentDidMount = async () => {
    const genre = await logic.genre.list();

    this.setState({ genre, loader: false })
  }

  handlerSelect = (value) => { this.setState({ focusSelectGenre: value }) }

  handlerTabnav = (value) => { this.setState({ focusTabnav: value }) }

  render() {
    const { genre, focusSelectGenre, focusTabnav, loader } = this.state;

    const dataToList = this.wichDataList(focusTabnav, focusSelectGenre);

    return (
      !loader ?
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BeezyBook - BB</h1>
          <Select onChange={this.handlerSelect} data={genre} />
          <Tabnav onChange={this.handlerTabnav} />
        </header>

        <main className="App-main">
          {dataToList ? <List books={dataToList} /> : undefined}
          {focusTabnav === 'create' ? <Create genre={genre} someSelected={focusSelectGenre} logicApp={{ createBook: this.createBook, createGenre: this.createGenre }} /> : undefined}
        </main>
      </div>
      : <MuiThemeProvider> <LinearProgress color={"grey"} className={"pre-loader-home"}  mode="indeterminate"/> </MuiThemeProvider>
    );
  }
}

export default App;