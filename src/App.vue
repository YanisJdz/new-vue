<template>
  <div id="app">
    <HeaderPreview />
    
    <router-view/>
  </div>
</template>
<script>
import HeaderPreview from '@/components/HeaderPreview.vue'

export default {
  components: {
    HeaderPreview,
  }  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300;1,400;1,500&family=Secular+One&display=swap');
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
