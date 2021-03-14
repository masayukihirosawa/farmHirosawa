<template>
  <div>
    <v-container style="height: 1500px;">
      <v-row>
        <v-col class="d-md-flex justify-space-around">
          <v-img :src="item.img" class="my-12 mx-auto" width="500"></v-img>
          <div class="ma-xs-6 ma-md-12">
            <h3>{{ item.title }}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              obcaecati maiores impedit! Asperiores aliquid recusandae suscipit
              totam quas in animi ut quo fugit voluptates, facilis veniam sed
              soluta voluptatum possimus!
            </p>
            <p>{{ item.prace }}円</p>
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
    };
  },
  mounted() {
    this.item = this.$store.getters.getItemById(
      parseInt(this.$route.params.id, 10)
    );
    //parseIntが無いと、リロードしたら{{ item.~~ }}が消える。
  },
};
</script>
