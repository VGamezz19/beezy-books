import React, { Component } from 'react';

import Tabnav from "./Tabnav";
import Select from "./Select";
import List from "./List";
import Create from "./Crate";

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focusTabnav: "list",
      focusSelectGenre: null,
      genre: [{
        "id": "0",
        "name": "maths",
        "books": [{
          "id": "0",
          "title": "maths power book",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 20
        },
        {
          "id": "0",
          "title": "powa maths",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 40
        }
        ]
      },
      {
        "id": "1",
        "name": "develop",
        "books": [{
          "id": "0",
          "title": "develop power book",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 20
        },
        {
          "id": "0",
          "title": "powa develop",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 40
        }
        ]
      },
      {
        "id": "2",
        "name": "history",
        "books": [{
          "id": "0",
          "title": "history power book",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 20
        },
        {
          "id": "0",
          "title": "powa history",
          "resume": `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
          "price": 40
        }
        ]
      }
      ]
    };
  }

  // componentDidMount() {
  //   // const { focusTabnav, focusSelectGenre } = this.state
  // }

  handlerSelect = (value) => { this.setState({ focusSelectGenre: value }) }

  handlerTabnav = (value) => { this.setState({ focusTabnav: value }) }

  wichDataList = (focus, select) => {

    if (focus !== "list") return false;

    if (!select) {
      return this.retrieveBook()
    }

    return this.retrieveBook(select)
  }

  /**
   * 
   * Logic Function....
   */
  retrieveBook(select) {
    const { genre } = this.state;

    const books = [];

    if (!select) {
      genre.map(el => {

        el.books.map(book => books.push(book))

        return el;
      })

      return books;
    }

    genre.map(el => {

      if (el.name === select) {

        el.books.map(book => books.push(book))
      }

      return el;
    })

    return books;
  }

  createBook = (title, price, genre, resume = null) => { console.log(title, price, genre, resume)}

  createGenre = (name) => { console.log(name)}

  render() {
    const { genre, focusSelectGenre, focusTabnav } = this.state;

    const dataToList = this.wichDataList(focusTabnav, focusSelectGenre);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BeezyBook - BB</h1>
          <Select onChange={this.handlerSelect} data={genre} />
          <Tabnav onChange={this.handlerTabnav} />
        </header>

        <main className="App-main">
          {dataToList ? <List books={dataToList} /> : undefined}
          {focusTabnav === 'create' ? <Create genre={genre} someSelected={focusSelectGenre} logicApp={{ createBook: this.createBook, createGenre: this.createGenre}} /> : undefined}
        </main>
      </div>
    );
  }
}

export default App;

/**
 * genre={Array{}}
 * someSelected={string}
 * logicApp={Array<functions>}
 */