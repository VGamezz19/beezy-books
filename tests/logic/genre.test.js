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

let name, storage

beforeEach(() => {
    name="some name genre"
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

describe("Logic genre", () => {

    test("shoul create genre", async (done) => {

        const newStorage = await logic.genre.create(name, storage)

        expect(newStorage).toBeInstanceOf(Array);

        expect(newStorage.length).not.toBeLessThan(3);

        expect(newStorage[2].name).toEqual(name);

        done()
    })

    test("shoul throw an error when try to create genre without mandatory props", async (done) => {

        try {
            await logic.genre.create()
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    
        done()
    })

    test("shoul list genres", async (done) => {

        const storageTest = await logic.genre.list(); 

        expect(storageTest).toBeInstanceOf(Array);

        expect(storageTest.length).not.toBeLessThan(3);

        expect(storageTest[0]).toBeInstanceOf(Object);

        expect(storageTest[0].books).toBeDefined();

        expect(storageTest[0].name).toBeDefined();

        expect(storageTest[0].id).toBeDefined();
    
        done()
    })

    test("shoul extractBooks from genres", () => {

        const books = logic.genre.extractBooksFrom(storage)

        expect(books).toBeInstanceOf(Array);

        expect(books[0].title).toBeDefined();

        expect(books[0].id).toBeDefined();

        expect(books[0].price).toBeDefined();

        expect(books[0].resume).toBeDefined();
    })

    test("shoul extractBooks from specific genre", () => {

        const books = logic.genre.extractBooksFrom(storage, "some genre2")

        expect(books).toBeInstanceOf(Array);

        expect(books[0].title).toEqual(storage[1].books[0].title)

        expect(books[0].id).toEqual(storage[1].books[0].id)

        expect(books[0].price).toEqual(storage[1].books[0].price)

        expect(books[0].resume).toEqual(storage[1].books[0].resume)
    })
})