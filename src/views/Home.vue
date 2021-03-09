<template>
  <div>
    <Hello />
    <ItemsList />
  </div>
</template>

<script>
import Hello from "@/components/Hello";
import ItemsList from "@/components/ItemsList";
export default {
  name: "home",
  components: {
    Hello,
    ItemsList,
  },
};
</script>
