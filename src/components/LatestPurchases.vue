<template>
  <div id="app">
    <h1>Latest Purchases</h1><br>
    <router-link to="/customers" class="nav-item nav-link">Back</router-link>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ customer.name }}</td>
      <td>{{ customer.email }}</td>
    </tr>
  </tbody>
</table><br>

<h5>Customer product</h5><br>
<ul class="list-group" v-for=" product in customer.products" :key="product.id">
  <li class="list-group-item">{{ product.name }}</li>
</ul>
  </div>
</template>

<script>
import { customerService } from  '../services/CustomerService.js';

export default {
  name: 'LatestPurchases',
  props: ['id'], //zato sto je u ruti props:true, umesto params dovlacenja,
  //moze ovako da ga prepozna

  data(){
      return{
       
      }
  },
        created(){ //Lifecycle Hooks ne ide u methods, ova fji je jedna od prvih koja se okida
        //prvo moramo da ga dovucemo
            this.customer = customerService.find(this.id);
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
