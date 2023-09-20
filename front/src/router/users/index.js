const Users = () => import('@/pages/users/UserList.vue');
const PdfEdit = () => import('@/pages/users/UserEdit.vue');

import { store } from '@/store';

const routeUsers = [
    {
        path: '/users',
        name: 'UsersList',
        component: Users,
        beforeEnter: (to, from, next) => {
            if (store.getters['authStore/getRoles'].includes('ROLE_ADMIN')) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/users/:id',
        name: 'UserEdit',
        component: PdfEdit,
        beforeEnter: (to, from, next) => {
            if (store.getters['authStore/getRoles'].includes('ROLE_ADMIN')) {
                next();
            } else {
                next('/');
            }
        }
    },
];

export default routeUsers;