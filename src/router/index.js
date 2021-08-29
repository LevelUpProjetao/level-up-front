import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes' // imported the file with all the routes
import { store } from '../store/store';

Vue.use(VueRouter) // vue now knows we're using VueRouter

var router = new VueRouter({ // the instance of VueRouter
    mode: 'history', // its mode
    routes // the routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    if (store.state.isLogged) {
      next('/home');
    }
  } else {
    if (!store.state.isLogged) {
      next('/login');
    }
  }
  next();
});


export default router // export it so we can use it on other files