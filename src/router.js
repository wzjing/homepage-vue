import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import(/* webpackChunkName: "works" */ './views/Works.vue')
    },

    {
      path: '/articles',
      name: 'articles',
      component: () => import(/* webpackChunkName: "articles" */ './views/Articles.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/article/:id',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue')
    },

    {
      path: '/work/:id',
      name: 'work',
      component: () => import(/* webpackChunkName: "work" */ './views/Work.vue')
    }
  ]
})
