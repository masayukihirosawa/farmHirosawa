<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title @click="toHome" class="title"
        >Hirosawa Farm</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-title @click="toCart" class="title"
        >Cart<v-icon>
          mdi-cart-outline
        </v-icon></v-toolbar-title
      >
    </v-app-bar>
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  methods: {
    toggleSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    },
    toHome() {
      this.$router.push("/");
    },
    toCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.title {
  cursor: pointer;
}
</style>
