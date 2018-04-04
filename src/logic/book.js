import { BookApi } from "../api"

const bookApiLogic = new BookApi("http", "locahost", "8080")

const booksLogic = {

    /**
     * 
     * Return array of books with new book added
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
    },

    /**
     * 
     * Return array of books with new book updated
     */
    update: (id, books, title = undefined, genre = undefined) => {

    },

    /**
     * 
     * Return array of books without this book
     */
    remove: (id, books) => {

    },

    /**
     * 
     * Return book
     */
    retrieve: (id) => {

    },

    /**
     * 
     * Return array of Books
     */
    list: () => {

    }
}

export default booksLogic;