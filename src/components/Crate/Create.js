import React, { Component } from 'react';
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
        console.log(this.props)

        return (

            <MuiThemeProvider>
                <div className="create-content">
                    <h1 className="title-create"> Create storage </h1>
                    <div className="button-create-content">
                        <RaisedButton 
                            label="Genre" 
                            style={{ "flex": "1" }}
                            onClick={ () => this.handlerModalEditGenre()} />
                        <RaisedButton 
                            label="Book" 
                            style={{ "flex": "1" }}
                            onClick={ () => this.handlerModalEditBook()} />
                    </div>
                </div>

                <ModalEdit 
                    open={this.state.openModalGenre}
                    closeModal={this.handlerModalEditGenre}
                    inputs={["name"]}
                    type={"genre"}
                    actionName={"create"}
                    action={this.props.logicApp.createGenre} />
                <ModalEdit 
                    open={this.state.openModalBook}
                    closeModal={this.handlerModalEditBook}
                    inputs={["title", "resume", "price"]}
                    selectData={this.props.genre}
                    type={"book"}
                    actionName={"create"}
                    someSelected={this.props.someSelected}
                    action={this.props.logicApp.createBook}/>
            </MuiThemeProvider>
        );
    }
}

export default Create