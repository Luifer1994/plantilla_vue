<template>
  
   
      <Nav></Nav>
      <div class="content">
        <sidebar></sidebar>

        <router-view />

        <Footer></Footer>
      </div>
  
</template>
<script>
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,
    Sidebar,
    Footer
  },
};
</script>
<style>
.router-link-exact-active {
  color: #2c7be5 !important; 
  font-weight: bold;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  
  color: #2c3e50;
}

 */
</style>
