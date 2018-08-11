<template>
  <div id="app">
    <h3>List of products</h3><br>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
       <th scope="col">Quantitiy</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, key) in products" :key="key">
      <td>{{ product.title }}</td>
      <td>{{ product.quantity }}</td> 
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import { productService } from  '../services/ProductService.js';

export default {
  name: 'AppProducts',

  data(){
    return{
      products:productService.list(),
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
