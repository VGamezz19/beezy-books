import { RequestPromiseApi } from "./RequestPromiseApi";

/**
 * GenreApi, class (logic)
 *
 * Logic Genre API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicGenre just like this:
 *
 * const logicGenre = new GenreAPI("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class GenreApi extends RequestPromiseApi {
    
    /**
     *
     * Create new genre
     *
     * @param {String} name name for new genre
     *
     * @returns {Promise<{}>} res from RequestPromiseAPI.js
     */
    create(name) {

        return this.request("post", "api/genre", { name });
    }

    /**
     *
     * list all genres
     *
     * @returns {Promise<{}>} res from RequestPromiseAPI.js
     */
    list() {

        return this.request("get", "api/genre");
    }


}