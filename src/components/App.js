import React, { Component } from 'react';

import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Tabnav from "./Tabnav";
import Select from "./Select";
import List from "./List";
import Create from "./Crate";
import Update from "./Update"

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

  /**
   * 
   * Business App.js function creeateBook
   *
   * async funtion to create a new book. When logic.book.create promise has finished
   * then component state will update
   * 
   * @param {String} title title for new book
   * @param {String} price price for new book
   * @param {String} genre genre.name for new book
   * @param {String} resume resume for new book
   *
   * @returns {RenderDOM} will update DOM with new book
   *
   * @version 1.0.0
   */
  createBook = async (title, price, genre, resume) => {
    const { storage } = this.state;

    const addedNewBook = await logic.book.create(title, price, genre, resume, storage);

    return this.setState({ storage: addedNewBook })
  }


  /**
   * 
   * Business App.js function creeateGenre
   *
   * async funtion to create a new genre. When logic.genre.create promise has finished
   * then component state will update
   * 
   * @param {String} name title for new genre
   *
   * @returns {RenderDOM} will update DOM with new genre
   *
   * @version 1.0.0
   */
  createGenre = async (name) => {
    const { storage } = this.state;

    const addedNewGenre = await logic.genre.create(name, storage);

    return this.setState({ storage: addedNewGenre })
  }

  deleteBook = (genreId, id) => {
    const { storage } = this.state;

    return this.setState({ storage: logic.book.remove(genreId, id, storage) })
  }

  updateBook = (genreId, id, title, price, genre, resume) => {
    const { storage } = this.state;

    return this.setState({ storage: logic.book.update(genreId, id, title, price, genre, resume, storage) })
  }

  //---------------------------------------
  /**
   * 
   * Event, Handlers and Helpers for App.js
   * 
   * @version 1.0.0
   */
  componentDidMount = async () => {
    const storage = await logic.genre.list();

    this.setState({ storage, loader: false })
  }

  handlerSelect = (value) => { this.setState({ genreSelected: value }) }

  handlerTabnav = (value) => { this.setState({ tabNavSelected: value }) }

  wichDataList = (tabNavSelected, genreSelected) => {
    if (tabNavSelected !== "list" && tabNavSelected !== "update") return false;

    const { storage } = this.state;

    if (!genreSelected) {

      return logic.genre.extractBooksFrom(storage)
    }

    return logic.genre.extractBooksFrom(storage, genreSelected)
  }

  render() {
    const { storage, tabNavSelected, genreSelected, loader } = this.state;

    const dataToList = this.wichDataList(tabNavSelected, genreSelected);

    const logicApp = {
      logicCreate: {
        createBook: this.createBook,
        createGenre: this.createGenre
      },
      logicUpdate: {
        updateBook: this.updateBook
      },
      logicDelete: {
        deleteBook: this.deleteBook
      }
    }

    return (
      !loader ?
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"> BeezyBook - BB</h1>
            <Select onChange={this.handlerSelect} storage={storage} />
            <Tabnav onChange={this.handlerTabnav} />
          </header>

          <main className="App-main">
            {tabNavSelected === 'list' ?
              <List books={dataToList} />
              : undefined}
            {tabNavSelected === 'create' ?
              <Create
                storage={storage}
                genreSelected={genreSelected}
                logicCreate={logicApp.logicCreate} />
              : undefined}
            {tabNavSelected === 'update' ?
              <Update
                books={dataToList}
                storage={storage}
                logicUpdate={logicApp.logicUpdate}
                logicDelete={logicApp.logicDelete} />
              : undefined}
          </main>
        </div>
        : <MuiThemeProvider> <LinearProgress color={"grey"} className={"pre-loader-home"} mode="indeterminate" /> </MuiThemeProvider>
    );
  }
}

export default App;