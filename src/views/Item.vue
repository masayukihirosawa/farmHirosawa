<template>
  <div>
    <h3>Item {{ id }}</h3>
    <p>{{ item.id }}</p>
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    this.item = this.$store.getters.getItemById(parseInt(this.$route.params.id, 10));
    //parseIntが無いと、リロードしたら{{ item.~~ }}が消える。
  },
};
</script>
