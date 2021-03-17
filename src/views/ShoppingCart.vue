<template>
  <div>
    <h2>Your Cart</h2>
    <p v-show="!cartItems.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.title }} - {{ item.price }} x {{ item.quantity }}
        <v-select
          :value="item.quantity"
          :items="quantityRange"
          label="数量"
          @change="(value) => changeCartItemQuantity(value, item.id)"
        >
        </v-select>
      </li>
    </ul>

    <p>商品金額: {{ cartTotalPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantityRange: [...Array(10).keys()].map((i) => ++i),
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
  },
};
</script>
