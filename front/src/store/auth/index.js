import { store, instanceAxios } from '../index';

const localStorageAuth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null;

import jwt_decode from "jwt-decode";
const authStore = {
    namespaced: true,
    state: () => ({
        authJWT: localStorageAuth ?localStorageAuth : null,
        jwtDecoded: localStorageAuth ? jwt_decode(localStorageAuth.token) : null,
        userName: localStorageAuth ? jwt_decode(localStorageAuth.token).realusername : null,
        email: localStorageAuth ? jwt_decode(localStorageAuth.token).username : null,
        userNameFormated: localStorageAuth ? formatUserName(jwt_decode(localStorageAuth.token).realusername) : null,
        numberOfRefresh: 0
    }),
    mutations: {
        setAuthJwt(state, authJwt) {
            state.authJwt = authJwt;
            if (authJwt) {
                state.jwtDecoded = jwt_decode(authJwt.token);
                localStorage.setItem('auth', JSON.stringify(authJwt));
                state.userName = jwt_decode(authJwt.token).realusername;
                state.userNameFormated = formatUserName(jwt_decode(authJwt.token).realusername);
            }
        },
        addNumberOfRefresh(state) {
            state.numberOfRefresh++;
        },
        resetNumberOfRefresh(state) {
            state.numberOfRefresh = 0;
        }
    },
    getters: {
        getAutJWT: (state) => {
            return state.authJwt;
        },
        getJWTDecoded: (state) => {
            return state.jwtDecoded;
        },
        getUserName: (state) => {
            return state.userName;
        },
        getEmail: (state) => {
            return state.email;
        },
        getUserNameFormated: (state) => {
            return formatUserName(state.userName);
        },
        getNumberOfRefresh: (state) => {
            return state.numberOfRefresh;
        }
    },
    actions: {
        login: async ({ commit }, user) => {
            try {
               const response = await instanceAxios.post('/auth', user);
                commit('setAuthJwt', response.data);
    
                if (response.status === 200) {
                    localStorage.setItem('auth', JSON.stringify(response.data));
                    
                    return {status: response.status, data: response.data}
                } else {
                  return {status: response.status, data: response.data}
                }
            } catch (error) {
                console.error(error);
                if (error.response) {
                    return {status: error.response.status, data: error.response.data}
                } else {
                    return {status: 500, data: error}
                }
            }
    
        },
        logout: async ({ commit }) => {
            commit('setAuthJwt', null);
            localStorage.removeItem('auth');
        },
        refreshJWT: async ({ commit }) => {
            try {
                const response = await instanceAxios.post('/auth/token/refresh', {
                    refresh_token: JSON.parse(localStorage.getItem('auth')).refresh_token
                });

                if (response.status === 200) {
                    commit('setAuthJwt', response.data);
                    localStorage.setItem('auth', JSON.stringify(response.data));
    
                    return {status: response.status, data: response.data}
                } else {
                    await store.dispatch('authStore/logout');
                    return {status: response.status, data: response.data}
                }
            } catch (error) {
                await store.dispatch('authStore/logout');
                return {status: error.response.status, data: error.response.data}
            }
        }
    }
}

export default authStore;

function formatUserName(userName) {
    let userNameFormated = userName;

    userNameFormated = userNameFormated.replace(/([A-Z])/g, ' $1').trim();

    userNameFormated = userNameFormated.replace(/_/g, ' ');

    userNameFormated.split(' ').forEach(element => {
        userNameFormated = userNameFormated.replace(element, element.charAt(0).toUpperCase() + element.slice(1));
    });

    return userNameFormated;
}