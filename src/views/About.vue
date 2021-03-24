<template>
  <div>
    <v-img :src="img" height="40vh"></v-img>
    <h3>About</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/tsubame.jpg"),
    };
  },
};
</script>
