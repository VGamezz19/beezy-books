import { BookApi } from "../api";

import { validate } from "./validate";

const bookApiLogic = new BookApi("http", "locahost", "8080");

const booksLogic = {

    /**
     * 
     * Logic book function create
     *
     * function to send and create new book. When "server" (just simulated)
     * has responsed with here ID, It will return storage updated
     * 
     * @param {String} title title for new book
     * @param {Number} price price for new book
     * @param {String} genreName genre.name for new book
     * @param {String} resume resume for new book
     * @param {Array<{}>} storage array with all genres in client side
     *
     * @returns {Promise<Array[{}]>} will return a promise with array of genre (Like storage input)
     *
     * @version 1.0.0
     */
    create: (title, price, genreName, resume, storage) => {
        return Promise.resolve()
            .then(() => {
                validate({ title, price, genreName });

                return bookApiLogic.create(title, price, genreName, resume)
            })
            .then(res => storage.map(genre => {
                if (genre.name === genreName) {

                    const id = res.data.id

                    const newBook = { id, title, genre: genreName, price, resume, genreId: genre.id }

                    genre.books.push(newBook)
                }
                return genre
            }))
    },

    remove: (genreId, id, storage) => {
        try {
            validate({ genreId, id })

            /**
             * Send to Server side
             */
            bookApiLogic.remove(id)

            /**
             * Interactuation with user
             */
            return storage.map(genre => {
                if (genre.id === genreId) {

                    genre.books = genre.books.filter(book => {

                        return book.id !== id
                    })
                }

                return genre;
            })


        } catch (e) {
            console.error(e)
        }
    }
}

export default booksLogic;