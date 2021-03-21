<template>
  <div>
    <v-progress-linear :active="loading" :indeterminate="loading" fixed>
    </v-progress-linear>
    <v-overlay :value="overlay"> </v-overlay>
    <!-- ------------ -->
    <v-container style="max-width: 500px;">
      <v-card elevation="0" class="mt-4" max-width="400">
        <v-card-title>ショッピングカート</v-card-title>
        <v-card-text v-if="!cartItems.length">
          ショッピングカートの中に商品がございません。
        </v-card-text>
      </v-card>
      <v-row>
        <v-col
          v-for="item in cartItems"
          :key="item.id"
          class="mt-10 justify-center"
          cols="12"
        >
          <v-card class="mx-auto" width="500" outlined>
            <v-img
              :src="item.img"
              class="mt-6 ml-6 mr-6"
              max-width="300"
            ></v-img>
            <v-list-item class="ma-4">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.price }}円</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="mb-2 justify-end">
              <v-list-item-action>
                <v-select
                  :value="item.quantity"
                  :items="quantityRange"
                  label="数量"
                  @change="(value) => changeCartItemQuantity(value, item.id)"
                >
                </v-select>
                <v-btn @click="cartItemRemove(item)">削除</v-btn>
              </v-list-item-action>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ma-10 justify-center">
        <v-list-item-action>
          <v-list-item-title v-if="cartItems.length"
            >合計金額: {{ cartTotalPrice }}</v-list-item-title
          >
          <v-btn
            v-if="cartItems.length"
            @click="checkOut()"
            elevation="2"
            class="mt-4"
            >ご注文を確定する</v-btn
          >
        </v-list-item-action>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantityRange: [...Array(10).keys()].map((i) => ++i),
      loading: false,
      overlay: false,
    };
  },
  mounted() {
    if (localStorage.getItem("cartItems")) {
      try {
        this.$store.state.cartItems = JSON.parse(
          localStorage.getItem("cartItems")
        );
      } catch (e) {
        localStorage.removeItem("cartItems");
      }
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    changeCartItemQuantity(value, id) {
      this.$store.commit("changeCartItemQuantity", { value, id });
      console.log(this.$store.state.cartItems);
    },
    cartItemRemove(item) {
      this.$store.dispatch("cartItemRemove", item);
    },
    checkOut() {
      this.loading = true;
      this.overlay = true;
      setTimeout(this.toCheckOut, 1500);
      setTimeout(() => this.$store.dispatch("cartItemsRemove"), 1500);
      setTimeout(() => (this.loading = false), 1500);
      setTimeout(() => (this.overlay = false), 1500);
    },
    toCheckOut() {
      this.$router.push("/checkOut");
    },
  },
};
</script>
