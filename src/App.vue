<template>
  <div id="app">
    <Appbar/>
    <router-view/>
  </div>
</template>

<script>
  import Appbar from '@/components/Appbar.vue'

  export default {
    components: {
      Appbar
    }
  }
</script>

<style lang="scss">

  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-flow: column;
  }
</style>
