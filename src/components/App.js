import React, { Component } from 'react';

import Tabnav from "./Tabnav";
import Select from "./Select";

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
          "resume": "some resumen",
          "price": 20
        },
        {
          "id": "0",
          "title": "powa maths",
          "resume": "some resumen",
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
          "resume": "some resumen",
          "price": 20
        },
        {
          "id": "0",
          "title": "powa develop",
          "resume": "some resumen",
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
          "resume": "some resumen",
          "price": 20
        },
        {
          "id": "0",
          "title": "powa history",
          "resume": "some resumen",
          "price": 40
        }
        ]
      }
      ]
    };
  }

  componentDidMount() {
    // const { focusTabnav, focusSelectGenre } = this.state
  }

  handlerSelect = (value) => { console.log(value) }

  handlerTabnav = (value) => { console.log(value) }

  render() {
    const { genre } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BeezyBook - BB</h1>
          <Select onChange={this.handlerSelect} data={genre} />
          <Tabnav onChange={this.handlerTabnav} />
        </header>
      </div>
    );
  }
}

export default App;
