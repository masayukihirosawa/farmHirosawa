<template>
  <v-list>
    <v-list-item v-for="(item, index) in items" :key="index">
      <v-list-item-content>
        <v-list-item>
          <v-img :src="item.img" max-height="100" max-width="100"></v-img>
        </v-list-item>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-title>{{ item.prace }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "水菜", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜", prace: 100, img: require("@/assets/logo.png") },
        { title: "水菜", prace: 100, img: require("@/assets/logo.png") },
      ],
    };
  },
};
</script>

<!-- https://qiita.com/hiroyukiwk/items/a26e767d193ef8d9155b ←requireについて -->