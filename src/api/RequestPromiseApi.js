import data from "./dataDB.json";

/**
 * RequestPromiseApi class. (logic)
 *
 * Define the standar properties and methods for User/File/Folder API
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

        if( path === "api/Genre") {
            return new Promise((resolve, reject) => {

                setTimeout(()=> {
                    return resolve(data)
                } ,2000)
            })
        }

        return new Error ("not found")
    }
}