<template>
  <v-app>
    <AppBar />
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    AppBar,
    SideNav,
  },
};
</script>
