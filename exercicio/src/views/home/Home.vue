<template>
  <div class="ma-4">
    <h1>Produtos</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="pa-3 mt-5">
            <v-img :src="product.image" aspect-ratio="1"></v-img>
            <v-card-title> Funko Homem Aranha</v-card-title>
            <v-card-title> 10x de R$22,60 </v-card-title>
            <v-card-text>R$226,00</v-card-text>
            <v-btn color="black">Adicionar</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      axios
        .get('http://localhost:3000/produtos')
        .then((response) => {
          this.product = response.data;
          console.log(response.data);
        })
        .catch(() => {
          alert('Desculpe');
        });
    },
  },
  data() {
    return {
      product: {
        image:
          'https://i5.walmartimages.com/seo/Funko-POP-Marvel-Spider-Man-FFH-Spider-Man-Upgraded-Suit_91441bc4-17a4-4712-80da-0f573275e2f8_1.066a3f627e0330deb26edda686b0b8f2.png?odnHeight=200&odnWidth=200&odnBg=FFFFFF',
      },
    };
  },
};
</script>

<style></style>
