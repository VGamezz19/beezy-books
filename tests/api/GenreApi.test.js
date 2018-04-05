import { GenreApi } from "../../src/api"

describe("GenreApi should exist", () => {

    test("should import GenreApi", () => {

        expect(GenreApi).toBeDefined();

        expect(GenreApi).toBeInstanceOf(Object);
    });

    test("should create new GenreApi", () => {

        const GenreApiLogic = new GenreApi("http", "localhost")

        expect(GenreApiLogic).toBeInstanceOf(GenreApi);

        expect(GenreApiLogic.create).toBeDefined();

        expect(GenreApiLogic.list).toBeDefined();

        expect(GenreApiLogic.request).toBeDefined();
    });
});

describe("GenreApi Logic", () => {
    const GenreApiLogic = new GenreApi("http", "localhost")

    test("should create genre", (done) => {

        GenreApiLogic.create("someName")
            .then(res => {

                expect(res).toBeInstanceOf(Object);

                expect(res.status).toBeDefined();

                expect(res.status).toEqual("OK");

                expect(res.data).toBeDefined();

                expect(res.data).toBeInstanceOf(Object);

                expect(res.data.id).toBeDefined();

                done();
            })
    })

    test("should list genre", (done) => {

        GenreApiLogic.list()
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
}); 