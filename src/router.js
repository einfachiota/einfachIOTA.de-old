import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Knowledge from './views/Knowledge.vue'
import Projects from './views/Projects.vue'
import Tutorials from './views/Tutorials.vue'
import Imprint from './views/Imprint.vue'
import Privacy from './views/Privacy.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'
import Supporter from './views/Supporter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: Imprint
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/supporter',
      name: 'supporter',
      component: Supporter
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post
    },
    {
      path: '/pages/:slug',
      name: 'page',
      component: Page
    },
  ]
})
