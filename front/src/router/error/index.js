const NotFound = () => import('@/pages/error/NotFound.vue');

const routeError = [
    { 
        path: '/:pathMatch(.*)*', 
        name: 'Page NotFound', 
        component: NotFound 
    },
];

export default routeError;