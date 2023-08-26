<template>
  <h1 class="ml-8 mt-4">Produtos</h1>
  <div class="list-products">
    <v-container>
      <v-row>
          <v-card class="pa-2 ma-2" width="30%" v-for="product in products" :key="product.id" elevation="10">
            <v-img :src="product.imagem" aspect-ratio="1"></v-img>
            <v-card-title>{{ product.nome }}</v-card-title>
            <v-card-title>10x de {{ product.parcela }}</v-card-title>
            <v-card-text>R$226,00</v-card-text>
            <v-btn color="success" class="ma-4" @click="() => adicionarAoCarrinho(product)">Comprar</v-btn>
          </v-card>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      produtosCarrinho: [],
      messageNoEstadoGlobal: this.$store.state.message
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios({
        url: 'http://localhost:3000/produtos',
        method: 'GET'
      })
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(() => {
          alert('Desculpe, não foi possível recuperar os produtos');
        });
    },
    adicionarAoCarrinho(product) {
    }
  }
};
</script>

<style>
.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
