<template>
  <div>
    <v-container>
      <v-img :src="img" height="30vh" class="my-5"></v-img>
      <h1 class="mt-15">About</h1>
      <p class="mt-10">
        兵庫県・神戸市にある「廣澤農園」。<br />
        周囲を山や川に囲まれた自然豊かなこの土地で丁寧に野菜を作っています。<br /><br />
        こちらのサイトは、Vue.jsの勉強の一環で作ったECサイトのモックです。<br />
        注文ボタンを押しても何も届きませんが、是非ぽちぽちして遊んでみてください。<br /><br />
        ソースコードはこちら→
        <v-btn
          class="pa-0 mt-n1"
          color="primary"
          text
          medium
          href="https://github.com/masayukihirosawa/farmHirosawa"
          >github
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </p>
    </v-container>
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
