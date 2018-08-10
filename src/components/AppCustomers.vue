<template>
  <div id="app">
    <h1>App Customers</h1>
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
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import { customerService } from  '../services/CustomerService.js';

export default {
  name: 'App Customers',
  data(){
      return{
          customers: customerService.list()
      }
  },

  methods:{
      deleteCustomer(customer)
      {
          customerService.delete(customer);
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
