import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

// Import the plugin module here

const initialState = () => ({
    isLogged: false,
    user: null,
});

Vue.use(Vuex);
const vuexLocal = new  VuexPersistence ({
    storage: window.localStorage,
    storage: window.localStorage,
    reducer: (state) => ({
        isLogged: state.isLogged,
        user: state.user,
    }),
});

export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    getters: {
        
    },
    state: initialState,
    // first call action
    actions: {
        setLogged(context, value) {
          context.commit("updateLogged", value);
        },
        setUser(context, value) {
          context.commit("updateUser", value);
        }
    },
    //after call mutation
    mutations: {
        updateLogged(state, value) {
          state.isLogged = value;
        },
        updateUser(state, value) {
          state.user = {...value};
        }
    },
});
