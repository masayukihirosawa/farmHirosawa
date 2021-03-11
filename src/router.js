import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Item from "./views/Item";
import About from "./views/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/item/:id", name: "item-id", component: Item },
    { path: "/about", name: "about", component: About },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
