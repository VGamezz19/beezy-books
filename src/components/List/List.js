import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const List = (props) => {

    if (!props.books || props.books.length <= 0) { return false }

    const { books } = props;

    return (
        <div className="content-list-books">
            <MuiThemeProvider>
                {books.map(({ id, title, resume, price }) => <Card
                    key={id}
                    className={"card-book-item"}>
                    <CardHeader
                        className="content-header"
                        title={title}
                        subtitle={price + "€"}
                        titleStyle={{ fontSize: "2em" }}
                        subtitleStyle={{ fontSize: "1.5em" }}
                        style={{ paddingRight: 0 }}
                    />
                    <CardText>
                        {resume}
                    </CardText>
                </Card>)}
            </MuiThemeProvider>
        </div>


    );
}

export default List;