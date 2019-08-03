<template>
  <div id="home">
    <div class="poster-layout">
      <SVGPoster class="poster--view"/>
    </div>

    <div class="work-layout">
      <div class="work-title">LATEST WORK</div>
      <div class="work-list">
        <component class="work-item"
                   v-for="(value, index) in works"
                   :key="index"
                   :title="value.title"
                   :brief="value.brief"
                   :cover="value.cover"
                   :tags="value.tags"
                   :is="value.com"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Article from '@/components/Article.vue'
  import Image from '@/components/Image.vue'
  import Animation from '@/components/Animation.vue'
  import SVGPlay from '@/assets/icon/ic_play.svg'
  import SVGPoster from '@/assets/img/poster.svg'
  import IMGCode from '@/assets/article/code.jpg'
  import IMGCamera from '@/assets/article/camera.jpg'
  import IMGOpenGLES from '@/assets/article/opengles.jpg'
  import IMGMaterialDesign from '@/assets/article/material-design.jpg'
  import AnimGame from '@/assets/animation/game.mp4'

  export default {
    name: 'home',
    components: {
      SVGPlay,
      SVGPoster
    },
    data() {
      return {
        works: [
          {
            com: Article,
            title: 'What\'s New in Android MVVM 2019?',
            brief: '使用谷歌官方的MVVM框架构建程序结构',
            cover: IMGCode,
            tags: [
              'ANDROID',
              'MVVM'
            ]
          },
          {
            com: Article,
            title: 'Use GPU to Accelerate Video Encode',
            brief: '利用Android的硬件加速视频编码',
            cover: IMGCamera,
            tags: [
              'ENCODE',
              'GPU'
            ]
          },
          {
            com: Article,
            title: 'OpenGL ES in Android Native',
            brief: '在Android Native中使用OpenGL ES',
            cover: IMGOpenGLES,
            tags: [
              'OPEN-GL',
              'GRAPHIC'
            ]
          },
          {
            com: Article,
            title: 'Google Material Design UX Introduce',
            brief: '为你的App添加Material Design规范的用户交互动画',
            cover: IMGMaterialDesign,
            tags: [
              'DESIGN',
              'UX'
            ]
          },
          {
            com: Image,
            title: 'Art of Code',
            brief: 'A picture of code',
            cover: IMGCode,
            tags: [
              'DESIGN',
              'UX'
            ]
          },
          {
            com: Image,
            title: 'Art of Code',
            brief: 'A picture of code',
            cover: IMGCode,
            tags: [
              'DESIGN',
              'UX'
            ]
          },
          {
            com: Animation,
            title: 'The Crew',
            brief: 'UBISOFT made this sandbox racing game with open world. ',
            cover: AnimGame,
            tags: [
              'DESIGN',
              'UX'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">

  @import "../styles/theme.scss";

  #home {
    width: var(--content-width);
    flex: 1 1 auto;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-sizing: border-box;

    @media screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media screen and (min-width: 800px) and (max-width: 1199px) {
      width: 800px;
    }

    @media screen and (min-width: 501px) and (max-width: 799px) {
      width: 400px;
    }

    @media screen and (max-width: 500px) {
      width: 360px;
    }
  }

  .poster-layout {
    position: relative;
    flex: 1 1 auto;
    width: calc(100% - 40px);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    margin: 20px;

    @media screen and (min-width: 800px) {
      height: 600px;
    }

    @media screen and (min-width: 501px) and (max-width: 799px) {
      height: 400px;
    }

    @media screen and (max-width: 500px) {
      height: 280px;
      width: 320px;
    }
  }

  .poster--view {
    flex: 0 0 100%;
    width: 100%;
    user-select: none;
    font-family: PosterFont, serif;
  }

  .work-layout {
    position: relative;
    flex: 0 0 auto;
    width: auto;
    align-self: flex-start;
    display: flex;
    flex-flow: column;
    margin-top: 20px;
    box-sizing: border-box;
  }

  .work-title {
    text-align: start;
    font-size: 18px;
    color: #4f4f4f;
    margin: 0 0 0 20px;
  }

  .work-list {
    position: relative;
    margin: 10px 0 0;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .work-item {
    flex: 0 0 auto;
  }

</style>


