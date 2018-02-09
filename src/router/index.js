import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/indexPage'
import SinginPage from '@/pages/singinPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage
    },
    {
      path: '/singin',
      name: 'singin',
      component: SinginPage
    }
  ]
})
