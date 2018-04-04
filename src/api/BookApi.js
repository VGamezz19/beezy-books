import { RequestPromiseApi } from "./RequestPromiseApi";

/**
 * BookApi, class (logic)
 *
 * Logic Genre API
 *
 * to use it, you only need to Import this class in your
 * client, and create new logicGenre just like this:
 *
 * const logicGenre = new BookApi("protocol","somehost", ["an optional port"])
 *
 * @version 1.0.0
 */
export class BookApi extends RequestPromiseApi {

    create(title, price, genre, resume = null) {

        return this.request("post", "api/book", { title, price, genre, resume });
    }
}