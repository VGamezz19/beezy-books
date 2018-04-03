// /**
//  * DataType MDitor, from mditor-types module (../mditor-types/ project)
//  */
// import File from 'mditor-types'

// /**
//  * Business genreApi, from mditor-api module (../api/ project)
//  */
// import { genreApi } from "mditor-api";

// import { tokenUser } from "./user";

// const genreApilogic = new genreApi("https", "server-mditor.herokuapp.com");

import { GenreApi } from "../api/";

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
        const genreApiLogic = new GenreApi("http", "locahost", "8080")
    
        return genreApiLogic.list();
    }

}

export default genreLogic;