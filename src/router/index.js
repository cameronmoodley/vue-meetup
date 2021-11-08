import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageMeetUpDetail from '@/pages/PageMeetupDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'PageHome', component: PageHome },
    {
      path: '/meetups/:id',
      name: 'PageMeetUpDetail',
      component: PageMeetUpDetail
    }
  ],
  mode: 'history'
})

export default router
