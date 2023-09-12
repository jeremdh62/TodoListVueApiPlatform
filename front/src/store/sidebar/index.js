import { instanceAxios } from "@/store/index.js";

const sidebarStore = {
    namespaced: true,
    state: () => ({
        sidebar: localStorage.getItem('sidebar') ? JSON.parse(localStorage.getItem('sidebar')) : [],
        sidebarLang: localStorage.getItem('sidebarLang') ? localStorage.getItem('sidebarLang') : 'en',
    }),
    mutations: {
        setSidebar(state, sidebar) {
            localStorage.setItem('sidebar', JSON.stringify(sidebar));
            state.sidebar = sidebar;
        },
        setSidebarLang(state, sidebarLang) {
            localStorage.setItem('sidebarLang', sidebarLang);
            state.sidebarLang = sidebarLang;
        }
    },
    getters: {
        getSidebar: (state) => {
            return state.sidebar;
        },
        getSidebarLang: (state) => {
            return state.sidebarLang;
        }
    },
    actions: {
        getSidebar: async ({commit}) => {
            try {

               /* let lang = $cookies.get('keep_locale') ? $cookies.get('keep_locale') : 'en';
                const response = await instanceAxios.get(`/api/sidebar?lang=${lang}`);
                
                commit('setSidebar', response.data);
                commit('setSidebarLang', lang);
    
                return {status: response.status, data: response.data};*/
            } catch (error) {
                console.error(error);
                return {status: error.response.status, data: error.response.data ? error.response.data : error};
            }
        },
    }
};


export default sidebarStore;