import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes' // imported the file with all the routes
import { store } from '../store/store';

Vue.use(VueRouter) // vue now knows we're using VueRouter

var router = new VueRouter({ // the instance of VueRouter
    mode: 'history', // its mode
    routes // the routes
})

const allowedPaths = {
  'collaborator': [
    '/home',
    '/coursedetails',
    '/collaborator-skills',
    '/collaborator-first-access'
  ],
  'company': [
    '/home-business',
    '/coursedetails',
  ],
}

const defaultRedirect = {
  'collaborator': '/home',
  'company': '/home-business',
}

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isLogged;
  const role = store.state.user.role;
  const isFirstLogin = store.state.user.isFirstLogin;

  if (!isAuthenticated) {
    if (to.fullPath === '/login') {
      next();
    } else {
      next('/login');
    }
  } else {
    if (role === 'collaborator' && isFirstLogin && to.fullPath !== '/collaborator-first-access') {
      next('/collaborator-first-access');
    } else if (allowedPaths[role].indexOf(to.fullPath) !== -1) {
      next();
    } else {
      next(defaultRedirect[role]);
    }
  }
});


export default router // export it so we can use it on other files