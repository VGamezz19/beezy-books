import logic from "../../src/logic"

describe("logic should exist", () => {

    test("should import logic", () => {

        expect(logic).toBeDefined();

        expect(logic).toBeInstanceOf(Object);

        expect(logic.genre).toBeDefined();

        expect(logic.genre).toBeInstanceOf(Object);

        expect(logic.book).toBeDefined();

        expect(logic.genre).toBeInstanceOf(Object);
    });
});

let title, price, genre, resume, storage

beforeEach(() => {
    title = "testing boog"
    price = 10
    genre = "some genre"
    resume = "som resume about book"
    storage = [{
            "id": "cf4b207c-1f3b-4311-ba28-42d5f8fb0d2e",
            "name": "some genre",
            "books": [{
                    "id": "cf4b207c-1f3b-4318-ba28-42d5f1fb0d2e",
                    "title": "some genre power book",
                    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                    "price": 20
                },
                {
                    "id": "cf4b207c-1f3b-4318-ba28-42d5f8fb0d7e",
                    "title": "powa some genre",
                    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                    "price": 40
                }
            ]
        },
        {
            "id": "cf4b207c-1f3b-4311-ba28-42d5f8fb0d2e",
            "name": "some genre2",
            "books": [{
                    "id": "cf4b207c-1f3b-4318-ba28-42d5f1fb0d2e",
                    "title": "some genre power book",
                    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                    "price": 20
                },
                {
                    "id": "cf4b207c-1f3b-4318-ba28-42d5f8fb0d7e",
                    "title": "powa some genre",
                    "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
                    "price": 40
                }
            ]
        }
    ]
})

describe("Logic Book", () => {

    test("shoul create book", async (done) => {

        const newStorage = await logic.book.create(title, price, genre, resume, storage)

        expect(newStorage).toBeInstanceOf(Array);

        expect(newStorage[0].books.length).not.toBeLessThan(2)

        expect(newStorage[0].books[2].title).toEqual(title)

        expect(newStorage[0].books[2].price).toEqual(price)

        expect(newStorage[0].books[2].genre).toEqual(genre)

        expect(newStorage[0].books[2].resume).toEqual(resume)

        done()
    })

    test("shoul throw an error when try to create book without mandatory props", async (done) => {

        try {
            await logic.book.create()
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    
        done()
    })
})