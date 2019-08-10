<template>
  <div id="home">
    <div class="starter-layout">
      <div class="starter-title">Welcome to my Blog</div>
      <div class="starter-brief">This is a blog about android develop, web develop, ux design and production
      </div>
    </div>

    <div class="work-layout">
      <div class="work-list">
        <router-link class="work-item"
                     v-for="(value, index) in dataArray"
                     :key="index"
                     :to="value.url">
          <component :title="value.title"
                     :brief="value.brief"
                     :cover="value.cover"
                     :tags="value.tags"
                     :is="getComponent(value.type)"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ArticleItem from '@/components/ArticleItem.vue'
  import ImageItem from '@/components/ImageItem.vue'
  import AnimationItem from '@/components/AnimationItem.vue'
  import SVGPlay from '@/assets/icon/ic_play.svg'
  import SVGPoster from '@/assets/img/poster.svg'

  export default {
    name: 'home',
    components: {
      SVGPlay,
      SVGPoster
    },
    data() {
      return {
        dataArray: []
      }
    },
    methods: {
      getComponent(type) {
        switch (type) {
          case 0:
            return ArticleItem
          case 1:
            return ImageItem
          case 2:
            return AnimationItem
        }
      },
      arrayToString(arr) {
        let arrStr = ''
        arr.forEach((value, index)=>{
          arrStr += value
          if (index < arr.length - 1) {
            arrStr += '|'
          }
        })
        return arrStr
      }
    },
    mounted() {
      let vm = this
      axios.get('/data/article.json')
        .then(res => {
          let articles = res.data.data
          axios.get('/data/work.json')
            .then(res => {
              vm.dataArray = articles.concat(res.data.data)
            })
            .catch(err =>{
              console.log(err)
            })
        })
        .catch(err =>{
          console.log(err)
        })
    }
  }
</script>

<style scoped lang="scss">

  @import "../styles/theme.scss";

  #home {
    width: 1200px;
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

  .starter-layout {
    position: relative;
    flex: 1 1 auto;
    align-self: start;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    text-align: start;
    margin: 36px 20px 20px;
  }

  .starter-title {
    font-size: 2.0em;
    font-weight: 300;
    color: #2d2d2d;
    text-align: left;
  }

  .starter-brief {
    margin-top: 16px;
    font-size: 1.6em;
    color: #9f9f9f;
    text-align: left;
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
    text-decoration: none;
  }

</style>


