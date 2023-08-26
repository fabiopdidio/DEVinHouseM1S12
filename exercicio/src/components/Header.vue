<template>
  <header class="header">
    <router-link to="/"> Funko Lab </router-link>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
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
  color: black;
  font-weight: bolder;
}
</style>
