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
        title: "ほうれん草 150g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 3,
        title: "菊菜 120g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 4,
        title: "青梗菜 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 5,
        title: "たけのこ 200g",
        price: 100,
        img: require("@/assets/hello-slide/slide-1.jpeg"),
        quantity: 1,
      },
      {
        id: 6,
        title: "つくし 50g",
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
        const item = state.items.find((item) => item.id === cartItem.id);
        return {
          title: item.title,
          price: item.price,
          quantity: cartItem.quantity,
        };
      });
    },
    cartTotalPrice: (state, getters) => {
      return getters.cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
      }, 0);
    },
  },
  mutations: {
    pushToCart(state, item) {
      state.cartItems.push({
        id: item.id,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, { id }) {
      //第2引数にCartItemを渡してるが{ id }と記述することで、その中のidのみを利用することが可能。
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.quantity++;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    addToCart({ state, commit }, item) {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (!cartItem) {
        commit("pushToCart", item);
      } else {
        commit("incrementItemQuantity", cartItem);
      }
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
  },
});
