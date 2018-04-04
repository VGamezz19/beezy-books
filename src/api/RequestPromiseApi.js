import data from "./_data-book.json";

/**
 * RequestPromiseApi class. (logic)
 *
 * Define the standar properties and methods for Book/Genre API
 *
 * @version 1.0.0
 */
export class RequestPromiseApi {

    constructor(_protocol, _host, _port) {
        this.protocol = _protocol;
        this.host = _host;
        this.port = _port;

        if (this.port) {

            this.baseurl = `${this.protocol}://${this.host}:${this.port}`;
        } else {

            this.baseurl = `${this.protocol}://${this.host}`;
        }
    }

    getBaseUrl() {

        return this.baseurl;
    }

    request(method, path, body, headers) {

    /**
     * Simulating a request promise 
     * https://github.com/request/request-promise
     */
        if (path === "api/book" && method === "post") {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    return resolve(
                        {
                            status: "OK",
                            data: {
                                id: "numberId"
                            }
                        }
                    )
                }, 1000)
            })
        }

        if (path === "api/genre" && method === "post") {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    return resolve(
                        {
                            status: "OK",
                            data: {
                                id: "numberId"
                            }
                        }
                    )
                }, 1000)
            })
        }

        if (path === "api/genre" && method === "get") {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    return resolve(data)
                }, 2000)
            })
        }

        return new Error("not found")
    }
}