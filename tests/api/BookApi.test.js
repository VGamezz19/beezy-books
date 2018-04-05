import { BookApi } from "../../src/api"

describe("BookApi should exist", () => {

    test("should import BookApi", () => {

        expect(BookApi).toBeDefined();

        expect(BookApi).toBeInstanceOf(Object);
    });

    test("should create new BookApi", () => {

        const bookApiLogic = new BookApi("http", "localhost")

        expect(bookApiLogic).toBeInstanceOf(BookApi);

        expect(bookApiLogic.create).toBeDefined()

        expect(bookApiLogic.request).toBeDefined()
    });
});

describe("BookApi Logic", () => {
    const bookApiLogic = new BookApi("http", "localhost")

    test("should create book", (done) => {

        bookApiLogic.create("title", 100, "some genre", "some rando resume")
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
}); 