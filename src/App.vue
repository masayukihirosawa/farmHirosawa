<template>
  <v-app>
    <v-app-bar app absolute hide-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Hirosawa Farm</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
    <v-container style="height: 1500px;"></v-container>
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
};
</script>
