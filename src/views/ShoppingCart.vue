<template>
  <div>
    <v-progress-linear :active="loading" :indeterminate="loading" fixed>
    </v-progress-linear>
    <v-overlay :value="overlay"> </v-overlay>
    <h2>ショッピングカート</h2>
    <p v-if="!cartItems.length">
      <i>ショッピングカートの中に商品がございません。</i>
    </p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <v-img :src="item.img" class="my-4" width="100"></v-img>
        {{ item.title }} - {{ item.price }} x {{ item.quantity }}
        <v-select
          :value="item.quantity"
          :items="quantityRange"
          label="数量"
          @change="(value) => changeCartItemQuantity(value, item.id)"
        >
        </v-select>
        <v-btn @click="cartItemRemove(item)" elevation="2">削除</v-btn>
      </li>
    </ul>
    <p v-if="cartItems.length">商品金額: {{ cartTotalPrice }}</p>
    <p>
      <v-btn :disabled="!cartItems.length" @click="checkOut()" elevation="2"
        >ご注文を確定する</v-btn
      >
    </p>
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
  // beforeRouteLeave(to, from, next) {
  //   const isLeave = window.confirm("購入を確定しますか？");
  //   if (isLeave) {
  //     next ();
  //     }else{
  //       next(false);
  //     }
  // }
};
</script>
