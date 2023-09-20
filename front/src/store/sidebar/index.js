import { v4 as uuidv4 } from 'uuid';

const localStorageAuth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null;
import jwt_decode from "jwt-decode";

const jwtToken = localStorageAuth ? localStorageAuth.token : null;
const jwtDecoded = jwtToken ? jwt_decode(jwtToken) : null;
const roles = jwtDecoded ? jwtDecoded.roles : null;

const sidebarStore = {
    namespaced: true,
    state: () => ({
        sidebar: [
            {
                id: uuidv4(),
                icon: 'grid-alt',
                title: 'Kanban',
                url:   '/',
            },
        ]
    }),
    getters: {
        getSidebar: (state) => {
            return state.sidebar;
        }
    }
};

if (roles && roles.includes('ROLE_ADMIN')) {
    sidebarStore.state.sidebar.push({
        id: uuidv4(),
        icon: 'users',
        title: 'User Management',
        url:   '',
        subMenus: [
            {
                id: uuidv4(),
                title: 'Users List',
                url: '/users'
            },
            {
                id: uuidv4(),
                title: 'User Add',
                url: '/users/add'
            },
        ]
    });
}



export default sidebarStore;