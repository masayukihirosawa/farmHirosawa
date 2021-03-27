<template>
  <div>
    <v-container>
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
              <v-card-text>{{ item.text }}</v-card-text>
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
              <v-card-actions>
                <v-dialog max-width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <!-- ↑ダイアログが呼び出される。 -->
                    <v-btn @click="addToCart(item)" v-bind="attrs" v-on="on">
                      カートに入れる
                      <v-icon>
                        mdi-cart-outline
                      </v-icon>
                    </v-btn>
                  </template>
                  <!----- ここから、カートに追加しましたのダイアログ ----->
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
            <!----- ここまでダイアログ ----->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
      this.$store.dispatch("changeItemQuantity", { value, id });
    },
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
      parseInt(this.$route.params.id, 10) //parseIntが無いと、リロードしたら{{ item.~~ }}が消える。
    );
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

<!--
ホーム画面で商品を押したら遷移する、アイテム詳細ページです。
このページでユーザーは、
・商品の数量を選択する（changeItemQuantity()）
・カートに追加する（addToCart() & saveCart()）
ことが出来ます。


script内の説明
・changeItemQuantity()
  数量選択ボタンのメソッド。アイテムの数量を変更します。
  store.jsに変更後のアイテムの数量と変更したアイテムのidを渡して、stateのitemsのquantityの値を変更しています。

・addToCart()
  カートに入れるボタンのメソッド。
  stateのcartItemsに選択したアイテムがなければ、stateのcartItemsにオブジェクトをプッシュします。
  選択したアイテムがあれば、stateのcartItemsのquantityの値を増やします。
  saveCart()を実行します。

・saveCart()
  LocalStorageに、store.jsのstateのcartItemsを保存します。

・mounted()
  params.idでアイテムの詳細を取得しています。

・beforeRouteEnter() & beforeRouteLeave()
  ページを離れたり、再読み込みをするとアイテムの数量の画面上の値はリセットされますが（:value="1"としているため）、
  vuexのstateの値はそのままのため、こちらの処理でvuexのstateの値をリセットしています。
-->
