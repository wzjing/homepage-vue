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
        location: 'BEIJING',
        experience: 3,
        mail: 'wzjing@163.com',
        abilities: ["UX", "JNI", "OpenGL", "FFmpeg", "WebApp", "VUE"],
        apps: [
          {
            name: 'Binge',
            logo: ICBinge,
            url: '/work/binge'
          },
          {
            name: 'Fro',
            logo: ICFro,
            url: '/work/fro'
          }
        ]
      }
    },
    methods: {
      sendEmail() {
        parent.location.href = `mailto:wzjing103@163.com?subject=面试邀请`
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
    flex-flow: column;
  }

  .title {
    flex: 1 1 auto;
  }

</style>
