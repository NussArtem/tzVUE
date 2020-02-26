import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        info: '',

    },
    getters: {
        getInfo(state) {
            return state.info;

        },



    },
    mutations: {
        set(state, {type, items}) {
            state[type] = items;

        },


    },
    actions: {}
});

export default store;
