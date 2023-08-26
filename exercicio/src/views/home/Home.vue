<template>
  <h1 class="ml-8 mt-4">Produtos</h1>
  <div class="list-products">
    <v-container>
      <v-row>
        <v-card
          class="pa-2 ma-2"
          width="30%"
          v-for="product in products"
          :key="product.id"
          elevation="10"
        >
          <v-img :src="product.imagem" aspect-ratio="1"></v-img>
          <v-card-title>{{ product.nome }}</v-card-title>
          <v-card-title
            >10x de
            {{
              new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                product.parcela
              )
            }}</v-card-title
          >
          <v-card-text>R$226,00</v-card-text>
          <v-btn
            color="success"
            class="ma-4"
            @click="() => this.$store.dispatch('adicionarProduto', { product })"
          >
            Comprar
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: []
    }
  },
  computed: {
    produtosRestantes() {
     
      return this.products.filter((product) => {
        const itemExiste = this.$store.state.produtosCarrinho.find((item) => item.id === product.id)
        if (itemExiste) return false
        return true
      })
    }
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    loadProducts() {
      axios({
        url: 'http://localhost:3000/produtos',
        method: 'GET'
      })
        .then((response) => {
          this.products = response.data
        })
        .catch(() => {
          alert('Desculpe, não foi possivel recuperar os produtos')
        })
    }
  }
}
</script>

<style>
.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
