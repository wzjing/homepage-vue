<template>
  <div id="app">
    <Appbar id="appbar"/>
    <router-view class="router-layout"/>
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

  @import "styles/theme.scss";

  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #fcfcfc;
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
  }

  #app {
    @include font();
    position: relative;
    margin: auto;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  }

  #appbar {
    position: fixed;
    top: 0;
  }

  .router-layout {
    margin: 64px auto 0;
  }

</style>
