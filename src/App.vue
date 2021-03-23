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
    height: calc(100% + 17px);
    min-height: calc(100% - #{$app-bar-height});
    overflow: hidden;
    box-sizing: content-box;
  }

  #app {
    @include font();
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - #{$app-bar-height});
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;

    box-sizing: content-box;
    overflow-y: scroll;
    padding-right: 17px;
  }

  #appbar {
    position: fixed;
    margin: auto;
    top: 0;
  }

  .router-layout {
    position: relative;
    margin: #{$app-bar-height} auto 0;
    min-height: calc(100vh - #{$app-bar-height});
  }

</style>
