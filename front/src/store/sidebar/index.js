import { v4 as uuidv4 } from 'uuid';

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
            {
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
            },
        ]
    }),
    getters: {
        getSidebar: (state) => {
            return state.sidebar;
        }
    }
};


export default sidebarStore;