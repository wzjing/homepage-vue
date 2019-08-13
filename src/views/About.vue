<template>
  <div id="about">
    <div class="interview">

      <div class="interview--title">Android Developer</div>

      <div class="interview--profile">
        <div class="interview--pair">
          <div class="interview--name">LOCATION</div>
          <div class="interview--value">{{location}}</div>
        </div>
        <div class="interview--pair">
          <div class="interview--name">EXPERIENCE</div>
          <div class="interview--value">{{experience}} Yr.</div>
        </div>
        <div class="interview--pair">
          <div class="interview--name">EMAIL</div>
          <div class="interview--value interview--email" @click="sendEmail">{{mail}}</div>
        </div>
      </div>

      <div class="interview--skill">
        <div class="interview--name">SKILL</div>
        <div class="interview--skill--list">
          <div class="interview--skill--item"
               v-for="(value, index) in abilities"
               :key="index">
            #{{value}}
          </div>
        </div>
      </div>

      <div class="interview--project">
        <div class="interview--name">APPS</div>
        <div class="interview--project--list">
          <router-link class="interview--project--item"
                       v-for="(value, index) in apps"
                       :key="index"
                       :to="value.url">
            <img class="interview--project--item--icon"
                 width="40px"
                 height="40px"
                 :src="value.logo"
                 :alt="value.name"/>
          </router-link>
        </div>
      </div>

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
    /*user-select: none;*/

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
    flex-shrink: 0;
    flex-grow: 0;
    font-size: 16px;
    font-weight: bold;
    width: 120px;
    text-align: left;
  }

  .interview--value {
    font-size: 1.0em;
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
      flex-flow: row;
      flex-wrap: wrap;
    }
  }

  .interview--skill--item {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    color: #6e6e6e;
    margin: 16px 24px 16px 0;
    font-size: 16px;
    font-weight: 500;

    @media screen and (max-width: 819px) {
      margin: 0 24px 16px 0;
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
    user-select: text;

    &:hover {
      color: #0091ea;
    }

    &:active {
      color: #0091ea;
    }
  }

</style>
