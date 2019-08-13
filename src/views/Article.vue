<template>
  <div id="article" ref="article">
    <div class="article-title">{{title}}</div>
    <div class="article-tags">
      <div class="article-tag"
           v-for="(value, index) in tags"
           :index="index">
        #{{value}}
      </div>
    </div>
    <div ref="article_content">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import hljs from 'highlight.js'

  export default {
    name: "Article",
    data() {
      return {
        title: "",
        tags: [],
        content: ""
      }
    },
    mounted() {
      let vm = this

      // load markdown css
      let markdownCss = document.createElement('link')
      markdownCss.rel = 'stylesheet'
      markdownCss.href = '/stylesheet/markdown.css'
      document.head.appendChild(markdownCss)

      let highlightCss = document.createElement('link')
      highlightCss.rel = 'stylesheet'
      highlightCss.href = '/stylesheet/github.css'
      document.head.appendChild(highlightCss)

      // load data
      axios({
        method: 'get',
        url: '/data/article.json',
        responseType: 'json'
      }).then(res => {
        let article = res.data.data.find(item => {
          return item.url === vm.$route.path
        })
        vm.title = article.title
        vm.tags = article.tags
        // load content
        axios({
          method: 'get',
          url: '/data/articles/' + vm.$route.params.id + '.txt',
          responseType: 'text'
        }).then(res => {
          vm.$refs.article_content.innerHTML = res.data
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block)
          })
        })
          .catch(err => {
            vm.$refs.article_content.innerHTML = err
          })
      })
        .catch(err => {
          vm.$refs.article.innerHTML = err
        })
    }
  }
</script>

<style scoped lang="scss">

  html {
    background: #ffffff;
  }

  #article {
    width: 80%;
    max-width: 800px;
    text-align: left;
    padding: 16px 0 48px;
    background: #ffffff;
    box-sizing: border-box;
  }

  .article-title {
    margin: 12px 0 0;
    font-size: 1.8em;
    font-weight: 300;
  }

  .article-tags {
    margin: 10px 0 48px;
    display: flex;
    flex-flow: row;
    color: #ff9700;
    font-size: 0.9em;
    font-weight: 500;
  }

  .article-tag {
    margin: 0 12px 0 0;
  }
</style>