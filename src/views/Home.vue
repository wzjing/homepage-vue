<template>
  <div class="home">
    <div class="poster-layout">
      <SVGPoster class="poster--view"/>
      <div class="play--button">
        <SVGPlay/>
        <div class="play-button--text">介绍</div>
      </div>
    </div>

    <div class="work-layout">
      <div class="work-title">LATEST WORK</div>
      <div class="work-list">
        <div class="work-item" v-for="(work,index)  in works" :key="index"
             :style="{backgroundImage: 'url(' + work.cover + ')'}">
          <div class="work-item--title">{{work.title}}</div>
          <div class="work-item--description">{{work.description}}</div>
        </div>

        <div class="work-list--more">MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
  import SVGPlay from '@/assets/icon/ic_play.svg'
  import SVGPoster from '@/assets/img/poster.svg'
  import PNGCover1 from '@/assets/article/cover1.jpg'
  import PNGCover2 from '@/assets/article/cover2.jpg'
  import PNGCover3 from '@/assets/article/cover3.jpg'
  import PNGCover4 from '@/assets/article/cover4.png'

  export default {
    name: 'home',
    data() {
      return {
        works: [
          {
            cover: PNGCover1,
            title: 'ANDROID MVVM',
            description: '使用谷歌官方的MVVM框架构建程序结构'
          },
          {
            cover: PNGCover2,
            title: '硬件编码',
            description: '利用Android的硬件加速视频编码'
          },
          {
            cover: PNGCover3,
            title: 'OpenGL ES Native',
            description: '在Android Native中使用OpenGL ES'
          },
          {
            cover: PNGCover4,
            title: 'Material UX',
            description: '为你的App添加Material Design规范的用户交互动画'
          }
        ]
      }
    },
    components: {
      SVGPlay,
      SVGPoster
    }
  }
</script>

<style scoped lang="scss">
  .home {
    flex: 1 1 auto;
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0 20px 20px;
    box-sizing: border-box;
  }

  .poster-layout {
    position: relative;
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 60px 40px;
    box-sizing: border-box;
    background-image: url("../assets/img/dots.jpg");
    background-size: cover;

    @media screen and (max-width: 500px) {
      padding: 20px 12px;
      height: 80vw;
    }
  }

  .poster--view {
    flex: 1 1 auto;
    width: 100%;
    align-self: center;
    user-select: none;
  }

  .play--button {
    flex: 0 0 auto;
    align-self: flex-end;
    display: inline-flex;
    flex-flow: row;
    align-items: center;
    padding: 4px 12px;
    background: #0058FF;
    cursor: pointer;
    user-select: none;
    border-radius: 2px;
  }

  .play-button--text {
    margin-left: 10px;
    color: #ffffff;
    font-size: 14px;
  }

  .work-layout {
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-flow: column;
    margin-top: 20px;
    box-sizing: border-box;
  }

  .work-title {
    text-align: start;
    font-size: 16px;
    color: #fff;
  }

  .work-list {
    position: relative;
    margin-top: 8px;
    display: flex;
    flex-flow: row;

    @media screen and (max-width: 500px) {
      flex-flow: column;
    }
  }

  .work-item {
    flex: 0 0 20%;
    height: 100%;
    position: relative;
    margin: 0 4px 0 0;
    padding: 10% 14px 16px;
    background-size: cover;
    cursor: pointer;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
    user-select: none;

    @media screen and (max-width: 500px) {
      flex: 0 0 40vw;
      width: auto;
      margin: 0 0 10px 0;

    }
  }

  .work-item--title {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
  }

  .work-item--description {
    margin-top: 6px;
    width: 100%;
    height: 32px;
    line-height: 16px;
    font-size: 14px;
    color: #ACACAC;
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .work-list--more {
    display: inline-block;
    align-self: center;
    height: 16px;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    transform-origin: center;
    transform: rotate(90deg);
    user-select: none;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      transform: rotate(0deg);
    }
  }

</style>


