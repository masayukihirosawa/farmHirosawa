<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Hirosawa Farm</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <div class="space">
      <p>space</p>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.space {
  height: 1000px;
  margin: 500px;
}
</style>
