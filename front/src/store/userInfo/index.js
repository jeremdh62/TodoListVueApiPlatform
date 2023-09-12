import { instanceAxios } from "@/store/index.js";

const userInfoStore = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
    },
    getters: {
        getUserInfo: (state) => {
            return state.userInfo;
        }
    },
    actions: {
        async getUserInfo({ commit }) {
            const response = await instanceAxios.get(`/api/profile`);
            commit('setUserInfo', response.data);
        }
    }
}


export default userInfoStore;