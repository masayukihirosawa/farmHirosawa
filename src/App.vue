<template>
  <v-app>
    <v-app-bar app  hide-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Hirosawa Farm</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-container style="height: 1500px;"></v-container>
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
