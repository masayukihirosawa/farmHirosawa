<template>
  <div>
    <h3>Item {{ id }}</h3>
    <p>{{ ItemData.id }}</p>
    <p>{{ ItemData.title }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    ItemData() {
      const dataId = parseInt(this.$route.params.id, 10); //params.idを10進数の値として、dataIdに代入する。
      const data = this.$store.state.items.find((items) => items.id === dataId);
      return data;
    },
  },
};
</script>
