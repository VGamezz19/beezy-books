import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

class Select extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    handleChange = (event, index, value) => {
        const { onChange } = this.props;

        this.setState({ value });

        return onChange ? onChange(value) : undefined
    }

    componentDidMount() {
        const { defaultSelect } = this.props

        this.setState({ value: defaultSelect })
    }

    render() {
        const { storage } = this.props;
        const { value } = this.state;

        return (
            <MuiThemeProvider>
                <SelectField
                    className={"select-genre"}
                    value={value}
                    onChange={this.handleChange}
                    disabled={storage === undefined ? true : storage.length <= 0 ? true : false}>

                    <MenuItem value={null} primaryText="" />

                    <Divider />

                    {this._renderMenuItem(storage)}

                </SelectField>
            </MuiThemeProvider>
        );
    }

    /**
     * Render function
     * 
     * To render MenuItem for SelectField Component
     * 
     * @param {Array<{}>} storage array of genres
     * 
     * @returns {Array<MenuItem>} Array of Item from select content
     */
    _renderMenuItem(storage = []) {
        return storage.map((storage) => {
            const {id, name} = storage

            return (
                <MenuItem key={id} value={name} primaryText={name} />
            );
        })
    }
}

Select.propTypes = {
 storage : PropTypes.arrayOf(PropTypes.object).isRequired,
 onChange: PropTypes.func
}

export default Select