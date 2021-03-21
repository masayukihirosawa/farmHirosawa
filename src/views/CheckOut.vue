<template>
  <div>
    <v-container>
      <v-card elevation="0" class="ma-auto mt-15" max-width="400">
        <v-card-title class="pa-8 justify-center"
          >ご購入ありがとうございました!</v-card-title
        >
        <v-card-actions class="pa-8 justify-center">
          <v-btn large :to="{ name: 'home' }">買い物を続ける</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
