import Update from './'

import logic from "../../logic"

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

const books = logic.genre.extractBooksFrom(storage);

export default [
    {
        component: Update,
        name: 'Update - FullList',
        props: {
            storage,
            books,
            logicDelete: { deleteBook: (...data) => console.log(data) },
            logicUpdate: { updateBook: (...data) => console.log(data) },
            onChange: (value) => console.log(value)
        }
    },
    {
        component: Update,
        name: 'Update - EmptyList',
        props: {
            books:[],
            logicDelete: { deleteBook: (...data) => console.log(data) },
            logicUpdate: { updateBook: (...data) => console.log(data) },
            onChange: (value) => console.log(value)
        }
    }
]