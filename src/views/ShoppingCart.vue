<template>
  <div>
    <h2>Your Cart</h2>
    <p v-show="!cartItems.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="item in cartItems"
        :key="item.id">
        {{ item.title }} - {{ item.price }} x {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('cartItems')) {
      try {
        this.$store.state.cartItems = JSON.parse(localStorage.getItem('cartItems'));
      } catch(e) {
        localStorage.removeItem('cartItems');
      }
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },

}
</script>