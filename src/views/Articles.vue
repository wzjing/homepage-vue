<template>
  <div id="articles">
    <div class="filter">
      <div class="filter--title">Articles</div>
      <div class="filter--list">
        <div v-for="(value, index) in filters"
             :key="index"
             class="filter--item"
             :class="{'filter--item--selected' : filterIndex === index}"
             @click="filterIndex = index">
          {{value}}
        </div>
      </div>
    </div>
    <div class="content-list">
      <router-link class="content-item"
                   v-for="(value, index) in filterList"
                   :key="index"
                   :to="value.url">
        <ArticleItem :title="value.title"
                     :brief="value.brief"
                     :cover="value.cover"
                     :tags="value.tags"/>
      </router-link>
    </div>
  </div>
</template>

<script>
  import ArticleItem from '@/components/ArticleItem.vue'
  import axios from 'axios'

  export default {
    name: "Articles",
    components: {
      ArticleItem
    },
    data() {
      return {
        filterIndex: 0,
        filters: [
          "ALL",
          "ANDROID",
          "LINUX",
          "FFMPEG",
          "OPENGL",
          "WEB"
        ],
        articles: []
      }
    },
    computed: {
      filterList: function () {
        let vm = this
        if (vm.filters[vm.filterIndex] === "ALL") {
          return vm.articles
        } else {
          return vm.articles.filter((item) => {
            return item.tags.find((tag) => {
              return vm.filters[vm.filterIndex] === tag
            })
          })
        }
      }
    },
    methods: {
      arrayToString(arr) {
        let arrStr = ''
        arr.forEach((value, index) => {
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
          vm.articles = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>

<style scoped lang="scss">
  #articles {
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
    text-decoration: none;
  }

</style>