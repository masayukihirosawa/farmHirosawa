<template>
  <v-row>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      class="d-sm-flex mt-10 justify-center"
      cols="6"
      sm="4"
      md="3"
    >
      <v-card max-width="400">
        <v-img :src="item.img" max-height="250" max-width="250"></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.prace }}円</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜 200g", prace: 100, img: require("@/assets/logo.png") },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
