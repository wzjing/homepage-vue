<template>
  <div class="home">
    <div class="video-cover">
      <video src="intro.mp4" muted loop width="100%" height="100%">

      </video>
      <div class="play-button">
        <SVGPlay/>
        <div class="play-button--text">介绍</div>
      </div>
    </div>

    <div class="work-list">
      <div class="work-list--title">LATEST WORK</div>
      <div class="work-list--works">
        <div class="work" v-for="(work,index)  in works" :key="index">
          <img :src="work.cover" class="work--cover" width="100%" height="100%"/>
          <div class="work--content">
            <div class="work--title">{{work.title}}</div>
            <div class="work--description">{{work.description}}</div>
          </div>
        </div>

        <div class="work--more">MORE</div>
      </div>
    </div>
  </div>
</template>

<script>
  import SVGPlay from '@/assets/ic_play.svg'
  import PNGCover1 from '@/assets/cover1.png'
  import PNGCover2 from '@/assets/cover2.png'
  import PNGCover3 from '@/assets/cover3.png'
  import PNGCover4 from '@/assets/cover4.png'

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
            title: 'OpenGL ES Introduce',
            description: '在Android Native中使用OpenGL ES'
          },
          {
            cover: PNGCover4,
            title: 'Material Design UX',
            description: '为你的App添加Material Design规范的用户交互动画'
          }
        ]
      }
    },
    components: {
      SVGPlay
    },
    updated() {
      let el = document.querySelector('.video-cover')
      let width = window.getComputedStyle(el, null).getPropertyValue('width').replace('px', '')
      el.style.height = `${width*3/4}px`
      console.log(`width: ${width}`)
    }
  }
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .video-cover {
    position: relative;
    background: #ffffff;
    box-sizing: border-box;

    video {
      background: #ffffff;
      object-fit: cover;
      object-position: center;
    }
  }

  .play-button {
    position: absolute;
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 8px 14px;
    background: #ffffff;
    right: 10%;
    bottom: 10%;
    cursor: pointer;
    user-select: none;
    border-radius: 2px;
    box-shadow: 0 2px 10px 0 rgba(#000000, 0.16);
  }

  .play-button--text {
    margin-left: 10px;
    color: #434343;
    font-size: 14px;
  }

  .work-list {
    display: flex;
    flex-flow: column;
    margin-top: 10px;
  }

  .work-list--title {
    text-align: start;
    font-size: 16px;
    color: #000;
  }

  .work-list--works {
    margin-top: 8px;
    display: flex;
    flex-flow: row;
  }

  .work {
    position: relative;
    margin-right: 4px;
    width: 22vw;
    height: 18vw;
    background: #474747;
    cursor: pointer;
    user-select: none;
    &:hover {
      box-shadow: 0 2px 10px 0 rgba(#000000, 0.16);
    }
  }

  .work--cover {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 80%;

    &:hover {
      opacity: 100%;
    }
  }

  .work--content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 16px 14px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
    max-lines: 2;
  }

  .work--title {
    font-size: 16px;
    color: #ffffff;
  }

  .work--description {
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

  .work--more {
    display: inline-block;
    align-self: center;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    transform-origin: center;
    transform: rotate(90deg);
    user-select: none;
  }

</style>


