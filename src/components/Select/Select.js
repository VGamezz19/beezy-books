import React, { Component } from 'react';
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

        return onChange(value);
    };


    render() {
        const { data } = this.props;
        const { value } = this.state;

        return (
            <MuiThemeProvider>
                <SelectField
                    className={"select-genre"}
                    value={value}
                    onChange={this.handleChange}
                    disabled={data === undefined ? true : data.length <= 0 ? true : false}>

                    <MenuItem value={null} primaryText="" />
                    
                    <Divider/>

                    {this._renderMenuItem(data)}

                </SelectField>
            </MuiThemeProvider>
        );
    }

    /**
     * Render function
     * 
     * To render MenuItem for SelectField Component
     * 
     * @param {Array<{}>} data
     * 
     * @returns {Array<MenuItem>} Array of Item from select content
     */
    _renderMenuItem(data = []) {
        return data.map(({ name, id }) => {
            return (
                <MenuItem key={id} value={name} primaryText={name} />
            );
        })
    }
}

export default Select