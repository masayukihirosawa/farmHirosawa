import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    items: [
      {
        id: 1,
        title: "水菜 200g",
        text:
          "サラダの定番野菜、水菜。 ツナ缶を使ったサラダ、お肉を使ったサラダ、豆腐サラダ、、、。 何と合わせてもいい感じになるのいろいろアレンジしてみてくださいね。",
        price: 100,
        img: require("@/assets/mizuna.jpg"),
        quantity: 1,
      },
      {
        id: 2,
        title: "ほうれん草 150g",
        text:
          "寒さにあたって甘みの増したほうれん草。 お浸しや和えもの、いろんなおかずにアレンジしてみてくださいね。",
        price: 100,
        img: require("@/assets/mizuna.jpg"),
        quantity: 1,
      },
      {
        id: 3,
        title: "菊菜 120g",
        text:
          "お鍋料理の定番野菜、菊菜。 さっと湯通してお浸しにしても、シャキシャキして美味しいですよ。",
        price: 100,
        img: require("@/assets/mizuna.jpg"),
        quantity: 1,
      },
      {
        id: 4,
        title: "キャベツ 1玉",
        text:
          "春に採れる春キャベツ。 葉が柔らかく、加熱料理はもちろんサラダなどの生食でも美味しくいただけます。",
        price: 200,
        img: require("@/assets/mizuna.jpg"),
        quantity: 1,
      },
      {
        id: 5,
        title: "ブロッコリー 1個",
        text:
          "サラダやお弁当に大活躍なブロッコリー。 マヨネーズやつぶマスタードが欲しくなる。 茎の部分も美味しいですよ。",
        price: 150,
        img: require("@/assets/mizuna.jpg"),
        quantity: 1,
      },
      {
        id: 6,
        title: "つくし 50g",
        text:
          "毎年にょきにょき生えてくるつくし。 シンプルに醤油で炒めたり、佃煮にすると美味しいですよ。",
        price: 100,
        img: require("@/assets/mizuna.jpg"),
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
          id: item.id,
          title: item.title,
          price: item.price,
          img: item.img,
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
        quantity: item.quantity,
      });
    },
    incrementItemQuantity(state, { id }) {
      const item = state.items.find((item) => item.id === id);
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.quantity = cartItem.quantity + item.quantity;
      if (cartItem.quantity >= 11) {
        cartItem.quantity = 10;
      }
    },
    changeItemQuantity(state, { value, item }) {
      item.quantity = value;
    },
    changeCartItemQuantity(state, { value, cartItem }) {
      cartItem.quantity = value;
      const parsed = JSON.stringify(state.cartItems);
      localStorage.setItem("cartItems", parsed);
    },
    resetItemQuantity(state) {
      state.items.map((item) => {
        item.quantity = 1;
      });
    },
    cartItemRemove(state, { id }) {
      const cartItem = state.cartItems.find((cartItem) => cartItem.id === id);
      const index = state.cartItems.indexOf(cartItem);
      state.cartItems.splice(index, 1);
      const parsed = JSON.stringify(state.cartItems);
      localStorage.setItem("cartItems", parsed);
    },
    cartItemsRemove(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    resetDrawer(state) {
      state.drawer = false;
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
    changeItemQuantity({ state, commit }, { value, id }) {
      const item = state.items.find((item) => item.id === id);
      commit("changeItemQuantity", { value, item });
    },
    changeCartItemQuantity({ state, commit }, { value, id }) {
      const cartItem = state.cartItems.find((cartItem) => cartItem.id === id);
      commit("changeCartItemQuantity", { value, cartItem });
    },
    resetItemQuantity({ commit }) {
      commit("resetItemQuantity");
    },
    cartItemRemove({ state, commit }, item) {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      commit("cartItemRemove", cartItem);
    },
    cartItemsRemove({ commit }) {
      commit("cartItemsRemove");
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    resetDrawer({ commit }) {
      commit("resetDrawer");
    },
  },
});
