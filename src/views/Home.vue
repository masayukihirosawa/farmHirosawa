<template>
  <div>
    <v-img :src="img" height="40vh"></v-img>
    <!-- ItemsList -->
    <v-container style="height: 1500px;">
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
      img: require("@/assets/home.jpg"),
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>
