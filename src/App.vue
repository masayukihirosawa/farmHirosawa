<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title @click="toHome" class="title">Hirosawa Farm</v-toolbar-title>
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
  methods: {
    toggleSideMenu () {
      this.$store.dispatch('toggleSideMenu')
    },
    toHome () {
      this.$router.push("/")
    }
  
  }
};
</script>

<style scoped>
.title{
  cursor: pointer;
}
</style>