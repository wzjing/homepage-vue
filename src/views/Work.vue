<template>
  <div id="work" ref="work">
    <img class="work-cover" :src="'/img/2x/' + cover"/>
    <div class="work-title">{{title}}</div>
    <div class="work-brief">{{brief}}</div>
    <div class="work-tags">
      <div class="work-tag"
           v-for="(value, index) in tags"
           :key="index">
        #{{value}}
      </div>
    </div>
    <div class="work-links" :class="{'ui-hide': links.length===0}">links</div>
    <div class="work-link"
         v-for="(value, index) in links"
         :key="index">
      <div class="link-key">{{value.name}}</div>
      <a class="link-value" :href="value.url">{{value.url}}</a>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import ImageView from "@/components/ImageView.vue";

  export default {
    name: "Work",
    data() {
      return {
        cover: "",
        title: "",
        brief: "",
        tags: Array,
        links: Array
      }
    },
    components: {
      ImageView
    },
    mounted() {
      let vm = this
      // load data
      axios.get('/data/work.json')
        .then(res => {
          let work = res.data.data.find(item => {
            return item.url === vm.$route.path
          })
          vm.cover = work.cover
          vm.title = work.title
          vm.brief = work.brief
          vm.tags = work.tags ? work.tags : []
          vm.links = work.links ? work.links : []
        })
        .catch(err => {
          vm.$refs.work.innerHTML = err
        })
    }
  }
</script>

<style scoped lang="scss">

  #work {
    width: 80%;
    max-width: 600px;
    text-align: left;
    padding: 32px 0 48px;
  }

  .work-cover {
    max-width: 600px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }

  .work-title {
    margin: 12px 0 0;
    font-size: 1.8em;
    font-weight: 300;
  }

  .work-brief {
    margin: 12px 0 0;
    font-size: 1.0em;
    color: #000000;
    opacity: 0.5;
    min-height: 2.0em;
  }

  .work-tags {
    margin: 10px 0 0;
    display: flex;
    flex-flow: row;
    color: #ff9700;
    font-size: 0.9em;
    font-weight: 500;
  }

  .work-tag {
    margin: 0 12px 0 0;
  }

  .ui-hide {
    display: none;
  }

  .work-links {
    font-weight: bold;
    font-size: 1.2em;
    margin: 24px 0 10px;
  }

  .work-link {
    display: flex;
    flex-flow: row;
    padding: 4px 0;
  }

  .link-key {
    min-width: 100px;
    font-weight: bold;
    opacity: 0.5;
  }

  .link-value {
    text-decoration: none;
    color: #0091ea;
    font-weight: 700;
    font-size: 1.0em;
  }

</style>