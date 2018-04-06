import { RequestPromiseApi } from "../../src/api/RequestPromiseApi"

describe("RequestPromiseApi should exist", () => {

    test("should import RequestPromiseApi", () => {

        expect(RequestPromiseApi).toBeDefined();

        expect(RequestPromiseApi).toBeInstanceOf(Object);
    });

    test("should create new RequestPromiseApi whitout port", () => {

        const RequestPromiseApiLogic = new RequestPromiseApi("http", "localhost")

        expect(RequestPromiseApiLogic).toBeInstanceOf(RequestPromiseApi);

        expect(RequestPromiseApiLogic.protocol).toBeDefined()

        expect(RequestPromiseApiLogic.host).toBeDefined()

        expect(RequestPromiseApiLogic.port).not.toBeDefined()

        expect(RequestPromiseApiLogic.request).toBeDefined()
    });

    test("should create new RequestPromiseApi whit port", () => {

        const RequestPromiseApiLogic = new RequestPromiseApi("http", "localhost", 8080)

        expect(RequestPromiseApiLogic).toBeInstanceOf(RequestPromiseApi);

        expect(RequestPromiseApiLogic.protocol).toBeDefined()

        expect(RequestPromiseApiLogic.host).toBeDefined()

        expect(RequestPromiseApiLogic.port).toBeDefined()

        expect(RequestPromiseApiLogic.request).toBeDefined()
    });
});

describe("RequestPromiseApi Logic", () => {

    const RequestPromiseApiLogic = new RequestPromiseApi("http", "localhost")

    test("should get baseUrl", () => {

        const baseUrl = RequestPromiseApiLogic.getBaseUrl()

        expect(baseUrl).toEqual(RequestPromiseApiLogic.baseurl)
    })

    test("should do request get api/genre", (done) => {

        RequestPromiseApiLogic.request("get", "api/genre")
            .then(res => {

                expect(res).toBeInstanceOf(Object);

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("OK");

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Array);

                expect(res.data[0]).toBeInstanceOf(Object);

                done();
            })
    })

    test("should do request post api/genre", (done) => {

        const name = "some name"

        RequestPromiseApiLogic.request("post", "api/genre", { name })
            .then(res => {

                expect(res).toBeInstanceOf(Object);

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("OK");

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Object);

                expect(typeof res.data.id).toBe('string')

                done();
            })
    })

    test("should do request post api/book", (done) => {

        const title = "some title"
        const price = 10
        const genre = "some genre"
        const resume = "some resume"

        RequestPromiseApiLogic.request("post", "api/book",  { title, price, genre, resume })
            .then(res => {

                expect(res).toBeInstanceOf(Object);

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("OK");

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Object);

                expect(typeof res.data.id).toBe('string')

                done();
            })
    })


    test("should response KO", (done) => {

        RequestPromiseApiLogic.request("rando", "random")
            .catch(res => {

                expect(res).toBeInstanceOf(Object);

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("KO");

                expect(res.error).toBeDefined();

                expect(typeof res.error).toBe('string')

                done();
            })
    })
}); 