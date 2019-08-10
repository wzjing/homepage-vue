<template>
  <div id="work-design">
    <div class="filter">
      <div class="filter--title">
        Articles
      </div>
      <div class="filter--list">
        <div
                v-for="(value, index) in filters"
                :key="index"
                class="filter--item"
                :class="{'filter--item--selected' : filterIndex === index}"
                @click="filterIndex = index">
          {{value}}
        </div>
      </div>
    </div>
    <div class="content-list">
      <component
              class="content-item"
              v-for="(value, index) in filterList"
              :key="index"
              :title="value.title"
              :brief="value.brief"
              :cover="value.cover"
              :tags="value.tags"
              :is="value.com"/>
    </div>
  </div>
</template>

<script>
  import AnimationItem from '@/components/AnimationItem.vue'
  import ImageItem from '@/components/ImageItem.vue'
  import IMGCode from '@/assets/article/code.jpg'
  import IMGCamera from '@/assets/article/camera.jpg'
  import IMGOpenGLES from '@/assets/article/opengles.jpg'
  import IMGMaterialDesign from '@/assets/article/material-design.jpg'

  export default {
    name: "work-design",
    data() {
      return {
        filterIndex: 0,
        filters: [
          "ALL",
          "PERSONAL",
          "ONLINE",
          "WORK",
          "DESIGN"
        ],
        articles: [
          {
            com: ImageItem,
            title: 'What\'s New in Android MVVM 2019?',
            brief: '使用谷歌官方的MVVM框架构建程序结构',
            cover: IMGCode,
            tags: [
              'ANDROID',
              'MVVM'
            ]
          },
          {
            com: ImageItem,
            title: 'Use GPU to Accelerate Video Encode',
            brief: '利用Android的硬件加速视频编码',
            cover: IMGCamera,
            tags: [
              'ANDROID',
              'MEDIA'
            ]
          },
          {
            com: ImageItem,
            title: 'OpenGL ES in Android Native',
            brief: '在Android Native中使用OpenGL ES',
            cover: IMGOpenGLES,
            tags: [
              'OPENGL',
              'ANDROID'
            ]
          },
          {
            com: ImageItem,
            title: 'Google Material Design UX Introduce',
            brief: '为你的App添加Material Design规范的用户交互动画',
            cover: IMGMaterialDesign,
            tags: [
              'DESIGN',
              'ANDROID'
            ]
          },
          {
            com: ImageItem,
            title: 'Google Material Design UX Introduce',
            brief: '为你的App添加Material Design规范的用户交互动画',
            cover: IMGMaterialDesign,
            tags: [
              'DESIGN',
              'ANDROID'
            ]
          }
        ]
      }
    },
    computed: {
      filterList: function () {
        let vue = this
        if (vue.filters[vue.filterIndex] === "ALL") {
          return vue.articles
        } else {
          return vue.articles.filter((item) => {
            return item.tags.find((tag) => {
              return vue.filters[vue.filterIndex] === tag
            })
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">

  #work-design {
    display: flex;
    padding-top: 54px;
    flex-flow: row;
    align-items: flex-start;

    @media screen and (min-width: 1200px) {
      width: 1200px;
    }

    @media screen and (max-width: 1220px) {
      width: 100%;
      flex-flow: column;
      padding: 0;
      align-items: center;
    }
  }

  .filter {
    flex: 0 0 400px;
    text-align: start;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    user-select: none;
    @media screen and (max-width: 1220px) {
      position: fixed;
      z-index: 2;
      flex: 0 0 64px;
      flex-flow: column;
      align-items: center;
      width: 100%;
      background-color: #fcfcfc;
      box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.08);
    }

    @media screen and (max-width: 599px) {
      display: none;
    }
  }

  .filter--title {
    color: #000;
    font-size: 40px;
    font-weight: 300;

    @media screen and (max-width: 1220px) {
      display: none;
    }
  }

  .filter--list {
    display: flex;
    flex-flow: column;
    color: rgb(144, 148, 156);
    font-size: 13px;
    font-weight: 500;
    margin-top: 18px;

    @media screen and (max-width: 1220px) {
      flex-flow: row;
      height: 64px;
      margin-top: 0;
    }
  }

  .filter--item {
    margin: 16px 0;
    cursor: pointer;
    box-sizing: border-box;

    @media screen and (max-width: 1220px) {
      line-height: 64px;
      margin: 0 24px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .filter--item--selected {
    color: rgba(75, 79, 86);
    @media screen and (max-width: 1220px) {
      border-bottom: #0091ea 2px solid;
    }
  }

  .content-list {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media screen and (max-width: 1220px) {
      margin-top: 72px;
    }

    @media screen and (min-width: 800px) {
      width: 800px;
    }

    @media screen and (min-width: 501px) and (max-width: 799px) {
      width: 400px;
    }

    @media screen and (max-width: 600px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 500px) {
      width: 360px;
    }
  }

  .content-item {
    flex: 0 0 auto;
  }

</style>