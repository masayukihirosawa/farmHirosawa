<template>
  <v-carousel cycle max-height="500" hide-delimiters show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.img"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: require("@/assets/hello-slide/slide-1.jpg"),
        },
        {
          img: require("@/assets/hello-slide/slide-2.jpg"),
        },
        {
          img: require("@/assets/hello-slide/slide-3.jpg"),
        },
        {
          img: require("@/assets/hello-slide/slide-4.jpg"),
        },
        {
          img: require("@/assets/hello-slide/slide-5.jpg"),
        },
        {
          img: require("@/assets/hello-slide/slide-6.jpg"),
        },
      ],
    };
  },
};
</script>
