<template>
  <div id="app">
    <h3>Add Customers</h3><br>
    <form @submit.prevent class="wrappForm">
  <div class="form-group">
    <label for="name">Name</label>
    <input v-model="newCustomer.name" type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="name">Email</label>
    <input v-model="newCustomer.email" type="email" class="form-control" id="email" placeholder="Email">
  </div>
  <button  @click = "addCustomer" type="submit" class="btn btn-primary btn-sm">Submit</button>
</form><br><br>
   
 <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(customer, key) in customers" :key="key">
      <td>{{ customer.name }}</td>
      <td>{{ customer.email }}</td>
      <button @click = "deleteCustomer(customer)" type="button" class="btn btn-danger btn-sm">Delete</button>
      <span>
        <router-link :to="{name:'LatestPurchases',params: {id:customer.id}}" class="btn">Latest Purchases</router-link>
      </span>
      
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import { customerService } from  '../services/CustomerService.js';

export default {
  name: 'AppCustomers',
  data(){
      return{
          customers: customerService.list(),
          newCustomer:{ product:[] }
      }
  },

  methods:{
      deleteCustomer(customer)
      {
          customerService.delete(customer);
      },

    addCustomer()
    {
        customerService.addNewCustomer(this.newCustomer);
        this.newCustomer = { product:[]};
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

.wrappForm{
    width:40%;
    margin:0 auto;
}
</style>
