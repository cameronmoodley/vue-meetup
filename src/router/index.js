import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageMeetUpDetail from '@/pages/PageMeetupDetail'
import PageMeetupFind from '@/pages/PageMeetupFind'
import PageNotFound from '@/pages/PageNotFound'
import PageLogin from '@/pages/PageLogin'
import PageRegister from '@/pages/PageRegister'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'PageHome', component: PageHome },
    ,
    {
      path: '/find',
      name: 'PageMeetupFind',
      component: PageMeetupFind
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/register',
      name: 'PageRegister',
      component: PageRegister
    },
    {
      path: '/meetups/:id',
      name: 'PageMeetUpDetail',
      component: PageMeetUpDetail
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

export default router
