import { FakeRequestPromiseApi } from "../../src/api/FakeRequestPromiseApi"

describe("FakeRequestPromiseApi should exist", () => {

    test("should import FakeRequestPromiseApi", () => {

        expect(FakeRequestPromiseApi).toBeDefined();

        expect(FakeRequestPromiseApi).toBeInstanceOf(Object);
    });

    test("should create new FakeRequestPromiseApi whitout port", () => {

        const FakeRequestPromiseApiLogic = new FakeRequestPromiseApi("http", "localhost")

        expect(FakeRequestPromiseApiLogic).toBeInstanceOf(FakeRequestPromiseApi);

        expect(FakeRequestPromiseApiLogic.protocol).toBeDefined()

        expect(FakeRequestPromiseApiLogic.host).toBeDefined()

        expect(FakeRequestPromiseApiLogic.port).not.toBeDefined()

        expect(FakeRequestPromiseApiLogic.request).toBeDefined()
    });

    test("should create new FakeRequestPromiseApi whit port", () => {

        const FakeRequestPromiseApiLogic = new FakeRequestPromiseApi("http", "localhost", 8080)

        expect(FakeRequestPromiseApiLogic).toBeInstanceOf(FakeRequestPromiseApi);

        expect(FakeRequestPromiseApiLogic.protocol).toBeDefined()

        expect(FakeRequestPromiseApiLogic.host).toBeDefined()

        expect(FakeRequestPromiseApiLogic.port).toBeDefined()

        expect(FakeRequestPromiseApiLogic.request).toBeDefined()
    });
});

describe("FakeRequestPromiseApi Logic", () => {

    const FakeRequestPromiseApiLogic = new FakeRequestPromiseApi("http", "localhost")

    test("should get baseUrl", () => {

        const baseUrl = FakeRequestPromiseApiLogic.getBaseUrl()

        expect(baseUrl).toEqual(FakeRequestPromiseApiLogic.baseurl)
    })

    test("should do request get api/genre", (done) => {

        FakeRequestPromiseApiLogic.request("get", "api/genre")
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

        FakeRequestPromiseApiLogic.request("post", "api/genre", { name })
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

        FakeRequestPromiseApiLogic.request("post", "api/book",  { title, price, genre, resume })
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

        FakeRequestPromiseApiLogic.request("rando", "random")
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