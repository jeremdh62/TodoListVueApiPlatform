// import pages
const Home = () => import('@/pages/Home.vue');

const routesTemplate = [
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '/home',
      }
]

export default routesTemplate