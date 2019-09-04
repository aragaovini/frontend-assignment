import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        selectedMenu: {
            label: 'Company data',
            path: '/'
        }
    },
    getters: {
        GET_SELECTED_MENU: state => state.selectedMenu
    },
    mutations: {
        SET_SELECTED_MENU: (state, payload) => {
            state.selectedMenu = payload
        }
    }
})