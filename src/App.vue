<template>
  <v-app>
    <AppBar />
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    AppBar,
    SideNav,
    Footer
  },
};
</script>
