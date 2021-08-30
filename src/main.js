import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css' 
import VueRouter from 'vue-router'
import router from './router/index'
import vuetify from './plugins/vuetify'
import { store } from "./store/store";
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

Vue.use(VueRouter)

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBYlQpgZ7G0c_zXLJlKNLPhqcmf7WV6cik",
  authDomain: "levelup-97749.firebaseapp.com",
  projectId: "levelup-97749",
  storageBucket: "levelup-97749.appspot.com",
  messagingSenderId: "224986162608",
  appId: "1:224986162608:web:c2494569ca5b45802be275"
}

firebase.initializeApp(firebaseConfig)

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
