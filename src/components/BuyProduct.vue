<template>
  <div id="app">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ product.title }}</td>
      <td>{{ product.quantity }}</td>
    </tr>
  </tbody>
</table><br>

<form @submit.prevent v-if="this.product.quantity > 0" >
    <select v-model='selected'>
        <option v-for='(customer,index) in customers' :key='index' :value='customer'>
        {{customer.firstName}} {{customer.lastName}}</option>
    </select>
    <button @click="confirmButton" type="submit" class="btn confrim btn-sm">Confirm</button>
    <router-link class='btn cancel btn-sm'  to='/products'>Cancle</router-link>
    </form>
    
    <div v-else>
        <router-link class='btn cancel btn-sm'  to='/products'>Go Back to Products</router-link>
    </div>    
  </div>
</template>

<script>

import { customerService } from  '../services/CustomerService.js';
import { productService } from  '../services/ProductService.js';

export default {
  name: 'BuyProduct',
  props: ['id'],
 

  data(){
    return{
      customers:customerService.list(),
      selected:{},
    }
  },
   created(){ 
            this.product = productService.find(this.id);
        },
     methods:{
        confirmButton(){
           if(!this.selected.id){
               alert('Please select one user.')
           }else{
                customerService.addProduct(this.selected,this.product);
                productService.decrement(this.product);
                this.selected = {};
           }
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

.confrim{
    background-color:green;
    color:white;
    margin:0px 10px 0px 10px;
}

.cancel{
    background-color:red;
    color:white;
}

</style>
