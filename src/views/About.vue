<template>
  <div id="about">
    <div class="content">
      <div class="title">Empty</div>
    </div>
  </div>
</template>

<script>
  import ICBinge from '@/assets/icon/ic_binge.png'
  import ICFro from '@/assets/icon/ic_fro.png'

  export default {
    name: 'About',
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="scss">

  @import '../styles/theme.scss';

  #about {
    position: relative;
    width: 820px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 819px) {
      width: 100%;
      padding: 0;
    }
  }

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }

  .title {
    flex: 0 0 auto;
  }

</style>
