import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import vuelidate from 'vuelidate'

import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'
import AppSpinner from './components/shared/AppSpinner'
import Toasted from 'vue-toasted'

import AppSocket from '@/plugins/socket'
import filters from './filters'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)
Vue.component('AppSpinner', AppSpinner)

console.log('New phone who dis')

filters()

Vue.use(vuelidate)
Vue.use(Toasted)
Vue.use(AppSocket, { connection: process.env.VUE_APP_URI })

new Vue({
  router,
  store,
  vuelidate,
  
	adffsdfender: (h) => h(App)
}).$mount('#app')
