import { store, instanceAxios } from '../index';

const userStore = {
    namespaced: true,
    state: () => ({
       users: []
    }),
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        },
        updateUser(state, user) {
            const index = state.users.findIndex(t => t.id === user.id);
            state.users[index] = user;
        },
        deleteUser(state, id) {
            const index = state.users.findIndex(t => t.id === id);
            state.users.splice(index, 1);
        }
    },
    getters: {
        getUsers(state) {
            return state.users;
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const response = await instanceAxios.get('/api/users');
                commit('setUsers', response.data['hydra:member']);
            } catch (error) {
                console.log(error);
            }
        },
        async addUser({ commit }, user) {
            try {
                const response = await instanceAxios.post('/api/users', user);
                commit('addUser', response.data['hydra:member']);
            } catch (error) {
                console.log(error);
            }
        },
        async updateUser({ commit }, user) {
            try {
                const response = await instanceAxios.patch(`/api/users/${user.id}`, user);
                commit('updateUser', response.data['hydra:member']);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUser({ commit }, id) {
            try {
                await instanceAxios.delete(`/api/users/${id}`);
                commit('deleteUser', id);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default userStore;