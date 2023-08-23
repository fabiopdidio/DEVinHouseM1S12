import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router
