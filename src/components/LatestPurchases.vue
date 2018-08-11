<template>
  <div id="app">
    <h3>Latest Purchases</h3><br>
  
  <button class="btn btn-danger btn-sm" >
    <router-link to="/customers"><span>Back</span></router-link>
  </button>
   
   <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <i class="fas fa-user-alt"></i>{{ customer.firstName }}
     </td>
      <td>{{ customer.lastName }}</td>
      <td>
        <i class="fas fa-envelope-square"></i>{{ customer.email }}</td>
    </tr>
  </tbody>
</table><br>

<h5>
  <i class="fas fa-cart-arrow-down"></i> Customer product
</h5><br>

<ul class="list-group" v-for=" product in customer.products" :key="product.id">
  <li class="list-group-item">{{ product.title }}</li>
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

 span{
   color:white;
}
</style>
