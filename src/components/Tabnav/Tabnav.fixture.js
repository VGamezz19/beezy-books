import Tabnav from './'

export default [{
    component: Tabnav,
    name: 'TabNav App',
    props: { onChange: (value) => console.log(value) }
}]