<template>
  <div class="appbar">
    <SVGLogo class="logo" @click="$router.push('/')"/>
    <div class="menu">
      <router-link
              v-for="(menu, index) in menus"
              :key="index"
              :to="menu.path">
        {{menu.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import SVGLogo from '@/assets/icon/ic_logo.svg'

  export default {
    name: "Appbar",
    components: {
      SVGLogo
    },
    data() {
      return {
        menus: [
          {
            path: '/articles',
            name: 'ARTICLES'
          },
          {
            path: '/works',
            name: 'CODE & DESIGN'
          },
          {
            path: '/about',
            name: 'ABOUT'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  $bar-height: 64px;

  .appbar {
    position: relative;
    width: 100%;
    height: $bar-height;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    padding: 0 24px;
    box-sizing: border-box;
    background: #ffffff;
    user-select: none;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);

    @media screen and (max-width: 500px) {
      justify-content: flex-start;
      padding: 0 12px;
    }
  }

  .logo {
    flex: 0 0 auto;
    width: 36px;
    height: 36px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .menu {
    flex: 0 0 auto;
    height: $bar-height;
    display: flex;
    flex-flow: row;
    align-items: center;

    a {
      height: $bar-height;
      line-height: $bar-height;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      color: rgba(#000000, 0.5);
      margin: 0 18px;
      text-decoration: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      @media screen and (max-width: 500px) {
        margin: 0 12px;
        font-size: 12px;
      }

      &.router-link-exact-active {
        color: rgba(#000000, 0.8);
        border-bottom: #0091ea 2px solid;
      }

      &:hover.router-link-exact-active {
        color: rgba(#000000, 0.5);

        @media screen and (max-width: 500px) {
          color: rgba(#000000, 0.8);
        }
      }

      &:active.router-link-exact-active {
        color: rgba(#000000, 0.5);
      }

      &:hover {
        color: rgba(#000000, 0.3);
      }
    }
  }

</style>