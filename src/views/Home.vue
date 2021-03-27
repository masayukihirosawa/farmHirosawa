<template>
  <div>
    <v-container>
      <v-img :src="img" height="30vh" class="my-5"></v-img>
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
              :to="{ name: 'item-id', params: { id: item.id } }"
              :elevation="hover ? 6 : 2"
            >
              <v-img :src="item.img"></v-img>
              <v-card-subtitle>{{ item.title }}</v-card-subtitle>
              <v-card-text>{{ item.price }}円</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      img: require("@/assets/ホーム.jpg"),
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>

<!-- サイトに訪れた時に、一番初めに描画されるページです。 -->