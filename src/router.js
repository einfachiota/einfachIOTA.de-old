import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Knowledge from './views/Knowledge.vue'
import Projects from './views/Projects.vue'
import Workshop from './views/Workshop.vue'
import WorkshopPage from './views/WorkshopPage.vue'
import Coordicide from './views/Coordicide.vue'
import CoordicidePage from './views/CoordicidePage.vue'
import Tutorials from './views/Tutorials.vue'
import Imprint from './views/Imprint.vue'
import Privacy from './views/Privacy.vue'
import DevTools from './views/DevTools.vue'
import Post from './views/Post.vue'
import Page from './views/Page.vue'
import Supporter from './views/Supporter.vue'
import Stats from './views/Stats.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      path: '/workshop/',
      name: 'workshop',
      component: Workshop
    },
    {
      path: '/workshop/:workshop',
      name: 'WorkshopPage',
      component: WorkshopPage
    },
    {
      path: '/coordicide/',
      name: 'Coordicide',
      component: Coordicide
    },
    {
      path: '/coordicide/:page',
      name: 'CoordicidePage',
      component: CoordicidePage
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
      path: '/stats',
      name: 'stats',
      component: Stats
    }, 
    {
      path: '/supporter',
      name: 'supporter',
      component: Supporter
    }, 
    {
      path: '/devtools',
      name: 'devtools',
      component: DevTools
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
