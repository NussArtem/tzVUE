import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        info: '',
        cocktail:[]
    },
    getters: {
        getInfo(state) {
            return state.info;

        },
        getCocktail(state) {
            return state.cocktail;

        }
    },
    mutations: {
        set(state, {type, items}) {
            state[type] = items;
        }

    },
    actions: {}
});

export default store;
