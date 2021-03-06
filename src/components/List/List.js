import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const List = (props) => {
    const { books } = props;

    return (
        <MuiThemeProvider>
            <div className="content-list-books">
                {(!books || books.length <= 0) ?
                    <h1> No data found</h1>
                    : books.map(({ id, title, genre, resume, price }) => <Card
                        key={id}
                        className={"card-book-item"}>
                        <CardHeader
                            className="content-header"
                            title={title}
                            subtitle={`${price} € - ${genre}`}
                            titleStyle={{ fontSize: "2em" }}
                            subtitleStyle={{ fontSize: "1.5em" }}
                            style={{ paddingRight: 0 }}
                        />
                        <CardText>
                            {resume}
                        </CardText>
                    </Card>)}
            </div>
        </MuiThemeProvider>
    );
}

List.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List;