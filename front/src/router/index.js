/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store';

// routes template
import routeAuth from './auth';
import routePages from './pages';

// error pages
import routeError from './error';

const routes = [];

routes.push(...routeAuth);
routes.push(...routePages);

// error pages
routes.push(...routeError);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
})

// this function dynamically change the route title of app and Redirect user to login page if not logged in
router.beforeEach((to, from, next) => {
  document.title = `${to.name} - ${import.meta.env.VITE_APP_TITLE}`
  const authRoutes = ['/auths/auth-register', '/auths/auth-login','/auths/auth-reset'];
  const publicRoutes = [...authRoutes]; 
  
  /* if (localStorage.getItem('auth') && localStorage.getItem('auth') !== 'undefined') {
        store.commit('authStore/setAuthJwt', localStorage.getItem('auth'));
    }*/

    const isAuthenticated = localStorage.getItem('auth')
  
  if(publicRoutes.includes(to.path) || isAuthenticated){
    if (authRoutes.includes(to.path) && isAuthenticated) {
      next('/');
    } else {
      next();
    }
  }else{
    next('/auths/auth-login');
  }
})

export default router
