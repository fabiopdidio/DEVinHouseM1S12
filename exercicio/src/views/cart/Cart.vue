<template>
  <h1 class="ml-8 mt-4">Carrinho</h1>
  <v-table class="ma-5">
    <thead>
      <tr>
        <th class="text-left">Imagem</th>
        <th class="text-left">Nome</th>
        <th class="text-left">Quantidade</th>
        <th class="text-left">Preço</th>
        <th class="text-left">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in $store.state.produtosCarrinho" :key="item.id">
        <td><img :src="item.imagem" width="30" /></td>
        <td>{{ item.nome }}</td>
        <td>{{ item.quantidade }}</td>
        <td>
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              item.preco
            )
          }}
        </td>
        <td>
          {{
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              item.quantidade * item.preco
            )
          }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
