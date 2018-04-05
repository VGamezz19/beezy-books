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
        const { logicOptions, book } = this.props;

        const inputsModal = ["title", "resume", "price", "genre"];

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
                            onClick={() => logicOptions.onDelete(book.id)}

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
                book={book} />
            </div>
        )
    }
}

MenuOptions.propTypes = {
    book: PropTypes.object,
    /**
     * Object with logic
     */
    logicOptions: PropTypes.shape({
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    })
}

export default MenuOptions 