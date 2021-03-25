# Hirosawa Farm

## 紹介

こちらは廣澤農園のECサイトのモックのソースコードです。下記の技術を用いて作成しました。

## 使用技術

- [Vue.js](https://jp.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/ja/)
  - マテリアルコンポーネントを備えたVue UIライブラリです。
- [ESLint](https://eslint.org/)
  - コードを分析し問題点を指摘してくれるツールです。
- [Prettier](https://prettier.io/)
  - コードフォーマッターです。改行やクォーテーションなどを統一できます。

## 機能

ユーザーができることは主に、
商品の数量を選択する、商品をカートに追加する、商品を購入するの三つです。
[src/views/Item.vue](https://github.com/masayukihirosawa/farmHirosawa/blob/main/src/views/Item.vue)  
[src/views/ShoppingCart.vue](https://github.com/masayukihirosawa/farmHirosawa/blob/main/src/views/ShoppingCart.vue)  
こちら2つのファイルから、[src/store.js](https://github.com/masayukihirosawa/farmHirosawa/blob/main/src/store.js)のactionsを実行して
機能を実装しています。
Item.vueとShoppingCart.vueの下部に詳細を記入しています。

## 開発手順

```bash
npm install
npm run serve // 開発用
npm run build // 本番確認用
```