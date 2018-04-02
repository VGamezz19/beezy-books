import SelectGenre from './'

const data = [
    { id: "1", name: " some name" },
    { id: "1", name: " some name1" },
    { id: "1", name: " some name2" },
    { id: "1", name: " some name3" },
    { id: "1", name: " some name4" },
    { id: "1", name: " some name5" },
];

export default [
    {
        component: SelectGenre,
        name: 'Select - EmptyData',
        props: {
            onChange: (value) => console.log(value)
        }
    },
    {
        component: SelectGenre,
        name: 'Select - GenreData',
        props: {
            onChange: (value) => console.log(value),
            data
        }
    }
]