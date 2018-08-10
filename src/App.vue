<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Store App <i class="fas fa-shopping-cart"></i></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
       <router-link to="/customers" class="nav-item nav-link">Customers</router-link>
       <router-link to="/products" class="nav-item nav-link">Products</router-link>
    </div>
  </div>
</nav>
<router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    AppCustomers,
    AppProducts
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
