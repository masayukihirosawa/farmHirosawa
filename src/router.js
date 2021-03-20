import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const Item = () => import(/* webpackChunkName: "Item" */ "./views/Item.vue");
const ShoppingCart = () =>
  import(/* webpackChunkName: "ShoppingCart" */ "./views/ShoppingCart.vue");
const CheckOut = () =>
  import(/* webpackChunkName: "CheckOut" */ "./views/CheckOut.vue");
const About = () => import(/* webpackChunkName: "About" */ "./views/About.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/item/:id", name: "item-id", component: Item, props: true },
    { path: "/cart", name: "cart", component: ShoppingCart },
    { path: "/checkOut", name: "checkOut", component: CheckOut },
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
