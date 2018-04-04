import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Select from "../Select";
class ModalEdit extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  handleClose = () => this.props.closeModal()

  handlerInput = (e) => {
    const prop = e.target.name

    this.setState({ [prop]: e.target.value })
  }

  handlerSelect = (value) => { this.setState({ genre: value }) }

  actionerModal = () => {

    const { handlerSubmit, type } = this.props

    this.handleClose();

    if (type === "genre") {
      const { name } = this.state;

      return handlerSubmit(name)
    }

    const { title, price, genre, resume } = this.state;

    return handlerSubmit(title, price, genre, resume)
  }

  render() {
    const { open, inputs, modalSize, storage, genreDefaultSelected, type, actionName } = this.props

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
      </MuiThemeProvider>
    );
  }

  _renderFormModal(submitModal, handlerInput, inputs, storage, genreDefaultSelected) {
    return (
      <form onSubmit={event => { event.preventDefault(); submitModal() }}>

        {inputs.map((input, index) => {
          return (
            // TODO - Require TextField
            <TextField
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
          data={storage}
          defaultSelect={genreDefaultSelected} /> : false}
      </form>
    )
  }
}

export default ModalEdit