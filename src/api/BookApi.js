import { RequestPromiseApi } from "./RequestPromiseApi";

/**
 * BookApi, class (logic)
 *
 * Logic Book API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicBook just like this:
 *
 * const logicBook = new BookApi("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class BookApi extends RequestPromiseApi {

    /**
     * 
     * Create new book
     * 
     * @param {String} title title for new book
     * @param {Number} price price for new book
     * @param {String} genre genre.name for new book
     * @param {String} resume resume for new book
     *
     * @returns {Promise<{}>} res from RequestPromiseAPI.js
     */
    create(title, price, genre, resume) {

        return this.request("post", "api/book", { title, price, genre, resume });
    }
}