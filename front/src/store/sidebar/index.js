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
                        url: '/user-manage/user-list'
                    },
                    {
                        id: uuidv4(),
                        title: 'User Edit',
                        url: '/user-manage/user-edit/uid01'
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