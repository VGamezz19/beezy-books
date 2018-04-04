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
     * Logic Folder function retrieve
     *
     * function to retrieve some folder, in data client side
     * 
     * @param {Array<{}>} genre need it to work's as a syncronous mode
     * @param {String} select which genre was selected (filter)
     *
     * @returns {Array<{}>} Books extracted
     *
     * @version 1.0.0
     */
    extractBooksFrom(genre, select) {

        const books = [];

        if (!select) {
            genre.map(el => {

                el.books.map(book => books.push(book))

                return el;
            })

            return books;
        }

        genre.map(el => {

            if (el.name === select) {

                el.books.map(book => books.push(book))
            }

            return el;
        })

        return books;
    },

    list() {

        return genreApiLogic.list();
    },

    create: (name, storage) => {

        return genreApiLogic.create(name)
            .then(res => {
                const id = res.data.id;

                storage.push({ id, name, books: [] })

                return storage
            })
    },

}

export default genreLogic;