import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/indexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/about',
      name: 'about',
      component: IndexPage
    }
  ]
})
