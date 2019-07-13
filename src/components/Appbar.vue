<template>
  <div class="appbar">
    <SVGLogo class="logo" @click="$router.push('/')"/>
    <nav class="menu">
      <router-link to="/project">工程</router-link>
      <router-link to="/article">文章</router-link>
      <router-link to="/design">设计</router-link>
      <router-link to="/about">关于我</router-link>
    </nav>
    <div></div>
  </div>
</template>

<script>
  import SVGLogo from '@/assets/logo.svg'

  export default {
    name: "Appbar",
    components: {
      SVGLogo
    }
  }
</script>

<style scoped lang="scss">

  .appbar {
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    padding: 0 16px;
    box-sizing: border-box;
    /*box-shadow: 0 2px 4px 0 rgba(#000, 0.08);*/
    background: #ffffff;
  }

  .logo {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  .menu {
    margin-right: 32px;

    a {
      font-weight: bold;
      color: #9f9f9f;
      margin: 0 12px;
      text-decoration: none;

      &.router-link-exact-active {
        color: #000;
      }

      &:hover {
        color: #000;
      }
    }
  }

</style>