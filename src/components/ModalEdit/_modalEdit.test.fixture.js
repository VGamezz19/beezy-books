import ModalEdit from './';

const genreDefaultSelected = "testCosmos"

const storage = [{
    "id": "cf4b207c-1f3b-1318-ba28-42d5f8fb0d2e",
    "name": "maths",
    "books": [{
        "id": "cf4b207c-1f3b-4318-ba28-42f5f8fb0d2e",
        "title": "maths power book",
        "genre": "maths",
        "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
        "price": 20,
        "genreId": "cf4b207c-1f3b-1318-ba28-42d5f8fb0d2e"
    },
    {
        "id": "cf4b207c-1f3b-4318-ba28-42d0f8fb0d2e",
        "title": "powa maths",
        "genre": "maths",
        "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
        "price": 40,
        "genreId": "cf4b207c-1f3b-1318-ba28-42d5f8fb0d2e"
    }
    ]
},
{
    "id": "cf4b207c-1f3b-4311-ba28-42d5f8fb0d2e",
    "name": "develop",
    "books": [{
        "id": "cf4b207c-1f3b-4318-ba28-42d5f1fb0d2e",
        "title": "develop power book",
        "genre": "develop",
        "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
        "price": 20,
        "genreId": "cf4b207c-1f3b-4311-ba28-42d5f8fb0d2e"
    },
    {
        "id": "cf4b207c-1f3b-4318-ba28-42d5f8fb0d7e",
        "title": "powa develop",
        "genre": "develop",
        "resume": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
        "price": 40,
        "genreId": "cf4b207c-1f3b-4311-ba28-42d5f8fb0d2e"
    }
    ]
},
{
    "id": "cf4b207c-1f3b-4312-ba28-42d5f8fb0d2e",
    "name": "testCosmos",
    "books": [
        { "genreId": "cf4b207c-1f3b-4312-ba28-42d5f8fb0d2e", "genre": "testCosmos", "id": "f4b207c-1f3b-4312-ba", "title": " some title", "price": 20, "resume": "some resume" },
        { "genreId": "cf4b207c-1f3b-4312-ba28-42d5f8fb0d2e", "genre": "testCosmos", "id": "f4b207c-1f3b-4312-baasdsd", "title": " some title1", "price": 20, "resume": "some resume" },
        { "genreId": "cf4b207c-1f3b-4312-ba28-42d5f8fb0d2e", "genre": "testCosmos", "id": "f4b207c-1f3b-4312-ba123123", "title": " some title2", "price": 20, "resume": "some resume" }
    ]
}]

const book = storage[0].books[0]

export default [ {
    component: ModalEdit,
    name: 'Modal - CreateBook',
    props: {
        type: "book",
        actionName: "create",
        open: true,
        closeModal: () => console.log(),
        handlerSubmit: (...params) => console.log(params),
        inputs: ["title", "resume", "price"],
        storage
    }
},
{
    component: ModalEdit,
    name: 'Modal - CreateBook - defaultGenreSelected',
    props: {
        type: "book",
        actionName: "create",
        open: true,
        closeModal: () => console.log(),
        handlerSubmit: (...params) => console.log(params),
        inputs: ["title", "resume", "price"],
        storage,
        genreDefaultSelected
    }
},
{
    component: ModalEdit,
    name: 'Modal - CreateGenre',
    props: {
        type: "genre",
        actionName: "create",
        open: true,
        closeModal: () => console.log(),
        handlerSubmit: (...params) => console.log(params),
        inputs: ["name"]
    }
},
{
    component: ModalEdit,
    name: 'Modal - UpdateBook',
    props: {
        type: "book",
        actionName: "update",
        open: true,
        closeModal: () => console.log(),
        handlerSubmit: (...params) => console.log(params),
        inputs: ["title", "resume", "price"],
        storage,
        genreDefaultSelected: book.genre,
        book
    }
}];