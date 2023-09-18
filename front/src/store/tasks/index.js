import { store, instanceAxios } from '../index';

const taskStore = {
    namespaced: true,
    state: () => ({
       tasks: []
    }),
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, task) {
            const index = state.tasks.findIndex(t => t.id === task.id);
            state.tasks[index] = task;
        },
        deleteTask(state, id) {
            const index = state.tasks.findIndex(t => t.id === id);
            state.tasks.splice(index, 1);
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await instanceAxios.get('/api/tasks');
                commit('setTasks', response.data['hydra:member']);
            } catch (error) {
                console.log(error);
            }
        },
        async addTask({ commit }, task) {
            try {
                if (task.attachedTo == null) {
                    task.attachedTo = undefined;
                }

                const response = await instanceAxios.post('/api/tasks', task);
                commit('addTask', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async updateTask({ commit }, task) {
            try {
                const response = await instanceAxios.patch(`/api/tasks/${task.id}`, task, {
                    headers: {
                        'Content-Type': 'application/merge-patch+json'
                    }
                });
                commit('updateTask', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTask({ commit }, id) {
            try {
                await instanceAxios.delete(`/api/tasks/${id}`);
                commit('deleteTask', id);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default taskStore;