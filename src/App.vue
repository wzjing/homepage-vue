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
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    min-height: calc(100% - 64px);
  }

  #app {
    @include font();
    position: relative;
    margin: auto;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 64px);
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
    position: relative;
    margin: 64px auto 0;
    min-height: calc(100vh - 64px);
  }

</style>
