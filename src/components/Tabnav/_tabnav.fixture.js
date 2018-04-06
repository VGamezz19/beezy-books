import Tabnav from './'

export default [{
    component: Tabnav,
    name: 'TabNav App List',
    props: { onChange: (value) => console.log(value) }
},
{
    component: Tabnav,
    name: 'TabNav App Create',
    state: { slideIndex : "create"}, 
    props: { onChange: (value) => console.log(value) }
},
{
    component: Tabnav,
    name: 'TabNav App Update',
    state: {slideIndex : "update"},
    props: { onChange: (value) => console.log(value) }
}]