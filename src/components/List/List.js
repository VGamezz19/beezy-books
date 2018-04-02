import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const List = (props) => {

    if (!props.books || props.books.length <= 0) { return false }

    const { books } = props;

    return (
        <MuiThemeProvider>
            {books.map(({ id, title, resume, price }) => <Card  className={"card-book-item"}>
                <CardHeader
                    key={id}
                    title={title}
                    subtitle={price + "€"}
                    titleStyle={{fontSize: "2em"}}
                    subtitleStyle={{fontSize: "1.5em"}}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText expandable={false}>
                    {resume}
                </CardText>
            </Card>
            )}
        </ MuiThemeProvider>
    );
}

export default List;