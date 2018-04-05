import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import Select from "../Select";

class ModalEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openSnak: false,
      messageSnak: ""
    };
  }

  componentDidMount() {
    const { book } = this.props;
    
    if (book) this.setState({ title: book.title, price: book.price, genre: book.genre, resume: book.resume, id: book.id })
  }

  handleClose = () => this.props.closeModal()

  handlerInput = (e) => {
    const prop = e.target.name;

    this.setState({ [prop]: e.target.value })
  }

  handlerSelect = (value) => this.setState({ genre: value })

  handleClick = () => this.setState({ openSnak: true })

  handleRequestClose = () => this.setState({ openSnak: false })


  actionerModal = () => {
    if (!this.validateInputs()) { return this.setState({ messageSnak: "⚠️ ERROR: mandatory inputs", openSnak: true }) }

    const { handlerSubmit, type, actionName } = this.props;

    this.handleClose();

    if (type === "genre") {
      const { name } = this.state;

      this.setState({ name: "", messageSnak: "✔︎ SUCCES:", openSnak: true })

      return handlerSubmit(name)
    }

    if( actionName === "create") {
      const { title, price, genre, resume } = this.state;

      this.setState({ title: "", price: "", genre: "", resume: "", messageSnak: "✔︎ SUCCES:", openSnak: true })
  
      return handlerSubmit(title, price, genre, resume)
    }

    if( actionName === "update") {
      const { id, title, price, genre, resume } = this.state;

      this.setState({ messageSnak: "✔︎ SUCCES:", openSnak: true })
  
      return handlerSubmit(id, title, price, genre, resume)
    }

    return;
  }

  validateInputs = () => {
    const { inputs } = this.props;
    let validate = true;

    for (let i = 0; i < inputs.length; i++) {

      if (!this.state[inputs[i]]) {

        validate = false;
        break;
      }
    }

    return validate
  }

  render() {
    const { open, inputs, modalSize, storage, type, actionName , genreDefaultSelected} = this.props;
    
    const { messageSnak } = this.state

    const actions = [
      <FlatButton label="Cancel"
        primary={true}
        onClick={this.handleClose} />,
      <FlatButton label="Submit"
        primary={true}
        disabled={false}
        onClick={this.actionerModal} />];

    return (
      <MuiThemeProvider>
        <Dialog
          title={`${actionName} ${type}`}
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
          contentStyle={modalSize}>

          Write a new content for this element:
        {open ?
            this._renderFormModal(this.actionerModal, this.handlerInput, inputs, storage, genreDefaultSelected)
            : false}

        </ Dialog>

        <Snackbar
          open={this.state.openSnak}
          message={`${messageSnak} ${actionName} ${type}`}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </MuiThemeProvider>
    );
  }

  /**
   * Render function
   * 
   * To render form for ModalEdit
   * 
   * @param {Function} submitModal handler submit modal actioner
   * @param {Function} handlerInput handler input form
   * @param {Array<String>} inputs array of strings, to know how mucho inputs will have form
   * @param {Array<{}>} storage array of object (genres)
   * @param {String} genreDefaultSelected name from current genre selected
   * 
   * 
   * @returns {HTMLElement} HTMLElement Form
   */
  _renderFormModal(submitModal, handlerInput, inputs, storage, genreDefaultSelected) {
    return (
      <form onSubmit={event => { event.preventDefault(); submitModal() }}>

        {inputs.map((input, index) => {
          return (
            // TODO - Require TextField
            <TextField
              key={index}
              hintText={`insert ${input}`}
              floatingLabelText={input}
              name={input}
              type={input === "price" ? "number" : "text"}
              value={this.state[input]}
              onChange={(event) => handlerInput(event)} />
          )
        })}

        {storage ? <Select
          onChange={this.handlerSelect}
          storage={storage}
          defaultSelect={genreDefaultSelected} /> : false}
      </form>
    )
  }
}

ModalEdit.propTypes = {
  type: PropTypes.string.isRequired,
  actionName: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string),
  storage: PropTypes.arrayOf(PropTypes.object),
  genreDefaultSelected: PropTypes.string,
  book: PropTypes.object
}

export default ModalEdit