import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "水菜 200g",
        prace: 100,
        img: require("@/assets/logo.png"),
      },
      {
        id: 2,
        title: "水菜 200g",
        prace: 100,
        img: require("@/assets/logo.png"),
      },
      {
        id: 3,
        title: "水菜 200g",
        prace: 100,
        img: require("@/assets/logo.png"),
      },
    ],
    drawer: false,
  },
  getters: {
    items: (state) => {
      return state.items;
    },
    getItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
  },
});
