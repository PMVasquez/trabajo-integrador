import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombreUsuario: "Inicial",
  },
  getters: {
    nombreUsuario(state) {
      return state.nombreUsuario;
    },
  },
  mutations: {
    setUsuario(state, value) {
      state.nombreUsuario = value;
    },
  },
});
