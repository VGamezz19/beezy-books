import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionBook from 'material-ui/svg-icons/action/book';

class Tabnav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideIndex: "list",
    };

    this.properties = ["list", "create", "update"]
  }

  handleChange = (value) => {
    const { onChange } = this.props;

    this.setState({ slideIndex: value });

    return onChange(value)
  };

  render() {
    const properties = this.properties;
    const { slideIndex } = this.state;

    return (

      <MuiThemeProvider>
        <Tabs
          className={"tab-nav"}
          inkBarStyle={{ background: "grey" }}
          onChange={this.handleChange}
          value={slideIndex}>

          {this._renderTabItems(properties)}
        </Tabs>
      </MuiThemeProvider>
    );
  }

  /**
   * Render function
   * 
   * To render TabItems for TabNav
   * 
   * @param {Array<String>} properties
   * 
   * @returns {Array<Tab>} Array of TabItems
   */
  _renderTabItems(properties) {
    return properties.map((property, index) => {
      return (
        <Tab
          className={"tab-item"}
          key={index}
          icon={
            property === "create" ? <ContentAddCircle /> :
              property === "list" ? <ActionBook /> :
                property === "update" ? <ContentCreate /> : undefined
          }
          value={property}
          label={property} />
      )
    });
  }
}

export default Tabnav