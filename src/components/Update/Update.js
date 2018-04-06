import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import MenuOptions from "./MenuOptions";

const Update = (props) => {

    if (!props.books || props.books.length <= 0) { return false }

    const { books, logicUpdate, logicDelete, storage } = props;

    const logicOptions = {
        onUpdate: logicUpdate.updateBook,
        onDelete: logicDelete.deleteBook
    }

    return (
        <MuiThemeProvider>
            <div className="content-update-books">
                {books.map((book) => {
                    const { id, title, genre, resume, price } = book;

                    return <Card
                        key={id}
                        className={"card-book-item-update"}>
                        <CardHeader
                            className="content-header"
                            title={title}
                            subtitle={`${price} € - ${genre}`}
                            titleStyle={{ fontSize: "2em" }}
                            subtitleStyle={{ fontSize: "1.5em" }}
                            style={{ paddingRight: 0 }}
                            children={<MenuOptions storage={storage} book={book} logicOptions={logicOptions} />} />
                        <CardText>
                            {resume}
                        </CardText>
                    </Card>
                }
                )}
            </div>
        </MuiThemeProvider>

    );
}

Update.propTypes = {
    storage: PropTypes.arrayOf(PropTypes.object).isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    logicUpdate: PropTypes.shape({
        updateBook: PropTypes.func.isRequired
    }),
    logicDelete: PropTypes.shape({
        deleteBook: PropTypes.func.isRequired
    })
}

export default Update;