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
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
}
</script>