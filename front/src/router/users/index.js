const Users = () => import('@/pages/users/UserList.vue');
const PdfEdit = () => import('@/pages/users/UserEdit.vue');

const routeUsers = [
    {
        path: '/users',
        name: 'UsersList',
        component: Users
    },
    {
        path: '/users/:id',
        name: 'UserEdit',
        component: PdfEdit
    },
];

export default routeUsers;