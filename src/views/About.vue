<template>
  <div id="about">
    <div class="interview">

      <div class="interview--top-line"></div>

      <div class="interview--title">Android Developer</div>

      <div class="interview--profile">
        <div class="interview--pair">
          <div class="interview--name">位置</div>
          <div class="interview--value">北京</div>
        </div>
        <div class="interview--pair">
          <div class="interview--name">开发经验</div>
          <div class="interview--value">3 年</div>
        </div>
        <div class="interview--pair">
          <div class="interview--name">电子邮件</div>
          <div class="interview--value interview--email">wzjing103@163.com</div>
        </div>
      </div>

      <div class="interview--skill">
        <div class="interview--name">能力</div>
        <div class="interview--skill--list">
          <div class="interview--skill--item"
               v-for="(value, index) in abilities"
               :key="index">
            <img class="interview--skill--item--icon"
                 :src="value.logo"
                 alt="ICON"/>
            <div class="interview--skill--item--name">
              {{value.brief}}
            </div>
          </div>
        </div>
      </div>

      <div class="interview--project">
        <div class="interview--name">上线项目</div>
        <div class="interview--project--list">
          <a class="interview--project--item"
             v-for="(value, index) in apps"
             :key="index"
             :href="value.url"
             target="_blank">
            <img class="interview--project--item--icon"
                 width="40px"
                 height="40px"
                 :src="value.logo"
                 :alt="value.name"/>
            <div class="interview--project--item--name">
              {{value.name}}
            </div>
          </a>
        </div>
      </div>

      <div class="interview--button button" @click="sendEmail">发送邮件</div>
    </div>

    <div class="interview--button-layout">
      <div class="interview--button--float button" @click="sendEmail">发送邮件</div>
    </div>
  </div>
</template>

<script>
  import ICBinge from '@/assets/icon/ic_binge.png'
  import ICFro from '@/assets/icon/ic_fro.png'

  import ICUX from '@/assets/icon/ic_ux.png'
  import ICNative from '@/assets/icon/ic_native.png'
  import ICOpenGL from '@/assets/icon/ic_opengl.png'
  import ICFFmpeg from '@/assets/icon/ic_ffmpeg.png'
  import ICJs from '@/assets/icon/ic_js.png'

  export default {
    name: 'About',
    data() {
      return {
        location: '北京',
        experience: 3,
        mail: 'wzjing@163.com',
        abilities: [
          {
            logo: ICUX,
            brief: "动画和交互"
          },
          {
            logo: ICNative,
            brief: "Native"
          },
          {
            logo: ICOpenGL,
            brief: "OpenGL编程"
          },
          {
            logo: ICFFmpeg,
            brief: "音视频编解码"
          },
          {
            logo: ICJs,
            brief: "Web App"
          }
        ],
        apps: [
          {
            name: '品各',
            logo: ICBinge,
            url: 'https://soft.shouji.com.cn/down/139356.html'
          },
          {
            name: '飞赴',
            logo: ICFro,
            url: 'http://theappfro.com/'
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
  #about {
    width: 820px;
    display: flex;
    flex-flow: column;

    @media screen and (max-width: 819px) {
      width: 100%;
      padding: 0;
    }
  }

  .interview {
    width: 800px;
    position: relative;
    box-sizing: border-box;
    margin: 48px auto 0;
    padding: 36px 80px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #ffffff;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    text-align: start;
    color: #000000;
    user-select: none;

    @media screen and (max-width: 819px) {
      margin: 20px auto 80px;
      width: 100%;
      box-shadow: none;
      padding: 24px 40px;
    }
  }

  .interview--top-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #000;

    @media screen and (max-width: 819px) {
      display: none;
    }
  }

  .interview--title {
    font-size: 40px;
    font-weight: 300;

    @media screen and (max-width: 819px) {
      font-size: 32px;
    }
  }

  .interview--pair {
    display: flex;
    flex-flow: column;
    margin: 10px 0;

    @media screen and (max-width: 819px) {
      flex-flow: row;
      align-items: center;
    }
  }

  .interview--name {
    font-size: 16px;
    font-weight: bold;
    width: 88px;
    text-align: left;
  }

  .interview--value {
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
    margin-top: 20px;

    @media screen and (max-width: 819px) {
      margin-top: 0;
    }
  }

  .interview--profile {
    width: 100%;
    display: flex;
    margin-top: 48px;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: 819px) {
      flex-flow: column;
    }
  }

  .interview--skill {
    margin-top: 36px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    @media screen and (max-width: 819px) {
      flex-flow: row;
    }
  }

  .interview--skill--list {
    margin-top: 20px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    @media screen and (max-width: 819px) {
      justify-content: flex-start;
      margin-top: 0;
      flex-flow: column;
    }
  }

  .interview--skill--item {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 24px 0 0;
    @media screen and (max-width: 819px) {
      margin: 0 0 10px 0;
      flex-flow: row;
    }
  }

  .interview--skill--item--icon {
    width: 80px;
    height: 80px;

    @media screen and (max-width: 819px) {
      width: 48px;
      height: 48px;
    }
  }

  .interview--skill--item--name {
    width: auto;
    margin: 8px 0 0 0;
    font-size: 12px;
    color: #000;
    @media screen and (max-width: 819px) {
      margin: 0 0 0 8px;
    }
  }

  .interview--project {
    margin-top: 36px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    @media screen and (max-width: 819px) {
      flex-flow: row;
    }
  }

  .interview--project--list {
    margin-top: 20px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;

    @media screen and (max-width: 819px) {
      margin-top: 0;
    }
  }

  .interview--project--item {
    margin: 0 24px 0 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.8;
    }

    @media screen and (max-width: 819px) {
      &:hover {
        opacity: 1.0;
      }
    }
  }

  .interview--project--item--icon {
    opacity: 1.0;
  }

  .interview--project--item--name {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    opacity: 0.8;
  }

  .interview--email {
    text-decoration: underline;
    text-underline: #0091ea;
    cursor: pointer;

    &:active {
      color: #0091ea;
    }
  }

  .button {
    background-color: #373737;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
    text-transform: capitalize;
    margin: 40px 0 0;
    line-height: 20px;
    padding: 7px 18px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: #616161;

      @media screen and (max-width: 819px) {
        background-color: #373737;
      }
    }

    &:active {
      background-color: #282828;
    }
  }

  .interview--button {
    flex: 0 0 auto;
    align-self: center;

    @media screen and (max-width: 819px) {
      display: none;
    }
  }

  .interview--button-layout {
    position: fixed;
    float: bottom;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    @media screen and (max-width: 819px) {
      display: flex;
    }
  }

  .interview--button--float {
    margin: 24px;
    pointer-events: all;
    border-radius: 23px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.16);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

</style>
