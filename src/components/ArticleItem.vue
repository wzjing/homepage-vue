<template>
  <div class="article">
    <div class="article--content">
      <div class="article--title">
        {{title}}
      </div>
      <div class="article--brief">
        {{brief}}
      </div>
      <img class="article--cover" :src="'/img/1x/' + cover" alt="IMG">
    </div>
    <div class="article--separator"></div>
    <div class="article--tags">
      <div v-for="(tag, index) in tags" class="article--tag" :index="index">
        {{tag}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleItem',
    props: {
      title: String,
      brief: String,
      cover: String,
      tags: Array
    }
  }
</script>

<style scoped lang="scss">
  .article {
    position: relative;
    width: 360px;
    height: 480px;
    padding: 36px 20px 20px;
    margin: 20px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
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

  .article--content {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .article--title {
    flex: 0 0 auto;
    color: #000;
    opacity: 0.8;
    font-size: 24px;
  }

  .article--brief {
    flex: 0 0 auto;
    color: #000;
    opacity: 0.5;
    font-size: 14px;
    text-align: start;
    margin: 10px 0 20px;
  }

  .article--cover {
    flex: 0 0 auto;
    width: 100%;
    height: 160px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
      height: 140px;
    }
  }

  .article--separator {
    flex: 0 0 1px;
    width: 100%;
    background-color: #000;
    opacity: 0.1;
    margin: 16px 0;
  }

  .article--tags {
    flex: 0 0 auto;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
  }

  .article--tag {
    flex: 0 0 auto;
    margin-right: 20px;
    color: #000;
    opacity: 0.5;
    font-size: 13px;
  }
</style>