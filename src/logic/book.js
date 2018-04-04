import { BookApi } from "../api"

const bookApiLogic = new BookApi("http", "locahost", "8080")

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

        return bookApiLogic.create(title, price, genreName, resume)
            .then(res => storage.map(genre => {

                if (genre.name === genreName) {

                    const id = res.data.id

                    genre.books.push({ id, title, price, resume })
                }
                return genre
            }))
    }
}

export default booksLogic;