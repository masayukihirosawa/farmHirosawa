<template>
  <div>
    <v-container style="height: 1500px;">
      <v-row>
        <v-col class="d-md-flex justify-space-around">
          <v-img :src="item.img" class="my-12 mx-auto" width="500"></v-img>
          <div class="ma-xs-6 ma-md-12">
            <h1>{{ item.title }}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              obcaecati maiores impedit! Asperiores aliquid recusandae suscipit
              totam quas in animi ut quo fugit voluptates, facilis veniam sed
              soluta voluptatum possimus!
            </p>
            <h3>¥ {{ item.price }}</h3>

            <v-select
              :value="1"
              :items="quantityRange"
              label="数量"
              @change="(value) => changeItemQuantity(value, item.id)"
            >
            </v-select>
            <v-btn @click="addToCart(item)">
              カートに入れる
              <v-icon>
                mdi-cart-outline
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!--
  5 : md(960px><1264px)以上の時、display-flexを効かせる。justify-space-aroundで子要素同士で間隔を開ける。
  6 : my-12で、y軸にmargin: 48px;を適用します。
      mx-autoで、コンテンツを水平方向にセンタリング。
  7 : ma-xs-6で、xs(<600px)以上の時、margin: 24px; を効かせる。
      ma-md-12で、md(960px><1264px)以上の時、margin: 48px; を効かせる。
  -->

<script>
export default {
  props: ["id"],
  data() {
    return {
      item: {},
      quantityRange: [...Array(10).keys()].map((i) => ++i),
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    changeItemQuantity(value, id) {
      console.log({ value, id }); //変更後の数量と、変更したアイテムのid
      // ここでvuexのvalueを変更するmutationをcommitしたい。
      this.$store.commit("changeItemQuantity", { value, id });
    },
    // カートに追加する処理。
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
      this.saveCart();
      this.toCart();
    },
    saveCart() {
      const parsed = JSON.stringify(this.$store.state.cartItems);
      localStorage.setItem("cartItems", parsed);
    },
    toCart() {
      this.$router.push("/cart");
    },
  },
  mounted() {
    this.item = this.$store.getters.getItemById(
      parseInt(this.$route.params.id, 10)
    );
    //parseIntが無いと、リロードしたら{{ item.~~ }}が消える。
  },
};
</script>
