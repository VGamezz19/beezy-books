import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import ModalEdit from "../ModalEdit";

class Create extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openModalBook: false,
            openModalGenre: false
        }
    }

    handlerModalEditGenre = () => {
        const { openModalGenre } = this.state

        return this.setState({ openModalGenre: !openModalGenre })
    }

    handlerModalEditBook = () => {
        const { openModalBook } = this.state

        return this.setState({ openModalBook: !openModalBook })
    }

    render() {
        const { logicCreate: { createGenre, createBook }, genreSelected, storage } = this.props

        const { openModalBook, openModalGenre } = this.state

        const inputsModalBook = ["title", "resume", "price"]

        const inputsModalGenre = ["name"]

        return (
            <MuiThemeProvider>
                <div className="create-content">
                    <h1 className="title-create"> Creation lab </h1>
                    <div className="button-create-content">
                        <RaisedButton
                            label="Genre"
                            style={{ "flex": "1" }}
                            onClick={() => this.handlerModalEditGenre()} />
                        <RaisedButton
                            label="Book"
                            style={{ "flex": "1" }}
                            onClick={() => this.handlerModalEditBook()} />
                    </div>
                </div>

                <ModalEdit
                    type={"genre"}
                    actionName={"create"}
                    open={openModalGenre}
                    closeModal={this.handlerModalEditGenre}
                    inputs={inputsModalGenre}
                    handlerSubmit={createGenre} />

                <ModalEdit
                    type={"book"}
                    actionName={"create"}
                    open={openModalBook}
                    closeModal={this.handlerModalEditBook}
                    inputs={inputsModalBook}
                    handlerSubmit={createBook}
                    storage={storage}
                    genreDefaultSelected={genreSelected} />
            </MuiThemeProvider>
        );
    }
}

Create.propTypes = {
    storage: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Object with logic
     */
    logicCreate: PropTypes.shape({
        createGenre: PropTypes.func.isRequired,
        createBook: PropTypes.func.isRequired,
    }),
    genreSelected: PropTypes.string
}

export default Create