import List from './'

const books = [
    { id: "1", title: " some title", price : 20, resume : "some resume"  },
    { id: "1", title: " some title1" , price : 20, resume : "some resume" },
    { id: "1", title: " some title2" , price : 20, resume : "some resume" },
    { id: "1", title: " some title3" , price : 20, resume : "some resume" },
    { id: "1", title: " some title4" , price : 20, resume : "some resume" },
    { id: "1", title: " some title5" , price : 20, resume : "some resume" },
];

export default [
    {
        component: List,
        name: 'List - EmptyList',
        props: {
            onChange: (value) => console.log(value)
        }
    },
    {
        component: List,
        name: 'List - Listbooks',
        props: {
            onChange: (value) => console.log(value),
            books
        }
    }
]