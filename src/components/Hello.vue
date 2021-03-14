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
          img: require("@/assets/hello-slide/slide-1.jpeg"),
        },
        {
          img: require("@/assets/hello-slide/slide-2.jpeg"),
        },
        {
          img: require("@/assets/hello-slide/slide-3.jpeg"),
        },
        {
          img: require("@/assets/hello-slide/slide-4.jpeg"),
        },
        {
          img: require("@/assets/hello-slide/slide-5.jpeg"),
        },
        {
          img: require("@/assets/hello-slide/slide-6.jpeg"),
        },
      ],
    };
  },
};
</script>
