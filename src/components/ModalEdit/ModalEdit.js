import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ModalEdit extends Component {
  state = {
    // open: false,
    inputValue: '',
    // itemId: undefined,
    // fatherId: undefined,
  };

  componentWillReceiveProps(props) {
    const { open, itemTitle: inputValue, itemId } = props

    this.setState({ open, inputValue, itemId })
  }

  // componentDidMount() {
  //   const { open, itemTitle: inputValue, itemId, fatherId } = this.props

  //   this.setState({ open, inputValue, itemId, fatherId })
  // }

  handleClose = () => {
    // this.setState({ open: false })
    this.props.closeModal()
  }

  // handlerInput = (inputValue) => this.setState({ inputValue })

  handlerInput = (e) => {
    const prop = e.target.name
    this.setState({ [prop]: e.target.value })
  }

  actionerModal = () => {

    const { handlerEdit } = this.props
    // const { itemId, inputValue, fatherId } = this.state

    /* TODO - Validate funcion Inputs */
    if (true) {

      this.handleClose();

      /* TODO - Type and nameAction Conditional  */
      return handlerEdit(/*itemId, inputValue, fatherId*/)
    }

    return false
  }

  render() {
    const { open, inputs, modalSize, selectData, someSelected } = this.props
    
    console.log(selectData, someSelected);

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
          title="Rename Element"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
          contentStyle={modalSize}>

          {/* TODO - Type Create or Update */}

          Write a new name for this element:
        {open ?
            this._renderFormModal(this.actionerModal, this.handlerInput, inputs, /*selectData, someSelected*/)
            : false}

        </ Dialog>
      </MuiThemeProvider>
    );
  }

  _renderFormModal(submitModal, handlerInput, inputs, /*selectData, someSelected*/) {

    // TODO - SelectData ? put Select. someSelect ? put default selected.

    return (
      <form onSubmit={event => { event.preventDefault(); submitModal() }}>
        {inputs.map((input, index) => {
          return (
            <input
              autoFocus
              required
              name={input}
              type='text'
              value={this.state[input]}
              onChange={(event) => handlerInput(event)} />
          )
        })}
      </form>
    )
  }
}

export default ModalEdit


/**
 * inputs=["title", "resume", "price"]
 * type={string("create"|"update")}
 * selectData={Array{}}
 * someSelected={string}
 * action={handlerAction}
 * 
 */