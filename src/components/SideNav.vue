<template>
  <v-navigation-drawer v-model="$store.state.drawer" fixed temporary>
    <v-list-item two-line>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    </v-list-item>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link" exact>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard", link: { name: "home" } },
        { title: "About", icon: "mdi-forum", link: { name: "about" } },
      ],
    };
  },
  methods: {
    toggleSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    },
  },
};
</script>
