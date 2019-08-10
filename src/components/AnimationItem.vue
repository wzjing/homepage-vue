<template>
  <div class="animation"
       @mouseenter="play"
       @mouseout="reset">
    <video
            ref="videoEl"
            class="animation--cover"
            :src="cover"
            loop
            muted>
      Video is not Support
    </video>
    <div class="animation--content">
      <div class="animation--title">
        {{title}}
      </div>
      <div class="animation--brief">
        {{brief}}
      </div>
      <div class="animation--separator"></div>
      <div class="animation--tags">
        <div v-for="(tag, index) in tags" class="animation--tag" :index="index">
          {{tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AnimationItem',
    props: {
      cover: String,
      title: String,
      brief: String,
      tags: Array
    },
    methods: {
      play() {
        this.$refs.videoEl.play()
      },
      reset() {
        this.$refs.videoEl.pause()
        this.$refs.videoEl.currentTime = 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .animation {
    position: relative;
    width: 360px;
    height: 480px;
    margin: 20px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    user-select: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
    text-align: left;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      transform: translate(0, -16px);
      box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.16);
    }

    @media screen and (max-width: 500px) {
      width: 320px;
      height: 400px;
    }
  }

  .animation--cover {
    flex: 1 1 auto;
    width: 100%;
    height: 320px;
    object-fit: cover;
    pointer-events: none;

    @media screen and (max-width: 500px) {
      height: 240px;
    }
  }

  .animation--content {
    flex: 0 1 auto;
    width: calc(100% - 40px);
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    margin: 20px;
    pointer-events: none;
  }

  .animation--title {
    flex: 0 0 auto;
    color: #000;
    opacity: 0.8;
    font-size: 24px;
  }

  .animation--brief {
    flex: 0 0 auto;
    color: #000;
    opacity: 0.5;
    font-size: 14px;
    text-align: start;
    margin-top: 10px;
    line-height: 18px;
    max-height: 36px;
    max-lines: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .animation--separator {
    flex: 0 0 1px;
    width: 100%;
    background-color: #000;
    opacity: 0.1;
    margin: 16px 0;
  }

  .animation--tags {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
  }

  .animation--tag {
    flex: 0 0 auto;
    margin-right: 20px;
    color: #000;
    opacity: 0.5;
    font-size: 13px;
  }
</style>