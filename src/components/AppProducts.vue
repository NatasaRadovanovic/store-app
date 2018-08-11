<template>
  <div id="app">
    <h3>List of products</h3><br>

    <i class="fas fa-search"></i> <input v-model="search" class="search" type="text" placeholder="Search products">

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
       <th scope="col">Quantitiy</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, key) in filteredProduct" :key="key">
      <td>{{ product.title }}</td>
      <td>{{ product.quantity }}</td>
      <button @click="incrementQuantity(product)" type="button" class="btn btn-success btn-sm">+</button>
      <button @click="decrementQuantity(product)" type="button" class="btn btn-danger btn-sm">-</button>

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
      search:'',
    }
  },

  methods:{
    incrementQuantity(product){
      productService.increment(product);
    },

    decrementQuantity(product){
      productService.decrement(product);
    },
  },
  computed:{
    filteredProduct:function(){
      return this.products.filter((product)=>{
      return product.title.toLowerCase().includes(this.search.toLowerCase())
       
      });
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

.search{
  border-radius:5px;
  padding:5px;
  margin-bottom:20px;
}
.fas{
  padding:10px;
}

.table{
  width:70%;
  margin:0 auto;
  margin-top:20px;
}

.btn-success, .btn-danger{
  width:30px;
  height:30px;
  margin-right:5px;
}

</style>
