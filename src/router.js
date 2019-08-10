import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import Articles from './views/Articles.vue'
import Work from './views/Work.vue'
import Works from './views/Works.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/works',
      name: 'code-design',
      component: Works
    },

    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },

    {
      path: '/work/:id',
      name: 'work',
      component: Work
    }
  ]
})
