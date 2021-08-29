import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

// Import the plugin module here

const initialState = () => ({
    isLogged: false,
    testando: 'hello world',
    showAlert: false,
    messageAlert: "Sua skill foi criada",
    colorAlert: "Sucess"
});

Vue.use(Vuex);
const vuexLocal = new  VuexPersistence ({
    storage: window.localStorage,
    storage: window.localStorage,
    reducer: (state) => ({
        isLogged: state.isLogged,
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
        addAlert(context, value){
            context.commit("updateAlert", value);
        }
    },
    //after call mutation
    mutations: {
        updateLogged(state, value) {
            state.isLogged = value;
        },
        updateAlert(state, value) {
            console.log(value);
            state.messageAlert = value.message;
            state.colorAlert = value.color;
            state.showAlert = true
        }
    },
});
