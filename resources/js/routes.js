const Home = () => import('./components/Home.vue')
const Contact = () => import('./components/Contact.vue')

const Show = () => import('./components/address/Show.vue')
const Create = () => import('./components/address/Create.vue')
const Edit = () => import('./components/address/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'contact',
        path: '/contact',
        component:Contact
    },
    {
        name: 'Home',
        path: '/',
        component:Home
    },
    {
        name: 'showAddresses',
        path: '/addresses',
        component:Show
    },
    {
        name: 'createAddresses',
        path: '/create',
        component:Create
    },
    {
        name: 'editAddresses',
        path: '/edit/:id',
        component:Edit
    }
]