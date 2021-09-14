const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')

const Mostrar = () => import('./components/address/Mostrar.vue')
const Crear = () => import('./components/address/Crear.vue')
const Editar = () => import('./components/address/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component:Contacto
    },
    {
        name: 'Home',
        path: '/',
        component:Home
    },
    {
        name: 'mostrarAddresses',
        path: '/addresses',
        component:Mostrar
    },
    {
        name: 'crearAddresses',
        path: '/crear',
        component:Crear
    },
    {
        name: 'editarAddresses',
        path: '/editar/:id',
        component:Editar
    }
]