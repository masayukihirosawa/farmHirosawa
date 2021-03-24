<template>
  <div>
    <v-container style="height: 1500px;">
      <v-row>
        <v-col class="d-md-flex">
          <v-img
            :src="item.img"
            class="my-5 my-md-10 mx-auto mx-md-5"
            width="500px"
          ></v-img>
          <v-card
            class="flex-column my-5 my-md-10 mx-auto mx-md-5"
            width="500px"
            flat
          >
            <v-card flat>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti obcaecati maiores
              </v-card-text>
              <v-card-title>¥ {{ item.price }}</v-card-title>
            </v-card>
            <v-card flat class="mt-md-16">
              <v-card-actions>
                <v-select
                  :value="1"
                  :items="quantityRange"
                  label="数量"
                  @change="(value) => changeItemQuantity(value, item.id)"
                >
                </v-select>
              </v-card-actions>
              <!-- カートに入れるボタンと、カートに追加しました。のダイアログ -->
              <v-card-actions>
                <v-dialog max-width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="addToCart(item)" v-bind="attrs" v-on="on">
                      カートに入れる
                      <v-icon>
                        mdi-cart-outline
                      </v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar flat>
                        <v-toolbar-title class="mx-auto"
                          >カートに追加しました。</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-actions class="pa-8 justify-center">
                        <v-btn
                          class="mx-auto"
                          rounded
                          large
                          outlined
                          min-width="180"
                          :to="{ name: 'cart' }"
                        >
                          カートを見る
                        </v-btn>
                      </v-card-actions>
                      <v-card-actions class="justify-end">
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon></v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
            <!-- ここまでダイアログ -->
          </v-card>
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("resetItemQuantity");
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("resetItemQuantity");
    next();
  },
};
</script>
