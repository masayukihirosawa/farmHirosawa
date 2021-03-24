<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    <v-toolbar-title @click="toHome" style="cursor:pointer;"
      >Hirosawa Farm</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-title @click="toCart" style="cursor:pointer;"
      >Cart<v-icon>
        mdi-cart-outline
      </v-icon>
    </v-toolbar-title>
    <v-badge
      v-if="cartItems.length"
      color="rgb(237, 86, 27)"
      dot
      bordered
      offset-x="8"
      offset-y="-2"
    >
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
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