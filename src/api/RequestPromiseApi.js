import jsonDataGenres from "./_data-genres.json";

const uuidv4 = require('uuid/v4');

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

    /**
     * function request()
     * 
     * @param {String} method (get/post/put/delete)
     * @param {String} path path to do a simulation of a request
     * @param {Object} body object with content
     * @param {Object} headers object with auth content
     * 
     * @returns {Promise<Object>} return an object with status and data
     */
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
                                id: uuidv4()
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
                                id: uuidv4()
                            }
                        }
                    )
                }, 1000)
            })
        }

        if (path === "api/genre" && method === "get") {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    return resolve(
                        {
                            status: "OK",
                            data: jsonDataGenres
                        }
                    )
                }, 2000)
            })
        }

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                return reject(
                    {
                        status: "KO",
                        error: "not found"
                    }
                )
            }, 2000)
        })
    }
}