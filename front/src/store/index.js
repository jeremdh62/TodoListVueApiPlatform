import { createStore } from "vuex";
import axios from "axios";

import authStore from "./auth";
import sidebarStore from "./sidebar";
import taskStore from "./tasks";
import userStore from "./users";

// Get URL API from .env
const URL_API = import.meta.env.VITE_APP_URL_API;

// Create instance axios
const instanceAxios = axios.create({
  baseURL: URL_API
});

// Add token to header
instanceAxios.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('auth'))?.token;
    if (token && config.url != '/auth' && config.url != '/auth/token/refresh') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }
);

// Refresh token
instanceAxios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 401 && error.response.data['message'] == 'Expired JWT Token') {
      if (store.state.authStore.numberOfRefresh > 3) {
        await store.dispatch('authStore/logout');
      }
      
      store.state.authStore.numberOfRefresh += 1;
      
      const isRefresh = await store.dispatch('authStore/refreshJWT');
      
      if (isRefresh.status === 200) {
        error.config.headers['Authorization'] = `Bearer ${isRefresh.data.token}`;
        return instanceAxios.request(error.config);
      } else {
        await store.dispatch('authStore/logout');
      }

      
    }
    return Promise.reject(error);
  }
);

setInterval(async () => {
  store.state.authStore.numberOfRefresh = 0;
}, 1000 * 60 * 5);

// Create store by modules
const store = createStore({
  modules: {
    authStore: authStore,
    sidebarStore: sidebarStore,
    taskStore: taskStore,
    userStore: userStore,
  },
});

export { store, instanceAxios };