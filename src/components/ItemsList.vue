<template>
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
  </v-container>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
