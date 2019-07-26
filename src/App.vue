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
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: black;
  }

  #app {
    max-width: 1280px;
    margin: auto;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    display: flex;
    flex-flow: column;
  }
</style>
