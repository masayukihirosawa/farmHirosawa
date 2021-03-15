import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 2,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 3,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 4,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 5,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 6,
        title: "水菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
    ],
    cartItems: [],
    drawer: false,
  },
  getters: {
    items: (state) => {
      return state.items;
    },
    getItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
    cartItems: (state) => {
      return state.cartItems.map((cartItem) => {
        const item = state.items.find(
          (item) => item.id === cartItem.id
        );
        return {
          title: item.title,
          price: item.price,
          quantity: cartItem.quantity,
        };
      });
    },
  },
  mutations: {
    pushToCart(state, item) {
      state.cartItems.push({
        id: item.id,
        quantity: 1,
      });
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("pushToCart", item);
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
  },
});
