import axios from 'axios';

const state = {
    user: null,
    token: null,
};

const getters = {
    isAuthenticated: state => !!state.token,
    StateUser: state => state.user,
    StateToken: state => state.token,
};

const actions = {
    login: ({ commit, dispatch }, { token, user }) => {
        commit('SET_TOKEN', token);
        commit('SET_USER', user);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
    logout: ({ commit }) => {
        commit('RESET', '');
    }
};
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_USER: (state, user) => {
        state.user = user;
    },
    RESET: state => {
        state.token = null;
        state.user = null;
    }
};
export default {
  state,
  getters,
  actions,
  mutations
};
