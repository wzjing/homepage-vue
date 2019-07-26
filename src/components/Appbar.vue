<template>
  <div class="appbar">
    <SVGLogo class="logo" @click="$router.push('/')"/>
    <div class="menu">
      <router-link to="/work">WORK</router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/about">ABOUT</router-link>
      <SVGMenu class="menu--button"/>
    </div>
  </div>
</template>

<script>
  import SVGLogo from '@/assets/icon/ic_logo.svg'
  import SVGMenu from '@/assets/icon/ic_menu.svg'

  export default {
    name: "Appbar",
    components: {
      SVGLogo,
      SVGMenu
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
    background: #000000;
    user-select: none;
  }

  .logo {
    flex: 0 0 auto;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  .menu {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row;
    align-items: center;

    a {
      font-weight: 600;
      color: #ffffff;
      margin: 0 12px;
      text-decoration: none;

      &.router-link-exact-active {
        color: rgba(#ffffff, 0.8);
      }

      &:hover {
        color: rgba(#ffffff, 0.8);
      }
    }

    .menu--button {
      cursor: pointer;
      margin-left: 12px;
    }
  }

</style>