import Select from './'

const storage = [
    { id: "1", name: " some name" },
    { id: "12", name: " some name1" },
    { id: "13", name: " some name2" },
    { id: "14", name: " some name3" },
    { id: "165", name: " some name4" },
    { id: "16", name: " some name5" },
];

export default [
    {
        component: Select,
        name: 'Select - EmptyData',
        state: {
            value: "hello"
        },
        props: {
            onChange: (value) => console.log(value)
        }
    },
    {
        component: Select,
        name: 'Select - GenreData',
        props: {
            onChange: (value) => console.log(value),
            storage
        }
    },
    {
        component: Select,
        name: 'Select - GenreData DefaultSelect',
        props: {
            onChange: (value) => console.log(value),
            storage,
            defaultSelect: storage[3].name
        }
    }
]