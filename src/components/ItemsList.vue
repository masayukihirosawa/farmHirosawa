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
      <v-hover v-slot="{ hover }">
        <v-card
          max-width="400"
          :to="{ name: 'item-id', params: { id: item.id } }"
          :elevation="hover ? 6 : 2"
        >
          <v-img :src="item.img" max-height="250" max-width="250"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.prace }}円</v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "水菜 200g",
          prace: 100,
          img: require("@/assets/logo.png"),
        },
        {
          id: 2,
          title: "水菜 200g",
          prace: 100,
          img: require("@/assets/logo.png"),
        },
        {
          id: 3,
          title: "水菜 200g",
          prace: 100,
          img: require("@/assets/logo.png"),
        },
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
