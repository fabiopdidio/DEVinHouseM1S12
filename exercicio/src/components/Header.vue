<template>
  <v-layout>
    <v-app-bar color="black">
      <v-app-bar-title class="ml-8">
        <router-link to="/"> Funko Lab </router-link>
      </v-app-bar-title>

      <v-btn icon>
        <router-link to="/carrinho">
          {{ carrinhoLength }}
          <v-icon color="#FFF" class="mr-10">mdi-cart</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  computed: {
    carrinhoLength() {
      return this.$store.state.produtosCarrinho.length;
    }
  }
}
</script>

<style>
.header {
  padding: 10px 2em;
  width: 100%;
  height: 60px;
  background-color: #d7d5d5;
}

a {
  text-decoration: none;
  font-size: 1.5em;
  color: white;
  font-weight: bolder;
}
</style>
