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
      tabNavSelected: "list",
      genreSelected: null,
      loader: true,
      storage: []
    };
  }

  createBook = async (title, price, genre, resume = null) => {
    const { storage } = this.state

    const addedNewBook = await logic.book.create(title, price, genre, resume, storage);

    this.setState({ storage: addedNewBook })
  }


  createGenre = async (name) => {
    const { storage } = this.state

    const addedNewGenre = await logic.genre.create(name, storage);

    this.setState({ storage: addedNewGenre })
  }


  wichDataList = (tabNavSelected, genreSelected) => {
    if (tabNavSelected !== "list") return false;

    const { storage } = this.state;

    if (!genreSelected) {

      return logic.genre.extractBooksFrom(storage)
    }

    return logic.genre.extractBooksFrom(storage, genreSelected)
  }

  componentDidMount = async () => {
    const storage = await logic.genre.list();

    this.setState({ storage, loader: false })
  }

  handlerSelect = (value) => { this.setState({ genreSelected: value }) }

  handlerTabnav = (value) => { this.setState({ tabNavSelected: value }) }

  render() {
    const { storage, tabNavSelected, genreSelected, loader } = this.state;

    const dataToList = this.wichDataList(tabNavSelected, genreSelected);

    const logicCreate = { 
      createBook: this.createBook,
      createGenre: this.createGenre
    }

    return (
      !loader ?
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">BeezyBook - BB</h1>
            <Select onChange={this.handlerSelect} data={storage} />
            <Tabnav onChange={this.handlerTabnav} />
          </header>

          <main className="App-main">
            {dataToList ? <List books={dataToList} /> : undefined}
            {tabNavSelected === 'create' ?
              <Create
                storage={storage}
                genreSelected={genreSelected}
                logicCreate={logicCreate} />
              : undefined}
          </main>
        </div>
        : <MuiThemeProvider> <LinearProgress color={"grey"} className={"pre-loader-home"} mode="indeterminate" /> </MuiThemeProvider>
    );
  }
}

export default App;