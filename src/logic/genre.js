import { GenreApi } from "../api/";

const genreApiLogic = new GenreApi("http", "localhost", "8080");

/**
 * genre logic client side (bussines manager)
 *
 * Defined a logic to manager genre data in client side.
 *
 * @version 1.0.0
 */
const genreLogic = {

    /**
     * 
     * Logic genre function create
     *
     * function to send and create new genre. When "server" (just simulated)
     * has responsed with here ID, It will return storage updated
     * 
     * @param {String} name title for new genre
     * @param {Array<{}>} storage array with all genres in client side
     *
     * @returns {Promise<Array[{}]>} will return a promise with array of genre (Like storage input)
     *
     * @version 1.0.0
     */
    create: (name, storage) => {

        return genreApiLogic.create(name)
            .then(res => {
                const id = res.data.id;

                storage.push({ id, name, books: [] })

                return storage
            })
    },

    /**
     * 
     * Logic genre function list
     *
     * function to retrieve all information about all genres
     *
     * @returns {Promise<Array[{}]>}  will return a promise with array of genre
     *
     * @version 1.0.0
     */
    list() {

        return genreApiLogic.list();
    },



    /**
     * 
     * Logic genre function extractBooksFrom
     *
     * funtion to list all books from some genre.
     * 
     * @param {Array<{}>} genre need it to work's as a syncronous mode
     * @param {String} select which genre was selected (filter)
     *
     * @returns {Array<{}>} Books extracted
     *
     * @version 1.0.0
     */
    extractBooksFrom(storage, genreName) {
        const books = [];

        /**
         * Without genreName, it will 
         * retrieve all books from all genres.
         */
        if (!genreName) {
            storage.map(el => {

                el.books.map(book => books.push(book))

                return el;
            })

            return books;

        } else {
            storage.map(el => {

                if (el.name === genreName) {

                    el.books.map(book => books.push(book))
                }

                return el;
            })

            return books;
        }
    }
}

export default genreLogic;