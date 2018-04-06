import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconMenu, MenuItem, IconButton, Divider } from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextFormat from 'material-ui/svg-icons/content/text-format';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ModalEdit from "../../ModalEdit";

class MenuOptions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openModal: false
        }
    }

    handlerModalEdit = () => {
        const { openModal } = this.state;

        if (openModal) {
            return this.setState({ openModal: false })
        }

        return this.setState({ openModal: true })
    }

    render() {
        const { logicOptions, book, storage } = this.props;

        const inputsModal = ["title", "resume", "price"];

        const { openModal } = this.state;
        return (
            <div className='icon-menu'>
                <MuiThemeProvider>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}>

                        <MenuItem
                            leftIcon={<TextFormat />}
                            primaryText="Rename..."
                            onClick={this.handlerModalEdit}
                        />
                        <Divider />

                        <MenuItem
                            leftIcon={<Delete />}
                            primaryText="Delete"
                            onClick={() => logicOptions.onDelete(book.genreId, book.id)}

                        />
                    </IconMenu>
                </MuiThemeProvider>

                <ModalEdit
                    type={"book"}
                    actionName={"update"}
                    open={openModal}
                    closeModal={this.handlerModalEdit}
                    handlerSubmit={logicOptions.onUpdate}
                    inputs={inputsModal}
                    storage={storage}
                    genreDefaultSelected={book.genre}
                    book={book} />
            </div>
        )
    }
}

MenuOptions.propTypes = {
    storage: PropTypes.arrayOf(PropTypes.object).isRequired,
    book: PropTypes.object.isRequired,
    /**
     * Object with logic
     */
    logicOptions: PropTypes.shape({
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    })
}

export default MenuOptions 