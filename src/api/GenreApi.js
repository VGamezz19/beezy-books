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

    // constructor(protocol, host, port) {

    //     super(protocol, host, port);
    // }

    /**
     *
     * Create new Genre
     *
     * @param {String} title name for new Genre
     * @param {JWT} token JWT with user information
     *
     * @returns {RequestPromise} res from RequestPRomiseAPI
     *
     * @throws {Error} - Invalid props or invalid token
     */
    list() {

        return this.request("get", "api/genre");
    }

    create(name) {

        return this.request("post", "api/genre", { name });
    }
}