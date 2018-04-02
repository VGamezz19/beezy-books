import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionBook from 'material-ui/svg-icons/action/book';

export default class Tabnav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideIndex: "list",
    };

    this.actioners = ["list", "create", "update"]
  }

  handleChange = (value) => {
    this.setState({ slideIndex: value });

    console.log("send props ", value)
  };

  render() {
    const actioners = this.actioners;
    const { slideIndex } = this.state;

    return (

      <MuiThemeProvider>
        <Tabs
          className={"tab-nav"}
          inkBarStyle={{ background: "grey" }}
          onChange={this.handleChange}
          value={slideIndex}>

          {this._renderTabItems(actioners)}
        </Tabs>
      </MuiThemeProvider>
    );
  }

  _renderTabItems(actioners) {
    return actioners.map((action, index) => {

      return (
        <Tab
          className={"tab-item"}
          key={index}
          icon={
            action === "create" ? <ContentAddCircle /> :
              action === "list" ? <ActionBook /> :
                action === "update" ? <ContentCreate /> : undefined
          }
          value={action}
          label={action} />
      )
    });
  }
}
