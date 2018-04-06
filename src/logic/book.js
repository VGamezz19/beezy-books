import { BookApi } from "../api";

import { validate } from "./validate";

import genreLogic from "./genre"

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

    /**
     * 
     * Logic book function remove
     *
     * function to remove book. First It will send to Server side like asynchronous promise
     * and then, It will updated data client side like synchronous function.
     * It will be productive for the User Experience
     * 
     * @param {String} genreId id from genre father of book
     * @param {String} id id from book
     * @param {Array<{}>} storage array with all genres in client side
     *
     * @returns {Promise<Array[{}]>} will return a promise with array of genre (Like storage input)
     *
     * @version 1.0.0
     */
    remove: (genreId, id, storage) => {
        try {
            validate({ genreId, id })

            /**
             * Send to Server side - promise - asynchronous
             */
            bookApiLogic.remove(id)

            /**
             * Interactuation with user - synchronous
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
    },

    /**
     * 
     * Logic book function update
     *
     * function to update content book. First It will send to Server side like
     * asynchronous promise and then, It will updated data client side like 
     * synchronous function. It will be productive for the User Experience
     * 
     * @param {String} genreId id from genre father of book
     * @param {String} id id from book
     * @param {String} title title for update book
     * @param {Number} price price for update book
     * @param {String} genreName genre.name for update book
     * @param {String} resume resume for update book
     * @param {Array<{}>} storage array with all genres in client side
     *
     * @returns {Promise<Array[{}]>} will return a promise with array of genre (Like storage input)
     *
     * @version 1.0.0
     */
    update: (genreId, id, title, price, genreName, resume, storage) => {
        try {

            validate({ genreId, id, title, price, genreName, resume })

            /**
             * Send to Server side - promise - asynchronous
             */
            bookApiLogic.update(id, title, price, genreName, resume, storage)

            /**
             * Interactuation with user - synchronous
             */
            const genreUpdate = genreLogic.retrieve(genreId, storage)

            if (genreUpdate.name !== genreName) {

                return booksLogic.remove(genreId, id, storage.map(genre => {

                    if (genre.name === genreName) {

                        genre.books.push({ id, title, price, genre: genreName, resume })
                    }
                    return genre
                }))
            }

            return storage.map(genre => {
                if (genre.id === genreId) {
                    genre.books = genre.books.map(book => {
                        if (book.id === id) {
                            book.title = title;
                            book.price = price;
                            book.genre = genreName;
                            book.storage = storage;
                        }

                        return book
                    })
                }
                return genre
            })

        } catch (e) {

            console.error(e)
        }
    },
}

export default booksLogic;